// Fleet hero animation, reproduced from the original highnote.com module SVG.
// A fleet card taps a terminal; the transaction is evaluated against category,
// limit, and velocity rules, posts to the ledger, and completes.
export default function FleetHero() {
  return (
    <div
      className="bg-ash/30 rounded-highnote flex items-center justify-center py-8 lg:h-[700px] lg:overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 0, 0, 0.09) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <svg
        viewBox="124 -10 352 751"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="A fleet card taps a payment terminal; the transaction is evaluated against category, limit, and velocity rules, posts to the ledger, and completes"
        className="w-[280px] max-w-full"
        style={{ fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif' }}
      >
        <defs>
          <linearGradient id="fleetGlowGrad" x1="135" y1="390" x2="465" y2="390" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#E1FF25" />
            <stop offset="0.5" stopColor="#55F5A3" />
            <stop offset="1" stopColor="#3FF7EC" />
          </linearGradient>
          <filter id="fleetGlowBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="13" />
          </filter>
          <linearGradient id="fleetCardGrad" x1="124.829" y1="101.188" x2="475.37" y2="312.212" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2047F4" />
            <stop offset="1" stopColor="#2141D2" />
          </linearGradient>
          <linearGradient id="fleetCardStroke" x1="143" y1="100" x2="464.5" y2="315" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2140CA" />
            <stop offset="1" stopColor="#1E3BBC" />
          </linearGradient>
        </defs>

        {/* terminal */}
        <rect x="200" y="20" width="200" height="200" rx="20" fill="#111111" />
        <circle cx="300" cy="120" r="46" fill="white" fillOpacity="0.08" />
        <path
          d="M300 96a24 24 0 0 1 0 48M288 104a14 14 0 0 1 0 32M276 112a4 4 0 0 1 0 16"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* glow + connectors + card */}
        <g transform="translate(0 -28)">
          <rect x="150" y="348" width="300" height="68" rx="18" fill="url(#fleetGlowGrad)" filter="url(#fleetGlowBlur)" opacity="0.7" />
          <line x1="300.5" y1="323" x2="300.5" y2="335" stroke="#D3D1C7" />
          <line x1="300.5" y1="421" x2="300.5" y2="433" stroke="#D3D1C7" />
          <line x1="300.5" y1="649" x2="300.5" y2="661" stroke="#D3D1C7" />
          {/* card */}
          <rect x="125" y="100" width="350" height="215" rx="14" fill="url(#fleetCardGrad)" stroke="url(#fleetCardStroke)" strokeWidth="2" />
          <rect x="160" y="165" width="55" height="50" rx="10" fill="#2146E7" />
          <text x="150" y="285" fontSize="22" fontWeight="600" fill="white">
            VISA
          </text>
        </g>

        {/* posted ledger row */}
        <g transform="translate(0 -12)">
          <path
            d="M125 371C125 362.163 132.163 355 141 355H459C467.837 355 475 362.163 475 371V409C475 417.837 467.837 425 459 425H141C132.163 425 125 417.837 125 409V371Z"
            fill="white"
          />
          <rect x="140" y="370" width="40" height="40" rx="8" fill="#F5F3EB" />
          <text x="196" y="386" fontSize="16" fontWeight="500" fill="#0A0A0A">
            Shell #1824
          </text>
          <text x="196" y="406" fontSize="14" fill="#0A0A0A" fillOpacity="0.5">
            Fuel &amp; Gas
          </text>
          <text x="460" y="386" textAnchor="end" fontSize="16" fontWeight="500" fill="#0A0A0A">
            $620
          </text>
          <text x="460" y="406" textAnchor="end" fontSize="14" fontWeight="500" fill="#1A7A4A">
            Complete
          </text>
        </g>

        {/* rule rows: Category / Limit / Velocity */}
        {[
          { y: 441, label: "Category", value: "Fuel & Gas" },
          { y: 511, label: "Limit", value: "$620 of $1,000" },
          { y: 581, label: "Velocity", value: "1 of 2 Daily Fills" },
        ].map((row) => (
          <g key={row.label}>
            <rect x="125" y={row.y} width="350" height="60" rx="16" fill="white" />
            <rect x="145" y={row.y + 15} width="30" height="30" rx="6" fill="#55F5A3" />
            <path
              d={`M154 ${row.y + 30}L158 ${row.y + 34}L166 ${row.y + 26}`}
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <text x="196" y={row.y + 35} fontSize="16" fontWeight="500" fill="#0A0A0A">
              {row.label}
            </text>
            <text x="460" y={row.y + 35} textAnchor="end" fontSize="14" fill="#0A0A0A" fillOpacity="0.5">
              {row.value}
            </text>
          </g>
        ))}

        {/* ledger posted */}
        <g transform="translate(0 -35)">
          <path
            d="M125 720C125 711.163 132.163 704 141 704H459C467.837 704 475 711.163 475 720V758C475 766.837 467.837 774 459 774H141C132.163 774 125 766.837 125 758V720Z"
            fill="white"
          />
          <rect x="140" y="719" width="40" height="40" rx="8" fill="#F5F3EB" />
          <text x="196" y="744" fontSize="16" fontWeight="500" fill="#0A0A0A">
            Ledger
          </text>
          <rect x="394" y="725" width="66" height="28" rx="4" fill="#55F5A3" fillOpacity="0.4" />
          <text x="427" y="744" textAnchor="middle" fontSize="13" fontWeight="500" fill="#0E6639">
            Posted
          </text>
        </g>
      </svg>
    </div>
  );
}
