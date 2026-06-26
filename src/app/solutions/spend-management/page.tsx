import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import SpendHero from "@/components/solutions/spend-management/SpendHero";
import LogosMarquee from "@/components/solutions/spend-management/LogosMarquee";
import SpendFlow from "@/components/solutions/spend-management/SpendFlow";
import FAQ from "@/components/solutions/spend-management/FAQ";
import ContactCTA from "@/components/solutions/spend-management/ContactCTA";
import {
  CardIssuanceGraphic,
  AuthorizationGraphic,
  SpendLimitsGraphic,
  LedgerGraphic,
  ApiGovernanceGraphic,
} from "@/components/solutions/spend-management/GiveGraphics";

export const metadata: Metadata = {
  title: "Build Modern Expense Management Platforms | Highnote",
};

const useCases = [
  {
    icon: "/img/icon-spend-employees.svg",
    title: "Employee spend card programs",
    body: "SaaS platforms issue branded spend cards with merchant category restrictions and per-employee limits enforced at authorization, reconciled from a unified ledger.",
  },
  {
    icon: "/img/icon-spend-corporate.svg",
    title: "T&E and corporate card programs",
    body: "Issue corporate spend cards with per-trip or per-category controls. Cards are issued, adjusted, and closed via API, with every transaction posting in real time.",
  },
  {
    icon: "/img/icon-spend-controls.svg",
    title: "Departmental and budget-based controls",
    body: "Issue departmental spend cards with per-department limits and vendor category restrictions enforced at the card level. Finance sees every transaction as it happens.",
  },
  {
    icon: "/img/icon-embedded-saas.svg",
    title: "SaaS spend management platforms",
    body: "Vertical SaaS companies add card-based spend governance as a native feature. Highnote provides the issuance layer, spend controls, and unified ledger.",
  },
];

