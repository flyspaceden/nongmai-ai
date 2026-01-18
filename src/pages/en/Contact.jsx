import Layout from "../../components/Layout.jsx";

export default function Contact() {
  return (
    <Layout lang="en" ctaLabel="Submit" ctaTo="/en/contact">
      <section className="hero">
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
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
              alt="Contact"
            />
          </div>
        </div>
      </section>

      <section className="section" id="form">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>Contact Info</strong>
            <p>Tel: 13923710623</p>
            <p>Email: zengweifeng13@163.com</p>
            <p>Address: Pingang Farm Team 10, High-tech Zone, Yangjiang, Guangdong</p>
            <p>Hours: 09:00 - 18:00 (display)</p>
          </div>
          <form className="card grid gap-4" action="#" method="post">
            <strong>Booking Form</strong>
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="text" name="name" placeholder="Name" required />
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="tel" name="phone" placeholder="Phone" required />
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="email" name="email" placeholder="Email" />
            <select className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" name="type" required>
              <option value="">Select visit type</option>
              <option>Visit</option>
              <option>Study Program</option>
              <option>Corporate Event</option>
              <option>Stay & Dining</option>
              <option>Procurement</option>
            </select>
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="date" name="date" />
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="number" name="group" placeholder="Group size" min="1" />
            <textarea className="min-h-[120px] rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" name="message" placeholder="Message" required />
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="text" name="wechat" placeholder="WeChat (optional)" />
            <button className="btn primary" type="submit">
              Submit
            </button>
          </form>
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
