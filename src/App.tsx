import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'

type ThemeKey = 'blue' | 'orange' | 'purple' | 'green' | 'gray'

const THEMES: { key: ThemeKey; color: string; label: string }[] = [
  { key: 'blue', color: '#335cff', label: 'Blue' },
  { key: 'orange', color: '#f17b2c', label: 'Orange' },
  { key: 'purple', color: '#7d52f4', label: 'Purple' },
  { key: 'green', color: '#1fc16b', label: 'Green' },
  { key: 'gray', color: '#525866', label: 'Gray' },
]

const FEATURES = [
  {
    title: 'Figma source of truth',
    body: 'Variables, components, and tokens stay in lock-step with the code library. One source, two surfaces.',
    icon: 'figma',
  },
  {
    title: 'Typed component API',
    body: 'Every primitive ships with strict TypeScript types, sensible defaults, and headless escape hatches.',
    icon: 'types',
  },
  {
    title: 'Accessibility built-in',
    body: 'Keyboard nav, focus rings, ARIA roles, and color contrast are not afterthoughts — they ship by default.',
    icon: 'a11y',
  },
  {
    title: 'Five-theme switcher',
    body: 'Brand-recolor an entire app by flipping a single root attribute. Themeable down to the token.',
    icon: 'theme',
  },
  {
    title: 'Dark mode parity',
    body: 'Identical density, identical motion, identical components. Light and dark are first-class citizens.',
    icon: 'moon',
  },
  {
    title: 'Composable primitives',
    body: 'Slot APIs, polymorphic `as` props, and exposed sub-parts. Compose without forking.',
    icon: 'block',
  },
  {
    title: 'Tailwind native',
    body: 'Drop into any Tailwind project. CSS variables map cleanly to your existing utility classes.',
    icon: 'tw',
  },
  {
    title: 'Headless ready',
    body: 'Strip the styling, keep the behavior. Or ship as-is. Either path is fully supported.',
    icon: 'wand',
  },
  {
    title: 'Versioned releases',
    body: 'Semver, codemods on breaking changes, and migration notes that respect your release window.',
    icon: 'tag',
  },
]

const COMPONENTS = [
  { name: 'Buttons', count: 14, preview: 'button' },
  { name: 'Inputs', count: 22, preview: 'input' },
  { name: 'Avatars', count: 9, preview: 'avatar' },
  { name: 'Toggles', count: 6, preview: 'toggle' },
  { name: 'Tabs', count: 5, preview: 'tabs' },
  { name: 'Badges', count: 12, preview: 'badge' },
  { name: 'Charts', count: 18, preview: 'chart' },
  { name: 'Modals', count: 8, preview: 'modal' },
  { name: 'Lists', count: 11, preview: 'list' },
] as const

const TEMPLATES = [
  {
    tag: 'Dashboard',
    title: 'Console',
    body: 'Analytics-first admin surface with editable charts, filters, and a layered nav.',
    art: 'dash',
  },
  {
    tag: 'Marketing',
    title: 'Launch',
    body: 'Conversion-focused landing template with sectioned scroll, pricing, and FAQ.',
    art: 'app',
  },
  {
    tag: 'Productivity',
    title: 'Inbox',
    body: 'A focused triage UI for email, ticketing, or any list-driven workflow.',
    art: 'mail',
  },
] as const

const FAQS = [
  ['Is this a UI kit or a design system?',
    'Both. The Figma file and code library share the same token names, component anatomy, and variant matrix — so designers and engineers reference one source.'],
  ['Do I need TypeScript?',
    'No. Every component works in plain JavaScript projects, but if you do use TypeScript, you get strict generics, polymorphic `as` props, and inferred slot types out of the box.'],
  ['Which frameworks are supported?',
    'React is the primary target. The styling layer is framework-agnostic CSS variables, so consuming the tokens from Svelte, Vue, or Solid takes minutes.'],
  ['Is it free?',
    'The base library is free under MIT. A Pro tier unlocks the full Figma library, the templates shown above, and lifetime updates.'],
  ['How do upgrades work?',
    'Semver across the board. Breaking changes ship with a codemod, a written migration note, and at least one minor-version overlap.'],
  ['Can I use it for client work?',
    'Yes — including the Pro tier. The only thing you cannot do is repackage the library itself for resale.'],
]

