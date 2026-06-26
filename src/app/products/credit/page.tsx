import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import CreditCardNoise from "@/components/products/credit/CreditCardNoise";
import { asset } from "@/lib/asset";

export const metadata: Metadata = { title: "Credit – Highnote" };

/* ------------------------------------------------------------------ *
 * Pragmatic reproductions of highnote.com's decorative card graphics. *
 * The originals are CSS-module animated inline SVGs; these keep the    *
 * same composition, palette and real text/logos without the hashed    *
 * module classnames or per-glyph text paths.                          *
 * ------------------------------------------------------------------ */

function CardRow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-ash px-3 py-3 ${className}`}
    >
      {children}
    </div>
  );
}

function Tile({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
      style={{ background: bg }}
    >
      {children}
    </div>
  );
}

const HighnoteMark = ({ className = "" }: { className?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="6.6" y="4.6" width="2" height="13" transform="rotate(-30 6.6 4.6)" fill="white" />
    <rect x="8" y="3.8" width="2" height="9" transform="rotate(60 8 3.8)" fill="white" />
    <rect x="7.2" y="9" width="2" height="6" transform="rotate(60 7.2 9)" fill="white" />
    <rect x="12" y="11" width="2" height="9" transform="rotate(60 12 11)" fill="white" />
    <rect x="17" y="3.2" width="2" height="9" transform="rotate(60 17 3.2)" fill="white" />
    <rect x="19" y="6.7" width="2" height="6" transform="rotate(60 19 6.7)" fill="white" />
    <rect x="21" y="10.2" width="2" height="9" transform="rotate(60 21 10.2)" fill="white" />
  </svg>
);

const PersonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="9" r="4" stroke="black" strokeWidth="2" />
    <path
      d="M20 20c0-4-3.6-6-8-6s-8 2-8 6"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* --- Section 3, Card 1: Collaborate on Decisioning --- */
function DecisioningGraphic() {
  return (
    <div className="mx-auto w-full max-w-[600px] sm:pb-10">
      <div className="grid gap-4 px-6">
        <CardRow>
          <Tile bg="#55F5A3">
            <PersonIcon />
          </Tile>
          <span className="text-sm font-medium">Applicant Analyzing…</span>
          <span className="ml-auto text-sm font-medium text-black/50">
            Approved
          </span>
        </CardRow>
        <CardRow>
          <Tile bg="black">
            <HighnoteMark />
          </Tile>
          <span className="text-sm font-medium">Authorization Approving…</span>
          <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-lg bg-[#4EED9B]">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 9.5l3 3 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </CardRow>
      </div>
    </div>
  );
}

/* --- Section 3, Card 2: Advanced Spend Controls --- */
function SpendControlsGraphic() {
  const rows = [
    { name: "Delta", allow: true, bg: "#EEEEEE", label: "Travel" },
    { name: "Casino", allow: false, bg: "rgba(240,49,75,0.9)", label: "Gambling" },
    { name: "Toll", allow: false, bg: "rgba(240,49,75,0.9)", label: "Restricted" },
  ];
  return (
    <div className="mx-auto w-full max-w-[600px] sm:pb-10">
      <div className="grid gap-4 px-6">
        {rows.map((r) => (
          <CardRow key={r.name}>
            <Tile bg={r.bg}>
              {r.allow ? (
                <span className="text-sm font-semibold text-black">{r.name[0]}</span>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                  <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" />
                </svg>
              )}
            </Tile>
            <span className="text-sm font-medium">{r.label}</span>
            <span
              className={`ml-auto text-sm font-medium ${
                r.allow ? "text-black/50" : "text-[#F0314B]"
              }`}
            >
              {r.allow ? "Allowed" : "Declined"}
            </span>
          </CardRow>
        ))}
      </div>
    </div>
  );
}

/* --- Section 3, Card 3: Own Your Receivables --- */
function ReceivablesGraphic() {
  return (
    <div className="mx-auto w-full max-w-[360px] px-10 pb-10 sm:px-0">
      <div className="grid gap-3">
        <CardRow>
          <Tile bg="#F5F3EB">
            <PersonIcon />
          </Tile>
          <div className="leading-tight">
            <div className="text-sm font-medium">Customer</div>
            <div className="text-xs text-black/50">Receivable Created</div>
          </div>
          <span className="ml-auto text-sm font-medium">$120.00</span>
        </CardRow>
        <CardRow>
          <Tile bg="#F5F3EB">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 9l8-4 8 4" stroke="black" strokeWidth="2" strokeLinejoin="round" />
              <rect x="6" y="9" width="2" height="8" fill="black" />
              <rect x="11" y="9" width="2" height="8" fill="black" />
              <rect x="16" y="9" width="2" height="8" fill="black" />
              <rect x="4" y="18" width="16" height="2" fill="black" />
            </svg>
          </Tile>
          <div className="leading-tight">
            <div className="text-sm font-medium">Bank Partner</div>
            <div className="text-xs text-black/50">Purchasing…</div>
          </div>
          <span className="ml-auto text-sm font-medium">$120.00</span>
        </CardRow>
        <CardRow>
          <Tile bg="black">
            <HighnoteMark />
          </Tile>
          <div className="leading-tight">
            <div className="text-sm font-medium">Subscriber</div>
            <div className="text-xs text-black/50">Settled</div>
          </div>
          <span className="ml-auto text-sm font-medium">$120.00</span>
        </CardRow>
      </div>
    </div>
  );
}

/* --- Section 5, Card 1: Rewards --- */
function RewardsGraphic() {
  const merchants = [
    { name: "Starbucks", bg: "#00643C", points: "+12 pts" },
    { name: "Target", bg: "#CC0000", points: "+8 pts" },
  ];
  return (
    <div className="mx-auto w-full max-w-[600px] sm:pb-10">
      <div className="grid gap-4 px-6">
        <div className="flex items-center justify-between rounded-xl bg-bone px-5 py-4">
          <span className="text-sm font-medium">Points Balance</span>
          <span className="font-display text-2xl">1,248</span>
        </div>
        {merchants.map((m) => (
          <CardRow key={m.name}>
            <Tile bg={m.bg}>
              <span className="text-sm font-semibold text-white">{m.name[0]}</span>
            </Tile>
            <span className="text-sm font-medium">{m.name}</span>
            <span className="ml-auto text-sm font-medium text-black/50">
              {m.points}
            </span>
          </CardRow>
        ))}
      </div>
    </div>
  );
}

/* --- Section 5, Card 2: Financial Accounts --- */
function FinancialAccountsGraphic() {
  return (
    <div className="mx-auto w-full max-w-[360px] px-5 pb-10">
      <div className="grid gap-4">
        <CardRow>
          <Tile bg="#4EED9B">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="6" width="18" height="12" rx="1" stroke="black" strokeWidth="2" />
              <path d="M3 10h18" stroke="black" strokeWidth="2" />
              <circle cx="12" cy="14" r="2" stroke="black" strokeWidth="2" />
            </svg>
          </Tile>
          <div className="leading-tight">
            <div className="text-sm font-medium">Financial Account</div>
            <div className="text-xs text-black/50">Linked via Plaid</div>
          </div>
          <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#4EED9B]">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 9.5l3 3 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </CardRow>
        <CardRow>
          <Tile bg="#117ACA">
            <span className="text-sm font-semibold text-white">C</span>
          </Tile>
          <div className="leading-tight">
            <div className="text-sm font-medium">Chase</div>
            <div className="text-xs text-black/50">ACH Transfer</div>
          </div>
          <span className="ml-auto text-sm font-medium">$250.00</span>
        </CardRow>
      </div>
    </div>
  );
}

/* --- Section 5, Card 3: Tokenized Cards --- */
function TokenizedGraphic() {
  return (
    <div className="mx-auto flex flex-col items-center justify-end gap-6 pt-6">
      <div className="relative flex h-[150px] w-[100px] items-center justify-center rounded-[24px] bg-black shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-x-3 top-3 flex flex-col gap-3 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#3A7AF6] p-3">
          <div className="flex items-center justify-between">
            <span className="font-display text-[10px] text-white">VISA</span>
            <span className="text-[8px] text-white/80">Built</span>
          </div>
        </div>
        <div className="relative top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
          <svg viewBox="0 0 130.2 130.2" className="h-7 w-7" aria-hidden="true">
            <polyline
              fill="none"
              stroke="#3A7AF6"
              strokeWidth="8"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="100.2,40.2 51.5,88.8 29.8,67.5 "
            />
          </svg>
        </div>
      </div>
      <div className="flex h-12 w-20 items-center justify-center rounded-xl bg-ash">
        <svg width="44" height="26" viewBox="0 0 80 48" fill="none" aria-hidden="true">
          <path
            d="M14 24a26 26 0 0152 0M22 24a18 18 0 0136 0M30 24a10 10 0 0120 0"
            stroke="#999"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

/* --- Section 7, Card 1: Simulate Delinquency --- */
function SimulateDelinquencyGraphic() {
  return (
    <div className="flex h-full flex-col justify-end px-8 pb-8">
      <div className="rounded-2xl border border-ash bg-bone p-5">
        <div className="flex items-center gap-3">
          <Tile bg="white">
            <Image
              alt="financial account icon"
              src="/img/icon-financialaccount.svg"
              width={24}
              height={24}
            />
          </Tile>
          <div className="leading-tight">
            <div className="text-sm font-medium">Financial Account</div>
            <div className="text-xs text-[#F0314B]">7 Days Delinquent</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-black/50 line-through">$0.00 Due</span>
          <span className="font-medium">$120.00 Due</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-white px-3 py-1.5 text-black/70">
            Simulate Delinquency
          </span>
          <span className="rounded-full bg-white px-3 py-1.5 text-black/70">
            Simulate Account Suspension
          </span>
        </div>
        <div className="mt-3">
          <span className="inline-block rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
            Pay $120
          </span>
        </div>
      </div>
    </div>
  );
}

/* --- Section 7, Card 2: Simulate Credit Plans --- */
function SimulatePlansGraphic() {
  const fields = [
    ["Credit Limit", "APR"],
    ["Rate Type", "Assessment"],
  ];
  return (
    <div className="flex h-full flex-col justify-end px-8 pb-8">
      <div className="rounded-2xl border border-ash bg-bone p-5">
        <div className="flex items-center gap-3">
          <Tile bg="white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="7" width="2" height="16" fill="black" />
              <rect x="16" y="7" width="2" height="16" transform="rotate(90 16 7)" fill="black" />
            </svg>
          </Tile>
          <div className="leading-tight">
            <div className="text-sm font-medium">Add Credit Plan</div>
            <div className="text-xs text-black/50">Purchase Plan</div>
          </div>
          <span className="ml-auto rounded-full bg-black px-4 py-1.5 text-xs font-medium text-white">
            Create
          </span>
        </div>
        <div className="mt-4 grid gap-3">
          {fields.map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              {row.map((label) => (
                <div key={label}>
                  <div className="mb-1 text-xs text-black/50">{label}</div>
                  <div className="h-8 rounded-lg border border-ash bg-white" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-bone">
        {/* ===== SECTION 1: Everything to Launch and Run Your Program ===== */}
        <section className="relative px-5 pb-16 antialiased lg:px-10 lg:py-20 lg:pt-0">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-b pb-16 lg:pb-24">
            <div className="grid-cols-2 gap-2 lg:grid">
              <div>
                <div className="font-display max-w-lg pb-5 text-3xl sm:text-4xl lg:text-6xl">
                  Everything to Launch and Run Your Program
                </div>
                <p className="max-w-lg pb-12 text-base leading-7 opacity-70">
                  Issuing a credit card is just the start. Highnote gives you loan
                  servicing capabilities to create and manage your credit program
                  with ease.
                </p>
              </div>
              <div className="rounded-highnote bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Issue Credit or Charge Cards
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Issue cards with lines of credit for both Consumer and
                    Commercial customers, complete with options for APR-based or
                    pay-in-full repayment interest terms.
                  </p>
                </div>
                <div className="flex flex-col justify-center overflow-hidden pb-10">
                  <CreditCardNoise />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="px-10 sm:hidden"
                    src={asset("/img/credit-card.png")}
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-5 pt-5 md:grid-cols-3">
              <div className="rounded-highnote bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Generate Billing Statements
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Display the data you want by crafting your own billing statement
                    with our API. Access rich data, including balances, interest
                    charges, fees, and beyond.
                  </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="px-8 pb-6">
                    <Image
                      alt=""
                      src="/img/billing-statements.svg"
                      width={320}
                      height={220}
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col justify-between bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Schedule Automatic Payments
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Empower your customers to set up recurring payments, with the
                    flexibility to choose an amount and duration they prefer.
                  </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="px-8 pb-6">
                    <Image
                      alt=""
                      src="/img/auto-payments.svg"
                      width={320}
                      height={220}
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col justify-between bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Monitor Account Delinquency
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Gain a comprehensive view of past billing cycles to help track
                    performance history for both timely and delinquent payments.
                  </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="px-8 pb-6">
                    <Image
                      alt=""
                      src="/img/delinquency.svg"
                      width={320}
                      height={220}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: Have Full Control ===== */}
        <section className="relative px-5 pb-16 antialiased lg:px-10 lg:pb-24">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-b pb-16 lg:pb-24">
            <div className="mx-auto grid items-end gap-10 pb-20 sm:grid-cols-2">
              <div className="font-display -mb-2 text-3xl sm:text-4xl lg:text-6xl">
                Have Full Control
              </div>
              <p className="max-w-lg justify-self-end text-base opacity-70">
                Highnote empowers you to take charge of your credit program.
                Experience the freedom to tailor interest charges to fit your needs,
                own your receivables, control spend, and influence the approval
                process.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Collaborate on Decisioning
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Be the voice in the application approval process and during
                    authorization. Conduct decisioning based on a customized credit
                    policy.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <DecisioningGraphic />
                </div>
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Advanced Spend Controls
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Control spend by setting limits based on merchant category codes,
                    spend amount, address verification results, and more.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <SpendControlsGraphic />
                </div>
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Own Your Receivables
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Originate loans with one of Highnote&apos;s bank partners and
                    purchase your own receivables. Track your receivables in real
                    time to increase visibility and control over funding.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center">
                  <ReceivablesGraphic />
                </div>
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col justify-between bg-white">
                <div className="max-w-2xl px-5 py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Define APR for Different Balances
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Customize your credit program by setting distinct interest rates
                    for credit purchases, cash advances, and promotional financing.
                  </p>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
                  <div className="px-8 pb-10 sm:pb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      className="ml-[-20%] max-w-[140%] sm:ml-0 sm:w-full"
                      src={asset("/img/apr.svg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: Deliver Rich Customer Experiences ===== */}
        <section className="relative px-5 pb-16 antialiased lg:px-10 lg:pb-24">
          <div className="border-ash relative mx-auto max-w-7xl justify-between border-b pb-16 lg:pb-24">
            <div className="grid-cols-2 gap-2 lg:grid">
              <div>
                <div className="font-display max-w-lg pb-5 text-3xl sm:text-4xl lg:text-6xl">
                  Deliver Rich Customer Experiences
                </div>
                <p className="max-w-lg pb-12 text-base leading-7 opacity-70">
                  Extend the impact of your credit product by offering rewards and
                  seamless integration with customers&apos; external bank accounts.
                </p>
              </div>
              <div className="rounded-highnote bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-10">
                  <h3 className="pb-2.5 text-base font-medium">Rewards</h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Design a rewards program that creates customer loyalty with
                    integrated point tracking in the Highnote ledger.
                  </p>
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                  <RewardsGraphic />
                </div>
              </div>
            </div>
            <div className="grid gap-5 pt-5 md:grid-cols-2">
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Financial Accounts
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Connect cardholder accounts to the broader banking system using
                    our partners, Plaid and Finicity, to support incoming and
                    outgoing ACH transfers.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center">
                  <FinancialAccountsGraphic />
                </div>
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col justify-between bg-white">
                <div className="max-w-2xl px-5 py-10 lg:p-8">
                  <h3 className="pb-2.5 text-base font-medium">Tokenized Cards</h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Provision cards to Apple Wallet or Google Pay for in-person
                    purchases without the need to carry a physical card.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-end">
                  <TokenizedGraphic />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: Advanced Testing and Simulation Tools ===== */}
        <section className="relative px-5 pb-16 antialiased lg:px-10 lg:pb-24">
          <div className="border-ash relative mx-auto max-w-7xl justify-between border-b pb-16 lg:pb-24">
            <div className="mx-auto grid items-end gap-10 pb-20 sm:grid-cols-2">
              <div className="font-display -mb-2 text-3xl sm:text-4xl lg:text-6xl">
                Advanced Testing and Simulation Tools
              </div>
              <p className="max-w-lg justify-self-end text-base opacity-70">
                Launch your credit program with confidence. Use Highnote&apos;s
                extensive testing and simulation tools to get a full picture of your
                credit product before going live.
              </p>
            </div>
            <div className="grid gap-5 pt-10 md:grid-cols-3">
              <div className="rounded-highnote col-span-1 flex flex-col justify-between bg-white">
                <div className="max-w-2xl px-5 py-10 lg:p-8 lg:pb-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Simulate Delinquency
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Manage your credit risk strategies and prepare credit reporting
                    procedures by simulating delinquent accounts.
                  </p>
                </div>
                <SimulateDelinquencyGraphic />
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col justify-between bg-white">
                <div className="max-w-2xl px-5 py-10 lg:p-8 lg:pb-10">
                  <h3 className="pb-2.5 text-base font-medium">
                    Simulate Credit Plans
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Test different credit plans to find your best fit. Simulate
                    different APR offerings and credit limit usage to project customer
                    scenarios and optimize your program revenue.
                  </p>
                </div>
                <SimulatePlansGraphic />
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col justify-between overflow-hidden bg-white">
                <div className="max-w-2xl px-5 py-10 lg:p-8 lg:pb-8">
                  <h3 className="pb-2.5 text-base font-medium">
                    Dashboard Testing Environment
                  </h3>
                  <p className="max-w-lg text-sm opacity-70">
                    Experience the full potential of your credit program with the
                    Highnote Dashboard. Test your card product and engage with every
                    customer touchpoint.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="pl-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="dashboard" src={asset("/img/dashboard.svg")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: Dedicated Program Management ===== */}
        <section className="bg-bone relative px-5 pb-2.5 antialiased lg:px-10">
          <div className="rounded-highnote bg-ash relative mx-auto grid max-w-7xl px-5 py-20 lg:px-12">
            <div className="pb-5">
              <div>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M10 15C10 12.7909 11.7909 11 14 11H42C44.2091 11 46 12.7909 46 15V33C46 35.2091 44.2091 37 42 37H18L11.7071 43.2929C11.0771 43.9229 10 43.4767 10 42.5858V15Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="2 4"
                  />
                  <path
                    d="M70 19C70 16.7909 68.2091 15 66 15H38C35.7909 15 34 16.7909 34 19V37C34 39.2091 35.7909 41 38 41H62L68.2929 47.2929C68.9229 47.9229 70 47.4767 70 46.5858V19Z"
                    fill="#E2E0D6"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <circle cx="19" cy="54" r="4" stroke="black" strokeWidth="2" />
                  <circle cx="60" cy="54" r="4" stroke="black" strokeWidth="2" />
                  <path
                    d="M26 68C26 68 26 62 19 62C12 62 12 68 12 68"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M67 68C67 68 67 62 60 62C53 62 53 68 53 68"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <div className="font-display max-w-2xl pb-8 text-3xl sm:text-4xl lg:text-6xl">
              Dedicated Program Management
            </div>
            <p className="max-w-xl text-base opacity-70">
              Highnote&apos;s specialized teams help provide guidance throughout the
              onboarding process, including all credit-specific requirements.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
