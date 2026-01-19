import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80";

export default function AquacultureMuseum() {
  return (
    <Layout lang="zh" ctaLabel="预约参观" ctaTo="/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">海洋文明 · 渔业机械 · AI科普</span>
            <h1>水产博物馆</h1>
            <p>把渔业文明、养殖科技与互动体验结合，形成“可看、可学、可操作”的科普IP。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预约参观
              </Link>
              <Link className="btn ghost" to="/masterplan">
                返回园区规划
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Exhibition Lines</span>
          <h2 className="section-title">四条展线 · 从文明到科技</h2>
          <p className="section-subtitle">用故事线串联渔业历史、养殖科学、机械发展与智慧渔业。</p>
          <div className="nm-grid nm-grid-2 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>渔业文明与地方历史</strong>
              <p>阳江渔业文化、海陵岛渔港与海洋文明叙事。</p>
            </div>
            <div className="card">
              <strong>养殖科学与生态循环</strong>
              <p>水质、溶氧、饲料与生态循环原理展示。</p>
            </div>
            <div className="card">
              <strong>渔业机械发展史</strong>
              <p>复古打谷机、手摇水泵到智能捕鱼设备的演进。</p>
            </div>
            <div className="card">
              <strong>智慧渔业与AI可视化</strong>
              <p>数字孪生看板、策略建议与追溯系统演示。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Interactive Lab</span>
          <h2 className="section-title">互动体验区</h2>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>小小水产研究员</strong>
              <p>水质检测、显微观察、鱼苗孵化体验。</p>
            </div>
            <div className="card">
              <strong>机械体验工位</strong>
              <p>安全版操作互动，完成任务卡挑战。</p>
            </div>
            <div className="card">
              <strong>追溯扫码演示</strong>
              <p>扫码查看批次、检测与流向（展示版）。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Study Packs</span>
          <h2 className="section-title">研学课程包</h2>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>低年级课程</strong>
              <p>鱼菜共生科普 + 昆虫观察（60-90分钟）。</p>
            </div>
            <div className="step-card">
              <strong>高年级课程</strong>
              <p>生态循环原理 + 水产养殖技术（120分钟）。</p>
            </div>
            <div className="step-card">
              <strong>家庭版体验</strong>
              <p>亲子任务卡 + 互动打卡（90分钟）。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Guide</span>
          <h2 className="section-title">AI导览与数字化科普</h2>
          <p className="section-subtitle">AI辅助讲解与互动工具，提升学习效率与参观体验。</p>
          <ul>
            <li>AI导览：多语言讲解与路线推荐（展示版）。</li>
            <li>互动问答：展厅任务卡与知识点解锁。</li>
            <li>数据可视化：水质趋势与养殖策略模拟。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
