// Decorative animated graphics for the AP Automation solution page.
// Ported from highnote.com CSS-module components; class hashes removed and
// keyframes inlined via scoped <style> blocks. Server components (no interactivity).

export function APHeroGraphic() {
  return (
    <div className="aphero">
      <style>{`
        .aphero { width: 100%; max-width: 460px; }
        .aphero svg { width: 100%; height: auto; }
        .aphero .glow { opacity: .55; animation: apheroGlow 6s ease-in-out infinite; }
        .aphero .paidBadge { opacity: 0; transform-box: fill-box; transform-origin: center; transform: scale(.85); animation: apheroPaid 6s ease-in-out infinite; }
        .aphero .connector { stroke-dasharray: 4 4; animation: apheroDash 1s linear infinite; }
        .aphero .textA, .aphero .block1, .aphero .block2, .aphero .block3, .aphero .block4 { animation: apheroFade 6s ease-in-out infinite; }
        .aphero .textB { opacity: 0; }
        .aphero .block2 { animation-delay: .4s; }
        .aphero .block3 { animation-delay: .8s; }
        .aphero .block4 { animation-delay: 1.2s; }
        @keyframes apheroGlow { 0%,100% { opacity:.35 } 50% { opacity:.7 } }
        @keyframes apheroPaid { 0%,55% { opacity:0; transform:scale(.85) } 70%,100% { opacity:1; transform:scale(1) } }
        @keyframes apheroDash { to { stroke-dashoffset: -8 } }
        @keyframes apheroFade { 0% { opacity:.25 } 40%,100% { opacity:1 } }
      `}</style>
      <svg
        viewBox="95 30 410 730"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Invoice moving through Highnote's AP payment flow: virtual card issued, supplier charged, spend rules passed, ledger posted, invoice paid"
        role="img"
      >
        <defs>
          <linearGradient id="apHeroGlowGradient" x1="145" y1="218" x2="465" y2="218" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#E1FF25" />
            <stop offset="0.5" stopColor="#55F5A3" />
            <stop offset="1" stopColor="#3FF7EC" />
          </linearGradient>
          <filter id="apHeroGlowBlur" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        <g>
          <rect className="glow" x="145" y="58" width="320" height="320" rx="26" fill="url(#apHeroGlowGradient)" filter="url(#apHeroGlowBlur)" />
          <path d="M155 84C155 75.1634 162.163 68 171 68H439C447.837 68 455 75.1634 455 84V352C455 360.837 447.837 368 439 368H171C162.163 368 155 360.837 155 352V84Z" fill="white" />
          <text className="textA" x="175" y="105" fontSize="15" fontWeight="500" fill="#0A0A0A">Acme Supplies</text>
          <text x="434" y="105" textAnchor="end" fontSize="14" fill="black" fillOpacity="0.5">INV-4821</text>
          <text x="434" y="186" textAnchor="end" fontSize="15" fontWeight="600" fill="#0A0A0A">$2,938.00</text>
          <text x="175" y="186" fontSize="15" fontWeight="500" fill="#0A0A0A">Invoice</text>
          <rect x="175" y="143" width="80" height="6" rx="3" fill="#E2E0D6" />
          <rect x="385" y="143" width="40" height="6" rx="3" fill="#E2E0D6" />
          <rect x="175" y="131" width="50" height="6" rx="3" fill="#E2E0D6" />
          <rect x="175" y="223" width="20" height="6" rx="3" fill="#E2E0D6" />
          <rect x="235" y="223" width="50" height="6" rx="3" fill="#E2E0D6" />
          <rect x="325" y="223" width="40" height="6" rx="3" fill="#E2E0D6" />
          <rect x="395" y="223" width="40" height="6" rx="3" fill="#E2E0D6" />
          <rect x="175" y="239" width="20" height="6" rx="3" fill="#E2E0D6" />
          <rect x="235" y="239" width="60" height="6" rx="3" fill="#E2E0D6" />
          <rect x="325" y="239" width="30" height="6" rx="3" fill="#E2E0D6" />
          <rect x="395" y="239" width="40" height="6" rx="3" fill="#E2E0D6" />
          <rect x="385" y="131" width="50" height="6" rx="3" fill="#E2E0D6" />
          <rect x="395" y="342" width="40" height="6" rx="3" fill="#E2E0D6" />
          <rect x="395" y="330" width="40" height="6" rx="3" fill="#E2E0D6" />
          <line x1="175" y1="212.5" x2="435" y2="212.5" stroke="#E2E0D6" />
          <g className="paidBadge">
            <rect x="260" y="200" width="90" height="36" rx="18" fill="#55F5A3" />
            <text x="305" y="223" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0E6639">Paid</text>
          </g>
        </g>
        <line className="connector" x1="300.5" y1="379" x2="300.5" y2="419" stroke="#D3D1C7" />
        {[
          { y: 439, label: "Virtual Card", status: "Issued" },
          { y: 519, label: "Supplier", status: "Charged" },
          { y: 599, label: "Authorization", status: "Passed" },
          { y: 679, label: "Ledger", status: "Posted" },
        ].map((b, i) => (
          <g key={b.label} className={`block${i + 1}`}>
            <path
              d={`M100 ${b.y + 16}C100 ${b.y + 7.163} 107.163 ${b.y} 116 ${b.y}H484C492.837 ${b.y} 500 ${b.y + 7.163} 500 ${b.y + 16}V${b.y + 54}C500 ${b.y + 62.837} 492.837 ${b.y + 70} 484 ${b.y + 70}H116C107.163 ${b.y + 70} 100 ${b.y + 62.837} 100 ${b.y + 54}V${b.y + 16}Z`}
              fill="white"
            />
            <rect x="115" y={b.y + 15} width="40" height="40" rx="8" fill="#F5F3EB" />
            <text x="175" y={b.y + 40} fontSize="15" fontWeight="500" fill="#0A0A0A">{b.label}</text>
            <rect x={b.status === "Passed" ? 409 : b.status === "Posted" ? 417 : b.status === "Charged" ? 419 : 422} y={b.y + 21} width={b.status === "Passed" ? 76 : 68} height="28" rx="6" fill="#55F5A3" fillOpacity="0.4" />
            <text x={485 - 30} y={b.y + 40} textAnchor="middle" fontSize="13" fontWeight="600" fill="#0E6639">{b.status}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function APVirtualCardGraphic() {
  return (
    <div className="apvc">
      <style>{`
        .apvc { width: 100%; max-width: 320px; font-family: var(--font-mono, monospace); }
        .apvc .card { background: #111; color: #fff; border-radius: 16px; padding: 18px; }
        .apvc .cardTop { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 28px; }
        .apvc .cardLabel { font-size: 11px; opacity:.6; text-transform: uppercase; letter-spacing:.08em; }
        .apvc .cardAgent { position: relative; height: 16px; overflow: hidden; text-align: right; min-width: 140px; }
        .apvc .agentName { display:block; font-size: 13px; animation: apvcAgent 9s steps(1) infinite; opacity:0; }
        .apvc .agentName:nth-child(1){ animation-delay:0s } .apvc .agentName:nth-child(2){ animation-delay:3s } .apvc .agentName:nth-child(3){ animation-delay:6s }
        .apvc .cardNumber { display:flex; gap:8px; align-items:center; font-size: 16px; letter-spacing:.12em; }
        .apvc .cardNumberCycle { position: relative; height: 19px; width: 48px; overflow: hidden; }
        .apvc .cardNumberCycle span { position:absolute; left:0; display:block; animation: apvcAgent 9s steps(1) infinite; opacity:0; }
        .apvc .cardNumberCycle span:nth-child(1){ animation-delay:0s } .apvc .cardNumberCycle span:nth-child(2){ animation-delay:3s } .apvc .cardNumberCycle span:nth-child(3){ animation-delay:6s }
        .apvc .config { background:#fff; color:#111; border:1px solid #E2E0D6; border-top:none; border-radius:0 0 12px 12px; margin: 0 8px; padding: 14px; }
        .apvc .row { display:flex; justify-content:space-between; padding: 6px 0; font-size: 12px; }
        .apvc .rowLabel { opacity:.55 }
        .apvc .rowValues { position:relative; height:16px; min-width:90px; text-align:right; }
        .apvc .rowValues span { position:absolute; right:0; display:block; animation: apvcAgent 9s steps(1) infinite; opacity:0; }
        .apvc .rowValues span:nth-child(1){ animation-delay:0s } .apvc .rowValues span:nth-child(2){ animation-delay:3s } .apvc .rowValues span:nth-child(3){ animation-delay:6s }
        @keyframes apvcAgent { 0%,30%{opacity:1} 33.34%,100%{opacity:0} }
      `}</style>
      <div className="card">
        <div className="cardTop">
          <div className="cardLabel">Virtual Card</div>
          <div className="cardAgent">
            <span className="agentName">Acme Supplies Co.</span>
            <span className="agentName">Prime Office Solutions</span>
            <span className="agentName">CloudSoft Inc.</span>
          </div>
        </div>
        <div className="cardNumber">
          <span>····</span>
          <div className="cardNumberCycle">
            <span>4821</span>
            <span>7634</span>
            <span>2915</span>
          </div>
        </div>
      </div>
      <div className="config">
        <div className="row">
          <span className="rowLabel">Spend Limit</span>
          <div className="rowValues"><span>$1,250</span><span>$8,400</span><span>$24,000</span></div>
        </div>
        <div className="row">
          <span className="rowLabel">Category</span>
          <div className="rowValues"><span>Suppliers</span><span>Office</span><span>Software</span></div>
        </div>
        <div className="row">
          <span className="rowLabel">Expires</span>
          <div className="rowValues"><span>On Payment</span><span>On Payment</span><span>On Payment</span></div>
        </div>
      </div>
    </div>
  );
}

export function APSupplierPaymentGraphic() {
  const rows = [
    { vendor: "Acme Supplies", invoice: "INV-4821", amount: "$1,250.00", d: 0 },
    { vendor: "Prime Office", invoice: "INV-7634", amount: "$8,400.00", d: 0.5 },
    { vendor: "CloudSoft Inc.", invoice: "INV-2915", amount: "$24,000.00", d: 1 },
    { vendor: "Apex Industrial", invoice: "INV-5592", amount: "$3,750.00", d: 1.5 },
  ];
  return (
    <div className="apsp">
      <style>{`
        .apsp { width:100%; max-width:340px; }
        .apsp .card { background:#fff; border:1px solid #E2E0D6; border-radius:14px; padding:16px; font-size:12px; }
        .apsp .cardHeader, .apsp .cardFooter { display:flex; justify-content:space-between; }
        .apsp .cardHeader { padding-bottom:10px; border-bottom:1px solid #E2E0D6; margin-bottom:8px; }
        .apsp .cardTitle { font-weight:600; } .apsp .cardMeta { opacity:.5; }
        .apsp .row { display:flex; align-items:center; justify-content:space-between; padding:8px 0; }
        .apsp .rowLeft { display:flex; flex-direction:column; }
        .apsp .vendor { font-weight:500; } .apsp .invoice { opacity:.5; font-size:11px; }
        .apsp .amount { font-weight:500; margin-left:auto; padding-right:10px; }
        .apsp .status { position:relative; width:48px; height:18px; }
        .apsp .status span { position:absolute; right:0; top:0; font-size:11px; font-weight:600; padding:2px 8px; border-radius:9999px; }
        .apsp .queued { background:#E2E0D6; color:#555; }
        .apsp .paid { background:#55F5A3; color:#0E6639; opacity:0; animation: apspPaid 6s ease-in-out infinite; }
        .apsp .cardFooter { padding-top:10px; border-top:1px solid #E2E0D6; margin-top:8px; font-weight:600; }
        .apsp .footerMeta { opacity:.5; font-weight:400; }
        @keyframes apspPaid { 0%,40%{opacity:0} 55%,100%{opacity:1} }
      `}</style>
      <div className="card">
        <div className="cardHeader"><span className="cardTitle">Payment run</span><span className="cardMeta">Today</span></div>
        {rows.map((r) => (
          <div key={r.invoice} className="row">
            <div className="rowLeft"><span className="vendor">{r.vendor}</span><span className="invoice">{r.invoice}</span></div>
            <span className="amount">{r.amount}</span>
            <div className="status">
              <span className="queued">Queued</span>
              <span className="paid" style={{ animationDelay: `${r.d}s` }}>Paid</span>
            </div>
          </div>
        ))}
        <div className="cardFooter"><span className="footerMeta">4 payments</span><span className="footerTotal">$37,400.00</span></div>
      </div>
    </div>
  );
}

export function APSpendGovernanceGraphic() {
  const rules = [
    { name: "Vendor Allowlist", detail: "Vendor is on approved list", status: "pass", label: "Pass" },
    { name: "Per-Transaction Cap", detail: "$1,250 within $5,000 limit", status: "pass", label: "Pass" },
    { name: "Velocity Rule", detail: "2 of 10 daily transactions used", status: "pass", label: "Pass" },
  ];
  return (
    <div className="apsg">
      <style>{`
        .apsg { width:100%; max-width:300px; }
        .apsg .card { background:#fff; border:1px solid #E2E0D6; border-radius:14px; padding:16px; font-size:12px; }
        .apsg .request { padding-bottom:10px; border-bottom:1px solid #E2E0D6; margin-bottom:10px; }
        .apsg .requestLabel { opacity:.5; font-size:11px; margin-bottom:4px; }
        .apsg .requestDetail { display:flex; justify-content:space-between; font-weight:500; }
        .apsg .rule { display:flex; align-items:flex-start; justify-content:space-between; padding:7px 0; }
        .apsg .ruleName { font-weight:500; display:block; } .apsg .ruleDetail { opacity:.5; font-size:11px; }
        .apsg .pass { color:#0E6639; background:#55F5A3; padding:2px 8px; border-radius:9999px; font-weight:600; font-size:11px; }
        .apsg .result { display:flex; justify-content:space-between; align-items:center; padding-top:10px; border-top:1px solid #E2E0D6; margin-top:6px; }
        .apsg .resultLabel { opacity:.5; }
      `}</style>
      <div className="card">
        <div className="request">
          <div className="requestLabel">Authorization Request</div>
          <div className="requestDetail"><span>Acme Supplies Co.</span><span>$1,250</span></div>
        </div>
        {rules.map((r) => (
          <div key={r.name} className="rule">
            <div className="ruleLeft"><span className="ruleName">{r.name}</span><span className="ruleDetail">{r.detail}</span></div>
            <span className="pass">{r.label}</span>
          </div>
        ))}
        <div className="result"><span className="resultLabel">Result</span><span className="pass">Authorized</span></div>
      </div>
    </div>
  );
}

export function APLedgerReconciliationGraphic() {
  const entries = [
    { desc: "Acme Supplies · INV-4821", amount: "−$1,250.00" },
    { desc: "Prime Office · INV-7634", amount: "−$8,400.00" },
    { desc: "CloudSoft Inc. · INV-2915", amount: "−$24,000.00" },
    { desc: "Metro Logistics · INV-3307", amount: "−$980.00" },
    { desc: "Apex Industrial · INV-5592", amount: "−$3,750.00" },
  ];
  return (
    <div className="aplr">
      <style>{`
        .aplr { width:100%; max-width:300px; }
        .aplr .card { background:#fff; border:1px solid #E2E0D6; border-radius:14px; padding:16px; font-size:12px; }
        .aplr .cardHeader { padding-bottom:10px; border-bottom:1px solid #E2E0D6; margin-bottom:8px; }
        .aplr .cardTitle { opacity:.5; font-size:11px; display:block; margin-bottom:4px; }
        .aplr .largeAmount { font-size:22px; font-weight:600; }
        .aplr .entry { display:flex; justify-content:space-between; padding:6px 0; opacity:0; animation: aplrIn 6s ease-in-out infinite; }
        .aplr .entry:nth-child(2){animation-delay:.2s} .aplr .entry:nth-child(3){animation-delay:.6s}
        .aplr .entry:nth-child(4){animation-delay:1s} .aplr .entry:nth-child(5){animation-delay:1.4s} .aplr .entry:nth-child(6){animation-delay:1.8s}
        .aplr .entryDesc { opacity:.7 } .aplr .entryAmount { font-weight:500 }
        @keyframes aplrIn { 0%{opacity:0; transform:translateY(4px)} 25%,100%{opacity:1; transform:none} }
      `}</style>
      <div className="card">
        <div className="cardHeader"><span className="cardTitle">Unified Ledger</span><span className="largeAmount">$461,620.00</span></div>
        {entries.map((e) => (
          <div key={e.desc} className="entry"><span className="entryDesc">{e.desc}</span><span className="entryAmount">{e.amount}</span></div>
        ))}
      </div>
    </div>
  );
}

export function APPaymentLifecycleGraphic() {
  const steps = [
    { label: "Authorized", value: "payment.authorized" },
    { label: "Captured", value: "payment.captured" },
    { label: "Settled", value: "payment.settled" },
    { label: "Refunded", value: "payment.refunded" },
  ];
  return (
    <div className="appl">
      <style>{`
        .appl { width:100%; max-width:300px; }
        .appl .card { background:#fff; border:1px solid #E2E0D6; border-radius:14px; padding:18px; font-size:12px; }
        .appl .cardHeader { display:flex; justify-content:space-between; padding-bottom:14px; }
        .appl .cardTitle { font-weight:600; } .appl .cardAmount { font-weight:600; }
        .appl .timeline { position:relative; padding-left:6px; }
        .appl .step { display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:10px; padding:4px 0; opacity:0; animation: applStep 7s ease-in-out infinite; }
        .appl .step:nth-child(1){animation-delay:0s} .appl .step:nth-child(3){animation-delay:.5s} .appl .step:nth-child(5){animation-delay:1s} .appl .step:nth-child(7){animation-delay:1.5s}
        .appl .stepDot { width:10px; height:10px; border-radius:9999px; background:#55F5A3; }
        .appl .stepLabel { font-weight:500; }
        .appl .stepValue { font-family: var(--font-mono, monospace); opacity:.5; font-size:11px; }
        .appl .connector { width:2px; height:14px; background:#E2E0D6; margin-left:4px; }
        @keyframes applStep { 0%{opacity:0} 25%,100%{opacity:1} }
      `}</style>
      <div className="card">
        <div className="cardHeader"><span className="cardTitle">Supplier Payment</span><span className="cardAmount">$2,938.00</span></div>
        <div className="timeline">
          {steps.map((s, i) => (
            <div key={s.label}>
              <div className="step">
                <span className="stepDot" />
                <span className="stepLabel">{s.label}</span>
                <span className="stepValue">{s.value}</span>
              </div>
              {i < steps.length - 1 && <div className="connector" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function APFlowGraphic() {
  const inner = [
    { title: "Virtual Card", body: "Issues a spend-controlled virtual card" },
    { title: "Supplier", body: "Charges the card within approved parameters" },
    { title: "Authorization", body: "Evaluates against program-level rules" },
    { title: "Ledger", body: "Transaction posts to the unified ledger immediately" },
    { title: "Reconciliation", body: "Finance reconciles from one system across all supplier payments" },
  ];
  return (
    <div className="apflow">
      <style>{`
        .apflow .flow { display:flex; align-items:stretch; gap:16px; flex-direction:column; }
        @media (min-width: 768px){ .apflow .flow { flex-direction:row; align-items:center; } }
        .apflow .agentTile { background:#111; color:#fff; }
        .apflow .tile { border-radius:14px; padding:16px; min-width:160px; }
        .apflow .innerTile { background:#fff; border:1px solid #E2E0D6; flex:1; }
        .apflow .tiles { display:grid; grid-template-columns:1fr; gap:12px; flex:1; }
        @media (min-width: 640px){ .apflow .tiles { grid-template-columns:repeat(2,1fr); } }
        @media (min-width: 1024px){ .apflow .tiles { grid-template-columns:repeat(5,1fr); } }
        .apflow .tileTitle { font-weight:600; font-size:13px; margin-bottom:6px; }
        .apflow .tileBody { font-size:11px; opacity:.65; line-height:1.4; }
        .apflow .arrowWrap { display:flex; align-items:center; justify-content:center; color:#111; opacity:.4; }
        .apflow .arrow { width:30px; height:12px; }
        @media (max-width: 767px){ .apflow .arrow { transform: rotate(90deg); } }
      `}</style>
      <div className="flow">
        <div className="tile agentTile">
          <h4 className="tileTitle">AP System</h4>
          <p className="tileBody">Approves invoice</p>
        </div>
        <span className="arrowWrap" aria-hidden="true">
          <svg className="arrow" viewBox="0 0 30 12" fill="none">
            <path d="M1 6 H26 M21 1 L26 6 L21 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="tiles">
          {inner.map((t) => (
            <div key={t.title} className="tile innerTile">
              <h4 className="tileTitle">{t.title}</h4>
              <p className="tileBody">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
