import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import {
  PaymentsMarqueeGraphic,
  AcquiringLedgerGraphic,
  AccessFundsGraphic,
  CentralizedVaultGraphic,
} from "@/components/solutions/ecommerce/EcommerceGraphics";

export const metadata: Metadata = {
  title: "Ecommerce – Highnote",
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
                Ecommerce
                <div className="opacity-30">Acquiring</div>
              </div>
            </div>
            <div className="mx-auto grid animate-[fadeup_.5s_ease_.3s] items-start gap-5 opacity-0 sm:grid-cols-2">
              <div className="order-2 flex flex-col items-center space-y-5 sm:order-1 sm:flex-row sm:space-y-0 sm:space-x-2">
                <a
                  className="button button-black-arrow group"
                  href="https://dashboard.highnote.com/auth/signin?screen_hint=signup"
                >
                  Get Started
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
                  href="https://docs.highnote.com/docs/acquiring/about-acquiring"
                >
                  View Docs
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
                Highnote offers a fast, reliable and scalable platform to accept
                payments online. Our fully embedded approach to payments
                processing allows you to have direct connection to payment
                networks and access rich capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* BENTO FEATURE GRID */}
        <section className="relative animate-[fadeup_.5s_ease_.4s] px-5 pb-16 antialiased opacity-0 lg:pb-24">
          <div className="relative mx-auto max-w-screen-xl justify-between pb-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Own Your Checkout Experience */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto px-10 sm:pt-10">
                    <Image
                      alt=""
                      width={360}
                      height={300}
                      className="h-auto w-full max-w-[360px]"
                      src="/img/graphic-ecommerce.svg"
                    />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Own Your Checkout Experience
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Design your checkout around your brand and let us take care
                    of the payments and compliance.
                  </p>
                </div>
              </div>

              {/* Accept Major Card Networks */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="relative flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <PaymentsMarqueeGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Accept Major Card Networks
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    We have direct integrations with major card networks that
                    allow customers to use their preferred payment methods.
                  </p>
                </div>
              </div>

              {/* Unified Ledgers */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <AcquiringLedgerGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Unified Ledgers
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Our API driven ledger provides full visibility into all funds
                    movements across your product, with detailed tracking of all
                    activity.
                  </p>
                </div>
              </div>

              {/* Access Funds Fast */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <AccessFundsGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Access Funds Fast
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    By utilizing a Highnote Funding Account, you can access your
                    funds more quickly for more efficient money movement.
                  </p>
                </div>
              </div>

              {/* Centralized Vault */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <CentralizedVaultGraphic />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Centralized Vault
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    Keep your payment and customer data secure, while providing
                    quick access when needed.
                  </p>
                </div>
              </div>

              {/* Manage in One Place */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pt-10">
                    <Image
                      alt=""
                      width={360}
                      height={300}
                      className="h-auto w-full max-w-[360px]"
                      src="/img/graphic-dashboard-half-white.svg"
                    />
                  </div>
                </div>
                <div className="max-w-2xl px-5 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Manage in One Place
                  </h3>
                  <p className="max-w-lg text-xs leading-6 opacity-70 sm:text-sm">
                    View and manage all your Highnote data within the Highnote
                    Dashboard. View transactions, add new payment methods, and
                    more.
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
                  "Manage Customer Contracts",
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
                  <div className="text-sm font-medium">Full Service Support</div>
                </div>
                {[
                  "Compliance Experts",
                  "White-Glove Support",
                  "Legal Support",
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
