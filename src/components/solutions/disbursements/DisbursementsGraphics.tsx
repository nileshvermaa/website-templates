// Decorative inline SVG/CSS graphics for the Corporate Disbursements bento grid.
// Built in-house (like TravelGraphics) since the source cards used graphics that
// were not captured as standalone assets. Palette matches the Highnote system.

// Move Funds Blazingly Fast — same-day transfer vs. legacy 2-3 day timeline.
export function FastFundsGraphic() {
  return (
    <svg
      viewBox="0 0 600 300"
      className="h-auto w-full max-w-[360px]"
      role="img"
      aria-label=""
    >
      <rect width="600" height="300" rx="16" fill="#F5F3EB" />
      <g transform="translate(60,70)">
        <rect width="480" height="60" rx="12" fill="#fff" />
        <circle cx="40" cy="30" r="14" fill="#E2E0D6" />
        <rect x="70" y="20" width="180" height="8" rx="4" fill="#E2E0D6" />
        <rect x="70" y="34" width="110" height="6" rx="3" fill="#E2E0D6" />
        <rect x="360" y="16" width="90" height="28" rx="14" fill="#E2E0D6" opacity={0.6} />
      </g>
      <g transform="translate(60,150)">
        <rect width="480" height="60" rx="12" fill="#fff" />
        <circle cx="40" cy="30" r="14" fill="#55F5A3" />
        <rect x="70" y="20" width="180" height="8" rx="4" fill="#E2E0D6" />
        <rect x="70" y="34" width="110" height="6" rx="3" fill="#E2E0D6" />
        <rect x="360" y="16" width="90" height="28" rx="14" fill="#55F5A3" />
        <path
          d="M392 30 l8 8 l16 -18"
          fill="none"
          stroke="#0f3d2a"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

// Control Spend with Precision — dial + threshold bars.
export function PrecisionSpendGraphic() {
  return (
    <svg
      viewBox="0 0 600 300"
      className="h-auto w-full max-w-[360px]"
      role="img"
      aria-label=""
    >
      <rect width="600" height="300" rx="16" fill="#F5F3EB" />
      <g transform="translate(60,60)">
        <rect width="480" height="180" rx="14" fill="#fff" />
        <circle cx="80" cy="90" r="56" fill="none" stroke="#E2E0D6" strokeWidth="14" />
        <circle
          cx="80"
          cy="90"
          r="56"
          fill="none"
          stroke="#3FF7EC"
          strokeWidth="14"
          strokeDasharray="200 352"
          strokeLinecap="round"
          transform="rotate(-90 80 90)"
        />
        <circle cx="80" cy="90" r="28" fill="#3FF7EC" opacity={0.25} />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(190,${44 + i * 38})`}>
            <rect width="240" height="10" rx="5" fill="#E2E0D6" />
            <rect width={i === 0 ? 210 : i === 1 ? 130 : 175} height="10" rx="5" fill="#3FF7EC" />
          </g>
        ))}
      </g>
    </svg>
  );
}

// Send Money Anywhere — hub routing to ACH / A2A / virtual / physical rails.
export function SendAnywhereGraphic() {
  const rails = [
    { x: 120, y: 70, c: "#3FF7EC", label: "ACH" },
    { x: 480, y: 70, c: "#E1FF25", label: "A2A" },
    { x: 120, y: 230, c: "#55F5A3", label: "Virtual" },
    { x: 480, y: 230, c: "#111", label: "Physical" },
  ];
  return (
    <svg
      viewBox="0 0 600 300"
      className="h-auto w-full max-w-[360px]"
      role="img"
      aria-label=""
    >
      <rect width="600" height="300" rx="16" fill="#F5F3EB" />
      {rails.map((r, i) => (
        <line
          key={i}
          x1="300"
          y1="150"
          x2={r.x}
          y2={r.y}
          stroke="#E2E0D6"
          strokeWidth="3"
        />
      ))}
      {rails.map((r, i) => (
        <g key={`n${i}`}>
          <circle cx={r.x} cy={r.y} r="30" fill="#fff" stroke="#E2E0D6" strokeWidth="2" />
          <circle cx={r.x} cy={r.y} r="12" fill={r.c} />
        </g>
      ))}
      <circle cx="300" cy="150" r="44" fill="#fff" stroke="#E2E0D6" strokeWidth="2" />
      <circle cx="300" cy="150" r="20" fill="#111" />
    </svg>
  );
}

// Unified Ledger — API-driven ledger rows with status accents.
export function LedgerGraphic() {
  return (
    <svg
      viewBox="0 0 600 300"
      className="h-auto w-full max-w-[360px]"
      role="img"
      aria-label=""
    >
      <rect width="600" height="300" rx="16" fill="#F5F3EB" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r} transform={`translate(40,${48 + r * 56})`}>
          <rect width="520" height="40" rx="8" fill="#fff" />
          <circle cx="28" cy="20" r="10" fill={r % 2 ? "#3FF7EC" : "#55F5A3"} />
          <rect x="56" y="12" width="160" height="8" rx="4" fill="#E2E0D6" />
          <rect x="56" y="24" width="90" height="6" rx="3" fill="#E2E0D6" />
          <rect x="404" y="14" width="80" height="12" rx="6" fill="#111" opacity={0.85} />
        </g>
      ))}
    </svg>
  );
}

// Issue Cards Instantly — fanned stack of issued cards.
const CARD_GRADIENTS = [
  "linear-gradient(135deg,#111 0%,#2b2b2b 100%)",
  "linear-gradient(135deg,#1b3a5b 0%,#3FF7EC 160%)",
  "linear-gradient(135deg,#0f3d2a 0%,#55F5A3 200%)",
  "linear-gradient(135deg,#2d2a1a 0%,#E1FF25 200%)",
];

export function IssueCardsGraphic() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-[360px] items-center justify-center">
      {CARD_GRADIENTS.map((bg, i) => {
        const offset = i - (CARD_GRADIENTS.length - 1) / 2;
        return (
          <div
            key={i}
            className="absolute flex h-[180px] w-[290px] flex-col justify-between rounded-2xl p-5 text-white shadow-xl"
            style={{
              background: bg,
              transform: `translateY(${offset * 30}px) rotate(${offset * 4}deg)`,
              zIndex: i,
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-sm font-medium">Highnote</h2>
                <p className="text-xs opacity-70">Disbursement Card</p>
              </div>
              <span className="block h-5 w-7 rounded bg-white/30" />
            </div>
            <h3 className="font-mono text-lg tracking-widest">
              <span className="mr-2 align-middle">····</span>
              {1234 + i * 1111}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
