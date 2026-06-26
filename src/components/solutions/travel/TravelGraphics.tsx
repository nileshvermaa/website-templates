import { asset } from "@/lib/asset";

// Fanned stack of branded virtual cards (was InstantVirtualCards CSS module).
const CARDS = [
  { label: "Airline", digits: "4567" },
  { label: "Hotel", digits: "0987" },
  { label: "Tour Operator", digits: "6543" },
  { label: "Wholesaler", digits: "1423" },
  { label: "Resort", digits: "9573" },
  { label: "Partner", digits: "2064" },
];

const CARD_GRADIENTS = [
  "linear-gradient(135deg,#111 0%,#2b2b2b 100%)",
  "linear-gradient(135deg,#98002E 0%,#E31837 100%)",
  "linear-gradient(135deg,#1b3a5b 0%,#3FF7EC 160%)",
  "linear-gradient(135deg,#2d2a1a 0%,#E1FF25 200%)",
  "linear-gradient(135deg,#0f3d2a 0%,#55F5A3 200%)",
  "linear-gradient(135deg,#3a2350 0%,#9b6bd6 160%)",
];

export function InstantVirtualCardsGraphic() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-[360px] items-center justify-center">
      {CARDS.map((card, i) => {
        const offset = i - (CARDS.length - 1) / 2;
        return (
          <div
            key={card.label}
            className="absolute flex h-[180px] w-[290px] flex-col justify-between rounded-2xl p-5 text-white shadow-xl"
            style={{
              background: CARD_GRADIENTS[i],
              transform: `translateY(${offset * 26}px) rotate(${offset * 4}deg)`,
              zIndex: i,
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-sm font-medium">Virtual Card</h2>
                <p className="text-xs opacity-70">{card.label}</p>
              </div>
              <span className="block h-5 w-7 rounded bg-white/30" />
            </div>
            <h3 className="font-mono text-lg tracking-widest">
              <span className="mr-2 align-middle">····</span>
              {card.digits}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

// Unified ledger graphic (decorative). Original 600x300 with #FF5A5F accents.
export function UnifiedLedgerGraphic() {
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
          <circle cx="28" cy="20" r="10" fill={r % 2 ? "#888" : "#FF5A5F"} />
          <rect x="56" y="12" width="160" height="8" rx="4" fill="#E2E0D6" />
          <rect x="56" y="24" width="90" height="6" rx="3" fill="#E2E0D6" />
          <rect x="404" y="14" width="80" height="12" rx="6" fill="#FF5A5F" opacity={0.85} />
        </g>
      ))}
    </svg>
  );
}

// Configurable spend controls graphic (decorative). Original used #55F5A3 / #4EED9B.
export function SpendControlsGraphic() {
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
          stroke="#55F5A3"
          strokeWidth="14"
          strokeDasharray="250 352"
          strokeLinecap="round"
          transform="rotate(-90 80 90)"
        />
        <circle cx="80" cy="90" r="28" fill="#4EED9B" opacity={0.25} />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(190,${44 + i * 38})`}>
            <rect width="240" height="10" rx="5" fill="#E2E0D6" />
            <rect width={i === 1 ? 150 : i === 0 ? 200 : 100} height="10" rx="5" fill="#55F5A3" />
          </g>
        ))}
      </g>
    </svg>
  );
}

// Collaborative authorization graphic (decorative).
export function CollaborativeAuthGraphic() {
  return (
    <svg
      viewBox="0 0 600 300"
      className="h-auto w-full max-w-[360px]"
      role="img"
      aria-label=""
    >
      <rect width="600" height="300" rx="16" fill="#F5F3EB" />
      <line x1="170" y1="150" x2="300" y2="90" stroke="#E2E0D6" strokeWidth="3" />
      <line x1="170" y1="150" x2="300" y2="210" stroke="#E2E0D6" strokeWidth="3" />
      <line x1="300" y1="90" x2="430" y2="150" stroke="#E2E0D6" strokeWidth="3" />
      <line x1="300" y1="210" x2="430" y2="150" stroke="#E2E0D6" strokeWidth="3" />
      {[
        { x: 170, y: 150, c: "#111" },
        { x: 300, y: 90, c: "#3FF7EC" },
        { x: 300, y: 210, c: "#E1FF25" },
        { x: 430, y: 150, c: "#55F5A3" },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="34" fill="#fff" stroke="#E2E0D6" strokeWidth="2" />
          <circle cx={n.x} cy={n.y} r="14" fill={n.c} />
        </g>
      ))}
    </svg>
  );
}

// Dynamic funding / float control graphic (decorative). Original 360x200.
export function FundsGraphic() {
  return (
    <svg
      viewBox="0 0 360 200"
      className="h-auto w-full max-w-[320px]"
      role="img"
      aria-label=""
    >
      <rect width="360" height="200" rx="14" fill="#F5F3EB" />
      <polyline
        points="20,150 70,120 120,135 170,80 220,100 270,50 330,70"
        fill="none"
        stroke="#111"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points="20,150 70,120 120,135 170,80 220,100 270,50 330,70 330,180 20,180"
        fill="#55F5A3"
        opacity={0.18}
      />
      {[70, 170, 270].map((cx, i) => (
        <circle key={i} cx={cx} cy={[120, 80, 50][i]} r="5" fill="#111" />
      ))}
    </svg>
  );
}

export function GraphqlApiGraphic() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt="" src={asset("/img/graphic-graphqlapi.svg")} />
  );
}
