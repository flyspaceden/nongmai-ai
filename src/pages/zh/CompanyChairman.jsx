import { Link } from "react-router-dom";
import Layout from "../../components/Layout.jsx";

export default function CompanyChairman() {
  return (
    <Layout lang="zh" ctaLabel="联系董事长办公室" ctaTo="/contact">
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="tag">愚公移山式的长期主义</span>
            <h1>黄创智董事长</h1>
            <p>改革开放以来在深圳水产贸易起家，90年代投入上亿元在阳江平岗农场打造万亩鱼塘基地，带领企业走向国际化水产供应链。</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">
                联系董事长办公室
              </Link>
              <Link className="btn ghost" to="/company/yongxing">
                了解永兴水产
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80"
              alt="企业家形象"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Timeline</span>
          <h2 className="section-title">从深圳到阳江：水产王国的构建者</h2>
          <div className="timeline reveal" style={{ marginTop: "24px" }}>
            <div className="timeline-item">
              <strong>1970s-1980s</strong>
              <p>改革开放后在深圳各地从事水产贸易，积累供应链与市场体系经验。</p>
            </div>
            <div className="timeline-item">
              <strong>1990s</strong>
              <p>投资上亿元于阳江平岗农场，挖建万亩鱼塘，开启系统化养殖基地建设。</p>
            </div>
            <div className="timeline-item">
              <strong>2000s-至今</strong>
              <p>走访全国乃至全球，总结实践出成熟养殖经验，服务大湾区食品安全与国际出口。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container nm-grid nm-grid-2 reveal">
          <div className="card">
            <strong>行业贡献</strong>
            <p>首批渔业产销链开拓者之一，拥有40年供应链经验与40年出口贸易经验。</p>
          </div>
          <div className="card">
            <strong>行业角色</strong>
            <p>深圳水产协会副会长、阳江水产协会常务会长，长期推动行业规范化发展。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ai-panel reveal">
          <span className="eyebrow">Legacy + AI</span>
          <h2 className="section-title">经验沉淀 + 科技升级</h2>
          <p className="section-subtitle">将传统养殖经验与AI技术融合，推动水产养殖从“经验驱动”走向“数据驱动”。</p>
          <ul>
            <li>40年经验沉淀，成为AI模型训练的重要底座。</li>
            <li>以科学化管理确保食品安全与品质稳定。</li>
            <li>从“养殖王国”走向“智慧渔业示范”。</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
