import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingMawei() {
  return (
    <Layout lang="zh" ctaLabel="合作咨询" ctaTo="/contact">
      <section className="hero hero-centered">
        <div className="container hero-content">
          <div>
            <span className="tag">国际文化交流 · 海岛创意聚场</span>
            <h1>海陵马尾岛国际文化交流中心</h1>
            <p>面向湾区与国际城市群，打造“海岛文化交流 + 艺术驻地 + 青年研学”的公共文化平台。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                申请合作
              </Link>
              <Link className="btn ghost" to="/hailing/exchange">
                返回交流总览
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="文化交流中心"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>文化交流展厅</strong>
            <p>展示海岛历史与渔业文化，承接国际展览与公共文化活动。</p>
          </div>
          <div className="card">
            <strong>艺术驻地计划</strong>
            <p>邀请艺术家、设计师驻岛创作，联动社区与青年群体。</p>
          </div>
          <div className="card">
            <strong>青年研学营地</strong>
            <p>面向学生与青年团队的文化实践与跨学科交流空间。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Space Modules</span>
          <h2 className="section-title">开放空间与活动矩阵</h2>
          <p className="section-subtitle">以“交流、展示、共创、传播”为主线，形成灵活可组合的活动空间。</p>
          <div className="matrix-grid reveal" style={{ marginTop: "24px" }}>
            <div className="matrix-card">
              <strong>国际对话厅</strong>
              <p>论坛、沙龙、圆桌交流等活动发布。</p>
            </div>
            <div className="matrix-card">
              <strong>海岛文化展廊</strong>
              <p>海洋文明与渔业传承主题展示。</p>
            </div>
            <div className="matrix-card">
              <strong>创意工作坊</strong>
              <p>艺术共创、手作与跨界实验。</p>
            </div>
            <div className="matrix-card">
              <strong>多功能影像厅</strong>
              <p>纪录片放映、主题分享与论坛直播。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Experience</span>
          <h2 className="section-title">AI支持的文化传播与研学体验</h2>
          <p className="section-subtitle">AI内容标签、导览与线上互动工具，放大交流中心的传播力与体验感。</p>
          <ul>
            <li>智能导览：多语言讲解与沉浸式故事线。</li>
            <li>内容共创：线上策展与互动展览模板。</li>
            <li>研学记录：学习档案与成果输出。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
