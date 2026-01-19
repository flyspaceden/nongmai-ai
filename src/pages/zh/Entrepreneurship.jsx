import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80";

export default function Entrepreneurship() {
  return (
    <Layout lang="zh" ctaLabel="申请入驻" ctaTo="/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">场景开放 · 产学研协同 · 创业孵化</span>
            <h1>大学生创业中心</h1>
            <p>面向高校与青年团队，提供场景、数据、导师与产业链资源，让创意落地为可运营的农业科技项目。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                申请入驻
              </Link>
              <Link className="btn ghost" to="/company/partners">
                合作共建
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Why Here</span>
          <h2 className="section-title">为什么在这里创业</h2>
          <div className="nm-grid nm-grid-4 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>真实场景</strong>
              <p>5000亩鱼塘与稳定客流，具备可验证场景。</p>
            </div>
            <div className="card">
              <strong>数据资产</strong>
              <p>水质、投喂、客流与研学数据（展示版）。</p>
            </div>
            <div className="card">
              <strong>产业链资源</strong>
              <p>永兴水产供应链与渠道合作网络。</p>
            </div>
            <div className="card">
              <strong>试点迭代</strong>
              <p>可快速试错与迭代，形成可复制样板。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Capability Modules</span>
          <h2 className="section-title">中心能力模块</h2>
          <div className="matrix-grid reveal" style={{ marginTop: "24px" }}>
            <div className="matrix-card">
              <strong>孵化空间</strong>
              <p>共享工位、会议室与路演空间。</p>
            </div>
            <div className="matrix-card">
              <strong>实训基地</strong>
              <p>智慧渔业、农事操作与研学运营实训。</p>
            </div>
            <div className="matrix-card">
              <strong>导师体系</strong>
              <p>企业家 + 科研院校 + 运营专家。</p>
            </div>
            <div className="matrix-card">
              <strong>创业工具</strong>
              <p>品牌、合规、供应链与渠道对接。</p>
            </div>
            <div className="matrix-card">
              <strong>展示传播</strong>
              <p>Demo Day、媒体拍摄与活动联动。</p>
            </div>
            <div className="matrix-card">
              <strong>资金对接</strong>
              <p>投融资与产业基金对接（展示版）。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Startup Directions</span>
          <h2 className="section-title">项目方向</h2>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>AI水质预测与预警</strong>
              <p>面向智慧渔业的预警系统。</p>
            </div>
            <div className="card">
              <strong>智能投喂与节能策略</strong>
              <p>降低能耗与提升产量。</p>
            </div>
            <div className="card">
              <strong>全链条追溯系统</strong>
              <p>合规与品质背书工具。</p>
            </div>
            <div className="card">
              <strong>研学课程产品化</strong>
              <p>内容系统与SaaS工具。</p>
            </div>
            <div className="card">
              <strong>文旅运营增长</strong>
              <p>预约、会员、复购与活动运营。</p>
            </div>
            <div className="card">
              <strong>品牌与电商供应链</strong>
              <p>农产品品牌化与渠道拓展。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Application Flow</span>
          <h2 className="section-title">入驻流程</h2>
          <div className="steps-grid reveal" style={{ marginTop: "24px" }}>
            <div className="step-card">
              <strong>提交申请</strong>
              <p>项目方向与团队信息。</p>
            </div>
            <div className="step-card">
              <strong>初审评估</strong>
              <p>场景适配与资源匹配。</p>
            </div>
            <div className="step-card">
              <strong>方案共创</strong>
              <p>明确目标与试点计划。</p>
            </div>
            <div className="step-card">
              <strong>试运行</strong>
              <p>小规模落地与优化。</p>
            </div>
            <div className="step-card">
              <strong>入驻孵化</strong>
              <p>长期协作与成果输出。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Open Lab</span>
          <h2 className="section-title">AI工具与开放能力</h2>
          <p className="section-subtitle">开放数据看板与沙盒环境，支持团队快速验证产品方向（展示版）。</p>
          <ul>
            <li>数据看板：水质、投喂与游客行为指标。</li>
            <li>沙盒环境：模拟数据与测试接口。</li>
            <li>安全合规：权限控制与数据脱敏。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
