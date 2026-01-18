import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function Masterplan() {
  return (
    <Layout lang="zh">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">可看 · 可玩 · 可学 · 可住 · 可购</span>
            <h1>园区规划总览</h1>
            <p>
              五大功能分区围绕5000亩生态鱼塘展开，形成“养殖—体验—销售”的闭环。这里不仅能观赏，更强调动手参与与知识沉淀。
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/masterplan/ecofarming">
                进入生态农业体验
              </Link>
              <Link className="btn ghost" to="/contact">
                预约参观
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80"
              alt="园区水域与生态"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Master Plan</span>
          <h2 className="section-title">五大分区，一张AI驱动的生态体验图</h2>
          <p className="section-subtitle">从渔耕体验到科技研学，从亲子互动到度假配套，形成分层动线与全龄体验。</p>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "32px" }}>
            <div className="card">
              <strong>生态农业体验区</strong>
              <p>鱼-菜-花-药循环，采摘认养、科普标识、四季可体验。</p>
            </div>
            <div className="card">
              <strong>科技研学核心区</strong>
              <p>智慧实验室、农机文化博物馆、系统化研学课程。</p>
            </div>
            <div className="card">
              <strong>亲子游乐互动区</strong>
              <p>分龄摸鱼垂钓、自然无动力游乐、亲子手作。</p>
            </div>
            <div className="card">
              <strong>休闲度假配套区</strong>
              <p>主题民宿、生态餐饮、露营与夜间活动。</p>
            </div>
            <div className="card">
              <strong>节庆赛事活动区</strong>
              <p>四季主题节庆 + 团建研学定制服务。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>亲子一日游</strong>
            <p>上午渔耕种植 → 午间亲子厨房 → 下午摸鱼/手作体验。</p>
          </div>
          <div className="card">
            <strong>研学一日营</strong>
            <p>实验室课程 + 农机互动 + 生态循环课程 + 结营证书。</p>
          </div>
          <div className="card">
            <strong>两日轻度假</strong>
            <p>白天采摘+研学，夜晚露营星空；次日海陵岛联动。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Digital Twin</span>
          <h2 className="section-title">数字孪生导览</h2>
          <p className="section-subtitle">AI导览把园区地图变成“可计算的体验路线”，根据人群、天气、季节实时给出推荐动线。</p>
          <ul>
            <li>基于人流密度与体验偏好的动态路线推荐。</li>
            <li>打卡点与最佳观景时段提示。</li>
            <li>活动预约联动，减少排队与拥挤。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
