export type AnswerId = 'A' | 'B' | 'C' | 'D'

export type NpcId = 'mara' | 'lyra' | 'varen' | 'auren'

export type PollReliability = 'HIGH' | 'MEDIUM' | 'LOW_MEDIUM' | 'LOW' | 'MANIPULATED'

export interface AnswerOption {
  id: AnswerId
  text: string
  feedback: string
}

export interface Evidence {
  id: string
  index: number
  code: string
  title: string
  type: string
  category: string
  lines: string[]
  highlight: string
}

export interface StoryDialogue {
  before: string
  correct: string
  wrong: string
  unlock: string
}

export interface StoryTransition {
  id: string
  dialogue: string
  nextScene: string
}

export interface Question {
  id: number
  stage: number
  stageTitle: string
  coin: number
  difficultyCode: string
  difficulty: 'Dễ' | 'Trung bình' | 'Khó' | 'Rất khó'
  topic: string
  learningObjective: string
  title: string
  scene: string
  prompt: string
  answers: AnswerOption[]
  correctAnswer: AnswerId
  conclusion: string
  evidence: Evidence
  moneyDialogue: StoryDialogue
  transitionAfter?: StoryTransition
  externalInterruption?: {
    speaker: string
    dialogue: string
  }
  lifelines: {
    eliminate: AnswerId[]
    poll: Record<AnswerId, number>
    pollReliability: PollReliability
    pollWarning?: string
    recommendedNpc: NpcId
    npcHints: Record<NpcId, string>
    theory: string
  }
}

export type GameScreen = 'intro' | 'briefing' | 'game' | 'transition' | 'ending'

export type LifelineId = 'fifty' | 'npc' | 'poll' | 'theory'

export type Checkpoint = 0 | 5 | 10 | 15
export type TransitionQuestion = 5 | 10 | 13

export interface GameState {
  screen: GameScreen
  currentIndex: number
  checkpoint: Checkpoint
  activeTransition: TransitionQuestion | null
  lives: number
  currentReward: number
  usedLifelines: Record<LifelineId, boolean>
  eliminatedAnswers: AnswerId[]
  attemptedAnswers: AnswerId[]
  selectedAnswer: AnswerId | null
  answerStatus: 'correct' | 'wrong' | null
  consultedNpc: NpcId | null
  unlockedEvidence: number[]
  answeredQuestions: number[]
  correctOnFirstAttempt: number[]
}
