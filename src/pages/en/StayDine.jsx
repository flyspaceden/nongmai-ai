import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function StayDine() {
  return (
    <Layout lang="en" ctaLabel="Book Stay" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Resorts · Dining · Night Activities</span>
            <h1>Stay & Dine Zone</h1>
            <p>Extend the stay with themed resorts, eco dining, and outdoor leisure experiences.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Book Stay & Dining
              </Link>
              <Link className="btn ghost" to="/en/masterplan">
                Back to Master Plan
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              alt="Resort and camping"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>Waterfront Courtyard</strong>
            <p>Waterside stays with BBQ facilities and private gardens.</p>
          </div>
          <div className="card">
            <strong>Garden Cabins</strong>
            <p>Hidden among flowers and vegetable plots.</p>
          </div>
          <div className="card">
            <strong>Family Treehouses</strong>
            <p>Slides and mini yards for family-friendly stays.</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Eco Dining</strong>
            <p>Floating restaurant, BBQ area, and farmhouse kitchen with farm-fresh ingredients.</p>
          </div>
          <div className="card">
            <strong>Outdoor Leisure</strong>
            <p>Scenic trails, viewing platforms, camping, and flower-field photo spots.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Travel Concierge</span>
          <h2 className="section-title">AI Stay Planner</h2>
          <p className="section-subtitle">Automated itineraries based on family size, stay duration, and preferences.</p>
          <ul>
            <li>Dining suggestions with dietary notes.</li>
            <li>Night activities booking prompts.</li>
            <li>Room type recommendations.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
