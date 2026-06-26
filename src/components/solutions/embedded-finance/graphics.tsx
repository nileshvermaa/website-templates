// Decorative graphics for the Embedded Finance solution page.
// The source used CSS-module animated diagrams (EFHero, EFIssuingAcquiring,
// EFEmbeddedPayments, EFCredit, EFLedger, EFApiLifecycle). They are reproduced
// here pragmatically as faithful static cards that keep all real text, icons,
// and graphic assets. Layout, colors, and the original copy are preserved.

// ----- Hero: stacked transaction cards feeding a unified ledger -----
const heroCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M10.6 3h2.8v2.6l1.9 2.9c.2.3.3.6.3 1V19a2 2 0 0 1-2 2h-3.2a2 2 0 0 1-2-2V9.5c0-.4.1-.7.3-1l1.9-2.9V3Z"
          fill="#1CA3DD"
        />
      </svg>
    ),
    merchant: "Blue Bottle",
    type: "Issuing · Virtual Card",
    amount: "$18.00",
  },
  {
    icon: (
      <svg width="26" height="8" viewBox="0 0 26 8" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.447 2.55737C13.4319 3.672 14.4891 4.29383 15.2857 4.66354C16.1037 5.04297 16.3783 5.28617 16.3754 5.62537C16.3691 6.1448 15.7227 6.37383 15.1175 6.38274C14.062 6.3984 13.4483 6.1112 12.9605 5.89417L12.58 7.58937C13.0695 7.80423 13.9757 7.992 14.9159 8C17.1223 8 18.5656 6.96217 18.5737 5.35314C18.582 3.3112 15.6089 3.19817 15.6295 2.28537C15.6364 2.00857 15.9138 1.71337 16.521 1.63817C16.8217 1.60023 17.6515 1.5712 18.5922 1.984L18.9616 0.343772C18.456 0.168 17.8054 0 16.9959 0C14.9192 0 13.4586 1.052 13.447 2.55737ZM22.51 0.141372C22.1074 0.141372 21.7677 0.365372 21.6163 0.709029L18.4643 7.87977H20.6691L21.1079 6.72434H23.8025L24.0567 7.87943H26L24.3044 0.141372H22.51ZM22.8195 2.23177L23.4558 5.1376H21.7132L22.8195 2.23177ZM10.7734 0.141372L9.0354 7.87943H11.1365L12.8737 0.141372H10.7734ZM7.66571 0.141372L5.47868 5.408L4.59398 0.929828C4.49025 0.429828 4.08037 0.141372 3.62526 0.141372H0.0501928L0 0.366172C0.733814 0.517829 1.56775 0.7624 2.07277 1.02423C2.38198 1.18434 2.47019 1.32434 2.57196 1.70434L4.24704 7.87943H6.46761L9.8719 0.141372H7.66571Z"
          fill="#1F36C3"
        />
      </svg>
    ),
    merchant: "Jordan Lee",
    type: "Acquiring · Card Payment",
    amount: "$320.00",
  },
  {
    icon: (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
        <path d="M17 1V19H5V1H17Z" stroke="#0a0a0a" strokeWidth="2" />
        <path d="M5 11V19H1V11H5Z" stroke="#0a0a0a" strokeWidth="2" />
        <rect x="8" y="4" width="2" height="2" fill="#0a0a0a" />
        <rect x="12" y="4" width="2" height="2" fill="#0a0a0a" />
        <rect x="8" y="8" width="2" height="2" fill="#0a0a0a" />
        <rect x="12" y="8" width="2" height="2" fill="#0a0a0a" />
        <path d="M13 13V19H9V13H13Z" stroke="#0a0a0a" strokeWidth="2" />
      </svg>
    ),
    merchant: "Northwind Co.",
    type: "Credit · Credit Line Draw",
    amount: "$1,500.00",
  },
  {
    icon: (
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
        <path d="M13.9749 1.44629H8.02637V12.136H13.9749V1.44629Z" fill="#FF5F00" />
        <path
          d="M8.40302 6.79835C8.40207 5.76885 8.63537 4.75262 9.08524 3.82662C9.5351 2.90061 10.1897 2.08909 10.9996 1.45349C9.99669 0.66519 8.79224 0.174948 7.5239 0.0388283C6.25554 -0.0973058 4.97449 0.12615 3.82715 0.683667C2.67979 1.24117 1.71244 2.11026 1.03566 3.19154C0.358887 4.27283 0 5.52272 0 6.79835C0 8.07392 0.358887 9.32388 1.03566 10.4052C1.71244 11.4865 2.67979 12.3555 3.82715 12.913C4.97449 13.4705 6.25554 13.694 7.5239 13.5579C8.79224 13.4217 9.99669 12.9316 10.9996 12.1433C10.1897 11.5076 9.5351 10.696 9.08524 9.77013C8.63537 8.8441 8.40209 7.82785 8.40302 6.79835Z"
          fill="#EB001B"
        />
        <path
          d="M21.9999 6.79836C22.0001 8.07393 21.6412 9.32389 20.9644 10.4052C20.2877 11.4865 19.3204 12.3555 18.173 12.913C17.0257 13.4705 15.7446 13.694 14.4764 13.5579C13.208 13.4217 12.0037 12.9316 11.0007 12.1433C11.8098 11.5069 12.464 10.6953 12.9139 9.76942C13.3636 8.84354 13.5973 7.82771 13.5973 6.79836C13.5973 5.76902 13.3636 4.75312 12.9139 3.82725C12.464 2.90139 11.8098 2.08974 11.0007 1.45349C12.0037 0.665197 13.208 0.174956 14.4764 0.0388215C15.7446 -0.0972983 17.0257 0.126158 18.173 0.683689C19.3204 1.24121 20.2877 2.11028 20.9644 3.19156C21.6412 4.27287 22.0001 5.52275 21.9999 6.79836Z"
          fill="#F79E1B"
        />
      </svg>
    ),
    merchant: "Globex Inc.",
    type: "Acquiring · Card Payment",
    amount: "$940.00",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="8" r="4" stroke="#0a0a0a" strokeWidth="2" />
        <path d="M17 20C17 20 17 16 10 16C3 16 3 20 3 20" stroke="#0a0a0a" strokeWidth="2" />
      </svg>
    ),
    merchant: "Maya Chen",
    type: "Disbursement · ACH Payout",
    amount: "$250.00",
  },
];

