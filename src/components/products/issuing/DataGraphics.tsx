// Decorative graphics for the "Full Data Access & Visibility" section.
// The ledger SVG is reproduced pragmatically (visually equivalent to the
// original text-as-path module graphic). The transaction-data card renders
// the real field-name content as a masked, scrolling pill grid.

export function LedgerGraphic() {
  const rows = [
    { label: true },
    { label: false },
    { label: false },
    { label: false },
    { label: false },
  ];
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
      {/* ledger panel */}
      <rect x="120.5" y="40.5" width="359" height="224" rx="11.5" fill="#F5F3EB" />
      {/* header */}
      <rect x="140" y="64" width="90" height="10" rx="5" fill="black" />
      <rect x="389" y="64" width="70" height="10" rx="5" fill="black" />
      <line x1="140" y1="92" x2="460" y2="92" stroke="#E2E0D6" />
      {/* rows */}
      {rows.map((r, i) => {
        const y = 108 + i * 30;
        return (
          <g key={i}>
            <rect x="140" y={y} width={120 + (i % 3) * 30} height="9" rx="4.5" fill="#E2E0D6" />
            <rect
              x={389}
              y={y}
              width="70"
              height="9"
              rx="4.5"
              fill={i === 0 ? "black" : "#E2E0D6"}
            />
            {i < rows.length - 1 && (
              <line x1="140" y1={y + 21} x2="460" y2={y + 21} stroke="#E2E0D6" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

const ROW_1 = [
  "Card Network",
  "Approved Amount",
  "Status",
  "PAN Entry Mode",
  "Recurring",
  "Requested Amount",
  "Card Product",
  "Account Holder",
  "Merchant Description",
  "Merchant ID",
];
const ROW_2 = [
  "Card Present",
  "Created At",
  "Card Data Input",
  "AVS Address Response",
  "Processing Type",
  "Auth Expiration",
  "Terminal Attendance",
  "AVS Postal Code Response",
  "Merchant Category",
  "PIN Entry Mode",
];
const ROW_3 = [
  "Advice",
  "Account Holder Present",
  "CVV Response",
  "Partial Clearing",
  "Merchant Country",
  "Card Network",
  "Approved Amount",
  "Status",
  "PAN Entry Mode",
  "Merchant Name",
];
const ROW_4 = [
  "Merchant Category",
  "Card Present",
  "Updated At",
  "Merchant ID",
  "Merchant Country",
  "Card Product",
  "CVV Response",
  "Terminal Attendance",
  "Requested Amount",
  "Account Holder",
];

function PillRow({
  items,
  reverse,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center gap-2.5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center gap-2.5"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((name, i) => (
              <div
                key={`${copy}-${i}`}
                className="bg-ash/60 flex shrink-0 items-center gap-2 rounded-full px-3 py-2"
              >
                <span className="bg-ash inline-block h-4 w-4 rounded" />
                <span className="text-xxs font-medium whitespace-nowrap sm:text-xs">
                  {name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TransactionDataGraphic() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-2.5 py-4">
        <PillRow items={ROW_1} />
        <PillRow items={ROW_2} reverse />
        <PillRow items={ROW_3} />
        <PillRow items={ROW_4} reverse />
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white to-transparent" />
      <div className="pointer-events-none absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-white to-transparent" />
    </div>
  );
}
