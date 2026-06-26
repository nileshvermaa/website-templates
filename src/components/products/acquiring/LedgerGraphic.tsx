// Unified Ledger graphic — a pragmatic reproduction of the AcquiringLedger
// module SVG: a ledger panel with a transaction row, status pills, and a
// running list of amounts.
export default function LedgerGraphic() {
  const amounts = [
    { label: "Authorization", value: "$120.00", tone: "auth" },
    { label: "Capture", value: "$120.00", tone: "complete" },
    { label: "Settlement", value: "$118.20", tone: "complete" },
    { label: "Refund", value: "-$24.00", tone: "auth" },
    { label: "Net", value: "$94.20", tone: "complete" },
  ];

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div className="rounded-highnote border border-ash bg-white p-5">
        {/* transaction header */}
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-[#55F5A3]" />
            <div>
              <div className="text-xs font-medium">Order #10428</div>
              <div className="text-xxs opacity-60">Visa •••• 4242</div>
            </div>
          </div>
          <span className="rounded-full bg-[#55F5A3]/40 px-2.5 py-1 text-xxs font-medium">
            Completed
          </span>
        </div>
        <div className="space-y-2.5 border-t border-ash pt-4">
          {amounts.map((a) => (
            <div key={a.label} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 opacity-70">
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    a.tone === "complete" ? "bg-[#55F5A3]" : "bg-[#E2E0D6]"
                  }`}
                />
                {a.label}
              </span>
              <span className="font-mono tabular-nums">{a.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
