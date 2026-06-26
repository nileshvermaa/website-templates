import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import Image from "next/image";
import { asset } from "@/lib/asset";
import Faq from "@/components/solutions/embedded-finance/Faq";
import {
  EFHero,
  EFIssuingAcquiring,
  EFEmbeddedPayments,
  EFCredit,
  EFLedger,
  EFApiLifecycle,
  EmbeddedFinanceFlow,
} from "@/components/solutions/embedded-finance/graphics";

export const metadata: Metadata = {
  title: "Build Embedded Finance Products on One Platform | Highnote",
};

const marqueeLogos = [
  "casspay", "triplink", "fluz", "ferry", "lowes", "bny", "pingpong",
  "samsung", "atob", "coinflow", "spoton", "givecard", "mudflap",
  "splitit", "netevia", "fillip",
];

const useCases = [
  {
    icon: "/img/icon-embedded-saas.svg",
    title: "Vertical SaaS adding card programs",
    body: "SaaS companies serving fleet, logistics, construction, or field service add branded spend cards as a native product feature, with spend controls and a unified ledger.",
  },
  {
    icon: "/img/icon-embedded-fintech.svg",
    title: "Fintechs launching issuing and acquiring",
    body: "Fintechs that need both card issuance and payment acceptance run both on a single platform: one API, one ledger, one reconciliation system across product lines.",
  },
  {
    icon: "/img/icon-disbursements.svg",
    title: "B2B embedded finance programs",
    body: "B2B platforms adding embedded payments, supplier disbursements, or spend-controlled cards govern the full transaction lifecycle on a unified ledger.",
  },
  {
    icon: "/img/icon-embedded-enterprise.svg",
    title: "Enterprises embedding financial products",
    body: "Enterprises add card programs, payment acceptance, or credit to their platforms without standing up their own payment infrastructure. Highnote handles the rails; the enterprise owns the product.",
  },
];

const goDeeper = [
  {
    href: "/blog/embedded-finance-use-cases-and-examples-across-industries",
    img: "/img/blog_ef-use-cases.jpg",
    alt: "Embedded finance use cases and examples across industries",
    title: "Embedded Finance Use Cases and Examples Across Industries",
    body: "How embedded finance works across verticals and what the infrastructure requirements are.",
  },
  {
    href: "/blog/embedded-finance-at-scale-the-decisions-cfos-are-actually-making",
    img: "/img/blog_ef-cfo-decisions.jpg",
    alt: "Embedded finance at scale: the decisions CFOs are actually making",
    title: "Embedded Finance at Scale: The Decisions CFOs Are Actually Making",
    body: "How finance leaders evaluate embedded finance platform decisions at scale.",
  },
  {
    href: "/blog/the-unified-payments-era-why-fragmentation-is-failing-at-scale",
    img: "/img/blog_ef-unified-era.jpg",
    alt: "The unified payments era: why fragmentation is failing at scale",
    title: "The Unified Payments Era: Why Fragmentation Is Failing at Scale",
    body: "The operational cost of stitched vendor stacks for embedded finance programs.",
  },
];

const productInterests = [
  "Issuing (Card Programs)",
  "Acquiring (Payment Acceptance)",
  "Credit Programs",
  "Money Movement (ACH, RTP, Push-to-Card)",
  "Stablecoin & Digital Asset Settlement",
  "Not Sure Yet",
];

const volumeOptions = [
  "Less than $100K per month",
  "$100K – $500K per month",
  "$500K – $1M per month",
  "$1M – $10M per month",
  "$10M – $50M per month",
  "$50M+ per month",
  "Not Sure Yet",
];

