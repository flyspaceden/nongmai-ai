import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingIsland() {
  return (
    <Layout lang="en" ctaLabel="Plan Island Trip" ctaTo="/en/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Coastal Culture · Port Experience</span>
            <h1>Hailing Island Destination</h1>
            <p>Nanhai No.1 Museum, Zhapo Fishing Port, and island scenery for culture + leisure.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Plan Island Trip
              </Link>
              <Link className="btn ghost" to="/en/hailing">
                Back to Overview
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80"
              alt="Island scenery"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Island Highlights</span>
          <h2 className="section-title">Hailing Island Highlights</h2>
          <p className="section-subtitle">Marine culture, fishing heritage, and coastal leisure blended into a slow-travel route.</p>
          <div className="stay-gallery reveal" style={{ marginTop: "24px" }}>
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
              alt="Island view"
            />
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Coastal trail"
            />
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="Fishing port"
            />
          </div>
          <div className="nm-grid nm-grid-2 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>Nanhai No.1 Museum</strong>
              <p>An ocean culture and archeology landmark for study and family visits.</p>
            </div>
            <div className="card">
              <strong>Zhapo Fishing Port</strong>
              <p>Experience fishing culture and harbor life with local insights.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>Coastal Scenery</strong>
            <p>Sunset viewpoints, shoreline walks, and photo spots.</p>
          </div>
          <div className="card">
            <strong>Seafood Cuisine</strong>
            <p>From port to table, an authentic seafood journey.</p>
          </div>
          <div className="card">
            <strong>Sea Activities</strong>
            <p>Ocean-friendly activities for families and youth.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Island Guide</span>
          <h2 className="section-title">AI Guide for Island Visits</h2>
          <p className="section-subtitle">Tide, weather, and crowd predictions for safer, smarter travel.</p>
          <ul>
            <li>Photo spots and best light windows.</li>
            <li>Tide and weather alerts.</li>
            <li>Smart combinations of culture and leisure.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
