"use client";

import { useState } from "react";

const items: { q: string; a: string }[] = [
  {
    q: "What is embedded finance?",
    a: "Embedded finance is the integration of financial products (cards, payments, lending, accounts) directly into non-financial platforms. A company building embedded finance adds financial capabilities as native product features, not as links to external services.",
  },
  {
    q: "What is the difference between embedded finance and Banking as a Service?",
    a: "Banking as a Service (BaaS) typically stitches together separate vendors for issuing, payments, and ledgering. Embedded finance on a unified platform runs every product on one system, one API, and one data model, removing the reconciliation seams and integration debt that fragmented BaaS stacks introduce.",
  },
  {
    q: "What is the difference between a unified embedded finance platform and payment orchestration?",
    a: "Payment orchestration routes transactions across multiple external processors and vendors. A unified embedded finance platform owns issuing, acquiring, credit, and a real-time ledger natively, so every event posts to a single source of truth instead of being coordinated across third parties.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="border-ash border-t">
      <div>
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-ash border-b">
              <h3 className="flex">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex flex-1 items-center justify-between py-5 text-left text-sm font-medium transition-all hover:no-underline"
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="font-medium">{item.q}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </h3>
              {isOpen && (
                <div role="region" className="overflow-hidden pb-5 text-sm opacity-70">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
