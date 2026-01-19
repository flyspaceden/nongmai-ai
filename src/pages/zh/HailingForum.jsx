import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingForum() {
  return (
    <Layout lang="zh" ctaLabel="论坛合作" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">AI + 海洋经济 · 国际交流</span>
            <h1>海陵岛AI+国际海上经济论坛</h1>
            <p>聚焦海上经济、智慧渔业与绿色科技，构建政产学研协作与国际交流的平台。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                申请参会
              </Link>
              <Link className="btn ghost" to="/hailing/exchange">
                返回交流总览
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80"
              alt="国际海上经济论坛"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Forum Agenda</span>
          <h2 className="section-title">议题矩阵与论坛版块</h2>
          <p className="section-subtitle">以“海上经济、科技创新、产业协同、可持续发展”为四大主轴展开。</p>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>海洋经济新动能</strong>
              <p>蓝色经济、港口产业链、海岛文旅融合。</p>
            </div>
            <div className="step-card">
              <strong>AI驱动智慧渔业</strong>
              <p>数字孪生、水质监测、全链条追溯。</p>
            </div>
            <div className="step-card">
              <strong>国际合作与投资</strong>
              <p>跨境交流、产业基金、招商对接。</p>
            </div>
            <div className="step-card">
              <strong>可持续与生态治理</strong>
              <p>海洋生态修复、低碳技术与绿色供应链。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>论坛结构</strong>
            <p>主旨演讲 + 圆桌对话 + 产业路演 + 项目签约（展示版）。</p>
          </div>
          <div className="card">
            <strong>参会对象</strong>
            <p>政府机构、产业龙头、科研院校、国际合作伙伴与投融资机构。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Data Layer</span>
          <h2 className="section-title">论坛数字化与知识资产沉淀</h2>
          <p className="section-subtitle">搭建论坛数字孪生与内容沉淀平台，形成可持续知识资产。</p>
          <ul>
            <li>论坛直播与多语字幕实时生成。</li>
            <li>议题知识库与项目对接池。</li>
            <li>AI生成报告与会后跟进。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
