"use client";

import { useState } from "react";

const items = [
  {
    q: "What is accounts payable automation infrastructure?",
    a: "AP automation infrastructure is the payment-execution layer beneath an AP workflow. While AP systems capture invoices, route approvals, and integrate with your ERP, the infrastructure layer governs how money actually moves: which virtual card executes each payment, what spend limits and vendor rules apply, and how every transaction posts to a unified ledger in real time.",
  },
  {
    q: "How do virtual cards improve accounts payable automation?",
    a: "A virtual card can be issued per invoice, per vendor, or per payment run, each with its own spend limit, merchant category restrictions, and expiration. That makes the card itself the control layer for every supplier payment, replacing manual ACH and wire workflows with governed, API-driven disbursements that close automatically once the payment clears.",
  },
  {
    q: "How does accounts payable automation help finance teams reconcile payments faster?",
    a: "Every payment posts to a single, real-time ledger the moment it clears, so there is no gap between AP approval and settlement. Finance teams reconcile from one system across all supplier payments instead of stitching together processor reports, eliminating the manual reconciliation step between what was approved and what actually posted.",
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
                    className={`h-4 w-4 shrink-0 opacity-60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
                <p className="max-w-3xl pb-6 opacity-70">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
