"use client";

import { useState } from "react";

const items = [
  {
    q: "What is an expense management platform?",
    a: "An expense management platform is the infrastructure layer companies build on to issue spend cards, enforce spending policy at authorization, and reconcile every transaction in a unified ledger. The software employees use sits on top of it; the platform underneath handles issuance, controls, and reconciliation as one system.",
  },
  {
    q: "How do programmable spend controls improve expense management software?",
    a: "Programmable spend controls move policy enforcement to the moment of authorization, before funds are released. Merchant category restrictions, per-card limits, and velocity rules are evaluated in real time, so transactions outside approved parameters decline automatically rather than being flagged after the fact.",
  },
  {
    q: "What should companies look for in an expense management infrastructure provider?",
    a: "Look for governed card issuance, authorization-layer spend controls, and a real-time unified ledger that operate together as one programmable system, exposed through a single API, rather than separate vendors stitched together with controls that enforce late and ledgers that run days behind card activity.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-ash border-t">
      {items.map((item, i) => {
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
                <span className="font-medium">{item.q}</span>
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
                  className={`h-4 w-4 shrink-0 text-black/50 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <div className="overflow-hidden pb-5 text-sm leading-6 opacity-70">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
