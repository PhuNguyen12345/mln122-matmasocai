import { useEffect, useMemo, useReducer, useState } from 'react'
import './App.css'
import { coinLadder, questions } from './data/questions'
import { gameReducer } from './game/gameEngine'
import { loadGame, saveGame } from './game/persistence'
import { assertValidQuestions } from './game/validateQuestions'
import type {
  AnswerId,
  GameState,
  LifelineId,
  Question,
} from './types/game'

assertValidQuestions(questions)

const lifelineMeta: Array<{
  id: LifelineId
  code: string
  title: string
  description: string
}> = [
  {
    id: 'fifty',
    code: '50',
    title: 'Nhãn quan kinh tế',
    description: 'Loại hai cách giải thích bề mặt',
  },
  {
    id: 'npc',
    code: 'NPC',
    title: 'Tham vấn chủ thể',
    description: 'Kết nối nhân chứng phù hợp',
  },
  {
    id: 'poll',
    code: '%',
    title: 'Thăm dò Novus',
    description: 'Xem lựa chọn của người dân',
  },
  {
    id: 'theory',
    code: '§',
    title: 'Hồ sơ lý luận',
    description: 'Tra cứu khái niệm liên quan',
  },
]

function formatCoin(value: number) {
  return new Intl.NumberFormat('vi-VN').format(value)
}

function LogoMark() {
  return (
    <div className="logo-mark" aria-hidden="true">
      <span className="logo-ring logo-ring--outer" />
      <span className="logo-ring logo-ring--inner" />
      <span className="logo-core">M</span>
    </div>
  )
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="intro-screen">
      <div className="city-grid" aria-hidden="true" />
      <div className="intro-noise" aria-hidden="true" />
      <header className="intro-header">
        <div className="agency-seal">
          <span>NEIA</span>
        </div>
        <div>
          <p>Cơ quan Điều tra Kinh tế Novus</p>
          <span>Economic Intelligence Archive</span>
        </div>
        <div className="clearance-badge">Quyền truy cập 01</div>
      </header>

      <section className="intro-content">
        <div className="intro-eyebrow">
          <span className="live-dot" /> Hồ sơ tuyệt mật / NVS-2049
        </div>
        <LogoMark />
        <p className="intro-kicker">AI LÀ TRIỆU PHÚ</p>
        <h1>MẬT MÃ<br />SỔ CÁI</h1>
        <p className="intro-lead">
          15 tầng dữ liệu. 4 quyền trợ giúp. 1 sự thật bị che giấu.
        </p>
        <button className="primary-cta" type="button" onClick={onStart}>
          <span>Nhận hồ sơ điều tra</span>
          <span aria-hidden="true">→</span>
        </button>
        <p className="intro-note">Vertical slice · Hai chặng điều tra · Câu 1–10</p>
      </section>

      <div className="intro-status" aria-hidden="true">
        <span>M.O.N.E.Y. ONLINE</span>
        <span>LEDGER ENCRYPTED</span>
        <span>NOVUS / 21:04</span>
      </div>
    </main>
  )
}

function BriefingScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <main className="briefing-screen page-shell">
      <header className="brand-header">
        <div className="brand-lockup">
          <LogoMark />
          <div>
            <strong>Mật mã Sổ Cái</strong>
            <span>Hệ thống điều tra kinh tế</span>
          </div>
        </div>
        <span className="system-online"><i /> M.O.N.E.Y. online</span>
      </header>

      <section className="briefing-card">
        <div className="ai-orb" aria-hidden="true">
          <span>M</span>
        </div>
        <div className="briefing-copy">
          <p className="terminal-label">Thông điệp từ M.O.N.E.Y.</p>
          <h1>Chào mừng, Điều tra viên.</h1>
          <p>
            Thành phố Novus đang thiếu lương thực dù các kho vẫn còn đầy. Mỗi
            câu trả lời đúng sẽ mở khóa một phần sự thật trong The Ledger.
          </p>
          <blockquote>
            “Trả lời sai không khiến bạn mất tiền. Nhưng có thể khiến một bằng
            chứng bị chôn vùi.”
          </blockquote>
        </div>
      </section>

      <section className="protocol-grid" aria-label="Quy tắc điều tra">
        <article>
          <span className="protocol-index">01</span>
          <h2>Ba mạng điều tra</h2>
          <p>Mỗi lựa chọn sai làm mất một mạng. Hết mạng, hồ sơ chặng sẽ khởi động lại.</p>
        </article>
        <article>
          <span className="protocol-index">02</span>
          <h2>Bốn trợ giúp</h2>
          <p>Mỗi phương pháp chỉ được kích hoạt một lần trong toàn bộ lượt chơi.</p>
        </article>
        <article>
          <span className="protocol-index">03</span>
          <h2>Chứng cứ sống</h2>
          <p>Trả lời đúng để thu thập hồ sơ và lần theo quyền lực đứng sau khủng hoảng.</p>
        </article>
      </section>

      <button className="primary-cta briefing-cta" type="button" onClick={onContinue}>
        <span>Mở tầng dữ liệu thứ nhất</span>
        <span aria-hidden="true">→</span>
      </button>
    </main>
  )
}

function EvidenceVisual({ question }: { question: Question }) {
  const evidence = question.evidence
  return (
    <div className={`evidence-visual evidence-visual--${question.id}`} aria-hidden="true">
      <div className="evidence-paper">
        <div className="evidence-paper__header">
          <span>NOVUS ARCHIVE</span>
          <span>{evidence.code}</span>
        </div>
        <div className="evidence-glyph">
          {question.id === 1 && <><span className="sack" /><span className="sack sack--two" /><span className="sack sack--three" /></>}
          {question.id === 2 && <><span className="map-node map-node--one" /><span className="map-node map-node--two" /><span className="map-node map-node--three" /><span className="map-line" /></>}
          {question.id === 3 && <><span className="contract-line" /><span className="contract-line contract-line--two" /><span className="contract-seal">35</span></>}
          {question.id === 4 && <><span className="bread-shape" /><span className="scan-line" /></>}
          {question.id === 5 && <><span className="warehouse" /><span className="alert-wave" /></>}
          {question.id === 6 && <><span className="contract-line" /><span className="contract-line contract-line--two" /><span className="contract-seal">8H</span></>}
          {question.id === 7 && <><span className="map-node map-node--one" /><span className="map-node map-node--two" /><span className="map-node map-node--three" /><span className="map-line" /></>}
          {question.id === 8 && <><span className="value-pulse">240</span><span className="scan-line" /></>}
          {question.id === 9 && <><span className="shift-bar shift-bar--necessary">4H</span><span className="shift-bar shift-bar--surplus">4H</span></>}
          {question.id === 10 && <><span className="shift-bar shift-bar--necessary">4H</span><span className="shift-bar shift-bar--surplus shift-bar--extended">6H</span></>}
        </div>
        <div className="evidence-paper__footer">
          <span>{evidence.category}</span>
          <span>#{String(evidence.index).padStart(2, '0')}</span>
        </div>
      </div>
      <span className="scan-corner scan-corner--tl" />
      <span className="scan-corner scan-corner--tr" />
      <span className="scan-corner scan-corner--bl" />
      <span className="scan-corner scan-corner--br" />
    </div>
  )
}

function ProgressLadder({ currentQuestion }: { currentQuestion: number }) {
  return (
    <aside className="progress-panel" aria-label="Thang tiến độ 15 câu">
      <div className="panel-heading">
        <span>Tiến độ giải mã</span>
        <strong>{currentQuestion}/15</strong>
      </div>
      <ol className="coin-ladder">
        {coinLadder.map((coin, index) => {
          const questionNumber = 15 - index
          const isCurrent = questionNumber === currentQuestion
          const isComplete = questionNumber < currentQuestion
          const isAvailable = questionNumber <= 10
          const isSafe = [5, 10, 15].includes(questionNumber)
          return (
            <li
              key={questionNumber}
              className={`${isCurrent ? 'is-current' : ''} ${isComplete ? 'is-complete' : ''} ${!isAvailable ? 'is-locked' : ''} ${isSafe ? 'is-safe' : ''}`}
            >
              <span className="ladder-number">{String(questionNumber).padStart(2, '0')}</span>
              <span className="ladder-line" />
              <span className="ladder-value">{formatCoin(coin)}</span>
              {isSafe && <span className="safe-dot" aria-label="Mốc an toàn" />}
            </li>
          )
        })}
      </ol>
    </aside>
  )
}

