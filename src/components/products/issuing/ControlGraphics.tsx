// Decorative graphics for the "You're in Control" section.
// These reproduce the original highnote.com module SVGs pragmatically
// (visually equivalent) rather than copying every text-as-path glyph.

export function ControlSpendGraphic() {
  return (
    <svg
      width="600"
      height="300"
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[600px]"
      aria-hidden="true"
    >
      <rect width="600" height="300" fill="white" />
      {/* card chip */}
      <rect x="56" y="40" width="48" height="48" rx="6" fill="#F5F3EB" />
      <rect x="69" y="56" width="22" height="16" rx="2" stroke="black" strokeWidth="2" />
      {/* three control rows */}
      {[0, 1, 2].map((i) => {
        const y = 120 + i * 50;
        return (
          <g key={i}>
            <rect x="56" y={y} width="488" height="36" rx="8" fill="#F5F3EB" />
            <rect x="72" y={y + 12} width="120" height="12" rx="6" fill="#E2E0D6" />
            <rect x={i === 1 ? 360 : i === 0 ? 420 : 300} y={y + 8} width="40" height="20" rx="10" fill="black" />
            <circle cx={(i === 1 ? 360 : i === 0 ? 420 : 300) + 28} cy={y + 18} r="7" fill="white" />
          </g>
        );
      })}
    </svg>
  );
}

export function DecisioningGraphic() {
  return (
    <svg
      width="600"
      height="300"
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[600px]"
      aria-hidden="true"
    >
      <rect width="600" height="300" fill="white" />
      {/* center node */}
      <rect x="276" y="126" width="48" height="48" rx="6" fill="#F5F3EB" />
      <path
        d="M290 150l6 6 12-12"
        stroke="black"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* surrounding reviewer chips connected by dashed lines */}
      {[
        { x: 56, y: 60 },
        { x: 496, y: 60 },
        { x: 56, y: 200 },
        { x: 496, y: 200 },
      ].map((p, i) => (
        <g key={i}>
          <line
            x1={p.x + 24}
            y1={p.y + 24}
            x2="300"
            y2="150"
            stroke="#E2E0D6"
            strokeDasharray="2 2"
          />
          <rect x={p.x} y={p.y} width="48" height="48" rx="6" fill="#F5F3EB" />
          <circle cx={p.x + 24} cy={p.y + 20} r="7" stroke="black" strokeWidth="2" />
          <path
            d={`M${p.x + 12} ${p.y + 38}c0-7 5-11 12-11s12 4 12 11`}
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}

export function MoveFundsGraphic() {
  return (
    <svg
      width="360"
      height="200"
      viewBox="0 0 360 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[360px]"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="359" height="79" rx="11.5" stroke="#E2E0D6" />
      <rect x="0.5" y="120.5" width="169" height="79" rx="11.5" stroke="#E2E0D6" />
      <rect x="190.5" y="120.5" width="169" height="79" rx="11.5" stroke="#E2E0D6" />
      {/* top account icon */}
      <rect x="14" y="16" width="48" height="48" rx="6" fill="#F5F3EB" />
      <rect x="29" y="32" width="18" height="12" rx="1" stroke="black" strokeWidth="2" />
      <circle cx="38" cy="38" r="2.5" stroke="black" strokeWidth="2" />
      {/* labels */}
      <rect x="80" y="30" width="140" height="10" rx="5" fill="black" />
      <rect x="80" y="48" width="100" height="8" rx="4" fill="#E2E0D6" />
      <rect x="40" y="150" width="110" height="10" rx="5" fill="black" />
      <rect x="210" y="150" width="110" height="10" rx="5" fill="black" />
      {/* connecting dashed lines */}
      <line x1="85.5" y1="80" x2="85.5" y2="120" stroke="#E2E0D6" strokeDasharray="2 2" />
      <line x1="275.5" y1="80" x2="275.5" y2="120" stroke="#E2E0D6" strokeDasharray="2 2" />
    </svg>
  );
}
