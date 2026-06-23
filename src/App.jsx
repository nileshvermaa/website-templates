import { useEffect, useRef, useState } from 'react';
import Reveal from './components/Reveal.jsx';
import Parallax from './components/Parallax.jsx';

/* A single hand-drawn ensō (zen circle) — imperfect on purpose. */
function Enso({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <path
        d="M132 38 C 70 14, 24 60, 28 110 C 32 162, 96 184, 142 162 C 178 145, 188 96, 160 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Nav() {
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last.current && y > 240);
      last.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`nav ${hidden ? 'nav--hidden' : ''}`}>
      <a href="#top" className="nav__mark">
        <span className="nav__kanji">凪</span>
        <span className="nav__name">nagi</span>
      </a>
      <a href="#invitation" className="nav__cta">stay for tea</a>
    </header>
  );
}

const practices = [
  {
    kanji: '朝',
    title: 'The morning ritual',
    body:
      'A short, almost wordless way to begin — three minutes before the day asks anything of you. No streaks to keep. No badge to earn. Only a door you may walk through.',
  },
  {
    kanji: '箱',
    title: 'A seasonal kit',
    body:
      'Four times a year, a small parcel arrives: a single handmade cup, a loose-leaf tea chosen for the season, and one card with one thought. Nothing more than fits in two cupped hands.',
  },
  {
    kanji: '息',
    title: 'The pause',
    body:
      'Brief guided breaths, each about the length of a held cup of tea. Recorded quietly, in real rooms, so the silences between words are kept exactly as they were.',
  },
  {
    kanji: '輪',
    title: 'A quiet circle',
    body:
      'A small membership that gathers rarely and speaks softly — a place that measures itself by how little it asks of your attention, not how much.',
  },
];

const chapters = [
  { n: '01', title: 'Arrive', body: 'Set the cup down. Let the room hold the morning before you fill it.' },
  { n: '02', title: 'Settle', body: 'One breath, then another. The shoulders remember how to lower on their own.' },
  { n: '03', title: 'Return', body: 'Carry a little of the quiet back out with you. It keeps better than you think.' },
];

const materials = [
  { label: 'Unglazed clay', note: 'thumb-marks left where the maker held it' },
  { label: 'Untreated oak', note: 'lightening, slowly, in the path of the sun' },
  { label: 'Undyed linen', note: 'creased, softened, lived-in and unbothered' },
  { label: 'Open paper', note: 'one line of ink, and the room around it' },
];

