import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function Home() {
  return (
    <Layout lang="zh">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">5000亩生态鱼塘 · AI科技研学 · 农文旅示范基地</span>
            <h1>阳江永兴农脉 AI 国际渔田秘境</h1>
            <p>
              以水产养殖为基、科技体验为魂、文旅休闲为翼，构建“可看、可玩、可学、可住、可购”的全链条体验，成为大湾区短途度假的AI农业目的地。
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预约参观
              </Link>
              <Link className="btn ghost" to="/masterplan">
                园区规划
              </Link>
              <Link className="btn ghost" to="/company/partners">
                合作与招商
              </Link>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong>5000亩</strong>
                <span>生态鱼塘核心载体</span>
              </div>
              <div className="metric">
                <strong>四位一体</strong>
                <span>农业 + 科技 + 文旅 + 研学</span>
              </div>
              <div className="metric">
                <strong>全龄覆盖</strong>
                <span>亲子 · 年轻群体 · 中老年</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="生态鱼塘景观"
            />
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-4 reveal">
          <div className="card">
            <strong>农业</strong>
            <p>鱼-菜-花-药立体循环体系，四季有收益，兼顾生产与体验。</p>
          </div>
          <div className="card">
            <strong>科技</strong>
            <p>智慧水产实验室、农机互动博物馆，打造差异化科普IP。</p>
          </div>
          <div className="card">
            <strong>文旅</strong>
            <p>民宿集群、水上餐厅、露营与花田打卡，延长停留时间。</p>
          </div>
          <div className="card">
            <strong>研学</strong>
            <p>系统化课程矩阵，形成官方实践基地与长期合作渠道。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Core Zones</span>
          <h2 className="section-title">五大功能分区 · 从观赏到参与</h2>
          <p className="section-subtitle">
            每一处空间都强调动手与沉浸式体验，让游客从“旁观者”变为“参与者”。
          </p>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "32px" }}>
            <Link className="card" to="/masterplan/ecofarming">
              <strong>生态农业体验区</strong>
              <p>塘垅立体种养园、亲子渔耕实践田、可采摘可认养。</p>
            </Link>
            <Link className="card" to="/masterplan/ai-study">
              <strong>科技研学核心区</strong>
              <p>智慧实验室、农机文化博物馆、自然教育课堂。</p>
            </Link>
            <Link className="card" to="/masterplan/family-fun">
              <strong>亲子游乐互动区</strong>
              <p>分龄摸鱼垂钓、无动力乐园、亲子手工工坊。</p>
            </Link>
            <Link className="card" to="/masterplan/stay-dine">
              <strong>休闲度假配套区</strong>
              <p>民宿集群、生态餐饮体系、露营与星空活动。</p>
            </Link>
            <Link className="card" to="/masterplan/events">
              <strong>节庆赛事活动区</strong>
              <p>四季主题活动 + 团建研学定制服务。</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI Lens</span>
          <h2 className="section-title">AI让生态更可控，让体验更可学</h2>
          <p className="section-subtitle">
            从水质监测到游客体验，从养殖到研学，AI为每一环提供可视化与可追溯的支撑。
          </p>
          <div className="nm-grid nm-grid-2">
            <ul>
              <li>智慧渔业看板：溶氧、温度、盐度与投喂策略。</li>
              <li>AI研学助手：课程匹配、学习记录、结营证书生成。</li>
              <li>全链条追溯系统：批次、检测、流向一键可查。</li>
            </ul>
            <div className="card">
              <strong>AI Data Mock</strong>
              <p>实时水质趋势、鱼苗健康状态、能耗与产量预测图表（展示版）。</p>
              <div className="metrics" style={{ marginTop: "12px" }}>
                <div className="metric">
                  <strong>98%</strong>
                  <span>水质指标稳定率</span>
                </div>
                <div className="metric">
                  <strong>24h</strong>
                  <span>异常预警响应</span>
                </div>
                <div className="metric">
                  <strong>全链条</strong>
                  <span>追溯覆盖</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Hailing Gateway</span>
          <h2 className="section-title">300公里城市群短途度假入口</h2>
          <p className="section-subtitle">
            联动平岗农场综合体与海陵岛，打造“生态 + 海岛 + 科技研学”一站式体验。
          </p>
          <div className="nm-grid nm-grid-2 reveal" style={{ marginTop: "32px" }}>
            <div className="card">
              <strong>平岗农场综合体</strong>
              <p>民宿、餐饮、露营、钓鱼、小海洋科普馆、研学与身心成长支持基地。</p>
              <Link className="btn ghost" to="/hailing/pingang" style={{ marginTop: "12px" }}>
                查看详情
              </Link>
            </div>
            <div className="card">
              <strong>海陵岛目的地</strong>
              <p>南海1号博物馆、闸坡国际渔港与多元海岛体验，形成两日游动线。</p>
              <Link className="btn ghost" to="/hailing/island" style={{ marginTop: "12px" }}>
                查看详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>差异化竞争力</strong>
            <p>全国罕见“5000亩生态鱼塘 + 水产科技”组合，形成独特科普IP。</p>
          </div>
          <div className="card">
            <strong>强互动体验</strong>
            <p>捕鱼、种植、手工、研学，全程强调动手参与与沉浸感。</p>
          </div>
          <div className="card">
            <strong>可持续运营</strong>
            <p>养殖-体验-销售闭环，降低对单一收入依赖。</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
