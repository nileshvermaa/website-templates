import { asset } from "@/lib/asset";

// Card-network logos that scroll horizontally (was PaymentsMarquee CSS module).
const PAYMENT_ICONS = [
  "/img/icon-payment-visa.svg",
  "/img/icon-payment-mc.svg",
  "/img/icon-payment-amex.svg",
  "/img/icon-payment-discover.svg",
  "/img/icon-payment-maestro.svg",
  "/img/icon-payment-interlink.svg",
];

export function PaymentsMarqueeGraphic() {
  const row = [...PAYMENT_ICONS, ...PAYMENT_ICONS];
  return (
    <div className="relative h-[300px] w-full max-w-[360px] overflow-hidden">
      <div className="flex h-full items-center">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {row.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              alt=""
              src={asset(src)}
              className="h-10 w-auto shrink-0"
            />
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white to-transparent" />
      <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-white to-transparent" />
    </div>
  );
}

// Unified ledger graphic (decorative). Original AcquiringLedger 360x300.
export function AcquiringLedgerGraphic() {
  return (
    <svg
      viewBox="0 0 360 300"
      className="h-auto w-full max-w-[360px]"
      role="img"
      aria-label=""
    >
      <rect width="360" height="300" rx="12" fill="#fff" />
      <rect
        x="0.5"
        y="40.5"
        width="359"
        height="259"
        rx="11.5"
        fill="#fff"
        stroke="#E2E0D6"
      />
      {[0, 1, 2, 3].map((r) => (
        <g key={r} transform={`translate(20,${64 + r * 56})`}>
          <rect width="320" height="40" rx="8" fill="#F5F3EB" />
          <circle cx="28" cy="20" r="10" fill={r % 2 ? "#888" : "#55F5A3"} />
          <rect x="56" y="12" width="120" height="8" rx="4" fill="#E2E0D6" />
          <rect x="56" y="24" width="70" height="6" rx="3" fill="#E2E0D6" />
          <rect
            x="232"
            y="14"
            width="68"
            height="12"
            rx="6"
            fill="#55F5A3"
            opacity={0.85}
          />
        </g>
      ))}
    </svg>
  );
}

// Access funds fast graphic (decorative). Original Qnn7LG: line + logo + back.
export function AccessFundsGraphic() {
  return (
    <svg
      viewBox="0 0 360 300"
      className="h-auto w-full max-w-[360px]"
      role="img"
      aria-label=""
    >
      <rect width="360" height="300" rx="12" fill="#fff" />
      <circle cx="90" cy="150" r="40" fill="#F5F3EB" stroke="#E2E0D6" />
      <circle cx="270" cy="150" r="40" fill="#111" />
      <path
        d="M130 150 H230"
        stroke="#55F5A3"
        strokeWidth="4"
        strokeDasharray="10 8"
        strokeLinecap="round"
      />
      <path
        d="M210 138 L232 150 L210 162"
        fill="none"
        stroke="#55F5A3"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="90"
        y="156"
        textAnchor="middle"
        fontSize="22"
        fontWeight="600"
        fill="#111"
      >
        $
      </text>
      <text
        x="270"
        y="156"
        textAnchor="middle"
        fontSize="22"
        fontWeight="600"
        fill="#fff"
      >
        H
      </text>
    </svg>
  );
}

// Centralized vault graphic (decorative). Original M2sVsG: customer + card + gradient.
export function CentralizedVaultGraphic() {
  return (
    <div className="relative mx-auto flex h-[300px] w-full max-w-[360px] items-center justify-center overflow-hidden">
      <div
        className="absolute h-48 w-48 rounded-full opacity-40 blur-2xl"
        style={{ background: "radial-gradient(circle,#55F5A3 0%,transparent 70%)" }}
      />
      <div className="relative flex h-[180px] w-[290px] flex-col justify-between rounded-2xl bg-[linear-gradient(135deg,#111_0%,#2b2b2b_100%)] p-5 text-white shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm font-medium">Secure Vault</h2>
            <p className="text-xs opacity-70">Tokenized</p>
          </div>
          <span className="block h-5 w-7 rounded bg-white/30" />
        </div>
        <h3 className="font-mono text-lg tracking-widest">
          <span className="mr-2 align-middle">····</span>
          4242
        </h3>
      </div>
    </div>
  );
}
