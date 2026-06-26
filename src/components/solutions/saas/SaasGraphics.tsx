// Page-specific decorative graphics for /solutions/saas.
// The real page renders the Unified Ledger card with a large inline SVG (a
// double-entry ledger panel drawn as text paths). We reproduce the look with a
// lightweight decorative SVG instead of porting the heavy path data.

export function UnifiedLedgerGraphic() {
  return (
    <svg
      viewBox="0 0 600 300"
      className="h-auto w-full max-w-[360px]"
      role="img"
      aria-label=""
    >
      <rect x="120" y="100" width="360" height="160" rx="12" fill="#F5F3EB" />
      <rect x="120" y="100" width="360" height="34" rx="12" fill="#E2E0D6" />
      <rect x="120" y="122" width="360" height="12" fill="#E2E0D6" />
      <text
        x="144"
        y="123"
        fontFamily="monospace"
        fontSize="13"
        fill="#111"
        opacity={0.8}
      >
        Account
      </text>
      <text
        x="300"
        y="123"
        fontFamily="monospace"
        fontSize="13"
        fill="#111"
        opacity={0.8}
      >
        Debit
      </text>
      <text
        x="404"
        y="123"
        fontFamily="monospace"
        fontSize="13"
        fill="#111"
        opacity={0.8}
      >
        Credit
      </text>
      {[0, 1, 2, 3].map((r) => (
        <g key={r} transform={`translate(120,${146 + r * 28})`}>
          <rect x="24" y="6" width="120" height="8" rx="4" fill="#CFCDC2" />
          <rect
            x="296"
            y="6"
            width="64"
            height="8"
            rx="4"
            fill={r % 2 ? "#CFCDC2" : "#111"}
            opacity={r % 2 ? 1 : 0.8}
          />
          <rect
            x="400"
            y="6"
            width="64"
            height="8"
            rx="4"
            fill={r % 2 ? "#111" : "#CFCDC2"}
            opacity={r % 2 ? 0.8 : 1}
          />
          {r < 3 && (
            <line x1="24" y1="22" x2="464" y2="22" stroke="#E2E0D6" strokeWidth="1" />
          )}
        </g>
      ))}
    </svg>
  );
}
