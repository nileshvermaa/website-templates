import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import HeroTransfers from "@/components/solutions/money-movement/HeroTransfers";
import Faq from "@/components/solutions/money-movement/Faq";

export const metadata: Metadata = {
  title: "Money Movement Platform: Programmable and Unified | Highnote",
};

const LOGOS = [
  "casspay",
  "triplink",
  "fluz",
  "ferry",
  "lowes",
  "bny",
  "pingpong",
  "samsung",
  "atob",
  "coinflow",
  "spoton",
  "givecard",
  "mudflap",
  "splitit",
  "netevia",
  "fillip",
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-bone">
        {/* SECTION 1 — Hero */}
        <section className="relative px-5 pb-16 antialiased lg:pb-20">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center lg:items-start">
              <div className="relative z-[1] flex w-full max-w-[576px] flex-col items-center text-left lg:items-start">
                <div className="w-full pb-10 lg:pb-0">
                  <div className="pt-10 pb-6 opacity-50 lg:pt-0">Money Movement</div>
                  <h1 className="font-display pb-5 text-2xl leading-[1.1] lg:text-5xl">
                    Unified Infrastructure for Programmable Money Movement
                  </h1>
                  <p className="max-w-lg pb-8 text-sm opacity-70 sm:order-2">
                    Highnote is the unified platform for embedded finance. We
                    built the money movement platform for companies that need
                    programmable disbursements, real-time payouts, and unified
                    ledger visibility in a single system.
                  </p>
                  <div className="order-2 flex flex-col items-center space-y-5 sm:order-1 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <a
                      className="button button-black-arrow group bg-green text-black hover:bg-green/90"
                      href="https://highnote.com/contact"
                    >
                      Contact Sales
                      <Image
                        alt=""
                        width={16}
                        height={16}
                        className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                        src="/img/black-arrow-icon.svg"
                      />
                    </a>
                    <a
                      className="button button-white-arrow group bg-ash text-black hover:bg-ash/80"
                      href="https://dashboard.highnote.com/auth/signin?screen_hint=signup"
                    >
                      Start Testing
                      <Image
                        alt=""
                        width={16}
                        height={16}
                        className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                        src="/img/black-arrow-icon.svg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-ash/30 rounded-highnote flex items-center justify-center py-8 lg:h-[700px] lg:overflow-hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0, 0, 0, 0.09) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              <HeroTransfers />
            </div>
          </div>
        </section>

        {/* SECTION 2 — Logos marquee */}
        <section className="flex w-full flex-col pt-10 antialiased">
          <div className="text-xxs pb-3 text-center opacity-60 sm:text-xs">
            Join the companies building what&apos;s next in payments.
          </div>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee">
              {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((name, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center justify-center px-8"
                >
                  <Image
                    alt=""
                    width={120}
                    height={40}
                    loading="eager"
                    className="h-7 w-auto opacity-80"
                    src={`/img/logo-${name}.svg`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — What a Money Movement Platform Requires */}
        <section className="relative overflow-hidden px-5 py-24 antialiased">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-3">
            <h2 className="font-display text-2xl lg:col-span-3 lg:text-5xl">
              What a Money Movement Platform Requires
            </h2>
            <p className="max-w-sm opacity-70">
              Moving money is only part of the problem. Moving money with policy
              controls, real-time visibility, and a unified reconciliation record
              is where most stacks fail.
            </p>
            <p className="max-w-sm opacity-70">
              Companies that need to disburse funds to suppliers, contractors, or
              cardholders hit the same wall: fragmented payment rails,
              reconciliation seams between their payment provider and their books,
              and no single ledger that reflects the true state of every
              transaction.
            </p>
            <p className="max-w-sm opacity-70">
              A money movement platform is not a single API call. It is the
              infrastructure layer that integrates disbursement logic, payment
              execution, and ledger reporting into a single programmable system.
              Highnote built that layer.
            </p>
          </div>
        </section>

        {/* SECTION 4 — What Highnote Gives You */}
        <section className="relative px-5 pt-24 pb-28 antialiased">
          <div className="relative mx-auto max-w-screen-xl">
            <h2 className="font-display pb-16 text-2xl lg:text-5xl">
              What Highnote Gives You
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
              {/* Programmable money movement */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-3">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Programmable money movement
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Move funds via major debit network rails from a unified
                    ledger, governed by program-level rules. Every payment
                    executes against a policy layer and posts as a real-time
                    ledger event.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <div className="flex w-full max-w-sm flex-col items-stretch gap-3 px-8">
                    <div className="rounded-highnote bg-ash/40 p-4">
                      <div className="flex items-center justify-between pb-3">
                        <span className="text-xs font-medium opacity-60">
                          Disbursement
                        </span>
                        <span className="text-sm font-medium tabular-nums">
                          $12,500.00
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs opacity-50">Recipient</span>
                        <span className="text-xs font-medium">Vendor Corp</span>
                      </div>
                    </div>
                    <div className="mx-auto h-6 w-px bg-black/10" />
                    <div className="rounded-highnote border border-black/5 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between pb-2 text-xs">
                        <span className="opacity-50">Policy</span>
                        <span className="flex items-center gap-1 text-emerald-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Approved
                        </span>
                      </div>
                      <div className="flex items-center justify-between pb-2 text-xs">
                        <span className="opacity-50">Rail</span>
                        <span className="font-medium">ACH</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="opacity-50">Ledger post</span>
                        <span className="font-medium text-emerald-600">
                          Real-time
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-time payouts */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-3">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Real-time payouts
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Disburse funds in near real time via major debit network
                    rails. No batch delays. No reconciliation gaps between
                    initiation and settlement.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <div className="rounded-highnote bg-ash/40 mx-8 w-full max-w-sm overflow-hidden">
                    <div className="px-4 pt-4 pb-2 text-xs font-medium opacity-60">
                      Payouts
                    </div>
                    <div className="grid grid-cols-[1fr_auto_auto] gap-3 px-4 pb-2 text-[10px] uppercase tracking-wide opacity-40">
                      <span>Recipient</span>
                      <span>Status</span>
                      <span>Amount</span>
                    </div>
                    <div className="h-[150px] overflow-hidden">
                      <div className="animate-scroll-pills flex flex-col">
                        {[
                          ["David Chen", "$1,100.00"],
                          ["Apex Logistics LLC", "$2,890.00"],
                          ["Miguel Santos", "$720.00"],
                          ["Northfield Supply", "$1,575.00"],
                          ["Thomas Okafor", "$4,500.00"],
                          ["Elena Vasquez", "$950.00"],
                          ["Clearway Partners", "$2,100.00"],
                          ["Priya Patel", "$680.00"],
                          ["Marcus Reyes", "$3,800.00"],
                          ["Vantage Group Inc", "$1,240.00"],
                        ]
                          .concat([
                            ["David Chen", "$1,100.00"],
                            ["Apex Logistics LLC", "$2,890.00"],
                            ["Miguel Santos", "$720.00"],
                            ["Northfield Supply", "$1,575.00"],
                            ["Thomas Okafor", "$4,500.00"],
                            ["Elena Vasquez", "$950.00"],
                            ["Clearway Partners", "$2,100.00"],
                            ["Priya Patel", "$680.00"],
                            ["Marcus Reyes", "$3,800.00"],
                            ["Vantage Group Inc", "$1,240.00"],
                          ])
                          .map(([name, amount], i) => (
                            <div
                              key={i}
                              className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-2 text-xs"
                            >
                              <span className="truncate">{name}</span>
                              <span className="flex items-center gap-1 text-[10px] text-emerald-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                Delivered
                              </span>
                              <span className="tabular-nums">{amount}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unified ledger visibility */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-2">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Unified ledger visibility
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Every transaction posts to a single real-time ledger the
                    moment it occurs, at the transaction level, not in a delayed
                    export.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <div className="rounded-highnote bg-ash/40 mx-8 w-full p-4">
                    <div className="flex items-center justify-between pb-4">
                      <span className="text-xs font-medium opacity-60">
                        Unified Ledger
                      </span>
                      <span className="text-base font-medium tabular-nums">
                        $500,000.00
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {[
                        ["Vendor Payment", "−$4,200.00"],
                        ["Contractor Pay", "−$1,850.00"],
                        ["Supplier Disb", "−$8,000.00"],
                        ["Partner Pmt", "−$2,400.00"],
                        ["Gig Payout", "−$680.00"],
                      ].map(([desc, amt]) => (
                        <div
                          key={desc}
                          className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs"
                        >
                          <span className="opacity-70">{desc}</span>
                          <span className="tabular-nums">{amt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* API-first payment lifecycle control */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-2">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    API-first payment lifecycle control
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Authorize, capture, and refund programmatically. Every state
                    change is available via API and maps to your financial data
                    model.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <div className="rounded-highnote bg-ash/40 mx-8 w-full p-4">
                    <div className="flex items-center justify-between pb-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium opacity-60">
                          Transfer
                        </span>
                        <span className="font-mono text-[10px] opacity-50">
                          uft_9kPm3xBw7nQ2
                        </span>
                      </div>
                      <span className="text-sm font-medium tabular-nums">
                        $5,000.00
                      </span>
                    </div>
                    <div className="flex flex-col gap-2.5 font-mono text-xs">
                      {[
                        "uft.initiated",
                        "int.initiated",
                        "int.funds_authorized",
                        "int.completed",
                        "uft.completed",
                      ].map((evt, i, arr) => (
                        <div key={evt} className="flex items-center gap-3">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              i === arr.length - 1
                                ? "bg-emerald-500"
                                : "bg-black/30"
                            }`}
                          />
                          <span className="opacity-70">{evt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Program-level spend governance */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-2">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Program-level spend governance
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Set velocity limits, per-transaction caps, and recipient
                    parameters at the program level. Every payment is evaluated
                    before funds move.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <div className="flex w-full max-w-sm flex-col items-stretch gap-3 px-8">
                    <div className="flex items-center gap-3 rounded-highnote bg-ash/40 p-4">
                      <div className="text-black">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x="9" y="7" width="2" height="2" fill="currentColor" />
                          <rect x="10" y="3" width="3" height="2" fill="currentColor" />
                          <rect x="9" y="15" width="2" height="2" fill="currentColor" />
                          <rect x="9" y="11" width="2" height="2" fill="currentColor" />
                          <rect x="7" y="9" width="2" height="2" fill="currentColor" />
                          <rect
                            x="9"
                            y="7"
                            width="4"
                            height="2"
                            transform="rotate(-90 9 7)"
                            fill="currentColor"
                          />
                          <circle cx="4" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                          <circle cx="16" cy="4" r="3" stroke="currentColor" strokeWidth="2" />
                          <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wide opacity-50">
                          Card Program
                        </span>
                        <span className="text-sm font-medium">Spend Rules</span>
                      </div>
                    </div>
                    <div className="mx-auto h-6 w-px bg-black/10" />
                    <div className="rounded-highnote border border-black/5 bg-white p-4 shadow-sm">
                      {[
                        ["Velocity limit", "$50,000 / day"],
                        ["Per-txn limit", "$25,000"],
                        ["Recipient scope", "Approved vendors"],
                      ].map(([label, val]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between py-1 text-xs"
                        >
                          <span className="opacity-50">{label}</span>
                          <span className="font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Why Programmable Money Movement Needs Unified Infrastructure */}
        <section className="relative px-5 pb-24 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-t pt-24">
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              <h2 className="font-display max-w-screen-lg text-2xl sm:col-span-2 lg:text-5xl">
                Why Programmable Money Movement Needs Unified Infrastructure
              </h2>
              <p className="max-w-2xl pb-10 opacity-70">
                We built a unified platform (issuing, acquiring, credit, and a
                real-time ledger) so that every disbursement and payout runs on
                one system from authorization through settlement. One unified
                platform for disbursements, controls, and ledger visibility. No
                gaps between your payment execution and your books.
              </p>
              <div className="mb-10 sm:col-span-2">
                <div className="rounded-highnote bg-white p-6 sm:p-8">
                  <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
                    <div className="rounded-highnote bg-ash/40 shrink-0 p-5 lg:w-56">
                      <h4 className="pb-1 text-sm font-medium">
                        Platform or Operator
                      </h4>
                      <p className="text-xs leading-5 opacity-60">
                        Initiates a disbursement or payment request
                      </p>
                    </div>
                    <span className="flex justify-center lg:justify-start" aria-hidden="true">
                      <svg
                        className="h-3 w-8 rotate-90 text-black/40 lg:rotate-0"
                        viewBox="0 0 30 12"
                        fill="none"
                      >
                        <path
                          d="M1 6 H26 M21 1 L26 6 L21 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        [
                          "Spend Controls",
                          "Evaluate the request against program rules in real time",
                        ],
                        [
                          "Rail Execution",
                          "Payment executes via major debit network rails",
                        ],
                        [
                          "Ledger",
                          "Transaction posts to the unified ledger immediately",
                        ],
                        [
                          "Reconciliation",
                          "Finance reconciles from one system across all activity",
                        ],
                      ].map(([title, body]) => (
                        <div
                          key={title}
                          className="rounded-highnote bg-ash/40 p-5"
                        >
                          <h4 className="pb-1 text-sm font-medium">{title}</h4>
                          <p className="text-xs leading-5 opacity-60">{body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="col-span-1 max-w-xl opacity-70">
                Most fragmented payment stacks separate the movement layer from
                the ledger layer. Policy controls sit outside the rails.
                Reconciliation runs behind actual payment activity. Finance teams
                end up stitching exports together after the fact.
              </p>
              <p className="col-span-1 max-w-xl opacity-70">
                Highnote&apos;s unified payments platform is programmable from the
                API up. Every payment hits a policy check at initiation, posts to
                the real-time ledger the moment it clears, and settles against the
                same data model your finance team uses for reconciliation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — How Finance and Ops Teams Use It Today */}
        <section className="relative px-5 pb-28 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <h2 className="font-display max-w-screen-md pb-14 text-2xl lg:text-5xl">
              How Finance and Ops Teams Use It Today
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "icon-mm-distribute",
                  "Supplier and vendor disbursements",
                  "Execute governed disbursements to suppliers at scale. Every payment initiates from the unified ledger, posts in real time, and settles against a single reconciliation record.",
                ],
                [
                  "icon-mm-contractors",
                  "Near real-time payouts to contractors and gig workers",
                  "Disburse funds in near real time to contractors and gig workers. Recipients get paid faster; finance gets unified ledger visibility without waiting on batch reports.",
                ],
                [
                  "icon-mm-claims",
                  "Insurance and claims disbursements",
                  "Fund and disburse claim payments via virtual card or direct payment. Each disbursement executes within approved parameters and posts to the ledger at the transaction level for a clean audit trail.",
                ],
                [
                  "icon-mm-corporate",
                  "Corporate reimbursements and partner payments",
                  "Replace manual ACH workflows with governed, API-driven disbursements. Spend rules enforce at initiation and every transaction posts to the unified ledger in real time.",
                ],
              ].map(([icon, title, body]) => (
                <div
                  key={title}
                  className="rounded-highnote flex aspect-3/2 w-full flex-col justify-between bg-white/80 p-7 lg:aspect-square"
                >
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={`/img/${icon}.svg`}
                  />
                  <div>
                    <h3 className="pb-3 text-sm leading-5 font-medium">
                      {title}
                    </h3>
                    <p className="text-xs leading-5 opacity-60">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — Go Deeper */}
        <section className="relative px-5 pb-28 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <h2 className="font-display pb-14 text-2xl lg:text-5xl">Go Deeper</h2>
            <div className="mx-auto grid items-start gap-10 sm:grid-cols-3">
              {[
                [
                  "/blog/the-real-time-mandate-why-leading-platforms-are-unifying-money-movement-with-highnote",
                  "/img/blog_money-moves.jpg",
                  "The real-time mandate for unified money movement",
                  "The Real-Time Mandate: Why Leading Platforms Are Unifying Money Movement with Highnote",
                  "Why unified money movement is replacing fragmented payment rails in finance operations.",
                ],
                [
                  "/blog/how-modern-money-moves-inside-highnotes-unified-platform-for-embedded-finance",
                  "/img/blog_embedded.jpg",
                  "How modern money moves",
                  "How Modern Money Moves: Inside Highnote's Unified Platform for Embedded Finance",
                  "How Highnote handles real-time payment events across issuing, acquiring, and the ledger.",
                ],
                [
                  "/blog/unified-payments-platform-what-it-is-why-it-matters-and-how-to-implement-it",
                  "/img/blog_unified.jpg",
                  "Unified payments platform",
                  "Unified Payments Platform: What It Is, Why It Matters, and How to Implement It",
                  "The case for building payment execution on a single system rather than stitching together vendors.",
                ],
              ].map(([href, img, alt, title, desc]) => (
                <a key={href} className="group space-y-5" href={href}>
                  <div className="rounded-highnote overflow-hidden">
                    <Image
                      className="w-full duration-300 group-hover:scale-103"
                      alt={alt}
                      width={600}
                      height={400}
                      loading="lazy"
                      src={img}
                    />
                  </div>
                  <div>
                    <h4 className="max-w-sm pb-3 text-base leading-6 font-medium">
                      {title}
                    </h4>
                    <p className="max-w-sm text-xs leading-5 opacity-60">
                      {desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — FAQ */}
        <section className="relative px-5 pb-10 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <div className="grid grid-cols-1 gap-10">
              <div className="font-display max-w-2xl text-3xl sm:text-4xl lg:text-6xl">
                FAQ
              </div>
              <Faq />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