export default function App() {
  return (
    <div id="top" className="page">
      <Nav />

      {/* ───────────────────────── arrival ───────────────────────── */}
      <section className="hero" aria-label="Arrival">
        <Parallax speed={0.05} className="hero__halo" aria-hidden="true">
          <span className="breathing" />
        </Parallax>
        <Parallax speed={-0.12} className="hero__kanji" aria-hidden="true">凪</Parallax>

        <div className="hero__inner">
          <Reveal as="p" className="eyebrow" delay={200}>凪 · nagi · the calm when the wind drops</Reveal>
          <Reveal as="h1" className="hero__title" delay={420}>
            Leave the noise<br /><span className="ink-accent">at the door.</span>
          </Reveal>
          <Reveal as="p" className="hero__lead" delay={760}>
            A quiet membership for unhurried living — a daily invitation to do a
            little less, and feel a little more.
          </Reveal>
          <Reveal className="hero__cue" delay={1100}>
            <a href="#pause" className="quiet-link">stay a while
              <span className="cue-line" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── the pause ──────────────────────── */}
      <section id="pause" className="band">
        <div className="measure">
          <Reveal as="p" className="eyebrow eyebrow--sage">間 · ma · the space between</Reveal>
          <Reveal as="h2" className="statement" delay={120}>
            We spend our days adding. Nagi is built around
            what we gently take away.
          </Reveal>
          <Reveal as="p" className="prose" delay={260}>
            Most things made for your wellbeing want more of you — more minutes,
            more streaks, more notifications dressed as care. We wanted the
            opposite: a service shaped around absence, the way a tea room is
            shaped around its emptiness.
          </Reveal>
          <Reveal as="p" className="prose" delay={360}>
            Here, stillness is not the reward for finishing your work. It is the
            luxury itself — the single flower in the spare room, the held breath
            between one moment and the next.
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── the practice ───────────────────── */}
      <section id="practice" className="band band--paper2">
        <div className="measure">
          <Reveal as="p" className="eyebrow eyebrow--terra">何 · what you receive</Reveal>
          <Reveal as="h2" className="heading">Four small invitations</Reveal>
        </div>
        <div className="practice">
          {practices.map((p, i) => (
            <Reveal key={p.title} className="practice__item" delay={i * 120}>
              <span className="practice__kanji" aria-hidden="true">{p.kanji}</span>
              <div>
                <h3 className="practice__title">{p.title}</h3>
                <p className="prose prose--sm">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────────────── the rhythm ─────────────────────── */}
      <section id="rhythm" className="band">
        <div className="measure">
          <Reveal as="p" className="eyebrow eyebrow--indigo">日 · a day, in three breaths</Reveal>
          <Reveal as="h2" className="heading">The rhythm of it</Reveal>
        </div>
        <div className="chapters">
          {chapters.map((c, i) => (
            <Reveal key={c.n} className="chapter" delay={i * 160}>
              <span className="chapter__n">{c.n}</span>
              <h3 className="chapter__title">{c.title}</h3>
              <p className="prose prose--sm">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────────────── the materials ──────────────────── */}
      <section id="craft" className="band band--paper2">
        <div className="craft">
          <div className="craft__copy">
            <Reveal as="p" className="eyebrow eyebrow--terra">侘寂 · wabi-sabi</Reveal>
            <Reveal as="h2" className="heading" delay={120}>
              Made by hands, and a little by time.
            </Reveal>
            <Reveal as="p" className="prose" delay={240}>
              Nothing we send is perfect, and that is the point. A cup carries
              the small asymmetry of the hand that turned it. Wood lightens where
              the morning sun has crossed it for years. We choose materials that
              are honest about being touched, used, and quietly worn.
            </Reveal>
          </div>
          <div className="craft__list">
            {materials.map((m, i) => (
              <Reveal key={m.label} className="material" delay={i * 110}>
                <span className="material__label">{m.label}</span>
                <span className="material__note">{m.note}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── the words ──────────────────────── */}
      <section className="band band--quote">
        <Parallax speed={-0.06} className="quote__enso" aria-hidden="true">
          <Enso className="enso" />
        </Parallax>
        <Reveal as="blockquote" className="quote">
          <p>“I didn’t need another thing telling me to optimise my morning.
            I needed permission to sit with my tea and watch the light move.
            That’s all this is. It’s enough.”</p>
          <cite>— Mira, a member since the first spring</cite>
        </Reveal>
      </section>

      {/* ───────────────────────── the invitation ─────────────────── */}
      <section id="invitation" className="band band--invite">
        <div className="invite">
          <Reveal as="p" className="eyebrow eyebrow--sage" delay={0}>茶 · an invitation</Reveal>
          <Reveal as="h2" className="invite__title" delay={140}>
            Sit with us a while.
          </Reveal>
          <Reveal as="p" className="prose" delay={260}>
            Membership opens slowly, in small seasons, so the circle stays small.
            Leave a note and we’ll set a cup aside for you — no rush, no countdown.
          </Reveal>
          <Reveal as="form" className="invite__form" delay={380}
            onSubmit={(e) => { e.preventDefault(); const f = e.currentTarget; f.classList.add('is-sent'); }}>
            <input type="email" required placeholder="your email, whenever you’re ready" aria-label="Email" />
            <button type="submit" className="btn">
              <span className="btn__default">begin slowly</span>
              <span className="btn__sent">a cup is set aside — we’ll be in touch ✦</span>
            </button>
          </Reveal>
          <Reveal as="p" className="invite__fine" delay={500}>
            From the price of a few quiet coffees each month. Pause or leave anytime;
            the door stays unlatched.
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__mark"><span className="nav__kanji">凪</span> nagi</div>
        <p className="footer__line">Stillness, kept as a way of living.</p>
        <nav className="footer__links">
          <a href="#pause">the idea</a>
          <a href="#practice">what you receive</a>
          <a href="#craft">the making</a>
          <a href="#invitation">stay for tea</a>
        </nav>
      </footer>
    </div>
  );
}
