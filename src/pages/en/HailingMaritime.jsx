import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingMaritime() {
  return (
    <Layout lang="en" ctaLabel="Book a Visit" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Maritime Civilization · Education</span>
            <h1>Hailing Island Maritime Museum</h1>
            <p>An immersive museum featuring maritime civilization, fishing heritage, and navigation technology.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Book a Visit
              </Link>
              <Link className="btn ghost" to="/en/hailing/exchange">
                Back to Exchange Overview
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              alt="Maritime Museum"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>Ocean Heritage</strong>
            <p>Stories of Hailing Island and the South China Sea trade routes.</p>
          </div>
          <div className="card">
            <strong>Navigation Tech</strong>
            <p>Navigation tools, vessel models, and modern marine industries.</p>
          </div>
          <div className="card">
            <strong>Learning Lab</strong>
            <p>Hands-on experiments, marine science education, and family programs.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Maritime Timeline</span>
          <h2 className="section-title">Historic Journey (Showcase)</h2>
          <div className="timeline reveal" style={{ marginTop: "24px" }}>
            <div className="timeline-item">
              <strong>Ancient Maritime Silk Road</strong>
              <p>Sea routes and cultural exchange history.</p>
            </div>
            <div className="timeline-item">
              <strong>Modern Fisheries Era</strong>
              <p>Zhapo fishing port and aquaculture evolution.</p>
            </div>
            <div className="timeline-item">
              <strong>Smart Navigation Era</strong>
              <p>AI navigation, maritime economy, and green shipping.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Maritime Lab</span>
          <h2 className="section-title">AI-Powered Museum Experience</h2>
          <p className="section-subtitle">Digital exhibits and smart tours bring maritime history to life.</p>
          <ul>
            <li>AR tours and interactive Q&A.</li>
            <li>Route simulations and climate visualization.</li>
            <li>Learning tasks with output certificates.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
