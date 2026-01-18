import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingExchange() {
  return (
    <Layout lang="en" ctaLabel="Partnership Inquiry" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="badge">Planning / Concept Display</span>
            <h1>Exchange & Forum Hub</h1>
            <p>An international AI aquaculture exchange base and forum platform to connect experts and partners.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Partnership Inquiry
              </Link>
              <Link className="btn ghost" to="/en/hailing">
                Back to Overview
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="Exchange forum"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>International AI Aquaculture Exchange Base</strong>
            <p>Training, visits, and standards exchange for global partners.</p>
          </div>
          <div className="card">
            <strong>Mawei Island Cultural Center</strong>
            <p>International cultural exchange and brand influence.</p>
          </div>
          <div className="card">
            <strong>AI+ Maritime Economy Forum</strong>
            <p>Focused on AI aquaculture and sustainable ocean economy.</p>
          </div>
          <div className="card">
            <strong>AI Wellness & Maritime Museum</strong>
            <p>Integrated wellness and maritime culture experiences.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Forum Stack</span>
          <h2 className="section-title">AI-Powered Collaboration</h2>
          <p className="section-subtitle">Smart agenda management, multilingual assistance, and project tracking.</p>
          <ul>
            <li>Agenda planning and registration automation (display).</li>
            <li>AI translation and summary generation (display).</li>
            <li>Partner project tracking and outcomes showcase (display).</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
