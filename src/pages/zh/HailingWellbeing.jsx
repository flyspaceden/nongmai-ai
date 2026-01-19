import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function HailingWellbeing() {
  return (
    <Layout lang="zh" ctaLabel="了解项目" ctaTo="/contact">
      <section className="hero hero-centered">
        <div className="container hero-content">
          <div>
            <span className="tag">AI + 身心支持 · 科普陪伴</span>
            <h1>AI+心理疗愈（自闭症）中心</h1>
            <p>以“支持、陪伴、训练、科普”为核心，构建亲子共学与身心成长支持平台（展示版）。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预约了解
              </Link>
              <Link className="btn ghost" to="/hailing/exchange">
                返回交流总览
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80"
              alt="AI心理支持中心"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>感统与专注训练</strong>
            <p>通过自然体验与互动课程，提升专注与感知能力。</p>
          </div>
          <div className="card">
            <strong>亲子支持课堂</strong>
            <p>面向家庭的陪伴课程与沟通训练（展示版）。</p>
          </div>
          <div className="card">
            <strong>社会融入活动</strong>
            <p>融入式小组活动，帮助建立社交与协作体验。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Support Modules</span>
          <h2 className="section-title">服务模块与空间配置</h2>
          <p className="section-subtitle">融合自然疗愈环境与AI辅助工具，为家庭提供可持续的成长支持。</p>
          <div className="matrix-grid reveal" style={{ marginTop: "24px" }}>
            <div className="matrix-card">
              <strong>评估与记录</strong>
              <p>学习与行为记录工具，形成长期成长档案。</p>
            </div>
            <div className="matrix-card">
              <strong>团体活动区</strong>
              <p>小组互动、情绪表达与协作体验。</p>
            </div>
            <div className="matrix-card">
              <strong>自然共学区</strong>
              <p>农事体验与自然探索，促进感知与沟通。</p>
            </div>
            <div className="matrix-card">
              <strong>家庭咨询区</strong>
              <p>家长支持与课程规划（展示版）。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Companion</span>
          <h2 className="section-title">AI陪伴与训练辅助</h2>
          <p className="section-subtitle">AI用于训练过程记录、课程推荐与家校沟通，不涉及医疗诊断与治疗承诺。</p>
          <ul>
            <li>行为记录：日常训练过程与成长数据留存。</li>
            <li>课程推荐：按阶段匹配个性化学习内容。</li>
            <li>家庭支持：家庭互动与成长建议。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
