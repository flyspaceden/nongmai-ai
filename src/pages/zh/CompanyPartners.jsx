import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyPartners() {
  return (
    <Layout lang="zh" ctaLabel="提交合作需求" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">共建 · 共创 · 共赢</span>
            <h1>合作与招商</h1>
            <p>面向学校、企业与渠道伙伴，提供研学、团建、采购与品牌联名的多元合作方式。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                提交合作需求
              </Link>
              <Link className="btn ghost" to="/company/nongmai-ai">
                了解Nongmai AI
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="合作与交流"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>学校研学合作</strong>
            <p>课程定制、师资与场地支持、结营证书与实践基地共建。</p>
          </div>
          <div className="card">
            <strong>企业团建会务</strong>
            <p>拓展游戏 + 渔耕体验 + 餐饮住宿，一站式执行。</p>
          </div>
          <div className="card">
            <strong>渠道采购合作</strong>
            <p>水产品与农产品供应，合规追溯与品质保障。</p>
          </div>
          <div className="card">
            <strong>品牌联名与媒体拍摄</strong>
            <p>活动赞助、联名产品、短视频拍摄与直播合作。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Partnership Hub</span>
          <h2 className="section-title">AI自动匹配合作方案</h2>
          <p className="section-subtitle">根据合作方类型、规模与目标，自动生成方案模板与预算建议。</p>
          <ul>
            <li>需求分发：自动对接相应团队与负责人。</li>
            <li>方案模板：可视化项目计划与物料清单。</li>
            <li>落地追踪：执行过程与结果反馈闭环。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
