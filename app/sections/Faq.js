"use client";
import React from "react";
import { SectionHeading, Accordion, Input, Button, Checkbox, LangSwitcher, Select } from "../components/index.js";

const FAQ_COPY = {
  JP: {
    eyebrow: "よくあるご質問",
    title: "ブランド様からのご質問",
    faq: [
      { q: "モンゴルでの商品登録は誰が行いますか。", a: "桜森が代行します。食品・化粧品・医薬部外品の登録書類はすべて当社で作成し、必要な日本語訳も用意します。" },
      { q: "最初の取引はどのくらいの数量からですか。", a: "試験輸入は1品目あたり50〜200点から可能です。実売を確認したうえで数量を拡大します。" },
      { q: "価格はどのように決めますか。", a: "希望卸価格をもとに、輸送費・通関・現地流通マージンを含めた小売価格帯を当社から提示します。" },
      { q: "独占販売権は付与されますか。", a: "試験輸入後の販売実績に応じて、独占または準独占契約を締結します。期間は通常1年更新です。" },
      { q: "支払い条件と通貨は。", a: "円建て、銀行送金。初回は前払い、取引実績に応じて条件を調整します。" },
    ],
    formTitle: "お問い合わせ",
    formBody: "商品カテゴリーとご希望の条件をお知らせください。3営業日以内に日本語でご返信します。",
    name: "ご担当者名", namePh: "山田 太郎",
    company: "会社名", companyPh: "株式会社◯◯",
    email: "メールアドレス", emailPh: "you@example.co.jp",
    cat: "商品カテゴリー",
    cats: ["化粧品・スキンケア", "健康食品・サプリメント", "生活用品・キッチン", "食品・菓子", "その他"],
    consent: "会社概要と市場資料の送付を希望します",
    submit: "送信する", sent: "受け付けました",
    footTag: "日本ブランドのモンゴル正規販売パートナー。東京 · ウランバートル。",
    cols: [
      { h: "事業", items: ["取扱カテゴリー", "モンゴル市場", "物流と通関", "販売報告"] },
      { h: "会社", items: ["会社概要", "倉庫", "採用", "お問い合わせ"] },
      { h: "資料", items: ["会社概要 (PDF)", "市場レポート", "取引条件", "よくある質問"] },
    ],
    legal: ["利用規約", "プライバシーポリシー"],
  },
  MN: {
    eyebrow: "ТҮГЭЭМЭЛ АСУУЛТ",
    title: "Брэндүүдээс асуудаг зүйлс",
    faq: [
      { q: "Монголд бүтээгдэхүүний бүртгэлийг хэн хийдэг вэ?", a: "Sakuramori хариуцна. Хүнс, гоо сайхан, био бүтээгдэхүүний бүртгэлийн материалыг бид бүрдүүлж, шаардлагатай орчуулгыг хийнэ." },
      { q: "Эхний захиалга хэдэн нэгжээс эхэлдэг вэ?", a: "Туршилтын импорт нэр төрөл тутамд 50–200 нэгжээс. Борлуулалт батлагдсаны дараа хэмжээг өсгөнө." },
      { q: "Үнийг хэрхэн тогтоодог вэ?", a: "Танай бөөний үнэ дээр тээвэр, гааль, дотоодын маржин нэмж, жижиглэн үнийн хүрээг бид тооцож хүргүүлнэ." },
      { q: "Онцгой эрх олгодог уу?", a: "Туршилтын дараах борлуулалтын үр дүнгээс хамаарч онцгой эсвэл хагас онцгой эрхийн гэрээ байгуулна. Хугацаа нь ерөнхийдөө 1 жил." },
      { q: "Төлбөрийн нөхцөл, валют?", a: "Йенээр, банкны шилжүүлгээр. Эхний удаа урьдчилгаа, дараа нь харилцааны түүхээс хамаарч нөхцөлийг зөөлрүүлнэ." },
    ],
    formTitle: "Холбоо барих",
    formBody: "Категори, хүсэж байгаа нөхцөлөө бичиж үлдээгээрэй. 3 хоногийн дотор хариу мэдэгдэнэ.",
    name: "Хариуцсан хүн", namePh: "Таны нэр",
    company: "Компанийн нэр", companyPh: "◯◯ ХХК",
    email: "Имэйл", emailPh: "you@example.mn",
    cat: "Бүтээгдэхүүний категори",
    cats: ["Гоо сайхан, арьс хамгаалал", "Эрүүл мэнд, витамин", "Гэр ахуй, тавилга", "Хүнс, чихэр", "Бусад"],
    consent: "Компанийн танилцуулга, зах зээлийн тайлан авах",
    submit: "Илгээх", sent: "Хүсэлт хүлээн авлаа",
    footTag: "Япон брэндийн Монгол дахь албан ханган нийлүүлэгч. Токио · Улаанбаатар.",
    cols: [
      { h: "Үйл ажиллагаа", items: ["Ажилладаг категори", "Монголын зах зээл", "Тээвэр ба гааль", "Борлуулалтын тайлан"] },
      { h: "Компани", items: ["Бидний тухай", "Агуулах", "Ажлын байр", "Холбоо барих"] },
      { h: "Материал", items: ["Танилцуулга (PDF)", "Зах зээлийн тайлан", "Гэрээний нөхцөл", "Түгээмэл асуулт"] },
    ],
    legal: ["Үйлчилгээний нөхцөл", "Нууцлал"],
  },
  EN: {
    eyebrow: "FREQUENTLY ASKED",
    title: "What brand owners ask us",
    faq: [
      { q: "Who handles product registration in Mongolia?", a: "We do. Sakuramori prepares all registration documents for food, cosmetics and quasi-drugs, including any translation required." },
      { q: "How large is a first order?", a: "A trial import starts at 50–200 units per SKU. Volumes grow once we have confirmed sell-through." },
      { q: "How is pricing set?", a: "From your target wholesale price we build a Mongolian retail band that includes freight, customs and local distribution margin." },
      { q: "Do you take exclusive rights?", a: "Exclusive or semi-exclusive terms follow the trial period, based on measured results. Agreements typically renew annually." },
      { q: "Payment terms and currency?", a: "Japanese yen by bank transfer. Prepaid on the first order, then adjusted as the relationship is established." },
    ],
    formTitle: "Get in touch",
    formBody: "Tell us your category and the terms you're looking for. We reply within three business days.",
    name: "Contact name", namePh: "Your name",
    company: "Company", companyPh: "Company name",
    email: "Email", emailPh: "you@example.co.jp",
    cat: "Product category",
    cats: ["Cosmetics & skincare", "Health supplements", "Home & kitchen", "Food & confectionery", "Other"],
    consent: "Send me the company profile and market report",
    submit: "Send enquiry", sent: "Enquiry received",
    footTag: "Distribution partner for Japanese brands in Mongolia. Tokyo · Ulaanbaatar.",
    cols: [
      { h: "Business", items: ["Categories", "Mongolian market", "Logistics & customs", "Reporting"] },
      { h: "Company", items: ["About", "Warehouse", "Careers", "Contact"] },
      { h: "Materials", items: ["Company profile (PDF)", "Market report", "Partnership terms", "FAQ"] },
    ],
    legal: ["Terms of service", "Privacy"],
  },
};

