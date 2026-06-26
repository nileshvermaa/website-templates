import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import LogosMarquee from "@/components/products/issuing/LogosMarquee";
import FleetHero from "@/components/solutions/fleet/FleetHero";
import FleetFaq from "@/components/solutions/fleet/FleetFaq";
import {
  CardIssuanceGraphic,
  CategoryControlsGraphic,
  SpendLimitsGraphic,
  AuthorizationGraphic,
  LedgerGraphic,
} from "@/components/solutions/fleet/FeatureGraphics";

export const metadata: Metadata = {
  title: "Fleet Card Programs: Build and Govern on One Platform | Highnote",
};

const features = [
  {
    span: "lg:col-span-3",
    title: "Open-loop card issuance",
    body: "Issue cards accepted on major card networks, not limited to a closed fuel network. Physical, virtual, and tokenized fleet cards on one program, managed through a single API.",
    graphic: <CardIssuanceGraphic />,
  },
  {
    span: "lg:col-span-3",
    title: "Merchant category controls",
    body: "Restrict card usage to approved categories like fuel, maintenance, tolls, and parking at the authorization level. Transactions outside approved categories are declined before funds move.",
    graphic: <CategoryControlsGraphic />,
  },
  {
    span: "lg:col-span-2",
    title: "Per-card spend limits and velocity rules",
    body: "Set daily, weekly, or per-transaction caps per card. Control how much each driver or vehicle spends without manual oversight of every transaction.",
    graphic: <SpendLimitsGraphic />,
  },
  {
    span: "lg:col-span-2",
    title: "Real-time authorization decisions",
    body: "Every fleet transaction evaluates against your spend rules at the moment of purchase. Policy is enforced in real time, not in a post-facto review.",
    graphic: <AuthorizationGraphic />,
  },
  {
    span: "lg:col-span-2",
    title: "Unified ledger reconciliation",
    body: "Every fleet card transaction posts to a single, real-time ledger. Fleet managers and finance teams get transaction-level visibility from one system.",
    graphic: <LedgerGraphic />,
  },
];

const flowInnerTiles = [
  { title: "Card Issued", body: "Cards are issued via API to drivers, vehicles, or cost centers" },
  { title: "Point of Sale", body: "Driver uses the card at the pump or merchant" },
  { title: "Authorization", body: "Evaluates against spend rules in real time" },
  { title: "Ledger", body: "Transaction posts to the unified ledger immediately" },
  { title: "Reconciliation", body: "Fleet manager and finance reconcile from one system" },
];

const builders = [
  {
    icon: "/img/icon-fleet-fuel.svg",
    title: "Fuel and fleet management platforms",
    body: "Issue branded commercial fleet cards to your customers' drivers on an open-loop layer with built-in spend controls.",
  },
  {
    icon: "/img/icon-fleet-truck.svg",
    title: "Logistics and transportation operators",
    body: "Issue cards with category restrictions and per-trip limits, giving dispatch and finance real-time visibility across the fleet.",
  },
  {
    icon: "/img/icon-fleet-hat.svg",
    title: "Field service and construction companies",
    body: "Issue spend-controlled cards to field crews, with limits that adjust per job or per vehicle via API.",
  },
  {
    icon: "/img/icon-fleet-saas.svg",
    title: "Vertical SaaS platforms adding fleet spend",
    body: "Add fleet card management as a native feature, powered by Highnote's issuance infrastructure and unified ledger.",
  },
];

