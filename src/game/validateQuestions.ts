import type { Question } from '../types/game'

export function assertValidQuestions(questions: readonly Question[]) {
  const evidenceIds = new Set<string>()

  questions.forEach((question, index) => {
    if (question.id !== index + 1) throw new Error(`Câu hỏi phải liên tục: vị trí ${index + 1}`)
    if (question.answers.length !== 4) throw new Error(`Câu ${question.id} phải có 4 phương án`)
    if (!question.answers.some((answer) => answer.id === question.correctAnswer)) {
      throw new Error(`Câu ${question.id} không có đáp án đúng hợp lệ`)
    }
    if (
      question.lifelines.eliminate.length !== 2 ||
      question.lifelines.eliminate.includes(question.correctAnswer)
    ) {
      throw new Error(`Trợ giúp 50:50 của câu ${question.id} không hợp lệ`)
    }
    const pollTotal = Object.values(question.lifelines.poll).reduce((sum, value) => sum + value, 0)
    if (pollTotal !== 100) throw new Error(`Thăm dò câu ${question.id} phải đủ 100%`)
    if (evidenceIds.has(question.evidence.id)) throw new Error(`Trùng chứng cứ ${question.evidence.id}`)
    evidenceIds.add(question.evidence.id)
  })
}
