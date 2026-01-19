import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingWellbeing() {
  return (
    <Layout lang="en" ctaLabel="Learn More" ctaTo="/en/contact">
      <section className="hero hero-centered">
        <div className="container hero-content">
          <div>
            <span className="tag">AI + Wellbeing Support</span>
            <h1>AI Wellbeing & Autism Support Center</h1>
            <p>Focused on support, companionship, training, and public education (showcase). No medical claims.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Request Info
              </Link>
              <Link className="btn ghost" to="/en/hailing/exchange">
                Back to Exchange Overview
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80"
              alt="AI Wellbeing Center"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>Sensory & Focus Training</strong>
            <p>Nature-based activities to support focus and perception.</p>
          </div>
          <div className="card">
            <strong>Family Support Classes</strong>
            <p>Companion sessions for parents and caregivers (showcase).</p>
          </div>
          <div className="card">
            <strong>Social Practice</strong>
            <p>Small group activities for communication and collaboration.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Support Modules</span>
          <h2 className="section-title">Space & Program Modules</h2>
          <p className="section-subtitle">Combines natural settings with AI-assisted tools for long-term support.</p>
          <div className="matrix-grid reveal" style={{ marginTop: "24px" }}>
            <div className="matrix-card">
              <strong>Assessment & Records</strong>
              <p>Learning records and growth logs.</p>
            </div>
            <div className="matrix-card">
              <strong>Group Activity Zone</strong>
              <p>Interactive sessions and emotional expression.</p>
            </div>
            <div className="matrix-card">
              <strong>Nature Learning Zone</strong>
              <p>Farm-based exploration and sensory engagement.</p>
            </div>
            <div className="matrix-card">
              <strong>Family Consultation</strong>
              <p>Planning and support sessions (showcase).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Companion</span>
          <h2 className="section-title">AI-Assisted Programs</h2>
          <p className="section-subtitle">AI supports training records and program matching without medical diagnosis or treatment claims.</p>
          <ul>
            <li>Daily training records and progress insights.</li>
            <li>Personalized curriculum recommendations.</li>
            <li>Family interaction support.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
