import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { asset } from "@/lib/asset";
import HeroCheckout from "@/components/products/acquiring/HeroCheckout";
import LedgerGraphic from "@/components/products/acquiring/LedgerGraphic";
import PlatformGraph from "@/components/products/acquiring/PlatformGraph";
import PaymentsMarquee from "@/components/products/acquiring/PaymentsMarquee";

export const metadata: Metadata = { title: "Acquiring – Highnote" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-bone">
        {/* ===== Section 1 — Hero: Flexible Solutions ===== */}
        <section className="relative px-5 pb-16 antialiased lg:pb-24">
          <div className="border-ash relative mx-auto grid max-w-screen-xl justify-between gap-5 border-b pb-16 sm:grid-cols-2 lg:pb-24">
            <div className="col-span-1">
              <div className="font-display max-w-xl pb-5 text-3xl sm:text-4xl lg:text-6xl">
                Flexible Solutions for Your Business
              </div>
              <p className="max-w-lg pb-12 text-base leading-7 opacity-70">
                Highnote&apos;s platform is built for multiple types of business
                models to help you scale with ease.
              </p>
              <div className="grid max-w-lg grid-cols-2 gap-10 text-xs">
                <div className="col-span-1 row-span-1">
                  <div className="mb-4 flex space-x-2">
                    <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                      <Image alt="" width={24} height={24} src="/img/icon-checkout.svg" />
                    </div>
                  </div>
                  <h4 className="mb-2.5 font-medium">Online Payments</h4>
                  <p className="leading-6 opacity-70">
                    Accept payments directly from customers with our online
                    payment solution.
                  </p>
                </div>
                <div className="col-span-1 row-span-1">
                  <div className="mb-4 flex space-x-2">
                    <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                      <Image alt="" width={24} height={24} src="/img/icon-platforms.svg" />
                    </div>
                  </div>
                  <h4 className="mb-2.5 font-medium">Platforms</h4>
                  <p className="leading-6 opacity-70">
                    Easily facilitate payments on your platform and let us do the
                    processing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex items-center">
              <div className="relative mx-auto hidden sm:block">
                <HeroCheckout />
              </div>
              <div className="relative mx-auto block pt-10 sm:hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src={asset("/img/graphic-checkout-mobile.svg")} />
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 2 — Everything You Expect and More ===== */}
        <section className="relative px-5 pb-16 antialiased lg:pb-24">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-b pb-16 lg:pb-20">
            <div className="mx-auto grid items-end gap-10 pb-20 sm:grid-cols-2">
              <div className="font-display -mb-2 text-3xl sm:text-4xl lg:text-6xl">
                Everything You Expect and More
              </div>
              <p className="max-w-lg justify-self-end text-base opacity-70">
                Get the payment essentials you love - reliable processing for
                major payment methods and essential tools to manage your business
                - plus cutting-edge features to optimize your business potential.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Unified Ledger */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Unified Ledger
                  </h3>
                  <p className="text-xs leading-6 opacity-70 sm:text-sm">
                    Our API driven ledger provides full visibility into all funds
                    movements across your product, with detailed tracking of all
                    activity.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-12 py-8 sm:pt-0 sm:pb-10 md:mx-auto">
                    <LedgerGraphic />
                  </div>
                </div>
              </div>

              {/* Flexible Payouts */}
              <div className="rounded-highnote col-span-1 flex flex-col bg-white">
                <div className="max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Flexible Payouts
                  </h3>
                  <p className="text-xs leading-6 opacity-70 sm:text-sm">
                    With Highnote&apos;s flexible platform, you can payout to as
                    many parties as you want, all while tracking funds at every
                    step of the process.
                  </p>
                </div>
                <div className="flex h-full flex-col justify-center overflow-hidden">
                  <div className="mx-auto sm:pb-10">
                    <PlatformGraph />
                  </div>
                </div>
              </div>

              {/* Direct Connection to Card Networks (full width) */}
              <div className="rounded-highnote grid gap-10 bg-white sm:col-span-2 sm:grid-cols-2">
                <div className="col-span-1 max-w-2xl px-5 pt-10 pb-0 sm:py-10 lg:p-8">
                  <h3 className="pb-2.5 text-sm font-medium sm:text-base">
                    Direct Connection to Card Networks
                  </h3>
                  <p className="text-xs leading-6 opacity-70 sm:text-sm">
                    With direct integrations with major card networks, you get
                    unparalleled speed and reliability with no middlemen.
                  </p>
                </div>
                <div className="relative col-span-1 mx-5 flex h-full flex-col justify-center overflow-hidden pb-10 sm:mr-8 sm:pb-0 sm:pl-0">
                  <div className="mx-auto w-full">
                    <PaymentsMarquee />
                  </div>
                </div>
              </div>
            </div>

            {/* feature grid */}
            <div className="text-xxs grid grid-cols-2 gap-5 pt-20 sm:text-xs md:gap-10 lg:grid-cols-4">
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-pricing.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">Interchange Optimization</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  With smart routing based on card, make sure you are paying the
                  lowest fees for your program type.
                </p>
              </div>
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-flexiblestructures.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">Flexible Account Structure</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Our platform was designed to work with any business type and
                  model, supporting your unique needs.
                </p>
              </div>
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-security-black.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">Centralized Vault</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Keep your payment and customer data secure, while providing
                  quick access when needed.
                </p>
              </div>
              <div className="col-span-1">
                <div className="mb-4 flex space-x-2">
                  <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                    <Image alt="" width={24} height={24} src="/img/icon-contracts.svg" />
                  </div>
                </div>
                <h4 className="mb-2.5 font-medium">Detailed Contracts</h4>
                <p className="leading-5 opacity-70 sm:leading-6">
                  Support complex customer and user types through detailed
                  contracts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 3 — Safe, Secure, and Built for Growth ===== */}
        <section className="relative px-5 py-16 antialiased lg:pb-24">
          <div className="border-ash relative mx-auto max-w-screen-xl justify-between border-b pb-16 lg:pb-24">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="col-span-1 pb-10 sm:pb-0">
                <div className="font-display max-w-xl pb-5 text-3xl sm:text-4xl lg:text-6xl">
                  Safe, Secure, and Built for Growth
                </div>
                <p className="max-w-lg pb-12 text-base leading-7 opacity-70">
                  Highnote helps startups launch faster and enterprises optimize
                  further. Focus on growth, we&apos;ll handle the payments.
                </p>
                <div className="text-xxs grid max-w-lg grid-cols-2 gap-10 sm:text-xs">
                  <div className="col-span-1">
                    <div className="mb-4 flex space-x-2">
                      <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                        <Image alt="" width={24} height={24} src="/img/icon-pci.svg" />
                      </div>
                      <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                        <Image alt="" width={24} height={24} src="/img/icon-aicpa.svg" />
                      </div>
                    </div>
                    <h4 className="mb-2.5 font-medium">Compliance at Our Core</h4>
                    <p className="leading-5 opacity-70 sm:leading-6">
                      Simplify compliance with a partner certified to the highest
                      compliance standards.
                    </p>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4 flex space-x-2">
                      <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                        <Image alt="" width={24} height={24} src="/img/icon-aes.svg" />
                      </div>
                      <div className="bg-ash flex h-12 w-12 items-center justify-center rounded-lg">
                        <Image alt="" width={24} height={24} src="/img/icon-cloud.svg" />
                      </div>
                    </div>
                    <h4 className="mb-2.5 font-medium">
                      Keeping Your Payments Secure
                    </h4>
                    <p className="leading-5 opacity-70 sm:leading-6">
                      Our platform is designed to protect your data with AES 256
                      encryption and isolated infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-highnote bg-blackBG col-span-1 flex h-full w-full flex-col items-center justify-center px-10 py-20 text-center text-white sm:p-0">
                <Image alt="" width={320} height={120} src="/img/graphic-uptime.svg" />
                <p className="text-xxs mt-5 sm:text-sm">
                  Historical uptime of the Highnote Platform
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 4 — Get Started CTA ===== */}
        <section className="relative px-5 pb-10 antialiased">
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
