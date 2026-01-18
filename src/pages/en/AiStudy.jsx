import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function AiStudy() {
  return (
    <Layout lang="en" ctaLabel="Study Partnership" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Differentiated Science IP</span>
            <h1>AI & Study Zone</h1>
            <p>Interactive labs, machinery history, and structured curriculum help students understand aquaculture science.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Study Partnership
              </Link>
              <Link className="btn ghost" to="/en/masterplan">
                Back to Master Plan
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1581091012184-5c1d1d41c37b?auto=format&fit=crop&w=1600&q=80"
              alt="Smart lab"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Smart Aquaculture Lab</strong>
            <p>Water quality testing, disease diagnosis, and hatchery observation with hands-on sessions.</p>
          </div>
          <div className="card">
            <strong>Machinery Culture Museum</strong>
            <p>Interactive exhibits from vintage tools to smart fishing devices.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card reveal">
          <strong>Natural Education Classroom</strong>
          <p>Programs for different grades: aquaponics, insect observation, ecological cycles, and aquaculture skills.</p>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Study Stack</span>
          <h2 className="section-title">AI-Powered Learning System</h2>
          <p className="section-subtitle">A closed loop from curriculum design to learning records and assessment.</p>
          <ul>
            <li>AI course matching for different grades.</li>
            <li>Lab data dashboards for visualization.</li>
            <li>Automated certificates and portfolios.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
