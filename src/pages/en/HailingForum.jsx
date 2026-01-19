import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingForum() {
  return (
    <Layout lang="en" ctaLabel="Join the Forum" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">AI + Maritime Economy</span>
            <h1>Hailing Island AI + International Maritime Economy Forum</h1>
            <p>A platform for blue economy collaboration, smart aquaculture, and sustainable innovation.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Register Interest
              </Link>
              <Link className="btn ghost" to="/en/hailing/exchange">
                Back to Exchange Overview
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80"
              alt="Maritime Economy Forum"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Forum Agenda</span>
          <h2 className="section-title">Topic Tracks</h2>
          <p className="section-subtitle">Four focus tracks for policy, industry, and global collaboration.</p>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>Blue Economy Growth</strong>
              <p>Ports, island tourism, and ocean产业链.</p>
            </div>
            <div className="step-card">
              <strong>AI for Smart Aquaculture</strong>
              <p>Digital twin, water quality, and traceability.</p>
            </div>
            <div className="step-card">
              <strong>International Cooperation</strong>
              <p>Cross-border projects, investment, and policy exchange.</p>
            </div>
            <div className="step-card">
              <strong>Sustainability</strong>
              <p>Eco restoration, low-carbon tech, and green supply chains.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Forum Structure</strong>
            <p>Keynotes + roundtables + industry pitch + signing ceremony (showcase).</p>
          </div>
          <div className="card">
            <strong>Participants</strong>
            <p>Government, industry leaders, research institutes, and global partners.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Knowledge Layer</span>
          <h2 className="section-title">Digital Forum Archive</h2>
          <p className="section-subtitle">Build a knowledge base and project pool after each forum.</p>
          <ul>
            <li>Live streams with AI captions and translation.</li>
            <li>Topic repository and matchmaking pool.</li>
            <li>Auto-generated post-event reports.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
