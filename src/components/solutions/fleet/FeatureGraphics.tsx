// Decorative graphics for the "What Highnote Gives Fleet Card Programs" grid.
// These reproduce the original highnote.com CSS-module mockups pragmatically
// (visually equivalent) while keeping all real text and logo assets.
import { asset } from "@/lib/asset";

export function CardIssuanceGraphic() {
  return (
    <div className="w-full max-w-[360px] px-6">
      <div className="rounded-2xl bg-[#2146E7] p-5 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <span className="text-xs font-medium opacity-90">Fleet Card</span>
          <div className="flex flex-col items-end gap-0.5 text-[10px] opacity-80">
            <span>Driver · M. Reyes</span>
            <span>Vehicle · Truck 14</span>
            <span>Cost Center · Field Ops</span>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2 font-mono text-sm tracking-widest">
          <span>····</span>
          <span>4821</span>
        </div>
      </div>
      <div className="mt-4 space-y-2 rounded-xl bg-[#F5F3EB] p-4 text-xs">
        {[
          { label: "Form Factor", values: ["Physical", "Virtual", "Tokenized"] },
          { label: "Network", values: ["Visa", "Mastercard", "Visa"] },
          { label: "Acceptance", values: ["Open-loop", "Open-loop", "Open-loop"] },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between">
            <span className="opacity-50">{row.label}</span>
            <span className="font-medium">{row.values[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CategoryControlsGraphic() {
  const cats = [
    { name: "Fuel", on: true },
    { name: "Maintenance", on: true },
    { name: "Tolls", on: true },
    { name: "Parking", on: true },
    { name: "Restaurants", on: false },
    { name: "Electronics", on: false },
  ];
  const txns = [
    { merchant: "Love's #418", category: "Fuel", amount: "$84.20", allowed: true, logo: "/img/logo-loves.png" },
    { merchant: "TA Truck Service", category: "Maintenance", amount: "$642.00", allowed: true },
    { merchant: "Best Buy", category: "Electronics", amount: "$128.99", allowed: false, logo: "/img/logo-bestbuy.png" },
  ];
  return (
    <div className="grid w-full max-w-[420px] grid-cols-1 gap-4 px-6 sm:grid-cols-2">
      <div className="rounded-xl bg-[#F5F3EB] p-4 text-xs">
        <div className="pb-3 font-medium">Merchant Categories</div>
        <div className="space-y-2">
          {cats.map((c) => (
            <div key={c.name} className="flex items-center justify-between">
              <span className={c.on ? "" : "opacity-40"}>{c.name}</span>
              <span
                className={`flex h-5 w-9 items-center rounded-full p-0.5 ${c.on ? "justify-end bg-black" : "justify-start bg-black/20"}`}
              >
                <span className="h-4 w-4 rounded-full bg-white" />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {txns.map((t) => (
          <div key={t.merchant} className="flex items-center gap-2 rounded-xl bg-[#F5F3EB] p-2.5 text-[11px]">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded bg-white">
              {t.logo ? (
                <img alt={t.merchant} className="h-full w-full object-contain" src={asset(t.logo)} />
              ) : (
                <svg width="20" height="15" viewBox="0 0 25 19" fill="none" aria-hidden="true">
                  <path d="M14.9939 6.90285L13.7482 10.713H16.2588L15.0035 6.90148L14.9939 6.90285ZM16.5377 0.515945H18.1363L23.4173 18.2207H18.6012L17.6536 15.2704H12.3534L11.4044 18.2578H6.64429L10.4759 5.87545H14.7806L16.5377 0.515945Z" fill="#ED1C2E" />
                  <path d="M15.7378 0.516222L14.2308 5.27825C14.2595 5.28786 14.1761 5.27825 9.95484 5.27825L5.84567 18.2402H1.06645L4.87889 5.24116H0.806641L2.23835 0.516222H15.7378Z" fill="#0060A9" />
                </svg>
              )}
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-medium">{t.merchant}</span>
              <span className="opacity-50">{t.category}</span>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <span className="font-medium">{t.amount}</span>
              <span className={t.allowed ? "text-[#1A7A4A]" : "text-[#C0392B]"}>
                {t.allowed ? "Allowed" : "Declined"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SpendLimitsGraphic() {
  return (
    <div className="w-full max-w-[320px] px-6">
      <div className="flex items-center gap-3 rounded-xl bg-[#F5F3EB] p-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 8H18" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 12.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="text-xs">
          <div className="opacity-50">Fleet Card</div>
          <div className="font-medium">Driver · M. Reyes</div>
        </div>
      </div>
      <div className="mt-4 space-y-2 rounded-xl bg-[#F5F3EB] p-4 text-xs">
        {[
          { label: "Daily limit", value: "$250 / day" },
          { label: "Per-transaction", value: "$150" },
          { label: "Velocity", value: "2 fills / day" },
        ].map((r) => (
          <div key={r.label} className="flex items-center justify-between">
            <span className="opacity-50">{r.label}</span>
            <span className="font-medium">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AuthorizationGraphic() {
  return (
    <div className="w-full max-w-[360px] px-6">
      <div className="rounded-xl bg-[#F5F3EB] p-4 text-xs">
        <div className="flex items-center justify-between pb-3">
          <div>
            <div className="opacity-50">Authorization</div>
            <div className="font-medium">Shell #1842 · Fuel</div>
          </div>
          <div className="font-medium">$84.20</div>
        </div>
        {[
          { name: "Merchant category", detail: "Fuel is on allowlist", pass: true },
          { name: "Per-transaction cap", detail: "$84.20 within $150 limit", pass: true },
          { name: "Velocity rule", detail: "1 of 2 daily fills used", pass: true },
        ].map((rule) => (
          <div key={rule.name} className="flex items-center justify-between border-t border-black/5 py-2">
            <div>
              <div className="font-medium">{rule.name}</div>
              <div className="opacity-50">{rule.detail}</div>
            </div>
            <span className={rule.pass ? "font-medium text-[#1A7A4A]" : "font-medium text-[#C0392B]"}>
              {rule.pass ? "Pass" : "Fail"}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-black/10 pt-3">
          <span className="opacity-50">Decision</span>
          <span className="font-medium text-[#1A7A4A]">Authorized</span>
        </div>
      </div>
    </div>
  );
}

export function LedgerGraphic() {
  const entries = [
    { desc: "Shell · Fuel", amount: "−$84.20" },
    { desc: "AutoZone · Maintenance", amount: "−$312.00" },
    { desc: "TollTag · Tolls", amount: "−$24.00" },
    { desc: "ParkMobile · Parking", amount: "−$18.00" },
    { desc: "Pilot · Fuel", amount: "−$96.40" },
  ];
  return (
    <div className="w-full max-w-[320px] px-6">
      <div className="rounded-xl bg-[#F5F3EB] p-4 text-xs">
        <div className="flex items-center justify-between pb-3">
          <span className="font-medium">Unified Ledger</span>
          <span className="font-mono text-sm font-medium">$24,465.40</span>
        </div>
        <div className="space-y-2">
          {entries.map((e) => (
            <div key={e.desc} className="flex items-center justify-between border-t border-black/5 pt-2">
              <span className="opacity-70">{e.desc}</span>
              <span className="font-medium">{e.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
