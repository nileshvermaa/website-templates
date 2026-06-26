import Image from "next/image";
import Navbar from "@/components/Navbar";
import { asset } from "@/lib/asset";

// Announcement bar + Navbar for sub-pages (no hero orb). Sits on the bone background.
export default function SiteHeader() {
  return (
    <div className="bg-bone">
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
    </div>
  );
}
