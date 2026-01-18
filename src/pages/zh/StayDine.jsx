import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function StayDine() {
  return (
    <Layout lang="zh" ctaLabel="预订住宿" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">住 · 食 · 夜间体验</span>
            <h1>休闲度假配套区</h1>
            <p>以主题民宿、生态餐饮与户外休闲空间，拉长游客停留时间，形成“白天体验、夜晚放松”的度假节奏。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预订住宿与餐饮
              </Link>
              <Link className="btn ghost" to="/masterplan">
                返回园区规划
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              alt="海岸度假与露营"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>渔乡别院</strong>
            <p>临水而建，推窗见塘；配套独立庭院与烧烤台。</p>
          </div>
          <div className="card">
            <strong>田园木屋</strong>
            <p>掩映在花田与菜园之间，适合轻度假与情侣出行。</p>
          </div>
          <div className="card">
            <strong>亲子树屋</strong>
            <p>带滑梯与小庭院，儿童友好，适合家庭入住。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>生态餐饮体系</strong>
            <p>水上餐厅 + 田园烧烤区 + 农家厨房，食材来自农场自产。特色套餐：全鱼宴、田园烧烤自助、亲子厨房DIY。</p>
          </div>
          <div className="card">
            <strong>户外休闲空间</strong>
            <p>生态步道、观景平台、露营基地、星空电影、篝火晚会；花田网红打卡点满足社交传播。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Travel Concierge</span>
          <h2 className="section-title">AI度假管家</h2>
          <p className="section-subtitle">根据入住天数、家庭结构与活动偏好，自动生成两日或三日行程。</p>
          <ul>
            <li>餐饮推荐：口味偏好与过敏提醒。</li>
            <li>夜间活动：星空电影/篝火晚会预约提示。</li>
            <li>住宿排期：房型建议与预订提醒。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
