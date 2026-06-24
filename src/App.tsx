import { useEffect, useMemo, useRef, useState } from 'react'
import katex from 'katex'

type Viewport = { cx: number; cy: number; scale: number }
type Point = { x: number; y: number }
type Project = (x: number, y: number) => Point

const W = 760
const H = 430
const sinFn = (x: number) => Math.sin(x)
const cosFn = (x: number) => Math.cos(x)
const quadFn = (x: number) => 0.12 * x * x + 0.28 * x + 0.6
const quadPrime = (x: number) => 0.24 * x + 0.28
const areaFn = (x: number) => 0.18 * (x - 0.5) * (x - 0.5) + 0.85
const limitFn = (x: number) => x * x

function projectPoint(x: number, y: number, view: Viewport) {
  return {
    x: W / 2 + (x - view.cx) * view.scale,
    y: H / 2 - (y - view.cy) * view.scale,
  }
}

function screenToMath(svg: SVGSVGElement, event: React.PointerEvent<SVGSVGElement>, view: Viewport) {
  const rect = svg.getBoundingClientRect()
  const px = ((event.clientX - rect.left) / rect.width) * W
  const py = ((event.clientY - rect.top) / rect.height) * H
  return {
    x: (px - W / 2) / view.scale + view.cx,
    y: (H / 2 - py) / view.scale + view.cy,
  }
}

function curvePath(fn: (x: number) => number, view: Viewport, minX = -7.5, maxX = 7.5) {
  const points: string[] = []
  for (let i = 0; i <= 220; i += 1) {
    const x = minX + ((maxX - minX) * i) / 220
    const point = projectPoint(x, fn(x), view)
    points.push(`${i === 0 ? 'M' : 'L'}${point.x.toFixed(2)},${point.y.toFixed(2)}`)
  }
  return points.join(' ')
}

