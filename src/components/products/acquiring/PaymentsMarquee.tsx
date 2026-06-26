import { asset } from "@/lib/asset";

const icons = [
  "/img/icon-payment-visa.svg",
  "/img/icon-payment-mc.svg",
  "/img/icon-payment-amex.svg",
  "/img/icon-payment-discover.svg",
  "/img/icon-payment-maestro.svg",
  "/img/icon-payment-interlink.svg",
];

// Direct Connection to Card Networks — a horizontally scrolling marquee of
// payment-network logos with white edge fades. The list is duplicated so the
// marquee loops seamlessly.
export default function PaymentsMarquee() {
  const loop = [...icons, ...icons];
  return (
    <div className="relative mx-auto overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-8">
        {loop.map((src, i) => (
          <div key={`${src}-${i}`} className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="h-12 w-auto" src={asset(src)} />
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-r from-transparent to-white" />
    </div>
  );
}