const ledgerEntries = [
  { name: "Card Transaction", amount: "−$18.00" },
  { name: "Payment", amount: "+$320.00" },
  { name: "Credit Draw", amount: "+$1,500.00" },
  { name: "Payment", amount: "+$940.00" },
  { name: "Payout", amount: "−$250.00" },
];

export function EFHero() {
  return (
    <div className="flex w-full max-w-[420px] flex-col gap-3">
      <div className="flex flex-col gap-2">
        {heroCards.map((c) => (
          <div
            key={c.merchant}
            className="flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-sm"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bone">
              {c.icon}
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium">{c.merchant}</span>
              <span className="text-xxs opacity-60">{c.type}</span>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <span className="text-sm font-medium tabular-nums">{c.amount}</span>
              <span className="text-xxs text-green-700">Settled</span>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-blackBG p-5 text-white">
        <span className="text-xxs opacity-60">Ledger Balance</span>
        <div className="font-display pt-1 pb-3 text-2xl tabular-nums">$2,384,728.18</div>
        <div className="flex flex-col gap-1.5">
          {ledgerEntries.map((e, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="opacity-70">{e.name}</span>
              <span className="tabular-nums opacity-90">{e.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----- Card 1: Unified issuing + acquiring ledger -----
export function EFIssuingAcquiring() {
  const rows = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="6" width="18" height="13" rx="2.5" stroke="#0a0a0a" strokeWidth="1.8" />
          <path d="M3 10.5H21" stroke="#0a0a0a" strokeWidth="1.8" />
        </svg>
      ),
      desc: "Card authorization",
      type: "Issuing",
      amount: "−$48.20",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 4V14" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M7 10L12 15L17 10"
            stroke="#0a0a0a"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M5 19H19" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      desc: "Payment received",
      type: "Acquiring",
      amount: "+$320.00",
    },
  ];
  return (
    <div className="w-full max-w-[340px] rounded-xl bg-bone p-4">
      <div className="pb-3 text-xs font-medium">Unified Ledger</div>
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <div key={r.desc} className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-bone">
              {r.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-medium">{r.desc}</span>
              <span className="text-xxs opacity-60">{r.type}</span>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <span className="text-xs font-medium tabular-nums">{r.amount}</span>
              <span className="text-xxs opacity-50">Settled</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----- Card 2: Embedded payments request -> policy -----
export function EFEmbeddedPayments() {
  return (
    <div className="flex w-full max-w-[340px] flex-col items-center gap-2">
      <div className="w-full rounded-xl bg-bone p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs opacity-60">Payment in</span>
          <span className="text-sm font-medium tabular-nums">+$320.00</span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-xxs opacity-50">Payer</span>
          <span className="text-xxs font-medium">Northwind Retail</span>
        </div>
      </div>
      <div className="h-5 w-px bg-black/15" />
      <div className="w-full rounded-xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between py-1">
          <span className="text-xs opacity-60">Authorization</span>
          <span className="flex items-center gap-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-green" />
            Approved
          </span>
        </div>
        <div className="flex items-center justify-between py-1">
          <span className="text-xs opacity-60">Rail</span>
          <span className="text-xs font-medium">Real-Time Network</span>
        </div>
        <div className="flex items-center justify-between py-1">
          <span className="text-xs opacity-60">Settlement</span>
          <span className="text-xs font-medium text-green-700">Real-time</span>
        </div>
      </div>
    </div>
  );
}

// ----- Card 3: Credit product -----
export function EFCredit() {
  const rows = [
    { label: "Purchase", value: "$1,500" },
    { label: "Paid off", value: "$450" },
    { label: "Remaining", value: "$1,050" },
  ];
  return (
    <div className="w-full max-w-[300px] rounded-xl bg-bone p-4">
      <div className="flex items-center justify-between pb-3">
        <span className="text-xs opacity-60">Credit product</span>
        <span className="text-xs font-medium">Buy Now, Pay Later</span>
      </div>
      <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-black/10">
        <div className="h-full w-1/3 rounded-full bg-green" />
      </div>
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between text-xs">
            <span className="opacity-60">{r.label}</span>
            <span className="font-medium tabular-nums">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----- Card 4: Real-time unified ledger -----
export function EFLedger() {
  const entries = [
    { desc: "Payments · Inbound", amount: "+$3,200.00" },
    { desc: "Cards · Authorization", amount: "−$842.00" },
    { desc: "Credit · Repayment", amount: "+$1,500.00" },
    { desc: "Cards · Authorization", amount: "−$216.40" },
    { desc: "Payments · Payout", amount: "−$4,000.00" },
  ];
  return (
    <div className="w-full max-w-[320px] rounded-xl bg-blackBG p-5 text-white">
      <span className="text-xxs opacity-60">Unified Ledger</span>
      <div className="font-display pt-1 pb-3 text-xl tabular-nums">$124,441.60</div>
      <div className="flex flex-col gap-1.5">
        {entries.map((e, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <span className="opacity-70">{e.desc}</span>
            <span className="tabular-nums opacity-90">{e.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----- Card 5: API lifecycle events -----
export function EFApiLifecycle() {
  const events = [
    "PaymentCardIssuedEvent",
    "CardPaymentAuthorizedEvent",
    "CardPaymentCapturedEvent",
    "CardPaymentClearedEvent",
    "CardPaymentSettledEvent",
  ];
  return (
    <div className="w-full max-w-[320px] rounded-xl bg-bone p-4">
      <div className="flex items-center justify-between pb-4">
        <div className="flex flex-col">
          <span className="text-xs font-medium">Payment card</span>
          <span className="text-xxs font-mono opacity-50">card_7HnQ2xBwk9P3</span>
        </div>
        <span className="text-sm font-medium tabular-nums">$320.00</span>
      </div>
      <div className="relative flex flex-col gap-3 pl-1">
        {events.map((name, i) => (
          <div key={name} className="relative flex items-center gap-3">
            <span className="relative z-[1] h-2.5 w-2.5 shrink-0 rounded-full bg-black" />
            {i < events.length - 1 && (
              <span className="absolute top-2.5 left-[4.5px] h-3 w-px bg-black/20" />
            )}
            <span className="font-mono text-xxs">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----- Why-unified flow diagram -----
export function EmbeddedFinanceFlow() {
  const tiles = [
    { title: "Highnote API", body: "Provisions the issuing, acquiring, or credit layer" },
    { title: "End Users", body: "Cardholders, payers, or borrowers transact through the product" },
    { title: "Program Rules", body: "Each transaction evaluates against program rules in real time" },
    { title: "Unified Ledger", body: "Every event posts across issuing, acquiring, and credit" },
    { title: "Reconciliation", body: "Finance and product teams reconcile from one system" },
  ];
  return (
    <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-center">
      <div className="rounded-highnote shrink-0 bg-white p-6 lg:max-w-[220px]">
        <h4 className="pb-2 text-sm font-medium">Platform</h4>
        <p className="text-xs leading-5 opacity-60">Defines its embedded finance product</p>
      </div>
      <span className="hidden shrink-0 text-black/40 lg:block" aria-hidden="true">
        <svg viewBox="0 0 30 12" fill="none" className="h-3 w-8">
          <path
            d="M1 6 H26 M21 1 L26 6 L21 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tiles.map((t) => (
          <div key={t.title} className="rounded-highnote bg-white p-5">
            <h4 className="pb-2 text-sm font-medium">{t.title}</h4>
            <p className="text-xs leading-5 opacity-60">{t.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
