import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { ArrowRightIcon, PlayIcon } from "@/components/icons";

export default function Customers() {
  return (
    <section className="bg-bone px-5 pt-16 pb-10 antialiased sm:pt-10 md:pb-20">
      <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-16 sm:pt-24">
        <h2 className="font-display max-w-3xl text-2xl lg:text-6xl">
          Built with the companies leading what&apos;s next
        </h2>
        <div className="items-end justify-between space-y-5 pt-6 md:flex md:space-y-0">
          <p className="max-w-lg text-[18px] opacity-60">
            Real products. Real scale. Real outcomes.
          </p>
          <Link
            className="group flex shrink-0 items-center gap-2 text-[18px] opacity-60 duration-200 hover:opacity-100"
            href="/customers"
          >
            View Customer Stories
            <ArrowRightIcon
              aria-hidden="true"
              className="inline-block duration-200 ease-in-out group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-4">
          {/* WorkWhile video card */}
          <div className="rounded-highnote relative col-span-1 overflow-hidden border border-black/10 bg-white lg:col-span-2">
            <Image
              alt="WorkWhile"
              width={172}
              height={32}
              className="absolute top-6 left-6 z-10 h-6 w-auto md:top-8 md:left-8 md:h-8"
              src="/img/logo-workwhile.svg"
              style={{ color: "transparent" }}
            />
            <div className="group/video relative aspect-video w-full">
              <video
                src={asset("/video/workwhile-hero-preview.mp4")}
                className="h-full w-full rounded-xl bg-black object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              />
              <button
                type="button"
                className="absolute inset-0 flex cursor-pointer items-end justify-start p-6 md:p-8"
                aria-label="Play full video"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 group-hover/video:scale-110">
                  <PlayIcon className="ml-0.5 h-6 w-6" fill="white" aria-hidden="true" />
                </div>
              </button>
            </div>
          </div>
          {/* Coinflow video card */}
          <div className="rounded-highnote relative col-span-1 overflow-hidden border border-black/10 bg-white lg:col-span-2">
            <Image
              alt="Coinflow"
              width={300}
              height={74}
              className="absolute top-6 left-6 z-10 h-6 w-auto md:top-8 md:left-8 md:h-8"
              src="/img/logo-coinflow-white.png"
              style={{ color: "transparent" }}
            />
            <div className="group/video relative aspect-video w-full">
              <video
                src={asset("/video/coinflow-hero-preview.mp4")}
                className="h-full w-full rounded-xl bg-black object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              />
              <button
                type="button"
                className="absolute inset-0 flex cursor-pointer items-end justify-start p-6 md:p-8"
                aria-label="Play full video"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 group-hover/video:scale-110">
                  <PlayIcon className="ml-0.5 h-6 w-6" fill="white" aria-hidden="true" />
                </div>
              </button>
            </div>
          </div>
          {/* Lowe's quote card */}
          <div className="rounded-highnote col-span-1 flex aspect-[3/2] flex-col justify-between bg-white p-6 md:aspect-square md:p-8">
            <p className="text-base">
              &quot;Highnote helped us work on some of our unique business solutions.&quot;
            </p>
            <Image
              alt="Lowe's"
              width={100}
              height={40}
              className="h-10 w-auto self-start"
              src="/img/logo-lowes-blue.svg"
              style={{ color: "transparent" }}
            />
          </div>
          {/* Netevia quote card */}
          <div className="rounded-highnote col-span-1 flex aspect-[3/2] flex-col justify-between bg-white p-6 md:aspect-square md:p-8">
            <p className="text-base">
              &quot;Highnote is a partner that accelerates our growth.&quot;
            </p>
            <Image
              alt="Netevia"
              width={80}
              height={24}
              className="h-6 w-auto self-start"
              src="/img/logo-netevia-quote.svg"
              style={{ color: "transparent" }}
            />
          </div>
          {/* Splitit quote card */}
          <div className="rounded-highnote col-span-1 flex aspect-[3/2] flex-col justify-between bg-white p-6 md:aspect-square md:p-8">
            <p className="text-base">
              &quot;Highnote&apos;s platform offers the flexibility, scalability, and security we
              needed.&quot;
            </p>
            <Image
              alt="Splitit"
              width={80}
              height={28}
              className="h-7 w-auto self-start"
              src="/img/logo-splitit-quote.png"
              style={{ color: "transparent" }}
            />
          </div>
          {/* BNY quote card */}
          <div className="rounded-highnote col-span-1 flex aspect-[3/2] flex-col justify-between bg-white p-6 md:aspect-square md:p-8">
            <p className="text-base">
              &quot;With Highnote, we are able to reliably expand our payment offerings.&quot;
            </p>
            <Image
              alt="BNY"
              width={80}
              height={24}
              className="h-6 w-auto self-start"
              src="/img/logo-bny-quote.svg"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
