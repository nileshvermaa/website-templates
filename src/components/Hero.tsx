import Image from "next/image";
import Navbar from "@/components/Navbar";
import { HERO_ORB_SVG } from "@/components/hero-orb-svg";
import { asset } from "@/lib/asset";

const ROTATING = ["Issuing", "Acquiring", "Credit", "Money Movement", "Real-Time Ledgering", "Highnote"];

export default function Hero() {
  return (
    <div className="bg-bone relative flex h-[700px] flex-col overflow-hidden md:h-[800px]">
      {/* Announcement bar */}
      <a
        className="group relative z-20 block w-full bg-black/5 px-3 py-2.5 text-center text-xs font-medium duration-200 hover:bg-black/10"
        href="/blog/highnote-collaborates-with-visa-on-agentic-commerce-for-ai-initiated-payments"
      >
        <div className="relative mx-auto flex max-w-screen-xl items-center justify-center px-5">
          <p>Highnote Launches Agentic Commerce in Collaboration with Visa</p>
          <Image alt="" width={16} height={16} className="ml-1 h-4 w-4 duration-200 group-hover:ml-2" src="/img/black-arrow-icon.svg" />
        </div>
      </a>

      <Navbar />

      {/* Animated gradient orb */}
      <div className="absolute inset-0 top-0">
        <div className="relative h-full w-full" dangerouslySetInnerHTML={{ __html: HERO_ORB_SVG }} />
        <div className="absolute bottom-0 left-0 h-60 w-full bg-gradient-to-b from-transparent to-bone" />
      </div>

      {/* Headline + CTAs */}
      <main className="absolute inset-0 flex items-center justify-center px-5 lg:px-10">
        <div className="relative mx-auto -mt-5 w-full max-w-screen-xl text-center">
          <h1 className="font-display mx-auto max-w-screen-xl text-[11vw] leading-[1.05] md:text-6xl lg:text-[100px]">
            <span className="sr-only">The only payments platform built for you.</span>
            <span aria-hidden="true">
              <span className="hn-rotating-line">
                {ROTATING.map((word, i) => (
                  <span key={word} className={`hn-word hn-word-${i + 1}`}>
                    {word}
                  </span>
                ))}
              </span>
              <span className="block">Built for You.</span>
            </span>
          </h1>
          <p className="mx-auto max-w-xl px-2 pt-10 text-sm leading-[26px] text-black/70 sm:max-w-3xl md:text-base md:leading-[30px]">
            Launch and scale financial products on one platform for issuing, acquiring, credit, money movement, and
            real-time ledgering. Start where you want, expand as you grow.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-y-0 sm:space-x-2">
            <a className="button button-black-arrow group" href="https://dashboard.highnote.com/auth/signin?screen_hint=signup">
              Explore the Platform
              <img
                alt=""
                className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                src={asset("/img/white-arrow-icon.svg")}
              />
            </a>
            <a className="button button-white-arrow group" href="/contact">
              Talk to an Expert
              <img
                alt=""
                className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                src={asset("/img/black-arrow-icon.svg")}
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
