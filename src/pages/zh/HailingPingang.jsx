import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingPingang() {
  return (
    <Layout lang="zh" ctaLabel="预约综合体" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">5000亩鱼塘综合体 · 研学 · 身心成长支持</span>
            <h1>平岗农场综合体</h1>
            <p>为阳江市及周边300公里城市群市民提供休闲度假、研学与AI农业科普的一站式综合体。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预约综合体
              </Link>
              <Link className="btn ghost" to="/hailing">
                返回联动总览
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1600&q=80"
              alt="农场休闲与研学"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>休闲度假</strong>
            <p>民宿、餐饮、露天烧烤场、钓鱼、小海洋科普馆，满足家庭短途度假需求。</p>
          </div>
          <div className="card">
            <strong>研学与科普</strong>
            <p>中小学生科普基地与身心成长支持项目，结合水产种苗繁殖与生产实践。</p>
          </div>
          <div className="card">
            <strong>生态与农事</strong>
            <p>鸟类湿地公园、植物观察、农事操作基地、碱水稻与种菜基地。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>AI学习与农业科普基地</strong>
            <p>设置AI学习基地、AI农业科普基地，结合智慧渔业与可视化数据展陈，帮助学生理解现代农业。</p>
          </div>
          <div className="card">
            <strong>中草药示范科研基地</strong>
            <p>中草药示范种植与科研展示，增强自然教育与健康科普。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Agriculture Hub</span>
          <h2 className="section-title">AI驱动的复合型综合体</h2>
          <p className="section-subtitle">通过AI把“养殖—种植—研学—服务”连接成可追溯、可运营的闭环。</p>
          <ul>
            <li>AI可视化：水产种苗繁殖与生长数据展示。</li>
            <li>智能课程：研学课程与实践任务自动匹配。</li>
            <li>运营闭环：游客体验与农产品销售联动。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
