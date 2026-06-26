"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is the difference between a unified platform and orchestration?",
    a: "Orchestration routes transactions across separate, third-party providers, leaving you to stitch together issuing, credit, and ledger data. A unified platform like Highnote owns the full stack natively, so card issuance, rewards, credit decisioning, and reconciliation share one ledger and one source of truth.",
  },
  {
    q: "How does a branded credit card program work on Highnote’s issuing and credit system?",
    a: "You define the program: the card form factor, the rewards structure, and the credit logic. Highnote issues virtual, physical, or tokenized cards with configurable spend and velocity controls, applies your earn rules and value logic, and connects credit decisioning, limits, and lifecycle actions to the same real-time ledger that powers rewards and acquiring.",
  },
  {
    q: "How does a unified platform improve speed, control, and program differentiation?",
    a: "Because issuing, rewards, credit, and ledger data live on one platform, you launch faster, fine-tune spend controls and value logic in real time, and build differentiated payment experiences without integrating multiple vendors. Every authorization, capture, refund, and dispute posts to the ledger immediately, giving your team full visibility.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {FAQS.map((item, i) => {
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
                  className={`h-4 w-4 shrink-0 opacity-60 transition-transform duration-200 ${
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
  );
}
