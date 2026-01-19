import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function Hailing() {
  return (
    <Layout lang="en" ctaLabel="Plan a Trip" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">300km Short-Trip Gateway</span>
            <h1>Hailing Gateway Overview</h1>
            <p>Connect Pingang Farm Complex with Hailing Island for a two- or three-day itinerary.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/hailing/pingang">
                Pingang Complex
              </Link>
              <Link className="btn ghost" to="/en/hailing/island">
                Hailing Island
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              alt="Coastal destination"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Route Map</span>
          <h2 className="section-title">Three-Stop Gateway Route</h2>
          <div className="route-track reveal" style={{ marginTop: "24px" }}>
            <div className="route-stop">
              <strong>Pingang Farm Complex</strong>
              Resorts, dining, study tours, and AI agriculture.
            </div>
            <div className="route-stop">
              <strong>Hailing Island</strong>
              Nanhai No.1 Museum, Zhapo port, and coastal culture.
            </div>
            <div className="route-stop">
              <strong>International Exchange</strong>
              Forums and cultural exchange programs.
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-4 reveal">
          <Link className="card" to="/en/hailing/mawei">
            <strong>Mawei Cultural Center</strong>
            <p>International cultural exchange and residency.</p>
          </Link>
          <Link className="card" to="/en/hailing/forum">
            <strong>Maritime Economy Forum</strong>
            <p>Blue economy and smart aquaculture.</p>
          </Link>
          <Link className="card" to="/en/hailing/wellbeing">
            <strong>AI Wellbeing Center</strong>
            <p>Support and learning programs (showcase).</p>
          </Link>
          <Link className="card" to="/en/hailing/maritime">
            <strong>Maritime Museum</strong>
            <p>Maritime history and science exhibits.</p>
          </Link>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>2D1N Family</strong>
            <p>Farm experience + night camping + island highlights.</p>
          </div>
          <div className="card">
            <strong>2D1N Study</strong>
            <p>Lab + machinery + island cultural visit.</p>
          </div>
          <div className="card">
            <strong>3D2N Getaway</strong>
            <p>Eco farming, family fun, and island exploration.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Trip Planner</span>
          <h2 className="section-title">AI Route Optimization</h2>
          <p className="section-subtitle">Auto-generated routes by city, season, and audience preferences.</p>
          <ul>
            <li>Transportation templates for self-drive and group tours.</li>
            <li>Weather-aware itinerary adjustments.</li>
            <li>Smart mix of study, leisure, and island experiences.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
