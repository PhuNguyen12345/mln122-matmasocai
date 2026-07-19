import { contentSpecQuestions } from './contentSpec'
import type {
  AnswerId,
  NpcId,
  PollReliability,
  Question,
  StoryDialogue,
  StoryTransition,
} from '../types/game'

interface RawAnswer {
  text: string
  correct: boolean
  feedback: string
}

interface RawQuestion {
  id: string
  chapter: number
  reward: number
  difficulty: string
  topic: string
  learningObjective: string
  context: string
  question: string
  answers: Record<AnswerId, RawAnswer>
  conclusion: string
  fiftyFiftyEliminated: readonly AnswerId[]
  poll: Record<AnswerId, number> & {
    reliability: PollReliability
    warning?: boolean
  }
  recommendedNpc: NpcId
  npcHints: Record<NpcId, string>
  theoryFile: string
  evidence: {
    id: string
    title: string
    type: string
    content: readonly string[]
    highlight: string
  }
  moneyDialogue: StoryDialogue
  transitionAfter?: StoryTransition
  externalInterruption?: {
    speaker: string
    dialogue: string
  }
}

const rawQuestions = contentSpecQuestions as unknown as readonly RawQuestion[]

const stageTitles: Record<number, string> = {
  1: 'Hàng hóa và thị trường',
  2: 'Sức lao động và giá trị thặng dư',
  3: 'Tích lũy và tập trung tư bản',
  4: 'Cạnh tranh và độc quyền',
}

const evidenceCategories: Record<string, string> = {
  WAREHOUSE_RECORD: 'Hồ sơ kho vận',
  CONTRACT: 'Hồ sơ giao dịch',
  PRODUCTION_REPORT: 'Báo cáo sản xuất',
  PRODUCTIVITY_REPORT: 'Báo cáo năng suất',
  MARKET_DOSSIER: 'Hồ sơ thị trường',
  LABOR_CONTRACT: 'Hồ sơ lao động',
  HOUSEHOLD_BUDGET: 'Hồ sơ sinh hoạt',
  SURPLUS_VALUE_REPORT: 'Báo cáo giá trị',
  LABOR_SHIFT_REPORT: 'Báo cáo ca lao động',
  TECHNOLOGY_REPORT: 'Hồ sơ công nghệ',
  CAPITAL_ACCUMULATION_REPORT: 'Hồ sơ tích lũy',
  OWNERSHIP_MAP: 'Bản đồ sở hữu',
  COMPETITION_MAP: 'Bản đồ cạnh tranh',
  HIDDEN_LEDGER: 'Sổ Cái Ẩn',
}

const evidenceCodes = [
  'AGR-800-650', 'CTR-ND-02', 'PRD-04-07', 'PRD-10-20', 'MKT-72-63',
  'LAB-LYRA-06', 'HHD-LYRA-07', 'SV-180-08', 'SHIFT-03-05', 'SHIFT-03-06',
  'TECH-03-05', 'CAP-300-700', 'OWN-MERGE-13', 'VOSS-70-14', 'LEDGER-01M',
]

