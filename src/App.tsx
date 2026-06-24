import { useEffect, useRef, useState } from 'react'

const logos = ['500', 'gigstack', 'nexcar', 'JetsMART', 'TrueState', 'Dapta.', 'sent']

const workflowCards = [
  {
    icon: '</>',
    title: 'For developers',
    bullets: [
      'bugster pull to sync tests locally as YAML',
      'Create and edit tests in Cursor or Claude Code',
      'bugster push to sync back to the platform',
      'Run tests and add quick checks from the CLI',
    ],
  },
  {
    icon: '✣',
    title: 'For QA & product teams',
    bullets: [
      'Create tests in the web app using natural language',
      'Define steps and expected results for precise control',
      'Migrate existing suites from any test platform',
    ],
  },
  {
    icon: '▷',
    title: 'Run anywhere',
    bullets: ['Trigger on CI/CD, schedule nightly runs, or run across environments from one place.'],
  },
  {
    icon: '⌘',
    title: 'Fix everything',
    bullets: ['Get detailed bug reports, reproduction steps, and video recordings of every failure.'],
  },
]

const integrations = [
  ['Vercel', '▲'], ['Railway', '◒'], ['Netlify', '✣'], ['GCP', '☁'], ['Custom', '⬡'], ['More', '•••'],
]

const faqs = [
  ['Do I need to know how to code to use Bugster?', 'No coding required. Bugster lets anyone on your team create robust end-to-end tests using plain English. Describe the user flow and AI agents build and execute the automation.'],
  ['What happens when my app changes?', 'Bugster reruns the suite, reports what failed, and helps you update tests without rewriting everything from scratch.'],
  ['How long does it take to set up?', 'Most teams can create their first useful suite in minutes by describing the critical paths in their product.'],
  ['Do you replace the QA team?', 'No. Bugster handles repetitive coverage so QA engineers can focus on strategy, risk, edge cases, and release confidence.'],
  ['Why not just use Playwright or Cypress?', 'Bugster can work alongside code-based tools, but removes the setup and maintenance burden for teams that want plain-language automation.'],
  ['Can I integrate Bugster into my CI/CD pipeline?', 'Yes. Run suites on pull requests, scheduled builds, deployments, or manual release checks.'],
  ['Can developers still test locally before pushing code?', 'Yes. Developers can sync tests locally, run checks from the CLI, and push changes back to the platform.'],
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Bugster home">
      <span className="logo-mark" />
      Bugster
    </a>
  )
}

function Chameleon({ variant = 'hero' }: { variant?: 'hero' | 'laptop' | 'team' | 'footer' }) {
  return (
    <svg className={`chameleon ${variant}`} viewBox="0 0 420 330" aria-hidden="true">
      <path className="puddle" d="M70 286c42 28 223 34 284-1 22-13 10-33-36-38-67-8-68-23-130-20-68 3-67 25-111 28-42 3-48 17-7 31z" />
      <path className="tail" d="M126 184c-48 1-75-51-39-80 30-24 77-3 66 37-9 35-53 25-39-3 7-14 26-9 20 7" />
      <path className="body" d="M134 95c45-52 116-20 123 47 44 6 73 34 76 78 3 45-30 72-76 73H149c-48 0-79-31-75-77 3-39 29-63 60-67-19-20-16-40 0-54z" />
      <path className="stripe" d="M104 214c32 10 60 5 82-22" />
      <path className="stripe" d="M116 256c37 1 65-13 88-40" />
      <path className="belly" d="M206 99c-20 33-16 84 16 116" />
      <circle className="eye" cx="222" cy="91" r="28" />
      <circle className="pupil" cx="230" cy="91" r="10" />
      <path className="mouth" d="M248 144c18 4 33 0 43-11" />
      <path className="arm" d="M243 173c27 2 49-13 64-42" />
      <path className="arm" d="M168 183c-9 26-26 40-52 44" />
      {variant === 'hero' && (
        <>
          <rect className="code-card" x="267" y="42" width="111" height="85" rx="10" />
          <path className="pink" d="M288 64h52M300 84h61M286 103h29M333 103h22" />
          <circle className="magnify" cx="259" cy="116" r="30" />
          <path className="magnify-handle" d="M281 139l28 28" />
        </>
      )}
      {variant === 'laptop' && <rect className="laptop" x="128" y="178" width="140" height="64" rx="8" />}
      {variant === 'team' && (
        <>
          <path className="coat" d="M98 122l-34 90h76z" />
          <path className="coat pink-coat" d="M287 126l-22 92h74z" />
        </>
      )}
      {variant === 'footer' && <path className="code-symbol" d="M54 164l-44 38 44 38M366 164l44 38-44 38" />}
    </svg>
  )
}

