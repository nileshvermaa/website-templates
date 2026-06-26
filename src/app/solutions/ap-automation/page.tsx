import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import LogosMarquee from "@/components/products/issuing/LogosMarquee";
import Faq from "@/components/solutions/ap-automation/Faq";
import {
  APHeroGraphic,
  APVirtualCardGraphic,
  APSupplierPaymentGraphic,
  APSpendGovernanceGraphic,
  APLedgerReconciliationGraphic,
  APPaymentLifecycleGraphic,
  APFlowGraphic,
} from "@/components/solutions/ap-automation/Graphics";

export const metadata: Metadata = {
  title: "Accounts Payable Automation Infrastructure | Highnote",
};

const arrowClass =
  "absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100";

const featureCards = [
  {
    span: "lg:col-span-3",
    title: "Programmable virtual card issuance",
    body: "Issue a virtual card per invoice, per vendor, or per payment run. Each card has its own spend limit, merchant category restrictions, and expiration date. The card is the control layer for every supplier payment.",
    graphic: <APVirtualCardGraphic />,
  },
  {
    span: "lg:col-span-3",
    title: "Supplier payment automation",
    body: "Replace manual ACH and wire-based payment workflows with governed, API-driven supplier payments initiated from a unified ledger via major debit network rails.",
    graphic: <APSupplierPaymentGraphic />,
  },
  {
    span: "lg:col-span-2",
    title: "Authorization-layer spend governance",
    body: "Set vendor allowlists, per-transaction caps, and velocity rules at the program level. Every payment is evaluated at authorization, before funds move.",
    graphic: <APSpendGovernanceGraphic />,
  },
  {
    span: "lg:col-span-2",
    title: "Unified ledger reconciliation",
    body: "Every payment posts to a single, real-time ledger the moment it clears. No reconciliation gaps between AP approval and settlement.",
    graphic: <APLedgerReconciliationGraphic />,
  },
  {
    span: "lg:col-span-2",
    title: "API-first payment lifecycle control",
    body: "Authorize, capture, and refund programmatically. The full payment lifecycle runs via API, with every event mapping cleanly to your financial data model.",
    graphic: <APPaymentLifecycleGraphic />,
  },
];

const useCards = [
  {
    icon: "/img/icon-ap-virtual.svg",
    title: "Virtual card AP workflows",
    body: "Issue a dedicated virtual card per approved invoice. Vendor-scoped, spend-limited, and auto-expiring upon payment clearing.",
  },
  {
    icon: "/img/icon-disbursements.svg",
    title: "B2B supplier disbursements",
    body: "Automate supplier disbursements at scale. Each vendor gets its own controlled payment instrument with unified reconciliation.",
  },
  {
    icon: "/img/icon-ap-invoice.svg",
    title: "Invoice-triggered payment execution",
    body: "AP system approves, Highnote's API issues and funds a virtual card for that specific payment. Workflow stays upstream, money movement runs on Highnote.",
  },
  {
    icon: "/img/icon-procurement.svg",
    title: "Procurement payment automation",
    body: "Issue spend-controlled virtual cards against approved POs. Each card closes on fulfillment with policy enforced automatically.",
  },
];

const deeperLinks = [
  {
    href: "/blog/what-is-ap-automation-and-how-it-transforms-accounts-payable",
    img: "/img/blog_ap-automation.jpg",
    alt: "AP automation",
    title: "What Is AP Automation and How It Transforms Accounts Payable",
    body: "The operational case for programmable payment infrastructure inside AP workflows.",
  },
  {
    href: "/blog/the-real-time-mandate-why-leading-platforms-are-unifying-money-movement-with-highnote",
    img: "/img/blog_money-moves.jpg",
    alt: "The real-time mandate for unified money movement",
    title: "The Real-Time Mandate: Why Leading Platforms Are Unifying Money Movement with Highnote",
    body: "Why unified money movement is replacing fragmented payment rails in finance operations.",
  },
  {
    href: "/blog/unified-payments-platform-what-it-is-why-it-matters-and-how-to-implement-it",
    img: "/img/blog_unified.jpg",
    alt: "Unified payments platform",
    title: "Unified Payments Platform: What It Is, Why It Matters, and How to Implement It",
    body: "The case for building payment execution into a single system rather than stitching vendors.",
  },
];

