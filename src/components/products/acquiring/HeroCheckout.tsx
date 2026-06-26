// Hero checkout-form graphic (desktop). A pragmatic reproduction of the
// IssuingCheckout module SVG: a white card with stacked input rows, a few
// payment-network glyphs, and absolutely-positioned demo card details.
export default function HeroCheckout() {
  const rows = [
    { y: 0, dashed: true, full: true },
    { y: 70, dashed: true, full: true },
    { y: 156, dashed: false, full: true },
    { y: 242, dashed: false, full: true, networks: true },
    { y: 292, dashed: false, full: false },
    { y: 362, dashed: true, full: true },
    { y: 432, dashed: true, full: false },
  ];

  return (
    <div className="relative">
      <svg
        width="420"
        height="472"
        viewBox="0 0 420 472"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[420px]"
      >
        <rect width="420" height="472" rx="16" fill="white" />
        {rows.map((r) => (
          <g key={r.y}>
            <rect
              x="30.5"
              y={r.y + 0.5}
              width={r.full ? 349 : 169}
              height="39"
              rx="7.5"
              fill="white"
              stroke="#E2E0D6"
              strokeDasharray={r.dashed ? "4 4" : undefined}
            />
            {!r.full && (
              <rect
                x="210.5"
                y={r.y + 0.5}
                width="169"
                height="39"
                rx="7.5"
                fill="white"
                stroke="#E2E0D6"
                strokeDasharray={r.dashed ? "4 4" : undefined}
              />
            )}
          </g>
        ))}
        {/* Mastercard glyph */}
        <g transform="translate(302 252)">
          <circle cx="7" cy="10" r="5" fill="#E7001A" />
          <circle cx="13" cy="10" r="5" fill="#F49B1C" fillOpacity="0.85" />
        </g>
        {/* Visa glyph */}
        <rect x="278" y="252" width="20" height="20" rx="4" fill="#1B16E6" />
        <text
          x="288"
          y="265"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fill="white"
          fontFamily="sans-serif"
        >
          VISA
        </text>
        {/* Amex glyph */}
        <rect x="326" y="252" width="20" height="20" rx="4" fill="#016FD0" />
        {/* Discover glyph */}
        <rect x="350" y="252" width="20" height="20" rx="4" fill="#F5F3EB" />
        <circle cx="360" cy="262" r="4" fill="#FFA201" />
        {/* top + bottom fades */}
        <rect x="17" y="422" width="375" height="50" fill="url(#hcFadeB)" />
        <rect
          x="395"
          y="50"
          width="375"
          height="50"
          transform="rotate(-180 395 50)"
          fill="url(#hcFadeT)"
        />
        <defs>
          <linearGradient id="hcFadeB" x1="0" y1="422" x2="0" y2="472" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="hcFadeT" x1="0" y1="50" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
      {/* Demo card details overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7.5%] top-[36%] text-xs text-black/80">Joan Smith</div>
        <div className="absolute left-[7.5%] top-[54%] text-xs text-black/80">
          4242 4242 4242 4242
        </div>
        <div className="absolute left-[7.5%] top-[64%] text-xs text-black/80">02/28</div>
        <div className="absolute left-[51%] top-[64%] text-xs text-black/80">243</div>
      </div>
    </div>
  );
}
