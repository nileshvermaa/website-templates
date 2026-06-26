export default function SpendHero() {
  return (
    <svg
      viewBox="124 -10 352 751"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A spend card taps a payment terminal; the transaction is evaluated against category, limit, and velocity rules, posts to the ledger, and completes"
      style={{
        fontFamily: '"Helvetica Now Text", Helvetica, Arial, sans-serif',
        maxWidth: "100%",
        height: "auto",
      }}
    >
      <defs>
        <linearGradient
          id="fleetGlowGrad"
          x1="135"
          y1="390"
          x2="465"
          y2="390"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#E1FF25" />
          <stop offset="0.5" stopColor="#55F5A3" />
          <stop offset="1" stopColor="#3FF7EC" />
        </linearGradient>
        <filter id="fleetGlowBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="13" />
        </filter>
        <linearGradient
          id="paintSpendCard"
          x1="124.829"
          y1="101.188"
          x2="475.37"
          y2="312.212"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#111111" />
          <stop offset="1" stopColor="#333333" />
        </linearGradient>
        <linearGradient
          id="paintSpendCardStroke"
          x1="143"
          y1="100"
          x2="464.5"
          y2="315"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B2B2B" />
          <stop offset="1" stopColor="#3D3D3D" />
        </linearGradient>
      </defs>

      {/* Terminal block */}
      <rect x="200" y="20" width="200" height="200" rx="20" fill="#111111" />

      {/* Glow under the card */}
      <g transform="translate(0 -28)">
        <rect
          x="150"
          y="348"
          width="300"
          height="68"
          rx="18"
          fill="url(#fleetGlowGrad)"
          filter="url(#fleetGlowBlur)"
        />
        <line x1="300.5" y1="323" x2="300.5" y2="335" stroke="#D3D1C7" />
        <line x1="300.5" y1="421" x2="300.5" y2="433" stroke="#D3D1C7" />
        <line x1="300.5" y1="649" x2="300.5" y2="661" stroke="#D3D1C7" />

        {/* Card */}
        <g>
          <rect
            x="125"
            y="100"
            width="350"
            height="215"
            rx="14"
            fill="url(#paintSpendCard)"
            stroke="url(#paintSpendCardStroke)"
            strokeWidth="2"
          />
          <svg x="387" y="124" width="64" height="40" viewBox="0 0 73 45" fill="none">
            <rect x="22.8127" y="4.39954" width="5.26856" height="44.7827" transform="rotate(-30 22.8127 4.39954)" fill="white" />
            <rect x="27.3765" y="1.76526" width="5.26856" height="31.6113" transform="rotate(60 27.3765 1.76526)" fill="white" />
            <rect x="24.8359" y="18.4408" width="5.26856" height="21.0742" transform="rotate(60 24.8359 18.4408)" fill="white" />
            <rect x="40.5481" y="24.5793" width="5.26856" height="31.6113" transform="rotate(60 40.5481 24.5793)" fill="white" />
            <rect x="56.7754" width="5.26856" height="31.6113" transform="rotate(60 56.7754 0)" fill="white" />
            <rect x="63.3608" y="11.4083" width="5.26856" height="21.0742" transform="rotate(60 63.3608 11.4083)" fill="white" />
            <rect x="69.9468" y="22.8143" width="5.26856" height="31.6113" transform="rotate(60 69.9468 22.8143)" fill="white" />
          </svg>
          {/* EMV chip */}
          <rect x="160" y="165" width="55" height="50" rx="10" fill="#EEEEEE" />
          <rect x="160" y="165" width="55" height="50" rx="10" fill="none" stroke="#CCCCCC" />
        </g>
      </g>

      {/* Transaction row */}
      <g transform="translate(0 -12)">
        <g>
          <path
            d="M125 371C125 362.163 132.163 355 141 355H459C467.837 355 475 362.163 475 371V409C475 417.837 467.837 425 459 425H141C132.163 425 125 417.837 125 409V371Z"
            fill="white"
          />
          <rect x="140" y="370" width="40" height="40" rx="8" fill="#F5F3EB" />
          <svg x="148" y="380" width="24" height="20" viewBox="0 0 24 20" fill="none">
            <path d="M23.1162 17.232L12 11.847V0L23.1162 17.232ZM24 19.2858L12 14.1889V19.2858H24Z" fill="#98002E" />
            <path d="M0.883789 17.232L12 0V11.847L0.883789 17.232Z" fill="#E31837" />
            <path d="M0 19.2854H12V14.1885L0 19.2854Z" fill="#E31837" />
          </svg>
          <text x="196" y="386" fontSize="16" fontWeight="500" fill="#0A0A0A">
            Delta Air Lines
          </text>
          <text x="196" y="406" fontSize="14" fill="#0A0A0A" fillOpacity="0.5">
            Travel
          </text>
          <text x="460" y="386" textAnchor="end" fontSize="16" fontWeight="500" fill="#0A0A0A">
            $612
          </text>
          <text x="460" y="406" textAnchor="end" fontSize="14" fontWeight="500" fill="#0A0A0A" fillOpacity="0.5">
            Pending
          </text>
        </g>
      </g>

      {/* Rule rows */}
      {[
        { y: 441, ty: 476, name: "Category", value: "Travel" },
        { y: 511, ty: 546, name: "Limit", value: "$612 of $5,000" },
        { y: 581, ty: 616, name: "Velocity", value: "1 of 4 Trips" },
      ].map((row) => (
        <g key={row.name}>
          <rect x="125" y={row.y} width="350" height="60" rx="16" fill="white" />
          <rect x="145" y={row.y + 15} width="30" height="30" rx="6" fill="#55F5A3" />
          <path
            d={`M154 ${row.y + 30}L158 ${row.y + 34}L166 ${row.y + 26}`}
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <text x="196" y={row.ty} fontSize="16" fontWeight="500" fill="#0A0A0A">
            {row.name}
          </text>
          <text x="460" y={row.ty} textAnchor="end" fontSize="14" fill="#0A0A0A" fillOpacity="0.5">
            {row.value}
          </text>
        </g>
      ))}

      {/* Ledger row */}
      <g transform="translate(0 -35)">
        <g>
          <path
            d="M125 720C125 711.163 132.163 704 141 704H459C467.837 704 475 711.163 475 720V758C475 766.837 467.837 774 459 774H141C132.163 774 125 766.837 125 758V720Z"
            fill="white"
          />
          <rect x="140" y="719" width="40" height="40" rx="8" fill="#F5F3EB" />
          <path d="M163.5 735H165.5V745H163.5V735Z" fill="black" />
          <rect x="154.5" y="741" width="2" height="2" fill="black" />
          <rect x="154.5" y="737" width="2" height="2" fill="black" />
          <path d="M161 742.062L164.493 745.992C164.497 745.996 164.504 745.996 164.508 745.992L168 742.062" stroke="black" strokeWidth="2" />
          <path d="M159 735.937L155.507 732.008C155.503 732.004 155.496 732.004 155.492 732.008L152 735.938" stroke="black" strokeWidth="2" />
          <text x="196" y="744" fontSize="16" fontWeight="500" fill="#0A0A0A">
            Ledger
          </text>
          <rect x="394" y="725" width="66" height="28" rx="4" fill="#55F5A3" fillOpacity="0.4" />
          <text x="427" y="744" textAnchor="middle" fontSize="13" fontWeight="500" fill="#0E6639">
            Posted
          </text>
        </g>
      </g>
    </svg>
  );
}
