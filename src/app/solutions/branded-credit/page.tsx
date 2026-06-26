import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import Faq from "@/components/solutions/branded-credit/Faq";
import {
  IssueCardsGraphic,
  RewardsGraphic,
  CreditInsightsGraphic,
  RealtimeLedgerGraphic,
  CreditRewardsGraphic,
  ComplianceBadgesGraphic,
} from "@/components/solutions/branded-credit/BrandedCreditGraphics";

export const metadata: Metadata = {
  title: "Branded Credit Issuing – Highnote",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-bone">
        {/* HERO */}
        <section className="relative px-5 pt-16 pb-16 antialiased lg:pb-20">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="mx-auto grid items-end gap-5 pb-10 sm:grid-cols-2 sm:pb-20">
              <div className="font-display animate-[fadeup_.5s_ease_.2s] text-3xl !leading-[1] opacity-0 sm:text-4xl lg:text-6xl">
                Branded Credit
                <div className="opacity-30">Issuing</div>
              </div>
            </div>
            <div className="mx-auto grid animate-[fadeup_.5s_ease_.3s] items-start gap-5 opacity-0 sm:grid-cols-2">
              <div className="order-2 flex flex-col items-center space-y-5 sm:order-1 sm:flex-row sm:space-y-0 sm:space-x-2">
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
              <p className="order-1 max-w-xl pb-10 text-sm opacity-70 sm:order-2 sm:pb-0 sm:text-base">
                A branded credit card program keeps your brand front and center
                with every purchase. Customers earn value through the rewards
                structure you choose to offer, whether that is cash back, points,
                miles, partner perks, or any custom rewards experience your team
                designs. You define the program. Highnote simply gives you the
                control, flexibility, and visibility to bring it to life.
              </p>
            </div>
          </div>
        </section>

        {/* BENTO FEATURE GRID */}
        <section className="relative animate-[fadeup_.5s_ease_.4s] px-5 pb-16 antialiased opacity-0 lg:pb-24">
          <div className="relative mx-auto max-w-screen-xl justify-between pb-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Issue Cards Your Way */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <IssueCardsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Issue Cards Your Way
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Create virtual, physical, or tokenized cards with
                    configurable spend and velocity controls.
                  </p>
                </div>
              </div>

              {/* Design Rewards That Match Your Brand */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <RewardsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Design Rewards That Match Your Brand
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Set earn rules, bonus categories, and value logic that
                    support your loyalty strategy.
                  </p>
                </div>
              </div>

              {/* Insights That Drive Better Programs */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <CreditInsightsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Insights That Drive Better Programs
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Access real-time data across every transaction and reward
                    activity. Create meaningful insights instantly, adapt and
                    evolve your program strategy faster.
                  </p>
                </div>
              </div>

              {/* See Activity as it Happens */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden pt-8">
                  <div className="mx-auto sm:pt-10">
                    <RealtimeLedgerGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    See Activity as it Happens
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Authorizations, captures, refunds, and disputes post to the
                    real-time ledger immediately.
                  </p>
                </div>
              </div>

              {/* Unify Your Credit Experience */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <CreditRewardsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Unify Your Credit Experience
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Connect credit decisioning, limits, and lifecycle actions to
                    the same data model that powers rewards and acquiring.
                  </p>
                </div>
              </div>

              {/* Operate with Built-In Compliance Oversight */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <ComplianceBadgesGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Operate with Built-In Compliance Oversight
                  </h3>
                  <p className="max-w-md text-xs leading-6 opacity-70 sm:text-sm">
                    Program governance, KYC, and monitoring workflows are part of
                    the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY AND SUPPORT */}
        <section className="relative px-5 pb-16 antialiased lg:pb-28">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="mx-auto grid pb-20">
              <div className="font-display max-w-2xl text-3xl sm:text-4xl lg:text-6xl">
                Full Enterprise-Grade Security and Support
              </div>
            </div>
            <div className="mx-auto grid items-start gap-16 sm:grid-cols-3 sm:gap-5">
              <div className="space-y-4">
                <div className="pb-2">
                  <div className="bg-ash mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-security-black.svg" />
                  </div>
                  <div className="text-sm font-medium">
                    Security and Data Privacy
                  </div>
                </div>
                {[
                  "PCI DSS Level 1 Certified",
                  "SOC 1 & 2 Compliant",
                  "Domain Verification, SAML, SSO, & SCIM",
                  "Data encrypted at-rest with AES-256",
                  "Isolated Infrastructure",
                ].map((t) => (
                  <div key={t} className="flex items-center space-x-2 text-xs">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      className="h-3 w-3 sm:h-5 sm:w-5"
                      src="/img/check-green-sm.svg"
                    />
                    <div>{t}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="pb-2">
                  <div className="bg-ash mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-dashboard2.svg" />
                  </div>
                  <div className="text-sm font-medium">
                    World-Class Dashboard
                  </div>
                </div>
                {[
                  "View and Manage all your Highnote Data",
                  "Generate Reports",
                  "Manage Card Profiles",
                  "Set Spend Controls",
                  "Robust Testing Environment",
                ].map((t) => (
                  <div key={t} className="flex items-center space-x-2 text-xs">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      className="h-3 w-3 sm:h-5 sm:w-5"
                      src="/img/check-green-sm.svg"
                    />
                    <div>{t}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="pb-2">
                  <div className="bg-ash mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-mgmt.svg" />
                  </div>
                  <div className="text-sm font-medium">
                    Full Program Management
                  </div>
                </div>
                {[
                  "Compliance Experts",
                  "White-Glove Support",
                  "Technical Implementation",
                  "Legal Support",
                  "Physical Card Design Assistance",
                ].map((t) => (
                  <div key={t} className="flex items-center space-x-2 text-xs">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      className="h-3 w-3 sm:h-5 sm:w-5"
                      src="/img/check-green-sm.svg"
                    />
                    <div>{t}</div>
                  </div>
                ))}
              </div>
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
