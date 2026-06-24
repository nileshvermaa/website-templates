import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'

const showcase = [
  'https://framerusercontent.com/images/Wja21cnGj5X8UyQooAoK3HEwg.png?scale-down-to=1024',
  'https://framerusercontent.com/images/LwjvGt9JoipscS8sPv5USMUM.png?scale-down-to=1024',
  'https://framerusercontent.com/images/yCaEX9L7T1cvpbviEJMDPTQ0Y0.png?scale-down-to=1024',
]

const gallery = [
  'https://framerusercontent.com/images/Wja21cnGj5X8UyQooAoK3HEwg.png?scale-down-to=1024',
  'https://framerusercontent.com/images/LwjvGt9JoipscS8sPv5USMUM.png?scale-down-to=1024',
  'https://framerusercontent.com/images/yCaEX9L7T1cvpbviEJMDPTQ0Y0.png?scale-down-to=1024',
  'https://framerusercontent.com/images/L1rSQ2NSPHDK5WQueojOsfUo.png?scale-down-to=1024',
  'https://framerusercontent.com/images/pQKYiTk8JDcHsWi5YkEngsafOg.png?scale-down-to=1024',
  'https://framerusercontent.com/images/jmC1qCSx8rKF9N81vtOrRQzY3J4.png?scale-down-to=1024',
  'https://framerusercontent.com/images/FYDVmzmwWrfIxoQyqFcfuc8XHs.png?scale-down-to=1024&width=1203&height=1203',
  'https://framerusercontent.com/images/zxkuvevnCVzV1gWN0c12lEvlL3A.png?scale-down-to=1024&width=1200&height=1200',
  'https://framerusercontent.com/images/AmmmjdGrssRlOmCE0tZmluRtcw.png?scale-down-to=1024&width=1200&height=1200',
  'https://framerusercontent.com/images/97RcIbBPIKKvu0DdwxOZT9xbrg.png?scale-down-to=1024&width=1203&height=1212',
  'https://framerusercontent.com/images/Jt0EpPedzWVcxEzcIKD9zIM0bMA.png?scale-down-to=1024&width=1200&height=1200',
  'https://framerusercontent.com/images/DjjNdqxWt2GBf597A88xGYbaY4A.png?scale-down-to=1024&width=1200&height=1200',
]

const benefits = [
  ['QUICK TURNAROUND', 'Our clock starts the moment you buy a bundle. No more endless approval cycles. Get your content in just days.'],
  ['NO CONTRACT POLICY', 'No long, hefty contracts that hold up your time. Everything you need to know is right here.'],
  ['100% FLEXIBILITY', 'Post it today. Or tomorrow. Swap an image last minute on your editable file. Save your bundle for a rainy day.'],
]

const steps = [
  ['Pick your bundle', 'Take a look at our bundles and see what you need right now.'],
  ['Spare no detail', 'After your purchase, our Brand Content questionnaire is your first stop. Tell us everything.'],
  ['Ideas -> Delivery', 'A project manager gets in touch to discuss ideas, submit drafts, review content, and deliver final files.'],
]

const faqs = [
  ['Who will be working on my content?', 'A small content team handles strategy, design, copy, project management, and final delivery so your bundle feels cohesive.'],
  ['Is this AI content?', 'No. The site sells human-led strategy, design, and captions. AI can support research, but the creative direction is hand-finished.'],
  ['How fast will I get my content?', 'The signature bundle is positioned around a 7-day delivery window after purchase and questionnaire completion.'],
  ['What is your revision policy?', 'Each bundle includes one focused review pass so you can tighten copy, swap imagery, and keep the grid on brand.'],
  ['I am a social media manager. Can I use this for my clients?', 'Yes. The bundle works for social media managers who need a fast, white-label content sprint for client accounts.'],
  ['What kind of businesses do you work with?', 'Service brands, founders, studios, creators, ecommerce teams, and busy operators who need polished Instagram content without a retainer.'],
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Content on Demand home">
      <span>C</span><span>O</span><span>D</span>
    </a>
  )
}

function PromoBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="promo">
      <p>Content Constellation on Demand: 9-grid strategy, design, and copy. Only 8 beta spots. <a href="#pricing">Get your 9-grid</a></p>
      <button type="button" aria-label="Dismiss announcement" onClick={() => setVisible(false)}>x</button>
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [['Why us', '#why'], ['How it Works', '#process'], ['Pricing', '#pricing'], ['FAQs', '#faqs'], ['Blog', '#gallery']]

  return (
    <nav className="nav" aria-label="Primary navigation">
      <Logo />
      <button className="menu-toggle" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        Menu
      </button>
      <div className="nav-links" data-open={open}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
      <a className="bundle-cta" href="#pricing">BUY A SIGNATURE BUNDLE</a>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg" />
      <div className="hero-copy">
        <h1>You deserve to spend less time making your grid look like <a href="#gallery">this</a>. Or <a href="#gallery">this</a>. Or even <a href="#gallery">this</a>.</h1>
      </div>
      <div className="post-stack" aria-label="Example social posts">
        {showcase.map((src, index) => <img key={src} src={src} alt={`Content sample ${index + 1}`} />)}
      </div>
      <div className="quality">
        <p>All of the quality. None of the strings.</p>
        <a href="#process">SHOW ME HOW</a>
      </div>
    </header>
  )
}

