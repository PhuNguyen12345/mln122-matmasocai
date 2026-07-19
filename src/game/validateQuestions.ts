import type { Question } from '../types/game'

const expectedRewards = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000,
  64000, 125000, 250000, 500000, 1000000,
]

export function assertValidQuestions(questions: readonly Question[]) {
  if (questions.length !== 15) throw new Error('Content Spec phải có đủ 15 câu')
  const evidenceIds = new Set<string>()

  questions.forEach((question, index) => {
    if (question.id !== index + 1) throw new Error(`Câu hỏi phải liên tục: vị trí ${index + 1}`)
    if (question.coin !== expectedRewards[index]) throw new Error(`Mức thưởng câu ${question.id} không hợp lệ`)
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
    if (Object.keys(question.lifelines.npcHints).length !== 4) {
      throw new Error(`Câu ${question.id} phải có gợi ý của 4 nhân vật`)
    }
    const theoryWords = question.lifelines.theory.trim().split(/\s+/).length
    if (theoryWords < 50 || theoryWords > 100) {
      throw new Error(`Hồ sơ lý luận câu ${question.id} có ${theoryWords} từ; cần 50–100 từ`)
    }
    if (evidenceIds.has(question.evidence.id)) throw new Error(`Trùng chứng cứ ${question.evidence.id}`)
    evidenceIds.add(question.evidence.id)
  })

  ;[5, 10, 13, 15].forEach((id) => {
    if (!questions[id - 1].transitionAfter) throw new Error(`Thiếu chuyển cảnh sau câu ${id}`)
  })
}
