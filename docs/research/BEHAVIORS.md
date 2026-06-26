# highnote.com — Behaviors & Animations (the behavior bible)

All keyframes extracted verbatim from the live site's CSS. Reimplement these in
`globals.css` (rename to plain names). Easing for entrances: `cubic-bezier(0.16, 1, 0.3, 1)`.

## Design tokens
- `bone` (page bg): `#F5F3EB` (rgb 245,243,235)
- `blackBG` (footer): `#111111` (rgb 17,17,17)
- `ash` (icon chips / code header): `#E2E0D6` (rgb 226,224,214)
- Text: black; muted body text `text-black/70`.
- Fonts: **Helvetica Now Display** (`font-display`, headings, wt 400/500), **Helvetica Now Text** (body, wt 400/500/700), **Space Mono** (code, wt 400). All self-hosted woff2 (downloaded).

## Hero orb (signature)
9 concentric `<circle>`s at center (720,700), radii 1000→300, each = cyan base `#00FFF0`
+ 2 linear gradients (greens `#55F5A3`, yellow-green `#E1FF25`). Full SVG in
`docs/research/highnote.com/heroorb.json` (port verbatim). Wrapped in mask `heroOrbMask`
(rect, mask-type alpha). Bottom 240px = `fadeOut` div `linear-gradient(rgba(0,0,0,0), #F5F3EB)`.
Each ring `<g>` animation:
- `riseIn`: `2.6s cubic-bezier(0.16,1,0.3,1) [stagger 0–0.4s] forwards` — `0%{opacity:0;transform:translateY(var(--y,60px))} 100%{opacity:1;transform:translateY(0)}`
- `drift`: `22–32s ease-in-out [delay 2.6–3s] infinite` — `0%{translate:0} 25%{translate:var(--dx,10px) var(--dy,-8px)} 50%{translate:calc(var(--dx)*-.6) calc(var(--dy)*-.8)} 75%{translate:calc(var(--dx)*.8) calc(var(--dy)*.5)} 100%{translate:0}`

## Hero headline rotating word
`rotateWord`: `0%{opacity:0;transform:translateY(80%)} 2%{opacity:1;translateY(0)} 15%{opacity:1;translateY(0)} 17.5%{opacity:0;translateY(-40%)} 100%{opacity:0;translateY(-40%)}`
(rotateWordLast ends 16.67%). Words cycle: **Issuing, Acquiring, Credit, Money Movement, Real-Time Ledgering, Highnote**, then static "Built for You." line below. Each word staggered so one shows at a time, full cycle then repeat.

## Marquee (LogoBar)
`marquee`: `0%{transform:translateZ(0)} 100%{transform:translate(-50%)}` (and `marqueereverse` → translate(50%)). Track duplicated x2, infinite linear, ~30–40s.

## Scroll-into-view
`fadeup`: `0%{opacity:0;filter:blur(2px);transform:translateY(1rem)} 100%{opacity:1;filter:blur(0);transform:translateY(0)}` — applied to section blocks as they enter viewport (IntersectionObserver). Safe to apply once.

## Product card ambient drift (floating gradient blobs inside cards)
`ambientDrift` (Issuing/Acquiring/Credit/MoneyMovement, slightly different per card):
`0%{translate/scale/rotate 0} …16/33/50/66/83%… 100%` wandering translate(±20–55px) scale(0.82–1.3) rotate(±12deg). Long duration, ease-in-out infinite. Blobs are blurred radial gradients clipped by the card's rounded container (`overflow-hidden`).
- MoneyMovement also: `scrollPills` `0%{translateY(0)} 100%{translateY(-50%)}` — vertical pill marquee (Check/Wire/ACH/RTP·FedNow/OCT/Stablecoin/AFT/Payouts, list duplicated).

## Icon spins (UnifiedPlatform)
`spin`/`InnovatingIcon spin`: `100%{transform:rotate(360deg)}` — the "Keep Innovating" icon rotates.

## Hover states
- Primary pill button (`bg-black text-white rounded-full px-6 py-2`): subtle bg lighten on hover, 200ms.
- Announcement bar: `bg-black/5 → bg-black/10`; trailing arrow `ml-1 → ml-2` (200ms).
- Cards (Products/Industry/Insights): lift / arrow icon translate-x on `group-hover`, 200ms.
- "View …" text links: arrow `translate-x-0 → translate-x` + opacity on group-hover.

## Navbar
NOT sticky — `position: relative`, transparent, scrolls away. Height ~71px. Announcement bar above it (`bg-black/5`, text-xs, h 38px).

## Responsive
- Desktop 1440 / Tablet 768 / Mobile 390. Hero h `700px` (`md:800px`); h1 `text-[11vw] md:text-6xl lg:text-[100px]`.
- Products: 4-col grid → stacks. Industry: multi-col → 1 col. Developer: 2-col (features | code) → stacked. Footer: 5-col → wrap/stack.
- Standard Tailwind `sm: md: lg:` breakpoints (640/768/1024).
