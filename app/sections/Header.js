"use client";
import React from "react";
import { Button, LangSwitcher } from "../components/index.js";

const HEADER_NAV = {
  JP: ["ブランド", "市場", "物流", "会社"],
  MN: ["Брэнд", "Зах зээл", "Тээвэр", "Компани"],
  EN: ["Brands", "Market", "Logistics", "Company"],
};

const HEADER_BAR = {
  JP: "日本ブランドのモンゴル正規販売パートナーを募集しています · 東京 → ウランバートル 毎週空輸",
  MN: "Япон брэндүүдтэй Монгол дахь албан ханган нийлүүлэлтийн хамтын ажиллагаа хийж байна · Токио → Улаанбаатар, долоо хоног бүр онгоцоор",
  EN: "Now accepting distribution partnerships for Japanese brands · Tokyo → Ulaanbaatar, weekly air freight",
};

const HEADER_CTA = { JP: "資料請求", MN: "Танилцуулга авах", EN: "Request deck" };

function SiteHeader({ lang, setLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById("page");
    const target = el || window;
    const fn = () => setScrolled((el ? el.scrollTop : window.scrollY) > 12);
    fn();
    target.addEventListener("scroll", fn, { passive: true });
    return () => target.removeEventListener("scroll", fn);
  }, []);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20 }}>
      <div style={{ background: "var(--sumi-800)", color: "var(--washi-200)", fontSize: "var(--text-caption)", textAlign: "center", padding: "8px 16px", letterSpacing: "0.02em" }}>
        {HEADER_BAR[lang]}
      </div>
      <div style={{
        background: scrolled ? "var(--glass-bg)" : "var(--washi-100)",
        backdropFilter: scrolled ? "var(--glass-blur)" : "none",
        borderBottom: "1px solid var(--border-hairline)",
        transition: "background var(--dur-normal) var(--ease-standard)",
      }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "14px var(--gutter)", display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}><img src="/assets/logo.svg" alt="Sakuramori" style={{ height: 42 }} /></a>
          <nav style={{ display: "flex", gap: "var(--space-5)", flex: "0 1 auto", flexWrap: "nowrap" }}>
            {HEADER_NAV[lang].map((n) => (
              <a key={n} href="#" style={{ fontSize: "var(--text-body-sm)", fontWeight: 500, color: "var(--text-body)", textDecoration: "none", whiteSpace: "nowrap" }}>{n}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flex: "0 0 auto", marginLeft: "auto" }}>
            <LangSwitcher value={lang} onChange={setLang} />
            <Button size="sm" iconRight="arrow-right">{HEADER_CTA[lang]}</Button>
          </div>
        </div>
      </div>
    </header>
  );
}


export { SiteHeader };
