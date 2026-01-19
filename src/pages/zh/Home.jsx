import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80";
const smartLabImage = `${import.meta.env.BASE_URL}asset/images/首页/智慧实验室.png`;

const dashboardTabs = {
  eco: {
    label: "生态监测",
    metrics: [
      { label: "溶氧", value: "6.8 mg/L" },
      { label: "水温", value: "25.4 ℃" },
      { label: "盐度", value: "8.1 ‰" },
      { label: "pH", value: "7.6" }
    ],
    chartLabel: "24h 水质趋势",
    tips: ["AI建议：09:30增氧 20分钟", "投喂策略：鱼群活跃度 +1.2%", "异常预警：风险低（展示版）"]
  },
  study: {
    label: "研学课堂",
    metrics: [
      { label: "今日课程", value: "6 节" },
      { label: "在馆班级", value: "12 班" },
      { label: "实验完成率", value: "92%" },
      { label: "证书生成", value: "156 份" }
    ],
    chartLabel: "今日课程进度",
    tips: ["AI推荐：10:00实验室开场", "课后输出：学习档案自动归档", "结营证书：批量生成中（展示版）"]
  },
  visitor: {
    label: "游客体验",
    metrics: [
      { label: "在园人数", value: "1,240" },
      { label: "亲子占比", value: "62%" },
      { label: "高峰时段", value: "15:00" },
      { label: "满意度", value: "4.7/5" }
    ],
    chartLabel: "人流热力趋势",
    tips: ["AI推荐：花田打卡 16:30", "拥挤提示：亲子乐园客流上升", "路线建议：先研学后露营（展示版）"]
  }
};

