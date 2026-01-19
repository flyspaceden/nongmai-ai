import Layout from "../../components/Layout.jsx";

export default function Contact() {
  return (
    <Layout lang="zh" ctaLabel="提交预约" ctaTo="/contact">
      <section className="hero hero-centered">
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
        </div>
      </section>

      <section className="section" id="form">
        <div className="container">
          <div className="contact-cards reveal">
            <div className="card">
              <strong>电话</strong>
              <p>13923710623</p>
            </div>
            <div className="card">
              <strong>邮箱</strong>
              <p>zengweifeng3@163.com</p>
            </div>
            <div className="card">
              <strong>地址</strong>
              <p>广东省阳江市高新区平岗农场10队</p>
            </div>
          </div>
          <div className="nm-grid nm-grid-2 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>预约流程</strong>
              <div className="steps-grid" style={{ marginTop: "16px" }}>
                <div className="step-card">
                  <strong>提交需求</strong>
                  <p>选择参观类型与人数规模。</p>
                </div>
                <div className="step-card">
                  <strong>方案确认</strong>
                  <p>确认行程、餐饮与住宿安排。</p>
                </div>
                <div className="step-card">
                  <strong>到访体验</strong>
                  <p>现场接待与AI导览服务。</p>
                </div>
              </div>
            </div>
            <form className="card grid gap-4" action="#" method="post">
              <strong>预约表单</strong>
              <input className="form-input" type="text" name="name" placeholder="姓名 Name" required />
              <input className="form-input" type="tel" name="phone" placeholder="手机 Phone" required />
              <input className="form-input" type="email" name="email" placeholder="邮箱 Email" />
              <select className="form-input" name="type" required>
                <option value="">请选择访问类型</option>
                <option>参观</option>
                <option>研学合作</option>
                <option>团建会务</option>
                <option>住宿餐饮</option>
                <option>采购合作</option>
              </select>
              <input className="form-input" type="date" name="date" />
              <input className="form-input" type="number" name="group" placeholder="人数 Group size" min="1" />
              <textarea className="form-textarea" name="message" placeholder="需求描述 Message" required />
              <input className="form-input" type="text" name="wechat" placeholder="微信号 WeChat" />
              <button className="btn primary" type="submit">
                提交预约
              </button>
            </form>
          </div>
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