function Hero() {
  return (
    <header className="hero" id="top">
      <nav className="nav">
        <Logo />
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#business">Business</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
          <a href="#community">Community⌄</a>
        </div>
        <div className="nav-actions">
          <button className="btn ghost" onClick={() => alert('Login flow would open here.')}>Log in</button>
          <a className="btn lime" href="#join">Start testing →</a>
        </div>
      </nav>
      <div className="announcement">
        <span>A letter to our users, customers and friends</span>
        <a href="#faq">Read more →</a>
      </div>
      <section className="hero-card">
        <div className="hero-copy">
          <h1>Empower your QA with AI testing</h1>
          <p>AI-powered testing that supercharges your QA. Match engineering speed and ship with confidence.</p>
          <a className="btn lime" href="#join">Start testing →</a>
          <p className="micro">Want to learn more? <a href="#join">Contact us</a></p>
        </div>
        <Chameleon />
        <span className="fold" />
      </section>
      <section className="trust">
        <p>They trust in Bugster</p>
        <div className="logo-marquee">
          <div>{[...logos, ...logos].map((logo, index) => <span key={`${logo}-${index}`}>{logo}</span>)}</div>
        </div>
      </section>
    </header>
  )
}

function BrowserDemo() {
  return (
    <section className="section white" id="home">
      <h2><span className="corner-square" />AI agents test your app on real browsers</h2>
      <p>No scripts. No selectors. Just describe what to test and watch the agent click, type, and navigate like a real user.</p>
      <div className="browser">
        <div className="left-pane">
          <strong>✣ New Test</strong>
          <div className="prompt">Describe a user flow to test... <button>Run</button></div>
          <ol className="agent-steps">
            <li>Navigating to Amazon and reading the page.</li>
            <li>Typing “1984” into the search bar.</li>
            <li>Opening the first hardcover result.</li>
            <li>Adding the book to cart.</li>
            <li>Test passed.</li>
          </ol>
        </div>
        <div className="right-pane">
          <div className="browser-bar"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /> https://www.amazon.com</div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="section texture" id="business">
      <span className="pill-label">Who it&apos;s for</span>
      <h2>Built for every engineering team</h2>
      <div className="team-panel">
        <div className="tabs"><button>QA Engineers</button><span>Engineering Leaders</span><span>Developers</span></div>
        <div className="metric"><strong>10x</strong><span>more test coverage</span></div>
        <div className="metric"><strong>&lt; 5 min</strong><span>to generate a full suite</span></div>
        <div className="metric"><strong>Zero</strong><span>coding required</span></div>
        <div className="panel-cta">
          <h3>Stop clicking. Start owning quality at scale.</h3>
          <p>Use plain English to describe flows, and let AI agents generate and execute E2E tests automatically.</p>
          <a className="btn lime" href="#join">Get started for free →</a>
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  return (
    <section className="section white" id="docs">
      <span className="pill-label">How it works</span>
      <h2>One platform, every workflow</h2>
      <p>Whether you live in the IDE or the browser, Bugster meets you where you work.</p>
      <div className="workflow-grid">
        {workflowCards.map((card) => (
          <article key={card.title}>
            <span className="icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <ul>{card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section className="section texture split" id="community">
      <div className="stack-copy">
        <span className="pill-label">Our stack</span>
        <h2>Our Stack</h2>
        <p>We support the frameworks and tools modern teams use. Testing automation that fits your workflow, not the other way around.</p>
        <Chameleon variant="laptop" />
      </div>
      <div className="integration-panel">
        {['Deploy Platforms', 'Git Providers', 'Notifications'].map((title, index) => (
          <div className="integration-row" key={title}>
            <h3>{title}</h3>
            <p>{index === 0 ? 'Deploy and run tests across multiple platforms' : index === 1 ? 'Connect your repository for automated testing' : 'Get alerts wherever your team lives'}</p>
            <div className="integration-icons">
              {integrations.slice(0, index === 1 ? 4 : 6).map(([name, icon]) => (
                <button key={`${title}-${name}`} onClick={() => alert(`${name} integration selected`)}>
                  <span>{icon}</span>
                  {name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section white pricing" id="pricing">
      <span className="pill-label">Pricing</span>
      <h2>Choose your plan</h2>
      <p>Choose the alternative that fits your team&apos;s needs. Still need something more adaptable? <a href="#join">Contact Us.</a></p>
      <div className="pricing-grid">
        <article>
          <div className="price-head"><h3>Starter</h3><strong>$0</strong></div>
          <p>Explore core testing with no setup</p>
          <ul><li>70 E2E test runs/month</li><li>Max 5 E2E tests per PR</li><li>Up to 3 tests in parallel</li><li>GitHub App + CLI integration</li></ul>
          <a className="btn ghost wide" href="#join">Start Free ›</a>
        </article>
        <article>
          <div className="price-head"><h3>Team</h3><strong>Custom</strong></div>
          <p>For teams that need scale, control and support</p>
          <ul><li>Custom E2E test runs volume</li><li>Custom Destructive Agent runs</li><li>Increased parallel execution</li><li>Priority support team</li><li>SLA guarantees</li></ul>
          <a className="btn lime wide" href="#join">Contact Us ›</a>
        </article>
      </div>
    </section>
  )
}

function TestimonialsSecurity() {
  return (
    <>
      <section className="testimonial texture">
        <div className="cloud cloud-one" />
        <h2>Loved by Engineering Teams</h2>
        <p>Bugster is designed to streamline your workflow and elevate your process.</p>
        <div className="stars">★★★★★</div>
        <blockquote>“No test writing, real-browser proof in the PR. That&apos;s the confidence we needed.”</blockquote>
        <span className="avatar">G</span>
        <small>Guillermo Guadarrama<br />Founder At Nexcar</small>
        <button className="arrow left">←</button><button className="arrow right">→</button>
      </section>
      <section className="section white security">
        <div>
          <span className="pill-label">Security</span>
          <h2>Your data, handled with care</h2>
          <p>No shortcuts, no excuses. Your code and test data are protected by design, not by afterthought.</p>
          <a href="#faq">Read our security practices →</a>
        </div>
        <div className="security-list">
          {['Encryption at rest & in transit', 'Zero training on your data', 'No code access'].map((item) => (
            <article key={item}><span className="icon">▣</span><h3>{item}</h3><p>Your data is safeguarded with strict boundaries and clear processing terms.</p></article>
          ))}
        </div>
      </section>
    </>
  )
}

function FaqCtaFooter() {
  const [open, setOpen] = useState(0)
  return (
    <>
      <section className="faq texture" id="faq">
        <span className="pill-label">FAQ</span>
        <h2>Have Questions? We&apos;ve Answers!</h2>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <article key={question} className={open === index ? 'open' : ''}>
              <button onClick={() => setOpen(open === index ? -1 : index)}>
                {question}<span>{open === index ? '⌃' : '⌄'}</span>
              </button>
              <div className="faq-answer" aria-hidden={open !== index}>
                <p>{answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="join white" id="join">
        <div className="window-card">
          <div className="window-bar">— × □</div>
          <div>
            <h2>Join us today!</h2>
            <p>Start testing for free. No credit card required.</p>
            <a className="btn lime" href="mailto:hello@example.com">Start testing →</a>
            <a className="btn ghost" href="mailto:hello@example.com">Contact us</a>
          </div>
          <Chameleon variant="team" />
        </div>
      </section>
      <footer className="footer texture">
        <Logo />
        <div><strong>Product</strong><a href="#join">Sign Up</a><a href="#pricing">Pricing</a><a href="#docs">Docs</a></div>
        <div><strong>Community</strong><a href="#community">Join Discord</a><a href="#join">Contact Us</a><a href="#faq">Newsletter</a></div>
        <Chameleon variant="footer" />
        <p>© 2025 Bugster Inc. All rights reserved. <a href="#faq">Privacy Policy</a> <a href="#faq">Terms of Service</a></p>
      </footer>
    </>
  )
}

function App() {
  useRevealOnScroll()

  return (
    <>
      <Hero />
      <main>
        <BrowserDemo />
        <TeamSection />
        <Workflow />
        <Stack />
        <Pricing />
        <TestimonialsSecurity />
        <FaqCtaFooter />
      </main>
    </>
  )
}

export default App

function useRevealOnScroll() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const targets = document.querySelectorAll('.section, .hero-card, .trust, .testimonial, .join, .footer')
    targets.forEach((target) => target.classList.add('reveal'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.16 })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])
}
