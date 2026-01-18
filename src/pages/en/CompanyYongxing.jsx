import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyYongxing() {
  return (
    <Layout lang="en" ctaLabel="Procurement" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Greater Bay Area Supply Backbone</span>
            <h1>Guangdong Yangjiang Yongxing Aquaculture</h1>
            <p>Founded in 2005 with 4,200 mu standardized ponds, 1,300 mu tidal flats, and 30,000 m³ factory farming water.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Procurement
              </Link>
              <Link className="btn ghost" to="/en/company/partners">
                Partnerships
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80"
              alt="Aquaculture"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>Scale</strong>
            <p>~5,000 tons annual output, RMB 220 million output value.</p>
          </div>
          <div className="card">
            <strong>Products</strong>
            <p>14 product lines certified as Shenzhen “Zhenpin”.</p>
          </div>
          <div className="card">
            <strong>Technique</strong>
            <p>Brackish-water farming for improved texture and taste.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Supply & Channels</strong>
            <p>Serving Shenzhen for 40+ years and Hong Kong for 38+ years, supplying major platforms and retailers.</p>
          </div>
          <div className="card">
            <strong>Certifications</strong>
            <p>Export base, Bay Area “Vegetable Basket” base, ISO9001, and customs supervision.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card reveal">
          <strong>Quality & Traceability</strong>
          <p>Multiple testing checkpoints with 100% pass rate, full traceability, and daily compliance certificates.</p>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI + Aquaculture</span>
          <h2 className="section-title">Smart Farming Upgrade</h2>
          <p className="section-subtitle">HACCP processing plant planning and AI traceability systems to expand export markets.</p>
          <ul>
            <li>IoT + AI monitoring for real-time quality control.</li>
            <li>Full-chain traceability for compliance and trust.</li>
            <li>Brand goal: reliable, end-to-end supplier.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
