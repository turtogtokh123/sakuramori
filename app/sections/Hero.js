"use client";
import React from "react";
import { Button, Stat } from "../components/index.js";

const HERO_COPY = {
  JP: {
    eyebrow: "日本ブランドのモンゴル正規販売パートナー",
    title: "日本の品質を、モンゴルの棚へ。",
    body: "桜森は東京・大阪から商品を空輸し、通関・保管・卸・小売までモンゴル国内で一貫して担う輸入販売会社です。ブランド様は在庫を送るだけで、現地の販路が立ち上がります。",
    cta: "パートナー資料を請求", cta2: "取扱カテゴリーを見る",
    stats: [
      { v: "7–10", l: "日で配送", s: "東京 → ウランバートル" },
      { v: "毎週", l: "定期空輸", s: "在庫を滞留させません" },
      { v: "2021", l: "年設立", s: "12,400件の出荷実績" },
    ],
  },
  MN: {
    eyebrow: "ЯПОН БРЭНДИЙН МОНГОЛ ДАХЬ АЛБАН ХАНГАН НИЙЛҮҮЛЭГЧ",
    title: "Японы чанарыг Монголын лангуунд.",
    body: "Sakuramori бараагаа Токио, Осакагаас онгоцоор аваачиж, гааль, агуулах, бөөний болон жижиглэн худалдааг Монголд бүрэн хариуцдаг импортын компани. Брэнд зөвхөн бараагаа илгээхэд л хангалттай.",
    cta: "Танилцуулга авах", cta2: "Ажилладаг категори",
    stats: [
      { v: "7–10", l: "хоногийн хүргэлт", s: "Токио → Улаанбаатар" },
      { v: "7 хоног", l: "тутмын нислэг", s: "Нөөц агуулахад хуримтлагдахгүй" },
      { v: "2021", l: "оноос", s: "12,400 хүргэлт" },
    ],
  },
  EN: {
    eyebrow: "DISTRIBUTION PARTNER FOR JAPANESE BRANDS IN MONGOLIA",
    title: "Japanese quality, on Mongolian shelves.",
    body: "Sakuramori flies stock from Tokyo and Osaka and handles customs, warehousing, wholesale and retail inside Mongolia. Brands ship to us; we build the local channel.",
    cta: "Request the partner deck", cta2: "Categories we carry",
    stats: [
      { v: "7–10", l: "days in transit", s: "Tokyo → Ulaanbaatar" },
      { v: "Weekly", l: "scheduled air freight", s: "No stock sitting idle" },
      { v: "2021", l: "founded", s: "12,400 orders delivered" },
    ],
  },
};

function Hero({ lang }) {
  const t = HERO_COPY[lang];
  return (
    <section style={{ position: "relative", background: "var(--washi-100)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "url(/assets/pattern-asanoha.svg) center top -30px/240px repeat", opacity: 0.4, pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "980px", margin: "0 auto", padding: "var(--space-24) var(--gutter) var(--section-y)", textAlign: "center" }}>
        <img src="/assets/seal.svg" alt="桜森" style={{ width: 62, marginBottom: "var(--space-8)" }} />
        <div style={{ fontSize: "var(--text-micro)", fontWeight: 600, letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--sakura-600)", marginBottom: "var(--space-5)" }}>{t.eyebrow}</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-hero)", fontWeight: 600, lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-tight)", color: "var(--text-heading)", margin: 0, textWrap: "balance" }}>{t.title}</h1>
        <p style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-normal)", color: "var(--text-muted)", maxWidth: "62ch", margin: "var(--space-6) auto 0", textWrap: "pretty" }}>{t.body}</p>
        <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-8)", justifyContent: "center" }}>
          <Button size="lg" iconRight="arrow-right">{t.cta}</Button>
          <Button size="lg" variant="outline" icon="layers">{t.cta2}</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginTop: "var(--space-16)", paddingTop: "var(--space-10)", borderTop: "1px solid var(--border-hairline)" }}>
          {t.stats.map((s, i) => (
            <div key={s.l} style={{ borderLeft: i > 0 ? "1px solid var(--border-hairline)" : "none", padding: "0 var(--space-6)" }}>
              <Stat align="center" value={s.v} label={s.l} sublabel={s.s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export { Hero };
