import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80";

export default function Entrepreneurship() {
  return (
    <Layout lang="en" ctaLabel="Apply" ctaTo="/en/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">Open Scenarios · Research Collaboration · Incubation</span>
            <h1>Student Entrepreneurship Center</h1>
            <p>We provide real-world scenarios, data access, mentors, and supply chain resources to turn ideas into operational agri-tech projects.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Apply
              </Link>
              <Link className="btn ghost" to="/en/company/partners">
                Co-build
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Why Here</span>
          <h2 className="section-title">Why Build Here</h2>
          <div className="nm-grid nm-grid-4 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>Real Scenarios</strong>
              <p>5,000-mu fishpond and steady visitor flow.</p>
            </div>
            <div className="card">
              <strong>Data Assets</strong>
              <p>Water, feeding, visitor, and study data (showcase).</p>
            </div>
            <div className="card">
              <strong>Supply Chain</strong>
              <p>Yongxing Aquaculture channels and partners.</p>
            </div>
            <div className="card">
              <strong>Fast Iteration</strong>
              <p>Rapid pilots and repeatable templates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Capability Modules</span>
          <h2 className="section-title">Center Capabilities</h2>
          <div className="matrix-grid reveal" style={{ marginTop: "24px" }}>
            <div className="matrix-card">
              <strong>Incubation Space</strong>
              <p>Workstations, meeting rooms, and demo areas.</p>
            </div>
            <div className="matrix-card">
              <strong>Training Base</strong>
              <p>Smart aquaculture, farming operations, and study programs.</p>
            </div>
            <div className="matrix-card">
              <strong>Mentor Network</strong>
              <p>Entrepreneurs, researchers, and operators.</p>
            </div>
            <div className="matrix-card">
              <strong>Startup Toolkit</strong>
              <p>Branding, compliance, and channel support.</p>
            </div>
            <div className="matrix-card">
              <strong>Showcase & Media</strong>
              <p>Demo Day, media shoots, and public events.</p>
            </div>
            <div className="matrix-card">
              <strong>Funding Link</strong>
              <p>Investor access and industry funds (showcase).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Startup Directions</span>
          <h2 className="section-title">Project Directions</h2>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>AI Water Prediction</strong>
              <p>Monitoring and alert systems for aquaculture.</p>
            </div>
            <div className="card">
              <strong>Smart Feeding</strong>
              <p>Energy-saving strategies and yield improvement.</p>
            </div>
            <div className="card">
              <strong>Full-chain Traceability</strong>
              <p>Compliance and quality assurance tools.</p>
            </div>
            <div className="card">
              <strong>Study Curriculum Products</strong>
              <p>Content systems and SaaS tools.</p>
            </div>
            <div className="card">
              <strong>Tourism Growth Ops</strong>
              <p>Booking, membership, and retention systems.</p>
            </div>
            <div className="card">
              <strong>Brand & E-commerce</strong>
              <p>Agricultural brand and channel expansion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Application Flow</span>
          <h2 className="section-title">Application Process</h2>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>Submit</strong>
              <p>Team and project overview.</p>
            </div>
            <div className="step-card">
              <strong>Review</strong>
              <p>Scenario fit and resource matching.</p>
            </div>
            <div className="step-card">
              <strong>Co-create Plan</strong>
              <p>Targets and pilot scope.</p>
            </div>
            <div className="step-card">
              <strong>Pilot Run</strong>
              <p>Small-scale validation and iteration.</p>
            </div>
            <div className="step-card">
              <strong>Incubation</strong>
              <p>Long-term collaboration and outputs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Open Lab</span>
          <h2 className="section-title">AI Tools & Open Capabilities</h2>
          <p className="section-subtitle">Dashboards and sandbox environments help teams validate quickly (showcase).</p>
          <ul>
            <li>Data dashboards for water and operations.</li>
            <li>Sandbox environment with simulated data.</li>
            <li>Compliance and access control.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
