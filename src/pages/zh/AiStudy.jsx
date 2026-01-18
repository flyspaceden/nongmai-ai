import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function AiStudy() {
  return (
    <Layout lang="zh" ctaLabel="研学合作" ctaTo="/contact">
      <section className="hero">
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
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1581091012184-5c1d1d41c37b?auto=format&fit=crop&w=1600&q=80"
              alt="智慧实验室"
            />
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
