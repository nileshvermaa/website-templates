import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import Faq from "@/components/solutions/agentic-commerce/Faq";
import {
  SpendControlsGraphic,
  VirtualCardGraphic,
  LedgerGraphic,
  LifecycleGraphic,
  GovernanceGraphic,
  FlowGraphic,
} from "@/components/solutions/agentic-commerce/AgenticGraphics";

export const metadata: Metadata = {
  title: "Agentic Commerce – Highnote",
};

const GIVES = [
  {
    title: "Programmable spend controls",
    body: "Set velocity limits, merchant category restrictions, and per-transaction caps at the card, account, or program level. Every rule is evaluated at authorization, before funds move.",
    graphic: <SpendControlsGraphic />,
  },
  {
    title: "Virtual card issuance on demand",
    body: "Issue cards per agent, workflow, or vendor via API. Each card closes automatically when the workflow ends. No manual provisioning.",
    graphic: <VirtualCardGraphic />,
  },
  {
    title: "Event-level ledger visibility",
    body: "Every agentic transaction posts to a unified ledger the moment it occurs. Finance sees every dollar at the transaction level, not in an end-of-day batch.",
    graphic: <LedgerGraphic />,
  },
  {
    title: "Full auth-capture-settlement control",
    body: "Authorize funds before an agent commits, capture only what is needed, and refund programmatically. The full payment lifecycle is available via API.",
    graphic: <LifecycleGraphic />,
  },
  {
    title: "Program-level governance",
    body: "Set rules once at the program level and they apply uniformly across every card. One policy layer, enforced at scale.",
    graphic: <GovernanceGraphic />,
  },
];

const USE_CASES = [
  {
    icon: "/img/icon-ap-automation.svg",
    title: "AI-driven AP automation",
    body: "AI agents process invoices, match POs, and initiate supplier payments without manual approval. Each workflow gets a virtual card with per-supplier limits and category controls. The card is the governance layer.",
  },
  {
    icon: "/img/icon-procurement.svg",
    title: "Procurement workflow automation",
    body: "Agentic systems execute approved purchase orders against pre-approved vendor lists. Each PO gets a spend-limited, vendor-scoped virtual card, closed when the order is fulfilled.",
  },
  {
    icon: "/img/icon-billpay.svg",
    title: "Bill pay and subscription management",
    body: "AI manages recurring payments across utilities, SaaS, and service contracts. Dedicated per-vendor virtual cards with velocity rules enforce budget policy at the transaction level.",
  },
  {
    icon: "/img/icon-disbursements.svg",
    title: "B2B supplier disbursements",
    body: "Issue controlled payment instruments for supplier disbursements across multi-vendor networks. Every payment posts to the unified ledger in real time. One reconciliation record, all vendors.",
  },
];

