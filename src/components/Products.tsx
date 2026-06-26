import Link from "next/link";
import { asset } from "@/lib/asset";

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="-translate-x-2 opacity-0 duration-200 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
  >
    <path
      d="M4 10H16M11 5L16 10L11 15"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Blob = {
  className: string;
  color: string;
  animation: string;
};

/**
 * A visually-equivalent set of blurred floating gradient blobs, clipped by the
 * card's overflow-hidden container. Each blob drifts forever via the global
 * ambientDrift / ambientDriftAlt keyframes.
 */
function CardVisual({ blobs }: { blobs: Blob[] }) {
  return (
    <div className="rounded-highnote pointer-events-none absolute inset-x-0 bottom-0 top-1/3 overflow-hidden">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-2xl ${blob.className}`}
          style={{
            background: blob.color,
            animation: blob.animation,
          }}
        />
      ))}
    </div>
  );
}

const rails = ["Check", "Wire", "ACH", "RTP / FedNow", "OCT", "Stablecoin", "AFT", "Payouts"];

const pillTags = [
  "Unified Ledger",
  "Stablecoin",
  "Instant Payments",
  "Virtual Card Express",
  "Capital Connect",
  "Datashare",
  "Spend Controls",
  "Fraud Tools",
];

const cardClass =
  "group rounded-highnote relative flex aspect-[2/3] flex-col overflow-hidden bg-white p-6 duration-300 hover:-translate-y-2 hover:shadow-[0_18px_0_-8px_rgba(226,224,214,0.5)]";

export default function Products() {
  return (
    <section className="bg-bone px-5 pt-16 pb-0 antialiased">
      <div className="relative mx-auto max-w-screen-xl">
        <h2 className="font-display max-w-7xl text-2xl lg:text-6xl">
          Everything you need to launch fast, differentiate, and keep innovating
        </h2>
        <p className="max-w-lg pt-6 text-[18px] opacity-60">
          Each product is powerful on its own.
          <br />
          Together, they unlock what legacy systems can&apos;t.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Issuing */}
          <Link className={cardClass} href="/products/issuing">
            <div className="flex items-center justify-between">
              <h3 className="text-sm">Issuing</h3>
              <ArrowIcon />
            </div>
            <p className="pt-3 text-sm opacity-60">
              Launch and manage card programs with full control
            </p>
            <CardVisual
              blobs={[
                {
                  className: "left-[-20%] bottom-[-10%] h-[70%] w-[90%]",
                  color:
                    "radial-gradient(circle at 30% 30%, #E1FF25, #55F5A3 55%, transparent 75%)",
                  animation: "ambientDrift 18s ease-in-out infinite",
                },
                {
                  className: "right-[-25%] bottom-[5%] h-[55%] w-[70%]",
                  color:
                    "radial-gradient(circle at 50% 50%, #00FFF0, transparent 70%)",
                  animation: "ambientDriftAlt 22s ease-in-out infinite",
                },
                {
                  className: "left-[20%] bottom-[-25%] h-[50%] w-[60%]",
                  color:
                    "radial-gradient(circle at 50% 50%, #55F5A3, transparent 72%)",
                  animation: "ambientDrift 26s ease-in-out infinite reverse",
                },
              ]}
            />
          </Link>

          {/* Acquiring */}
          <Link className={cardClass} href="/products/acquiring">
            <div className="flex items-center justify-between">
              <h3 className="text-sm">Acquiring</h3>
              <ArrowIcon />
            </div>
            <p className="pt-3 text-sm opacity-60">
              Accept and process payments with flexibility and at scale
            </p>
            <div className="rounded-highnote pointer-events-none absolute inset-x-0 bottom-0 top-1/3 overflow-hidden">
              <div
                className="absolute left-[-20%] bottom-[-10%] h-[70%] w-[90%] rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #55F5A3, #E1FF25 50%, #FF5FA2 85%, transparent 95%)",
                  animation: "ambientDrift 20s ease-in-out infinite",
                }}
              />
              <div
                className="absolute right-[-25%] top-[5%] h-[55%] w-[70%] rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, #00FFF0, transparent 70%)",
                  animation: "ambientDriftAlt 24s ease-in-out infinite",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center">
                <img
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={200}
                  height={300}
                  decoding="async"
                  className="w-3/4 max-w-[200px] object-contain"
                  src={asset("/img/home-acquiring-graphic.svg")}
                />
              </div>
            </div>
          </Link>

          {/* Credit */}
          <Link className={cardClass} href="/products/credit">
            <div className="flex items-center justify-between">
              <h3 className="text-sm">Credit</h3>
              <ArrowIcon />
            </div>
            <p className="pt-3 text-sm opacity-60">
              Create branded credit programs with underwriting and rewards
            </p>
            <CardVisual
              blobs={[
                {
                  className: "right-[-20%] bottom-[-10%] h-[70%] w-[90%]",
                  color:
                    "radial-gradient(circle at 30% 30%, #55F5A3, #E1FF25 55%, transparent 78%)",
                  animation: "ambientDriftAlt 19s ease-in-out infinite",
                },
                {
                  className: "left-[-25%] bottom-[10%] h-[55%] w-[70%]",
                  color:
                    "radial-gradient(circle at 50% 50%, #00FFF0, transparent 70%)",
                  animation: "ambientDrift 23s ease-in-out infinite",
                },
                {
                  className: "right-[15%] bottom-[-25%] h-[50%] w-[60%]",
                  color:
                    "radial-gradient(circle at 50% 50%, #E1FF25, transparent 72%)",
                  animation: "ambientDriftAlt 27s ease-in-out infinite reverse",
                },
              ]}
            />
          </Link>

          {/* Money Movement */}
          <Link className={cardClass} href="/solutions/money-movement">
            <div className="flex items-center justify-between">
              <h3 className="text-sm">Money Movement</h3>
              <ArrowIcon />
            </div>
            <p className="pt-3 text-sm opacity-60">
              Move funds across rails with speed and full visibility
            </p>
            <div className="rounded-highnote pointer-events-none absolute inset-x-0 bottom-0 top-1/3 overflow-hidden">
              <div
                className="absolute left-[-20%] bottom-[-10%] h-[65%] w-[90%] rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #3FF7EC, #55F5A3 50%, #E1FF25 80%, transparent 95%)",
                  animation: "ambientDrift 21s ease-in-out infinite",
                }}
              />
              <div
                className="absolute right-[-25%] top-[5%] h-[50%] w-[70%] rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, #00FFF0, transparent 70%)",
                  animation: "ambientDriftAlt 25s ease-in-out infinite",
                }}
              />
              {/* Vertical scrolling pill marquee of rails */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="relative h-full w-full overflow-hidden">
                  <div className="animate-scroll-pills flex flex-col items-center gap-3 py-4">
                    {[...rails, ...rails].map((rail, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/80 px-4 py-2 text-xs whitespace-nowrap text-black shadow-[0_2px_8px_rgba(0,0,0,0.06)] backdrop-blur-sm"
                      >
                        {rail}
                      </span>
                    ))}
                  </div>
                  {/* Top / bottom fade masks */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Small pill tags */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {pillTags.map((tag) => (
            <div
              key={tag}
              className="rounded-highnote bg-ash flex aspect-[3/2] flex-col items-center justify-center p-4"
            >
              <span className="text-center text-xs text-black">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
