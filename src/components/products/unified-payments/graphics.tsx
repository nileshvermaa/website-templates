// Decorative SVG/markup graphics for the Unified Payments product page.
// Big inline SVGs from the source are reproduced pragmatically (text-as-paths
// rendered with real <text>, module-hash classnames mapped to ambient/keyframe
// utilities) while keeping the original layout, colors and gradients.

// ----- Hero: the orbiting "Unified Platform" diagram -----
export function UnifiedPlatformOrbit() {
  const sat = (cx: number, cy: number, label: string) => (
    <g>
      <circle cx={cx} cy={cy} r={125} stroke="black" strokeOpacity="0.3" fill="none" />
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fontSize="14"
        fontWeight="500"
        fill="black"
        fontFamily="var(--font-display)"
      >
        {label}
      </text>
    </g>
  );

  return (
    <div className="mx-auto w-full max-w-[602px]">
      <svg
        width="602"
        height="602"
        viewBox="0 0 602 602"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <path
          d="M301 601C466.685 601 601 466.685 601 301C601 135.315 466.685 1 301 1C135.315 1 1 135.315 1 301C1 466.685 135.315 601 301 601Z"
          fill="url(#paint0_linear_1449_261)"
        />
        {sat(301, 425, "Acquiring")}
        {sat(191, 235, "Issuing")}
        {sat(411, 235, "Credit")}
        <circle cx="301" cy="300" r="50" fill="url(#paint1_linear_1449_261)" />
        <circle
          cx="301"
          cy="300"
          r="49.5"
          stroke="black"
          strokeOpacity="0.4"
          strokeDasharray="4 4"
          fill="none"
          className="origin-center animate-spin-slow"
          style={{ transformBox: "fill-box" }}
        />
        <text
          x="301"
          y="304"
          textAnchor="middle"
          fontSize="14"
          fontWeight="500"
          fill="black"
          fontFamily="var(--font-display)"
        >
          Ledger
        </text>
        <defs>
          <linearGradient
            id="paint0_linear_1449_261"
            x1="1"
            y1="1"
            x2="601"
            y2="601"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E1FF25" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#55F5A3" />
            <stop offset="1" stopColor="#00FFF0" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1449_261"
            x1="251"
            y1="250"
            x2="351"
            y2="350"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#71F791" />
            <stop offset="1" stopColor="#52F6B4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ----- Unified Ledgers card graphic -----
export function LedgerGraphic() {
  const txn = (icon: React.ReactNode, name: string, status: string, amount: string) => (
    <div className="bg-bone/0 flex items-center justify-between rounded-xl border border-ash px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg">{icon}</div>
        <div className="text-xs">
          <div className="font-medium">{name}</div>
          <div className="opacity-50">{status}</div>
        </div>
      </div>
      <div className="font-mono text-sm font-medium">{amount}</div>
    </div>
  );

  return (
    <div className="relative mx-auto w-full max-w-[480px] px-5 pb-5">
      <div className="space-y-3">
        {txn(
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-[10px] font-bold text-white">
            VISA
          </div>,
          "Card Payment",
          "Authorized · Completed",
          "+$1,240.00",
        )}
        {txn(
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF5A5F] text-lg text-white">
            ↺
          </div>,
          "Refund",
          "Authorized · Completed",
          "-$320.00",
        )}
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-bone px-4 py-4 font-mono text-xs">
        <div className="flex justify-between">
          <span className="opacity-60">Pending</span>
          <span>$4,820.00</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-60">Available</span>
          <span>$18,300.00</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-60">Ledger Balance</span>
          <span>$23,120.00</span>
        </div>
      </div>
    </div>
  );
}

// ----- Take Full Control card graphic (underwriting flow) -----
export function ControlGraphic() {
  return (
    <div className="mx-auto w-full max-w-[480px]">
      <svg
        width="600"
        height="300"
        viewBox="0 0 600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <rect width="600" height="300" fill="white" />
        <rect x="56" y="126" width="48" height="48" rx="6" fill="#F5F3EB" />
        <circle cx="80" cy="146" r="4" stroke="black" strokeWidth="2" />
        <path d="M80 150v10M70 168h20" stroke="black" strokeWidth="2" />

        <rect x="155" y="67" width="48" height="48" rx="8" fill="#55F5A3" />
        <rect x="144.5" y="56.5" width="179" height="69" rx="11.5" stroke="#E2E0D6" />
        <text x="220" y="86" fontSize="13" fontWeight="500" fill="black">Set Limits</text>
        <text x="220" y="104" fontSize="11" fill="black" fillOpacity="0.5">Approved</text>

        <rect x="144.5" y="174.5" width="179" height="69" rx="11.5" stroke="#E2E0D6" />
        <rect x="155" y="185" width="48" height="48" rx="8" fill="black" />
        <text x="220" y="206" fontSize="13" fontWeight="500" fill="black">Rewards</text>
        <text x="220" y="224" fontSize="11" fill="black" fillOpacity="0.5">Configured</text>

        <rect x="364.5" y="115.5" width="179" height="69" rx="11.5" stroke="#E2E0D6" />
        <rect x="375" y="126" width="48" height="48" rx="8" fill="#4EED9B" />
        <g>
          <circle cx="399" cy="150" r="9" stroke="white" strokeWidth="2" />
          <path d="M395 150l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
        </g>
        <text x="440" y="146" fontSize="13" fontWeight="500" fill="black">Approval</text>
        <text x="440" y="164" fontSize="11" fill="black" fillOpacity="0.5">Granted</text>

        <path d="M324 91h30v60h10" stroke="#E2E0D6" fill="none" />
        <path d="M324 209h30v-60h10" stroke="#E2E0D6" fill="none" />
      </svg>
    </div>
  );
}

// ----- Rich Transaction Detail card graphic (scrolling pill rows) -----
const TXN_FIELDS = [
  "Card Network", "Approved Amount", "Status", "PAN Entry Mode", "Recurring",
  "Requested Amount", "Card Product", "Account Holder", "Merchant Description",
  "Merchant ID", "Card Present", "Created At", "Card Data Input",
  "AVS Address Response", "Processing Type", "Auth Expiration",
  "Terminal Attendance", "AVS Postal Code Response", "Merchant Category",
  "PIN Entry Mode", "Advice", "Account Holder Present", "CVV Response",
  "Partial Clearing", "Merchant Country", "Merchant Name", "Updated At",
];

function pillRow(items: string[], reverse: boolean) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center gap-2 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-2" aria-hidden={copy === 1 || undefined}>
            {items.map((label, i) => (
              <div
                key={`${copy}-${i}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-ash bg-white px-3 py-2 text-xs whitespace-nowrap"
              >
                <span className="h-2 w-2 rounded-full bg-ash" />
                {label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TransactionDetailsGraphic() {
  const rows = [
    TXN_FIELDS.slice(0, 10),
    TXN_FIELDS.slice(8, 18),
    TXN_FIELDS.slice(15, 25),
    TXN_FIELDS.slice(2, 12),
  ];
  return (
    <div className="relative mx-10 flex h-full flex-col justify-center overflow-hidden">
      <div className="mx-auto space-y-2 pt-10 pb-10 sm:pt-0">
        {rows.map((row, i) => pillRow(row, i % 2 === 1))}
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white to-transparent" />
      <div className="pointer-events-none absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-white to-transparent" />
    </div>
  );
}

// ----- Unlock Big Benefits cards: 3 stacked pill rows with dashed connectors -----
export function StackedFlowGraphic() {
  return (
    <div className="mx-auto w-full max-w-[360px] px-5 py-10 sm:px-10 sm:pt-0 sm:pb-10">
      <svg
        width="360"
        height="260"
        viewBox="0 0 360 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <rect width="360" height="60" rx="10" fill="#F5F3EB" />
        <rect y="100" width="360" height="60" rx="10" fill="url(#sfGrad)" />
        <rect y="200" width="360" height="60" rx="10" fill="#F5F3EB" />
        <path
          d="M180 60v40"
          stroke="#B1AEA0"
          strokeDasharray="2 4"
        />
        <path
          d="M180 160v40"
          stroke="#B1AEA0"
          strokeDasharray="2 4"
        />
        <text x="20" y="35" fontSize="13" fontWeight="500" fill="black">Your Account</text>
        <text x="20" y="135" fontSize="13" fontWeight="500" fill="black">Highnote Platform</text>
        <text x="20" y="235" fontSize="13" fontWeight="500" fill="black">Customer</text>
        <defs>
          <linearGradient
            id="sfGrad"
            x1="0"
            y1="100"
            x2="347.289"
            y2="202.9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#55F5A3" />
            <stop offset="1" stopColor="#E1FF25" stopOpacity="0.64" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
