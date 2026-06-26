"use client";

import { asset } from "@/lib/asset";

const interests = [
  "Issuing (Card Programs)",
  "Acquiring (Payment Acceptance)",
  "Credit Programs",
  "Money Movement (ACH, RTP, Push-to-Card)",
  "Stablecoin & Digital Asset Settlement",
  "Not Sure Yet",
];

const volumes = [
  "Less than $100K per month",
  "$100K – $500K per month",
  "$500K – $1M per month",
  "$1M – $10M per month",
  "$10M – $50M per month",
  "$50M+ per month",
  "Not Sure Yet",
];

const timelines = [
  "Researching options",
  "Planning within 6–12 months",
  "Planning within 3–6 months",
  "Ready to launch now",
  "Existing program, exploring switch",
];

export default function ContactCTA() {
  return (
    <section
      className="relative overflow-hidden px-5 pt-10 pb-40 antialiased"
      data-testid="contact-form-cta"
    >
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
                  values="
                    M120 349.862L1187.22 120L2254.43 382.699L3321.65 218.512L4388.86 448.374V908.097H120Z;
                    M120 180L1187.22 420L2254.43 150L3321.65 480L4388.86 250V908.097H120Z;
                    M120 480L1187.22 100L2254.43 500L3321.65 120L4388.86 520V908.097H120Z;
                    M120 349.862L1187.22 120L2254.43 382.699L3321.65 218.512L4388.86 448.374V908.097H120Z
                  "
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
      <div className="relative z-10 mx-auto grid max-w-screen-xl items-start gap-10 pt-16 sm:pt-20 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="font-display max-w-xl pb-5 text-2xl sm:text-3xl lg:text-4xl">
            Expense Management Software Is the Product. Highnote Is the
            Infrastructure.
          </h2>
          <p className="max-w-lg text-sm leading-relaxed opacity-70">
            Expense management software is what employees use. The programmable
            spend infrastructure underneath it is what companies build: governed
            card issuance, programmable spend controls, and unified ledger
            visibility. Build yours on Highnote.
          </p>
        </div>
        <div className="rounded-highnote bg-white p-6 md:p-10">
          <form>
            <div className="grid grid-cols-1 gap-3">
              <fieldset className="col-span-1">
                <legend className="formLabel cursor-pointer">
                  What are you interested in?
                </legend>
                <div className="grid gap-2 py-2">
                  {interests.map((label) => (
                    <label
                      key={label}
                      className="flex cursor-pointer items-center gap-2 text-xs"
                    >
                      <div className="relative flex shrink-0 items-center justify-center">
                        <input
                          className="peer border-ash h-5 w-5 cursor-pointer appearance-none rounded border checked:border-black checked:bg-black"
                          type="checkbox"
                          value={label}
                          name="productInterest"
                        />
                        <svg
                          className="pointer-events-none absolute hidden h-3 w-3 peer-checked:block"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 6L5 9L10 3"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="col-span-1">
                <label
                  className="formLabel inline-flex cursor-pointer items-center gap-1"
                  htmlFor="cta-processingVolume"
                >
                  Estimated Monthly Payment or Fund Flow Volume
                  <span
                    aria-label="More information about volume"
                    className="flex items-center opacity-40"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </span>
                </label>
                <select
                  className="baseInput p-3 text-xs"
                  id="cta-processingVolume"
                  required
                  name="processingVolume"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  {volumes.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label
                  className="formLabel cursor-pointer"
                  htmlFor="cta-programTimeline"
                >
                  When are you planning to launch or migrate?
                </label>
                <select
                  className="baseInput p-3 text-xs"
                  id="cta-programTimeline"
                  required
                  name="programTimeline"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-10">
              <button
                className="button button-black-arrow group h-12 w-full"
                type="submit"
              >
                Continue
                <img
                  alt=""
                  className="absolute right-4 inline-block translate-x-1 duration-200 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                  src={asset("/img/white-arrow-icon.svg")}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
