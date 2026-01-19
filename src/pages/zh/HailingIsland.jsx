import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingIsland() {
  return (
    <Layout lang="zh" ctaLabel="规划海岛行程" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">海岛风光 · 海洋文化 · 渔港体验</span>
            <h1>海陵岛目的地</h1>
            <p>南海1号博物馆、闸坡国际渔港与海岛风光体验，串联历史文化、渔业文明与海岸休闲。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预约海岛线路
              </Link>
              <Link className="btn ghost" to="/hailing">
                返回联动总览
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80"
              alt="海陵岛海岸风光"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Island Highlights</span>
          <h2 className="section-title">海陵岛目的地亮点</h2>
          <p className="section-subtitle">海洋文化、渔港生活与海岸风光融合成一条海岛慢旅线路。</p>
          <div className="stay-gallery reveal" style={{ marginTop: "24px" }}>
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
              alt="海岛风光"
            />
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="海岸步道"
            />
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              alt="渔港日落"
            />
          </div>
          <div className="nm-grid nm-grid-2 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>南海1号博物馆</strong>
              <p>海洋文化与考古主题的重要窗口，适合研学与亲子科普。</p>
            </div>
            <div className="card">
              <strong>闸坡国际渔港 + 渔场</strong>
              <p>了解海上作业与渔港生活，连接海洋经济与地方渔业历史。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>海岸风光</strong>
            <p>日落观景、滨海步道与沙滩体验，适配摄影与轻度假。</p>
          </div>
          <div className="card">
            <strong>海鲜美食</strong>
            <p>从渔港到餐桌的海鲜体验，适合家庭与朋友聚餐。</p>
          </div>
          <div className="card">
            <strong>亲海活动</strong>
            <p>海上体验项目与海岸互动，让海岛体验更丰富。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Island Guide</span>
          <h2 className="section-title">AI海岛指南</h2>
          <p className="section-subtitle">通过潮汐、天气与客流预测，给出最佳到访时段、拍照点与行程节奏。</p>
          <ul>
            <li>海岛拍照点推荐与最佳光线提示。</li>
            <li>潮汐与天气提醒，保障游玩安全。</li>
            <li>海岸线与文化路线的最佳组合。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
