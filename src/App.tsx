import { useEffect, useRef, useState } from 'react'

const PARTNERS = [
  'Northwind', 'Ledgerline', 'Halcyon', 'Folio',
  'Kerosene', 'Atlas Pay', 'Marina', 'Penumbra',
  'Quaver', 'Solstice',
]

const PILLARS = [
  {
    num: '01',
    title: 'Issuing',
    accent: 'every card,',
    body: 'Debit, credit, prepaid, fleet, virtual. Configure spend rules, velocity limits, and lifecycle events at the program level — no fork required.',
    chips: ['Card programs', 'Velocity rules', 'Tokenization', 'BIN management'],
  },
  {
    num: '02',
    title: 'Acquiring',
    accent: 'every flow,',
    body: 'Accept payments in the same surface you issue from. Authorize, capture, refund, and reconcile against one ledger with consistent semantics.',
    chips: ['Card-present', 'Card-not-present', 'Network ops', 'Disputes'],
  },
  {
    num: '03',
    title: 'Credit',
    accent: 'every product,',
    body: 'Stand up consumer or commercial credit lines, charge cards, and revolving products without stitching together a vendor zoo.',
    chips: ['Lines of credit', 'Charge', 'Installments', 'Statements'],
  },
  {
    num: '04',
    title: 'Money movement',
    accent: 'one ledger.',
    body: 'ACH, wires, RTP, push-to-card, and FX, written to the same double-entry ledger as your card activity. Reporting that actually ties out.',
    chips: ['ACH', 'RTP', 'Wires', 'Push-to-card', 'FX'],
  },
] as const

const SHOWCASE_CARDS = [
  {
    title: 'Debit',
    body: 'For everyday spend, with controls and limits built around your program rules.',
    cls: 'card-show-1',
  },
  {
    title: 'Credit',
    body: 'Charge or revolving lines with statements, repayment, and rewards on one rail.',
    cls: 'card-show-2',
  },
  {
    title: 'Commercial',
    body: 'Multi-cardholder, vendor-level controls and reconciliation built in.',
    cls: 'card-show-3',
  },
] as const

