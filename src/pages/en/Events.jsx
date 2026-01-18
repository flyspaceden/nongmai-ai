import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function Events() {
  return (
    <Layout lang="en" ctaLabel="Register" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Seasonal Festivals · Custom Programs</span>
            <h1>Events Zone</h1>
            <p>Seasonal themes keep the destination vibrant; custom programs support team building and study camps.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Register
              </Link>
              <Link className="btn ghost" to="/en/masterplan">
                Back to Master Plan
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="Seasonal events"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Spring: Flower & Fishing Festival</strong>
            <p>Flower fields + fishing contests + family programs.</p>
          </div>
          <div className="card">
            <strong>Summer: Starry Camping Season</strong>
            <p>Camping, rice-field music nights, and outdoor movies.</p>
          </div>
          <div className="card">
            <strong>Autumn: Harvest Festival</strong>
            <p>Picking, farm market, and seasonal showcases.</p>
          </div>
          <div className="card">
            <strong>Winter: Warm Farm Fun</strong>
            <p>Tea by the fire and folk culture experiences.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card reveal">
          <strong>Custom Events</strong>
          <p>Corporate team building, family celebrations, and study tours with end-to-end planning.</p>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Event Engine</span>
          <h2 className="section-title">AI-Optimized Scheduling</h2>
          <p className="section-subtitle">AI analyzes audience profiles and feedback to improve event planning.</p>
          <ul>
            <li>Smart calendars to avoid peak conflicts.</li>
            <li>Real-time registration analytics.</li>
            <li>Continuous improvement based on feedback.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
