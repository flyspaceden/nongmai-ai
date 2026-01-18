import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyChairman() {
  return (
    <Layout lang="en" ctaLabel="Contact Office" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Long-term Builder of Aquaculture</span>
            <h1>Chairman Huang Chuangzhi</h1>
            <p>A pioneer who started seafood trade in Shenzhen and invested in large-scale aquaculture in Yangjiang, building a national supply chain legacy.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Contact Office
              </Link>
              <Link className="btn ghost" to="/en/company/yongxing">
                Learn Yongxing
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80"
              alt="Chairman"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Timeline</span>
          <h2 className="section-title">From Trade to Aquaculture Empire</h2>
          <div className="timeline reveal" style={{ marginTop: "24px" }}>
            <div className="timeline-item">
              <strong>1970s–1980s</strong>
              <p>Started seafood trade in Shenzhen, building supply chain expertise.</p>
            </div>
            <div className="timeline-item">
              <strong>1990s</strong>
              <p>Invested heavily in Yangjiang Pingang Farm to build large-scale fishponds.</p>
            </div>
            <div className="timeline-item">
              <strong>2000s–Today</strong>
              <p>Expanded globally, guiding aquaculture practices and ensuring food safety.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Industry Contribution</strong>
            <p>40+ years in supply chain and export trade, a pioneer of production-to-sales models.</p>
          </div>
          <div className="card">
            <strong>Leadership Roles</strong>
            <p>Vice President of Shenzhen Aquaculture Association; Standing President of Yangjiang Aquaculture Association.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">Legacy + AI</span>
          <h2 className="section-title">Experience Upgraded by AI</h2>
          <p className="section-subtitle">Traditional knowledge becomes data-driven intelligence for the next generation of aquaculture.</p>
          <ul>
            <li>Decades of experience enrich AI model training.</li>
            <li>Scientific operations for stable food safety.</li>
            <li>From craft to smart aquaculture.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
