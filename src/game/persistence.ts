import type { GameState } from '../types/game'
import { createInitialState } from './gameEngine'

const STORAGE_KEY = 'mat-ma-so-cai:game:v3'

export function loadGame(questionCount: number): GameState {
  const fallback = createInitialState()
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (!saved) return fallback
    const parsed = JSON.parse(saved) as Partial<GameState>
    if (
      typeof parsed.currentIndex !== 'number' ||
      parsed.currentIndex < 0 ||
      parsed.currentIndex >= questionCount ||
      !parsed.usedLifelines ||
      !Array.isArray(parsed.unlockedEvidence)
    ) {
      return fallback
    }
    return {
      ...fallback,
      ...parsed,
      checkpoint:
        parsed.checkpoint === 5 || parsed.checkpoint === 10 || parsed.checkpoint === 15
          ? parsed.checkpoint
          : 0,
      currentIndex: parsed.currentIndex,
      usedLifelines: { ...fallback.usedLifelines, ...parsed.usedLifelines },
      unlockedEvidence: parsed.unlockedEvidence,
      answeredQuestions: Array.isArray(parsed.answeredQuestions) ? parsed.answeredQuestions : [],
      correctOnFirstAttempt: Array.isArray(parsed.correctOnFirstAttempt)
        ? parsed.correctOnFirstAttempt
        : [],
    }
  } catch {
    return fallback
  }
}

export function saveGame(state: GameState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}
