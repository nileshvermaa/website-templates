/* Static reproductions of the six "What Highnote Gives You" card mockups.
   The live site cycles values via CSS keyframes; here we render the
   representative first state of each cycle. All text is preserved. */

export function CardIssuanceGraphic() {
  return (
    <div className="w-full max-w-[320px] px-6">
      <div className="rounded-highnote bg-blackBG p-5 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <div className="text-xxs tracking-wide uppercase opacity-60">
            Spend Card
          </div>
          <div className="flex flex-col items-end gap-0.5 text-[10px] opacity-70">
            <span>Employee · M. Reyes</span>
            <span>Department · Marketing</span>
            <span>Cost Center · Growth</span>
          </div>
        </div>
        <div className="mt-8 font-mono text-base tracking-[0.2em]">
          ···· 4821
        </div>
      </div>
      <div className="rounded-highnote mt-3 bg-white p-4 text-[11px] shadow-sm">
        {[
          { label: "Form factor", value: "Physical" },
          { label: "Spend limit", value: "$2,500 / mo" },
          { label: "Categories", value: "Software, SaaS" },
          { label: "Velocity", value: "10 / day" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-1.5"
          >
            <span className="opacity-50">{row.label}</span>
            <span className="font-medium">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AuthorizationGraphic() {
  const rules = [
    { name: "Merchant category", detail: "Office is on allowlist", status: "Pass" },
    { name: "Per-transaction cap", detail: "$86.40 within $1,000 limit", status: "Pass" },
    { name: "Velocity rule", detail: "2 of 10 monthly used", status: "Pass" },
  ];
  return (
    <div className="w-full max-w-[340px] px-6">
      <div className="rounded-highnote bg-white p-4 text-[11px] shadow-sm">
        <div className="border-ash mb-3 flex items-center justify-between border-b pb-3">
          <span className="text-xxs tracking-wide uppercase opacity-50">
            Authorization
          </span>
          <div className="flex items-center gap-3">
            <span className="font-medium">Staples · Office</span>
            <span className="font-medium">$86.40</span>
          </div>
        </div>
        {rules.map((rule) => (
          <div
            key={rule.name}
            className="flex items-center justify-between py-1.5"
          >
            <div>
              <div className="font-medium">{rule.name}</div>
              <div className="opacity-50">{rule.detail}</div>
            </div>
            <span className="text-green rounded bg-[#e7fbf0] px-2 py-0.5 font-medium text-[#0e6639]">
              {rule.status}
            </span>
          </div>
        ))}
        <div className="border-ash mt-3 flex items-center justify-between border-t pt-3">
          <span className="text-xxs tracking-wide uppercase opacity-50">
            Decision
          </span>
          <span className="rounded bg-[#e7fbf0] px-2 py-0.5 font-medium text-[#0e6639]">
            Authorized
          </span>
        </div>
      </div>
    </div>
  );
}

export function SpendLimitsGraphic() {
  return (
    <div className="w-full max-w-[300px] px-6">
      <div className="rounded-highnote flex items-center gap-3 bg-white p-4 shadow-sm">
        <div className="bg-ash flex h-9 w-9 items-center justify-center rounded-lg">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 8H18" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 12.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="text-xxs tracking-wide uppercase opacity-50">
            Spend Card
          </div>
          <div className="text-xs font-medium">Employee · M. Reyes</div>
        </div>
      </div>
      <div className="mx-auto my-2 h-4 w-px bg-[#d3d1c7]" />
      <div className="rounded-highnote bg-white p-4 text-[11px] shadow-sm">
        {[
          { label: "Monthly limit", value: "$2,500 / mo" },
          { label: "Per-transaction", value: "$500" },
          { label: "Velocity", value: "10 / day" },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between py-1.5"
          >
            <span className="opacity-50">{row.label}</span>
            <span className="font-medium">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LedgerGraphic() {
  const entries = [
    { desc: "Figma · Software", amount: "−$144.00" },
    { desc: "AWS · Cloud Services", amount: "−$320.00" },
    { desc: "Delta Air · Travel", amount: "−$612.00" },
    { desc: "WeWork · Office", amount: "−$132.00" },
    { desc: "Google Ads · Advertising", amount: "−$328.50" },
  ];
  return (
    <div className="w-full max-w-[320px] px-6">
      <div className="rounded-highnote bg-white p-4 shadow-sm">
        <div className="border-ash mb-2 flex items-center justify-between border-b pb-3">
          <span className="text-xxs tracking-wide uppercase opacity-50">
            Unified Ledger
          </span>
          <span className="font-display text-lg">$50,000.00</span>
        </div>
        {entries.map((entry) => (
          <div
            key={entry.desc}
            className="flex items-center justify-between py-1 text-[11px]"
          >
            <span className="opacity-70">{entry.desc}</span>
            <span className="font-medium">{entry.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ApiGovernanceGraphic() {
  const events = [
    "PAYMENT_CARD_ISSUED",
    "PAYMENT_CARD_AUTHORIZATION_APPROVED",
    "PAYMENT_CARD_CLEARED",
  ];
  return (
    <div className="w-full max-w-[320px] px-6">
      <div className="rounded-highnote bg-white p-4 shadow-sm">
        <div className="border-ash mb-3 flex items-center justify-between border-b pb-3">
          <div className="flex flex-col">
            <span className="text-xxs tracking-wide uppercase opacity-50">
              Payment Card
            </span>
            <span className="font-mono text-[11px] opacity-60">9kPm3xBw7nQ2</span>
          </div>
          <span className="font-medium">$2,500.00</span>
        </div>
        <div className="space-y-3">
          {events.map((name, i) => (
            <div key={name} className="flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                  i === events.length - 1 ? "bg-green" : "bg-[#c9c7bd]"
                }`}
              />
              <span className="font-mono text-[10px] opacity-80">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
