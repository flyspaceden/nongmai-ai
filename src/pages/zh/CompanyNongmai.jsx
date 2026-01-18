import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyNongmai() {
  return (
    <Layout lang="zh" ctaLabel="预约交流" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">AI + 农业生态运营引擎</span>
            <h1>农脉人工智能科技有限公司</h1>
            <p>用人工智能连接“养殖—种植—文旅研学”，让农业更高效、更可信、更可持续。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预约交流
              </Link>
              <Link className="btn ghost" to="/company/partners">
                合作方式
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
              alt="AI与农业科技"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-4 reveal">
          <div className="card">
            <strong>AI+感知</strong>
            <p>水质、气象、视频与物联网数据采集与告警。</p>
          </div>
          <div className="card">
            <strong>AI+决策</strong>
            <p>投喂策略、水质调控、病害风险与产量预测。</p>
          </div>
          <div className="card">
            <strong>AI+追溯</strong>
            <p>从种苗到流通的批次化追踪与合规台账。</p>
          </div>
          <div className="card">
            <strong>AI+科普研学</strong>
            <p>课程管理、互动展陈、学习记录与证书体系。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>产品矩阵</strong>
            <p>智慧渔业中台、AI研学与科普系统、全链条追溯系统、园区运营增长工具（预约/会员/复购）。</p>
          </div>
          <div className="card">
            <strong>场景落地</strong>
            <p>养殖基地、研学基地、文旅园区与渠道合作，形成“AI驱动”的可复制样板。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Ecosystem</span>
          <h2 className="section-title">让农业数据变成经营成果</h2>
          <p className="section-subtitle">从数据采集到决策执行，从研学互动到品牌溯源，形成可视化经营闭环。</p>
          <ul>
            <li>多维数据看板：生产、体验、销售一体化。</li>
            <li>智能预测：产量与供需趋势预警。</li>
            <li>品牌可信：数据驱动的合规与品质背书。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