const goDeeper = [
  {
    href: "/blog/why-control-is-the-key-to-scaling-embedded-finance",
    img: "/img/blog_why-control.jpg",
    title: "Why Control Is the Key to Scaling Embedded Finance",
    body: "Spending on governance and policy controls is the foundation of any programmable embedded finance product.",
  },
  {
    href: "/blog/how-cfos-are-reframing-embedded-finance-as-a-financial-discipline",
    img: "/img/blog_cfo-financial-discipline.jpg",
    title: "How CFOs Are Reframing Embedded Finance as a Financial Discipline",
    body: "How finance leaders think about real-time visibility and programmatic spend controls at scale.",
  },
  {
    href: "/blog/unified-payments-platform-what-it-is-why-it-matters-and-how-to-implement-it",
    img: "/img/blog_unified.jpg",
    title:
      "Unified Payments Platform: What It Is, Why It Matters, and How to Implement It",
    body: "The case for building spend infrastructure on a single system rather than assembling it from multiple vendors.",
  },
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
              <div className="relative z-[1] flex w-full flex-col items-center text-left lg:items-start">
                <div className="w-full pb-10 lg:pb-0">
                  <div className="pt-10 pb-6 opacity-50 lg:pt-0">
                    Spend Management
                  </div>
                  <h1 className="font-display pb-5 text-2xl leading-[1.1] lg:text-5xl">
                    Expense Management Infrastructure for Modern Spend Platforms
                  </h1>
                  <p className="pb-8 text-sm opacity-70 sm:order-2">
                    Highnote is the unified platform for embedded finance. We
                    built the expense management platform layer for companies
                    building spend management products: governed card issuance,
                    programmable spend controls, and unified ledger
                    reconciliation in a single system.
                  </p>
                  <div className="order-2 flex flex-col items-center space-y-5 sm:order-1 sm:flex-row sm:space-y-0 sm:space-x-2">
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
              className="bg-ash/30 rounded-highnote flex items-center justify-center py-8 lg:h-[700px] lg:overflow-hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0, 0, 0, 0.09) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              <SpendHero />
            </div>
          </div>
        </section>

        {/* SECTION 2 — Logos marquee */}
        <LogosMarquee />

        {/* SECTION 3 — What Expense Management Infrastructure Actually Requires */}
        <section className="relative overflow-hidden px-5 py-24 antialiased">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-3">
            <h2 className="font-display text-2xl lg:col-span-3 lg:text-5xl">
              What Expense Management Infrastructure Actually&nbsp;Requires
            </h2>
            <p className="opacity-70">
              Expense management software is what employees use. The
              infrastructure underneath it is what companies build. Building a
              spend management product takes more than an approval&nbsp;workflow.
            </p>
            <p className="opacity-70">
              Companies need a card issuance layer, a policy enforcement layer,
              and a reconciliation layer that operate together as one
              programmable system. Most spend platforms stitch those layers
              together from separate vendors, leaving controls that enforce after
              the fact and ledgers that run days behind card&nbsp;activity.
            </p>
            <p className="opacity-70">
              Highnote built the expense management platform so that card
              issuance, spend governance, and ledger reconciliation run on one
              unified system from day&nbsp;one.
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
              {/* Governed card issuance */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-3">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Governed card issuance
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Issue physical, virtual, or tokenized spend cards to
                    employees, departments, or cost centers via API. Each card
                    carries its own spend limits, merchant category restrictions,
                    and velocity rules, managed programmatically without manual
                    card replacements.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <CardIssuanceGraphic />
                </div>
              </div>

              {/* Authorization-layer spend controls */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-3">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Authorization-layer spend controls
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Enforce the spending policy at the time of authorization,
                    before funds are released. Set merchant category
                    restrictions, per-card limits, and velocity rules at the card
                    or program level. Transactions outside approved parameters
                    decline automatically.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <AuthorizationGraphic />
                </div>
              </div>

              {/* Programmable spend limits */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-2">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Programmable spend limits
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Adjust limits per card, per employee, or per department in
                    real time via API. Daily, weekly, or per-transaction caps
                    update without reissuing cards or manual overrides.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <SpendLimitsGraphic />
                </div>
              </div>

              {/* Unified ledger reconciliation */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-2">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    Unified ledger reconciliation
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Every spend transaction posts to a single, real-time ledger
                    the moment it clears. Finance teams get transaction-level
                    visibility into every card in the program from a single
                    system.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <LedgerGraphic />
                </div>
              </div>

              {/* API-first spend governance */}
              <div className="rounded-highnote flex flex-col overflow-hidden bg-white lg:col-span-2">
                <div className="p-8 pb-6">
                  <h3 className="pb-3 text-base leading-6 font-medium">
                    API-first spend governance
                  </h3>
                  <p className="max-w-lg text-xs leading-5 opacity-70">
                    Issue, adjust, suspend, or close cards programmatically. Your
                    spend management product controls the card program via API.
                    Highnote handles issuance, authorization, and ledger.
                  </p>
                </div>
                <div
                  className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                  aria-hidden="true"
                >
                  <ApiGovernanceGraphic />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Why Spend Management Products Need Dedicated Issuance Infrastructure */}
        <section className="relative px-5 pb-24 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-t pt-24">
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              <h2 className="font-display max-w-screen-xl text-2xl sm:col-span-2 lg:text-5xl">
                Why Spend Management Products Need Dedicated Issuance
                Infrastructure
              </h2>
              <p className="max-w-2xl pb-10 opacity-70">
                Legacy expense management stacks separate card issuance, spend
                policy, and ledger reporting. Controls operate apart from card
                authorization, and finance reconciles from delayed exports
                instead of a live ledger. We built a unified platform (issuing,
                acquiring, credit, and a real-time ledger) so every spend
                transaction runs on a programmable system with built-in policy
                enforcement and ledger visibility from the start.
              </p>
              <div className="mb-10 sm:col-span-2">
                <SpendFlow />
              </div>
              <p className="col-span-1 max-w-xl opacity-70">
                Highnote&apos;s card issuance infrastructure puts spend
                governance inside the card program itself. Controls are not
                applied after the fact.
              </p>
              <p className="col-span-1 max-w-xl opacity-70">
                Every authorization is a policy decision, and every transaction
                posts as a real-time ledger event on the unified payments
                platform, so finance reconciles from one system across the entire
                spend program.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — How Companies Build Spend Management Products on Highnote */}
        <section className="relative px-5 pb-28 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <h2 className="font-display max-w-screen-lg pb-14 text-2xl lg:text-5xl">
              How Companies Build Spend Management Products on Highnote
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="rounded-highnote flex aspect-3/2 w-full flex-col justify-between bg-white/80 p-7 lg:aspect-square"
                >
                  <Image alt="" width={24} height={24} src={uc.icon} />
                  <div>
                    <h3 className="pb-3 text-sm leading-5 font-medium">
                      {uc.title}
                    </h3>
                    <p className="text-xs leading-5 opacity-60">{uc.body}</p>
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
              {goDeeper.map((post) => (
                <a key={post.href} className="group space-y-5" href={post.href}>
                  <div className="rounded-highnote overflow-hidden">
                    <Image
                      className="w-full duration-300 group-hover:scale-103"
                      alt={post.title}
                      width={600}
                      height={400}
                      loading="lazy"
                      src={post.img}
                    />
                  </div>
                  <div>
                    <h4 className="max-w-sm pb-3 text-base leading-6 font-medium">
                      {post.title}
                    </h4>
                    <p className="max-w-sm text-xs leading-5 opacity-60">
                      {post.body}
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
              <FAQ />
            </div>
          </div>
        </section>

        {/* SECTION 9 — Contact form CTA */}
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
