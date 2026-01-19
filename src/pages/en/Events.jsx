import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80";

export default function Events() {
  return (
    <Layout lang="en" ctaLabel="Register" ctaTo="/en/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Annual Calendar</span>
          <h2 className="section-title">Seasonal Festival Calendar</h2>
          <p className="section-subtitle">Four seasons of curated activities for ongoing buzz.</p>
          <div className="event-calendar reveal" style={{ marginTop: "24px" }}>
            <div className="event-season">
              <strong>Spring: Flower & Fishing Festival</strong>
              <p>Flower fields + fishing contests + family programs.</p>
            </div>
            <div className="event-season">
              <strong>Summer: Starry Camping Season</strong>
              <p>Camping, rice-field music nights, and outdoor movies.</p>
            </div>
            <div className="event-season">
              <strong>Autumn: Harvest Festival</strong>
              <p>Picking, farm market, and seasonal showcases.</p>
            </div>
            <div className="event-season">
              <strong>Winter: Warm Farm Fun</strong>
              <p>Tea by the fire and folk culture experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Custom Services</span>
          <h2 className="section-title">Custom Event Services</h2>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>Corporate Retreats</strong>
              <p>Team challenges + farming activities + group bonding.</p>
            </div>
            <div className="step-card">
              <strong>Family Celebrations</strong>
              <p>Birthday parties + dedicated farm experiences.</p>
            </div>
            <div className="step-card">
              <strong>Study Tours</strong>
              <p>Customized curriculum + dining & lodging + certificates.</p>
            </div>
          </div>
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
