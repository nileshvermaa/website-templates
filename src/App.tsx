import { ArrowRight, Crosshair, Grid3x3, Compass } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="grid-container app-wrapper">
      
      {/* Header */}
      <header className="header">
        <div className="logo-area">
          <div className="logo-mark">
            <div className="logo-square"></div>
            <div className="logo-circle"></div>
            <div className="logo-triangle"></div>
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.05em' }}>
            FORMFAB
          </span>
        </div>
        <nav className="nav-links">
          <a href="#logic" className="nav-link">Logic</a>
          <a href="#system" className="nav-link">System</a>
          <a href="#initiate" className="nav-link">Initiate</a>
        </nav>
      </header>

      {/* Hero Room */}
      <section className="section hero-grid">
        <div className="hero-text">
          <h1 className="text-hero">
            FORM<br />FOLLOWS<br />FUNCTION
          </h1>
          <p>
            Architectural fabrication engineered with the precision of a blueprint. 
            A modular design service where every element justifies its existence.
          </p>
          <div>
            <a href="#initiate" className="mechanical-btn">
              <span>Commence Project</span>
              <ArrowRight style={{ marginLeft: '1rem', zIndex: 2, position: 'relative' }} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hv-1">
            <div className="hv-1-circle"></div>
          </div>
          <div className="hv-2"></div>
          <div className="hv-3">
            01
          </div>
          <div className="hv-4">
            <div className="hv-4-triangle"></div>
          </div>
        </div>
      </section>

      {/* Structural Logic (About/Service) */}
      <section id="logic" className="section logic-grid">
        <div className="logic-title">
          <h2 className="text-title">
            <Crosshair style={{ width: 48, height: 48, marginBottom: '1rem', color: 'var(--color-red)' }} /><br />
            STRUCTURAL<br />LOGIC
          </h2>
        </div>
        <div className="logic-content">
          <div className="logic-item">
            <div className="logic-num">01</div>
            <div>
              <h3 className="text-subtitle" style={{ marginBottom: '0.5rem' }}>Rational Foundations</h3>
              <p>We approach space not as decoration, but as a problem of geometry. Our modules are designed to solve spatial equations with absolute clarity.</p>
            </div>
          </div>
          <div className="logic-item">
            <div className="logic-num">02</div>
            <div>
              <h3 className="text-subtitle" style={{ marginBottom: '0.5rem' }}>Engineered Modularity</h3>
              <p>Like interlocking wooden blocks, each component is machined to exact tolerances. The system expands and contracts according to sheer necessity.</p>
            </div>
          </div>
          <div className="logic-item">
            <div className="logic-num">03</div>
            <div>
              <h3 className="text-subtitle" style={{ marginBottom: '0.5rem' }}>Honest Materials</h3>
              <p>We do not conceal the structural bones. Welds are visible. Joints are exposed. Sophistication emerges from the disciplined orchestration of essential forms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interlocking Forms (Showcase/Process) */}
      <section id="system" className="section">
        <div style={{ padding: 'var(--spacing-xl)', borderBottom: 'var(--border-thick)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 className="text-title"><Grid3x3 style={{ width: 48, height: 48, marginBottom: '1rem', color: 'var(--color-blue)' }} /><br />THE SYSTEM</h2>
          <p style={{ maxWidth: '400px', textAlign: 'right' }}>Standardized units capable of infinite permutation. Geometry as a universal language.</p>
        </div>
        <div className="showcase-grid">
          <div className="sc-item">
            <div className="sc-image-placeholder" style={{ backgroundColor: 'var(--color-yellow)' }}>
              {/* Using pure CSS patterns to simulate architectural models */}
              <div style={{ width: '100%', height: '100%', backgroundImage: 'linear-gradient(45deg, var(--color-black) 25%, transparent 25%, transparent 75%, var(--color-black) 75%, var(--color-black)), linear-gradient(45deg, var(--color-black) 25%, transparent 25%, transparent 75%, var(--color-black) 75%, var(--color-black))', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px', opacity: 0.1 }}></div>
            </div>
            <div className="sc-content">
              <span className="sc-title">UNIT A: PRIMARY</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>24×24</span>
            </div>
          </div>
          <div className="sc-item">
            <div className="sc-image-placeholder" style={{ backgroundColor: 'var(--color-red)' }}>
               <div style={{ width: '100%', height: '100%', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, var(--color-black) 10px, var(--color-black) 20px)', opacity: 0.1 }}></div>
            </div>
            <div className="sc-content">
              <span className="sc-title">UNIT B: SPATIAL</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>48×24</span>
            </div>
          </div>
          <div className="sc-item">
            <div className="sc-image-placeholder" style={{ backgroundColor: 'var(--color-blue)' }}>
               <div style={{ width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle, var(--color-black) 10%, transparent 10%)', backgroundSize: '30px 30px', opacity: 0.1 }}></div>
            </div>
            <div className="sc-content">
              <span className="sc-title">UNIT C: CONNECT</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>12×12</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inevitable Conclusion (CTA) */}
      <section id="initiate" className="section cta-section">
        <div className="cta-left">
          <Compass style={{ width: 64, height: 64, marginBottom: '2rem', color: 'var(--color-yellow)' }} />
          <h2 className="text-hero" style={{ marginBottom: '1rem', color: 'var(--color-paper)' }}>Q.E.D.</h2>
          <p className="text-subtitle" style={{ maxWidth: '80%' }}>
            The proof is complete. The logic is sound. It is time to execute the protocol.
          </p>
        </div>
        <div className="cta-right">
          <form className="cta-form reveal-structure" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-title" style={{ marginBottom: '2rem' }}>INITIATE</h3>
            <div className="form-group">
              <label>Project Identifier (Name)</label>
              <input type="text" placeholder="ENTER STRING" />
            </div>
            <div className="form-group">
              <label>Coordinates (Email)</label>
              <input type="email" placeholder="ENTER @ ADDRESS" />
            </div>
            <div className="form-group">
              <label>Vector (Objective)</label>
              <textarea rows={4} placeholder="DEFINE PARAMETERS"></textarea>
            </div>
            <button type="submit" className="mechanical-btn" style={{ width: '100%' }}>
              <span>SUBMIT PROTOCOL</span>
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div>FORMFAB © {new Date().getFullYear()}</div>
        <div>NO ORNAMENT. ONLY STRUCTURE.</div>
      </footer>
    </div>
  )
}

export default App
