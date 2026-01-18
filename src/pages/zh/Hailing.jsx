import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function Hailing() {
  return (
    <Layout lang="zh" ctaLabel="规划行程" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">300km城市群短途度假入口</span>
            <h1>海陵岛联动总览</h1>
            <p>以平岗农场综合体为生态研学核心，以海陵岛为海洋文化延展，形成两日或三日度假路线。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/hailing/pingang">
                平岗综合体详情
              </Link>
              <Link className="btn ghost" to="/hailing/island">
                海陵岛目的地
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              alt="海岛海岸线"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>平岗农场综合体</strong>
            <p>民宿、餐饮、露天烧烤场、钓鱼、小海洋科普馆，叠加研学与AI农业科普体验。</p>
          </div>
          <div className="card">
            <strong>海陵岛目的地</strong>
            <p>南海1号博物馆、闸坡国际渔港与海岛风光体验，形成文化与自然双线动线。</p>
          </div>
          <div className="card">
            <strong>国际交流与论坛</strong>
            <p>阳江国际AI水产养殖经验交流基地、国际文化交流与论坛（展示版）。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>2天1夜亲子</strong>
            <p>平岗农场体验 + 夜间露营 → 海陵岛人文与海岸。</p>
          </div>
          <div className="card">
            <strong>2天1夜研学</strong>
            <p>实验室课程 + 农机互动 → 海洋文化与渔港参观。</p>
          </div>
          <div className="card">
            <strong>3天2夜轻度假</strong>
            <p>生态农业 + 亲子互动 + 海陵岛深度游。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Trip Planner</span>
          <h2 className="section-title">AI联动行程规划</h2>
          <p className="section-subtitle">自动匹配出发城市、出行人群与季节主题，生成出行路线、活动推荐与预算提示。</p>
          <ul>
            <li>交通建议：自驾/大巴/研学专线线路模板。</li>
            <li>行程优化：热门时段与天气风险提示。</li>
            <li>内容组合：研学 + 度假 + 海岛体验智能拼装。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
