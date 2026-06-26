import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

interface UseCaseCard {
  title: string;
  description: string;
  href: string;
  image: string;
}

const cards: UseCaseCard[] = [
  {
    title: "AP & Bill Pay",
    description:
      "Increase virtual card adoption, unlock revenue, and streamline supplier payments.",
    href: "/solutions/ap-automation",
    image: "/img/solutions-ap.webp",
  },
  {
    title: "Spend Management",
    description:
      "Deliver modern spend controls, real-time visibility, and scalable program design.",
    href: "/solutions/spend-management",
    image: "/img/solutions-spend.webp",
  },
  {
    title: "Fleet",
    description:
      "Power fleet payments with granular controls, real-time data, and operational flexibility.",
    href: "/solutions/fleet",
    image: "/img/solutions-fleet.webp",
  },
  {
    title: "Travel and OTAs",
    description:
      "Better economics, acceptance, and reconciliation for travel payouts.",
    href: "/solutions/travel",
    image: "/img/solutions-travel.webp",
  },
  {
    title: "Platforms and Marketplaces",
    description:
      "Embed financial products that drive engagement, retention, and new revenue streams.",
    href: "/solutions/embedded-finance",
    image: "/img/use-case-platforms.webp",
  },
  {
    title: "Embedded Finance",
    description:
      "Launch and scale financial experiences without legacy infrastructure constraints.",
    href: "/solutions/embedded-finance",
    image: "/img/use-case-embedded-finance.webp",
  },
  {
    title: "Branded Credit",
    description:
      "Build branded credit programs that deepen loyalty and unlock new revenue.",
    href: "/solutions/branded-credit",
    image: "/img/solutions-branded-credit.webp",
  },
  {
    title: "Vertical SaaS",
    description:
      "Embed and monetize payments inside your platform for seamless financial workflows.",
    href: "/solutions/saas",
    image: "/img/solutions-saas.webp",
  },
];

export default function Industry() {
  return (
    <section className="bg-bone px-5 pt-10 pb-10 antialiased md:pb-20">
      <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-16 sm:pt-24">
        <h2 className="font-display max-w-3xl text-2xl lg:text-6xl">
          Built for your industry
        </h2>
        <div className="items-end justify-between space-y-5 pt-6 md:flex md:space-y-0">
          <p className="max-w-lg text-[18px] opacity-60">
            Explore solutions designed for how your business operates.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.title + card.href}
              className="group rounded-highnote bg-white p-5 duration-300 hover:-translate-y-2"
              href={card.href}
            >
              <div className="mb-5 flex flex-col justify-start text-black">
                <div className="flex items-start justify-between">
                  <h3 className="text-sm">{card.title}</h3>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="ml-2 shrink-0 -translate-x-2 stroke-black opacity-0 duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </div>
                <p className="mt-2.5 text-sm opacity-60">{card.description}</p>
              </div>
              <div className="relative aspect-square">
                <Image
                  alt={card.title}
                  src={card.image}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