function Benefits() {
  return (
    <section className="benefits reveal" id="why">
      <div className="section-title">
        <span>Do it for the-</span>
        <h2>Quick content that still feels custom.</h2>
      </div>
      <div className="benefit-grid">
        {benefits.map(([title, copy]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <a className="dark-link" href="#pricing">CHECK OUT BUNDLES</a>
    </section>
  )
}

function Process() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="process reveal" id="process">
      <div className="process-head">
        <h2>Meet cute -&gt; Goodbye.</h2>
        <p>How do we do this thing?</p>
      </div>
      <div className="step-grid">
        {steps.map(([title, copy], index) => (
          <article key={title}>
            <span>{`0${index + 1}`}</span>
            <h3>{title}</h3>
            {index > 0 && <button type="button" onClick={() => setVideoOpen(true)}>See Video ↓</button>}
            <p>{copy}</p>
          </article>
        ))}
      </div>
      {videoOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Process video preview">
          <button className="modal-close" type="button" onClick={() => setVideoOpen(false)}>Close</button>
          <div>
            <span>Video preview</span>
            <h3>The real site opens a short walkthrough here.</h3>
            <p>This recreation keeps the interaction live with a modal and keyboard-focusable close control.</p>
          </div>
        </div>
      )}
    </section>
  )
}

function Comparison() {
  const rows = [
    ['Quick', 'yes', 'no', 'maybe', 'no'],
    ['Custom', 'yes', 'yes', 'no', 'maybe'],
    ['Affordable', 'yes', 'no', 'yes', 'yes'],
  ]

  return (
    <section className="comparison reveal">
      <div>
        <h2>Here&apos;s why I&apos;d gun for us.</h2>
        <p>The experience of an agency, flexibility of a freelancer, and the comfort of an in-house team.</p>
      </div>
      <div className="table-wrap" aria-label="Content service comparison">
        <div className="compare-head"><span>X</span><span>COD</span><span>Agency</span><span>Templates</span><span>DIY</span></div>
        {rows.map((row) => (
          <div className="compare-row" key={row[0]}>
            {row.map((cell, index) => <span key={`${row[0]}-${index}`} data-good={cell === 'yes'}>{cell}</span>)}
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials reveal">
      <h2>We don&apos;t gossip but some people have been saying some things...</h2>
      <div className="quote-strip">
        {[
          ['The posts actually looked like my brand, not a Canva template wearing my colors.', 'Founder, Studio Brand'],
          ['It saved a week of back and forth. Captions, grid, files, done.', 'Social Media Manager'],
          ['The bundle gave us momentum without signing a retainer.', 'Business Owner'],
        ].map(([quote, by]) => (
          <blockquote key={quote}>
            <p>&quot;{quote}&quot;</p>
            <cite>{by}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="pricing reveal" id="pricing">
      <div className="pricing-copy">
        <h2>Down to business.</h2>
        <p>Pick your bundle ↓</p>
      </div>
      <article className="price-card">
        <div>
          <span className="recommended">Recommended</span>
          <h3>The Signature Bundle</h3>
          <p>12 posts - 7 days - 100% on brand. Long live the grid.</p>
        </div>
        <strong>777 USD</strong>
        <ul>
          <li>12 feed posts (statics & carousels with captions)</li>
          <li>Delivery in 7 days</li>
          <li>Get your source files</li>
        </ul>
        <a href="https://tally.so" target="_blank" rel="noreferrer">REQUEST A BUNDLE</a>
      </article>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq reveal" id="faqs">
      <h2>I&apos;ve got questions.</h2>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <article key={question} className={open === index ? 'open' : ''}>
            <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
              <span>{question}</span>
              <i>{open === index ? '-' : '+'}</i>
            </button>
            <div className="faq-answer" aria-hidden={open !== index}>
              <p>{answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="gallery reveal" id="gallery">
      <h2>Bringing glory back to the gram</h2>
      <div className="marquee">
        <div>
          {[...gallery, ...gallery].map((src, index) => <img key={`${src}-${index}`} src={src} alt="" loading="lazy" />)}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('You are on the list. The real signup would connect here.')
  }

  return (
    <footer className="footer">
      <div className="footer-title">
        <h2>CAME FOR<br />THE CONTENT,<br />STAYED FOR<br />THE GLOW UP</h2>
      </div>
      <div className="footer-form">
        <p>FOLLOW US ON</p>
        <h3>Join our Newsletter - ABC (All &apos;bout content)</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="role">I&apos;m a...</label>
          <select id="role" name="role">
            <option>Social media manager</option>
            <option>Business owner</option>
          </select>
          <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
          <button type="submit">SUBSCRIBE</button>
        </form>
        {message && <span className="form-message" role="status">{message}</span>}
      </div>
      <div className="legal">
        <span>© Content on Demand (by Brand Therapy). All rights reserved</span>
        <a href="#top">Terms of Use</a>
        <a href="#top">Privacy Policy</a>
        <a href="#top">Return & Refund Policy</a>
        <a href="#top">Contact</a>
      </div>
    </footer>
  )
}

function App() {
  useRevealOnScroll()

  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Process />
        <Comparison />
        <Testimonials />
        <Pricing />
        <Faq />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App

function useRevealOnScroll() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const targets = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])
}
