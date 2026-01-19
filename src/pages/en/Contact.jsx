import Layout from "../../components/Layout.jsx";

export default function Contact() {
  return (
    <Layout lang="en" ctaLabel="Submit" ctaTo="/en/contact">
      <section className="hero hero-centered">
        <div className="container hero-content">
          <div>
            <span className="tag">Visits · Study Programs · Corporate Events</span>
            <h1>Contact & Booking</h1>
            <p>Tell us your needs and we will get back within one business day.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#form">
                Submit Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="form">
        <div className="container">
          <div className="contact-cards reveal">
            <div className="card">
              <strong>Phone</strong>
              <p>13923710623</p>
            </div>
            <div className="card">
              <strong>Email</strong>
              <p>zengweifeng3@163.com</p>
            </div>
            <div className="card">
              <strong>Address</strong>
              <p>Pingang Farm Team 10, High-tech Zone, Yangjiang, Guangdong</p>
            </div>
          </div>
          <div className="nm-grid nm-grid-2 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>Visit Flow</strong>
              <div className="steps-grid" style={{ marginTop: "16px" }}>
                <div className="step-card">
                  <strong>Submit Request</strong>
                  <p>Choose visit type and group size.</p>
                </div>
                <div className="step-card">
                  <strong>Confirm Plan</strong>
                  <p>Finalize itinerary, dining, and lodging.</p>
                </div>
                <div className="step-card">
                  <strong>On-site Experience</strong>
                  <p>Reception and AI-guided support.</p>
                </div>
              </div>
            </div>
            <form className="card grid gap-4" action="#" method="post">
              <strong>Booking Form</strong>
              <input className="form-input" type="text" name="name" placeholder="Name" required />
              <input className="form-input" type="tel" name="phone" placeholder="Phone" required />
              <input className="form-input" type="email" name="email" placeholder="Email" />
              <select className="form-input" name="type" required>
                <option value="">Select visit type</option>
                <option>Visit</option>
                <option>Study Program</option>
                <option>Corporate Event</option>
                <option>Stay & Dining</option>
                <option>Procurement</option>
              </select>
              <input className="form-input" type="date" name="date" />
              <input className="form-input" type="number" name="group" placeholder="Group size" min="1" />
              <textarea className="form-textarea" name="message" placeholder="Message" required />
              <input className="form-input" type="text" name="wechat" placeholder="WeChat (optional)" />
              <button className="btn primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Concierge</span>
          <h2 className="section-title">AI Recommendation Engine</h2>
          <p className="section-subtitle">AI suggests routes and packages based on your request (display).</p>
          <ul>
            <li>Auto-matching family, study, or corporate routes.</li>
            <li>Two-day or three-day itinerary templates.</li>
            <li>Budget hints and logistics suggestions.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
