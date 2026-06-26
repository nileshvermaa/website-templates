import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import LogosMarquee from "@/components/products/issuing/LogosMarquee";
import {
  ControlSpendGraphic,
  DecisioningGraphic,
  MoveFundsGraphic,
} from "@/components/products/issuing/ControlGraphics";
import {
  LedgerGraphic,
  TransactionDataGraphic,
} from "@/components/products/issuing/DataGraphics";

export const metadata: Metadata = {
  title: "Card Issuing Platform (Any Card, Any Way, at Scale)",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-bone">
        {/* HERO */}
        <section className="relative px-5 pt-16 pb-10 antialiased lg:pt-24">
          <div className="relative mx-auto max-w-screen-xl">
            <h1 className="font-display max-w-4xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
              The Future of Card Issuing is Here
            </h1>
            <p className="max-w-xl pt-6 pb-10 text-base leading-7 opacity-70 sm:text-lg">
              Launch and scale modern card programs on a single, unified
              platform. Issue any card, any way, with full control and complete
              data visibility.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <a
                className="button button-black-arrow group"
                href="https://dashboard.highnote.com/auth/signin?screen_hint=signup"
              >
                Start Testing
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
            </div>
            <div className="mt-14 flex flex-wrap items-end justify-center gap-6 sm:justify-between">
              <Image
                alt=""
                width={350}
                height={215}
                className="h-auto w-48 sm:w-64 lg:w-80"
                src="/img/issuing-card-1.svg"
              />
              <Image
                alt=""
                width={350}
                height={215}
                className="h-auto w-48 sm:w-64 lg:w-80"
                src="/img/issuing-card-2.svg"
              />
              <Image
                alt=""
                width={350}
                height={215}
                className="h-auto w-48 sm:w-64 lg:w-80"
                src="/img/issuing-card-3.svg"
              />
            </div>
          </div>
        </section>

        {/* SECTION 1 — Any Card, Any Way */}
        <section className="relative px-5 py-16 antialiased lg:pb-24">
          <div className="border-ash relative mx-auto grid max-w-screen-xl justify-between border-b pb-16 sm:grid-cols-2 lg:pb-24">
            <div className="col-span-1">
              <div className="font-display pb-5 text-3xl sm:text-4xl lg:text-6xl">
                Any Card,
                <br />
                Any Way
              </div>
              <p className="max-w-lg pb-12 text-base leading-7 opacity-70">
                Meet your customers where they are and deliver the right card
                medium for the optimum brand experience.
              </p>
              <div className="text-xxs grid max-w-lg grid-cols-2 grid-rows-2 gap-10 sm:text-xs">
                <div className="col-span-1 row-span-1">
                  <div className="mb-4 flex space-x-2">
                    <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                      <Image alt="" width={24} height={24} src="/img/icon-cards.svg" />
                    </div>
                  </div>
                  <h4 className="mb-2.5 font-medium">All Card Formats</h4>
                  <p className="leading-5 opacity-70 sm:leading-6">
                    Issue physical, virtual, and/or tokenized cards, with the
                    option to easily add formats as you go.
                  </p>
                </div>
                <div className="col-span-1 row-span-1">
                  <div className="mb-4 flex space-x-2">
                    <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                      <Image alt="" width={24} height={24} src="/img/icon-print.svg" />
                    </div>
                  </div>
                  <h4 className="mb-2.5 font-medium">Endless Printing Options</h4>
                  <p className="leading-5 opacity-70 sm:leading-6">
                    We work with multiple card printing providers to offer
                    extensive optionality, from plastic to metal.
                  </p>
                </div>
                <div className="col-span-1 row-span-1">
                  <div className="mb-4 flex space-x-2">
                    <Image
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-lg"
                      src="/img/logo-apple.svg"
                    />
                    <Image
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-lg"
                      src="/img/logo-google.svg"
                    />
                  </div>
                  <h4 className="mb-2.5 font-medium">Add to Digital Wallets</h4>
                  <p className="leading-5 opacity-70 sm:leading-6">
                    Enable contactless payments with digital wallets like Apple
                    Pay and Google Pay.
                  </p>
                </div>
                <div className="col-span-1 row-span-1">
                  <div className="mb-4 flex space-x-2">
                    <Image
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-lg"
                      src="/img/logo-visa.svg"
                    />
                    <Image
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-lg"
                      src="/img/logo-mc.svg"
                    />
                  </div>
                  <h4 className="mb-2.5 font-medium">
                    Choose from Major Networks
                  </h4>
                  <p className="leading-5 opacity-70 sm:leading-6">
                    We have direct integrations with Visa, Mastercard, and
                    several banking partners.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex items-center pt-20 sm:pt-0">
              <Image
                alt=""
                width={620}
                height={620}
                className="h-auto w-full"
                src="/img/graphic-anycard.jpg"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2 — You're in Control */}
        <section className="relative px-5 pb-16 antialiased lg:pb-24">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-b pb-16 lg:pb-20">
            <div className="mx-auto grid items-end gap-10 pb-20 sm:grid-cols-2">
              <div className="font-display -mb-2 text-3xl sm:text-4xl lg:text-6xl">
                You&apos;re in Control
              </div>
              <p className="max-w-lg justify-self-end text-base opacity-70">
                Highnote puts you in the driver&apos;s seat. Experience the
                freedom to tailor a card program that fits your needs. Set
                spending limits, offer rewards, and collaborate on the approval
                process.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-highnote flex flex-col bg-white sm:col-span-2">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Control Spend with Precision
                  </h3>
                  <p className="text-xs leading-6 opacity-70 sm:text-sm">
                    Encourage responsible spending and minimize risk with spend
                    controls. Set spend limits based on merchant category codes,
                    spend amounts, address verification, and more.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pb-10">
                    <ControlSpendGraphic />
                  </div>
                </div>
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Collaborate on Decisioning
                  </h3>
                  <p className="text-xs leading-6 opacity-70 sm:text-sm">
                    Collaborate on application approvals and authorization
                    decisions to optimize approvals and successful transactions.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pb-10">
                    <DecisioningGraphic />
                  </div>
                </div>
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Flexibly Move Funds
                  </h3>
                  <p className="text-xs leading-6 opacity-70 sm:text-sm">
                    Effortlessly move funds between cards and accounts.
                    Deactivate one card and replace it with a new card, all
                    without the hassle of transferring funds.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto p-8 sm:p-0 sm:pb-10">
                    <MoveFundsGraphic />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xxs grid grid-cols-2 gap-5 pt-20 sm:text-xs md:gap-10 lg:grid-cols-4">
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <Image
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg"
                    src="/img/logo-plaid.svg"
                  />
                </div>
                <h4 className="mb-2.5 font-medium">Connect External Accounts</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Instantly verify external bank accounts via Plaid and move
                  funds without micro-deposits.
                </p>
              </div>
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-rewards.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">Offer Rewards</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Design a rewards program that builds lasting loyalty with
                  integrated point tracking in the Highnote ledger.
                </p>
              </div>
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-counter.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">Enable Counter Offers</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Reduce customer attrition by offering another card product to
                  keep customer approvals high.
                </p>
              </div>
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-apr.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">Define Different APRs</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  For credit programs, set APRs for different balance types such
                  as purchases, cash advances, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Full Data Access & Visibility */}
        <section className="relative px-5 pb-16 antialiased lg:pb-24">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-b pb-16 lg:pb-20">
            <div className="mx-auto grid items-end gap-10 pb-20 sm:grid-cols-2">
              <div className="font-display -mb-2 text-3xl sm:text-4xl lg:text-6xl">
                Full Data Access
                <br />
                &amp; Visibility
              </div>
              <p className="max-w-lg justify-self-end text-base opacity-70">
                With fast and reliable processing, Highnote is the partner you
                can trust. Direct API access directly to the networks gives you
                full visibility of your transaction activity, funds movement,
                and more.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Detailed Ledger
                  </h3>
                  <p className="max-w-md text-xs leading-6 opacity-70 sm:text-sm">
                    Our API driven ledger provides full visibility into all
                    funds movements with detailed tracking of activity.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pb-10">
                    <LedgerGraphic />
                  </div>
                </div>
              </div>
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Rich Transaction Data
                  </h3>
                  <p className="max-w-md text-xs leading-6 opacity-70 sm:text-sm">
                    Detailed transaction payloads empower you to write advanced
                    logic around authorization approvals.
                  </p>
                </div>
                <div className="relative flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto w-full sm:pb-10">
                    <TransactionDataGraphic />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xxs grid grid-cols-2 gap-5 pt-20 sm:text-xs md:gap-10 lg:grid-cols-4">
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-reporting.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">Detailed Reporting</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Access data rich reports to gain strategic insights and
                  facilitate swift reconciliation.
                </p>
              </div>
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-identity.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">
                  Robust Identity Verification
                </h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Get secure and automated Know-Your-Customer and
                  Know-Your-Business verification right out of the box.
                </p>
              </div>
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <Image
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg"
                    src="/img/logo-snowflake.svg"
                  />
                  <Image
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg"
                    src="/img/logo-redshift.svg"
                  />
                </div>
                <h4 className="mb-2.5 font-medium">Direct Data Connection</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Connect your data provider with us using Snowflake and others
                  to get access directly to all the data you need.
                </p>
              </div>
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-fleet.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">Fleet Level 2 &amp; 3 Data</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Access deep transaction data directly from the networks around
                  fuel usage, odometer readings, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Manage in a Single Place */}
        <section className="relative px-5 pb-16 antialiased lg:pb-10">
          <div className="border-ash relative mx-auto grid max-w-screen-xl justify-between border-b pb-16 sm:grid-cols-2 lg:pb-24">
            <div className="col-span-1">
              <div className="font-display pb-5 text-3xl sm:text-4xl lg:text-6xl">
                Manage in a
                <br />
                Single Place
              </div>
              <p className="max-w-lg pb-12 text-base leading-7 opacity-70">
                Streamline operations and break down silos. Highnote unifies all
                of your teams on one collaborative platform. Eliminate friction
                and empower everyone to achieve more.
              </p>
              <div className="text-xxs grid max-w-md grid-cols-2 grid-rows-2 gap-5 sm:text-xs">
                {[
                  "Team Roles and Permissions",
                  "Streamlined Workflows",
                  "Manage Card Profiles",
                  "Robust Testing Environment",
                  "Generate Reports",
                  "Set Spend Controls",
                ].map((label) => (
                  <div key={label} className="col-span-1 row-span-1">
                    <div className="flex items-center gap-1.5">
                      <Image
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5"
                        src="/img/check-black-sm.svg"
                      />
                      <h4 className="font-medium">{label}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1 flex items-center pt-16 sm:pt-0">
              <Image
                alt=""
                width={620}
                height={500}
                className="h-auto w-full"
                src="/img/graphic-dashboard-half.svg"
              />
            </div>
          </div>
        </section>

        {/* SECTION 5 — Powering modern issuing solutions */}
        <section className="relative px-5 py-10 antialiased">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="mx-auto max-w-sm text-center text-sm sm:text-base">
              Powering modern issuing solutions.
              <br />
              <span className="font-medium">
                From visionary startups to industry leaders.
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 6 — Logos Marquee */}
        <LogosMarquee />

        {/* SECTION 7 — Testimonials */}
        <section className="relative px-5 pt-10 antialiased">
          <div className="relative mx-auto grid max-w-screen-xl justify-between gap-10 md:grid-cols-2">
            <div className="border-ash col-span-1 border-l pl-5">
              <div className="max-w-xs pt-3 pb-12 text-sm sm:max-w-lg sm:text-base">
                &quot;Every single person we worked with was just a total rock
                star. In fact, without being asked, the head of our engineering
                team told me that the Highnote API was the best he had seen from
                every single vendor we dealt with.&quot;
              </div>
              <div className="mb-2 flex items-center space-x-3">
                <Image
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
                  src="/img/photo-maurice.jpg"
                />
                <div className="max-w-lg text-xs opacity-70 sm:text-sm">
                  Maurice Harary
                  <br />
                  CEO
                </div>
              </div>
              <Image
                alt=""
                width={120}
                height={64}
                className="-ml-10 h-12 w-auto sm:-ml-12 sm:h-16"
                src="/img/logo-fluz.svg"
              />
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
                  <Image
                    alt=""
                    width={40}
                    height={40}
                    className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
                    src="/img/photo-trista.jpg"
                  />
                  <div className="max-w-lg text-xs opacity-70 sm:text-sm">
                    Trista Kempa
                    <br />
                    COO
                  </div>
                </div>
                <Image
                  alt=""
                  width={120}
                  height={64}
                  className="-ml-6 h-12 w-auto sm:-ml-9 sm:h-16"
                  src="/img/logo-ferry.svg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — Highnote Credit callout */}
        <section className="relative px-5 pt-24 antialiased">
          <div className="rounded-highnote bg-ash relative mx-auto grid max-w-screen-xl items-center justify-between gap-10 p-8 py-8 sm:px-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl sm:text-6xl">
                Highnote Credit
              </h2>
              <p className="max-w-sm pt-3 pb-10 opacity-70">
                Issue credit cards, service loans, control spend, and more – all
                on a single platform.
              </p>
              <a className="button button-white-arrow group" href="/products/credit">
                View Credit
                <Image
                  alt=""
                  width={16}
                  height={16}
                  className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                  src="/img/black-arrow-icon.svg"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <Image
                alt=""
                width={440}
                height={320}
                className="h-auto w-full max-w-md"
                src="/img/graphic-creditcallout.svg"
              />
            </div>
          </div>
        </section>

        {/* SECTION 9 — Get Started CTA */}
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
