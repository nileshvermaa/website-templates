"use client";

import { useState } from "react";
import Image from "next/image";
import { HamburgerIcon, CloseIcon } from "@/components/icons";

type Item = { label: string; href: string; sub?: string };

const PRODUCTS: Item[] = [
  { label: "Issuing", href: "/products/issuing", sub: "Issue Cards" },
  { label: "Acquiring", href: "/products/acquiring", sub: "Accept Payments" },
  { label: "Unified Payments", href: "/products/unified-payments", sub: "Issue cards and accept payments" },
  { label: "Credit", href: "/products/credit", sub: "Run a Credit Program" },
];

const USE_CASES: Item[] = [
  { label: "Agentic Commerce", href: "/solutions/agentic-commerce" },
  { label: "AP & Bill Pay", href: "/solutions/ap-automation" },
  { label: "Fleet", href: "/solutions/fleet" },
  { label: "Money Movement", href: "/solutions/money-movement" },
  { label: "Spend Management", href: "/solutions/spend-management" },
  { label: "Embedded Finance", href: "/solutions/embedded-finance" },
  { label: "Branded Credit", href: "/solutions/branded-credit" },
  { label: "Travel", href: "/solutions/travel" },
  { label: "Vertical SaaS", href: "/solutions/saas" },
  { label: "Ecommerce", href: "/solutions/ecommerce" },
  { label: "Corporate Disbursements", href: "/solutions/disbursements" },
];

const COMPANY: Item[] = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Press", href: "/press" },
];

function Dropdown({ label, items, width }: { label: string; items: Item[]; width: string }) {
  return (
    <div className="rounded-highnote group relative mx-0.5 block cursor-pointer px-3 py-2.5 text-xs whitespace-nowrap hover:bg-white/90">
      <div>{label}</div>
      <div className="absolute h-5 w-full bg-transparent" />
      <div
        className={`invisible absolute mt-4 -ml-1 ${width} -translate-x-2 -translate-y-2 rounded-xl bg-white px-1 py-1 opacity-0 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] duration-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100`}
      >
        {items.map((it) => (
          <a key={it.label} className="hover:bg-bone flex items-center rounded-lg px-2 py-1.5" href={it.href}>
            {it.sub ? (
              <div>
                <div className="pb-0.5 font-medium">{it.label}</div>
                <div className="text-xxs opacity-70">{it.sub}</div>
              </div>
            ) : (
              <span className="font-medium">{it.label}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative z-20 w-full bg-transparent">
      <div className="px-5">
        <div className="relative mx-auto max-w-screen-xl">
          <div className="flex items-center justify-between py-4">
            <div className="mr-6 flex items-center">
              <div className="mr-5">
                <a href="/" aria-label="Highnote">
                  <Image alt="Highnote" width={153} height={40} src="/img/highnote-black.svg" priority />
                </a>
              </div>
              {/* desktop nav */}
              <nav className="hidden items-center lg:flex">
                <Dropdown label="Products" items={PRODUCTS} width="w-64" />
                <Dropdown label="Use Cases" items={USE_CASES} width="w-56" />
                <a className="rounded-highnote mx-0.5 block cursor-pointer px-3 py-2.5 text-xs whitespace-nowrap hover:bg-white/90" href="/customers">
                  Customers
                </a>
                <Dropdown label="Company" items={COMPANY} width="w-48" />
                <a className="rounded-highnote mx-0.5 block cursor-pointer px-3 py-2.5 text-xs whitespace-nowrap hover:bg-white/90" href="https://docs.highnote.com">
                  Docs
                </a>
                <a className="rounded-highnote mx-0.5 block cursor-pointer px-3 py-2.5 text-xs whitespace-nowrap hover:bg-white/90" href="/pricing">
                  Pricing
                </a>
              </nav>
            </div>
            <div className="hidden items-center justify-end text-xs lg:flex">
              <a className="rounded-highnote mr-1.5 ml-0.5 block cursor-pointer bg-white/90 px-4 py-2.5 text-xs whitespace-nowrap duration-200 hover:bg-white" href="https://dashboard.highnote.com/auth/signin">
                Log In
              </a>
              <a className="rounded-highnote mr-1.5 ml-0.5 block cursor-pointer bg-black px-4 py-2.5 text-xs whitespace-nowrap text-white duration-100 hover:bg-black/90" href="/contact">
                Contact Sales
              </a>
            </div>
            {/* mobile toggle */}
            <div className="absolute top-0 right-1 order-last flex h-full items-center lg:hidden">
              <button className="p-3" type="button" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
                {open ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div className="lg:hidden">
          <div className="mx-5 mb-4 rounded-xl bg-white px-2 py-3 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)]">
            {[...PRODUCTS, ...USE_CASES.slice(0, 4)].map((it) => (
              <a key={it.label} href={it.href} className="hover:bg-bone block rounded-lg px-3 py-2 text-sm font-medium">
                {it.label}
              </a>
            ))}
            <a href="/customers" className="hover:bg-bone block rounded-lg px-3 py-2 text-sm font-medium">Customers</a>
            <a href="/pricing" className="hover:bg-bone block rounded-lg px-3 py-2 text-sm font-medium">Pricing</a>
            <a href="https://docs.highnote.com" className="hover:bg-bone block rounded-lg px-3 py-2 text-sm font-medium">Docs</a>
            <div className="mt-2 flex gap-2 px-3">
              <a href="https://dashboard.highnote.com/auth/signin" className="rounded-full bg-white px-4 py-2 text-xs ring-1 ring-black/10">Log In</a>
              <a href="/contact" className="rounded-full bg-black px-4 py-2 text-xs text-white">Contact Sales</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
