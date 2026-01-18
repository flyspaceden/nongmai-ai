import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function FamilyFun() {
  return (
    <Layout lang="en" ctaLabel="Book Family Visit" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Age-Based Activities · Natural Play</span>
            <h1>Family Fun Zone</h1>
            <p>Designed around aquaculture and nature, bringing families closer through hands-on play.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Book Family Visit
              </Link>
              <Link className="btn ghost" to="/en/masterplan">
                Back to Master Plan
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80"
              alt="Family fun"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Fishing Playgrounds</strong>
            <p>3–6: touch & catch pools. 7–12: fishing contests and muddy catch challenges. Gear rental and fish processing available.</p>
          </div>
          <div className="card">
            <strong>Natural Play Zone</strong>
            <p>Straw maze, tire swings, seed treasure sand pits, and plant climbing frames.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card reveal">
          <strong>DIY Workshops</strong>
          <p>Leaf rubbings, herbal sachets, fish-shaped pottery, and farm-to-table baking.</p>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI for Family</span>
          <h2 className="section-title">AI-Assisted Safety & Learning</h2>
          <p className="section-subtitle">Smart prompts for age-based routes and safety, with AR learning cards for kids.</p>
          <ul>
            <li>Age-based activity suggestions and time slots.</li>
            <li>Water-area safety alerts and guidance.</li>
            <li>AR knowledge cards for fish and plants.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
