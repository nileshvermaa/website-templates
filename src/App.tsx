import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import './App.css';

// Lazy-load Spline for performance (code-split the heavy WebGL bundle)
const Spline = lazy(() => import('@splinetool/react-spline'));

const SPLINE_SCENE = 'https://prod.spline.design/TkMCmXxr3e54ry0Z/scene.splinecode';

// Detect low-end devices that shouldn't load WebGL
function shouldLoadSpline(): boolean {
  if (typeof window === 'undefined') return false;
  const isMobile = window.innerWidth < 768;
  const isLowEnd = typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 2;
  return !isMobile && !isLowEnd;
}

function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [canLoadSpline] = useState(shouldLoadSpline);
  const revealRefs = useRef<HTMLElement[]>([]);

  // Scroll handler: navbar bg + reveal animations
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 40);

      revealRefs.current.forEach((el) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.88) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // trigger on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Collect refs for scroll reveal
  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${navScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a href="#" className="logo">
            <span className="logo-dot" />
            Neura
          </a>

          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#showcase">Showcase</a></li>
            <li><a href="#workflow">How It Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#cta" className="nav-cta">Get Started</a></li>
          </ul>

          <button className="mobile-menu-btn" aria-label="Open menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        {/* Spline 3D background acts as the entire hero */}
        <div className="hero-spline-wrapper">
          <div className={`hero-fallback ${splineLoaded ? 'loaded' : ''}`} />
          {canLoadSpline && (
            <Suspense fallback={
              <div className="spline-loader">
                <div className="spinner" />
              </div>
            }>
              <Spline
                scene={SPLINE_SCENE}
                onLoad={() => setSplineLoaded(true)}
                style={{ width: '100%', height: '100%' }}
              />
            </Suspense>
          )}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features-section" id="features">
        {/* Ambient aura */}
        <div className="aura aura-cyan" style={{ top: '-20%', right: '-10%' }} />

        <div className="container">
          <div className="section-label reveal" ref={addRevealRef}>Platform Capabilities</div>
          <h2 className="section-title reveal delay-1" ref={addRevealRef}>
            Everything you need to create<br />
            <span className="gradient-text">extraordinary experiences</span>
          </h2>
          <p className="section-desc reveal delay-2" ref={addRevealRef}>
            From generative 3D assets to real-time collaboration, Neura Studio
            provides the full creative stack for modern spatial design.
          </p>

          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`feature-card reveal delay-${(i % 3) + 1}`}
                ref={addRevealRef}
              >
                <div className={`feature-icon ${f.color}`}>{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHOWCASE — Interactive Spline ===== */}
      <section className="showcase-section" id="showcase">
        <div className="aura aura-violet" style={{ bottom: '-20%', left: '-15%' }} />

        <div className="container">
          <div className="showcase-grid">
            <div className="showcase-visual reveal" ref={addRevealRef}>
              {canLoadSpline ? (
                <Suspense fallback={
                  <div className="spline-loader">
                    <div className="spinner" />
                  </div>
                }>
                  <div className="showcase-spline-inner">
                    <Spline scene={SPLINE_SCENE} style={{ width: '100%', height: '100%' }} />
                  </div>
                </Suspense>
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, rgba(0,229,255,0.05), rgba(124,58,237,0.05))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', fontSize: '0.9rem'
                }}>
                  3D Preview — available on desktop
                </div>
              )}
            </div>

            <div className="showcase-content">
              <div className="section-label reveal" ref={addRevealRef}>Interactive Canvas</div>
              <h2 className="section-title reveal delay-1" ref={addRevealRef}>
                Explore your scene in<br />
                <span className="gradient-text">real time</span>
              </h2>
              <p className="section-desc reveal delay-2" ref={addRevealRef}>
                Interact with the 3D canvas directly. Rotate, zoom, and explore — the scene
                responds to your gestures. What you see is what your users get.
              </p>

              <ul className="showcase-features-list">
                {SHOWCASE_ITEMS.map((item, i) => (
                  <li key={item} className={`reveal delay-${i + 1}`} ref={addRevealRef}>
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORKFLOW ===== */}
      <section className="workflow-section" id="workflow">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label reveal" ref={addRevealRef}>How It Works</div>
            <h2 className="section-title reveal delay-1" ref={addRevealRef}>
              From idea to production<br />
              <span className="gradient-text">in four steps</span>
            </h2>
          </div>

          <div className="workflow-steps">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className={`workflow-step reveal delay-${i + 1}`}
                ref={addRevealRef}
              >
                <div className="step-number">0{i + 1}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section" id="testimonials">
        <div className="aura aura-cyan" style={{ top: '10%', left: '-20%' }} />

        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="section-label reveal" ref={addRevealRef}>What People Say</div>
            <h2 className="section-title reveal delay-1" ref={addRevealRef}>
              Loved by creators <span className="gradient-text">worldwide</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`testimonial-card reveal delay-${(i % 3) + 1}`}
                ref={addRevealRef}
              >
                <div className="testimonial-stars">{'★'.repeat(5)}</div>
                <p className="testimonial-text">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section" id="cta">
        <div className="container">
          <div className="cta-box reveal" ref={addRevealRef}>
            <h2 className="cta-title">
              Ready to build the <span className="gradient-text">future</span>?
            </h2>
            <p className="cta-desc">
              Join thousands of creators and studios already building immersive
              experiences with Neura Studio. Start for free — no credit card required.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn-primary" id="footer-cta-primary">
                Get Started Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#" className="btn-secondary" id="footer-cta-secondary">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-dot" />
                Neura
              </div>
              <p>
                AI-powered spatial design platform for the next generation of
                creators, developers, and digital studios.
              </p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#showcase">Showcase</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Changelog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">
              © {new Date().getFullYear()} Neura Studio. All rights reserved.
            </div>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Twitter/X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ===== DATA ===== */

const FEATURES = [
  {
    icon: '⚡',
    title: 'AI Scene Generation',
    desc: 'Describe what you want in natural language and watch Neura generate production-ready 3D scenes with lighting, materials, and animations.',
    color: 'cyan',
  },
  {
    icon: '🎨',
    title: 'Material Intelligence',
    desc: 'Smart material system that understands context — apply PBR textures, glass, metals, and procedural shaders with a single click.',
    color: 'violet',
  },
  {
    icon: '🌐',
    title: 'Instant Web Export',
    desc: 'One-click deployment to the web. Your 3D scenes become interactive experiences — embeddable anywhere with zero configuration.',
    color: 'pink',
  },
  {
    icon: '🔄',
    title: 'Real-time Collaboration',
    desc: 'Work together in the same 3D space. See cursors, edits, and changes from your team members live — like Figma, but for 3D.',
    color: 'cyan',
  },
  {
    icon: '📱',
    title: 'Responsive by Default',
    desc: 'Every scene auto-adapts to any screen size. Smart LOD switching and device detection ensure smooth performance everywhere.',
    color: 'violet',
  },
  {
    icon: '🔌',
    title: 'Developer SDK',
    desc: 'Full programmatic control with our TypeScript SDK. Trigger animations, read variables, and build custom interactions via code.',
    color: 'pink',
  },
];

const SHOWCASE_ITEMS = [
  'Orbit, pan, and zoom with mouse or touch',
  'GPU-accelerated WebGL rendering at 60fps',
  'Event-driven API for custom interactions',
  'Seamless embed into any React / Next.js app',
  'Auto fallback for low-end devices',
];

const STEPS = [
  {
    title: 'Design',
    desc: 'Create your 3D scene in the visual editor or generate one with AI prompts.',
  },
  {
    title: 'Animate',
    desc: 'Add interactions, physics, scroll-triggered animations, and state transitions.',
  },
  {
    title: 'Export',
    desc: 'One-click export to a production-ready URL. Optimized for web performance.',
  },
  {
    title: 'Deploy',
    desc: 'Embed anywhere — React, Next.js, vanilla HTML. Goes live in under a minute.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Creative Director, Arcform Studio',
    quote: 'Neura completely transformed how our team approaches spatial design. The AI generation saves us weeks of modeling time on every project.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Senior Engineer, TechFlow',
    quote: 'The developer SDK is incredibly well designed. We integrated interactive 3D product demos into our site in a single afternoon.',
  },
  {
    name: 'Elena Kowalski',
    role: 'Founder, PixelVerse',
    quote: 'I was skeptical about AI-generated 3D, but the quality is unreal. Our clients cannot believe how fast we deliver immersive experiences now.',
  },
];

export default App;
