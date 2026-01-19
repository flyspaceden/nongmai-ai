import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80";
const smartLabImage = `${import.meta.env.BASE_URL}asset/images/首页/智慧实验室.png`;

const dashboardTabs = {
  eco: {
    label: "Eco Monitoring",
    metrics: [
      { label: "Dissolved O2", value: "6.8 mg/L" },
      { label: "Water Temp", value: "25.4 ℃" },
      { label: "Salinity", value: "8.1 ‰" },
      { label: "pH", value: "7.6" }
    ],
    chartLabel: "24h Water Trend",
    tips: ["AI tip: aeration for 20 mins at 09:30", "Feeding strategy: +1.2% activity", "Alert level: low (showcase)"]
  },
  study: {
    label: "Study Programs",
    metrics: [
      { label: "Classes Today", value: "6" },
      { label: "On-site Groups", value: "12" },
      { label: "Lab Completion", value: "92%" },
      { label: "Certificates", value: "156" }
    ],
    chartLabel: "Today Course Progress",
    tips: ["AI suggestion: 10:00 lab kickoff", "Learning records auto-archived", "Certificates batch generation (showcase)"]
  },
  visitor: {
    label: "Visitor Flow",
    metrics: [
      { label: "On-site Visitors", value: "1,240" },
      { label: "Family Ratio", value: "62%" },
      { label: "Peak Time", value: "15:00" },
      { label: "Satisfaction", value: "4.7/5" }
    ],
    chartLabel: "Footfall Heat Trend",
    tips: ["AI rec: 16:30 flower-field photo spot", "Crowd alert: family zone rising", "Route suggestion: study then camping (showcase)"]
  }
};

