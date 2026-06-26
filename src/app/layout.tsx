import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Helvetica Now Display — headings (self-hosted from highnote.com)
const display = localFont({
  variable: "--hn-display",
  display: "swap",
  src: [
    { path: "../../public/fonts/HelveticaNowDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/HelveticaNowDisplay-Medium.woff2", weight: "500", style: "normal" },
  ],
});

// Helvetica Now Text — body
const text = localFont({
  variable: "--hn-text",
  display: "swap",
  src: [
    { path: "../../public/fonts/HelveticaNowText-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/HelveticaNowText-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/HelveticaNowText-Bold.woff2", weight: "700", style: "normal" },
  ],
});

// Space Mono — code blocks
const mono = localFont({
  variable: "--hn-mono",
  display: "swap",
  src: [{ path: "../../public/fonts/SpaceMono-Regular.woff2", weight: "400", style: "normal" }],
});

export const metadata: Metadata = {
  title: "Highnote | Built for You",
  description:
    "Launch and scale modern financial products on one platform for issuing, acquiring, credit, money movement, and real-time ledgering. Built around your business, your customers, and your roadmap.",
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/seo/favicon.svg` },
  openGraph: {
    title: "Highnote | Built for You",
    description:
      "Launch and scale modern financial products on one platform for issuing, acquiring, credit, money movement, and real-time ledgering.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${text.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-black">{children}</body>
    </html>
  );
}
