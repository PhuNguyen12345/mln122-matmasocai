import type { AnswerId, GameState, LifelineId, Question } from '../types/game'

export const createInitialState = (): GameState => ({
  screen: 'intro',
  currentIndex: 0,
  checkpoint: 0,
  lives: 3,
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
  unlockedEvidence: [],
})

export type GameAction =
  | { type: 'OPEN_BRIEFING' }
  | { type: 'START_GAME' }
  | { type: 'ANSWER'; answer: AnswerId; question: Question }
  | { type: 'RETRY' }
  | { type: 'ADVANCE'; question: Question }
  | { type: 'CONTINUE_STAGE_TWO' }
  | { type: 'USE_LIFELINE'; id: LifelineId; question: Question }
  | { type: 'RESTART_STAGE' }
  | { type: 'RESET' }

const resetQuestionState = (state: GameState): GameState => ({
  ...state,
  selectedAnswer: null,
  answerStatus: null,
  attemptedAnswers: [],
  eliminatedAnswers: [],
})

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'OPEN_BRIEFING':
      return { ...state, screen: 'briefing' }
    case 'START_GAME':
      return { ...state, screen: 'game' }
    case 'ANSWER': {
      if (state.answerStatus || state.lives === 0) return state
      const isCorrect = action.answer === action.question.correctAnswer
      return {
        ...state,
        selectedAnswer: action.answer,
        answerStatus: isCorrect ? 'correct' : 'wrong',
        attemptedAnswers: isCorrect
          ? state.attemptedAnswers
          : [...state.attemptedAnswers, action.answer],
        lives: isCorrect ? state.lives : Math.max(0, state.lives - 1),
        unlockedEvidence: isCorrect
          ? Array.from(new Set([...state.unlockedEvidence, action.question.id]))
          : state.unlockedEvidence,
      }
    }
    case 'RETRY':
      return { ...state, selectedAnswer: null, answerStatus: null }
    case 'ADVANCE': {
      if (state.answerStatus !== 'correct') return state
      if (action.question.id === 5) {
        return { ...resetQuestionState(state), screen: 'transition', checkpoint: 5 }
      }
      if (action.question.id === 10) {
        return { ...resetQuestionState(state), screen: 'checkpoint', checkpoint: 10 }
      }
      return resetQuestionState({ ...state, currentIndex: state.currentIndex + 1 })
    }
    case 'CONTINUE_STAGE_TWO':
      return resetQuestionState({ ...state, screen: 'game', currentIndex: 5, checkpoint: 5 })
    case 'USE_LIFELINE':
      if (state.usedLifelines[action.id] || state.answerStatus || state.lives === 0) {
        return state
      }
      return {
        ...state,
        usedLifelines: { ...state.usedLifelines, [action.id]: true },
        eliminatedAnswers:
          action.id === 'fifty'
            ? [...action.question.lifelines.eliminate]
            : state.eliminatedAnswers,
      }
    case 'RESTART_STAGE': {
      const stageStartIndex = state.checkpoint >= 5 ? 5 : 0
      return resetQuestionState({
        ...state,
        screen: 'game',
        currentIndex: stageStartIndex,
        lives: 3,
        unlockedEvidence: state.unlockedEvidence.filter((id) => id <= state.checkpoint),
      })
    }
    case 'RESET':
      return createInitialState()
    default:
      return state
  }
}
