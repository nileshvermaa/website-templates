import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

const posts = [
  {
    title:
      "When Enterprise Meets Fintech: Highnote and Lowe's on Payments as a Competitive Advantage",
    href: "/blog/when-enterprise-meets-fintech-highnote-and-lowes-on-payments-as-a-competitive-advantage",
    image: "/img/blog-lowes-fintech.jpg",
  },
  {
    title: "Highnote Powers a New Era of Commercial Card Issuing for Online Travel",
    href: "/blog/highnote-powers-a-new-era-of-commercial-card-issuing-for-online-travel",
    image: "/img/blog-commercial-card-travel.jpg",
  },
  {
    title: "Highnote vs. TabaPay vs. Astra: Unified Platform or Payout API?",
    href: "/blog/highnote-vs-tabapay-vs-astra-unified-platform-or-payout-api",
    image: "/img/blog-highnote-vs-tabapay.jpg",
  },
];

export default function Insights() {
  return (
    <section className="bg-bone px-5 pt-16 pb-20 antialiased sm:pt-10">
      <div className="border-ash relative mx-auto max-w-screen-xl border-t pt-16 sm:pt-24">
        <h2 className="font-display max-w-3xl text-2xl lg:text-6xl">
          Insights for builders
        </h2>
        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <p className="max-w-xl text-[18px] opacity-60">
            Learn how modern companies are designing, launching, and scaling
            financial products.
          </p>
          <a
            className="group flex shrink-0 items-center gap-2 text-[18px] opacity-60 duration-200 hover:opacity-100 sm:ml-4"
            href="/blog"
          >
            Explore Resources
            <ArrowRightIcon
              aria-hidden="true"
              className="inline-block duration-200 ease-in-out group-hover:translate-x-1"
            />
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {posts.map((post) => (
            <a key={post.href} className="group" href={post.href}>
              <div className="rounded-highnote relative aspect-[3/2] w-full overflow-hidden duration-300 group-hover:-translate-y-2">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 max-w-xs text-base text-black">{post.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