const goDeeper = [
  {
    href: "/blog/fleet-card-programs-are-payment-systems-not-perks",
    img: "/img/blog_fleet-payment-systems.jpg",
    title: "Fleet Card Programs Are Payment Systems, Not Perks",
    body: "Why fleet card programs need programmable payment infrastructure, not fuel loyalty networks.",
  },
  {
    href: "/blog/fleet-card-program-mistakes-that-cost-time-money-and-control",
    img: "/img/blog_fleet-mistakes.jpg",
    title: "Fleet Card Program Mistakes That Cost Time, Money, and Control",
    body: "The infrastructure decisions that determine whether your fleet card program scales or stalls.",
  },
  {
    href: "/blog/complete-guide-to-fleet-management-cards-for-modern-fleets",
    img: "/img/blog_fleet-guide.jpg",
    title: "Complete Guide to Fleet Management Cards for Modern Fleets",
    body: "A full breakdown of how fleet card programs work and what modern programs require.",
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
        {/* HERO */}
        <section className="relative px-5 pb-16 antialiased lg:pb-20">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center lg:items-start">
              <div className="relative z-[1] flex w-full max-w-[576px] flex-col items-center text-left lg:items-start">
                <div className="w-full pb-10 lg:pb-0">
                  <div className="pt-10 pb-6 opacity-50 lg:pt-0">Fleet</div>
                  <h1 className="font-display pb-5 text-2xl leading-[1.1] lg:text-5xl">
                    Build and Govern Fleet Card Programs on One Platform
                  </h1>
                  <p className="max-w-lg pb-8 text-sm opacity-70 sm:order-2">
                    Highnote is the card issuance infrastructure for companies
                    building commercial fleet card programs, with open-loop
                    acceptance, spend controls, and real-time ledger
                    reconciliation, without stitching together multiple vendors.
                  </p>
                  <div className="order-2 flex flex-col items-center space-y-5 sm:order-1 sm:flex-row sm:space-y-0 sm:space-x-2">
                    <a className="button button-green-arrow group" href="https://highnote.com/contact">
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
            <FleetHero />
          </div>
        </section>

        {/* LOGOS MARQUEE */}
        <section className="flex w-full flex-col pt-10 antialiased">
          <div className="text-xxs pb-3 text-center opacity-60 sm:text-xs">
            Join the companies building what&apos;s next in payments.
          </div>
          <LogosMarquee />
        </section>

        {/* WHAT A FLEET CARD PROGRAM REQUIRES */}
        <section className="relative overflow-hidden px-5 py-24 antialiased">
          <div className="relative mx-auto grid max-w-screen-xl grid-cols-1 justify-between gap-10 lg:grid-cols-3">
            <h2 className="font-display text-2xl lg:col-span-3 lg:text-5xl">
              What a Fleet Card Program Actually Requires
            </h2>
            <p className="max-w-sm opacity-70">
              A fleet card program is not a product you buy. It is the
              infrastructure you build. Companies issuing cards to drivers,
              vehicles, or field operators need open-loop acceptance,
              authorization-layer spend controls, and per-card limits.
            </p>
            <p className="max-w-sm opacity-70">
              Closed-loop networks like WEX, Shell, and Fuelman solve a
              different problem. They offer fuel discounts on proprietary
              networks. They do not give you a programmable card that you own and
              control.
            </p>
            <p className="max-w-sm opacity-70">
              Highnote is the unified platform for embedded finance. We built it
              so fleet card programs run on open-loop issuance infrastructure
              with spend governance, merchant category controls, and unified
              ledger reconciliation built in from day one.
            </p>
          </div>
        </section>

        {/* WHAT HIGHNOTE GIVES — feature grid */}
        <section className="relative px-5 pt-24 pb-28 antialiased">
          <div className="relative mx-auto max-w-screen-xl">
            <h2 className="font-display pb-16 text-2xl lg:text-5xl">
              What Highnote Gives Fleet Card Programs
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className={`rounded-highnote flex flex-col overflow-hidden bg-white ${f.span}`}
                >
                  <div className="p-8 pb-6">
                    <h3 className="pb-3 text-base leading-6 font-medium">{f.title}</h3>
                    <p className="max-w-lg text-xs leading-5 opacity-70">{f.body}</p>
                  </div>
                  <div
                    className="relative flex min-h-[260px] flex-1 items-center justify-center pb-8"
                    aria-hidden="true"
                  >
                    {f.graphic}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY FLEET PROGRAMS NEED DEDICATED INFRASTRUCTURE */}
        <section className="relative px-5 pb-24 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-t pt-24">
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              <h2 className="font-display max-w-screen-lg text-2xl sm:col-span-2 lg:text-5xl">
                Why Fleet Card Programs Need Dedicated Issuance Infrastructure
              </h2>
              <p className="max-w-2xl pb-10 opacity-70">
                Closed-loop fleet networks were built into proprietary systems to
                offer fuel discounts. They were not built to be programmable. When
                companies build fleet card management on closed networks or legacy
                bank infrastructure, they hit the same walls: limited merchant
                controls, no real-time spend visibility, and reconciliation that
                runs days behind actual card activity.
              </p>
              <div className="mb-10 sm:col-span-2">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                  <div className="rounded-highnote shrink-0 bg-white p-6 lg:max-w-[220px]">
                    <h4 className="pb-2 text-sm font-medium">Company</h4>
                    <p className="text-xs leading-5 opacity-60">
                      Defines spend rules: approved categories, per-card limits,
                      and velocity controls
                    </p>
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
                  <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {flowInnerTiles.map((tile) => (
                      <div key={tile.title} className="rounded-highnote bg-ash/50 p-4">
                        <h4 className="pb-2 text-sm font-medium">{tile.title}</h4>
                        <p className="text-xs leading-5 opacity-60">{tile.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="col-span-1 max-w-xl opacity-70">
                Highnote&apos;s card issuance infrastructure puts the spend
                governance layer inside the card program itself. Controls are not
                applied after the fact.
              </p>
              <p className="col-span-1 max-w-xl opacity-70">
                Every authorization is a policy decision, and every transaction
                posts as a ledger event on the unified payments platform, so fleet
                managers and finance reconcile from one system.
              </p>
            </div>
          </div>
        </section>

        {/* HOW COMPANIES BUILD — builders grid */}
        <section className="relative px-5 pb-28 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <h2 className="font-display max-w-screen-md pb-14 text-2xl lg:text-5xl">
              How Companies Build Fleet Card Programs on Highnote
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {builders.map((b) => (
                <div
                  key={b.title}
                  className="rounded-highnote flex aspect-3/2 w-full flex-col justify-between bg-white/80 p-7 lg:aspect-square"
                >
                  <Image alt="" width={24} height={24} src={b.icon} />
                  <div>
                    <h3 className="pb-3 text-sm leading-5 font-medium">{b.title}</h3>
                    <p className="text-xs leading-5 opacity-60">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GO DEEPER — blog cards */}
        <section className="relative px-5 pb-28 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <h2 className="font-display pb-14 text-2xl lg:text-5xl">Go Deeper</h2>
            <div className="mx-auto grid items-start gap-10 sm:grid-cols-3">
              {goDeeper.map((post) => (
                <a key={post.href} className="group space-y-5" href={post.href}>
                  <div className="rounded-highnote overflow-hidden">
                    <Image
                      className="w-full duration-300 group-hover:scale-[1.03]"
                      alt={post.title}
                      width={600}
                      height={400}
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

        {/* FAQ */}
        <section className="relative px-5 pb-10 antialiased">
          <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-24">
            <div className="grid grid-cols-1 gap-10">
              <div className="font-display max-w-2xl text-3xl sm:text-4xl lg:text-6xl">
                FAQ
              </div>
              <FleetFaq />
            </div>
          </div>
        </section>

        {/* CONTACT FORM CTA */}
        <section
          className="relative overflow-hidden px-5 pt-10 pb-40 antialiased"
          data-testid="contact-form-cta"
        >
          <div className="absolute -right-20 -bottom-20 -left-20 z-0">
            <div className="pointer-events-none relative w-full" aria-hidden="true" style={{ height: "280px" }}>
              <div
                className="absolute inset-x-0 bottom-0"
                style={{
                  height: "70%",
                  background:
                    "linear-gradient(to right, rgba(225, 255, 37, 0.45), rgba(85, 245, 163, 0.55), rgba(63, 247, 236, 0.45))",
                  filter: "blur(24px)",
                }}
              />
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
              <h2 className="font-display max-w-xl pb-5 text-3xl sm:text-4xl lg:text-5xl">
                The Infrastructure Behind Modern Fleet Card Programs
              </h2>
              <p className="max-w-lg text-sm leading-relaxed opacity-70">
                Closed-loop networks define what your fleet card program can do.
                Build on open-loop issuance infrastructure with spend governance,
                merchant category controls, and real-time ledger reconciliation
                built in from day one.
              </p>
            </div>
            <div className="rounded-highnote bg-white p-6 md:p-10">
              <form>
                <div className="grid grid-cols-1 gap-3">
                  <fieldset className="col-span-1">
                    <legend className="formLabel cursor-pointer">
                      What are you interested in?
                    </legend>
                    <div className="grid gap-2 py-2">
                      {productInterests.map((interest) => (
                        <label
                          key={interest}
                          className="flex cursor-pointer items-center gap-2 text-xs"
                        >
                          <div className="relative flex shrink-0 items-center justify-center">
                            <input
                              className="peer border-ash h-5 w-5 cursor-pointer appearance-none rounded border checked:border-black checked:bg-black"
                              type="checkbox"
                              value={interest}
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
                          {interest}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="col-span-1">
                    <label className="formLabel cursor-pointer" htmlFor="cta-processingVolume">
                      Estimated Monthly Payment or Fund Flow Volume
                    </label>
                    <select
                      className="baseInput p-3 text-xs"
                      id="cta-processingVolume"
                      required
                      name="processingVolume"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      {volumeOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
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
                      id="cta-programTimeline"
                      required
                      name="programTimeline"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      {timelineOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-10">
                  <button className="button button-black-arrow group h-12 w-full" type="submit">
                    Continue
                    <Image
                      alt=""
                      width={16}
                      height={16}
                      className="absolute right-4 inline-block translate-x-1 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                      src="/img/white-arrow-icon.svg"
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
