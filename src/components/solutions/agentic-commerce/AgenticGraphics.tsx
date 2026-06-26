// Decorative graphics for the Agentic Commerce solution page.
// Built as CSS/SVG mocks (mirrors the TravelGraphics pattern) rather than
// relying on image assets that do not exist under /public.

// --- Programmable spend controls: grid of agents with usage bars ---
const SPEND_AGENTS = [
  { name: "Procurement Agent", used: 1200, limit: 5000 },
  { name: "Booking Agent", used: 18500, limit: 25000 },
  { name: "Travel Agent", used: 18500, limit: 25000 },
  { name: "Expense Agent", used: 3200, limit: 10000 },
  { name: "Ops Agent", used: 320, limit: 1000 },
  { name: "Research Agent", used: 890, limit: 2500 },
];

const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

export function SpendControlsGraphic() {
  return (
    <div className="bg-bone rounded-xl p-4">
      <div className="flex items-center justify-between pb-3">
        <span className="text-xs font-medium">Spend Controls</span>
        <span className="bg-green/20 text-[10px] font-medium rounded-full px-2 py-0.5">
          Active
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {SPEND_AGENTS.map((a) => {
          const pct = Math.min(100, Math.round((a.used / a.limit) * 100));
          return (
            <div key={a.name} className="rounded-lg bg-white p-2.5">
              <div className="truncate text-[11px] font-medium">{a.name}</div>
              <div className="pt-1.5 text-[10px] opacity-60">
                {fmt(a.used)} / {fmt(a.limit)}
              </div>
              <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-[#E2E0D6]">
                <div
                  className="h-full rounded-full bg-[#55F5A3]"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Virtual card issuance on demand ---
const VC_AGENTS = [
  { name: "Procurement Agent", limit: "$500", category: "SaaS" },
  { name: "Booking Agent", limit: "$2,500", category: "Travel" },
  { name: "Expense Agent", limit: "$10,000", category: "Any" },
];

export function VirtualCardGraphic() {
  return (
    <div className="bg-bone rounded-xl p-4">
      <div className="pb-3 text-xs font-medium">Virtual Card</div>
      <div className="mb-3 flex h-[110px] flex-col justify-between rounded-2xl bg-gradient-to-br from-[#111] to-[#2b2b2b] p-4 text-white">
        <div className="flex items-start justify-between">
          <span className="text-[11px] font-medium">Procurement Agent</span>
          <span className="block h-4 w-6 rounded bg-white/30" />
        </div>
        <div className="font-mono text-sm tracking-widest">
          <span className="mr-2 align-middle">····</span>4821
        </div>
      </div>
      <div className="space-y-2">
        {VC_AGENTS.map((a) => (
          <div
            key={a.name}
            className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-[11px]"
          >
            <span className="font-medium">{a.name}</span>
            <span className="opacity-60">
              {a.category} · {a.limit}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-1 text-[10px]">
          <span className="opacity-60">Status</span>
          <span className="bg-green/20 rounded-full px-2 py-0.5 font-medium">
            Active
          </span>
        </div>
      </div>
    </div>
  );
}

// --- Event-level ledger visibility ---
const LEDGER_ROWS = [
  { label: "Financial Account", amount: "$10,000.00", positive: true },
  { label: "Agent Card", amount: "−$2,500.00", positive: false },
  { label: "Vendor Payment", amount: "−$4,000.00", positive: false },
  { label: "Agent Card", amount: "+$2,500.00", positive: true },
  { label: "Vendor Payment", amount: "+$4,000.00", positive: true },
];

export function LedgerGraphic() {
  return (
    <div className="bg-bone rounded-xl p-4">
      <div className="pb-3 text-xs font-medium">Unified Ledger</div>
      <div className="space-y-2">
        {LEDGER_ROWS.map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5 text-[11px]"
          >
            <span className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  r.positive ? "bg-[#55F5A3]" : "bg-[#FF5A5F]"
                }`}
              />
              {r.label}
            </span>
            <span className="font-mono font-medium">{r.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Full auth-capture-settlement control (timeline) ---
const LIFECYCLE = [
  { stage: "Authorized", note: "Hold $1,250" },
  { stage: "Captured", note: "Charge $1,250" },
  { stage: "Settled", note: "Posted" },
];

export function LifecycleGraphic() {
  return (
    <div className="bg-bone rounded-xl p-4">
      <div className="flex items-center justify-between pb-4">
        <span className="text-xs font-medium">Transaction</span>
        <span className="font-mono text-xs font-medium">$1,250.00</span>
      </div>
      <div className="space-y-4">
        {LIFECYCLE.map((s, i) => (
          <div key={s.stage} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#55F5A3] text-[10px] font-medium text-black">
                {i + 1}
              </span>
              {i < LIFECYCLE.length - 1 && (
                <span className="my-0.5 h-6 w-px bg-[#E2E0D6]" />
              )}
            </div>
            <div className="rounded-lg bg-white px-3 py-2 text-[11px]">
              <div className="font-medium">{s.stage}</div>
              <div className="opacity-60">{s.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Program-level governance (rule config table) ---
const GOVERNANCE = [
  { rule: "Merchant scope", a: "All approved", b: "Allowlist only" },
  { rule: "Velocity limit", a: "$50,000/day", b: "$10,000/day" },
  { rule: "Category rules", a: "Any category", b: "SaaS + Travel" },
];

export function GovernanceGraphic() {
  return (
    <div className="bg-bone rounded-xl p-4">
      <div className="pb-3 text-xs font-medium">Card Program · Rule Configuration</div>
      <div className="overflow-hidden rounded-lg bg-white">
        {GOVERNANCE.map((g, i) => (
          <div
            key={g.rule}
            className={`grid grid-cols-3 items-center gap-2 px-3 py-2.5 text-[11px] ${
              i < GOVERNANCE.length - 1 ? "border-b border-[#E2E0D6]" : ""
            }`}
          >
            <span className="font-medium">{g.rule}</span>
            <span className="opacity-50 line-through">{g.a}</span>
            <span className="text-right font-medium">{g.b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Flow diagram: AI Agent → Spend Policy → Virtual Card → Ledger → Reconciliation ---
const FLOW = [
  { title: "AI Agent", desc: "Initiates a transaction request" },
  { title: "Spend Policy", desc: "Evaluate authorization in real time" },
  { title: "Virtual Card", desc: "Executes payment within approved parameters" },
  { title: "Ledger", desc: "Posts the transaction event immediately" },
  { title: "Reconciliation", desc: "Finance and ops reconcile from one unified system" },
];

export function FlowGraphic() {
  return (
    <div className="grid gap-3 sm:grid-cols-5">
      {FLOW.map((f, i) => (
        <div
          key={f.title}
          className="rounded-highnote relative flex flex-col bg-white p-5"
        >
          <span className="bg-ash mb-3 flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium">
            {i + 1}
          </span>
          <div className="pb-1.5 text-sm font-medium">{f.title}</div>
          <p className="text-xs leading-5 opacity-70">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