function gridLines(view: Viewport) {
  const lines = []
  const xMin = view.cx - W / 2 / view.scale
  const xMax = view.cx + W / 2 / view.scale
  const yMin = view.cy - H / 2 / view.scale
  const yMax = view.cy + H / 2 / view.scale
  const step = view.scale > 80 ? 0.5 : 1

  for (let x = Math.floor(xMin / step) * step; x <= xMax; x += step) {
    const p1 = projectPoint(x, yMin, view)
    const p2 = projectPoint(x, yMax, view)
    lines.push(<line key={`x-${x}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} className={Math.abs(x) < 0.0001 ? 'axis' : 'grid-line'} />)
  }
  for (let y = Math.floor(yMin / step) * step; y <= yMax; y += step) {
    const p1 = projectPoint(xMin, y, view)
    const p2 = projectPoint(xMax, y, view)
    lines.push(<line key={`y-${y}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} className={Math.abs(y) < 0.0001 ? 'axis' : 'grid-line'} />)
  }
  return lines
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

function MathTerm({ tex, definition }: { tex: string; definition: string }) {
  const html = useMemo(() => katex.renderToString(tex, { throwOnError: false }), [tex])
  return (
    <span className="math-term" tabIndex={0}>
      <span dangerouslySetInnerHTML={{ __html: html }} />
      <span className="definition">{definition}</span>
    </span>
  )
}

function FormulaStrip() {
  return (
    <div className="formula-strip" aria-label="Interactive formula definitions">
      <MathTerm tex="f'(a)" definition="Derivative: the instantaneous slope at x = a." />
      <MathTerm tex="\int_a^b f(x)\,dx" definition="Definite integral: signed area accumulated from a to b." />
      <MathTerm tex="\lim_{x\to c} f(x)=L" definition="Limit: f(x) can be made arbitrarily close to L near c." />
      <MathTerm tex="\varepsilon,\delta" definition="Epsilon controls output tolerance; delta controls input tolerance." />
    </div>
  )
}

function GraphShell({
  title,
  subtitle,
  view,
  setView,
  dragInteraction,
  children,
}: {
  title: string
  subtitle: string
  view: Viewport
  setView: React.Dispatch<React.SetStateAction<Viewport>>
  dragInteraction?: {
    active: boolean
    onMove: (point: Point) => void
    onEnd: () => void
  }
  children: (project: Project) => React.ReactNode
}) {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [panStart, setPanStart] = useState<null | { point: Point; center: Point }>(null)

  function handleWheel(event: React.WheelEvent<SVGSVGElement>) {
    event.preventDefault()
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const px = ((event.clientX - rect.left) / rect.width) * W
    const py = ((event.clientY - rect.top) / rect.height) * H
    const anchor = { x: (px - W / 2) / view.scale + view.cx, y: (H / 2 - py) / view.scale + view.cy }
    const nextScale = clamp(view.scale * (event.deltaY > 0 ? 0.88 : 1.14), 34, 132)
    setView({
      scale: nextScale,
      cx: anchor.x - (px - W / 2) / nextScale,
      cy: anchor.y - (H / 2 - py) / nextScale,
    })
  }

  function handlePointerDown(event: React.PointerEvent<SVGSVGElement>) {
    const svg = svgRef.current
    if (!svg) return
    const point = screenToMath(svg, event, view)
    setPanStart({ point, center: { x: view.cx, y: view.cy } })
    svg.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: React.PointerEvent<SVGSVGElement>) {
    const svg = svgRef.current
    if (svg && dragInteraction?.active) {
      dragInteraction.onMove(screenToMath(svg, event, view))
      return
    }
    if (!svg || !panStart) return
    const point = screenToMath(svg, event, view)
    setView({
      ...view,
      cx: panStart.center.x + panStart.point.x - point.x,
      cy: panStart.center.y + panStart.point.y - point.y,
    })
  }

  function handlePointerUp(event: React.PointerEvent<SVGSVGElement>) {
    const svg = svgRef.current
    if (dragInteraction?.active) dragInteraction.onEnd()
    setPanStart(null)
    if (svg?.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId)
  }

  return (
    <div className="graph-card">
      <div className="graph-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="zoom-chip">wheel zoom / drag pan</span>
      </div>
      <svg
        ref={svgRef}
        className="plot"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <rect width={W} height={H} className="plot-paper" />
        {gridLines(view)}
        {children((x, y) => projectPoint(x, y, view))}
      </svg>
    </div>
  )
}

function Hero() {
  const [t, setT] = useState(-4.5)
  const [speed, setSpeed] = useState(0.65)
  const view = { cx: 0, cy: 0, scale: 55 }

  useEffect(() => {
    let frame = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      setT((value) => {
        const next = value + dt * speed
        return next > 4.5 ? -4.5 : next
      })
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [speed])

  const point = projectPoint(t, sinFn(t), view)
  const slope = cosFn(t)
  const tangentA = projectPoint(t - 1.7, sinFn(t) - 1.7 * slope, view)
  const tangentB = projectPoint(t + 1.7, sinFn(t) + 1.7 * slope, view)

  return (
    <header className="hero">
      <nav className="nav">
        <a href="#top" className="brand">Calculus Atlas</a>
        <div>
          <a href="#derivatives">Derivatives</a>
          <a href="#integrals">Integrals</a>
          <a href="#limits">Limits</a>
          <a href="#practice">Practice</a>
        </div>
      </nav>
      <section className="hero-grid" id="top">
        <div>
          <span className="eyebrow">Rigorous visual calculus</span>
          <h1>See the theorem before memorizing it.</h1>
          <p>
            A graph-paper lab for derivatives, integrals, and limits. Drag points, tune
            partitions, snap epsilon-delta proofs into place, and step through exam-ready arguments.
          </p>
          <FormulaStrip />
          <div className="hero-actions">
            <a className="button primary" href="#derivatives">Start with slope</a>
            <a className="button secondary" href="#practice">Try practice</a>
          </div>
        </div>
        <div className="hero-demo">
          <svg viewBox={`0 0 ${W} ${H}`} className="hero-plot">
            <rect width={W} height={H} className="plot-paper" />
            {gridLines(view)}
            <path d={curvePath(sinFn, view, -6.4, 6.4)} className="curve navy" />
            <line x1={tangentA.x} y1={tangentA.y} x2={tangentB.x} y2={tangentB.y} className="tangent" />
            <circle cx={point.x} cy={point.y} r="8" className="handle" />
          </svg>
          <label className="speed-control">
            Tangent speed
            <input type="range" min="0.15" max="2.2" step="0.05" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} />
            <span>{speed.toFixed(2)}x</span>
          </label>
        </div>
      </section>
    </header>
  )
}

function DerivativeLab() {
  const [a, setA] = useState(1.2)
  const [view, setView] = useState<Viewport>({ cx: 0.4, cy: 1.2, scale: 62 })
  const [draggingPoint, setDraggingPoint] = useState(false)
  const slope = quadPrime(a)
  const y = quadFn(a)

  function dragPoint(event: React.PointerEvent<SVGCircleElement>) {
    event.stopPropagation()
    const svg = event.currentTarget.ownerSVGElement
    if (!svg) return
    setDraggingPoint(true)
    svg.setPointerCapture(event.pointerId)
  }

  return (
    <section className="section" id="derivatives">
      <div className="section-copy">
        <span className="eyebrow">Derivatives</span>
        <h2>Drag one point. Watch slope become a function.</h2>
        <p>
          The tangent line is local, but the derivative is global: each x-value on f(x)
          maps to the slope of its tangent.
        </p>
        <div className="readout orange">f&apos;({a.toFixed(2)}) = {slope.toFixed(3)}</div>
      </div>
      <div className="split-graphs">
        <GraphShell
          title="Function f(x)"
          subtitle="Drag the orange point along the curve."
          view={view}
          setView={setView}
          dragInteraction={{
            active: draggingPoint,
            onMove: (point) => setA(clamp(point.x, -5.2, 5.2)),
            onEnd: () => setDraggingPoint(false),
          }}
        >
          {(project) => {
            const p = project(a, y)
            const t1 = project(a - 1.9, y - 1.9 * slope)
            const t2 = project(a + 1.9, y + 1.9 * slope)
            return (
              <>
                <path d={curvePath(quadFn, view, -7, 7)} className="curve navy" />
                <line x1={t1.x} y1={t1.y} x2={t2.x} y2={t2.y} className="tangent" />
                <circle cx={p.x} cy={p.y} r="10" className="handle" onPointerDown={dragPoint} />
              </>
            )
          }}
        </GraphShell>
        <GraphShell title="Derivative f'(x)" subtitle="Same x, slope plotted as height." view={view} setView={setView}>
          {(project) => {
            const p = project(a, slope)
            return (
              <>
                <path d={curvePath(quadPrime, view, -7, 7)} className="curve orange" />
                <line x1={p.x} y1="0" x2={p.x} y2={H} className="guide" />
                <circle cx={p.x} cy={p.y} r="9" className="handle derivative" />
              </>
            )
          }}
        </GraphShell>
      </div>
    </section>
  )
}

function IntegralLab() {
  const [n, setN] = useState(8)
  const [view, setView] = useState<Viewport>({ cx: 1.8, cy: 1.1, scale: 74 })
  const a = -1
  const b = 4.2
  const dx = (b - a) / n
  const estimate = Array.from({ length: n }, (_, index) => {
    const x = a + index * dx
    return areaFn(x + dx / 2) * dx
  }).reduce((sum, value) => sum + value, 0)

  return (
    <section className="section compact" id="integrals">
      <div className="section-copy">
        <span className="eyebrow green">Integrals</span>
        <h2>Riemann sums that breathe as n changes.</h2>
        <p>Partition the interval and watch rectangles converge toward accumulated area.</p>
        <label className="slider">
          Partitions n = {n}
          <input type="range" min="3" max="42" value={n} onChange={(event) => setN(Number(event.target.value))} />
        </label>
        <div className="readout green">Σ f(xᵢ*)Δx ≈ {estimate.toFixed(3)}</div>
      </div>
      <GraphShell title="Area under f(x)" subtitle="Rectangles fill smoothly while the curve remains visible." view={view} setView={setView}>
        {(project) => (
          <>
            {Array.from({ length: n }, (_, index) => {
              const x = a + index * dx
              const h = areaFn(x + dx / 2)
              const left = project(x, 0)
              const top = project(x, h)
              return (
                <rect
                  key={x}
                  x={left.x}
                  y={top.y}
                  width={dx * view.scale}
                  height={left.y - top.y}
                  className="riemann"
                />
              )
            })}
            <path d={curvePath(areaFn, view, -3, 6)} className="curve green" />
          </>
        )}
      </GraphShell>
    </section>
  )
}

function LimitLab() {
  const [epsilon, setEpsilon] = useState(0.8)
  const [view, setView] = useState<Viewport>({ cx: 2, cy: 4, scale: 62 })
  const c = 2
  const L = 4
  const delta = Math.min(1, epsilon / 5)

  return (
    <section className="section compact" id="limits">
      <div className="section-copy">
        <span className="eyebrow">Limits</span>
        <h2>ε moves first. δ snaps to a proof-safe width.</h2>
        <p>
          For f(x)=x² near x=2, choosing δ ≤ ε/5 keeps |f(x)-4| below ε.
          The flash confirms the proof has enough margin.
        </p>
        <label className="slider">
          ε = {epsilon.toFixed(2)}
          <input type="range" min="0.1" max="2.2" step="0.05" value={epsilon} onChange={(event) => setEpsilon(Number(event.target.value))} />
        </label>
        <div key={epsilon} className="readout orange flash">δ snaps to {delta.toFixed(3)}</div>
      </div>
      <GraphShell title="ε-δ proof window" subtitle="Orange band is output tolerance; navy window is the matching input tolerance." view={view} setView={setView}>
        {(project) => {
          const pTop = project(c, L + epsilon)
          const pBottom = project(c, L - epsilon)
          const pLeft = project(c - delta, L)
          const pRight = project(c + delta, L)
          const pc = project(c, L)
          return (
            <>
              <rect x="0" y={pTop.y} width={W} height={pBottom.y - pTop.y} className="epsilon-band" />
              <rect x={pLeft.x} y="0" width={pRight.x - pLeft.x} height={H} className="delta-band" />
              <path d={curvePath(limitFn, view, 0.4, 3.6)} className="curve navy" />
              <line x1="0" x2={W} y1={pc.y} y2={pc.y} className="guide" />
              <circle cx={pc.x} cy={pc.y} r="7" className="handle" />
            </>
          )
        }}
      </GraphShell>
    </section>
  )
}

const proofSteps = [
  'Start with the target: make |x² - 4| < ε.',
  'Factor the expression: |x² - 4| = |x - 2||x + 2|.',
  'Restrict δ ≤ 1, so x is between 1 and 3 and |x + 2| < 5.',
  'It is enough to force 5|x - 2| < ε.',
  'Choose δ = min(1, ε/5). Then 0 < |x - 2| < δ implies |x² - 4| < ε.',
]

function Practice() {
  const [step, setStep] = useState(0)
  const [hintOpen, setHintOpen] = useState(false)

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'n' || event.key === 'ArrowRight') {
        setStep((current) => Math.min(proofSteps.length - 1, current + 1))
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <section className="practice" id="practice">
      <div>
        <span className="eyebrow green">Practice</span>
        <h2>Applied problems with proof playback.</h2>
        <p>Press <kbd>N</kbd> or <kbd>→</kbd> to advance the proof. Hints reveal only the next useful move.</p>
      </div>
      <article className="problem-card">
        <h3>Problem</h3>
        <p>Prove that lim<sub>x→2</sub> x² = 4 using the ε-δ definition.</p>
        <div className="proof-step">
          <span>Step {step + 1} / {proofSteps.length}</span>
          <p>{proofSteps[step]}</p>
        </div>
        <div className="practice-actions">
          <button className="button secondary" onClick={() => setStep((current) => Math.max(0, current - 1))}>Back</button>
          <button className="button primary" onClick={() => setStep((current) => Math.min(proofSteps.length - 1, current + 1))}>Next</button>
          <button className="button ghost" onClick={() => setHintOpen((open) => !open)}>Hint</button>
        </div>
        {hintOpen && <p className="hint">Try factoring the expression before choosing δ. The product form exposes what must be bounded.</p>}
      </article>
    </section>
  )
}

function App() {
  return (
    <>
      <Hero />
      <main>
        <DerivativeLab />
        <IntegralLab />
        <LimitLab />
        <Practice />
      </main>
      <footer className="footer">
        <span>Calculus Atlas</span>
        <span>derivatives / integrals / limits</span>
      </footer>
    </>
  )
}

export default App