const theorySupplements: Record<number, string> = {
  1: 'Điểm mấu chốt là quan hệ trao đổi, không phải hình dạng hay công dụng tự nhiên của vật phẩm.',
  2: 'Hai điều kiện này gắn với nhau: chuyên môn hóa tạo nhu cầu trao đổi, còn quyền định đoạt độc lập khiến trao đổi trở thành phương thức chuyển giao.',
  3: 'Mức xã hội này thay đổi cùng kỹ thuật, năng suất và điều kiện phổ biến; hao phí vượt chuẩn là bất lợi mà người sản xuất cá biệt phải tự gánh.',
  4: 'Vì tổng thời gian và cường độ không đổi, cùng một lượng lao động được phân bổ cho nhiều sản phẩm hơn; không nên đồng nhất sản lượng vật chất với lượng giá trị mới.',
  5: 'Sự lệch pha giữa giá cả và giá trị có thể kéo dài trong những điều kiện cụ thể, nhưng việc bán đắt trong lưu thông không tự tạo thêm giá trị cho toàn xã hội.',
  6: 'Người lao động phải có quyền tự định đoạt sức lao động của mình, đồng thời thiếu tư liệu sản xuất và sinh hoạt cần thiết nên phải bán sức lao động để sống.',
  7: 'Giá trị này mang tính lịch sử và xã hội: nó còn phụ thuộc trình độ phát triển, phong tục, nhu cầu đào tạo và điều kiện tái sản xuất gia đình người lao động.',
  8: 'Phần giá trị mới vượt quá giá trị sức lao động không được trả lại dưới hình thức tiền công; đó là nguồn của giá trị thặng dư mà nhà tư bản chiếm hữu.',
  9: 'Tỷ suất này phản ánh mức độ sử dụng lao động làm thuê, không đồng nhất với khối lượng giá trị thặng dư; muốn tính phải so đúng hai phần thời gian hoặc giá trị.',
  10: 'Kéo dài ngày lao động làm tăng giá trị thặng dư tuyệt đối; rút ngắn thời gian tất yếu nhờ năng suất xã hội làm tăng giá trị thặng dư tương đối. Hai cách có thể kết hợp.',
  11: 'Lợi thế này chỉ tồn tại khi năng suất cá biệt còn cao hơn mức xã hội; khi kỹ thuật lan rộng, thời gian xã hội giảm và phần chênh lệch có xu hướng mất đi.',
  12: 'Phần giá trị thặng dư được tư bản hóa làm quy mô tư bản tăng qua các chu kỳ. Vì vậy, tích lũy vừa là kết quả vừa là điều kiện của tái sản xuất mở rộng.',
  13: 'Tích tụ dựa trên tích lũy trong từng doanh nghiệp, còn tập trung hợp nhất những tư bản đã tồn tại qua sáp nhập, mua lại hoặc tín dụng mà không nhất thiết tạo tư bản xã hội mới.',
  14: 'Quyền lực thị trường làm các bên tham gia không còn cân xứng; cạnh tranh có thể gay gắt hơn về công nghệ, nguồn lực, thị trường và quyền kiểm soát giữa nhiều nhóm chủ thể.',
  15: 'Đánh giá cần đồng thời ghi nhận hiệu quả do quy mô và công nghệ, nhận diện chi phí xã hội, rồi thiết kế cạnh tranh, điều tiết, minh bạch và bảo vệ lao động để cân bằng lợi ích.',
}

function displayDifficulty(code: string): Question['difficulty'] {
  if (code === 'FINAL_SYNTHESIS') return 'Rất khó'
  if (code.startsWith('HARD') || code === 'MEDIUM_HARD') return 'Khó'
  if (code === 'EASY_ANALYSIS') return 'Dễ'
  return 'Trung bình'
}

export const questions: Question[] = rawQuestions.map((raw, index) => {
  const id = index + 1
  const answerEntries = Object.entries(raw.answers) as Array<[AnswerId, RawAnswer]>
  const correctAnswer = answerEntries.find(([, answer]) => answer.correct)?.[0]
  if (!correctAnswer) throw new Error(`Câu ${raw.id} chưa có đáp án đúng`)

  return {
    id,
    stage: raw.chapter,
    stageTitle: stageTitles[raw.chapter],
    coin: raw.reward,
    difficultyCode: raw.difficulty,
    difficulty: displayDifficulty(raw.difficulty),
    topic: raw.topic,
    learningObjective: raw.learningObjective,
    title: raw.evidence.title,
    scene: raw.context,
    prompt: raw.question,
    answers: answerEntries.map(([answerId, answer]) => ({
      id: answerId,
      text: answer.text,
      feedback: answer.feedback,
    })),
    correctAnswer,
    conclusion: raw.conclusion,
    evidence: {
      id: raw.evidence.id,
      index: id,
      code: evidenceCodes[index],
      title: raw.evidence.title,
      type: raw.evidence.type,
      category: evidenceCategories[raw.evidence.type] ?? 'Hồ sơ điều tra',
      lines: [...raw.evidence.content],
      highlight: raw.evidence.highlight,
    },
    moneyDialogue: { ...raw.moneyDialogue },
    transitionAfter: raw.transitionAfter ? { ...raw.transitionAfter } : undefined,
    externalInterruption: raw.externalInterruption ? { ...raw.externalInterruption } : undefined,
    lifelines: {
      eliminate: [...raw.fiftyFiftyEliminated],
      poll: {
        A: raw.poll.A,
        B: raw.poll.B,
        C: raw.poll.C,
        D: raw.poll.D,
      },
      pollReliability: raw.poll.reliability,
      pollWarning: raw.poll.warning
        ? 'Nguồn thăm dò có dấu hiệu bị can thiệp. Chỉ sử dụng như dữ liệu tham khảo.'
        : undefined,
      recommendedNpc: raw.recommendedNpc,
      npcHints: { ...raw.npcHints },
      theory: `${raw.theoryFile} ${theorySupplements[id]}`,
    },
  }
})

export const coinLadder = questions.map((question) => question.coin).reverse()
