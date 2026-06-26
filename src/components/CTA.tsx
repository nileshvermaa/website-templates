import { asset } from "@/lib/asset";

export default function CTA() {
  return (
    <section className="bg-bone relative overflow-hidden px-5 pt-10 pb-40 antialiased sm:pt-10">
      <div className="absolute -right-20 -bottom-20 -left-20 z-0">
        <div
          aria-hidden="true"
          className="pointer-events-none relative w-full"
          style={{ height: "280px" }}
        >
          <div
            className="absolute inset-x-0 bottom-0 lg:hidden"
            style={{
              height: "70%",
              background:
                "linear-gradient(to right, rgba(225, 255, 37, 0.45), rgba(85, 245, 163, 0.55), rgba(63, 247, 236, 0.45))",
              filter: "blur(24px)",
            }}
          />
          <svg
            viewBox="0 0 4509 1029"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 hidden h-full w-full lg:block"
          >
            <defs>
              <filter
                id="ambBlur"
                x="0"
                y="0"
                width="4508.86"
                height="1028.1"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur" />
              </filter>
              <linearGradient
                id="ambGrad"
                x1="120"
                y1="546.886"
                x2="4388.86"
                y2="546.886"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.338752" stopColor="#E1FF25" stopOpacity="0.8" />
                <stop offset="0.5" stopColor="#55F5A3" />
                <stop offset="0.612937" stopColor="#3FF7EC" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <g filter="url(#ambBlur)">
              <path fill="url(#ambGrad)">
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1; 0.45 0 0.55 1; 0.45 0 0.55 1"
                  values=" M120 349.862L1187.22 120L2254.43 382.699L3321.65 218.512L4388.86 448.374V908.097H120Z; M120 180L1187.22 420L2254.43 150L3321.65 480L4388.86 250V908.097H120Z; M120 480L1187.22 100L2254.43 500L3321.65 120L4388.86 520V908.097H120Z; M120 349.862L1187.22 120L2254.43 382.699L3321.65 218.512L4388.86 448.374V908.097H120Z "
                />
              </path>
            </g>
          </svg>
          <div
            className="pointer-events-none absolute inset-x-0 top-0"
            style={{
              height: "55%",
              background: "linear-gradient(rgb(245, 243, 235), transparent)",
            }}
          />
        </div>
      </div>
      <div className="border-ash relative z-10 mx-auto max-w-screen-xl border-t pt-16 text-center sm:pt-28">
        <h2 className="font-display mx-auto max-w-3xl text-4xl lg:text-7xl">
          Build what&apos;s next
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[18px] leading-relaxed text-black/60">
          Highnote gives you the foundation to launch faster, differentiate, and
          keep moving.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            className="button button-black-arrow group"
            href="https://dashboard.highnote.com/auth/signin?screen_hint=signup"
          >
            Explore the Platform
            <img
              alt=""
              className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
              loading="lazy"
              src={asset("/img/white-arrow-icon.svg")}
            />
          </a>
          <a className="button button-white-arrow group" href="/contact">
            Talk to an Expert
            <img
              alt=""
              className="absolute right-4 inline-block translate-x-1 opacity-0 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
              loading="lazy"
              src={asset("/img/black-arrow-icon.svg")}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