const interests = [
  "Issuing (Card Programs)",
  "Acquiring (Payment Acceptance)",
  "Credit Programs",
  "Money Movement (ACH, RTP, Push-to-Card)",
  "Stablecoin & Digital Asset Settlement",
  "Not Sure Yet",
];

const volumes = [
  "Less than $100K per month",
  "$100K – $500K per month",
  "$500K – $1M per month",
  "$1M – $10M per month",
  "$10M – $50M per month",
  "$50M+ per month",
  "Not Sure Yet",
];

const timelines = [
  "Researching options",
  "Planning within 6–12 months",
  "Planning within 3–6 months",
  "Ready to launch now",
  "Existing program, exploring switch",
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-bone">
        {/* HERO */}
        <section className="relative px-5 pb-16 antialiased lg:pb-20">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center lg:items-start">
              <div className="relative z-[1] flex w-full max-w-[468px] flex-col items-center text-left lg:relative lg:h-full lg:max-w-[576px] lg:items-start lg:justify-center">
                <div className="w-full pb-10 lg:pb-0">
                  <div className="pt-10 pb-6 opacity-50 lg:pt-0">AP Automation</div>
                  <h1 className="font-display pb-5 text-2xl leading-[1.1] lg:text-5xl">
                    Payment Execution Infrastructure for Accounts Payable Automation
                  </h1>
                  <p className="max-w-lg pb-8 text-sm opacity-70 sm:order-2">
                    Highnote powers the payment execution layer in accounts payable automation: programmable virtual cards, supplier payments, spend controls, and unified ledger reconciliation, all on one platform.
                  </p>
                  <div className="order-2 flex flex-col items-center space-y-5 sm:order-1 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <a className="button group text-black" style={{ backgroundColor: "#55F5A3" }} href="https://highnote.com/contact">
                      Contact Sales
                      <img alt="" className={arrowClass} src="/img/black-arrow-icon.svg" />
                    </a>
                    <a className="button group text-black" style={{ backgroundColor: "#E2E0D6" }} href="https://dashboard.highnote.com/auth/signin?screen_hint=signup">
                      Start Testing
                      <img alt="" className={arrowClass} src="/img/black-arrow-icon.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-ash/30 rounded-highnote flex items-center justify-center py-16 lg:h-[700px] lg:overflow-hidden lg:py-8"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.09) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              <APHeroGraphic />
            </div>
          </div>
        </section>

        {/* LOGOS MARQUEE */}
        <section className="flex w-full flex-col pt-10 antialiased">
          <div className="text-xxs pb-3 text-center opacity-60 sm:text-xs">
            Join the companies building what&apos;s next in payments.
          </div>
          <LogosMarquee />
        </section>

        {/* WHERE HIGHNOTE FITS */}
        <section className="relative overflow-hidden px-5 py-24 antialiased">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-3">
            <h2 className="font-display text-2xl lg:col-span-3 lg:text-5xl">
              Where Highnote Fits in AP Automation
            </h2>
            <p className="opacity-70">
              AP automation spans a wide range of capabilities: invoice capture, OCR, workflow routing, ERP integration, and approvals. Most platforms automate that workflow layer. Highnote is not that layer.
            </p>
            <p className="opacity-70">
              Highnote is the payment-execution infrastructure beneath it. When an invoice clears approval, Highnote governs how the money moves: which virtual card executes the payment, what spend limits apply, which vendors are authorized, and how every transaction posts to a unified ledger in real time.
            </p>
            <p className="opacity-70">
              Most AP systems automate workflows. Highnote automates and governs the money movement layer.
            </p>
          </div>
        </section>

        {/* WHAT HIGHNOTE GIVES — feature cards */}
        <section className="relative px-5 pt-24 pb-28 antialiased">
          <div className="relative mx-auto max-w-screen-xl">
            <h2 className="font-display pb-16 text-2xl lg:text-5xl">
              What Highnote Gives AP and Finance Teams
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
              {featureCards.map((card) => (
                <div key={card.title} className={`rounded-highnote flex flex-col overflow-hidden bg-white ${card.span}`}>
                  <div className="p-8 pb-6">
                    <h3 className="pb-3 text-base leading-6 font-medium">{card.title}</h3>
                    <p className="max-w-lg text-xs leading-5 opacity-70">{card.body}</p>
                  </div>
                  <div className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8" aria-hidden="true">
                    {card.graphic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY THE PAYMENT LAYER NEEDS ITS OWN INFRASTRUCTURE */}
        <section className="relative px-5 pb-24 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-t pt-24">
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              <h2 className="font-display max-w-screen-lg pr-10 text-2xl sm:col-span-2 lg:text-5xl">
                Why the Payment Execution Layer Needs Its Own Infrastructure
              </h2>
              <p className="max-w-2xl pb-10 opacity-70">
                Most AP automation platforms handle the workflow. They do not own the money movement. When they reach the payment step, they hand off to ACH rails or third-party processors not designed for policy-controlled governance. Spend policy becomes a soft limit. Reconciliation becomes manual. Finance loses transaction-level visibility at the moment it matters most.
              </p>
              <div className="mb-10 sm:col-span-2">
                <APFlowGraphic />
              </div>
              <p className="col-span-1 max-w-lg opacity-70">
                Highnote&apos;s issuing infrastructure is API-driven from the ground up. Controls live inside the card program. Every supplier payment hits a policy check at authorization and settles against the same data model your finance team uses on the unified payments platform.
              </p>
              <p className="col-span-1 max-w-lg opacity-70">
                The result: AP approval and payment execution run on one continuous system. No gaps between your workflow layer and your books. No manual reconciliation between what the AP system approved and what actually posted.
              </p>
            </div>
          </div>
        </section>

        {/* HOW FINANCE TEAMS USE HIGHNOTE — use cards */}
        <section className="relative px-5 pb-28 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <h2 className="font-display max-w-screen-md pb-14 text-2xl lg:text-5xl">
              How Finance Teams Use Highnote for AP Today
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {useCards.map((c) => (
                <div key={c.title} className="rounded-highnote flex aspect-3/2 w-full flex-col justify-between bg-white/80 p-7 lg:aspect-square">
                  <Image alt="" width={24} height={24} src={c.icon} />
                  <div>
                    <h3 className="pb-3 text-sm leading-5 font-medium">{c.title}</h3>
                    <p className="text-xs leading-5 opacity-60">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GO DEEPER */}
        <section className="relative px-5 pb-28 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <h2 className="font-display pb-14 text-2xl lg:text-5xl">Go Deeper</h2>
            <div className="mx-auto grid items-start gap-10 sm:grid-cols-3">
              {deeperLinks.map((l) => (
                <a key={l.href} className="group space-y-5" href={l.href}>
                  <div className="rounded-highnote overflow-hidden">
                    <Image
                      className="w-full duration-300 group-hover:scale-103"
                      alt={l.alt}
                      width={600}
                      height={400}
                      loading="lazy"
                      src={l.img}
                    />
                  </div>
                  <div>
                    <h4 className="max-w-sm pb-3 text-base leading-6 font-medium">{l.title}</h4>
                    <p className="max-w-sm text-xs leading-5 opacity-60">{l.body}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative px-5 pb-10 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <div className="grid grid-cols-1 gap-10">
              <div className="font-display max-w-2xl text-3xl sm:text-4xl lg:text-6xl">FAQ</div>
              <Faq />
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="relative overflow-hidden px-5 pt-10 pb-40 antialiased" data-testid="contact-form-cta">
          <div className="absolute -right-20 -bottom-20 -left-20 z-0">
            <div aria-hidden="true" className="pointer-events-none relative w-full" style={{ height: "280px" }}>
              <div
                className="absolute inset-x-0 bottom-0 lg:hidden"
                style={{
                  height: "70%",
                  background: "linear-gradient(to right, rgba(225, 255, 37, 0.45), rgba(85, 245, 163, 0.55), rgba(63, 247, 236, 0.45))",
                  filter: "blur(24px)",
                }}
              />
              <svg viewBox="0 0 4509 1029" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 hidden h-full w-full lg:block">
                <defs>
                  <filter id="ambBlur" x="0" y="0" width="4508.86" height="1028.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur" />
                  </filter>
                  <linearGradient id="ambGrad" x1="120" y1="546.886" x2="4388.86" y2="546.886" gradientUnits="userSpaceOnUse">
                    <stop offset="0.338752" stopColor="#E1FF25" stopOpacity="0.8" />
                    <stop offset="0.5" stopColor="#55F5A3" />
                    <stop offset="0.612937" stopColor="#3FF7EC" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <g filter="url(#ambBlur)">
                  <path fill="url(#ambGrad)">
                    <animate
                      attributeName="d"
                      dur="8s"
                      repeatCount="indefinite"
                      calcMode="spline"
                      keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
                      values=" M120 349.862L1187.22 120L2254.43 382.699L3321.65 218.512L4388.86 448.374V908.097H120Z; M120 180L1187.22 420L2254.43 150L3321.65 480L4388.86 250V908.097H120Z; M120 480L1187.22 100L2254.43 500L3321.65 120L4388.86 520V908.097H120Z; M120 349.862L1187.22 120L2254.43 382.699L3321.65 218.512L4388.86 448.374V908.097H120Z "
                    />
                  </path>
                </g>
                <div />
              </svg>
              <div
                className="pointer-events-none absolute inset-x-0 top-0"
                style={{ height: "55%", background: "linear-gradient(rgb(245, 243, 235), transparent)" }}
              />
            </div>
          </div>
          <div className="relative z-10 mx-auto grid max-w-screen-xl items-start gap-10 pt-16 sm:pt-20 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="font-display max-w-xl pb-5 text-2xl sm:text-3xl lg:text-4xl">
                AP Systems Handle the Workflow. Highnote Governs the Money Movement.
              </h2>
              <p className="max-w-lg text-sm leading-relaxed opacity-70">
                Build the governed payment infrastructure layer behind your AP automation workflows. Programmable virtual cards, spend controls, and unified ledger visibility. Available today on Highnote.
              </p>
            </div>
            <div className="rounded-highnote bg-white p-6 md:p-10">
              <form data-testid="form::contact-cta::interest">
                <div className="grid grid-cols-1 gap-3">
                  <fieldset className="col-span-1">
                    <legend className="formLabel cursor-pointer">What are you interested in?</legend>
                    <div className="grid gap-2 py-2">
                      {interests.map((label) => (
                        <label key={label} className="flex cursor-pointer items-center gap-2 text-xs">
                          <div className="relative flex shrink-0 items-center justify-center">
                            <input
                              className="peer border-ash h-5 w-5 cursor-pointer appearance-none rounded border checked:border-black checked:bg-black"
                              type="checkbox"
                              value={label}
                              name="productInterest"
                            />
                            <svg className="pointer-events-none absolute hidden h-3 w-3 peer-checked:block" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          {label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="col-span-1">
                    <label className="formLabel inline-flex cursor-pointer items-center gap-1" htmlFor="cta-processingVolume">
                      Estimated Monthly Payment or Fund Flow Volume
                      <button type="button" aria-label="More information about volume" className="flex items-center opacity-40 hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4M12 8h.01" />
                        </svg>
                      </button>
                    </label>
                    <select className="baseInput p-3 text-xs" data-testid="form::contact-cta::select::processingVolume" id="cta-processingVolume" required name="processingVolume" defaultValue="">
                      <option value="" disabled>Select...</option>
                      {volumes.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label className="formLabel cursor-pointer" htmlFor="cta-programTimeline">
                      When are you planning to launch or migrate?
                    </label>
                    <select className="baseInput p-3 text-xs" data-testid="form::contact-cta::select::programTimeline" id="cta-programTimeline" required name="programTimeline" defaultValue="">
                      <option value="" disabled>Select...</option>
                      {timelines.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-10">
                  <button className="button button-black-arrow group h-12 w-full" type="submit">
                    Continue
                    <img alt="" className={arrowClass} src="/img/white-arrow-icon.svg" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