const timelineOptions = [
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
        {/* ===== Section 1: Hero ===== */}
        <section className="relative px-5 pb-16 antialiased lg:pb-20">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center lg:items-start">
              <div className="relative z-[1] flex w-full max-w-[576px] flex-col items-center text-left lg:items-start">
                <div className="w-full pb-10 lg:pb-0">
                  <div className="pt-10 pb-6 opacity-50 lg:pt-0">Embedded Finance</div>
                  <h1 className="font-display pb-5 text-2xl leading-[1.1] lg:text-5xl">
                    Embedded Finance Platform for Modern Financial Products
                  </h1>
                  <p className="max-w-lg pb-8 text-sm opacity-70 sm:order-2">
                    Highnote is the unified platform for embedded finance. One system for issuing,
                    acquiring, credit, and real-time ledger reconciliation, built for companies
                    adding embedded payments and financial products to their platforms.
                  </p>
                  <div className="order-2 flex flex-col items-center space-y-5 sm:order-1 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <a className="button button-black-arrow group" href="https://highnote.com/contact">
                      Contact Sales
                      <img
                        alt=""
                        className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                        src={asset("/img/white-arrow-icon.svg")}
                      />
                    </a>
                    <a
                      className="button button-white-arrow group"
                      href="https://dashboard.highnote.com/auth/signin?screen_hint=signup"
                    >
                      Start Testing
                      <img
                        alt=""
                        className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                        src={asset("/img/black-arrow-icon.svg")}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-ash/30 rounded-highnote flex items-center justify-center py-16 lg:h-[700px] lg:overflow-hidden lg:py-8"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0, 0, 0, 0.09) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              <EFHero />
            </div>
          </div>
        </section>

        {/* ===== Section 2: Logo marquee ===== */}
        <section className="flex w-full flex-col pt-10 antialiased">
          <div className="text-xxs pb-3 text-center opacity-60 sm:text-xs">
            Join the companies building what&apos;s next in payments.
          </div>
          <div className="overflow-hidden">
            <div className="flex w-max animate-marquee items-center">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-center"
                  aria-hidden={copy === 1 || undefined}
                >
                  {marqueeLogos.map((name) => (
                    <div
                      key={`${copy}-${name}`}
                      className="flex shrink-0 items-center justify-center px-6 sm:px-10"
                    >
                      <img
                        alt=""
                        loading="eager"
                        className="max-h-10 w-auto sm:max-h-14"
                        src={asset(`/img/logo-${name}.svg`)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 3: What Embedded Finance Actually Requires ===== */}
        <section className="relative overflow-hidden px-5 py-24 antialiased">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-3">
            <h2 className="font-display text-2xl lg:col-span-3 lg:text-5xl">
              What Embedded Finance Actually Requires
            </h2>
            <p className="max-w-sm opacity-70">
              Embedded finance is the integration of financial products (cards, payments, lending,
              accounts) directly into non-financial platforms. A company building embedded finance
              adds financial capabilities as native product features, not as links to external
              services.
            </p>
            <p className="max-w-sm opacity-70">
              What makes it operationally hard is the architecture. Embedded finance products depend
              on issuing, payments, credit, and reconciliation working together as a single system.
              BaaS stacks and stitched vendor approaches separate those layers. Data models diverge.
              Reconciliation becomes manual. Launch velocity slows as each vendor integration
              introduces new seams.
            </p>
            <p className="max-w-sm opacity-70">
              Highnote unified issuing, acquiring, credit, and a real-time ledger on one platform so
              that every embedded finance product runs on one system, one API, and one data model.
            </p>
          </div>
        </section>

        {/* ===== Section 4: What Highnote Gives You ===== */}
        <section className="relative px-5 pt-24 pb-28 antialiased">
          <div className="relative mx-auto max-w-screen-xl">
            <h2 className="font-display pb-16 text-2xl lg:text-5xl">What Highnote Gives You</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
              {/* Unified issuing and acquiring */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-3">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Unified issuing and acquiring
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Issue cards and accept payments on the same platform, governed by the same
                    ledger. Physical, virtual, and tokenized cards with spend controls. Online
                    payments with auth-capture-settlement aligned to your financial model.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden pb-8"
                  aria-hidden="true"
                >
                  <EFIssuingAcquiring />
                </div>
              </div>
              {/* Embedded payments infrastructure */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-3">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Embedded payments infrastructure
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Accept and move money in near real time via major debit network rails. Embedded
                    payments run on the same unified ledger as card issuance, so every transaction
                    posts to one data model from authorization through settlement.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden pb-8"
                  aria-hidden="true"
                >
                  <EFEmbeddedPayments />
                </div>
              </div>
              {/* Credit products on the same platform */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-2">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Credit products on the same platform
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Build BNPL, revolving credit, or charge card products on the same system that
                    runs issuing and acquiring. Dynamic limits, program-level governance, and credit
                    operations unified with the ledger.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden pb-8"
                  aria-hidden="true"
                >
                  <EFCredit />
                </div>
              </div>
              {/* Real-time ledger across all products */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-2">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Real-time ledger across all products
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    A single ledger underpins every Highnote product. Cards, payments, credit: every
                    event posts to one system in real time. Finance has a single source of truth for
                    the entire embedded finance program.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden pb-8"
                  aria-hidden="true"
                >
                  <EFLedger />
                </div>
              </div>
              {/* API-first program management */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-2">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    API-first program management
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Every product lifecycle operation (issue, authorize, capture, refund, suspend,
                    close) is available via API. Build embedded finance products that respond to
                    real-time events without batch jobs or manual reconciliation.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden pb-8"
                  aria-hidden="true"
                >
                  <EFApiLifecycle />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 5: Why Embedded Finance Needs a Unified Platform ===== */}
        <section className="relative px-5 pb-24 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-t pt-24">
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              <h2 className="font-display max-w-screen-lg text-2xl sm:col-span-2 lg:text-5xl">
                Why Embedded Finance Needs a Unified Platform
              </h2>
              <p className="max-w-2xl pb-10 opacity-70 sm:col-span-2">
                We built issuing, acquiring, credit, and a real-time ledger on a single platform so
                that companies building embedded finance products do not have to integrate with,
                reconcile, or maintain multiple vendors to cover the full financial product stack.
              </p>
              <div className="mb-10 sm:col-span-2">
                <EmbeddedFinanceFlow />
              </div>
              <p className="col-span-1 max-w-xl opacity-70">
                Fragmented embedded finance stacks create reconciliation seams, slow iteration
                cycles, and limit what products can do at scale. Separate issuing vendors, acquiring
                processors, and ledger systems each introduce new integration debt.
              </p>
              <p className="col-span-1 max-w-xl opacity-70">
                Highnote&apos;s unified payments platform brings the full embedded finance stack into
                a single system. Every product built on Highnote inherits the same card issuance
                infrastructure, real-time ledger, and data model.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Section 6: How Companies Build Embedded Finance on Highnote ===== */}
        <section className="relative px-5 pb-28 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <h2 className="font-display max-w-screen-lg pb-14 text-2xl lg:text-5xl">
              How Companies Build Embedded Finance on Highnote
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((c) => (
                <div
                  key={c.title}
                  className="rounded-highnote flex aspect-3/2 w-full flex-col justify-between bg-white/80 p-7 lg:aspect-square"
                >
                  <img alt="" width={24} height={24} src={asset(c.icon)} />
                  <div>
                    <h3
                      className="pb-3 text-sm leading-5 font-medium"
                      dangerouslySetInnerHTML={{ __html: c.title }}
                    />
                    <p className="text-xs leading-5 opacity-60">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 7: Go Deeper ===== */}
        <section className="relative px-5 pb-28 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <h2 className="font-display pb-14 text-2xl lg:text-5xl">Go Deeper</h2>
            <div className="mx-auto grid items-start gap-10 sm:grid-cols-3">
              {goDeeper.map((post) => (
                <a key={post.href} className="group space-y-5" href={post.href}>
                  <div className="rounded-highnote overflow-hidden">
                    <Image
                      className="w-full duration-300 group-hover:scale-103"
                      alt={post.alt}
                      width={600}
                      height={400}
                      loading="lazy"
                      src={post.img}
                    />
                  </div>
                  <div>
                    <h4 className="max-w-sm pb-3 text-base leading-6 font-medium">{post.title}</h4>
                    <p className="max-w-sm text-xs leading-5 opacity-60">{post.body}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 8: FAQ ===== */}
        <section className="relative px-5 pb-10 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <div className="grid grid-cols-1 gap-10">
              <div className="font-display max-w-2xl text-3xl sm:text-4xl lg:text-6xl">FAQ</div>
              <Faq />
            </div>
          </div>
        </section>

        {/* ===== Section 9: Contact CTA ===== */}
        <section
          className="relative overflow-hidden px-5 pt-10 pb-40 antialiased"
          data-testid="contact-form-cta"
        >
          <div className="absolute -right-20 -bottom-20 -left-20 z-0">
            <div
              aria-hidden="true"
              className="pointer-events-none relative w-full"
              style={{ height: "280px" }}
            >
              <div
                className="absolute inset-x-0 bottom-0 lg:hidden"
                style={{
                  height: "70%",
                  background:
                    "linear-gradient(to right, rgba(225, 255, 37, 0.45), rgba(85, 245, 163, 0.55), rgba(63, 247, 236, 0.45))",
                  filter: "blur(24px)",
                }}
              />
              <svg
                viewBox="0 0 4509 1029"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 hidden h-full w-full lg:block"
              >
                <defs>
                  <filter
                    id="ambBlur"
                    x="0"
                    y="0"
                    width="4508.86"
                    height="1028.1"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur" />
                  </filter>
                  <linearGradient
                    id="ambGrad"
                    x1="120"
                    y1="546.886"
                    x2="4388.86"
                    y2="546.886"
                    gradientUnits="userSpaceOnUse"
                  >
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
              </svg>
              <div
                className="pointer-events-none absolute inset-x-0 top-0"
                style={{
                  height: "55%",
                  background: "linear-gradient(rgb(245, 243, 235), transparent)",
                }}
              />
            </div>
          </div>
          <div className="relative z-10 mx-auto grid max-w-screen-xl items-start gap-10 pt-16 sm:pt-20 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="font-display max-w-xl pb-5 text-2xl sm:text-3xl lg:text-4xl">
                Embedded Finance Is a Product Category. Highnote Is the Platform.
              </h2>
              <p className="max-w-lg text-sm leading-relaxed opacity-70">
                The companies building the next generation of financial products are choosing unified
                infrastructure over fragmented stacks. One system for issuing, acquiring, credit, and
                reconciliation. Move faster. Differentiate.
              </p>
            </div>
            <div className="rounded-highnote bg-white p-6 md:p-10">
              <form data-testid="form::contact-cta::interest">
                <div className="grid grid-cols-1 gap-3">
                  <fieldset className="col-span-1">
                    <legend className="formLabel cursor-pointer">What are you interested in?</legend>
                    <div className="grid gap-2 py-2">
                      {productInterests.map((label) => (
                        <label
                          key={label}
                          className="flex cursor-pointer items-center gap-2 text-xs"
                        >
                          <div className="relative flex shrink-0 items-center justify-center">
                            <input
                              className="peer border-ash h-5 w-5 cursor-pointer appearance-none rounded border checked:border-black checked:bg-black"
                              type="checkbox"
                              value={label}
                              name="productInterest"
                            />
                            <svg
                              className="pointer-events-none absolute hidden h-3 w-3 peer-checked:block"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          {label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="col-span-1">
                    <label
                      className="formLabel inline-flex cursor-pointer items-center gap-1"
                      htmlFor="cta-processingVolume"
                    >
                      Estimated Monthly Payment or Fund Flow Volume
                      <button
                        type="button"
                        aria-label="More information about volume"
                        className="flex items-center opacity-40 hover:opacity-70"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4M12 8h.01" />
                        </svg>
                      </button>
                    </label>
                    <select
                      className="baseInput p-3 text-xs"
                      data-testid="form::contact-cta::select::processingVolume"
                      id="cta-processingVolume"
                      required
                      name="processingVolume"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      {volumeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label className="formLabel cursor-pointer" htmlFor="cta-programTimeline">
                      When are you planning to launch or migrate?
                    </label>
                    <select
                      className="baseInput p-3 text-xs"
                      data-testid="form::contact-cta::select::programTimeline"
                      id="cta-programTimeline"
                      required
                      name="programTimeline"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    className="button button-black-arrow group h-12 w-full"
                    type="submit"
                  >
                    Continue
                    <img
                      alt=""
                      className="absolute right-4 inline-block translate-x-1 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                      src={asset("/img/white-arrow-icon.svg")}
                    />
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
