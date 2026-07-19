export type AnswerId = 'A' | 'B' | 'C' | 'D'

export type NpcId = 'mara' | 'lyra' | 'varen' | 'auren'

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
  category: string
  lines: string[]
  highlight: string
}

export interface Question {
  id: number
  stage: number
  stageTitle: string
  coin: number
  difficulty: 'Dễ' | 'Trung bình' | 'Khó' | 'Rất khó'
  title: string
  scene: string
  prompt: string
  answers: AnswerOption[]
  correctAnswer: AnswerId
  conclusion: string
  evidence: Evidence
  lifelines: {
    eliminate: AnswerId[]
    poll: Record<AnswerId, number>
    npc: {
      id: NpcId
      name: string
      role: string
      hint: string
    }
    theory: string
    pollWarning?: string
  }
}

export type GameScreen = 'intro' | 'briefing' | 'game' | 'transition' | 'checkpoint' | 'ending'

export type LifelineId = 'fifty' | 'npc' | 'poll' | 'theory'

export interface GameState {
  screen: GameScreen
  currentIndex: number
  checkpoint: 0 | 5 | 10 | 15
  lives: number
  usedLifelines: Record<LifelineId, boolean>
  eliminatedAnswers: AnswerId[]
  attemptedAnswers: AnswerId[]
  selectedAnswer: AnswerId | null
  answerStatus: 'correct' | 'wrong' | null
  unlockedEvidence: number[]
}
