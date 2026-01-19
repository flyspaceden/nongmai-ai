import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingPingang() {
  return (
    <Layout lang="en" ctaLabel="Book a Visit" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">5,000-mu Farm Complex · Study & Wellness Support</span>
            <h1>Pingang Farm Complex</h1>
            <p>A leisure, study, and AI agriculture education hub for residents within a 300km radius.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Book a Visit
              </Link>
              <Link className="btn ghost" to="/en/hailing">
                Back to Overview
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1600&q=80"
              alt="Farm complex"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Scenario Matrix</span>
          <h2 className="section-title">Integrated Experience Matrix</h2>
          <p className="section-subtitle">A full-day mix of leisure, education, and eco agriculture.</p>
          <div className="matrix-grid reveal" style={{ marginTop: "24px" }}>
            <div className="matrix-card">
              <strong>Leisure & Resort</strong>
              <p>Resorts, dining, BBQ, fishing, and marine science exhibits.</p>
            </div>
            <div className="matrix-card">
              <strong>Study & Education</strong>
              <p>Science programs, aquaculture breeding, and AI agriculture learning.</p>
            </div>
            <div className="matrix-card">
              <strong>Eco & Farming</strong>
              <p>Wetland birds, plant observation, rice and vegetable bases.</p>
            </div>
            <div className="matrix-card">
              <strong>AI Learning Hub</strong>
              <p>Smart aquaculture demos and AI agriculture exhibitions.</p>
            </div>
            <div className="matrix-card">
              <strong>Saline Rice Base</strong>
              <p>Special crop demonstrations and eco trials.</p>
            </div>
            <div className="matrix-card">
              <strong>Herb Research</strong>
              <p>Medicinal herb demonstration and wellness education.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>AI Learning Hub</strong>
            <p>Smart aquaculture demonstrations and AI agriculture exhibitions.</p>
          </div>
          <div className="card">
            <strong>Herbal Research Base</strong>
            <p>Medicinal herb demonstration and science education.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Agriculture Hub</span>
          <h2 className="section-title">AI-Driven Complex</h2>
          <p className="section-subtitle">Connect breeding, farming, study, and tourism into one operational loop.</p>
          <ul>
            <li>Data visualization for hatchery and farm growth.</li>
            <li>Smart course assignment for study programs.</li>
            <li>Experience-to-product sales linkage.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
