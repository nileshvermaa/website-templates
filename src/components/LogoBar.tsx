import { asset } from "@/lib/asset";

const logos = [
  { alt: "Lowe's", src: "/img/logo-lowes.svg" },
  { alt: "BNY", src: "/img/logo-bny.svg" },
  { alt: "Splitit", src: "/img/logo-splitit.svg" },
  { alt: "Netevia", src: "/img/logo-netevia.svg" },
  { alt: "TripLink", src: "/img/logo-triplink.svg" },
  { alt: "Fluz", src: "/img/logo-fluz.svg" },
  { alt: "SpotOn", src: "/img/logo-spoton.svg" },
  { alt: "Mudflap", src: "/img/logo-mudflap.svg" },
  { alt: "Samsung", src: "/img/logo-samsung.svg" },
  { alt: "Coinflow", src: "/img/logo-coinflow.svg" },
  { alt: "Fillip", src: "/img/logo-fillip.svg" },
  { alt: "Givecard", src: "/img/logo-givecard.svg" },
];

export default function LogoBar() {
  return (
    <section className="bg-bone flex w-full flex-col pt-2 pb-10 antialiased">
      <p className="mx-auto mb-6 max-w-xs px-5 text-center text-xs opacity-60 md:max-w-lg md:text-sm">
        Trusted by the companies building what&apos;s next in payments
      </p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {logos.map((logo) => (
                <div
                  key={`${copy}-${logo.alt}`}
                  className="flex shrink-0 items-center justify-center px-6 sm:px-10"
                >
                  <img
                    alt={logo.alt}
                    width={224}
                    height={90}
                    decoding="async"
                    className="max-h-12 w-auto opacity-70 grayscale sm:max-h-16"
                    src={asset(logo.src)}
                    style={{ color: "transparent" }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
