import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { asset } from "@/lib/asset";
import {
  UnifiedPlatformOrbit,
  LedgerGraphic,
  ControlGraphic,
  TransactionDetailsGraphic,
  StackedFlowGraphic,
} from "@/components/products/unified-payments/graphics";

export const metadata: Metadata = {
  title: "Unified Payment Platform (Consolidate & Lower Costs)",
};

const marqueeLogos = [
  "casspay", "triplink", "fluz", "ferry", "lowes", "bny", "pingpong",
  "samsung", "atob", "coinflow", "spoton", "givecard", "mudflap",
  "splitit", "netevia", "fillip",
];

const ownershipFeatures = [
  {
    icon: "/img/icon-boost.svg",
    title: "Boost Payment Success",
    body: "Increase authorization rates and reduce declines on your payments.",
  },
  {
    icon: "/img/icon-fraud.svg",
    title: "Reduce Fraud and Credit Risks",
    body: "Limit your exposure to fraudulent activity by keeping all of your payment data on Highnote.",
  },
  {
    icon: "/img/icon-brand2.svg",
    title: "Unify Your Brand Experience",
    body: "Have better visibility into all your brand touchpoints, from card to checkout.",
  },
  {
    icon: "/img/icon-pricing.svg",
    title: "Receive Optimized Pricing",
    body: "Less money movement between external systems means fewer fees and lower costs per transaction.",
  },
];