const zoneOptions = [
  {
    id: "eco",
    index: "01",
    title: "Eco Farming",
    desc: "Fish · Veg · Flower · Herb cycle",
    summary: "Raised beds, family plots, and seasonal harvests.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    cta: "Enter Eco Farming",
    to: "/en/masterplan/ecofarming"
  },
  {
    id: "ai",
    index: "02",
    title: "AI & Study Core",
    desc: "Labs + machinery museum + courses",
    summary: "Smart labs, machinery museum, and structured programs.",
    image: smartLabImage,
    cta: "Enter AI & Study Core",
    to: "/en/masterplan/ai-study"
  },
  {
    id: "family",
    index: "03",
    title: "Family Fun Zone",
    desc: "Age-based play · DIY workshops",
    summary: "Fishing games, nature play, and hands-on crafts.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    cta: "Enter Family Fun Zone",
    to: "/en/masterplan/family-fun"
  },
  {
    id: "stay",
    index: "04",
    title: "Stay & Dine",
    desc: "Resorts · eco dining · camping",
    summary: "Waterfront stays, BBQ zones, and camping nights.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    cta: "Enter Stay & Dine",
    to: "/en/masterplan/stay-dine"
  },
  {
    id: "events",
    index: "05",
    title: "Events",
    desc: "Seasonal festivals + custom programs",
    summary: "Flower festivals, camping seasons, and custom events.",
    image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1400&q=80",
    cta: "Enter Events",
    to: "/en/masterplan/events"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("eco");
  const [activeZone, setActiveZone] = useState(zoneOptions[0].id);
  const activeData = dashboardTabs[activeTab];
  const currentZone = zoneOptions.find((zone) => zone.id === activeZone) ?? zoneOptions[0];

  return (
    <Layout lang="en">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">Hailing Seascape · AI Aquaculture Console · Fishpond Haven</span>
            <h1>Yangjiang Yongxing Nongmai AI International Fishpond Haven</h1>
            <p>
              Built around 5,000-mu eco fishponds, powered by AI for aquaculture, study programs, and tourism operations.
            </p>
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
                <strong>40+ yrs</strong>
                <span>Shenzhen & HK supply</span>
              </div>
              <div className="metric">
                <strong>Full-chain</strong>
                <span>Traceability assurance</span>
              </div>
            </div>
          </div>
          <div className="dashboard float-slow">
            <div className="dashboard-header">
              <div>
                <div className="dashboard-title">AI Aquaculture Console</div>
                <div className="text-xs text-on-soft">Live monitoring · Smart guidance</div>
              </div>
              <div className="dashboard-tabs">
                {Object.entries(dashboardTabs).map(([key, tab]) => (
                  <button
                    key={key}
                    type="button"
                    className={`dashboard-tab ${activeTab === key ? "active" : ""}`}
                    onClick={() => setActiveTab(key)}
                    aria-pressed={activeTab === key}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="dashboard-grid">
              {activeData.metrics.map((metric) => (
                <div className="dashboard-card" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
            <div className="dashboard-chart">
              <span>{activeData.chartLabel}</span>
            </div>
            <div className="dashboard-list">
              {activeData.tips.map((tip) => (
                <div key={tip}>{tip}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>AI-Controlled</strong>
            <p>Turning fishponds into computable ecosystems.</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>Water alerts and action suggestions (showcase).</li>
              <li>Feeding strategies and yield forecasts (showcase).</li>
            </ul>
          </div>
          <div className="card">
            <strong>AI-Enabled Learning</strong>
            <p>Making aquaculture science easy to understand.</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>Hands-on testing, incubation, observation.</li>
              <li>Learning records + certificates + outputs.</li>
            </ul>
          </div>
          <div className="card">
            <strong>AI-Trusted</strong>
            <p>Data-backed credibility, not just claims.</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>Batch traceability from fry to market.</li>
              <li>Multi-step inspection system (showcase).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Image Gallery</span>
          <h2 className="section-title">Tech + Resort Immersion</h2>
          <p className="section-subtitle">Image slots ready for real photos and campaigns.</p>
          <div className="gallery-grid reveal" style={{ marginTop: "24px" }}>
            <div className="gallery-item">
              <div className="gallery-media">
                <img src={heroImage} alt="Hailing seascape" />
                <span className="gallery-tag">Hailing Seascape</span>
              </div>
              <div className="gallery-caption">
                <strong>Hailing Seascape</strong>
                <p>The signature visual for 2-day getaway routes.</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
                  alt="Coastline"
                />
                <span className="gallery-tag">Coastline</span>
              </div>
              <div className="gallery-caption">
                <strong>Coastline</strong>
                <p>Sunset walks and shareable viewpoints.</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                  alt="Flower fields"
                />
                <span className="gallery-tag">Flower Fields</span>
              </div>
              <div className="gallery-caption">
                <strong>Flower Fields</strong>
                <p>Scenic fields and seasonal photo spots.</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
                  alt="Family play"
                />
                <span className="gallery-tag">Family Fun</span>
              </div>
              <div className="gallery-caption">
                <strong>Family Fun</strong>
                <p>Age-based fishing and hands-on play.</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src={smartLabImage}
                  alt="Smart lab"
                />
                <span className="gallery-tag">Smart Lab</span>
              </div>
              <div className="gallery-caption">
                <strong>Smart Lab</strong>
                <p>Water testing, incubation, and science learning.</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                  alt="Camping"
                />
                <span className="gallery-tag">Starry Camping</span>
              </div>
              <div className="gallery-caption">
                <strong>Starry Camping</strong>
                <p>Night movies and bonfire gatherings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container zone-split reveal">
          <div>
            <span className="eyebrow">Five Zones</span>
            <h2 className="section-title">Five Zones, One Journey</h2>
            <p className="section-subtitle">From eco farming to study and resorts, each zone builds the full experience.</p>
            <div className="zone-list" style={{ marginTop: "24px" }}>
              {zoneOptions.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  className={`zone-item ${activeZone === zone.id ? "active" : ""}`}
                  onClick={() => setActiveZone(zone.id)}
                  aria-pressed={activeZone === zone.id}
                >
                  <span className="zone-index">{zone.index}</span>
                  <div>
                    <strong>{zone.title}</strong>
                    <p>{zone.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-card">
              <img
                src={currentZone.image}
                alt={currentZone.title}
              />
            </div>
            <div className="card">
              <strong>{currentZone.title}</strong>
              <p>{currentZone.summary}</p>
              <div className="hero-actions" style={{ marginTop: "12px" }}>
                <Link className="btn primary" to={currentZone.to}>
                  {currentZone.cta}
                </Link>
                <Link className="btn ghost" to="/en/masterplan">
                  View Master Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <span className="tag">Family Day</span>
            <strong>Family Farm Adventure</strong>
            <p>Best for families, 6-8 hours.</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>Planting + family cooking</li>
              <li>Fishing play + farm products</li>
            </ul>
          </div>
          <div className="card">
            <span className="tag">Study Day</span>
            <strong>AI Study Camp</strong>
            <p>Best for schools, 1-day program.</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>Lab sessions + machinery interaction</li>
              <li>Learning records + certificates</li>
            </ul>
          </div>
          <div className="card">
            <span className="tag">2-Day Trip</span>
            <strong>Hailing Island Link</strong>
            <p>Best for families/youth, 2D1N.</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>Farm experience + camping/resorts</li>
              <li>Island culture + coastal views</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Trusted Supply</span>
          <h2 className="section-title">Quality & Supply Credentials</h2>
          <p className="section-subtitle">Built on stable supply and strict compliance, enhanced by tourism and education.</p>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>5,000 tons/year</strong>
              <p>Annual output with RMB 220 million value.</p>
            </div>
            <div className="card">
              <strong>100%</strong>
              <p>Customs and third-party pass rate (showcase).</p>
            </div>
            <div className="card">
              <strong>Certified</strong>
              <p>Export base, Bay Area supply base, ISO9001.</p>
            </div>
          </div>
          <div className="logo-wall reveal" style={{ marginTop: "24px" }}>
            <div className="logo-card">Buji Wholesale Market</div>
            <div className="logo-card">Dingdong Grocery</div>
            <div className="logo-card">Pupu Supermarket</div>
            <div className="logo-card">Meituan Grocery</div>
            <div className="logo-card">Hema Fresh</div>
            <div className="logo-card">Hong Kong Markets</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Hailing Gateway</span>
          <h2 className="section-title">Hailing Island Route</h2>
          <p className="section-subtitle">Linking eco study experiences with island culture and coastal leisure.</p>
          <div className="route-track reveal" style={{ marginTop: "24px" }}>
            <div className="route-stop">
              <strong>Pingang Farm Complex</strong>
              Study tours, resorts, and AI agriculture.
            </div>
            <div className="route-stop">
              <strong>Hailing Island</strong>
              Nanhai No.1 Museum, Zhapo Port, island scenery.
            </div>
            <div className="route-stop">
              <strong>International Exchange</strong>
              Cultural center, forums, maritime museum.
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container cta-panel reveal">
          <div>
            <strong>Plan a Visit or Partnership</strong>
            <p>Submit your needs to receive tailored routes and proposals.</p>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" to="/en/contact">
              Book a Visit
            </Link>
            <Link className="btn ghost" to="/en/company/partners">
              Partnerships
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
