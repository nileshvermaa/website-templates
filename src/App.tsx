const slices = [
  {
    src: './bugster-reference/slice-1.jpg',
    alt: 'Bugster hero with navigation, announcement bar, AI testing card, customer logos, and browser testing preview.',
  },
  {
    src: './bugster-reference/slice-2.jpg',
    alt: 'Bugster workflow and stack sections with developer cards, QA cards, integrations, and chameleon illustration.',
  },
  {
    src: './bugster-reference/slice-3.jpg',
    alt: 'Bugster pricing, testimonial, and security sections.',
  },
  {
    src: './bugster-reference/slice-4.jpg',
    alt: 'Bugster FAQ, final call to action, and footer sections.',
  },
]

function App() {
  return (
    <main className="site-shell">
      <h1 className="sr-only">Bugster AI testing landing page recreation</h1>
      <nav className="quick-nav" aria-label="Reference page quick navigation">
        <a href="#top">Top</a>
        <a href="#workflow">Workflow</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>
      <section className="reference-frame" id="top" aria-label="Pixel-faithful landing page reconstruction">
        {slices.map((slice, index) => (
          <img
            key={slice.src}
            id={index === 1 ? 'workflow' : index === 2 ? 'pricing' : index === 3 ? 'faq' : undefined}
            className="reference-slice"
            src={slice.src}
            alt={slice.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </section>
    </main>
  )
}

export default App
