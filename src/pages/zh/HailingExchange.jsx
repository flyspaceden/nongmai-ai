import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingExchange() {
  return (
    <Layout lang="zh" ctaLabel="合作咨询" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="badge">规划/筹备中 · 展示版</span>
            <h1>国际交流基地与论坛</h1>
            <p>打造阳江国际AI水产养殖经验交流基地，联动国际论坛与文化交流中心，推动AI水产科技的跨区域合作。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                合作咨询
              </Link>
              <Link className="btn ghost" to="/hailing">
                返回联动总览
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="国际交流论坛"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>阳江国际AI水产养殖经验交流基地</strong>
            <p>面向国内外专家与行业组织的交流平台，承载培训、参访与标准化交流。</p>
          </div>
          <div className="card">
            <strong>海陵马尾岛国际文化交流中心</strong>
            <p>链接国际文化交流与海洋文明传播，形成品牌影响力。</p>
          </div>
          <div className="card">
            <strong>海陵岛 AI+ 国际海上经济论坛</strong>
            <p>聚焦AI水产、海洋经济与可持续发展议题。</p>
          </div>
          <div className="card">
            <strong>AI+心理疗愈中心与航海博物馆</strong>
            <p>结合身心成长与海洋文化展示，形成综合文化体验。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Forum Stack</span>
          <h2 className="section-title">AI驱动的国际交流系统</h2>
          <p className="section-subtitle">通过AI会议系统与多语言内容平台，提高论坛传播效率与国际协同能力。</p>
          <ul>
            <li>会议报名与议程智能排布（展示）。</li>
            <li>多语言AI同传与摘要生成（展示）。</li>
            <li>国际合作项目的持续跟踪与成果展示（展示）。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
