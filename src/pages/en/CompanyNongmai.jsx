import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyNongmai() {
  return (
    <Layout lang="en" ctaLabel="Talk to Us" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">AI + Agriculture Ecosystem</span>
            <h1>Nongmai AI Technology</h1>
            <p>We build AI systems that connect aquaculture, farming, tourism, and education into one sustainable ecosystem.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Talk to Us
              </Link>
              <Link className="btn ghost" to="/en/company/partners">
                Partnerships
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
              alt="AI technology"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">AI Stack</span>
          <h2 className="section-title">AI Agriculture Capability Stack</h2>
          <p className="section-subtitle">From sensing to decision-making and operations.</p>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>AI Sensing</strong>
              <p>Water, climate, video, and IoT data capture with alerts.</p>
            </div>
            <div className="step-card">
              <strong>AI Decisions</strong>
              <p>Feeding, water control, disease risk, and yield forecast.</p>
            </div>
            <div className="step-card">
              <strong>AI Traceability</strong>
              <p>Batch tracking from seedling to distribution.</p>
            </div>
            <div className="step-card">
              <strong>AI Education</strong>
              <p>Course management, interactive exhibits, learning records.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Product Suite</strong>
            <p>Smart aquaculture dashboard, AI learning system, full-chain traceability, and operations tools.</p>
          </div>
          <div className="card">
            <strong>Real-world Impact</strong>
            <p>Applied in farms, study bases, tourism parks, and supply chains.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Ecosystem</span>
          <h2 className="section-title">From Data to Business Outcomes</h2>
          <p className="section-subtitle">End-to-end visibility, forecasting, and compliance for agriculture operations.</p>
          <ul>
            <li>Integrated dashboards for production and experience.</li>
            <li>Predictive analytics for supply and demand.</li>
            <li>Trust signals backed by traceability data.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
