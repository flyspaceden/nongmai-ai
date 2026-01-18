import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function EcoFarming() {
  return (
    <Layout lang="en">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Circular Farming · Seasonal Harvests</span>
            <h1>Eco Farming Zone</h1>
            <p>A fish-vegetable-flower-herb ecosystem that balances production with hands-on experiences.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Book a Harvest Tour
              </Link>
              <Link className="btn ghost" to="/en/masterplan">
                Back to Master Plan
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
              alt="Eco farming"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Fish · Veg · Flower · Herb</span>
          <h2 className="section-title">Terraced Farming Rings</h2>
          <p className="section-subtitle">Seasonal vegetables, economic flower fields, and medicinal herb gardens surround the ponds.</p>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "32px" }}>
            <div className="card">
              <strong>Seasonal Veg Gardens</strong>
              <p>Pick-your-own and adoption plots with guided farming tools.</p>
            </div>
            <div className="card">
              <strong>Flower Fields</strong>
              <p>Cosmos, sunflower, lavender for scenery and nectar harvesting.</p>
            </div>
            <div className="card">
              <strong>Herb Gardens</strong>
              <p>Dendrobium, mugwort, honeysuckle with science labels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Family Farming Plots</strong>
            <p>Seed-to-harvest experiences with safe tools and guidance.</p>
          </div>
          <div className="card">
            <strong>Harvest & Takeaway</strong>
            <p>On-site processing, vacuum packing, and seasonal gift boxes.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI for Farming</span>
          <h2 className="section-title">Smarter, Safer Eco Farming</h2>
          <p className="section-subtitle">AI connects soil, climate, and water data to optimize planting and harvesting.</p>
          <ul>
            <li>Planting guidance based on climate and soil signals.</li>
            <li>Nutrient circulation monitoring between pond and fields.</li>
            <li>QR traceability for each plot and batch.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
