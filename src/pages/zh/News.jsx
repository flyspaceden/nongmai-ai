import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function News() {
  return (
    <Layout lang="zh">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">公告 · 活动 · 合作动态</span>
            <h1>资讯中心</h1>
            <p>持续更新园区活动、研学开放日与合作动态，展示农脉AI的最新进展。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                订阅与咨询
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
              alt="资讯与动态"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-2 reveal">
          <article className="card">
            <strong>春季花海渔乐节开放报名</strong>
            <p>赏花、捕鱼、亲子活动与花田打卡同步开启，欢迎家庭与学校参与。</p>
            <span className="tag">活动公告</span>
          </article>
          <article className="card">
            <strong>AI研学课程体系发布</strong>
            <p>智慧水产实验室、农机互动体验与自然教育课程矩阵上线。</p>
            <span className="tag">研学动态</span>
          </article>
          <article className="card">
            <strong>永兴水产全链条追溯升级</strong>
            <p>与农脉AI合作，建设智慧渔业与追溯系统，提升品牌可信度。</p>
            <span className="tag">合作动态</span>
          </article>
          <article className="card">
            <strong>海陵岛联动线路发布</strong>
            <p>平岗农场综合体与海陵岛两日游路线正式发布（展示版）。</p>
            <span className="tag">线路发布</span>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI News Digest</span>
          <h2 className="section-title">AI摘要与热点推荐</h2>
          <p className="section-subtitle">AI自动抓取园区动态，生成本月重点与趋势洞察（展示版）。</p>
          <ul>
            <li>活动热度排名与报名趋势。</li>
            <li>研学主题偏好分析。</li>
            <li>游客画像与复购建议。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
