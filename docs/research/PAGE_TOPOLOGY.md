# highnote.com — Page Topology (homepage)

Single long scroll page. Body background `bone` (#F5F3EB) throughout except dark footer.
No sticky/fixed navbar — nav scrolls away with the page. Tailwind + Next.js source
(class strings are near-spec; we port to our Tailwind v4 scaffold). Raw per-section
HTML saved in `docs/research/highnote.com/<name>.html`.

Container width: `max-w-screen-xl` (1280px) centered, `px-5` gutters.

| # | Component | Section classes | ~Height@1440 | Heading |
|---|-----------|-----------------|------|---------|
| 0 | **Hero** (wrapper holds Announcement + Navbar + Orb + headline) | `bg-bone relative flex h-[700px] md:h-[800px] flex-col overflow-hidden` | 800 | h1 "The only payments platform built for you." (rotating word) |
| 1 | **LogoBar** | `bg-bone flex w-full flex-col pt-2 pb-10` | 244 | "Trusted by the companies building what's next in payments" |
| 2 | **Products** | `bg-bone px-5 pt-16 pb-0` | 1011 | "Everything you need to launch fast, differentiate, and keep innovating" |
| 3 | **UnifiedPlatform** | `bg-bone px-5 pb-10 md:pb-16` | 752 | "Built on a Unified Platform" |
| 4 | **Industry** | `bg-bone px-5 pt-10 pb-10 md:pb-20` | 1294 | "Built for your industry" |
| 5 | **Customers** | `bg-bone px-5 pt-16 pb-10 sm:pt-10 md:pb-20` | 1172 | "Built with the companies leading what's next" |
| 6 | **Developer** | `bg-bone px-5 pt-10 pb-10 md:pb-20` | 993 | "A developer platform built for the future" |
| 7 | **Insights** | `bg-bone px-5 pt-16 pb-20 sm:pt-10` | 809 | "Insights for builders" |
| 8 | **CTA** | `bg-bone relative overflow-hidden px-5 pt-10 pb-40` | 590 | "Build what's next" (orb gradient bg again) |
| 9 | **Footer** | `bg-blackBG px-5 pt-16 pb-16 text-white` | 678 | 5 link columns + legal |

Shared: **Navbar** (logo, Products▾ UseCases▾ Customers Company▾ Docs Pricing, Log In, Contact Sales)
and **Announcement bar** live inside the Hero wrapper (so the orb shows behind them).

## Interaction models
- **Hero orb**: pure CSS/SVG animation (riseIn + infinite drift). Static otherwise.
- **Hero headline**: time-driven rotating word (rotateWord keyframe, ~cycle through Issuing/Acquiring/Credit/Money Movement/Real-Time Ledgering/Highnote → "Built for You.").
- **LogoBar**: infinite marquee (translateX -50%).
- **Products cards**: each card has an ambientDrift floating gradient-blob animation + hover. MoneyMovement card has a vertical scrollPills marquee.
- **Industry / Insights / Customers cards**: static + hover (lift/arrow shift). Customers has 2 hover-to-play video cards.
- **Most sections**: `fadeup` on scroll-into-view (opacity/blur/translateY).
- Nav dropdowns: hover/click mega-menus (lower priority; approximate from footer link groups).
