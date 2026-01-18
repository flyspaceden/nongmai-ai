import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyYongxing() {
  return (
    <Layout lang="zh" ctaLabel="采购合作" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">大湾区“菜篮子”核心供应商</span>
            <h1>广东省阳江市永兴水产养殖有限公司</h1>
            <p>成立于2005年，集水产品养殖与进出口贸易于一体，拥有4200亩精养池塘、1300亩滩涂和3万m³工厂化养殖水体。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                采购合作
              </Link>
              <Link className="btn ghost" to="/company/partners">
                渠道联名
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80"
              alt="水产养殖基地"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container nm-grid nm-grid-3 reveal">
          <div className="card">
            <strong>企业规模</strong>
            <p>年产水产品约5000吨，产值约2.2亿元，基地紧邻珠三角，交通便利。</p>
          </div>
          <div className="card">
            <strong>核心产品</strong>
            <p>14个品项入选深圳“圳品”认证，鱼类与贝类品项覆盖多元市场需求。</p>
          </div>
          <div className="card">
            <strong>养殖技术</strong>
            <p>采用咸淡水养殖技术，提升鱼肉胶原蛋白含量，口感紧致鲜美，无泥腥味。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>供应与渠道</strong>
            <p>供深40余年、供港38余年，日供应量万斤以上；覆盖农批、平台与大型商超。</p>
          </div>
          <div className="card">
            <strong>资质与监管</strong>
            <p>出口示范基地、“菜篮子”生产基地、ISO9001认证，海关与香港食环署监管。</p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container card reveal">
          <strong>质量安全与追溯</strong>
          <p>建立检测室与多重检测机制，出塘前快检、卸货前快检及定期检测，合格率100%；全程追溯体系每日上传承诺达标合格证。</p>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">AI + Aquaculture</span>
          <h2 className="section-title">智慧渔业与全链条追溯升级</h2>
          <p className="section-subtitle">与农脉AI合作，建设HACCP鲜切加工与数字化追溯系统，提升国际市场竞争力。</p>
          <ul>
            <li>数字化建设：大数据、物联网与AI监测。</li>
            <li>全链条追溯：批次、检测、流向透明化。</li>
            <li>品牌愿景：可信赖的全链条供应商。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
