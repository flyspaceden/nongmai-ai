import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingMawei() {
  return (
    <Layout lang="en" ctaLabel="Partner with Us" ctaTo="/en/contact">
      <section className="hero hero-centered">
        <div className="container hero-content">
          <div>
            <span className="tag">Cultural Exchange · Island Creative Hub</span>
            <h1>Mawei International Cultural Exchange Center</h1>
            <p>A public cultural platform for island exchange, artist residency, and youth programs across the Greater Bay Area and beyond.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Apply for Partnership
              </Link>
              <Link className="btn ghost" to="/en/hailing/exchange">
                Back to Exchange Overview
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="Cultural Exchange Center"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>Culture Hall</strong>
            <p>Exhibitions and public programs on maritime culture and island heritage.</p>
          </div>
          <div className="card">
            <strong>Artist Residency</strong>
            <p>Residencies for artists and designers to co-create with the local community.</p>
          </div>
          <div className="card">
            <strong>Youth Program</strong>
            <p>Interdisciplinary workshops and learning camps for students and youth teams.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Space Modules</span>
          <h2 className="section-title">Flexible Spaces & Program Matrix</h2>
          <p className="section-subtitle">Designed for dialogue, co-creation, and storytelling.</p>
          <div className="matrix-grid reveal" style={{ marginTop: "24px" }}>
            <div className="matrix-card">
              <strong>Dialogue Studio</strong>
              <p>Forums, salons, and international roundtables.</p>
            </div>
            <div className="matrix-card">
              <strong>Island Heritage Gallery</strong>
              <p>Marine civilization and fishing culture exhibits.</p>
            </div>
            <div className="matrix-card">
              <strong>Co-creation Lab</strong>
              <p>Workshops, crafts, and creative experiments.</p>
            </div>
            <div className="matrix-card">
              <strong>Media Theater</strong>
              <p>Documentaries, screenings, and live broadcasting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Experience</span>
          <h2 className="section-title">AI-Enhanced Storytelling & Learning</h2>
          <p className="section-subtitle">AI tools make exhibits more immersive and measurable.</p>
          <ul>
            <li>Smart tours with multi-language narration.</li>
            <li>Interactive online exhibitions and co-curation.</li>
            <li>Learning records and output portfolios.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
