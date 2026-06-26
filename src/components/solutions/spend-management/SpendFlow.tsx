const tiles = [
  {
    title: "Spend Rules",
    body: "Set merchant category restrictions, limits, and velocity controls per card",
  },
  { title: "Cardholder", body: "Uses the card at point of sale" },
  {
    title: "Authorization",
    body: "Evaluates against spend rules in real time, before funds move",
  },
  {
    title: "Ledger",
    body: "Transaction posts to the unified ledger immediately",
  },
  {
    title: "Reconciliation",
    body: "Finance reconciles from one system across the program",
  },
];

function Arrow() {
  return (
    <span className="flex shrink-0 items-center justify-center text-black/40" aria-hidden="true">
      <svg className="h-3 w-8" viewBox="0 0 30 12" fill="none">
        <path
          d="M1 6 H26 M21 1 L26 6 L21 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function SpendFlow() {
  return (
    <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
      <div className="rounded-highnote flex shrink-0 flex-col justify-center bg-black p-5 text-white lg:max-w-[200px]">
        <h4 className="pb-2 text-sm font-medium">Platform</h4>
        <p className="text-xs leading-5 opacity-70">
          Issue spend cards to employees, departments, or cost centers
        </p>
      </div>
      <div className="hidden lg:block">
        <Arrow />
      </div>
      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tiles.map((tile) => (
          <div
            key={tile.title}
            className="rounded-highnote bg-white p-5"
          >
            <h4 className="pb-2 text-sm font-medium">{tile.title}</h4>
            <p className="text-xs leading-5 opacity-70">{tile.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
