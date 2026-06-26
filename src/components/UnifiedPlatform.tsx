export default function UnifiedPlatform() {
  return (
    <section className="bg-bone px-5 pb-10 antialiased md:pb-16">
      <div className="hidden lg:block">
        <div>
          <svg
            viewBox="0 0 1280 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="18"
                markerHeight="14"
                refX="9"
                refY="7"
                orient="auto"
              >
                <path
                  d="M0,0 L9,7 L0,14"
                  fill="none"
                  stroke="#e2e0d6"
                  strokeWidth="1.5"
                />
              </marker>
            </defs>
            <path d="M75,0 C75,140 640,120 640,240" pathLength="600" />
            <path d="M75,0 C75,140 640,120 640,240" pathLength="600" />
            <path d="M236,0 C236,120 640,100 640,240" pathLength="600" />
            <path d="M236,0 C236,120 640,100 640,240" pathLength="600" />
            <path d="M398,0 C398,100 640,80 640,240" pathLength="600" />
            <path d="M398,0 C398,100 640,80 640,240" pathLength="600" />
            <path d="M559,0 C559,80 640,60 640,240" pathLength="600" />
            <path d="M559,0 C559,80 640,60 640,240" pathLength="600" />
            <path d="M721,0 C721,80 640,60 640,240" pathLength="600" />
            <path d="M721,0 C721,80 640,60 640,240" pathLength="600" />
            <path d="M882,0 C882,100 640,80 640,240" pathLength="600" />
            <path d="M882,0 C882,100 640,80 640,240" pathLength="600" />
            <path d="M1044,0 C1044,120 640,100 640,240" pathLength="600" />
            <path d="M1044,0 C1044,120 640,100 640,240" pathLength="600" />
            <path d="M1205,0 C1205,140 640,120 640,240" pathLength="600" />
            <path d="M1205,0 C1205,140 640,120 640,240" pathLength="600" />
          </svg>
        </div>
      </div>
      <div className="lg:hidden">
        <div>
          <svg
            viewBox="0 0 320 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <path d="M48,0 C48,58 112,72 160,108" />
            <path d="M272,0 C272,58 208,72 160,108" />
            <path d="M48,0 C48,58 112,72 160,108" pathLength="320" />
            <path d="M272,0 C272,58 208,72 160,108" pathLength="320" />
          </svg>
        </div>
      </div>
      <div className="relative mx-auto max-w-screen-xl text-center">
        <div className="mx-auto mb-6 h-[100px] w-[100px]">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <defs>
              <clipPath id="unifiedCircleClip">
                <circle cx="20" cy="20" r="19.799" transform="rotate(45 20 20)" />
              </clipPath>
              <filter id="unifiedBlobBlur">
                <feGaussianBlur stdDeviation="6" />
              </filter>
              <linearGradient
                id="unifiedMobileGradient"
                x1="0"
                y1="0"
                x2="40"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#3FF7EC" />
                <stop offset="50%" stopColor="#55F5A3" />
                <stop offset="100%" stopColor="#E1FF25" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="19.799" transform="rotate(45 20 20)" />
            <g clipPath="url(#unifiedCircleClip)" filter="url(#unifiedBlobBlur)">
              <circle cx="14" cy="12" r="12" fill="#3FF7EC" />
              <circle cx="28" cy="24" r="14" fill="#E1FF25" />
              <circle cx="10" cy="28" r="10" fill="#55F5A3" />
              <circle cx="26" cy="10" r="9" fill="#3FF7EC" />
              <circle cx="20" cy="20" r="16" fill="rgba(255,255,255,0.1)" />
            </g>
            <path
              d="M21.7783 18.0569C22.7576 19.0362 22.7576 20.624 21.7783 21.6033C20.7989 22.5826 19.2112 22.5826 18.2318 21.6033C17.2525 20.624 17.2525 19.0362 18.2318 18.0569C19.2112 17.0775 20.7989 17.0775 21.7783 18.0569Z"
              fill="black"
            />
            <path
              d="M29.6346 22.3521C30.3028 22.3729 30.9617 22.1158 31.4717 21.6058C32.4501 20.6274 32.4501 19.0391 31.4707 18.0596C30.4923 17.0813 28.9039 17.0813 27.9256 18.0596C27.4155 18.5697 27.1335 19.266 27.1782 19.9248C27.2115 20.5348 27.0762 21.1468 26.6183 21.6047C26.1603 22.0627 25.5316 22.1439 24.8978 22.1637C24.2947 22.1405 23.7238 22.3474 23.246 22.7527C23.1902 22.7995 23.136 22.8492 23.0836 22.9016C23.0817 22.9035 23.0797 22.9055 23.0778 22.9074C23.0763 22.9089 23.0747 22.9105 23.0732 22.912C22.9406 23.0446 22.8261 23.1882 22.7295 23.34C22.4479 23.7761 22.3041 24.281 22.3362 24.7668C22.3696 25.3767 22.2342 25.9887 21.7763 26.4467C21.3183 26.9047 20.6896 26.9859 20.0558 27.0056C19.3782 26.9796 18.7412 27.244 18.2312 27.754C17.2528 28.7324 17.2528 30.3207 18.2333 31.2991C19.2117 32.2775 20.7989 32.2785 21.7784 31.2991C22.2884 30.7891 22.5517 30.099 22.5215 29.4339C22.5163 28.8625 22.6266 28.2109 23.0846 27.753C23.5426 27.295 24.115 27.1805 24.7656 27.194H24.7926C25.3167 27.2104 25.835 27.0558 26.2802 26.7423C26.3998 26.6589 26.5137 26.5638 26.6203 26.4571C26.6221 26.4554 26.6239 26.4536 26.6257 26.4518C26.627 26.4504 26.6284 26.4491 26.6297 26.4478C26.8864 26.1911 27.0758 25.8926 27.1978 25.5743C27.3213 25.2573 27.3785 24.9216 27.3635 24.5919C27.3583 24.0205 27.4686 23.369 27.9266 22.911C28.3846 22.453 28.957 22.3385 29.6076 22.3521L29.6346 22.3521Z"
              fill="black"
            />
            <path
              d="M19.9381 12.6556C20.6063 12.6764 21.2652 12.4193 21.7752 11.9093C22.7536 10.9309 22.7536 9.34256 21.7741 8.36314C20.7957 7.38475 19.2074 7.38475 18.229 8.36314C17.719 8.87315 17.437 9.56947 17.4817 10.2283C17.515 10.8383 17.3797 11.4503 16.9217 11.9082C16.4638 12.3662 15.8351 12.4474 15.2012 12.4672C14.5982 12.444 14.0273 12.6509 13.5494 13.0562C13.4937 13.103 13.4395 13.1527 13.387 13.2051C13.3851 13.207 13.3832 13.209 13.3813 13.2109C13.3797 13.2124 13.3782 13.214 13.3766 13.2155C13.2441 13.348 13.1296 13.4917 13.0329 13.6434C12.7513 14.0796 12.6075 14.5845 12.6397 15.0703C12.673 15.6802 12.5377 16.2922 12.0798 16.7502C11.6218 17.2082 10.9931 17.2894 10.3592 17.3091C9.68166 17.2831 9.04467 17.5475 8.53466 18.0575C7.55627 19.0359 7.55627 20.6242 8.53674 21.6026C9.51513 22.581 11.1024 22.582 12.0818 21.6026C12.5918 21.0926 12.8552 20.4025 12.825 19.7374C12.8198 19.166 12.9301 18.5144 13.3881 18.0565C13.8461 17.5985 14.4185 17.484 15.069 17.4975H15.0961C15.6202 17.5139 16.1384 17.3593 16.5837 17.0458C16.7032 16.9624 16.8171 16.8673 16.9238 16.7606C16.9256 16.7588 16.9274 16.7571 16.9291 16.7553C16.9305 16.7539 16.9318 16.7526 16.9332 16.7513C17.1899 16.4946 17.3792 16.1961 17.5013 15.8778C17.6248 15.5608 17.6819 15.2251 17.667 14.8954C17.6618 14.324 17.7721 13.6725 18.2301 13.2145C18.688 12.7565 19.2605 12.642 19.911 12.6556H19.9381Z"
              fill="black"
            />
          </svg>
        </div>
        <h2 className="font-display mx-auto pb-5 text-2xl lg:text-6xl">
          Built on a Unified Platform
        </h2>
        <p className="mx-auto max-w-lg text-sm opacity-60 md:text-base">
          Most platforms were assembled. Highnote was built as one.
        </p>
        <div className="mx-auto mt-12 grid max-w-xs grid-cols-1 gap-8 sm:grid-cols-3 md:max-w-3xl">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-8 w-8 items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M11.375 2.625H16.625"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M23.625 15.1667C23.625 20.4824 19.3157 24.7917 14 24.7917C8.68426 24.7917 4.375 20.4824 4.375 15.1667C4.375 9.85093 8.68426 5.54167 14 5.54167C19.3157 5.54167 23.625 9.85093 23.625 15.1667Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 15.1667L10.5 11.6667"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-xs font-medium">Launch Faster</h3>
            <p className="mt-2 max-w-xs text-xs leading-relaxed opacity-60">
              Go live without coordinating multiple providers or waiting on
              fragmented systems.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-8 w-8 items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M13.125 8.75C13.125 10.8211 11.4461 12.5 9.375 12.5C7.30394 12.5 5.625 10.8211 5.625 8.75C5.625 6.67894 7.30394 5 9.375 5C11.4461 5 13.125 6.67894 13.125 8.75Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.875 25H16.875C16.0526 13.3334 2.6974 13.3334 1.875 25Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g>
                  <path
                    d="M24.375 8.75C24.375 10.8211 22.6961 12.5 20.625 12.5C18.5539 12.5 16.875 10.8211 16.875 8.75C16.875 6.67894 18.5539 5 20.625 5C22.6961 5 24.375 6.67894 24.375 8.75Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.0928 16.4339C23.0756 15.4656 27.654 18.321 28.1249 25H21.875"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-xs font-medium">Differentiate Easily</h3>
            <p className="mt-2 max-w-xs text-xs leading-relaxed opacity-60">
              Design experiences around your customers, not platform constraints.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-8 w-8 items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 21.3339L6.66667 26.6673"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33333 14.6673L4 20.0006"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.3333 21.3339L16 26.6673"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="animate-spin-slow"
                  style={{ transformOrigin: "20.6667px 9.9031px" }}
                  d="M20.6667 2.66699L23.3 7.04259L28.2751 8.19486L24.9273 12.0514L25.3689 17.1391L20.6667 15.147L15.9644 17.1391L16.406 12.0514L13.0582 8.19486L18.0333 7.04259L20.6667 2.66699Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xs font-medium">Keep Innovating</h3>
            <p className="mt-2 max-w-xs text-xs leading-relaxed opacity-60">
              Add new capabilities and expand into new products without rebuilding
              your foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
