import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyPartners() {
  return (
    <Layout lang="en" ctaLabel="Submit Request" ctaTo="/en/contact">
      <section className="hero hero-centered">
        <div className="container hero-content">
          <div>
            <span className="tag">Build Together · Grow Together</span>
            <h1>Partnerships</h1>
            <p>We collaborate with schools, enterprises, and channel partners across study programs, procurement, and brand campaigns.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Submit Request
              </Link>
              <Link className="btn ghost" to="/en/company/nongmai-ai">
                About Nongmai AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Study Partnerships</strong>
            <p>Curriculum customization, facilities, and certification support.</p>
          </div>
          <div className="card">
            <strong>Corporate Programs</strong>
            <p>Team building with farming experiences and lodging options.</p>
          </div>
          <div className="card">
            <strong>Procurement</strong>
            <p>Seafood and agricultural products with traceability.</p>
          </div>
          <div className="card">
            <strong>Brand Collaborations</strong>
            <p>Co-branded events, media campaigns, and live streaming.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Cooperation Flow</span>
          <h2 className="section-title">Partnership Process</h2>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>Submit Needs</strong>
              <p>Goals, group size, budget, and timeline.</p>
            </div>
            <div className="step-card">
              <strong>Co-create Plan</strong>
              <p>Activity flow, curriculum, and materials list.</p>
            </div>
            <div className="step-card">
              <strong>Pilot Run</strong>
              <p>Small-scale trial and optimization.</p>
            </div>
            <div className="step-card">
              <strong>Long-term Program</strong>
              <p>Annual plan and ongoing collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Partnership Hub</span>
          <h2 className="section-title">AI-Matched Proposals</h2>
          <p className="section-subtitle">Auto-generated proposal templates based on goals and scale.</p>
          <ul>
            <li>Smart routing to the right teams.</li>
            <li>Structured plans and materials list.</li>
            <li>Progress tracking for execution.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
