import Layout from "../../components/Layout.jsx";

export default function Contact() {
  return (
    <Layout lang="zh" ctaLabel="提交预约" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">预约参观 · 研学合作 · 团建定制</span>
            <h1>联系与预约</h1>
            <p>欢迎预约参观、研学合作或定制活动。我们将在1个工作日内与您联系。</p>
            <div className="hero-actions">
              <a className="btn primary" href="#form">
                提交表单
              </a>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
              alt="联系与预约"
            />
          </div>
        </div>
      </section>

      <section className="section" id="form">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>联系方式</strong>
            <p>电话：13923710623</p>
            <p>邮箱：zengweifeng13@163.com</p>
            <p>地址：广东省阳江市高新区平岗农场10队</p>
            <p>开放时间：09:00 - 18:00（展示版）</p>
          </div>
          <form className="card grid gap-4" action="#" method="post">
            <strong>预约表单</strong>
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="text" name="name" placeholder="姓名 Name" required />
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="tel" name="phone" placeholder="手机 Phone" required />
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="email" name="email" placeholder="邮箱 Email" />
            <select className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" name="type" required>
              <option value="">请选择访问类型</option>
              <option>参观</option>
              <option>研学合作</option>
              <option>团建会务</option>
              <option>住宿餐饮</option>
              <option>采购合作</option>
            </select>
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="date" name="date" />
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="number" name="group" placeholder="人数 Group size" min="1" />
            <textarea className="min-h-[120px] rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" name="message" placeholder="需求描述 Message" required />
            <input className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm" type="text" name="wechat" placeholder="微信号 WeChat" />
            <button className="btn primary" type="submit">
              提交预约
            </button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Concierge</span>
          <h2 className="section-title">AI客服与行程推荐</h2>
          <p className="section-subtitle">基于表单信息，AI自动推荐活动组合与行程模板（展示版）。</p>
          <ul>
            <li>自动匹配：亲子/研学/团建线路。</li>
            <li>行程预案：两日或三日路线模板。</li>
            <li>预算提示：交通与活动成本建议。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
