import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingMaritime() {
  return (
    <Layout lang="zh" ctaLabel="预约参观" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">海洋文明 · 航海史教育</span>
            <h1>海陵岛航海博物馆</h1>
            <p>以海洋文明、渔业发展与航海科技为核心，打造“文化 + 科普 + 研学”体验场馆。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预约参观
              </Link>
              <Link className="btn ghost" to="/hailing/exchange">
                返回交流总览
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              alt="航海博物馆"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>海洋文明展</strong>
            <p>展示海陵岛与南海航运、渔业文化脉络。</p>
          </div>
          <div className="card">
            <strong>航海科技展</strong>
            <p>导航设备、船只模型与海上经济发展案例。</p>
          </div>
          <div className="card">
            <strong>研学与互动</strong>
            <p>航海实验、海洋生物科普与亲子互动课程。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Maritime Timeline</span>
          <h2 className="section-title">航海发展时间轴（展示版）</h2>
          <div className="timeline reveal" style={{ marginTop: "24px" }}>
            <div className="timeline-item">
              <strong>古代海上丝路</strong>
              <p>南海航线与海上贸易的历史记忆。</p>
            </div>
            <div className="timeline-item">
              <strong>现代渔业发展</strong>
              <p>闸坡渔港与现代水产养殖技术演进。</p>
            </div>
            <div className="timeline-item">
              <strong>智能航海时代</strong>
              <p>智能导航、AI海洋经济与绿色航运。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Maritime Lab</span>
          <h2 className="section-title">AI赋能航海科普</h2>
          <p className="section-subtitle">通过数字化展陈与智能导览，把航海历史转化为可互动的研学体验。</p>
          <ul>
            <li>智能导览：AR讲解与互动问答。</li>
            <li>航线模拟：航海路径与气象模拟展示。</li>
            <li>研学任务：探索式学习与成果输出。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
