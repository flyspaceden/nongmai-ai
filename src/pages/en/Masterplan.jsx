import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function Masterplan() {
  return (
    <Layout lang="en">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">See · Play · Learn · Stay · Shop</span>
            <h1>Master Plan Overview</h1>
            <p>Five zones built around the 5,000-mu eco fishpond, delivering immersive, hands-on experiences for all ages.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/masterplan/ecofarming">
                Explore Eco Farming
              </Link>
              <Link className="btn ghost" to="/en/contact">
                Book a Visit
              </Link>
            </div>
          </div>
          <div className="plan-map">
            <div className="plan-center">5,000 mu Eco Fishpond</div>
            <div className="plan-node node-1">
              <strong>Eco Farming</strong>
              Fish · Veg · Flower · Herb
            </div>
            <div className="plan-node node-2">
              <strong>AI & Study</strong>
              Labs and museums
            </div>
            <div className="plan-node node-3">
              <strong>Family Fun</strong>
              Age-based play
            </div>
            <div className="plan-node node-4">
              <strong>Stay & Dine</strong>
              Resorts and dining
            </div>
            <div className="plan-node node-5">
              <strong>Events</strong>
              Seasonal festivals
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Master Plan</span>
          <h2 className="section-title">Five Zones, One Experience Chain</h2>
          <p className="section-subtitle">From eco farming to AI learning, every zone is designed for interaction.</p>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "32px" }}>
            <div className="card">
              <strong>Eco Farming</strong>
              <p>Circular farming, harvest, and adoption programs.</p>
            </div>
            <div className="card">
              <strong>AI & Study</strong>
              <p>Smart labs, machinery museum, and curricula.</p>
            </div>
            <div className="card">
              <strong>Family Fun</strong>
              <p>Age-based fishing, natural playgrounds, DIY workshops.</p>
            </div>
            <div className="card">
              <strong>Stay & Dine</strong>
              <p>Resorts, dining, camping, and night activities.</p>
            </div>
            <div className="card">
              <strong>Events</strong>
              <p>Seasonal festivals and corporate programs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>Family Day Trip</strong>
            <p>Planting + cooking + fishing + DIY workshop.</p>
          </div>
          <div className="card">
            <strong>One-day Study Camp</strong>
            <p>Lab sessions + machinery interaction + certificates.</p>
          </div>
          <div className="card">
            <strong>Two-day Getaway</strong>
            <p>Eco farming + night camping + Hailing Island.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Extended Zones</span>
          <h2 className="section-title">Special Venues</h2>
          <div className="nm-grid nm-grid-2 reveal" style={{ marginTop: "24px" }}>
            <Link className="card" to="/en/masterplan/aquaculture-museum">
              <strong>Aquaculture Museum</strong>
              <p>Heritage, machinery interaction, and AI science exhibits.</p>
            </Link>
            <Link className="card" to="/en/masterplan/entrepreneurship">
              <strong>Entrepreneurship Center</strong>
              <p>Scenario access, data support, and incubation platform.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Digital Twin</span>
          <h2 className="section-title">AI Route Guidance</h2>
          <p className="section-subtitle">Digital twin maps help optimize visitor flow and recommend routes.</p>
          <ul>
            <li>Dynamic routes based on crowd density and interests.</li>
            <li>Best photo timing and scenic points.</li>
            <li>Booking integration to reduce waiting time.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
