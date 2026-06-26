"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is a fleet card program?",
    a: "A fleet card program is a set of payment cards issued to drivers, vehicles, or field operators, governed by spend rules such as approved merchant categories, per-card limits, and velocity controls. Built on open-loop issuance infrastructure, it gives companies a programmable card they own and control.",
  },
  {
    q: "What is the difference between open-loop and closed-loop fleet cards?",
    a: "Closed-loop fleet cards run on proprietary networks like WEX, Shell, or Fuelman and primarily offer fuel discounts. Open-loop fleet cards are accepted on major card networks like Visa and Mastercard, are programmable, and give you authorization-layer spend controls and a unified ledger you control.",
  },
  {
    q: "How does fleet card management work on Highnote?",
    a: "Highnote puts the spend governance layer inside the card program itself. Cards are issued via API to drivers, vehicles, or cost centers. Every authorization is evaluated against your spend rules in real time, and every transaction posts as a ledger event to a single unified ledger for reconciliation.",
  },
];

export default function FleetFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="border-ash border-t">
      {faqs.map((item, i) => {
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
                  className={`h-4 w-4 shrink-0 opacity-50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <div className="overflow-hidden pb-5 text-sm opacity-70">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
