import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function Events() {
  return (
    <Layout lang="zh" ctaLabel="活动报名" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">四季主题 · 持续热度</span>
            <h1>节庆赛事活动区</h1>
            <p>四季主题活动让园区持续有话题；同时提供企业团建、家庭聚会与研学旅行定制服务。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                活动报名
              </Link>
              <Link className="btn ghost" to="/masterplan">
                返回园区规划
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="节庆活动"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>春季 · 花海渔乐节</strong>
            <p>赏花 + 捕鱼大赛，结合花田打卡与亲子互动。</p>
          </div>
          <div className="card">
            <strong>夏季 · 星空露营季</strong>
            <p>露营 + 稻田音乐会 + 星空电影，打造夜间社交体验。</p>
          </div>
          <div className="card">
            <strong>秋季 · 丰收采摘节</strong>
            <p>采收 + 农产品市集，形成可购与体验的闭环。</p>
          </div>
          <div className="card">
            <strong>冬季 · 暖冬农趣节</strong>
            <p>围炉煮茶 + 民俗体验，形成慢生活氛围。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card reveal">
          <strong>定制化活动服务</strong>
          <p>承接企业团建（拓展游戏 + 渔耕体验）、家庭聚会（生日派对 + 专属农事活动）、研学旅行（课程 + 食宿套餐），提供一站式策划执行。</p>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Event Engine</span>
          <h2 className="section-title">AI活动热度与排期管理</h2>
          <p className="section-subtitle">通过AI分析人群画像与活动反馈，优化活动排期、活动强度与服务配置。</p>
          <ul>
            <li>活动日历：自动避开高峰冲突与天气风险。</li>
            <li>报名看板：实时统计人群结构与体验偏好。</li>
            <li>内容迭代：根据反馈优化下一季主题设计。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
