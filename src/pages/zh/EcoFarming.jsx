import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

const heroBg =
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=2000&q=80";

export default function EcoFarming() {
  return (
    <Layout lang="zh">
      <section className="hero hero-splash">
        <div className="hero-splash-bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="hero-splash-overlay"></div>
        <div className="container hero-content">
          <div>
            <span className="tag">产业根基 · 四季收益 · 可采摘可认养</span>
            <h1>生态农业体验区</h1>
            <p>以“鱼-菜-花-药”立体循环为核心，打造可持续生产与参与式体验并存的生态农业样板。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                预约采摘体验
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
          <div>
            <span className="eyebrow">Fish · Veg · Flower · Herb</span>
            <h2 className="section-title">塘垅立体循环系统</h2>
            <p className="section-subtitle">鱼塘周边垅地划分为时令菜园、经济花田与中草药园，实现“一亩三分地，四季有收益”。</p>
            <div className="matrix-grid" style={{ marginTop: "24px" }}>
              <div className="matrix-card">
                <strong>时令菜园</strong>
                <p>供采摘与认养，家庭共享地块与种植指导。</p>
              </div>
              <div className="matrix-card">
                <strong>经济花田</strong>
                <p>格桑花、向日葵、薰衣草等观赏与花蜜采收。</p>
              </div>
              <div className="matrix-card">
                <strong>中草药园</strong>
                <p>石斛、艾草、金银花等科普种植。</p>
              </div>
            </div>
          </div>
          <div className="cycle-diagram">
            <div className="cycle-ring"></div>
            <div className="cycle-node node-a">鱼塘</div>
            <div className="cycle-node node-b">菜园</div>
            <div className="cycle-node node-c">花田</div>
            <div className="cycle-node node-d">药园</div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>渔耕实践田</strong>
            <p>开辟家庭共享地块，提供“亲子种植套餐”，配套儿童安全农具与农技指导，支持播种—养护—采收全流程体验。</p>
          </div>
          <div className="card">
            <strong>可购与加工</strong>
            <p>采收作物可现场加工或带走，提供真空包装、土特产组合与节令礼盒。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <span className="eyebrow">Seasonal Rhythm</span>
          <h2 className="section-title">四季体验节奏</h2>
          <div className="event-calendar reveal" style={{ marginTop: "24px" }}>
            <div className="event-season">
              <strong>春季播种</strong>
              <p>认养菜园、花田初放与亲子播种。</p>
            </div>
            <div className="event-season">
              <strong>夏季生长</strong>
              <p>田间养护、昆虫观察与夜间赏萤。</p>
            </div>
            <div className="event-season">
              <strong>秋季采收</strong>
              <p>丰收采摘、农产品市集与加工体验。</p>
            </div>
            <div className="event-season">
              <strong>冬季养护</strong>
              <p>土壤修复、药草课程与围炉课堂。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI for Farming</span>
          <h2 className="section-title">AI助力生态农业更高效</h2>
          <p className="section-subtitle">通过土壤、气象、水质数据联动，给出种植与养殖建议，让体验更安全、更可复制。</p>
          <ul>
            <li>种植建议：基于天气与土壤的播种/灌溉提示。</li>
            <li>循环系统：鱼塘与菜园养分流转监控。</li>
            <li>二维码溯源：每块地、每批次的可追溯标识。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
