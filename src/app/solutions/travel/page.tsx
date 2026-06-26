import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import Faq from "@/components/solutions/travel/Faq";
import {
  InstantVirtualCardsGraphic,
  UnifiedLedgerGraphic,
  SpendControlsGraphic,
  CollaborativeAuthGraphic,
  FundsGraphic,
  GraphqlApiGraphic,
} from "@/components/solutions/travel/TravelGraphics";

export const metadata: Metadata = {
  title: "Online Travel Agencies – Highnote",
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
                Online Travel Agencies
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
                Highnote gives OTAs a unified payments and issuing platform that
                connects every part of the transaction journey. With instant
                virtual card issuance, automated reconciliation, and full
                programmatic control, OTAs can simplify supplier payouts, reduce
                fraud, and unlock new sources of revenue.
              </p>
            </div>
          </div>
        </section>

        {/* BENTO FEATURE GRID */}
        <section className="relative animate-[fadeup_.5s_ease_.4s] px-5 pb-16 antialiased opacity-0 lg:pb-24">
          <div className="relative mx-auto max-w-screen-xl justify-between pb-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Intro card (full width) */}
              <div className="rounded-highnote col-span-1 grid bg-white sm:col-span-2 lg:grid-cols-2">
                <div className="max-w-2xl p-5 sm:py-10 lg:p-10">
                  <h3 className="font-display pb-7 text-xl sm:text-2xl">
                    Modern Virtual Card Issuing for OTAs and Travel Platforms
                  </h3>
                  <p className="opacity-80">
                    Highnote is purpose-built to give OTAs, marketplaces, and
                    travel platforms a smarter way to issue virtual cards with
                    consistent global economics, fine-tuned spend controls, and
                    real-time ledger tracking.
                  </p>
                  <div className="max-w-lg space-y-4 pt-8 pb-4">
                    <div className="flex space-x-2 text-xs">
                      <Image
                        alt=""
                        width={16}
                        height={16}
                        className="mt-px h-4 w-4"
                        src="/img/check-black-sm.svg"
                      />
                      <div className="opacity-80">
                        Automated card creation based on booking or settlement
                        triggers
                      </div>
                    </div>
                    <div className="flex space-x-2 text-xs">
                      <Image
                        alt=""
                        width={16}
                        height={16}
                        className="mt-px h-4 w-4"
                        src="/img/check-black-sm.svg"
                      />
                      <div className="opacity-80">
                        Category-based spend controls and merchant restrictions
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 text-xs">
                      <Image
                        alt=""
                        width={16}
                        height={16}
                        className="mt-px h-4 w-4"
                        src="/img/check-black-sm.svg"
                      />
                      <div className="opacity-80">
                        Integrated ledger tracking for every authorization and
                        capture
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 text-xs">
                      <Image
                        alt=""
                        width={16}
                        height={16}
                        className="mt-px h-4 w-4"
                        src="/img/check-black-sm.svg"
                      />
                      <div className="opacity-80">
                        Seamless onboarding, velocity limits, and full program
                        oversight
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-lg p-6 lg:pl-0">
                  <Image
                    alt=""
                    width={640}
                    height={400}
                    className="h-[400px] rounded-lg object-cover sm:h-full"
                    src="/img/image-travelpay.jpg"
                  />
                  <Image
                    alt=""
                    width={320}
                    height={200}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md"
                    src="/img/travel-card.svg"
                  />
                </div>
              </div>

              {/* Instant Virtual Card Issuance */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <InstantVirtualCardsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Instant Virtual Card Issuance
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Issue instant, branded virtual cards to pay airlines, hotels,
                    transportation providers, and wholesalers.
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
                  <p className="max-w-md text-xs leading-6 opacity-70 sm:text-sm">
                    Reconcile supplier transactions in real time through
                    Highnote’s unified ledger.
                  </p>
                </div>
              </div>

              {/* Configurable Spend Controls */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <SpendControlsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Configurable Spend Controls
                  </h3>
                  <p className="max-w-md text-xs leading-6 opacity-70 sm:text-sm">
                    Manage spend using configurable velocity, category, and
                    authorization controls.
                  </p>
                </div>
              </div>

              {/* Collaborative Authorization */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <CollaborativeAuthGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Collaborative Authorization
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Reduce fraud exposure using collaborative authorization to
                    enhance security.
                  </p>
                </div>
              </div>

              {/* Dynamic Funding and Float Control */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <FundsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Dynamic Funding and Float Control
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Manage funds with flexibility and efficient cash utilization.
                  </p>
                </div>
              </div>

              {/* Modern API Infrastructure */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto px-8 sm:pt-10">
                    <GraphqlApiGraphic />
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
                    <Image alt="" width={24} height={24} src="/img/icon-mgmt.svg" />
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
            <h2 className="font-display text-center text-3xl sm:max-w-xl sm:text-left sm:text-6xl">
              Modernize Your Travel Payments
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
