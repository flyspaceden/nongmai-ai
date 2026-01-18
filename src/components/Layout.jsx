import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const navConfig = {
  zh: {
    brand: { name: "农脉AI", sub: "Nongmai AI", to: "/" },
    langSwitch: { label: "EN", to: "/en" },
    cta: { label: "预约参观", to: "/contact" },
    items: [
      { label: "首页", to: "/" },
      {
        label: "园区规划",
        to: "/masterplan",
        children: [
          { label: "总览", to: "/masterplan" },
          { label: "生态农业体验", to: "/masterplan/ecofarming" },
          { label: "科技研学", to: "/masterplan/ai-study" },
          { label: "亲子互动", to: "/masterplan/family-fun" },
          { label: "休闲度假", to: "/masterplan/stay-dine" },
          { label: "节庆活动", to: "/masterplan/events" }
        ]
      },
      {
        label: "海陵岛联动",
        to: "/hailing",
        children: [
          { label: "总览（300km城市群）", to: "/hailing" },
          { label: "平岗农场综合体", to: "/hailing/pingang" },
          { label: "海陵岛目的地", to: "/hailing/island" },
          { label: "国际交流基地/论坛", to: "/hailing/exchange" }
        ]
      },
      {
        label: "公司与合作",
        to: "/company/nongmai-ai",
        children: [
          { label: "Nongmai AI", to: "/company/nongmai-ai" },
          { label: "永兴水产", to: "/company/yongxing" },
          { label: "黄创智董事长", to: "/company/chairman" },
          { label: "合作与招商", to: "/company/partners" }
        ]
      },
      { label: "资讯", to: "/news" },
      { label: "联系/预约", to: "/contact" }
    ],
    footer: {
      brand: "农脉AI · Nongmai AI",
      title: "阳江永兴农脉 AI 国际渔田秘境",
      phone: "电话：13923710623",
      email: "邮箱：zengweifeng13@163.com",
      entitiesTitle: "落款单位",
      entities: [
        "广东省农脉人工智能科技有限公司",
        "广东省阳江市永兴水产养殖有限公司"
      ],
      complianceTitle: "备案信息",
      compliance: ["粤ICP备XXXXXXXX号", "粤公网安备XXXXXXXX号"]
    }
  },
  en: {
    brand: { name: "Nongmai AI", sub: "农脉AI", to: "/en" },
    langSwitch: { label: "中文", to: "/" },
    cta: { label: "Book a Visit", to: "/en/contact" },
    items: [
      { label: "Home", to: "/en" },
      {
        label: "Master Plan",
        to: "/en/masterplan",
        children: [
          { label: "Overview", to: "/en/masterplan" },
          { label: "Eco Farming", to: "/en/masterplan/ecofarming" },
          { label: "AI & Study", to: "/en/masterplan/ai-study" },
          { label: "Family Fun", to: "/en/masterplan/family-fun" },
          { label: "Stay & Dine", to: "/en/masterplan/stay-dine" },
          { label: "Events", to: "/en/masterplan/events" }
        ]
      },
      {
        label: "Hailing Gateway",
        to: "/en/hailing",
        children: [
          { label: "Overview", to: "/en/hailing" },
          { label: "Pingang Complex", to: "/en/hailing/pingang" },
          { label: "Hailing Island", to: "/en/hailing/island" },
          { label: "Exchange & Forum", to: "/en/hailing/exchange" }
        ]
      },
      {
        label: "Company",
        to: "/en/company/nongmai-ai",
        children: [
          { label: "Nongmai AI", to: "/en/company/nongmai-ai" },
          { label: "Yongxing Aquaculture", to: "/en/company/yongxing" },
          { label: "Chairman Story", to: "/en/company/chairman" },
          { label: "Partnerships", to: "/en/company/partners" }
        ]
      },
      { label: "News", to: "/en/news" },
      { label: "Contact", to: "/en/contact" }
    ],
    footer: {
      brand: "Nongmai AI",
      title: "Yangjiang Yongxing Nongmai AI International Fishpond Haven",
      phone: "Tel: 13923710623",
      email: "Email: zengweifeng13@163.com",
      entitiesTitle: "Entities",
      entities: [
        "Guangdong Nongmai AI Technology Co., Ltd.",
        "Guangdong Yangjiang Yongxing Aquaculture Co., Ltd."
      ],
      complianceTitle: "Compliance",
      compliance: ["ICP: Guangdong ICP XXXXXXXX", "Public Security: Guangdong Public Security XXXXXXXX"]
    }
  }
};

const flattenLinks = (items) => {
  const links = [];
  items.forEach((item) => {
    links.push({ label: item.label, to: item.to });
    if (item.children) {
      item.children.forEach((child) => links.push(child));
    }
  });
  return links;
};

export default function Layout({ lang = "zh", children, ctaLabel, ctaTo }) {
  const config = navConfig[lang];
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const mobileLinks = useMemo(() => flattenLinks(config.items), [config.items]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    if (targets.length === 0) return undefined;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("reveal-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className="container navbar">
          <Link className="logo" to={config.brand.to}>
            <span>{config.brand.name}</span> {config.brand.sub}
          </Link>
          <nav className="nav-links">
            {config.items.map((item) => (
              <div className="nav-item" key={item.to}>
                <Link to={item.to}>
                  {item.label} {item.children ? "▾" : ""}
                </Link>
                {item.children ? (
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link key={child.to} to={child.to}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="nav-cta">
            <Link className="btn ghost" to={config.langSwitch.to}>
              {config.langSwitch.label}
            </Link>
            <Link className="btn primary" to={ctaTo ?? config.cta.to}>
              {ctaLabel ?? config.cta.label}
            </Link>
          </div>
          <button
            className="nav-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        <div className={`container mobile-menu ${open ? "open" : ""}`}>
          {mobileLinks.map((link) => (
            <Link key={`${link.to}-${link.label}`} to={link.to}>
              {link.label}
            </Link>
          ))}
          <Link to={config.langSwitch.to}>{config.langSwitch.label}</Link>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container footer-grid">
          <div>
            <strong>{config.footer.brand}</strong>
            <p>{config.footer.title}</p>
            <p>{config.footer.phone}</p>
            <p>{config.footer.email}</p>
          </div>
          <div>
            <strong>{config.footer.entitiesTitle}</strong>
            {config.footer.entities.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div>
            <strong>{config.footer.complianceTitle}</strong>
            {config.footer.compliance.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
