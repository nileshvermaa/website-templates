import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { CATALOG, CATEGORY_LABELS, ITEM, TEMPLATES } from './planner/catalog'
import { calculateMetrics, clampNumber, money } from './planner/metrics'
import { PlannerSceneEngine } from './planner/scene-engine'
import type { CatalogKey, ItemCategory, PlannerItem, PlannerState, PlannerView, ToolKey } from './planner/types'

interface SceneHandle {
  captureImage: () => string
}

const brandPresets = ['#e0654f', '#3f7d6e', '#3d6ea5', '#9b5fb0', '#d39a2e', '#2b2925']
const categoryOrder: ItemCategory[] = ['cafe', 'office', 'retail', 'restaurant', 'common']

function makeId(key: CatalogKey) {
  if (crypto.randomUUID) return `${key}-${crypto.randomUUID()}`
  return `${key}-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function materializeTemplate(key: string): PlannerState {
  const template = TEMPLATES[key] ?? TEMPLATES.cafe
  return {
    room: template.room,
    use: template.use,
    templateLabel: template.label,
    view: 'plan',
    activeTool: 'select',
    fireSafety: false,
    brand: '#e0654f',
    items: template.items.map((item) => ({ ...item, id: makeId(item.key) })),
    selectedId: null,
    costOpen: false,
  }
}

function App() {
  const [state, setState] = useState<PlannerState>(() => materializeTemplate('cafe'))
  const [catalogCategory, setCatalogCategory] = useState<ItemCategory>('cafe')
  const [exporting, setExporting] = useState(false)
  const sceneHandleRef = useRef<SceneHandle | null>(null)
  const metrics = calculateMetrics(state.items, state.room, state.use)
  const selectedItem = state.items.find((item) => item.id === state.selectedId) ?? null

  const patchState = (patch: Partial<PlannerState>) => setState((current) => ({ ...current, ...patch }))
  const setItems = (items: PlannerItem[]) => setState((current) => ({ ...current, items }))

  function loadTemplate(key: string) {
    const next = materializeTemplate(key)
    setState((current) => ({ ...next, brand: current.brand }))
    document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function rotateSelected() {
    if (!state.selectedId) return
    setItems(state.items.map((item) => item.id === state.selectedId ? { ...item, rotation: item.rotation + Math.PI / 2 } : item))
  }

  function deleteSelected() {
    if (!state.selectedId) return
    setState((current) => ({
      ...current,
      selectedId: null,
      items: current.items.filter((item) => item.id !== current.selectedId),
    }))
  }

  function clearRoom() {
    patchState({ items: [], selectedId: null })
  }

  function updateRoom(field: 'width' | 'depth', value: number) {
    setState((current) => ({
      ...current,
      room: {
        ...current.room,
        [field]: clampNumber(value, 3, 20, current.room[field]),
      },
    }))
  }

  async function exportPdf() {
    const image = sceneHandleRef.current?.captureImage()
    if (!image) return
    setExporting(true)

    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
    const pageWidth = 297
    doc.setFillColor(31, 28, 23)
    doc.rect(0, 0, pageWidth, 18, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(15)
    doc.text(`${state.templateLabel} layout`, 12, 12)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text(`Plot Studio - ${state.room.width.toFixed(1)} x ${state.room.depth.toFixed(1)} m`, pageWidth - 12, 12, { align: 'right' })

    doc.setFillColor(244, 239, 229)
    doc.roundedRect(12, 25, 180, 118, 2, 2, 'F')
    doc.addImage(image, 'PNG', 14, 27, 176, 114)

    let y = 31
    const x = 203
    doc.setTextColor(31, 28, 23)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text('Capacity', x, y)
    y += 7
    doc.setFont('helvetica', 'normal')
    ;[
      ['Seats placed', String(metrics.seats)],
      ['Floor area', `${metrics.area.toFixed(1)} m2`],
      ['Recommended max', String(metrics.maxSeats)],
      ['Exits placed', String(metrics.exits)],
      ['Status', metrics.statusLabel],
    ].forEach(([label, value]) => {
      doc.text(label, x, y)
      doc.text(value, pageWidth - 12, y, { align: 'right' })
      y += 6
    })

    y += 7
    doc.setFont('helvetica', 'bold')
    doc.text('Fit-out cost', x, y)
    y += 7
    doc.setFont('helvetica', 'normal')
    Object.entries(metrics.counts)
      .filter(([key]) => ITEM[key as CatalogKey].cost > 0)
      .forEach(([key, quantity]) => {
        const meta = ITEM[key as CatalogKey]
        doc.text(`${meta.name} x${quantity}`, x, y)
        doc.text(money(meta.cost * (quantity ?? 0)), pageWidth - 12, y, { align: 'right' })
        y += 6
      })
    doc.line(x, y, pageWidth - 12, y)
    y += 7
    doc.setFont('helvetica', 'bold')
    doc.text('Total', x, y)
    doc.text(money(metrics.totalCost), pageWidth - 12, y, { align: 'right' })

    doc.save('plot-studio-layout.pdf')
    window.setTimeout(() => setExporting(false), 900)
  }

  return (
    <>
      <Hero onLoadTemplate={loadTemplate} />
      <main className="workspace-shell" id="planner">
        <Topbar
          state={state}
          exporting={exporting}
          onPatch={patchState}
          onExport={exportPdf}
        />
        <section className="planner-grid">
          <Sidebar
            state={state}
            catalogCategory={catalogCategory}
            onCategoryChange={setCatalogCategory}
            onPatch={patchState}
            onLoadTemplate={loadTemplate}
            onRotate={rotateSelected}
            onDelete={deleteSelected}
            onClear={clearRoom}
            onRoomChange={updateRoom}
          />
          <PlannerViewport
            state={state}
            sceneHandleRef={sceneHandleRef}
            onItemsChange={setItems}
            onSelect={(selectedId) => patchState({ selectedId })}
          />
          <Inspector
            state={state}
            metrics={metrics}
            selectedItem={selectedItem}
            onRotate={rotateSelected}
            onDelete={deleteSelected}
          />
          <CostPanel state={state} metrics={metrics} onClose={() => patchState({ costOpen: false })} />
        </section>
      </main>
      <Marketing onLoadTemplate={loadTemplate} />
    </>
  )
}

function Hero({ onLoadTemplate }: { onLoadTemplate: (key: string) => void }) {
  return (
    <header className="hero">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Plot Studio">
          <span className="brand-mark" />
          Plot Studio
        </a>
        <div className="nav-links">
          <a href="#templates">Templates</a>
          <a href="#capabilities">Capabilities</a>
          <a className="button ghost" href="#planner">Open planner</a>
        </div>
      </nav>
      <div className="hero-grid" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Commercial interior planning suite</span>
          <h1>Plan revenue-ready spaces in measured 3D.</h1>
          <p>
            Build cafes, co-working offices, boutiques, and restaurant layouts with live capacity checks,
            fixture costing, brand finishes, egress paths, and client-ready PDF exports.
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => onLoadTemplate('cafe')}>Open cafe planner</button>
            <a className="button ghost" href="#templates">Browse templates</a>
          </div>
          <div className="hero-stats">
            <strong>4</strong><span>industry templates</span>
            <strong>23</strong><span>fixture primitives</span>
            <strong>2D/3D</strong><span>camera modes</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="plan-card"><span>Measured plan</span></div>
          <div className="model-card"><span>3D fit-out</span></div>
          <div className="metric-card"><b>$18.4k</b><small>live estimate</small></div>
        </div>
      </div>
    </header>
  )
}

function Topbar({
  state,
  exporting,
  onPatch,
  onExport,
}: {
  state: PlannerState
  exporting: boolean
  onPatch: (patch: Partial<PlannerState>) => void
  onExport: () => void
}) {
  return (
    <div className="topbar">
      <div className="topbar-group">
        <span className="project-title">{state.templateLabel} concept</span>
        <div className="segmented" role="tablist" aria-label="Planner view">
          {(['plan', '3d'] as PlannerView[]).map((view) => (
            <button
              key={view}
              className={state.view === view ? 'active' : ''}
              onClick={() => onPatch({ view })}
            >
              {view === 'plan' ? 'Floor plan' : '3D view'}
            </button>
          ))}
        </div>
      </div>
      <div className="topbar-group controls">
        <label className="switch">
          <input
            type="checkbox"
            checked={state.fireSafety}
            onChange={(event) => onPatch({ fireSafety: event.target.checked })}
          />
          <span />
          Fire paths
        </label>
        <div className="swatches" aria-label="Brand color">
          {brandPresets.map((color) => (
            <button
              key={color}
              className={state.brand === color ? 'swatch active' : 'swatch'}
              style={{ backgroundColor: color }}
              onClick={() => onPatch({ brand: color })}
              aria-label={`Set brand color ${color}`}
            />
          ))}
          <input
            type="color"
            value={state.brand}
            onChange={(event) => onPatch({ brand: event.target.value })}
            aria-label="Custom brand color"
          />
        </div>
        <button className="button ghost" onClick={() => onPatch({ costOpen: !state.costOpen })}>Cost</button>
        <button className="button primary" onClick={onExport}>{exporting ? 'Exporting...' : 'Export PDF'}</button>
      </div>
    </div>
  )
}

function Sidebar({
  state,
  catalogCategory,
  onCategoryChange,
  onPatch,
  onLoadTemplate,
  onRotate,
  onDelete,
  onClear,
  onRoomChange,
}: {
  state: PlannerState
  catalogCategory: ItemCategory
  onCategoryChange: (category: ItemCategory) => void
  onPatch: (patch: Partial<PlannerState>) => void
  onLoadTemplate: (key: string) => void
  onRotate: () => void
  onDelete: () => void
  onClear: () => void
  onRoomChange: (field: 'width' | 'depth', value: number) => void
}) {
  const visibleItems = CATALOG.filter((item) => item.category === catalogCategory)

  return (
    <aside className="sidebar">
      <section className="panel-block">
        <h2>Templates</h2>
        <div className="template-list compact">
          {Object.entries(TEMPLATES).map(([key, template]) => (
            <button key={key} onClick={() => onLoadTemplate(key)}>
              <strong>{template.label}</strong>
              <span>{template.subtitle}</span>
            </button>
          ))}
        </div>
      </section>
      <section className="panel-block">
        <h2>Tools</h2>
        <div className="tool-grid">
          <button className={state.activeTool === 'select' ? 'active' : ''} onClick={() => onPatch({ activeTool: 'select' })}>Select</button>
          <button onClick={onRotate}>Rotate</button>
          <button onClick={onDelete}>Delete</button>
          <button onClick={onClear}>Clear</button>
        </div>
      </section>
      <section className="panel-block grow">
        <h2>Fixture library</h2>
        <div className="category-tabs">
          {categoryOrder.map((category) => (
            <button
              key={category}
              className={catalogCategory === category ? 'active' : ''}
              onClick={() => onCategoryChange(category)}
            >
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </div>
        <div className="catalog-grid">
          {visibleItems.map((item) => (
            <button
              key={item.key}
              className={state.activeTool === item.key ? 'catalog-item active' : 'catalog-item'}
              onClick={() => onPatch({ activeTool: item.key as ToolKey })}
            >
              <strong>{item.name}</strong>
              <span>{item.seats ? `${item.seats} seats / ` : ''}{item.cost ? money(item.cost) : 'egress'}</span>
            </button>
          ))}
        </div>
      </section>
      <section className="panel-block">
        <h2>Room size</h2>
        <label className="number-field">
          Width
          <input type="number" min="3" max="20" step="0.5" value={state.room.width} onChange={(event) => onRoomChange('width', Number(event.target.value))} />
          <span>m</span>
        </label>
        <label className="number-field">
          Depth
          <input type="number" min="3" max="20" step="0.5" value={state.room.depth} onChange={(event) => onRoomChange('depth', Number(event.target.value))} />
          <span>m</span>
        </label>
      </section>
    </aside>
  )
}

function PlannerViewport({
  state,
  sceneHandleRef,
  onItemsChange,
  onSelect,
}: {
  state: PlannerState
  sceneHandleRef: React.MutableRefObject<SceneHandle | null>
  onItemsChange: (items: PlannerItem[]) => void
  onSelect: (id: string | null) => void
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const engineRef = useRef<PlannerSceneEngine | null>(null)
  const latestState = useRef(state)
  const handleItemsChange = useEffectEvent((items: PlannerItem[]) => onItemsChange(items))
  const handleSelect = useEffectEvent((id: string | null) => onSelect(id))

  useEffect(() => {
    latestState.current = state
    engineRef.current?.sync(state)
  }, [state])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const engine = new PlannerSceneEngine(canvas, latestState.current, {
      onItemsChange: handleItemsChange,
      onSelect: handleSelect,
      createItemId: makeId,
    })
    engineRef.current = engine
    sceneHandleRef.current = { captureImage: () => engine.captureImage() }
    return () => {
      sceneHandleRef.current = null
      engine.dispose()
      engineRef.current = null
    }
  }, [sceneHandleRef])

  return (
    <section className="viewport-card">
      <canvas ref={canvasRef} />
      <div className="viewport-badge">{state.view === 'plan' ? 'Floor plan' : '3D walkthrough'}</div>
      <div className={state.fireSafety ? 'egress-chip visible' : 'egress-chip'}>Animated egress enabled</div>
      <div className="viewport-hint">
        {state.activeTool === 'select' ? 'Click a fixture to select. Drag to move. Use Rotate/Delete from the panels.' : `Click the floor to place ${ITEM[state.activeTool].name}.`}
      </div>
    </section>
  )
}

function Inspector({
  state,
  metrics,
  selectedItem,
  onRotate,
  onDelete,
}: {
  state: PlannerState
  metrics: ReturnType<typeof calculateMetrics>
  selectedItem: PlannerItem | null
  onRotate: () => void
  onDelete: () => void
}) {
  const occupancyPct = Math.min(100, (metrics.seats / metrics.maxSeats) * 100)
  const selectedMeta = selectedItem ? ITEM[selectedItem.key] : null

  return (
    <aside className="inspector">
      <section className="panel-card">
        <div className="panel-heading">
          <h2>Capacity planner</h2>
          <span className={`status ${metrics.status}`}>{metrics.statusLabel}</span>
        </div>
        <div className="meter">
          <div style={{ width: `${occupancyPct}%` }} />
        </div>
        <div className="stat-list">
          <span>Use type <b>{state.use}</b></span>
          <span>Seats placed <b>{metrics.seats}</b></span>
          <span>Floor area <b>{metrics.area.toFixed(1)} m2</b></span>
          <span>Density <b>{metrics.density.toFixed(2)} /m2</b></span>
          <span>Recommended max <b>{metrics.maxSeats}</b></span>
          <span>Exits placed <b>{metrics.exits}</b></span>
        </div>
        <p className="note">
          {metrics.seats > 0 && metrics.exits < 1
            ? 'Add an exit door from Common to validate egress.'
            : 'Toggle fire paths to visualize travel routes to the nearest exit.'}
        </p>
      </section>
      <section className="panel-card">
        <h2>Selected fixture</h2>
        {selectedMeta && selectedItem ? (
          <div className="selected-card">
            <strong>{selectedMeta.name}</strong>
            <span>{selectedMeta.width} x {selectedMeta.depth} m / {selectedMeta.cost ? money(selectedMeta.cost) : 'no cost'}</span>
            <span>Position {selectedItem.x.toFixed(2)}, {selectedItem.z.toFixed(2)}</span>
            <div>
              <button onClick={onRotate}>Rotate</button>
              <button onClick={onDelete}>Delete</button>
            </div>
          </div>
        ) : (
          <p className="empty">Nothing selected.</p>
        )}
      </section>
      <section className="panel-card">
        <h2>Roadmap-ready modules</h2>
        <div className="module-list">
          <span>Client profiles</span>
          <span>Saved layouts</span>
          <span>Constraint solver</span>
          <span>Asset marketplace</span>
        </div>
      </section>
    </aside>
  )
}

function CostPanel({
  state,
  metrics,
  onClose,
}: {
  state: PlannerState
  metrics: ReturnType<typeof calculateMetrics>
  onClose: () => void
}) {
  return (
    <aside className={state.costOpen ? 'cost-panel open' : 'cost-panel'} aria-hidden={!state.costOpen}>
      <div className="cost-head">
        <h2>Fit-out estimate</h2>
        <button onClick={onClose} aria-label="Close cost panel">x</button>
      </div>
      <div className="cost-lines">
        {Object.entries(metrics.counts).filter(([key]) => ITEM[key as CatalogKey].cost > 0).length === 0 && (
          <p className="empty">No costed fixtures yet.</p>
        )}
        {Object.entries(metrics.counts)
          .filter(([key]) => ITEM[key as CatalogKey].cost > 0)
          .sort((a, b) => ITEM[b[0] as CatalogKey].cost * (b[1] ?? 0) - ITEM[a[0] as CatalogKey].cost * (a[1] ?? 0))
          .map(([key, quantity]) => {
            const meta = ITEM[key as CatalogKey]
            return (
              <div className="cost-line" key={key}>
                <span>{meta.name}<small> x{quantity}</small></span>
                <b>{money(meta.cost * (quantity ?? 0))}</b>
              </div>
            )
          })}
      </div>
      <div className="cost-total">
        <span>Estimated total</span>
        <strong>{money(metrics.totalCost)}</strong>
      </div>
    </aside>
  )
}

function Marketing({ onLoadTemplate }: { onLoadTemplate: (key: string) => void }) {
  return (
    <>
      <section className="marketing-section" id="templates">
        <div className="section-heading">
          <span className="eyebrow">Starter systems</span>
          <h2>Templates that behave like real projects.</h2>
          <p>Each layout ships with measured rooms, preloaded fixtures, exits, capacity targets, and cost data.</p>
        </div>
        <div className="template-cards">
          {Object.entries(TEMPLATES).map(([key, template]) => (
            <button className="template-card" key={key} onClick={() => onLoadTemplate(key)}>
              <span>{template.room.width} x {template.room.depth} m</span>
              <h3>{template.label}</h3>
              <p>{template.subtitle}</p>
            </button>
          ))}
        </div>
      </section>
      <section className="capabilities" id="capabilities">
        <div className="section-heading">
          <span className="eyebrow">Production architecture</span>
          <h2>Built to take more features without collapsing.</h2>
        </div>
        <div className="capability-grid">
          <article><h3>Typed domain model</h3><p>Catalog, templates, rooms, items, and metrics are separate modules instead of DOM state.</p></article>
          <article><h3>Dedicated 3D engine</h3><p>Three.js rendering, interaction, camera motion, and snapshots live behind a clean boundary.</p></article>
          <article><h3>Feature panels</h3><p>React owns planner UI, selection state, export workflows, pricing, and capacity panels.</p></article>
          <article><h3>Ready for persistence</h3><p>The app state can be saved to local storage, a database, or a multi-user backend without redesign.</p></article>
        </div>
      </section>
      <footer className="site-footer">
        <span>Plot Studio - commercial planning workspace</span>
        <a href="#planner">Open planner</a>
      </footer>
    </>
  )
}

export default App
