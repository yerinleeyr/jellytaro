export default function DesignShowcase() {
  return (
    <div
      className="min-h-screen p-8 font-sans"
      style={{ background: "var(--gradient-ocean)" }}
    >
      <h1
        className="font-serif text-5xl text-mystic-frost text-glow-sky mb-2"
        style={{ textAlign: "center" }}
      >
        Mystic Tarot Design System
      </h1>
      <p className="text-sm text-mystic-mist mb-12" style={{ textAlign: "center" }}>
        v1.0 — Component Showcase
      </p>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* ── Colors ── */}
        <Section title="Color Palette">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {[
              { name: "deep", bg: "var(--mystic-deep)", light: true },
              { name: "navy", bg: "var(--mystic-navy)", light: true },
              { name: "azure", bg: "var(--mystic-azure)", light: true },
              { name: "sky", bg: "var(--mystic-sky)", light: false },
              { name: "mist", bg: "var(--mystic-mist)", light: false },
              { name: "frost", bg: "var(--mystic-frost)", light: false },
              { name: "emerald", bg: "var(--mystic-emerald)", light: false },
              { name: "amber", bg: "var(--mystic-amber)", light: false },
              { name: "rose", bg: "var(--mystic-rose)", light: false },
            ].map(({ name, bg, light }) => (
              <div
                key={name}
                className="rounded-xl p-3 flex flex-col gap-1"
                style={{ background: bg }}
              >
                <span
                  className="text-xs font-medium"
                  style={{ color: light ? "var(--mystic-mist)" : "var(--mystic-deep)" }}
                >
                  mystic-{name}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Typography ── */}
        <Section title="Typography">
          <div className="space-y-3">
            <p className="font-serif text-5xl text-mystic-frost text-glow-sky">
              타로 Tarot — 5xl serif
            </p>
            <p className="font-serif text-4xl text-mystic-mist">
              Daily Spread — 4xl serif
            </p>
            <p className="font-serif italic text-3xl text-mystic-sky">
              Mystic Oracle — 3xl serif italic
            </p>
            <p className="text-2xl text-mystic-mist">오늘의 카드 — 2xl sans</p>
            <p className="text-lg text-mystic-mist">운명의 메시지 — lg sans</p>
            <p className="text-base text-mystic-mist">본문 텍스트 — base sans</p>
            <p className="text-sm text-mystic-mist opacity-70">보조 텍스트 — sm sans</p>
            <p className="text-xs text-mystic-mist opacity-50">캡션 텍스트 — xs sans</p>
          </div>
        </Section>

        {/* ── Buttons ── */}
        <Section title="Buttons">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-primary">btn-primary</button>
            <button className="btn-ghost">btn-ghost</button>
            <button className="btn-ghost-danger">btn-ghost-danger</button>
            <button className="btn-pill">btn-pill</button>
            <button className="btn-pill btn-pill-active">btn-pill-active</button>
          </div>
        </Section>

        {/* ── Glass Cards ── */}
        <Section title="Glass Cards">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="glass-card rounded-2xl p-6">
              <p className="text-sm text-mystic-sky font-medium mb-1">glass-card</p>
              <p className="text-xs text-mystic-mist opacity-70">
                기본 글래스 카드. 배경 6% 불투명도.
              </p>
            </div>
            <div className="glass-card-subtle rounded-2xl p-6">
              <p className="text-sm text-mystic-sky font-medium mb-1">glass-card-subtle</p>
              <p className="text-xs text-mystic-mist opacity-70">
                더 투명한 서브틀 카드. 배경 3%.
              </p>
            </div>
            <div className="glass-card-elevated rounded-2xl p-6">
              <p className="text-sm text-mystic-sky font-medium mb-1">
                glass-card-elevated
              </p>
              <p className="text-xs text-mystic-mist opacity-70">
                강조된 카드. 배경 10%, 테두리 강조.
              </p>
            </div>
          </div>
        </Section>

        {/* ── Badges & Chips ── */}
        <Section title="Badges & Chips">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="badge-emerald">badge-emerald</span>
            <span className="badge-amber">badge-amber</span>
            <span className="badge-sky">badge-sky</span>
            <span className="badge-rose">badge-rose</span>
            <span className="chip">chip</span>
          </div>
        </Section>

        {/* ── Input ── */}
        <Section title="Input">
          <div className="max-w-sm space-y-3">
            <input className="input-mystic" placeholder="오늘의 질문을 입력하세요..." />
            <input className="input-mystic" defaultValue="입력된 텍스트 상태" />
          </div>
        </Section>

        {/* ── Glow Effects ── */}
        <Section title="Glow Effects">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="glass-card rounded-xl p-4 glow-sky">
              <p className="text-xs text-mystic-sky">glow-sky</p>
            </div>
            <div className="glass-card rounded-xl p-4 glow-sky-lg">
              <p className="text-xs text-mystic-sky">glow-sky-lg</p>
            </div>
            <div className="glass-card rounded-xl p-4 glow-sky-sm">
              <p className="text-xs text-mystic-sky">glow-sky-sm</p>
            </div>
            <div className="glass-card rounded-xl p-4 glow-emerald">
              <p className="text-xs text-mystic-emerald">glow-emerald</p>
            </div>
            <div className="glass-card rounded-xl p-4 glow-amber">
              <p className="text-xs text-mystic-amber">glow-amber</p>
            </div>
          </div>
        </Section>

        {/* ── Animations ── */}
        <Section title="Animations">
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className="animate-float w-12 h-12 rounded-xl glass-card-elevated glow-sky flex items-center justify-center text-mystic-sky text-lg"
              >
                ✦
              </div>
              <span className="text-xs text-mystic-mist opacity-60">animate-float</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="animate-twinkle w-12 h-12 rounded-xl glass-card-elevated glow-emerald flex items-center justify-center text-mystic-emerald text-lg"
              >
                ★
              </div>
              <span className="text-xs text-mystic-mist opacity-60">animate-twinkle</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="animate-pulse-glow w-12 h-12 rounded-xl glass-card-elevated flex items-center justify-center text-mystic-sky text-lg"
              >
                ◈
              </div>
              <span className="text-xs text-mystic-mist opacity-60">animate-pulse-glow</span>
            </div>
          </div>
        </Section>

        {/* ── Gradients ── */}
        <Section title="Gradients">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div
              className="rounded-xl p-6 h-20"
              style={{ background: "var(--gradient-ocean)" }}
            >
              <p className="text-xs text-mystic-mist">gradient-ocean</p>
            </div>
            <div
              className="rounded-xl p-6 h-20"
              style={{ background: "var(--gradient-sky)" }}
            >
              <p className="text-xs text-mystic-deep">gradient-sky</p>
            </div>
            <div
              className="rounded-xl p-6 h-20 border"
              style={{
                background: "var(--gradient-glass)",
                borderColor: "var(--mystic-border)",
              }}
            >
              <p className="text-xs text-mystic-mist">gradient-glass</p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs font-medium text-mystic-sky uppercase tracking-widest mb-4 opacity-70">
        {title}
      </h2>
      <div className="glass-card rounded-2xl p-6">{children}</div>
    </div>
  );
}
