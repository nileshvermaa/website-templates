import Image from "next/image";

// Card 1 — Issue Cards Your Way (multi-product card art).
export function IssueCardsGraphic() {
  return (
    <Image
      alt=""
      width={360}
      height={300}
      className="h-auto w-full max-w-[360px]"
      src="/img/graphic-multiproduct.png"
    />
  );
}

// Card 2 — Design Rewards That Match Your Brand.
export function RewardsGraphic() {
  return (
    <Image
      alt=""
      width={360}
      height={300}
      className="h-auto w-full max-w-[360px]"
      src="/img/graphic-rewards2.svg"
    />
  );
}

// Card 3 — Insights That Drive Better Programs.
export function CreditInsightsGraphic() {
  return (
    <Image
      alt=""
      width={360}
      height={300}
      className="h-auto w-full max-w-[360px]"
      src="/img/graphic-creditinsights.svg"
    />
  );
}

// Card 5 — Unify Your Credit Experience.
export function CreditRewardsGraphic() {
  return (
    <Image
      alt=""
      width={360}
      height={300}
      className="h-auto w-full max-w-[360px]"
      src="/img/graphic-creditrewards.svg"
    />
  );
}

// Card 4 — See Activity as it Happens (real-time ledger, inline SVG).
// Recreates the original IssuingLedger module graphic with a CSS/SVG ledger.
export function RealtimeLedgerGraphic() {
  const rows = [
    { label: "Authorization", amount: "+ $128.00", accent: "#55F5A3" },
    { label: "Capture", amount: "+ $128.00", accent: "#3FF7EC" },
    { label: "Refund", amount: "− $24.50", accent: "#E1FF25" },
    { label: "Dispute", amount: "− $60.00", accent: "#FF5A5F" },
  ];
  return (
    <svg
      viewBox="0 0 600 300"
      className="h-auto w-full max-w-[360px]"
      role="img"
      aria-label=""
    >
      <rect x="120" y="40" width="360" height="220" rx="12" fill="#F5F3EB" />
      {rows.map((r, i) => (
        <g key={r.label} transform={`translate(144,${68 + i * 48})`}>
          <rect width="312" height="36" rx="8" fill="#fff" />
          <circle cx="26" cy="18" r="9" fill={r.accent} />
          <rect x="48" y="10" width="120" height="7" rx="3.5" fill="#1f1f1f" opacity={0.85} />
          <rect x="48" y="22" width="70" height="6" rx="3" fill="#E2E0D6" />
          <rect x="226" y="12" width="64" height="12" rx="6" fill={r.accent} opacity={0.85} />
        </g>
      ))}
    </svg>
  );
}

// Card 6 — Operate with Built-In Compliance Oversight (trust badges).
export function ComplianceBadgesGraphic() {
  const badges = [
    { src: "/img/icon-pci.svg", size: "h-10 w-10" },
    { src: "/img/icon-aicpa.svg", size: "h-12 w-12" },
    { src: "/img/icon-aes.svg", size: "h-10 w-10" },
  ];
  return (
    <div className="flex h-[200px] items-center justify-center gap-8">
      {badges.map((b) => (
        <Image
          key={b.src}
          alt=""
          width={48}
          height={48}
          className={b.size}
          src={b.src}
        />
      ))}
    </div>
  );
}