const POSTS = [
  {
    href: "https://highnote.com/blog/highnote-collaborates-with-visa-on-agentic-commerce-for-ai-initiated-payments",
    img: "/img/blog_visa-agentic.png",
    title:
      "Highnote Collaborates with Visa on Agentic Commerce for AI-Initiated Payments",
    body: "How Highnote and Visa are building infrastructure for AI-initiated invoice, vendor, and procurement payments.",
  },
  {
    href: "https://highnote.com/blog/what-is-ap-automation-and-how-it-transforms-accounts-payable",
    img: "/img/blog_ap-automation.jpg",
    title: "What Is AP Automation and How It Transforms Accounts Payable",
    body: "The operational case for running AP on programmable payment infrastructure.",
  },
  {
    href: "https://highnote.com/blog/unified-payments-platform-what-it-is-why-it-matters-and-how-to-implement-it",
    img: "/img/blog_unified.jpg",
    title:
      "Unified Payments Platform: What It Is, Why It Matters, and How to Implement It",
    body: "The case for building on a single system instead of stitching together vendors.",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-bone">
        {/* HERO */}
        <section className="relative px-5 pt-16 pb-16 antialiased lg:pb-20">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center lg:items-start">
              <div className="relative z-[1] flex w-full max-w-[468px] flex-col items-center text-left lg:h-full lg:max-w-[576px] lg:items-start lg:justify-center">
                <div className="w-full pb-10 lg:pb-0">
                  <div className="pt-10 pb-6 opacity-50 lg:pt-0">
                    Agentic Commerce
                  </div>
                  <h1 className="font-display pb-5 text-2xl leading-[1.1] lg:text-5xl">
                    Agentic Payments Infrastructure for AI-Initiated
                    Transactions
                  </h1>
                  <p className="max-w-lg pb-8 text-sm opacity-70">
                    AI agents are already initiating transactions. Highnote
                    provides the infrastructure to govern every payment
                    (programmable controls, virtual card issuance, and unified
                    ledger visibility) on a single embedded finance platform.
                  </p>
                  <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <a
                      className="button button-green-arrow group"
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
                      className="button button-ash-arrow group"
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
              className="bg-ash/30 rounded-highnote flex items-start justify-center py-16 lg:h-[700px] lg:overflow-hidden lg:py-8"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0, 0, 0, 0.09) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              <div className="w-full max-w-[420px] space-y-3 px-4">
                <VirtualCardGraphic />
                <SpendControlsGraphic />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT AGENTIC PAYMENTS ACTUALLY REQUIRE */}
        <section className="relative px-5 pb-16 antialiased lg:pb-24">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="font-display max-w-3xl pb-10 text-3xl sm:text-4xl lg:text-5xl">
              What Agentic Payments Actually Require
            </div>
            <div className="grid max-w-4xl gap-6 text-sm leading-7 opacity-80 sm:text-base">
              <p>
                Agentic payments are transactions initiated by software: AI
                agents and automated systems that act without a human approving
                each step. Today, the most mature deployments are in finance
                operations: accounts payable, supplier payments, bill pay, and
                procurement workflows, where AI automates what humans used to do
                manually.
              </p>
              <p>
                Legacy payment infrastructure was not built for machine-initiated
                transactions. When an AI agent initiates a payment, three
                operational problems emerge: the spend policy cannot be enforced
                at authorization, finance loses transaction-level visibility, and
                agents can exceed budget boundaries before a reconciliation cycle
                catches the error.
              </p>
              <p>
                Highnote is the unified platform for embedded finance. We built
                it so that every agentic payment runs on programmable
                infrastructure, with controls, ledger visibility, and governance
                embedded at the transaction level. Not added afterward.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT HIGHNOTE GIVES YOU */}
        <section className="relative px-5 pb-16 antialiased lg:pb-24">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="font-display max-w-3xl pb-10 text-3xl sm:text-4xl lg:text-5xl">
              What Highnote Gives You
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {GIVES.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-highnote flex flex-col bg-white p-5 sm:p-8 lg:flex-row lg:items-center lg:gap-8 ${
                    i === GIVES.length - 1 && GIVES.length % 2 === 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <div className="max-w-md pb-6 lg:pb-0">
                    <h3 className="pb-2.5 text-base font-medium sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 opacity-70">{item.body}</p>
                  </div>
                  <div className="w-full lg:max-w-sm">{item.graphic}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY AGENTIC COMMERCE NEEDS PROGRAMMABLE PAYMENTS INFRASTRUCTURE */}
        <section className="relative px-5 pb-16 antialiased lg:pb-24">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="font-display max-w-3xl pb-6 text-3xl sm:text-4xl lg:text-5xl">
              Why Agentic Commerce Needs Programmable Payments Infrastructure
            </div>
            <p className="max-w-3xl pb-10 text-sm leading-7 opacity-80 sm:text-base">
              We built a unified platform (issuing, acquiring, credit, and a
              real-time ledger) so that every agentic payment runs on one system
              from authorization through settlement. No stitched vendors. No gaps
              between your payment provider and your books.
            </p>
            <div className="pb-10">
              <FlowGraphic />
            </div>
            <div className="grid max-w-4xl gap-6 text-sm leading-7 opacity-80 sm:text-base">
              <p>
                Most legacy payment stacks were not designed for this level of
                programmability and control. Controls are bolted onto
                infrastructure built for human cardholders. The governance layer
                is shallow. The ledger is a downstream afterthought.
              </p>
              <p>
                Highnote is programmable from the API up. Controls are built into
                the card program itself. Every AI-initiated transaction hits a
                policy check at authorization, posts to the unified ledger in
                real time, and settles against the same data model finance uses
                for reconciliation.
              </p>
            </div>
          </div>
        </section>

        {/* HOW FINANCE AND OPS TEAMS USE AGENTIC PAYMENTS TODAY */}
        <section className="relative px-5 pb-16 antialiased lg:pb-28">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="font-display max-w-3xl pb-10 text-3xl sm:text-4xl lg:text-5xl">
              How Finance and Ops Teams Use Agentic Payments Today
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {USE_CASES.map((u) => (
                <div
                  key={u.title}
                  className="rounded-highnote flex flex-col bg-white p-5 sm:p-8"
                >
                  <div className="bg-ash mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src={u.icon} />
                  </div>
                  <h3 className="pb-2.5 text-base font-medium sm:text-lg">
                    {u.title}
                  </h3>
                  <p className="max-w-lg text-sm leading-6 opacity-70">
                    {u.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GO DEEPER */}
        <section className="relative px-5 pb-16 antialiased lg:pb-28">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="font-display max-w-3xl pb-10 text-3xl sm:text-4xl lg:text-5xl">
              Go Deeper
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {POSTS.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="rounded-highnote group flex flex-col overflow-hidden bg-white"
                >
                  <div className="overflow-hidden">
                    <Image
                      alt=""
                      width={480}
                      height={300}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      src={p.img}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="pb-2.5 text-base font-medium">{p.title}</h3>
                    <p className="text-sm leading-6 opacity-70">{p.body}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative px-5 pt-10 pb-10 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-t pt-24">
            <div className="mx-auto grid pb-20">
              <div className="font-display max-w-2xl pb-10 text-3xl sm:text-4xl lg:text-6xl">
                FAQ
              </div>
              <Faq />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-5 py-10 antialiased">
          <div className="rounded-highnote from-yellow/80 via-green to-blue/70 relative mx-auto grid max-w-screen-xl items-end justify-between gap-10 bg-gradient-to-r px-8 py-24 sm:px-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-center text-3xl sm:max-w-xl sm:text-left sm:text-5xl">
                The Infrastructure Already Exists
              </h2>
              <p className="pt-6 text-center text-sm opacity-80 sm:text-left">
                AI agents are already processing invoices, initiating supplier
                payments, and executing procurement workflows. The infrastructure
                that governs them — programmable controls, virtual card issuance,
                unified ledger — is available today on Highnote.
              </p>
            </div>
            <div className="mt-2 flex flex-col items-center space-y-5 sm:flex-row sm:justify-end sm:space-y-0 sm:space-x-2">
              <a
                className="button button-black-arrow group"
                href="https://highnote.com/contact"
              >
                Contact Sales
                <Image
                  alt=""
                  width={16}
                  height={16}
                  className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                  src="/img/white-arrow-icon.svg"
                />
              </a>
              <a
                className="button button-white-arrow group"
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
        </section>
      </main>
      <Footer />
    </>
  );
}