function ArrowRight() {
  return (
    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Icon({ name }: { name: string }) {
  const stroke = 'currentColor'
  const w = 18
  switch (name) {
    case 'figma':
      return (
        <svg width={w} height={w} viewBox="0 0 24 24" fill="none">
          <path d="M12 12a3 3 0 1 1-3-3h3v6H9a3 3 0 0 1 0-6m3-3a3 3 0 0 1 0 6h-3V3h3a3 3 0 0 1 0 6m-3 0H6a3 3 0 1 1 0-6h3v6"
            stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )
    case 'types':
      return (
        <svg width={w} height={w} viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M9 6v14M4 14l4 4 4-4M15 14l4 4 4-4" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'a11y':
      return (
        <svg width={w} height={w} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="6" r="2" stroke={stroke} strokeWidth="1.6" />
          <path d="M5 10h14M10 21l2-6 2 6M8 10v11M16 10v11" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'theme':
      return (
        <svg width={w} height={w} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="1.6" />
          <path d="M12 3v18M3 12h18" stroke={stroke} strokeWidth="1.6" />
        </svg>
      )
    case 'moon':
      return (
        <svg width={w} height={w} viewBox="0 0 24 24" fill="none">
          <path d="M20 14a8 8 0 0 1-10-10 8 8 0 1 0 10 10z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )
    case 'block':
      return (
        <svg width={w} height={w} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="8" height="8" rx="1.5" stroke={stroke} strokeWidth="1.6" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" stroke={stroke} strokeWidth="1.6" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" stroke={stroke} strokeWidth="1.6" />
        </svg>
      )
    case 'tw':
      return (
        <svg width={w} height={w} viewBox="0 0 24 24" fill="none">
          <path d="M3 13c2-5 5-5 8-3s5 1 6-2c-2 5-5 5-8 3s-5-1-6 2zm6 6c2-5 5-5 8-3s5 1 6-2c-2 5-5 5-8 3s-5-1-6 2z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )
    case 'wand':
      return (
        <svg width={w} height={w} viewBox="0 0 24 24" fill="none">
          <path d="M5 19L18 6M14 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1zM4 14l.6 1.8L6.4 16.5l-1.8.7L4 19l-.6-1.8L1.6 16.5l1.8-.7z" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      )
    case 'tag':
      return (
        <svg width={w} height={w} viewBox="0 0 24 24" fill="none">
          <path d="M3 12V4h8l10 10-8 8z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="7.5" cy="7.5" r="1.5" stroke={stroke} strokeWidth="1.6" />
        </svg>
      )
    default:
      return null
  }
}

function PromoBar() {
  return (
    <div className="promo">
      <div className="container promo-inner">
        <span className="tag">v3.0</span>
        <span>Token studio, dark theme parity, and a new chart primitive.</span>
        <a href="#changelog">Read the release →</a>
      </div>
    </div>
  )
}

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Home">
          <span className="brand-mark" aria-hidden />
          align/
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#features">Library</a>
          <a href="#components">Blocks <span className="new">NEW</span></a>
          <a href="#templates">Templates</a>
          <a href="#docs">Docs</a>
          <a href="#changelog">Changelog</a>
        </nav>
        <div className="nav-cta">
          <a href="#github" className="btn btn-ghost" aria-label="GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.7 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"/></svg>
            <span>12.4k</span>
          </a>
          <a href="#start" className="btn btn-primary">Get Started <ArrowRight /></a>
        </div>
      </div>
    </header>
  )
}

function Avatars() {
  const colors = ['#fecaca', '#bfdbfe', '#bbf7d0', '#fde68a', '#ddd6fe']
  return (
    <span className="avatars" aria-hidden>
      {colors.map((c, i) => (
        <span key={i} style={{ background: c }} />
      ))}
    </span>
  )
}

function Hero({ theme, setTheme }: { theme: ThemeKey; setTheme: (t: ThemeKey) => void }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <span className="eyebrow reveal reveal-1">
          <span className="dot" /> Design system · v3.0 shipped
        </span>
        <h1 className="reveal reveal-2">
          Design and code,<br />
          <span className="accent">finally on the same page.</span>
        </h1>
        <p className="lead reveal reveal-3">
          A Figma library and a React library that share the same tokens, the same anatomy,
          and the same release cadence. Build product UI without translation loss.
        </p>
        <div className="hero-ctas reveal reveal-4">
          <a href="#start" className="btn btn-primary btn-lg">Get started — it&apos;s free <ArrowRight /></a>
          <a href="#components" className="btn btn-ghost btn-lg">Browse components</a>
        </div>
        <div className="hero-trust reveal reveal-5">
          <Avatars />
          <span><strong style={{ color: 'var(--ink-950)' }}>4,200+</strong> teams shipping with align</span>
          <span aria-hidden style={{ color: 'var(--ink-300)' }}>·</span>
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </section>
  )
}

function ThemeSwitch({ theme, setTheme }: { theme: ThemeKey; setTheme: (t: ThemeKey) => void }) {
  return (
    <div className="theme-switch" role="radiogroup" aria-label="Theme">
      {THEMES.map(t => (
        <button
          key={t.key}
          className={'swatch' + (theme === t.key ? ' active' : '')}
          style={{ ['--c' as never]: t.color }}
          aria-label={t.label}
          aria-checked={theme === t.key}
          role="radio"
          onClick={() => setTheme(t.key)}
        />
      ))}
    </div>
  )
}

function Preview() {
  return (
    <section className="preview">
      <div className="container">
        <div className="preview-frame reveal reveal-3">
          <div className="preview-tabs">
            <div className="preview-dots" aria-hidden>
              <span /><span /><span />
            </div>
            <span className="preview-tab active">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              SignIn.tsx
            </span>
            <span className="preview-tab">tokens.css</span>
            <span className="preview-tab">theme.ts</span>
          </div>
          <div className="preview-body">
            <pre className="code-pane" aria-label="Source code">
              <code>
                <span className="code-line"><span className="code-num">1</span><span className="tok-com">// One import. Themeable. Typed.</span></span>
                <span className="code-line"><span className="code-num">2</span><span className="tok-kw">import</span> {'{ '}<span className="tok-fn">Button</span>, <span className="tok-fn">Input</span>, <span className="tok-fn">Card</span>{' }'} <span className="tok-kw">from</span> <span className="tok-str">"align/ui"</span>;</span>
                <span className="code-line"><span className="code-num">3</span></span>
                <span className="code-line"><span className="code-num">4</span><span className="tok-kw">export function</span> <span className="tok-fn">SignIn</span>() {'{'}</span>
                <span className="code-line"><span className="code-num">5</span>  <span className="tok-kw">return</span> (</span>
                <span className="code-line"><span className="code-num">6</span>    <span className="tok-punct">{'<'}</span><span className="tok-fn">Card</span> <span className="tok-prop">elevated</span> <span className="tok-prop">padding</span>=<span className="tok-str">"lg"</span><span className="tok-punct">{'>'}</span></span>
                <span className="code-line"><span className="code-num">7</span>      <span className="tok-punct">{'<'}</span><span className="tok-fn">Card.Title</span><span className="tok-punct">{'>'}</span>Welcome back<span className="tok-punct">{'</'}</span><span className="tok-fn">Card.Title</span><span className="tok-punct">{'>'}</span></span>
                <span className="code-line"><span className="code-num">8</span>      <span className="tok-punct">{'<'}</span><span className="tok-fn">Input</span> <span className="tok-prop">label</span>=<span className="tok-str">"Email"</span> <span className="tok-prop">type</span>=<span className="tok-str">"email"</span> <span className="tok-punct">/{'>'}</span></span>
                <span className="code-line"><span className="code-num">9</span>      <span className="tok-punct">{'<'}</span><span className="tok-fn">Input</span> <span className="tok-prop">label</span>=<span className="tok-str">"Password"</span> <span className="tok-prop">type</span>=<span className="tok-str">"password"</span> <span className="tok-punct">/{'>'}</span></span>
                <span className="code-line"><span className="code-num">10</span>      <span className="tok-punct">{'<'}</span><span className="tok-fn">Button</span> <span className="tok-prop">variant</span>=<span className="tok-str">"accent"</span> <span className="tok-prop">fullWidth</span><span className="tok-punct">{'>'}</span>Continue<span className="tok-punct">{'</'}</span><span className="tok-fn">Button</span><span className="tok-punct">{'>'}</span></span>
                <span className="code-line"><span className="code-num">11</span>    <span className="tok-punct">{'</'}</span><span className="tok-fn">Card</span><span className="tok-punct">{'>'}</span></span>
                <span className="code-line"><span className="code-num">12</span>  );</span>
                <span className="code-line"><span className="code-num">13</span>{'}'}</span>
              </code>
            </pre>
            <div className="render-pane">
              <form className="render-card" onSubmit={(e) => e.preventDefault()}>
                <h4>Welcome back</h4>
                <p className="sub">Sign in to continue to your workspace.</p>
                <div className="field">
                  <label htmlFor="demo-email">Email</label>
                  <input id="demo-email" type="email" placeholder="you@studio.com" />
                </div>
                <div className="field">
                  <label htmlFor="demo-pw">Password</label>
                  <input id="demo-pw" type="password" placeholder="••••••••" />
                </div>
                <button type="submit" className="btn btn-accent">Continue <ArrowRight /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="dot" /> Why teams choose align</span>
          <h2 className="section-title">Nine reasons your design system<br />should not be a side quest.</h2>
          <p className="section-lead" style={{ textAlign: 'center' }}>
            Built for product teams who care about typography, motion, and the bus-factor of their UI layer.
          </p>
        </div>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <article className="feature" key={f.title}>
              <span className="ico"><Icon name={f.icon} /></span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function MiniPreview({ kind }: { kind: string }) {
  switch (kind) {
    case 'button':
      return (
        <div className="mini-stack" style={{ alignItems: 'center' }}>
          <span className="mini-button">Continue <ArrowRight /></span>
          <span className="mini-button" style={{ background: 'transparent', color: 'var(--accent)', boxShadow: 'inset 0 0 0 1px var(--accent)' }}>Stroke</span>
        </div>
      )
    case 'input':
      return (
        <div className="mini-stack">
          <div className="mini-row"><span style={{ fontSize: 12, color: 'var(--ink-400)' }}>Email</span><span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--ink-950)' }}>nilesh@studio.com</span></div>
          <div className="mini-row" style={{ borderColor: 'var(--accent)', boxShadow: '0 0 0 3px var(--accent-soft)' }}><span style={{ fontSize: 12 }}>Password</span><span style={{ marginLeft: 'auto', fontSize: 12 }}>••••••••</span></div>
        </div>
      )
    case 'avatar':
      return (
        <div className="mini-avatar-group">
          <span>NV</span><span>JA</span><span>RM</span><span>+5</span>
        </div>
      )
    case 'toggle':
      return (
        <div className="mini-stack" style={{ alignItems: 'center', gap: 14 }}>
          <span className="mini-toggle" />
          <span className="mini-toggle" style={{ background: 'var(--bg-sunken)' }} />
        </div>
      )
    case 'tabs':
      return (
        <div className="mini-tabs">
          <span className="active">Overview</span>
          <span>Activity</span>
          <span>Settings</span>
        </div>
      )
    case 'badge':
      return (
        <div className="mini-stack" style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          <span className="mini-badge"><span className="mini-dot" />Live</span>
          <span className="mini-badge" style={{ background: 'var(--bg-soft)', color: 'var(--ink-600)' }}>Draft</span>
          <span className="mini-badge" style={{ background: '#fff1e6', color: '#c8551a' }}>Beta</span>
        </div>
      )
    case 'chart':
      return (
        <div className="mini-chart" style={{ height: 120 }}>
          {[40, 65, 30, 80, 55, 95, 70].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      )
    case 'modal':
      return (
        <div className="mini-modal">
          <div className="head">Confirm delete <em>esc</em></div>
          <div className="body">This action cannot be undone. The project will be permanently removed.</div>
          <div className="actions">
            <span className="mini-button ghost">Cancel</span>
            <span className="mini-button" style={{ background: '#e1442b' }}>Delete</span>
          </div>
        </div>
      )
    case 'list':
      return (
        <div className="mini-stack">
          <div className="mini-row"><span className="mini-dot" /><span style={{ fontSize: 12 }}>Token studio v2</span><span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--ink-400)' }}>2h</span></div>
          <div className="mini-row"><span className="mini-bar"><i style={{ width: '70%' }} /></span></div>
          <div className="mini-row"><span className="mini-dot" style={{ background: 'var(--ink-300)' }} /><span style={{ fontSize: 12, color: 'var(--ink-600)' }}>Chart primitive</span><span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--ink-400)' }}>1d</span></div>
        </div>
      )
    default:
      return null
  }
}

function Components() {
  return (
    <section className="section" id="components">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="dot" /> 180+ blocks, one library</span>
          <h2 className="section-title">Components for the parts<br />you keep building anyway.</h2>
        </div>
        <div className="showcase-grid">
          {COMPONENTS.map((c) => (
            <article className="comp-card" key={c.name}>
              <div className="comp-preview"><MiniPreview kind={c.preview} /></div>
              <div className="comp-meta">
                <h4>{c.name}</h4>
                <span className="count">{c.count} variants</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TemplateArt({ kind }: { kind: string }) {
  if (kind === 'dash') {
    return (
      <div className="template-art art-dash">
        <div className="bar"><i /><i /><i /><i /></div>
        <div className="panel">
          <div className="line short" />
          <div className="line med" />
          <div className="line" />
        </div>
        <div className="panel">
          <div className="line med" />
          <div className="line short" />
        </div>
      </div>
    )
  }
  if (kind === 'app') {
    return (
      <div className="template-art art-app">
        <span className="pill">LANDING</span>
        <div className="big">Ship faster.</div>
        <div className="row" style={{ flexDirection: 'column', gap: 6 }}>
          <i className="fill" />
          <i />
          <i style={{ width: '70%' }} />
        </div>
      </div>
    )
  }
  return (
    <div className="template-art art-mail">
      <div className="mail-card unread">
        <div className="av" />
        <div className="lines" style={{ flex: 1 }}>
          <i style={{ width: '60%' }} />
          <i style={{ width: '90%' }} />
        </div>
      </div>
      <div className="mail-card">
        <div className="av" />
        <div className="lines" style={{ flex: 1 }}>
          <i style={{ width: '50%' }} />
          <i style={{ width: '80%' }} />
        </div>
      </div>
      <div className="mail-card">
        <div className="av" />
        <div className="lines" style={{ flex: 1 }}>
          <i style={{ width: '70%' }} />
          <i style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  )
}

function Templates() {
  return (
    <section className="section" id="templates" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="dot" /> Production-ready templates</span>
          <h2 className="section-title">Start from a real surface,<br />not from an empty Figma frame.</h2>
        </div>
        <div className="templates-grid">
          {TEMPLATES.map((t) => (
            <article className="template" key={t.title}>
              <TemplateArt kind={t.art} />
              <div className="template-meta">
                <span className="template-tag">{t.tag}</span>
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><span className="dot" /> Frequently asked</span>
          <h2 className="section-title">Questions, answered.</h2>
        </div>
        <div className="faq">
          {FAQS.map(([q, a], i) => (
            <div className={'faq-item' + (open === i ? ' open' : '')} key={q}>
              <button
                className="faq-trigger"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {q}
                <span className="plus" aria-hidden />
              </button>
              <div className="faq-answer">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Community() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const handle = (e: FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setSent(true)
  }
  return (
    <section className="section" id="newsletter" style={{ padding: '64px 24px' }}>
      <div className="community">
        <div className="community-inner">
          <div>
            <h2>The changelog,<br />in your inbox.</h2>
            <p>New components, theme studio drops, and release notes. Roughly twice a month. No spam, ever.</p>
          </div>
          <div>
            <form className="signup" onSubmit={handle}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.com"
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-accent">
                {sent ? 'Subscribed ✓' : <>Subscribe <ArrowRight /></>}
              </button>
            </form>
            <p className="signup-note">3,800+ designers and engineers · unsubscribe in one click</p>
          </div>
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
              align/
            </a>
            <p>A design system for product teams who treat the UI layer as infrastructure.</p>
            <div className="footer-social">
              <a href="#x" aria-label="X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-4.77-6.236L4.96 22H2l7.04-8.046L2 2h6.91l4.31 5.74L18.244 2zm-2.39 18h1.886L8.23 4H6.235l9.62 16z"/></svg>
              </a>
              <a href="#gh" aria-label="GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.7 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"/></svg>
              </a>
              <a href="#fig" aria-label="Figma">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 1 0 0 8zm-4-12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4zm12-8H8a4 4 0 0 0 0 8h8V4zm0 0h-4v8h4a4 4 0 1 0 0-8zm0 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Library</h5>
            <ul>
              <li><a href="#components">Components</a></li>
              <li><a href="#tokens">Tokens</a></li>
              <li><a href="#icons">Icons</a></li>
              <li><a href="#charts">Charts</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#changelog">Changelog</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Pro</h5>
            <ul>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#templates">Templates</a></li>
              <li><a href="#figma">Figma kit</a></li>
              <li><a href="#license">License</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} align/ ui · MIT</span>
          <span>Built with care, in 24px grid.</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState<ThemeKey>('blue')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <PromoBar />
      <Nav />
      <main>
        <Hero theme={theme} setTheme={setTheme} />
        <Preview />
        <Features />
        <Components />
        <Templates />
        <Faq />
        <Community />
      </main>
      <Footer />
    </>
  )
}