type ModalKind = 'fifty' | 'npc' | 'poll' | 'theory' | 'evidence' | null

function Modal({
  kind,
  question,
  unlockedQuestions,
  onClose,
}: {
  kind: Exclude<ModalKind, null>
  question: Question
  unlockedQuestions: Question[]
  onClose: () => void
}) {
  const titleByKind = {
    fifty: 'Nhãn quan kinh tế',
    npc: `Kết nối: ${question.lifelines.npc.name}`,
    poll: 'Thăm dò Novus',
    theory: 'Hồ sơ lý luận',
    evidence: 'Kho chứng cứ',
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="intel-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header>
          <div>
            <span className="terminal-label">M.O.N.E.Y. / dữ liệu hỗ trợ</span>
            <h2 id="modal-title">{titleByKind[kind]}</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Đóng">
            ×
          </button>
        </header>

        {kind === 'fifty' && (
          <div className="scan-result">
            <div className="scan-symbol">50</div>
            <p>
              Hai phương án không phản ánh đúng bản chất của tình huống đã được
              loại bỏ. Hãy tập trung vào hai cách giải thích còn lại.
            </p>
            <div className="eliminated-list">
              {question.lifelines.eliminate.map((answer) => (
                <span key={answer}>Phương án {answer} — đã loại</span>
              ))}
            </div>
          </div>
        )}

        {kind === 'npc' && (
          <div className="npc-consultation">
            <div className={`npc-avatar npc-avatar--${question.lifelines.npc.id}`}>
              {question.lifelines.npc.name.slice(0, 1)}
              <span className="signal-ring" />
            </div>
            <div>
              <span>{question.lifelines.npc.role}</span>
              <blockquote>“{question.lifelines.npc.hint}”</blockquote>
            </div>
          </div>
        )}

        {kind === 'poll' && (
          <div className="poll-chart" aria-label="Kết quả thăm dò">
            {(Object.entries(question.lifelines.poll) as Array<[AnswerId, number]>).map(
              ([answer, value]) => (
                <div className="poll-column" key={answer}>
                  <span className="poll-value">{value}%</span>
                  <div className="poll-track">
                    <span style={{ height: `${value}%` }} />
                  </div>
                  <strong>{answer}</strong>
                </div>
              ),
            )}
          </div>
        )}

        {kind === 'theory' && (
          <div className="theory-file">
            <span className="theory-stamp">HỒ SƠ HỌC THUẬT / Q{question.id}</span>
            <p>{question.lifelines.theory}</p>
          </div>
        )}

        {kind === 'evidence' && (
          <div className="evidence-library">
            {unlockedQuestions.length === 0 ? (
              <p className="empty-state">Chưa có chứng cứ nào được giải mã.</p>
            ) : (
              unlockedQuestions.map((item) => (
                <article key={item.id}>
                  <div className="evidence-library__index">E{String(item.id).padStart(2, '0')}</div>
                  <div>
                    <span>{item.evidence.category}</span>
                    <h3>{item.evidence.title}</h3>
                    <p>{item.evidence.highlight}</p>
                  </div>
                </article>
              ))
            )}
          </div>
        )}

        <button className="modal-close" type="button" onClick={onClose}>
          Trở lại câu hỏi
        </button>
      </section>
    </div>
  )
}

