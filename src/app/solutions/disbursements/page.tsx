import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import {
  FastFundsGraphic,
  PrecisionSpendGraphic,
  SendAnywhereGraphic,
  LedgerGraphic,
  IssueCardsGraphic,
} from "@/components/solutions/disbursements/DisbursementsGraphics";

export const metadata: Metadata = {
  title: "Corporate Disbursements – Highnote",
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
              <div className="font-display animate-[fadeup_.5s_ease_.2s] text-3xl leading-[1] opacity-0 sm:text-4xl lg:text-6xl">
                Corporate Disbursements
                <div className="opacity-30">Unified Payments</div>
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
                With Highnote&apos;s Unified Platform, moving funds is fast,
                secure, and flexbile. We allow the ability to move funds across
                your company instantly and track everything in our ledger. Saving
                you time and money at every step.
              </p>
            </div>
          </div>
        </section>

        {/* BENTO FEATURE GRID */}
        <section className="relative animate-[fadeup_.5s_ease_.4s] px-5 pb-16 antialiased opacity-0 lg:pb-24">
          <div className="relative mx-auto max-w-screen-xl justify-between pb-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Move Funds Blazingly Fast */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <FastFundsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Move Funds Blazingly Fast
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Moving funds from your financial accounts to employees and
                    vendors is done same day, where it typically takes 2-3 days.
                    No more waiting around for funds to hit accounts.
                  </p>
                </div>
              </div>

              {/* Control Spend with Precision */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <PrecisionSpendGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Control Spend with Precision
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Set spend limits based on merchant categories, spend amounts,
                    geographic location, and more.
                  </p>
                </div>
              </div>

              {/* Send Money Anywhere */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <SendAnywhereGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Send Money Anywhere
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Open up your disbursements and send money via ACH, A2A
                    transfers, virtual and physical cards, and more.
                  </p>
                </div>
              </div>

              {/* Unified Ledger */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <LedgerGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Unified Ledger
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Our API driven ledger provides full visibility into all funds
                    movements with detailed tracking of activity.
                  </p>
                </div>
              </div>

              {/* Issue Cards Instantly */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <IssueCardsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Issue Cards Instantly
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Issue virtual, physical, or digital wallets cards to your
                    customers instantly and fund them in real time.
                  </p>
                </div>
              </div>

              {/* Manage All in One Place */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto px-8 sm:pt-10">
                    <Image
                      alt=""
                      width={520}
                      height={320}
                      className="h-auto w-full max-w-[360px]"
                      src="/img/graphic-dashboard-half-white.svg"
                    />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Manage All in One Place
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Streamline operations and break down silos. Highnote unifies
                    all of your teams on one collaborative platform.
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
                  <div className="text-sm font-medium">World-Class Dashboard</div>
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
                  <div className="text-sm font-medium">Full Program Management</div>
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
