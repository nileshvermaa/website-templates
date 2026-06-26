"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is agentic commerce?",
    a: "Agentic commerce describes transactions that are initiated by software — AI agents and automated systems that act without a human approving each step. Today the most mature deployments are in finance operations: accounts payable, supplier payments, bill pay, and procurement workflows, where an AI agent automates work people used to do by hand.",
  },
  {
    q: "How do you control what an AI agent can spend?",
    a: "Control is enforced at the card program. You set velocity limits, merchant category restrictions, and per-transaction caps at the card, account, or program level, and every rule is evaluated at authorization before funds move. Each agent, workflow, or vendor can be issued its own virtual card that closes automatically when the workflow ends.",
  },
  {
    q: "What does agentic payment infrastructure give finance teams?",
    a: "Finance teams get event-level visibility and a single source of truth. Every agentic transaction posts to a unified ledger the moment it occurs, so finance sees every dollar at the transaction level rather than in an end-of-day batch, and reconciles against the same data model the payments run on.",
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