function LifelinePanel({
  used,
  disabled,
  onUse,
}: {
  used: GameState['usedLifelines']
  disabled: boolean
  onUse: (id: LifelineId) => void
}) {
  return (
    <section className="lifeline-panel" aria-label="Quyền trợ giúp">
      <div className="panel-heading">
        <span>Trợ giúp phương pháp</span>
        <strong>{Object.values(used).filter((value) => !value).length}/4</strong>
      </div>
      <div className="lifeline-list">
        {lifelineMeta.map((item) => (
          <button
            key={item.id}
            type="button"
            className={used[item.id] ? 'is-used' : ''}
            disabled={used[item.id] || disabled}
            onClick={() => onUse(item.id)}
          >
            <span className="lifeline-code">{item.code}</span>
            <span className="lifeline-copy">
              <strong>{item.title}</strong>
              <small>{used[item.id] ? 'Đã sử dụng' : item.description}</small>
            </span>
            <span className="lifeline-status" aria-hidden="true">
              {used[item.id] ? '×' : '›'}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

function GameScreen({
  state,
  onAnswer,
  onRetry,
  onNext,
  onRestartStage,
  onUseLifeline,
  onOpenEvidence,
  onReset,
}: {
  state: GameState
  onAnswer: (answer: AnswerId) => void
  onRetry: () => void
  onNext: () => void
  onRestartStage: () => void
  onUseLifeline: (id: LifelineId) => void
  onOpenEvidence: () => void
  onReset: () => void
}) {
  const question = questions[state.currentIndex]
  const selectedOption = question.answers.find(
    (answer) => answer.id === state.selectedAnswer,
  )

  return (
    <main className="game-screen">
      <header className="game-header">
        <div className="brand-lockup brand-lockup--compact">
          <LogoMark />
          <div>
            <strong>Mật mã Sổ Cái</strong>
            <span>{question.stageTitle} / Chặng {String(question.stage).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="game-header__status">
          <button type="button" className="archive-button" onClick={onOpenEvidence}>
            <span>Kho chứng cứ</span>
            <strong>{state.unlockedEvidence.length}/10</strong>
          </button>
          <div className="lives" aria-label={`${state.lives} mạng điều tra còn lại`}>
            <span>Mạng điều tra</span>
            <div>
              {[1, 2, 3].map((life) => (
                <i key={life} className={life <= state.lives ? 'is-active' : ''} />
              ))}
            </div>
          </div>
          <button className="text-button" type="button" onClick={onReset}>Đặt lại</button>
        </div>
      </header>

      <div className="game-layout">
        <aside className="case-panel">
          <div className="case-meta">
            <span>Chứng cứ đang xét</span>
            <strong>{question.evidence.id}</strong>
          </div>
          <EvidenceVisual question={question} />
          <div className="case-copy">
            <span>{question.evidence.category}</span>
            <h2>{question.evidence.title}</h2>
            <p>{question.scene}</p>
          </div>
          <div className="case-coordinates">
            <span>Sector N-{question.id + 3}</span>
            <span>Signal {String(14 - question.id).padStart(2, '0')}.4</span>
          </div>
        </aside>

        <section className="question-panel" aria-live="polite">
          <div className="question-topline">
            <span>Chặng {String(question.stage).padStart(2, '0')} / Câu {String(question.id).padStart(2, '0')}</span>
            <span className="difficulty">{question.difficulty}</span>
            <span className="coin-value">{formatCoin(question.coin)} Coin</span>
          </div>
          <p className="stage-title">{question.stageTitle}</p>
          <h1>{question.prompt}</h1>

          <div className="answer-grid">
            {question.answers.map((answer) => {
              const eliminated = state.eliminatedAnswers.includes(answer.id)
              const attempted = state.attemptedAnswers.includes(answer.id)
              const selected = state.selectedAnswer === answer.id
              const correct = selected && state.answerStatus === 'correct'
              const wrong = selected && state.answerStatus === 'wrong'
              return (
                <button
                  key={answer.id}
                  type="button"
                  className={`answer-option ${eliminated ? 'is-eliminated' : ''} ${attempted ? 'is-attempted' : ''} ${correct ? 'is-correct' : ''} ${wrong ? 'is-wrong' : ''}`}
                  disabled={
                    eliminated ||
                    attempted ||
                    state.answerStatus !== null ||
                    state.lives === 0
                  }
                  onClick={() => onAnswer(answer.id)}
                >
                  <span className="answer-letter">{answer.id}</span>
                  <span>{answer.text}</span>
                  <span className="answer-indicator" aria-hidden="true">
                    {correct ? '✓' : wrong || eliminated ? '×' : '↗'}
                  </span>
                </button>
              )
            })}
          </div>

          {state.answerStatus && selectedOption && (
            <section className={`feedback-panel feedback-panel--${state.answerStatus}`}>
              <div className="feedback-status">
                <span>{state.answerStatus === 'correct' ? '✓' : '!'}</span>
                <div>
                  <strong>{state.answerStatus === 'correct' ? 'Đã xác nhận' : 'Chưa chính xác'}</strong>
                  <small>M.O.N.E.Y. / Phân tích lựa chọn {selectedOption.id}</small>
                </div>
              </div>
              <p>{selectedOption.feedback}</p>
              {state.answerStatus === 'correct' && (
                <div className="conclusion-box">
                  <span>Kết luận hồ sơ</span>
                  <p>{question.conclusion}</p>
                </div>
              )}
              <div className="feedback-actions">
                {state.answerStatus === 'wrong' && state.lives > 0 && (
                  <button type="button" onClick={onRetry}>Phân tích lại</button>
                )}
                {state.answerStatus === 'wrong' && state.lives === 0 && (
                  <button type="button" onClick={onRestartStage}>Khởi động lại chặng</button>
                )}
                {state.answerStatus === 'correct' && (
                  <button type="button" onClick={onNext}>
                    {question.id === 5
                      ? 'Mở tầng dữ liệu thứ hai'
                      : question.id === 10
                        ? 'Giải mã Sổ sản xuất'
                        : 'Thu chứng cứ & tiếp tục'}
                  </button>
                )}
              </div>
            </section>
          )}
        </section>

        <div className="right-rail">
          <ProgressLadder currentQuestion={question.id} />
          <LifelinePanel
            used={state.usedLifelines}
            disabled={state.answerStatus !== null || state.lives === 0}
            onUse={onUseLifeline}
          />
        </div>
      </div>
    </main>
  )
}

function StageTransitionScreen({
  unlockedQuestions,
  onContinue,
}: {
  unlockedQuestions: Question[]
  onContinue: () => void
}) {
  return (
    <main className="checkpoint-screen">
      <div className="checkpoint-grid" aria-hidden="true" />
      <section className="checkpoint-content">
        <span className="checkpoint-kicker">Mốc an toàn 01 / Đã giải mã</span>
        <div className="checkpoint-icon" aria-hidden="true">✓</div>
        <h1>Hồ sơ thị trường<br />đã được mở.</h1>
        <p>
          Novus không thật sự hết lương thực. Dòng cung đã bị khóa và nỗi sợ
          được tạo ra có chủ ý. Nhưng một câu hỏi lớn hơn vừa xuất hiện: ai đang
          tạo ra giá trị trong các nhà máy?
        </p>
        <div className="checkpoint-stats">
          <div><strong>05</strong><span>Câu đã giải</span></div>
          <div><strong>{String(unlockedQuestions.length).padStart(2, '0')}</strong><span>Chứng cứ</span></div>
          <div><strong>1K</strong><span>Coin an toàn</span></div>
        </div>
        <div className="evidence-tape">
          {unlockedQuestions.map((question) => (
            <span key={question.id}>E{String(question.id).padStart(2, '0')}</span>
          ))}
        </div>
        <div className="next-stage-teaser">
          <span>Thông điệp từ Lyra</span>
          <blockquote>“Có hàng trở lại rồi. Nhưng tại sao nhà máy vẫn bắt công nhân làm việc đến kiệt sức?”</blockquote>
          <strong>Chặng 02 — Ai tạo ra giá trị?</strong>
          <small>Câu 6–10 · Tầng dữ liệu thứ hai đã mở</small>
        </div>
        <button className="primary-cta" type="button" onClick={onContinue}>
          <span>Tiến vào khu sản xuất</span>
          <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  )
}

function CheckpointScreen({
  unlockedQuestions,
  onReplay,
}: {
  unlockedQuestions: Question[]
  onReplay: () => void
}) {
  return (
    <main className="checkpoint-screen">
      <div className="checkpoint-grid" aria-hidden="true" />
      <section className="checkpoint-content">
        <span className="checkpoint-kicker">Mốc an toàn 02 / Sổ sản xuất đã mở</span>
        <div className="checkpoint-icon" aria-hidden="true">✓</div>
        <h1>Giá trị thặng dư<br />đã lộ diện.</h1>
        <p>
          Lyra và những công nhân Novus tạo ra lượng giá trị lớn hơn giá trị sức
          lao động của họ. Ca làm bị kéo dài khiến thời gian lao động thặng dư tăng,
          trong khi tiền công không đổi.
        </p>
        <div className="checkpoint-stats">
          <div><strong>10</strong><span>Câu đã giải</span></div>
          <div><strong>{String(unlockedQuestions.length).padStart(2, '0')}</strong><span>Chứng cứ</span></div>
          <div><strong>32K</strong><span>Coin an toàn</span></div>
        </div>
        <div className="evidence-tape">
          {unlockedQuestions.map((question) => (
            <span key={question.id}>E{String(question.id).padStart(2, '0')}</span>
          ))}
        </div>
        <div className="next-stage-teaser">
          <span>Cảnh báo từ M.O.N.E.Y.</span>
          <strong>Chặng 03 — Cuộc đua năng suất</strong>
          <small>Hệ thống phát hiện một cách thức khác để gia tăng giá trị thặng dư.</small>
        </div>
        <button className="primary-cta" type="button" onClick={onReplay}>
          <span>Chơi lại hồ sơ 1–10</span>
          <span aria-hidden="true">↻</span>
        </button>
      </section>
    </main>
  )
}

function App() {
  const [state, dispatch] = useReducer(gameReducer, questions.length, loadGame)
  const [modal, setModal] = useState<ModalKind>(null)

  const currentQuestion = questions[state.currentIndex]
  const unlockedQuestions = useMemo(
    () => questions.filter((question) => state.unlockedEvidence.includes(question.id)),
    [state.unlockedEvidence],
  )

  useEffect(() => {
    saveGame(state)
  }, [state])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [state.screen, state.currentIndex])

  const answerQuestion = (answer: AnswerId) => {
    dispatch({ type: 'ANSWER', answer, question: currentQuestion })
  }

  const retryQuestion = () => {
    dispatch({ type: 'RETRY' })
  }

  const nextQuestion = () => {
    dispatch({ type: 'ADVANCE', question: currentQuestion })
  }

  const useLifeline = (id: LifelineId) => {
    if (state.usedLifelines[id] || state.answerStatus) return
    dispatch({ type: 'USE_LIFELINE', id, question: currentQuestion })
    setModal(id)
  }

  const restartStage = () => {
    dispatch({ type: 'RESTART_STAGE' })
  }

  const resetGame = () => {
    if (!window.confirm('Đặt lại toàn bộ tiến độ vertical slice?')) return
    setModal(null)
    dispatch({ type: 'RESET' })
  }

  if (state.screen === 'intro') {
    return <IntroScreen onStart={() => dispatch({ type: 'OPEN_BRIEFING' })} />
  }

  if (state.screen === 'briefing') {
    return <BriefingScreen onContinue={() => dispatch({ type: 'START_GAME' })} />
  }

  if (state.screen === 'transition') {
    return (
      <StageTransitionScreen
        unlockedQuestions={unlockedQuestions}
        onContinue={() => dispatch({ type: 'CONTINUE_STAGE_TWO' })}
      />
    )
  }

  if (state.screen === 'checkpoint') {
    return <CheckpointScreen unlockedQuestions={unlockedQuestions} onReplay={() => dispatch({ type: 'RESET' })} />
  }

  return (
    <>
      <GameScreen
        state={state}
        onAnswer={answerQuestion}
        onRetry={retryQuestion}
        onNext={nextQuestion}
        onRestartStage={restartStage}
        onUseLifeline={useLifeline}
        onOpenEvidence={() => setModal('evidence')}
        onReset={resetGame}
      />
      {modal && (
        <Modal
          kind={modal}
          question={currentQuestion}
          unlockedQuestions={unlockedQuestions}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}

export default App
