"use client";

import { asset } from "@/lib/asset";

/**
 * The textured (fractal-noise) credit card shown in the first Credit section.
 * Reproduces highnote.com's CreditCard2 module: a noise-filled black card with a
 * contactless glyph, EMV chip, Visa mark and the Highnote logo, plus a soft glow
 * and drop shadow. On small screens the live card is hidden and a flat PNG is used.
 */
export default function CreditCardNoise() {
  return (
    <div className="relative mx-auto hidden pb-8 sm:block">
      <div className="group relative">
        <div className="relative h-[300px] w-[400px] overflow-hidden rounded-[20px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 400 300"
            width="400"
            height="300"
            opacity="1"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <filter
                id="nnnoise-filter"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="linearRGB"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.2"
                  numOctaves="4"
                  seed="15"
                  stitchTiles="stitch"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  result="turbulence"
                />
                <feSpecularLighting
                  surfaceScale="16"
                  specularConstant="1"
                  specularExponent="20"
                  lightingColor="#777"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="turbulence"
                  result="specularLighting"
                >
                  <feDistantLight azimuth="3" elevation="76" />
                </feSpecularLighting>
              </filter>
            </defs>
            <rect width="400" height="300" fill="#000000ff" />
            <rect width="400" height="300" fill="#777" filter="url(#nnnoise-filter)" />
          </svg>

          {/* Soft glow */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1/4 opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.25), transparent 55%)",
            }}
          />

          {/* Contactless + chip */}
          <span className="absolute top-6 left-6 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="23"
              width="28"
              fill="none"
              viewBox="0 0 28 23"
            >
              <path
                stroke="#333"
                strokeLinecap="round"
                strokeWidth="2.977"
                d="M1.488 5.457a24.806 24.806 0 0124.806 0M4.217 10.915a19.349 19.349 0 0119.349 0M6.721 16.123c2.15-1.228 4.588-1.875 7.07-1.875s4.92.647 7.07 1.875M9.426 21.333c1.34-.885 2.886-1.354 4.465-1.354s3.126.47 4.465 1.354"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="52"
              width="38"
              fill="none"
              viewBox="0 0 38 52"
            >
              <path
                fill="#999"
                fillRule="evenodd"
                d="M0 4a4 4 0 014-4h7.5a.5.5 0 01.5.5v15.306a.5.5 0 01-.658.475l-.765-.255a.5.5 0 00-.158-.026H.5a.5.5 0 01-.5-.5V4zm0 44a4 4 0 004 4h7.5a.5.5 0 00.5-.5V36.194a.5.5 0 00-.658-.475l-.765.255a.5.5 0 01-.158.026H.5a.5.5 0 00-.5.5V48zm.5-31a.5.5 0 00-.5.5v17a.5.5 0 00.5.5h9.419a.5.5 0 00.158-.026l2.846-.948a.5.5 0 01.158-.026H24.92a.5.5 0 01.158.026l2.846.948a.5.5 0 00.158.026H37.5a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-9.419a.5.5 0 00-.158.026l-2.846.948a.5.5 0 01-.158.026H13.08a.5.5 0 01-.158-.026l-2.846-.948A.5.5 0 009.919 17H.5zM13 .5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v16a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V.5zm.5 51.5a.5.5 0 01-.5-.5v-16a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v16a.5.5 0 01-.5.5h-11zM26 .5a.5.5 0 01.5-.5H34a4 4 0 014 4v11.5a.5.5 0 01-.5.5h-9.919a.5.5 0 00-.158.026l-.765.255a.5.5 0 01-.658-.475V.5zm.5 51.5a.5.5 0 01-.5-.5V36.194a.5.5 0 01.658-.475l.765.255a.5.5 0 00.158.026H37.5a.5.5 0 01.5.5V48a4 4 0 01-4 4h-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          {/* Visa mark */}
          <span className="absolute right-6 bottom-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="27"
              width="86"
              fill="none"
              viewBox="0 0 86 27"
            >
              <path
                fill="#333"
                d="M44.477 8.632c-.049 3.76 3.448 5.86 6.082 7.108 2.706 1.28 3.615 2.101 3.605 3.246-.02 1.752-2.16 2.526-4.16 2.556-3.492.053-5.522-.917-7.136-1.65l-1.257 5.722c1.619.726 4.617 1.358 7.726 1.386 7.298 0 12.073-3.502 12.099-8.933.028-6.892-9.806-7.274-9.738-10.354.023-.934.94-1.93 2.949-2.184.994-.129 3.74-.226 6.85 1.167L62.72 1.16C61.046.567 58.895 0 56.217 0c-6.87 0-11.701 3.55-11.74 8.632zM74.457.477c-1.333 0-2.456.756-2.957 1.916l-10.426 24.2h7.293l1.451-3.899h8.913l.841 3.9H86L80.391.476h-5.934zm1.02 7.055l2.104 9.807h-5.764l3.66-9.807zM35.635.477l-5.749 26.116h6.95L42.582.477h-6.947zm-10.28 0L18.12 18.253 15.195 3.138c-.344-1.687-1.7-2.661-3.205-2.661H.165L0 1.235c2.428.512 5.186 1.339 6.856 2.222 1.023.54 1.315 1.012 1.65 2.295l5.543 20.841h7.344L32.653.477h-7.299z"
              />
            </svg>
          </span>

          {/* Highnote logo */}
          <span className="absolute top-6 right-6">
            <svg
              width="79"
              height="20"
              viewBox="0 0 79 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="8.66016" y="3.17065" width="2" height="17" transform="rotate(-30 8.66016 3.17065)" fill="white" />
              <rect x="10.3926" y="2.17035" width="2" height="12" transform="rotate(60 10.3926 2.17035)" fill="white" />
              <rect x="9.42773" y="8.50049" width="2" height="8" transform="rotate(60 9.42773 8.50049)" fill="white" />
              <rect x="15.3926" y="10.8306" width="2" height="12" transform="rotate(60 15.3926 10.8306)" fill="white" />
              <rect x="21.5527" y="1.5" width="2" height="12" transform="rotate(60 21.5527 1.5)" fill="white" />
              <rect x="24.0527" y="5.83093" width="2" height="8" transform="rotate(60 24.0527 5.83093)" fill="white" />
              <rect x="26.5527" y="10.1611" width="2" height="12" transform="rotate(60 26.5527 10.1611)" fill="white" />
              <path d="M36.9805 7.99999V6.94999H33.1105V4.94999H36.5005V3.89999H33.1105V1.90999H36.9405V0.859985H31.8105V7.99999H36.9805Z" fill="white" />
              <path d="M40.5028 7.99999H41.9828L44.8128 0.859985H43.4628L41.2828 6.57999H41.2628L39.0928 0.859985H37.6828L40.5028 7.99999Z" fill="white" />
              <path d="M50.9161 7.99999V6.94999H47.0461V4.94999H50.4361V3.89999H47.0461V1.90999H50.8761V0.859985H45.7461V7.99999H50.9161Z" fill="white" />
              <path d="M53.6184 7.99999V5.32999H55.2184L56.8484 7.99999H58.2984L56.5084 5.12999C57.3184 4.86999 58.0284 4.20999 58.0284 3.09999C58.0284 1.63999 57.0484 0.859985 55.3784 0.859985H52.3184V7.99999H53.6184ZM53.6184 4.28999V1.90999H55.2284C56.2184 1.90999 56.7184 2.31999 56.7184 3.09999C56.7184 3.87999 56.2184 4.28999 55.2284 4.28999H53.6184Z" fill="white" />
              <path d="M62.6515 7.99999V5.06999L65.4215 0.859985H63.9715L62.0415 3.90999H62.0215L60.0415 0.859985H58.5615L61.3215 5.06999V7.99999H62.6515Z" fill="white" />
              <path d="M36.9805 19V17.95H33.1105V15.95H36.5005V14.9H33.1105V12.91H36.9405V11.86H31.8105V19H36.9805Z" fill="white" />
              <path d="M43.2628 19H44.7728L41.9328 15.2L44.4528 11.86H43.0528L41.2428 14.3L39.4428 11.86H37.9328L40.4828 15.29L37.6828 19H39.0828L41.1728 16.2L43.2628 19Z" fill="white" />
              <path d="M48.6573 16.37C50.3373 16.37 51.3173 15.61 51.3173 14.12C51.3173 12.63 50.3373 11.86 48.6473 11.86H45.6973V19H46.9973V16.37H48.6573ZM46.9973 15.33V12.91H48.5373C49.5173 12.91 50.0073 13.3 50.0073 14.12C50.0073 14.93 49.5173 15.33 48.5373 15.33H46.9973Z" fill="white" />
              <path d="M57.6153 19V17.95H53.7453V15.95H57.1353V14.9H53.7453V12.91H57.5753V11.86H52.4453V19H57.6153Z" fill="white" />
              <path d="M60.5676 11.86H59.0176V19H60.2876V13.47H60.3076L63.9776 19H65.2076V11.86H63.9476V16.92H63.9276L60.5676 11.86Z" fill="white" />
              <path d="M66.3601 16.84C66.4901 18.41 67.8001 19.12 69.5001 19.12C71.0801 19.12 72.2701 18.26 72.2701 16.96C72.2701 15.81 71.5701 15.23 70.4001 15.01L69.0201 14.74C68.2501 14.59 67.8801 14.4 67.8801 13.81C67.8801 13.18 68.4201 12.73 69.2801 12.73C70.1701 12.73 70.7901 13.12 70.8801 13.82H72.1301C71.9901 12.48 70.9701 11.74 69.2701 11.74C67.7101 11.74 66.5901 12.62 66.5901 13.89C66.5901 15.14 67.4401 15.64 68.4901 15.83L69.8001 16.07C70.6601 16.23 70.9701 16.52 70.9701 17.04C70.9701 17.76 70.3101 18.14 69.4601 18.14C68.5701 18.14 67.7301 17.81 67.6401 16.84H66.3601Z" fill="white" />
              <path d="M78.67 19V17.95H74.8V15.95H78.19V14.9H74.8V12.91H78.63V11.86H73.5V19H78.67Z" fill="white" />
            </svg>
          </span>
        </div>
        {/* Drop shadow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 bottom-0 h-8 rounded-full bg-black/30 blur-2xl"
        />
      </div>
      {/* Mobile fallback handled by the parent via <img> */}
      <span className="sr-only">Highnote credit card</span>
      <noscript>
        <img alt="" src={asset("/img/credit-card.png")} />
      </noscript>
    </div>
  );
}
