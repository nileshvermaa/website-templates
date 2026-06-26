import { asset } from "@/lib/asset";

const logos = [
  { alt: "Casspay", src: "/img/logo-casspay.svg" },
  { alt: "TripLink", src: "/img/logo-triplink.svg" },
  { alt: "Fluz", src: "/img/logo-fluz.svg" },
  { alt: "Ferry", src: "/img/logo-ferry.svg" },
  { alt: "Lowe's", src: "/img/logo-lowes.svg" },
  { alt: "BNY", src: "/img/logo-bny.svg" },
  { alt: "PingPong", src: "/img/logo-pingpong.svg" },
  { alt: "Samsung", src: "/img/logo-samsung.svg" },
  { alt: "AtoB", src: "/img/logo-atob.svg" },
  { alt: "Coinflow", src: "/img/logo-coinflow.svg" },
  { alt: "SpotOn", src: "/img/logo-spoton.svg" },
  { alt: "Givecard", src: "/img/logo-givecard.svg" },
  { alt: "Mudflap", src: "/img/logo-mudflap.svg" },
  { alt: "Splitit", src: "/img/logo-splitit.svg" },
  { alt: "Netevia", src: "/img/logo-netevia.svg" },
  { alt: "Fillip", src: "/img/logo-fillip.svg" },
];

export default function LogosMarquee() {
  return (
    <section className="bg-bone flex w-full flex-col py-5 antialiased">
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
                    loading="eager"
                    className="max-h-10 w-auto opacity-70 grayscale sm:max-h-14"
                    src={asset(logo.src)}
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
