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
  NpcId,
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

const npcMeta: Record<NpcId, { name: string; role: string; initial: string }> = {
  mara: { name: 'Mara', role: 'Tiểu thương Novus', initial: 'M' },
  lyra: { name: 'Lyra', role: 'Công nhân Novus Steel', initial: 'L' },
  varen: { name: 'Varen', role: 'Kỹ sư hệ thống Novus', initial: 'V' },
  auren: { name: 'Auren', role: 'Thanh tra kinh tế', initial: 'A' },
}

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
        <p className="intro-note">Content Spec V1.0 · 4 chương điều tra · Câu 1–15</p>
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
            Một cuộc khủng hoảng tại Novus nối thị trường, nhà máy, dòng tư bản
            và quyền lực độc quyền vào cùng một Sổ Cái. Mỗi kết luận đúng sẽ mở
            khóa một chứng cứ trong The Hidden Ledger.
          </p>
          <blockquote>
            “Đừng chỉ nhớ định nghĩa. Hãy đọc quan hệ giữa dữ kiện, biến số và
            lợi ích đang bị che khuất.”
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
          <p>Mỗi đáp án đều có phản hồi; trả lời đúng để mở chứng cứ và kết luận hồ sơ.</p>
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
          {question.id === 2 && <><span className="contract-line" /><span className="contract-line contract-line--two" /><span className="contract-seal">N/D</span></>}
          {question.id === 3 && <><span className="shift-bar shift-bar--necessary">4H</span><span className="shift-bar shift-bar--surplus">7H</span></>}
          {question.id === 4 && <><span className="shift-bar shift-bar--necessary">10</span><span className="shift-bar shift-bar--surplus">20</span></>}
          {question.id === 5 && <><span className="warehouse" /><span className="alert-wave" /></>}
          {question.id === 6 && <><span className="contract-line" /><span className="contract-line contract-line--two" /><span className="contract-seal">8H</span></>}
          {question.id === 7 && <><span className="value-pulse">SL</span><span className="scan-line" /></>}
          {question.id === 8 && <><span className="value-pulse">180</span><span className="scan-line" /></>}
          {question.id === 9 && <><span className="shift-bar shift-bar--necessary">3H</span><span className="shift-bar shift-bar--surplus">5H</span></>}
          {question.id === 10 && <><span className="shift-bar shift-bar--necessary">3H</span><span className="shift-bar shift-bar--surplus shift-bar--extended">6H</span></>}
          {question.id === 11 && <><span className="shift-bar shift-bar--necessary shift-bar--short">3H</span><span className="shift-bar shift-bar--surplus shift-bar--productivity">5H</span></>}
          {question.id === 12 && <><span className="capital-ring capital-ring--one">300</span><span className="capital-ring capital-ring--two">700</span><span className="capital-ring capital-ring--three">+</span></>}
          {question.id === 13 && <><span className="merge-node merge-node--one">A</span><span className="merge-node merge-node--two">B</span><span className="merge-node merge-node--three">C</span><span className="merge-arrow">→</span></>}
          {question.id === 14 && <><span className="voss-core">V</span><span className="voss-orbit voss-orbit--one" /><span className="voss-orbit voss-orbit--two" /><span className="voss-orbit voss-orbit--three" /></>}
          {question.id === 15 && <><span className="ledger-lock">M</span><span className="scan-line scan-line--danger" /></>}
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
          const isAvailable = questionNumber <= questions.length
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
  consultedNpc,
  unlockedQuestions,
  onSelectNpc,
  onClose,
}: {
  kind: Exclude<ModalKind, null>
  question: Question
  consultedNpc: NpcId | null
  unlockedQuestions: Question[]
  onSelectNpc: (npcId: NpcId) => void
  onClose: () => void
}) {
  const titleByKind = {
    fifty: 'Nhãn quan kinh tế',
    npc: consultedNpc ? `Kết nối: ${npcMeta[consultedNpc].name}` : 'Chọn chủ thể tham vấn',
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
          <div>
            {consultedNpc ? (
              <div className="npc-consultation">
                <div className={`npc-avatar npc-avatar--${consultedNpc}`}>
                  {npcMeta[consultedNpc].initial}
                  <span className="signal-ring" />
                </div>
                <div>
                  <strong>{npcMeta[consultedNpc].name}</strong>
                  <span>{npcMeta[consultedNpc].role}</span>
                  <blockquote>“{question.lifelines.npcHints[consultedNpc]}”</blockquote>
                </div>
              </div>
            ) : (
              <div className="npc-picker">
                <p>Chọn một góc nhìn. Quyền tham vấn chỉ được dùng một lần trong lượt chơi.</p>
                <div className="npc-picker__grid">
                  {(Object.keys(npcMeta) as NpcId[]).map((npcId) => (
                    <button key={npcId} type="button" onClick={() => onSelectNpc(npcId)}>
                      <span className={`npc-avatar npc-avatar--${npcId}`}>{npcMeta[npcId].initial}</span>
                      <span><strong>{npcMeta[npcId].name}</strong><small>{npcMeta[npcId].role}</small></span>
                      <i aria-hidden="true">→</i>
                    </button>
                  ))}
                </div>
              </div>
            )}
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
            {question.lifelines.pollWarning && (
              <p className="poll-warning">⚠ {question.lifelines.pollWarning}</p>
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
            <span>{question.stageTitle} / Chương {String(question.stage).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="game-header__status">
          <button type="button" className="archive-button" onClick={onOpenEvidence}>
            <span>Kho chứng cứ</span>
            <strong>{state.unlockedEvidence.length}/15</strong>
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
            <span>Signal {String(16 - question.id).padStart(2, '0')}.4</span>
          </div>
        </aside>

        <section className="question-panel" aria-live="polite">
          <div className="question-topline">
            <span>Chương {String(question.stage).padStart(2, '0')} / Câu {String(question.id).padStart(2, '0')}</span>
            <span className="difficulty">{question.difficulty}</span>
            <span className="coin-value">{formatCoin(question.coin)} Coin</span>
          </div>
          <p className="stage-title">{question.topic}</p>
          <div className="money-prompt">
            <span>M.O.N.E.Y.</span>
            <p>{question.moneyDialogue.before}</p>
          </div>
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
          <p className="keyboard-hint">
            Phím tắt: A–D để chọn · Enter để tiếp tục · Esc để đóng hồ sơ
          </p>

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
              <p className="money-response">
                <span>M.O.N.E.Y.</span>{' '}
                {state.answerStatus === 'correct'
                  ? question.moneyDialogue.correct
                  : question.moneyDialogue.wrong}
              </p>
              {state.answerStatus === 'correct' && (
                <>
                  <div className="conclusion-box">
                    <span>Kết luận hồ sơ</span>
                    <p>{question.conclusion}</p>
                  </div>
                  <div className="evidence-unlocked">
                    <div>
                      <span>Chứng cứ đã mở khóa</span>
                      <strong>{question.evidence.id} · {question.evidence.title}</strong>
                    </div>
                    <ul>
                      {question.evidence.lines.map((line) => <li key={line}>{line}</li>)}
                    </ul>
                    <p>{question.evidence.highlight}</p>
                    <small>{question.moneyDialogue.unlock}</small>
                  </div>
                  {question.externalInterruption && (
                    <div className="system-interruption">
                      <span>Tín hiệu bị can thiệp</span>
                      <p>“Kênh dữ liệu ngoài vừa giành quyền phát.” — M.O.N.E.Y.</p>
                      <strong>
                        {question.externalInterruption.speaker === 'selene' ? 'Selene Voss' : question.externalInterruption.speaker}: “{question.externalInterruption.dialogue}”
                      </strong>
                    </div>
                  )}
                </>
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
                      ? 'Mở hồ sơ Novus Steel'
                      : question.id === 10
                        ? 'Theo dấu hồ sơ hiệu suất'
                        : question.id === 13
                          ? 'Xâm nhập trung tâm Voss'
                          : question.id === 15
                            ? 'Mở Sổ Cái Ẩn'
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

const transitionPresentation = {
  5: {
    kicker: 'Mốc an toàn 01 / Hồ sơ thị trường đã mở',
    title: 'Quyền tiếp cận hàng hóa\nđã bị can thiệp.',
    next: 'Chương 02 — Sức lao động và giá trị thặng dư',
    note: 'Câu 6–10 · Nguồn tín hiệu dẫn đến Novus Steel',
    action: 'Tiến vào Novus Steel',
  },
  10: {
    kicker: 'Mốc an toàn 02 / Sổ sản xuất đã mở',
    title: 'Cấu trúc ngày lao động\nđã lộ diện.',
    next: 'Chương 02 — Giá trị thặng dư siêu ngạch',
    note: 'Câu 11 · Một hồ sơ hiệu suất bất thường vừa xuất hiện',
    action: 'Theo dấu hồ sơ hiệu suất',
  },
  13: {
    kicker: 'Điểm chuyển chương / Bản đồ sở hữu hoàn thành',
    title: 'Quyền kiểm soát đang\nhội tụ về một trung tâm.',
    next: 'Chương 04 — Cạnh tranh và độc quyền',
    note: 'Câu 14–15 · Trung tâm kiểm soát Voss đã được định vị',
    action: 'Xâm nhập trung tâm Voss',
  },
} as const

function StageTransitionScreen({
  completedQuestion,
  unlockedQuestions,
  onContinue,
}: {
  completedQuestion: Question
  unlockedQuestions: Question[]
  onContinue: () => void
}) {
  const presentation = transitionPresentation[completedQuestion.id as keyof typeof transitionPresentation]
  const safeCoin = completedQuestion.id >= 10 ? '32K' : '1K'

  return (
    <main className="checkpoint-screen">
      <div className="checkpoint-grid" aria-hidden="true" />
      <section className="checkpoint-content">
        <span className="checkpoint-kicker">{presentation.kicker}</span>
        <div className="checkpoint-icon" aria-hidden="true">✓</div>
        <h1>{presentation.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h1>
        <p>{completedQuestion.transitionAfter?.dialogue}</p>
        <div className="checkpoint-stats">
          <div><strong>{String(completedQuestion.id).padStart(2, '0')}</strong><span>Câu đã giải</span></div>
          <div><strong>{String(unlockedQuestions.length).padStart(2, '0')}</strong><span>Chứng cứ</span></div>
          <div><strong>{safeCoin}</strong><span>{completedQuestion.id === 13 ? 'Mốc gần nhất' : 'Coin an toàn'}</span></div>
        </div>
        <div className="evidence-tape">
          {unlockedQuestions.map((question) => (
            <span key={question.id}>E{String(question.id).padStart(2, '0')}</span>
          ))}
        </div>
        <div className="next-stage-teaser">
          <span>Cảnh báo từ M.O.N.E.Y.</span>
          <strong>{presentation.next}</strong>
          <small>{presentation.note}</small>
        </div>
        <button className="primary-cta" type="button" onClick={onContinue}>
          <span>{presentation.action}</span>
          <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  )
}

function EndingScreen({
  unlockedQuestions,
  correctOnFirstAttempt,
  onReplay,
}: {
  unlockedQuestions: Question[]
  correctOnFirstAttempt: number
  onReplay: () => void
}) {
  const finalQuestion = questions[14]
  return (
    <main className="checkpoint-screen ending-screen">
      <div className="checkpoint-grid" aria-hidden="true" />
      <section className="checkpoint-content ending-content">
        <span className="checkpoint-kicker">The Hidden Ledger / Toàn bộ dữ liệu đã giải mã</span>
        <div className="ending-ledger" aria-hidden="true"><span>M</span></div>
        <p className="ending-overline">1.000.000 Coin / M.O.N.E.Y. xác nhận toàn bộ chứng cứ</p>
        <h1>Bạn đã mở khóa<br />nhãn quan kinh tế.</h1>
        <div className="ending-dialogue">
          <blockquote>
            <span>Selene Voss</span>
            “Cạnh tranh là lý do chúng tôi phải lớn mạnh. Đừng trừng phạt người chiến thắng chỉ vì những kẻ khác không theo kịp.”
          </blockquote>
          <blockquote>
            <span>Điều tra viên</span>
            “Công nghệ không trao quyền khóa lựa chọn của cả thành phố. Quy mô phải được đặt trong thể chế ngăn lạm dụng quyền lực.”
          </blockquote>
        </div>
        <div className="checkpoint-stats">
          <div><strong>15</strong><span>Câu đã giải</span></div>
          <div><strong>{String(unlockedQuestions.length).padStart(2, '0')}</strong><span>Chứng cứ</span></div>
          <div><strong>{correctOnFirstAttempt}/15</strong><span>Đúng lần đầu</span></div>
        </div>
        <div className="final-verdict">
          <span>Kết luận điều tra</span>
          <p>
            {finalQuestion.transitionAfter?.dialogue} {finalQuestion.conclusion}
          </p>
        </div>
        <button className="primary-cta" type="button" onClick={onReplay}>
          <span>Điều tra lại từ đầu</span>
          <span aria-hidden="true">↻</span>
        </button>
      </section>
    </main>
  )
}

function ResetConfirmation({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onCancel}>
      <section
        className="intel-modal reset-modal"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="reset-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <span className="terminal-label">Xác nhận thao tác</span>
        <h2 id="reset-title">Đặt lại toàn bộ hồ sơ?</h2>
        <p>Tiến độ, chứng cứ và bốn quyền trợ giúp của lượt chơi hiện tại sẽ bị xóa.</p>
        <div className="reset-actions">
          <button type="button" onClick={onCancel}>Tiếp tục điều tra</button>
          <button type="button" className="is-danger" onClick={onConfirm}>Đặt lại hồ sơ</button>
        </div>
      </section>
    </div>
  )
}

function App() {
  const [state, dispatch] = useReducer(gameReducer, questions.length, loadGame)
  const [modal, setModal] = useState<ModalKind>(null)
  const [resetRequested, setResetRequested] = useState(false)

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

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return
      if (event.key === 'Escape') {
        setModal(null)
        setResetRequested(false)
        return
      }
      if (state.screen !== 'game' || modal || resetRequested) return

      if (event.key === 'Enter' && state.answerStatus === 'correct') {
        event.preventDefault()
        dispatch({ type: 'ADVANCE', question: currentQuestion })
        return
      }
      if (event.key === 'Enter' && state.answerStatus === 'wrong' && state.lives > 0) {
        event.preventDefault()
        dispatch({ type: 'RETRY' })
        return
      }

      const answerId = event.key.toUpperCase() as AnswerId
      if (!['A', 'B', 'C', 'D'].includes(answerId) || state.answerStatus || state.lives === 0) return
      if (state.eliminatedAnswers.includes(answerId) || state.attemptedAnswers.includes(answerId)) return
      event.preventDefault()
      dispatch({ type: 'ANSWER', answer: answerId, question: currentQuestion })
    }

    window.addEventListener('keydown', handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [currentQuestion, modal, resetRequested, state.answerStatus, state.attemptedAnswers, state.eliminatedAnswers, state.lives, state.screen])

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
    if (id === 'npc') {
      setModal('npc')
      return
    }
    dispatch({ type: 'USE_LIFELINE', id, question: currentQuestion })
    setModal(id)
  }

  const selectNpc = (npcId: NpcId) => {
    dispatch({ type: 'USE_LIFELINE', id: 'npc', question: currentQuestion, npcId })
  }

  const restartStage = () => {
    dispatch({ type: 'RESTART_STAGE' })
  }

  const resetGame = () => {
    setResetRequested(true)
  }

  const confirmReset = () => {
    setModal(null)
    setResetRequested(false)
    dispatch({ type: 'RESET' })
  }

  if (state.screen === 'intro') {
    return <IntroScreen onStart={() => dispatch({ type: 'OPEN_BRIEFING' })} />
  }

  if (state.screen === 'briefing') {
    return <BriefingScreen onContinue={() => dispatch({ type: 'START_GAME' })} />
  }

  if (state.screen === 'transition') {
    const completedQuestion = questions[(state.activeTransition ?? 5) - 1]
    return (
      <StageTransitionScreen
        completedQuestion={completedQuestion}
        unlockedQuestions={unlockedQuestions}
        onContinue={() => dispatch({ type: 'CONTINUE_AFTER_TRANSITION' })}
      />
    )
  }

  if (state.screen === 'ending') {
    return (
      <EndingScreen
        unlockedQuestions={unlockedQuestions}
        correctOnFirstAttempt={state.correctOnFirstAttempt.length}
        onReplay={() => dispatch({ type: 'RESET' })}
      />
    )
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
          consultedNpc={state.consultedNpc}
          unlockedQuestions={unlockedQuestions}
          onSelectNpc={selectNpc}
          onClose={() => setModal(null)}
        />
      )}
      {resetRequested && (
        <ResetConfirmation onCancel={() => setResetRequested(false)} onConfirm={confirmReset} />
      )}
    </>
  )
}

export default App
