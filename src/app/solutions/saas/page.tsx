import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { asset } from "@/lib/asset";
import { UnifiedLedgerGraphic } from "@/components/solutions/saas/SaasGraphics";

export const metadata: Metadata = {
  title: "Vertical SaaS – Highnote",
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
                Vertical SaaS
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
              <p className="order-1 max-w-lg pb-10 text-sm opacity-70 sm:order-2 sm:pb-0 sm:text-base">
                Highnote unifies issuing, acquiring, money movement, and
                ledgering into a single embedded finance platform, enabling SaaS
                companies to innovate faster and own more of the customer
                relationship.
              </p>
            </div>
          </div>
        </section>

        {/* BENTO FEATURE GRID */}
        <section className="relative animate-[fadeup_.5s_ease_.4s] px-5 pb-16 antialiased opacity-0 lg:pb-24">
          <div className="relative mx-auto max-w-screen-xl justify-between pb-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Branded Card Issuance */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto max-w-[420px] px-5 sm:pt-10">
                    <Image
                      alt="Diagram showing multiproduct card issuance: virtual, physical, debit, credit, and charge cards under your brand"
                      width={420}
                      height={300}
                      className="h-auto w-full"
                      src="/img/graphic-multiproduct.png"
                    />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Branded Card Issuance
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Launch virtual, physical, debit, credit, and charge cards
                    under your brand: Capture interchange revenue, Empower
                    customer spend workflows, and Deliver rich spend controls and
                    policy governance.
                  </p>
                </div>
              </div>

              {/* Embedded Payments + Acquiring */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <Image
                      alt="Embedded payments and acquiring integration illustration"
                      width={360}
                      height={300}
                      className="h-auto w-full max-w-[360px]"
                      src="/img/graphic-cobrand1.svg"
                    />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Embedded Payments + Acquiring
                  </h3>
                  <p className="max-w-md text-xs leading-6 opacity-70 sm:text-sm">
                    Accept payments directly within your SaaS experience with
                    unified pay-in capabilities, no siloed vendors required.
                  </p>
                </div>
              </div>

              {/* Real-Time Wallets & Payouts */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto pt-10">
                    {/* Animated SVG: raw <img> preserves animation (next/image would rasterize) */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Animated graphic of real-time wallets, payouts, and money movement"
                      src={asset("/img/graphic-money-movement-animated.svg")}
                    />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Real-Time Wallets &amp; Payouts
                  </h3>
                  <p className="max-w-md text-xs leading-6 opacity-70 sm:text-sm">
                    Enable instant payouts and programmable wallets to users,
                    partners, and service providers: Reduce settlement friction
                    and improve cash flow experiences
                  </p>
                </div>
              </div>

              {/* Unified Ledger */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <UnifiedLedgerGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Unified Ledger
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Gain one source of truth with a real-time, double-entry
                    ledger, powering transparency, reconciliation, and financial
                    reporting across all money flows.
                  </p>
                </div>
              </div>

              {/* Program & Compliance Management */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-16">
                    <div className="mb-4 grid grid-cols-2 gap-3">
                      <div className="border-ash bg-bone flex h-20 w-20 items-center justify-center rounded-xl border">
                        <Image
                          alt="PCI DSS certification icon"
                          width={40}
                          height={40}
                          className="h-10 w-10"
                          src="/img/icon-pci.svg"
                        />
                      </div>
                      <div className="border-ash bg-bone flex h-20 w-20 items-center justify-center rounded-xl border">
                        <Image
                          alt="AICPA SOC compliance certification icon"
                          width={48}
                          height={48}
                          className="h-12 w-12"
                          src="/img/icon-aicpa.svg"
                        />
                      </div>
                      <div className="border-ash bg-bone flex h-20 w-20 items-center justify-center rounded-xl border">
                        <Image
                          alt="AES encryption certification icon"
                          width={40}
                          height={40}
                          className="h-10 w-10"
                          src="/img/icon-aes.svg"
                        />
                      </div>
                      <div className="border-ash bg-bone flex h-20 w-20 items-center justify-center rounded-xl border">
                        <div className="text-base font-bold">KYC</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Program &amp; Compliance Management
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Highnote handles KYC/KYB, risk monitoring, settlement, and
                    compliance so your team can stay focused on product
                    innovation.
                  </p>
                </div>
              </div>

              {/* Modern API Infrastructure */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto px-8 sm:pt-10">
                    <Image
                      alt="GraphQL API infrastructure diagram for booking systems and supplier workflows"
                      width={360}
                      height={300}
                      className="h-auto w-full max-w-[360px]"
                      src="/img/graphic-graphqlapi.svg"
                    />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Modern API Infrastructure
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Highnote&apos;s GraphQL API integrates directly into booking
                    systems and supplier workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE AND SUPPORT */}
        <section className="relative px-5 pb-16 antialiased lg:pb-28">
          <div className="relative mx-auto max-w-screen-xl justify-between">
            <div className="mx-auto grid pb-20">
              <div className="font-display max-w-3xl text-3xl sm:text-4xl lg:text-6xl">
                Full Enterprise-Grade Compliance and Support
              </div>
            </div>
            <div className="mx-auto grid items-start gap-16 sm:grid-cols-3 sm:gap-5">
              <div className="space-y-4">
                <div className="pb-2">
                  <div className="bg-ash mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image
                      alt=""
                      width={24}
                      height={24}
                      src="/img/icon-security-black.svg"
                    />
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
                    <Image
                      alt=""
                      width={24}
                      height={24}
                      src="/img/icon-dashboard2.svg"
                    />
                  </div>
                  <div className="text-sm font-medium">
                    Operational Tools and Visibility
                  </div>
                </div>
                {[
                  "Manage and Monitor All Highnote Data",
                  "Generate Reports and Audit Logs",
                  "Configure Card Profiles and Permissions",
                  "Set Spend Controls by Program",
                  "Test and Validate in a Dedicated Environment",
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
                    <Image
                      alt=""
                      width={24}
                      height={24}
                      src="/img/icon-mgmt.svg"
                    />
                  </div>
                  <div className="text-sm font-medium">
                    Program Management and Support
                  </div>
                </div>
                {[
                  "Compliance and Regulatory Guidance",
                  "Implementation and Integration Assistance",
                  "Legal and Operational Support",
                  "BIN Optimization",
                  "Ongoing Customer Success Management",
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
            <h2 className="font-display text-center text-3xl sm:max-w-xl sm:text-left sm:text-4xl">
              Build and scale financial products within your SaaS platform with
              Highnote.
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
