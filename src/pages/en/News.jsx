import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function News() {
  return (
    <Layout lang="en">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">Announcements · Programs · Updates</span>
            <h1>News Center</h1>
            <p>Latest updates on events, study programs, and collaboration progress.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/en/contact">
                Subscribe
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
              alt="News"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <article className="card">
            <strong>Spring Flower & Fishing Festival Opens</strong>
            <p>Family programs, flower fields, and fishing competitions now open.</p>
            <span className="tag">Event</span>
          </article>
          <article className="card">
            <strong>AI Study Curriculum Released</strong>
            <p>Smart labs, machinery museum, and natural education modules.</p>
            <span className="tag">Study</span>
          </article>
          <article className="card">
            <strong>Yongxing Traceability Upgrade</strong>
            <p>Smart aquaculture and full-chain traceability system rollout.</p>
            <span className="tag">Partnership</span>
          </article>
          <article className="card">
            <strong>Hailing Gateway Routes Published</strong>
            <p>Pingang + Hailing two-day routes now available (display).</p>
            <span className="tag">Routes</span>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI News Digest</span>
          <h2 className="section-title">AI Highlights</h2>
          <p className="section-subtitle">Monthly highlights and trend insights (display).</p>
          <ul>
            <li>Event popularity and registration trends.</li>
            <li>Study theme preferences.</li>
            <li>Visitor profile insights.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
