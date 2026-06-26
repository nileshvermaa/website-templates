// Flexible Payouts graphic — ported from the PlatformGraph module: a faint grid
// with one highlighted row, faded edges, and the Highnote logo orb centered on
// top of a soft "back" disc.
export default function PlatformGraph() {
  const verticals = [50.5, 100.5, 150.5, 200.5, 250.5, 300.5, 350.5];
  const horizontals = [50.5, 100.5, 150.5, 200.5, 250.5];

  return (
    <div className="relative mx-auto h-[300px] w-[400px] max-w-full">
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {verticals.map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" stroke="#E2E0D6" />
        ))}
        {horizontals.map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#E2E0D6" />
        ))}
        <line x1="0" y1="150.5" x2="400" y2="150.5" stroke="black" />
        <rect y="220" width="400" height="80" fill="url(#pgB)" />
        <rect x="400" y="80" width="400" height="80" transform="rotate(180 400 80)" fill="url(#pgT)" />
        <rect x="80" width="300" height="80" transform="rotate(90 80 0)" fill="url(#pgL)" />
        <rect x="320" y="300" width="300" height="80" transform="rotate(-90 320 300)" fill="url(#pgR)" />
        <defs>
          <linearGradient id="pgB" x1="200" y1="220" x2="200" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="pgT" x1="600" y1="80" x2="600" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="pgL" x1="230" y1="0" x2="230" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="pgR" x1="470" y1="300" x2="470" y2="380" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
      {/* soft back disc */}
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#55F5A3]/20 blur-2xl" />
      {/* Highnote logo orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="42.4264" transform="rotate(45 50 50)" fill="#55F5A3" />
          <path
            d="M53.8071 45.8343C55.9057 47.9328 55.9057 51.3352 53.8071 53.4337C51.7086 55.5323 48.3062 55.5323 46.2077 53.4337C44.1092 51.3352 44.1092 47.9328 46.2077 45.8343C48.3062 43.7357 51.7086 43.7357 53.8071 45.8343Z"
            fill="black"
          />
          <path
            d="M70.6422 55.0383C72.0741 55.0829 73.4859 54.532 74.5788 53.4391C76.6753 51.3426 76.6753 47.939 74.5766 45.8402C72.48 43.7437 69.0765 43.7437 66.9799 45.8402C65.8871 46.9331 65.2826 48.4252 65.3785 49.8371C65.4499 51.1441 65.16 52.4555 64.1786 53.4369C63.1972 54.4182 61.8501 54.5922 60.4918 54.6346C59.1995 54.585 57.9762 55.0282 56.9522 55.8968C56.8328 55.9972 56.7166 56.1035 56.6042 56.2159C56.298 56.5222 56.0525 56.83 55.8454 57.1552C55.242 58.0897 54.9339 59.1718 55.0028 60.2127C55.0742 61.5197 54.7843 62.8312 53.8029 63.8125C52.8215 64.7939 51.4744 64.9679 50.1161 65.0103C48.6641 64.9545 47.2992 65.521 46.2063 66.6139C44.1097 68.7104 44.1097 72.114 46.2107 74.2105C48.3073 76.3071 51.7086 76.3093 53.8074 74.2105C54.9002 73.1176 55.4645 71.6389 55.3999 70.2137C55.3887 68.9892 55.6251 67.593 56.6065 66.6117C57.5878 65.6303 58.8145 65.385 60.2085 65.4139L60.2665 65.4139C61.3895 65.4489 62.5001 65.1176 63.4542 64.4459C63.7104 64.2672 63.9544 64.0635 64.1831 63.8348C64.7532 63.2647 65.1589 62.6252 65.4204 61.9431C65.6852 61.2639 65.8076 60.5444 65.7755 59.838C65.7644 58.6136 66.0008 57.2173 66.9822 56.236C67.9635 55.2546 69.1902 55.0093 70.5842 55.0383L70.6422 55.0383Z"
            fill="black"
          />
          <path
            d="M49.8639 34.26C51.2958 34.3047 52.7077 33.7538 53.8005 32.6609C55.8971 30.5643 55.8971 27.1608 53.7983 25.062C51.7018 22.9655 48.2982 22.9655 46.2017 25.062C45.1088 26.1549 44.5044 27.647 44.6003 29.0588C44.6716 30.3658 44.3817 31.6773 43.4003 32.6586C42.419 33.64 41.0718 33.814 39.7135 33.8564C38.4213 33.8067 37.1979 34.25 36.174 35.1186C36.0545 35.2189 35.9384 35.3253 35.826 35.4377C35.5197 35.744 35.2742 36.0518 35.0672 36.377C34.4638 37.3115 34.1556 38.3935 34.2246 39.4345C34.296 40.7415 34.006 42.053 33.0246 43.0343C32.0433 44.0157 30.6961 44.1896 29.3378 44.232C27.8859 44.1763 26.5209 44.7428 25.428 45.8357C23.3315 47.9322 23.3315 51.3357 25.4325 53.4323C27.529 55.5288 30.9303 55.5311 33.0291 53.4323C34.122 52.3394 34.6863 50.8607 34.6216 49.4355C34.6104 48.211 34.8469 46.8148 35.8282 45.8334C36.8096 44.8521 38.0363 44.6067 39.4303 44.6357H39.4883C40.6112 44.6707 41.7218 44.3394 42.676 43.6677C42.9321 43.4889 43.1762 43.2852 43.4048 43.0566C43.9749 42.4865 44.3807 41.8469 44.6422 41.1648C44.9069 40.4857 45.0293 39.7662 44.9973 39.0598C44.9861 37.8353 45.2225 36.4391 46.2039 35.4578C47.1853 34.4764 48.412 34.2311 49.806 34.26H49.8639Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}
