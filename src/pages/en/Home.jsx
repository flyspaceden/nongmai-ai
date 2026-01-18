import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function Home() {
  return (
    <Layout lang="en">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">5,000-mu Eco Fishpond · AI Learning · Culture & Leisure</span>
            <h1>Yangjiang Yongxing Nongmai AI International Fishpond Haven</h1>
            <p>Built around aquaculture, powered by AI, and expanded by tourism, this destination offers an end-to-end experience: see, play, learn, stay, and shop.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Book a Visit
              </Link>
              <Link className="btn ghost" to="/en/masterplan">
                Master Plan
              </Link>
              <Link className="btn ghost" to="/en/company/partners">
                Partner With Us
              </Link>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>5,000 mu</strong>
                <span>Eco fishpond core</span>
              </div>
              <div className="metric">
                <strong>4-in-1</strong>
                <span>Agriculture · AI · Tourism · Study</span>
              </div>
              <div className="metric">
                <strong>All ages</strong>
                <span>Family · Youth · Seniors</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="Eco fishpond landscape"
            />
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-4 reveal">
          <div className="card">
            <strong>Agriculture</strong>
            <p>Fish-veg-flower-herb circular farming with seasonal harvests.</p>
          </div>
          <div className="card">
            <strong>AI Science</strong>
            <p>Interactive labs and aquaculture science education.</p>
          </div>
          <div className="card">
            <strong>Tourism</strong>
            <p>Resorts, dining, camping, and scenic experiences.</p>
          </div>
          <div className="card">
            <strong>Study</strong>
            <p>Structured courses for schools and research partners.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Core Zones</span>
          <h2 className="section-title">Five Zones, One Seamless Journey</h2>
          <p className="section-subtitle">Each zone is designed for hands-on participation and immersive learning.</p>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "32px" }}>
            <Link className="card" to="/en/masterplan/ecofarming">
              <strong>Eco Farming</strong>
              <p>Circular farming, pick-your-own, and adoption programs.</p>
            </Link>
            <Link className="card" to="/en/masterplan/ai-study">
              <strong>AI & Study</strong>
              <p>Smart labs, machinery museum, and curriculum pathways.</p>
            </Link>
            <Link className="card" to="/en/masterplan/family-fun">
              <strong>Family Fun</strong>
              <p>Age-based fishing, natural playgrounds, DIY workshops.</p>
            </Link>
            <Link className="card" to="/en/masterplan/stay-dine">
              <strong>Stay & Dine</strong>
              <p>Resorts, water dining, BBQ, and camping experiences.</p>
            </Link>
            <Link className="card" to="/en/masterplan/events">
              <strong>Events</strong>
              <p>Seasonal festivals and custom team-building programs.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Lens</span>
          <h2 className="section-title">AI Makes Ecology Visible</h2>
          <p className="section-subtitle">From water quality to visitor experience, AI brings transparency and predictability.</p>
          <div className="nm-grid nm-grid-2">
            <ul>
              <li>Smart aquaculture dashboards for real-time decisions.</li>
              <li>AI study assistant for courses and certificates.</li>
              <li>Traceability across production and circulation.</li>
            </ul>
            <div className="card">
              <strong>AI Data Mock</strong>
              <p>Water quality trends, health status, and yield forecasts (display).</p>
              <div className="metrics" style={{ marginTop: "12px" }}>
                <div className="metric">
                  <strong>98%</strong>
                  <span>Indicator stability</span>
                </div>
                <div className="metric">
                  <strong>24h</strong>
                  <span>Alert response</span>
                </div>
                <div className="metric">
                  <strong>Full-chain</strong>
                  <span>Traceability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Hailing Gateway</span>
          <h2 className="section-title">A 300km Short-Trip Gateway</h2>
          <p className="section-subtitle">Connect Pingang farm complex with Hailing Island for a two-day getaway.</p>
          <div className="nm-grid nm-grid-2 reveal" style={{ marginTop: "32px" }}>
            <div className="card">
              <strong>Pingang Complex</strong>
              <p>Resort, dining, fishing, science museum, and AI agriculture learning.</p>
              <Link className="btn ghost" to="/en/hailing/pingang" style={{ marginTop: "12px" }}>
                Explore
              </Link>
            </div>
            <div className="card">
              <strong>Hailing Island</strong>
              <p>Nanhai No.1 Museum, Zhapo Fishing Port, coastal culture.</p>
              <Link className="btn ghost" to="/en/hailing/island" style={{ marginTop: "12px" }}>
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
