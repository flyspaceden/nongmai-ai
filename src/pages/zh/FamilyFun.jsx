import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80";

export default function FamilyFun() {
  return (
    <Layout lang="zh" ctaLabel="预约亲子体验" ctaTo="/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">分龄体验 · 自然互动 · 亲子共创</span>
            <h1>亲子游乐互动区</h1>
            <p>围绕水产与农场元素设计的亲子互动场景，让孩子在“玩中学”，让家庭在“动手中连接”。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预约亲子体验
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
          <span className="eyebrow">Age-based Fun</span>
          <h2 className="section-title">分龄体验矩阵</h2>
          <p className="section-subtitle">根据年龄段设计不同的互动难度，让孩子玩得开心又安全。</p>
          <div className="age-grid reveal" style={{ marginTop: "24px" }}>
            <div className="age-card">
              <strong>3-6岁</strong>
              <p>摸鱼池、捞小鱼、轻度农事体验。</p>
            </div>
            <div className="age-card">
              <strong>7-12岁</strong>
              <p>趣味垂钓赛、浑水摸鱼挑战、自然探索。</p>
            </div>
            <div className="age-card">
              <strong>亲子共创</strong>
              <p>家庭协作项目、亲子任务卡与合照打卡。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>渔趣亲子乐园</strong>
            <p>配套鱼食售卖、渔具租赁、渔获加工服务（现烤小鱼干、真空包装）。</p>
          </div>
          <div className="card">
            <strong>自然无动力乐园</strong>
            <p>稻草迷宫、轮胎秋千、沙池寻宝、植物攀爬架，兼顾安全与自然教育。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card reveal">
          <strong>亲子手工工坊</strong>
          <p>植物拓印、中草药香囊、鱼形陶艺、农产品烘焙（用自种蔬菜做披萨、烤红薯），成品可带走或现场义卖。</p>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI for Family</span>
          <h2 className="section-title">AI辅助安全与互动</h2>
          <p className="section-subtitle">通过AI人流提示与安全提示牌，让亲子互动更安心；AR科普卡片让孩子在玩中学。</p>
          <ul>
            <li>分龄路线提示：系统推荐适龄活动与时段。</li>
            <li>安全预警：水域与农具使用提示可视化。</li>
            <li>AR科普卡片：扫码识别鱼类与植物知识。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
