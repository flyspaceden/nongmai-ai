import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80";

export default function AquacultureMuseum() {
  return (
    <Layout lang="en" ctaLabel="Book a Visit" ctaTo="/en/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">Maritime Heritage · Machinery · AI Science</span>
            <h1>Aquaculture Museum</h1>
            <p>An interactive museum that connects fishing heritage, aquaculture science, and AI visualization.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Book a Visit
              </Link>
              <Link className="btn ghost" to="/en/masterplan">
                Back to Master Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Exhibition Lines</span>
          <h2 className="section-title">Four Exhibition Lines</h2>
          <p className="section-subtitle">From heritage to smart aquaculture in four themed narratives.</p>
          <div className="nm-grid nm-grid-2 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>Maritime Heritage</strong>
              <p>Yangjiang fishing culture and coastal history.</p>
            </div>
            <div className="card">
              <strong>Eco Aquaculture Science</strong>
              <p>Water quality, oxygen, feed, and circular ecology.</p>
            </div>
            <div className="card">
              <strong>Machinery Evolution</strong>
              <p>From vintage tools to smart fishing equipment.</p>
            </div>
            <div className="card">
              <strong>Smart Aquaculture</strong>
              <p>Digital twin dashboards and traceability demos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Interactive Lab</span>
          <h2 className="section-title">Hands-on Experiences</h2>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>Junior Aquaculture Scientist</strong>
              <p>Water testing, microscopy, and fry incubation.</p>
            </div>
            <div className="card">
              <strong>Machinery Stations</strong>
              <p>Safe hands-on interaction with task challenges.</p>
            </div>
            <div className="card">
              <strong>Traceability Demo</strong>
              <p>Scan to see batch and inspection records (showcase).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Study Packs</span>
          <h2 className="section-title">Study Packages</h2>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>Lower Grades</strong>
              <p>Aquaponics basics + insect observation (60-90 mins).</p>
            </div>
            <div className="step-card">
              <strong>Upper Grades</strong>
              <p>Ecology + aquaculture tech (120 mins).</p>
            </div>
            <div className="step-card">
              <strong>Family Track</strong>
              <p>Family task cards + interactive check-ins (90 mins).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Guide</span>
          <h2 className="section-title">AI-Assisted Learning</h2>
          <p className="section-subtitle">AI narration and interactive tasks improve engagement and outcomes.</p>
          <ul>
            <li>Smart tour routes and multilingual narration (showcase).</li>
            <li>Interactive Q&A and knowledge tasks.</li>
            <li>Data visualization for water trends and strategies.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