function ArrowUpRight() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M4 10 10 4M4.5 4H10v5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CardFace({ palette, label = 'Strata', name = 'A. Carter' }: { palette: 'dark' | 'lime' | 'cream'; label?: string; name?: string }) {
  const cls = palette === 'dark' ? 'card-1' : palette === 'lime' ? 'card-2' : 'card-3'
  return (
    <div className={`card ${cls}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className="chip" />
        <div className="brand-name">{label}</div>
      </div>
      <div className="num">4242 ·· ·· 8024</div>
      <div className="row">
        <div>
          <div className="hold">Cardholder</div>
          <div className="name">{name}</div>
        </div>
        <div className="logo" />
      </div>
    </div>
  )
}

function PromoBar() {
  return (
    <div className="promo">
      <div className="container promo-inner">
        <span className="tag">New</span>
        <span>Real-time push-to-card now live across 14 networks.</span>
        <a href="#changelog">Read the note <ArrowUpRight /></a>
      </div>
    </div>
  )
}

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Strata home">
          <span className="brand-mark" aria-hidden />
          Strata
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#platform">Platform</a>
          <a href="#issuing">Issuing</a>
          <a href="#acquiring">Acquiring</a>
          <a href="#docs">Docs</a>
          <a href="#customers">Customers</a>
        </nav>
        <div className="nav-cta">
          <a href="#signin" className="btn btn-ghost ghost-cta">Sign in</a>
          <a href="#start" className="btn btn-lime">Get a demo <ArrowRight /></a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      node.style.setProperty('--mx', String(x))
      node.style.setProperty('--my', String(y))
    }
    const onLeave = () => {
      node.style.setProperty('--mx', '0')
      node.style.setProperty('--my', '0')
    }
    node.addEventListener('mousemove', onMove)
    node.addEventListener('mouseleave', onLeave)
    return () => {
      node.removeEventListener('mousemove', onMove)
      node.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow reveal reveal-1">
            <span className="pulse" /> Series C · $115M led by Adams Street
          </span>
          <h1 className="reveal reveal-2">
            Embedded <em>fintech</em>,<br />
            <span className="softer">built for</span> the<br />
            way <em>you</em> ship.
          </h1>
          <p className="lead reveal reveal-3">
            One platform for issuing, acquiring, credit, and money movement —
            written to a single double-entry ledger so the numbers always tie out.
          </p>
          <div className="hero-ctas reveal reveal-4">
            <a href="#start" className="btn btn-lime btn-lg">Get a demo <ArrowUpRight /></a>
            <a href="#docs" className="btn btn-ghost btn-lg">Read the docs</a>
          </div>
          <div className="hero-meta reveal reveal-5">
            <div className="stat">
              <span className="num">$48B</span>
              <span className="label">Processed in 2025</span>
            </div>
            <div className="stat">
              <span className="num">14</span>
              <span className="label">Networks</span>
            </div>
            <div className="stat">
              <span className="num">99.99%</span>
              <span className="label">Uptime SLA</span>
            </div>
          </div>
        </div>
        <div className="card-stack reveal reveal-3" ref={ref}>
          <CardFace palette="dark" label="Strata" name="A. Carter" />
          <CardFace palette="lime" label="Folio" name="M. Reyes" />
          <CardFace palette="cream" label="Halcyon" name="J. Park" />
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...PARTNERS, ...PARTNERS]
  return (
    <section className="marquee" aria-label="Customers">
      <div className="label">A platform behind</div>
      <div className="marquee-track">
        {items.map((p, i) => (
          <span key={`${p}-${i}`}>{p}</span>
        ))}
      </div>
    </section>
  )
}

function CardShowcase() {
  return (
    <section className="section cards-show" id="cards">
      <div className="container">
        <div className="section-head" style={{ marginInline: 'auto', textAlign: 'center' }}>
          <span className="eyebrow"><span className="pulse" /> Any card, any way</span>
          <h2 className="section-title">
            Cards that <span className="lime">feel</span><br />
            like part of <em>your</em> product.
          </h2>
          <p className="section-lead" style={{ marginInline: 'auto' }}>
            Configure the rails, ship the experience. Strata stays out of the way of your brand.
          </p>
        </div>
        <div className="cards-row">
          {SHOWCASE_CARDS.map((c, i) => (
            <div className="show-card-wrap" key={c.title}>
              <div className="card-mock">
                <CardFace palette={i === 0 ? 'dark' : i === 1 ? 'lime' : 'cream'} label={c.title} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="section pillars" id="platform">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="pulse" /> One platform · four products</span>
          <h2 className="section-title">
            The whole stack, <em>actually</em><br />
            on one ledger.
          </h2>
          <p className="section-lead">
            Most platforms bolt issuing onto acquiring onto credit. Strata is the
            other way around — one core, four product surfaces, one set of primitives.
          </p>
        </div>
        <div className="pillars-grid">
          {PILLARS.map((p) => (
            <article className="pillar" key={p.title} data-num={p.num}>
              <h3>
                <em>{p.accent}</em><br />
                {p.title}
              </h3>
              <p>{p.body}</p>
              <ul className="list">
                {p.chips.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function useCount(target: number, decimals = 0, suffix = '', prefix = '') {
  const [val, setVal] = useState(0)
  const [done, setDone] = useState(false)
  const elRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (done) return
    const el = elRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now()
          const dur = 1600
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            setVal(target * eased)
            if (p < 1) requestAnimationFrame(tick)
            else setDone(true)
          }
          requestAnimationFrame(tick)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, done])
  return { val, ref: elRef, text: `${prefix}${val.toFixed(decimals)}${suffix}` }
}

function Stat({ value, suffix = '', prefix = '', decimals = 0, label }: { value: number; suffix?: string; prefix?: string; decimals?: number; label: string }) {
  const { ref, text } = useCount(value, decimals, suffix, prefix)
  return (
    <div className="stat-big">
      <span className="num" ref={ref}>{text}</span>
      <span className="label">{label}</span>
    </div>
  )
}

function Stats() {
  return (
    <section className="section stats">
      <div className="container">
        <div className="stats-grid">
          <Stat value={48} prefix="$" suffix="B" label="Annual run-rate" />
          <Stat value={420} suffix="M" label="Transactions in 2025" />
          <Stat value={99.99} decimals={2} suffix="%" label="Authorisation uptime" />
          <Stat value={14} label="Networks live" />
        </div>
      </div>
    </section>
  )
}

function Quote() {
  return (
    <section className="section quote">
      <div className="container quote-inner">
        <div className="quote-mark" aria-hidden>"</div>
        <q>
          We went from <em>stitching together</em> three vendors and a homegrown ledger to one platform.
          The first month after migration our finance team closed the books <em>two days early</em>.
        </q>
        <div className="attr">
          <div className="av" aria-hidden />
          <div className="who">
            <strong>Priya Nakamura</strong>
            <span>VP of Engineering · Folio</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <h2>
          Ship the <em>card program</em><br />
          your roadmap deserves.
        </h2>
        <p>
          A 45-minute scoping call, a sandbox the same day, a card in the wallet inside a week.
          You bring the product idea — we bring the rails.
        </p>
        <div className="row">
          <a href="#start" className="btn btn-lime btn-lg">Book a demo <ArrowUpRight /></a>
          <a href="#sandbox" className="btn btn-ghost btn-lg" style={{ borderColor: 'rgba(245,241,232,0.2)', color: 'var(--cream)' }}>Spin up sandbox</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark" aria-hidden />
              Strata
            </a>
            <p>Embedded fintech, on one platform. Issuing, acquiring, credit, and money movement — built for you.</p>
            <div className="footer-social">
              <a href="#x" aria-label="X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-4.77-6.236L4.96 22H2l7.04-8.046L2 2h6.91l4.31 5.74L18.244 2zm-2.39 18h1.886L8.23 4H6.235l9.62 16z"/></svg>
              </a>
              <a href="#li" aria-label="LinkedIn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.06c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4V9z"/></svg>
              </a>
              <a href="#gh" aria-label="GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.7 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Platform</h5>
            <ul>
              <li><a href="#issuing">Issuing</a></li>
              <li><a href="#acquiring">Acquiring</a></li>
              <li><a href="#credit">Credit</a></li>
              <li><a href="#money">Money movement</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#api">API reference</a></li>
              <li><a href="#changelog">Changelog</a></li>
              <li><a href="#status">Status</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#terms">Terms</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#compliance">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Strata — built for you</span>
          <span>v3.0.2 · ledger 12.4</span>
        </div>
        <div className="giant" aria-hidden>Strata</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <CardShowcase />
        <Pillars />
        <Stats />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
