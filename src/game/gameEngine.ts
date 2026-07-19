import type {
  AnswerId,
  GameState,
  LifelineId,
  NpcId,
  Question,
  TransitionQuestion,
} from '../types/game'

export const createInitialState = (): GameState => ({
  screen: 'intro',
  currentIndex: 0,
  checkpoint: 0,
  activeTransition: null,
  lives: 3,
  currentReward: 0,
  usedLifelines: {
    fifty: false,
    npc: false,
    poll: false,
    theory: false,
  },
  eliminatedAnswers: [],
  attemptedAnswers: [],
  selectedAnswer: null,
  answerStatus: null,
  consultedNpc: null,
  unlockedEvidence: [],
  answeredQuestions: [],
  correctOnFirstAttempt: [],
})

export type GameAction =
  | { type: 'OPEN_BRIEFING' }
  | { type: 'START_GAME' }
  | { type: 'ANSWER'; answer: AnswerId; question: Question }
  | { type: 'RETRY' }
  | { type: 'ADVANCE'; question: Question }
  | { type: 'CONTINUE_AFTER_TRANSITION' }
  | { type: 'USE_LIFELINE'; id: LifelineId; question: Question; npcId?: NpcId }
  | { type: 'RESTART_STAGE' }
  | { type: 'RESET' }

const resetQuestionState = (state: GameState): GameState => ({
  ...state,
  selectedAnswer: null,
  answerStatus: null,
  attemptedAnswers: [],
  eliminatedAnswers: [],
  consultedNpc: null,
})

function appendUnique(values: number[], value: number) {
  return values.includes(value) ? values : [...values, value]
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'OPEN_BRIEFING':
      return { ...state, screen: 'briefing' }
    case 'START_GAME':
      return { ...state, screen: 'game' }
    case 'ANSWER': {
      if (state.answerStatus || state.lives === 0) return state
      const isCorrect = action.answer === action.question.correctAnswer
      const firstAttempt = state.attemptedAnswers.length === 0
      return {
        ...state,
        selectedAnswer: action.answer,
        answerStatus: isCorrect ? 'correct' : 'wrong',
        attemptedAnswers: isCorrect
          ? state.attemptedAnswers
          : [...state.attemptedAnswers, action.answer],
        lives: isCorrect ? state.lives : Math.max(0, state.lives - 1),
        currentReward: isCorrect ? action.question.coin : state.currentReward,
        unlockedEvidence: isCorrect
          ? appendUnique(state.unlockedEvidence, action.question.id)
          : state.unlockedEvidence,
        answeredQuestions: isCorrect
          ? appendUnique(state.answeredQuestions, action.question.id)
          : state.answeredQuestions,
        correctOnFirstAttempt: isCorrect && firstAttempt
          ? appendUnique(state.correctOnFirstAttempt, action.question.id)
          : state.correctOnFirstAttempt,
      }
    }
    case 'RETRY':
      return { ...state, selectedAnswer: null, answerStatus: null }
    case 'ADVANCE': {
      if (state.answerStatus !== 'correct') return state
      if (action.question.id === 15) {
        return {
          ...resetQuestionState(state),
          screen: 'ending',
          checkpoint: 15,
          activeTransition: null,
        }
      }
      if ([5, 10, 13].includes(action.question.id) && action.question.transitionAfter) {
        const transitionId = action.question.id as TransitionQuestion
        return {
          ...resetQuestionState(state),
          screen: 'transition',
          checkpoint: transitionId === 5 ? 5 : transitionId === 10 ? 10 : state.checkpoint,
          activeTransition: transitionId,
        }
      }
      return resetQuestionState({ ...state, currentIndex: state.currentIndex + 1 })
    }
    case 'CONTINUE_AFTER_TRANSITION':
      if (!state.activeTransition) return state
      return resetQuestionState({
        ...state,
        screen: 'game',
        currentIndex: state.activeTransition,
        activeTransition: null,
      })
    case 'USE_LIFELINE':
      if (state.usedLifelines[action.id] || state.answerStatus || state.lives === 0) {
        return state
      }
      if (action.id === 'npc' && !action.npcId) return state
      return {
        ...state,
        usedLifelines: { ...state.usedLifelines, [action.id]: true },
        consultedNpc: action.id === 'npc' ? action.npcId ?? null : state.consultedNpc,
        eliminatedAnswers:
          action.id === 'fifty'
            ? [...action.question.lifelines.eliminate]
            : state.eliminatedAnswers,
      }
    case 'RESTART_STAGE': {
      const stageStartIndex = state.checkpoint >= 10 ? 10 : state.checkpoint >= 5 ? 5 : 0
      const safeReward = state.checkpoint >= 10 ? 32000 : state.checkpoint >= 5 ? 1000 : 0
      return resetQuestionState({
        ...state,
        screen: 'game',
        currentIndex: stageStartIndex,
        activeTransition: null,
        lives: 3,
        currentReward: safeReward,
        unlockedEvidence: state.unlockedEvidence.filter((id) => id <= state.checkpoint),
        answeredQuestions: state.answeredQuestions.filter((id) => id <= state.checkpoint),
        correctOnFirstAttempt: state.correctOnFirstAttempt.filter((id) => id <= state.checkpoint),
      })
    }
    case 'RESET':
      return createInitialState()
    default:
      return state
  }
}