const zoneOptions = [
  {
    id: "eco",
    index: "01",
    title: "生态农业体验区",
    desc: "鱼-菜-花-药循环 · 四季采摘认养",
    summary: "塘垅立体种养园、亲子渔耕实践田、四季采摘认养。",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
    cta: "进入生态农业体验区",
    to: "/masterplan/ecofarming"
  },
  {
    id: "ai",
    index: "02",
    title: "科技研学核心区",
    desc: "实验室+农机博物馆 · 课程矩阵",
    summary: "智慧实验室、农机文化博物馆、系统化研学课程。",
    image: smartLabImage,
    cta: "进入科技研学核心区",
    to: "/masterplan/ai-study"
  },
  {
    id: "family",
    index: "03",
    title: "亲子游乐互动区",
    desc: "分龄游乐 · 亲子手作工坊",
    summary: "摸鱼垂钓、自然无动力乐园与亲子手工体验。",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    cta: "进入亲子游乐互动区",
    to: "/masterplan/family-fun"
  },
  {
    id: "stay",
    index: "04",
    title: "休闲度假配套区",
    desc: "主题民宿 · 生态餐饮 · 露营",
    summary: "渔乡别院、田园烧烤与星空露营体验。",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    cta: "进入休闲度假配套区",
    to: "/masterplan/stay-dine"
  },
  {
    id: "events",
    index: "05",
    title: "节庆赛事活动区",
    desc: "四季主题节庆 · 团建研学定制",
    summary: "花海渔乐节、星空露营季与定制化活动服务。",
    image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1400&q=80",
    cta: "进入节庆赛事活动区",
    to: "/masterplan/events"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("eco");
  const [activeZone, setActiveZone] = useState(zoneOptions[0].id);
  const activeData = dashboardTabs[activeTab];
  const currentZone = zoneOptions.find((zone) => zone.id === activeZone) ?? zoneOptions[0];

  return (
    <Layout lang="zh">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">海陵岛海景 · AI渔业控制台 · 国际渔田秘境</span>
            <h1>
              阳江永兴-农脉
              <span className="block">AI 国际渔田秘境</span>
            </h1>
            <p>
              以5000亩生态鱼塘为核心载体，AI驱动水产养殖、研学与文旅运营，打造“可看、可玩、可学、可住、可购”的全链条体验。
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
                <strong>40+年</strong>
                <span>供深供港稳定供应</span>
              </div>
              <div className="metric">
                <strong>全链条</strong>
                <span>追溯与质量监管</span>
              </div>
            </div>
          </div>
          <div className="dashboard float-slow">
            <div className="dashboard-header">
              <div>
                <div className="dashboard-title">AI渔业控制台</div>
                <div className="text-xs text-on-soft">实时监测 · 智能建议</div>
              </div>
              <div className="dashboard-tabs">
                {Object.entries(dashboardTabs).map(([key, tab]) => (
                  <button
                    key={key}
                    type="button"
                    className={`dashboard-tab ${activeTab === key ? "active" : ""}`}
                    onClick={() => setActiveTab(key)}
                    aria-pressed={activeTab === key}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="dashboard-grid">
              {activeData.metrics.map((metric) => (
                <div className="dashboard-card" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
            <div className="dashboard-chart">
              <span>{activeData.chartLabel}</span>
            </div>
            <div className="dashboard-list">
              {activeData.tips.map((tip) => (
                <div key={tip}>{tip}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>AI可控</strong>
            <p>把鱼塘变成“可计算的生态系统”。</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>水质预警与处置建议（展示版）</li>
              <li>投喂策略与产量预测（展示版）</li>
            </ul>
          </div>
          <div className="card">
            <strong>AI可学</strong>
            <p>把农业科技变成孩子能理解的课堂。</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>小小水产研究员：检测/孵化/观察</li>
              <li>学习记录 + 结营证书 + 展示成果</li>
            </ul>
          </div>
          <div className="card">
            <strong>AI可信</strong>
            <p>用数据做品质背书，而不是口号。</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>批次追溯：从种苗到流通一键可查</li>
              <li>多重检测机制（展示版）</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Image Gallery</span>
          <h2 className="section-title">科技度假，沉浸式场景</h2>
          <p className="section-subtitle">预留图片位，后续可替换为实景与活动照片。</p>
          <div className="gallery-grid reveal" style={{ marginTop: "24px" }}>
            <div className="gallery-item">
              <div className="gallery-media">
                <img src={heroImage} alt="海陵岛海景" />
                <span className="gallery-tag">海陵岛海景</span>
              </div>
              <div className="gallery-caption">
                <strong>海陵岛海景</strong>
                <p>海风与海岸线，作为两日轻度假的主视觉。</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
                  alt="海岸风光"
                />
                <span className="gallery-tag">海岸风光</span>
              </div>
              <div className="gallery-caption">
                <strong>海岸风光</strong>
                <p>日落步道与打卡点，适配年轻客群传播。</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                  alt="花田打卡"
                />
                <span className="gallery-tag">花田打卡</span>
              </div>
              <div className="gallery-caption">
                <strong>花田打卡</strong>
                <p>花海秋千与风车栈道，提升社交传播。</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
                  alt="亲子互动"
                />
                <span className="gallery-tag">亲子互动</span>
              </div>
              <div className="gallery-caption">
                <strong>亲子互动</strong>
                <p>分龄摸鱼垂钓与自然无动力乐园。</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src={smartLabImage}
                  alt="智慧实验室"
                />
                <span className="gallery-tag">智慧实验室</span>
              </div>
              <div className="gallery-caption">
                <strong>智慧实验室</strong>
                <p>水质检测与鱼苗孵化，研学实操核心场景。</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-media">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                  alt="星空露营"
                />
                <span className="gallery-tag">星空露营</span>
              </div>
              <div className="gallery-caption">
                <strong>星空露营</strong>
                <p>星空电影与篝火晚会，延长停留时长。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container zone-split reveal">
          <div>
            <span className="eyebrow">Five Zones</span>
            <h2 className="section-title">五大功能分区 · 一站式体验</h2>
            <p className="section-subtitle">从生态农业到研学与度假，形成清晰动线与体验层级。</p>
            <div className="zone-list" style={{ marginTop: "24px" }}>
              {zoneOptions.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  className={`zone-item ${activeZone === zone.id ? "active" : ""}`}
                  onClick={() => setActiveZone(zone.id)}
                  aria-pressed={activeZone === zone.id}
                >
                  <span className="zone-index">{zone.index}</span>
                  <div>
                    <strong>{zone.title}</strong>
                    <p>{zone.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-card">
              <img
                src={currentZone.image}
                alt={currentZone.title}
              />
            </div>
            <div className="card">
              <strong>{currentZone.title}</strong>
              <p>{currentZone.summary}</p>
              <div className="hero-actions" style={{ marginTop: "12px" }}>
                <Link className="btn primary" to={currentZone.to}>
                  {currentZone.cta}
                </Link>
                <Link className="btn ghost" to="/masterplan">
                  查看总规划
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <span className="tag">亲子一日</span>
            <strong>田园亲子轻旅行</strong>
            <p>适合家庭，6-8小时轻量线路。</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>渔耕种植 + 亲子厨房</li>
              <li>摸鱼互动 + 可带走农产品</li>
            </ul>
          </div>
          <div className="card">
            <span className="tag">研学一日</span>
            <strong>AI研学探索营</strong>
            <p>适合学校/机构，1日研学方案。</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>实验室课程 + 农机互动</li>
              <li>学习档案 + 结营证书</li>
            </ul>
          </div>
          <div className="card">
            <span className="tag">两日轻度假</span>
            <strong>海陵岛联动路线</strong>
            <p>适合家庭/年轻人，2天1夜路线。</p>
            <ul className="mt-3 grid gap-2 text-xs text-on-muted">
              <li>园区体验 + 露营/民宿</li>
              <li>海陵岛海景与文化动线</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Trusted Supply</span>
          <h2 className="section-title">供应链与品质可信背书</h2>
          <p className="section-subtitle">以稳定供应与严格监管为底座，文旅与研学为体验增值。</p>
          <div className="nm-grid nm-grid-3 reveal" style={{ marginTop: "24px" }}>
            <div className="card">
              <strong>5000吨/年</strong>
              <p>年产水产品，产值约2.2亿元。</p>
            </div>
            <div className="card">
              <strong>100%</strong>
              <p>海关与第三方抽检合格率（展示版）。</p>
            </div>
            <div className="card">
              <strong>多重认证</strong>
              <p>出口示范基地、菜篮子基地、ISO9001。</p>
            </div>
          </div>
          <div className="logo-wall reveal" style={{ marginTop: "24px" }}>
            <div className="logo-card">深圳布吉农批</div>
            <div className="logo-card">叮咚买菜</div>
            <div className="logo-card">朴朴超市</div>
            <div className="logo-card">美团买菜</div>
            <div className="logo-card">盒马鲜生</div>
            <div className="logo-card">香港市场</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Hailing Gateway</span>
          <h2 className="section-title">海陵岛联动动线</h2>
          <p className="section-subtitle">把渔田秘境的生态研学，与海陵岛的海洋文化与海景度假串成一条路线。</p>
          <div className="route-track reveal" style={{ marginTop: "24px" }}>
            <div className="route-stop">
              <strong>平岗农场综合体</strong>
              研学、度假与AI农业体验。
            </div>
            <div className="route-stop">
              <strong>海陵岛目的地</strong>
              南海1号博物馆、闸坡渔港、海岛风光。
            </div>
            <div className="route-stop">
              <strong>国际交流平台</strong>
              文化交流中心、国际论坛与航海博物馆。
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container cta-panel reveal">
          <div>
            <strong>预约参观与研学合作</strong>
            <p>提交需求，获取行程建议与研学课程方案。</p>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" to="/contact">
              预约参观
            </Link>
            <Link className="btn ghost" to="/company/partners">
              合作与招商
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