function FaqContact({ lang }) {
  const t = FAQ_COPY[lang];
  const [ok, setOk] = React.useState(true);
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ background: "var(--bg-page-alt)", borderTop: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: "var(--space-16)", alignItems: "start" }}>
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} />
          <div style={{ marginTop: "var(--space-8)" }}><Accordion items={t.faq} defaultOpen={0} /></div>
        </div>
        <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-lg)", padding: "var(--space-8)", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--text-heading)" }}>{t.formTitle}</div>
          <p style={{ fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-normal)", color: "var(--text-muted)", margin: "var(--space-3) 0 var(--space-6)" }}>{t.formBody}</p>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <Input label={t.name} placeholder={t.namePh} />
            <Input label={t.company} icon="building-2" placeholder={t.companyPh} />
            <Input label={t.email} icon="mail" placeholder={t.emailPh} />
            <Select label={t.cat} options={t.cats} />
            <Checkbox label={t.consent} checked={ok} onChange={setOk} />
            <Button block size="lg" onClick={() => setSent(true)} iconRight={sent ? "check" : "arrow-right"}>{sent ? t.sent : t.submit}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ lang, setLang }) {
  const t = FAQ_COPY[lang];
  return (
    <footer style={{ background: "var(--surface-ink)", color: "var(--washi-300)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-16) var(--gutter) var(--space-8)", display: "grid", gridTemplateColumns: "1.3fr repeat(3, 1fr)", gap: "var(--space-12)" }}>
        <div>
          <img src="/assets/logo-inverse.svg" alt="Sakuramori" style={{ height: 46 }} />
          <p style={{ fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-normal)", color: "var(--washi-400)", maxWidth: "34ch", margin: "var(--space-5) 0 var(--space-6)" }}>{t.footTag}</p>
          <LangSwitcher tone="inverse" value={lang} onChange={setLang} />
        </div>
        {t.cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontSize: "var(--text-micro)", fontWeight: 600, letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--sakura-200)", marginBottom: "var(--space-4)" }}>{c.h}</div>
            <div style={{ display: "grid", gap: "var(--space-3)" }}>
              {c.items.map((i) => <a key={i} href="#" style={{ fontSize: "var(--text-body-sm)", color: "var(--washi-300)", textDecoration: "none" }}>{i}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-6) var(--gutter)", borderTop: "1px solid var(--sumi-700)", display: "flex", justifyContent: "space-between", gap: "var(--space-6)", fontSize: "var(--text-caption)", color: "var(--sumi-500)" }}>
        <span>© 2026 Sakuramori LLC · 桜森</span>
        <span style={{ display: "flex", gap: "var(--space-6)" }}>{t.legal.map((l) => <a key={l} href="#" style={{ color: "inherit", textDecoration: "none" }}>{l}</a>)}</span>
      </div>
    </footer>
  );
}


export { FaqContact, SiteFooter };