const benefitCards = [
  {
    title: "Co-Branded Payments",
    body: "Accept payments with your branded card to keep all money movement within your accounts and gain real-time access to funds.",
  },
  {
    title: "AP/AR Closed Loop",
    body: "Own the entire flow of Accounts Payable and Receivables to allow insanely fast funds movement.",
  },
  {
    title: "Corporate Disbursements",
    body: "Disburse money throughout your company faster by leveraging the Highnote platform and accessing your funds in real-time.",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-bone">
        {/* ===== Section 1: Hero ===== */}
        <section className="relative px-5 py-16 antialiased lg:pb-24">
          <div className="border-ash relative mx-auto grid max-w-screen-xl justify-between gap-5 border-b pb-16 sm:grid-cols-2 lg:pb-24">
            <div className="col-span-1">
              <div className="font-display max-w-lg pb-5 text-3xl sm:text-4xl lg:text-6xl">
                Unify Your Payments Stack and Save
              </div>
              <p className="max-w-lg pb-12 text-base leading-7 opacity-70">
                With Highnote, you get an all-in-one platform that consolidates
                your payments stack and saves you time and money at every step.
              </p>
              <div className="text-xxs grid max-w-lg grid-cols-2 gap-8 sm:text-xs">
                <div className="col-span-1">
                  <div className="font-display mb-3 flex text-xl sm:text-2xl">~100bps</div>
                  <h4 className="mb-2.5 font-medium">Significant Cost Savings</h4>
                  <p className="leading-5 opacity-70 sm:leading-6">
                    Efficiencies in interchange and processing fees lower your
                    costs from traditional processors.
                  </p>
                </div>
                <div className="col-span-1">
                  <div className="font-display mb-3 flex text-xl sm:text-2xl">Same Day</div>
                  <h4 className="mb-2.5 font-medium">Immediate Access to Capital</h4>
                  <p className="leading-5 opacity-70 sm:leading-6">
                    No more waiting days to use your funds - receive them within
                    minutes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 self-center pt-10 md:pt-0">
              <UnifiedPlatformOrbit />
            </div>
          </div>
        </section>

        {/* ===== Section 2: Get Full Ownership of Your Payments ===== */}
        <section className="relative px-5 pb-16 antialiased lg:pb-24">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-b pb-16 lg:pb-20">
            <div className="mx-auto grid items-end gap-10 pb-20 sm:grid-cols-2">
              <div className="font-display -mt-1 text-3xl sm:text-4xl lg:text-6xl">
                Get Full Ownership of Your Payments
              </div>
              <p className="max-w-lg justify-self-end text-base opacity-70">
                Highnote cuts your payment processing time from days to minutes
                with faster access to funds, increased control over payment
                acceptance, and opportunities for product innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Unified Ledgers (full width) */}
              <div className="rounded-highnote flex flex-col bg-white sm:col-span-2">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">Unified Ledgers</h3>
                  <p className="text-xs leading-6 opacity-70 sm:text-sm">
                    Our API driven ledger provides full visibility into all funds
                    movements across your product with detailed tracking of all
                    activity.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pb-10">
                    <LedgerGraphic />
                  </div>
                </div>
              </div>
              {/* Take Full Control */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">Take Full Control</h3>
                  <p className="text-xs leading-6 opacity-70 sm:text-sm">
                    A payments platform that fits your needs. Set spending limits,
                    offer rewards, collaborate on approvals, and more.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pb-10">
                    <ControlGraphic />
                  </div>
                </div>
              </div>
              {/* Rich Transaction Detail */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">Rich Transaction Detail</h3>
                  <p className="text-xs leading-6 opacity-70 sm:text-sm">
                    Detailed transaction payloads empower you to write advanced
                    logic around authorization approvals.
                  </p>
                </div>
                <TransactionDetailsGraphic />
              </div>
            </div>
            <div className="text-xxs grid grid-cols-2 gap-5 pt-20 sm:text-xs md:gap-10 lg:grid-cols-4">
              {ownershipFeatures.map((f) => (
                <div key={f.title} className="col-span-1">
                  <div className="flex flex-col items-start">
                    <div className="bg-ash mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                      <img alt="" src={asset(f.icon)} />
                    </div>
                    <h4 className="mb-2.5 font-medium">{f.title}</h4>
                    <p className="leading-5 opacity-70 sm:leading-6">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 3: Unlock Big Benefits for Your Business ===== */}
        <section className="relative px-5 pb-16 antialiased lg:pb-24">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-b pb-16 lg:pb-24">
            <div className="mx-auto grid items-end gap-10 pb-20 sm:grid-cols-2">
              <div className="font-display -mt-1 text-3xl sm:text-4xl lg:text-6xl">
                Unlock Big Benefits for Your Business
              </div>
              <p className="max-w-lg justify-self-end text-base opacity-70">
                Payments that move as fast as you do. With all of your payments on
                Highnote, funds can move instantly to every part of your business,
                enabling better experiences for you and your customers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {benefitCards.map((card) => (
                <div key={card.title} className="rounded-highnote col-span-1 flex flex-col bg-white">
                  <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                    <h3 className="pb-2.5 text-sm font-medium sm:text-base">{card.title}</h3>
                    <p className="text-xs leading-6 opacity-70 sm:text-sm">{card.body}</p>
                  </div>
                  <div className="relative flex h-full flex-col justify-center overflow-hidden">
                    <StackedFlowGraphic />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 4: Tagline ===== */}
        <section className="relative px-5 pb-10 antialiased">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="mx-auto max-w-sm text-center text-sm sm:text-base">
              Powering modern payment solutions.
              <br />
              <span className="font-medium">
                From visionary startups to industry leaders.
              </span>
            </div>
          </div>
        </section>

        {/* ===== Section 5: Logo marquee ===== */}
        <section className="bg-bone flex w-full flex-col py-5 antialiased">
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
                        className="max-h-12 w-auto sm:max-h-16"
                        src={asset(`/img/logo-${name}.svg`)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 6: Testimonials ===== */}
        <section className="relative px-5 py-10 antialiased">
          <div className="relative mx-auto grid max-w-screen-xl justify-between gap-10 md:grid-cols-2">
            <div className="border-ash col-span-1 flex flex-col justify-between border-l pl-5">
              <div className="max-w-xs pt-3 pb-12 text-sm sm:max-w-lg sm:text-base">
                &quot;Every single person we worked with was just a total rock
                star. In fact, without being asked, the head of our engineering
                team told me that the Highnote API was the best he had seen from
                every single vendor we dealt with.&quot;
              </div>
              <div>
                <div className="mb-2 flex items-center space-x-3">
                  <img
                    alt=""
                    className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
                    src={asset("/img/photo-maurice.jpg")}
                  />
                  <div className="max-w-lg text-xs opacity-70 sm:text-sm">
                    Maurice Harary
                    <br />
                    CEO
                  </div>
                </div>
                <img
                  alt=""
                  className="-ml-10 h-12 sm:-ml-12 sm:h-16"
                  src={asset("/img/logo-fluz.svg")}
                />
              </div>
            </div>
            <div className="border-ash col-span-1 flex flex-col justify-between border-l pl-5">
              <div className="max-w-xs pt-3 pb-12 text-sm sm:max-w-lg sm:text-base">
                &quot;Highnote&apos;s infrastructure for money movement across
                financial accounts made it a perfect fit for this stage of our
                growth. We&apos;ve been amazed by the flexibility with which
                Highnote operates.&quot;
              </div>
              <div>
                <div className="mb-2 flex items-center space-x-3">
                  <img
                    alt=""
                    className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
                    src={asset("/img/photo-trista.jpg")}
                  />
                  <div className="max-w-lg text-xs opacity-70 sm:text-sm">
                    Trista Kempa
                    <br />
                    COO
                  </div>
                </div>
                <img
                  alt=""
                  className="-ml-6 h-12 sm:-ml-9 sm:h-16"
                  src={asset("/img/logo-ferry.svg")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 7: Get Started CTA ===== */}
        <section className="relative px-5 py-10 antialiased">
          <div className="rounded-highnote from-yellow/80 via-green to-blue/70 relative mx-auto grid max-w-screen-xl items-end justify-between gap-10 bg-gradient-to-r px-8 py-24 sm:px-12 md:grid-cols-2">
            <h2 className="font-display text-center text-3xl sm:max-w-md sm:text-left sm:text-6xl">
              Get Started with Highnote
            </h2>
            <div className="mt-2 flex flex-col items-center space-y-5 sm:flex-row sm:justify-end sm:space-y-0 sm:space-x-2">
              <a
                className="button button-black-arrow group"
                href="https://dashboard.highnote.com/auth/signin?screen_hint=signup"
              >
                Start Testing
                <img
                  alt=""
                  className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                  src={asset("/img/white-arrow-icon.svg")}
                />
              </a>
              <a
                className="button button-white-arrow group"
                href="https://highnote.com/contact"
              >
                Contact Sales
                <img
                  alt=""
                  className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                  src={asset("/img/black-arrow-icon.svg")}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
