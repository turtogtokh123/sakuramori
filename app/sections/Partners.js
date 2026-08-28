"use client";
import React from "react";
import { SectionHeading, FeatureCard, Button, Card } from "../components/index.js";

const PARTNER_COPY = {
  JP: {
    eyebrow: "ブランド様へ",
    title: "モンゴル市場への窓口を、桜森が担います",
    kicker: "人口350万人、首都に集中する若い消費市場。日本製品への信頼は高く、正規流通はまだ空いています。",
    cards: [
      { icon: "file-check", title: "輸入・通関", body: "食品・化粧品・医薬部外品の登録と通関を自社で処理します。" },
      { icon: "warehouse", title: "保管・在庫", body: "ウランバートルの自社倉庫で温度管理と在庫管理を行います。" },
      { icon: "store", title: "卸・小売", body: "薬局、コスメ専門店、EC、SNS販売まで一括で販路を構築します。" },
      { icon: "chart-line", title: "販売報告", body: "月次で販売数量・在庫・価格帯を日本語でご報告します。" },
    ],
    cta: "パートナー資料を請求", cta2: "会社概要 (PDF)",
    panelTitle: "取扱カテゴリー",
    cats: ["化粧品・スキンケア", "健康食品・サプリメント", "生活用品・キッチン", "食品・菓子"],
    note: "取扱を検討されるブランド様は、日本語でお問い合わせいただけます。",
  },
  MN: {
    eyebrow: "БРЭНДҮҮДЭД",
    title: "Монголын зах зээл дэх албан түнш",
    kicker: "3.5 сая хүн ам, залуу хэрэглэгч, Япон бараанд өндөр итгэл. Албан ханган нийлүүлэлт хараахан хөгжөөгүй.",
    cards: [
      { icon: "file-check", title: "Импорт ба гааль", body: "Хүнс, гоо сайхан, био бүтээгдэхүүний бүртгэл, гаалийг бид хийнэ." },
      { icon: "warehouse", title: "Агуулах", body: "Улаанбаатарт өөрийн агуулах, температур хяналт, нөөцийн бүртгэл." },
      { icon: "store", title: "Бөөн ба жижиглэн", body: "Эмийн сан, гоо сайхны дэлгүүр, онлайн худалдаа, сошиал борлуулалт." },
      { icon: "chart-line", title: "Тайлан", body: "Сар бүр борлуулалт, нөөц, үнийн тайланг япон хэлээр гаргана." },
    ],
    cta: "Танилцуулга авах", cta2: "Компанийн танилцуулга (PDF)",
    panelTitle: "Ажилладаг категори",
    cats: ["Гоо сайхан, арьс хамгаалал", "Эрүүл мэнд, витамин", "Гэр ахуй, тавилга", "Хүнс, чихэр"],
    note: "Хамтран ажиллах хүсэлтэй брэндүүд япон эсвэл монгол хэлээр холбогдож болно.",
  },
  EN: {
    eyebrow: "FOR BRAND OWNERS",
    title: "Your route into the Mongolian market",
    kicker: "3.5 million people, a young capital-city market, and high trust in Japanese products — with formal distribution still largely open.",
    cards: [
      { icon: "file-check", title: "Import & customs", body: "We handle product registration and clearance for food, cosmetics and quasi-drugs." },
      { icon: "warehouse", title: "Warehousing", body: "Our own Ulaanbaatar warehouse with temperature control and stock tracking." },
      { icon: "store", title: "Wholesale & retail", body: "Pharmacies, cosmetics chains, e-commerce and social selling in one channel plan." },
      { icon: "chart-line", title: "Reporting", body: "Monthly volume, stock and pricing reports, delivered in Japanese." },
    ],
    cta: "Request the partner deck", cta2: "Company profile (PDF)",
    panelTitle: "Categories we carry",
    cats: ["Cosmetics & skincare", "Health supplements", "Home & kitchen", "Food & confectionery"],
    note: "Brand owners are welcome to enquire in Japanese.",
  },
};

function Partners({ lang }) {
  const t = PARTNER_COPY[lang];
  return (
    <section id="partners" style={{ background: "var(--bg-page-alt)", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: "var(--space-16)", alignItems: "start" }}>
          <div>
            <SectionHeading eyebrow={t.eyebrow} title={t.title} kicker={t.kicker} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)", marginTop: "var(--space-10)" }}>
              {t.cards.map((c) => <FeatureCard key={c.title} {...c} />)}
            </div>
          </div>
          <Card tone="ink" padding="var(--space-8)">
            <img src="/assets/seal.svg" alt="" style={{ width: 52, marginBottom: "var(--space-5)" }} />
            <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--washi-50)" }}>{t.panelTitle}</div>
            <div style={{ display: "grid", gap: "var(--space-3)", margin: "var(--space-5) 0 var(--space-6)" }}>
              {t.cats.map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", fontSize: "var(--text-body-sm)", color: "var(--washi-300)" }}>
                  <span data-lucide="check" style={{ width: 15, height: 15, color: "var(--sakura-200)", flex: "0 0 15px" }} />{c}
                </div>
              ))}
            </div>
            <div style={{ height: 1, background: "var(--sumi-700)", margin: "var(--space-6) 0" }} />
            <p style={{ fontSize: "var(--text-caption)", lineHeight: "var(--leading-normal)", color: "var(--washi-400)", margin: "0 0 var(--space-5)" }}>{t.note}</p>
            <div style={{ display: "grid", gap: "var(--space-3)" }}>
              <Button block iconRight="arrow-right">{t.cta}</Button>
              <Button block variant="outline" icon="file-text" style={{ color: "var(--washi-100)", borderColor: "var(--sumi-700)" }}>{t.cta2}</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}


export { Partners };
