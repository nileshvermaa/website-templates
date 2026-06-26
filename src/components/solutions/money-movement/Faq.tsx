"use client";

import { useState } from "react";

const ITEMS: { q: string; a: string }[] = [
  {
    q: "What is a money movement platform?",
    a: "A money movement platform is the infrastructure layer that integrates disbursement logic, payment execution, and ledger reporting into a single programmable system. Rather than a single API call, it unifies policy controls, payment rails, and a real-time ledger so every transaction moves and reconciles on one system.",
  },
  {
    q: "How does programmable money movement differ from standard payment processing?",
    a: "Standard payment processing executes a transfer. Programmable money movement evaluates every payment against a program-level policy layer at initiation, executes it across the right rail, and posts it to a unified real-time ledger the moment it clears — so controls, execution, and reconciliation all run on the same data model.",
  },
  {
    q: "What should companies look for in a money movement infrastructure provider?",
    a: "Look for a unified platform that combines issuing, acquiring, credit, and a real-time ledger, with programmable spend governance, near real-time payouts across major rails, API-first lifecycle control, and a single reconciliation record — eliminating the gaps between payment execution and your books.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-ash border-t">
      <div data-orientation="vertical">
        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="border-ash border-b">
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
                    className={`text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div
                role="region"
                hidden={!isOpen}
                className="overflow-hidden text-sm"
              >
                <p className="pb-5 opacity-70">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
