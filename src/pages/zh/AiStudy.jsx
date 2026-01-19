import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg =
  "https://images.unsplash.com/photo-1581091012184-5c1d1d41c37b?auto=format&fit=crop&w=2000&q=80";

export default function AiStudy() {
  return (
    <Layout lang="zh" ctaLabel="研学合作" ctaTo="/contact">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">差异化科普IP · 可视化 · 可操作</span>
            <h1>科技研学核心区</h1>
            <p>升级为“科普 + 互动 + AI”的研学场景，让学生亲手操作检测设备、观察孵化过程，理解生态循环与水产科技。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                研学合作
              </Link>
              <Link className="btn ghost" to="/masterplan">
                返回园区规划
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>智慧水产实验室工作站</strong>
            <p>水质监测、鱼病诊断、鱼苗培育可视化展区；推出“小小水产研究员”体验课，支持动手检测与孵化观察。</p>
          </div>
          <div className="card">
            <strong>农机文化博物馆</strong>
            <p>复古打谷机、手摇水泵、现代智能捕鱼设备等互动体验；设置“渔业机械发展史”主题展，结合阳江本地水产历史。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Course Matrix</span>
          <h2 className="section-title">研学课程矩阵</h2>
          <p className="section-subtitle">按年级与主题设置课程路径，形成系统化学习与实践记录。</p>
          <div className="matrix-grid reveal" style={{ marginTop: "24px" }}>
            <div className="matrix-card">
              <strong>低年级</strong>
              <p>鱼菜共生科普、昆虫观察、生态小实验。</p>
            </div>
            <div className="matrix-card">
              <strong>中年级</strong>
              <p>水质检测、鱼苗孵化、生态循环原理。</p>
            </div>
            <div className="matrix-card">
              <strong>高年级</strong>
              <p>水产养殖技术、农机操作、AI数据分析。</p>
            </div>
            <div className="matrix-card">
              <strong>研学输出</strong>
              <p>学习档案、结营证书与展示成果。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card reveal">
          <strong>自然教育课堂</strong>
          <p>开发系统化课程：低年级“鱼菜共生科普”“昆虫观察”，高年级“生态循环原理”“水产养殖技术”，与中小学合作成为官方实践基地。</p>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Study Stack</span>
          <h2 className="section-title">AI研学系统与数据可视化</h2>
          <p className="section-subtitle">以AI为底座，构建“课程设计—学习记录—实践评估”闭环，提升研学的标准化与可复制性。</p>
          <ul>
            <li>AI课程推荐：按年级与主题智能匹配学习路径。</li>
            <li>实验数据看板：水质指标、孵化状态、养殖案例实时展示。</li>
            <li>结营证书生成：自动归档学习成果与实践记录。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
