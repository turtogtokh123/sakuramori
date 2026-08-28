"use client";
import React from "react";
import { SectionHeading, FeatureCard, Testimonial, Button } from "../components/index.js";

const STORY_COPY = {
  JP: {
    flowEyebrow: "取引開始までの流れ",
    flowTitle: "四つの段階で、期限を明示して進めます",
    flowKicker: "各段階の担当と所要日数を事前にお伝えし、進捗は日本語でご報告します。",
    steps: [
      { step: "01", title: "ご連絡", body: "商品資料と希望卸価格をお送りください。" },
      { step: "02", title: "市場評価", body: "2週間でモンゴルでの価格帯と数量見込みをご提示します。" },
      { step: "03", title: "試験輸入", body: "少量から開始し、登録と実売を確認します。" },
      { step: "04", title: "正規契約", body: "販売実績に基づき独占または準独占契約を締結します。" },
    ],
    storyEyebrow: "私たちについて",
    storyTitle: "桜森 — 一本の桜ではなく、桜の森",
    storyKicker: "日本の多くのブランドを一つの流通網でモンゴルへ運ぶ、という意味を社名に込めました。2021年に数世帯へ化粧品とサプリメントを送ることから始め、今も商品は自社で検品し、自社で発送しています。",
    storyCta: "会社概要", storyCta2: "倉庫を見る",
    promises: [
      { icon: "badge-check", title: "正規品のみ", body: "日本の正規流通・正規卸からのみ仕入れます。" },
      { icon: "plane", title: "毎週の定期空輸", body: "定期便のため在庫が倉庫で滞留しません。" },
      { icon: "receipt", title: "追加費用なし", body: "提示価格に通関・輸送費を含みます。受取時の追加請求はありません。" },
    ],
    voiceEyebrow: "取引先の声",
    voiceTitle: "ご一緒しているブランド様より",
    voices: [
      { rating: 5, quote: "登録から初回出荷まで想定より早く、書類も日本語で揃えていただけました。", name: "化粧品メーカー", meta: "大阪 · スキンケア" },
      { rating: 5, quote: "月次の販売報告があるため、モンゴル側の在庫と価格を日本から把握できています。", name: "健康食品メーカー", meta: "東京 · サプリメント" },
      { rating: 4, quote: "試験輸入から始められたので、社内の承認を通しやすい形でした。", name: "生活用品メーカー", meta: "名古屋 · キッチン用品" },
    ],
  },
  MN: {
    flowEyebrow: "ХАМТРАН АЖИЛЛАХ ЯВЦ",
    flowTitle: "Дөрвөн шатаар, тодорхой хугацаанд",
    flowKicker: "Шат бүрийн хариуцагч, шаардах хугацааг урьдчилан мэдэгдэж, явцыг тухай бүр тайлагнана.",
    steps: [
      { step: "01", title: "Холбогдох", body: "Бүтээгдэхүүний танилцуулга, бөөний үнээ илгээнэ." },
      { step: "02", title: "Үнэлгээ", body: "2 долоо хоногт зах зээлийн үнэ, тоо хэмжээний тооцоо гаргана." },
      { step: "03", title: "Туршилт", body: "Багахан хэмжээгээр эхлүүлж, бүртгэл, борлуулалтыг шалгана." },
      { step: "04", title: "Гэрээ", body: "Борлуулалтын үр дүнд онцгой эрхийн гэрээ байгуулна." },
    ],
    storyEyebrow: "БИДНИЙ ТУХАЙ",
    storyTitle: "桜森 — нэг цэцэг биш, сакурагийн ой",
    storyKicker: "Японы олон брэндийг нэг ханган нийлүүлэлтийн сүлжээгээр Монголд хүргэх гэсэн санааг нэрэндээ шингээсэн. 2021 онд хэдэн гэр бүлд гоо сайхны бүтээгдэхүүн, витамин илгээж эхэлсэн. Одоо ч адилхан: бараагаа өөрсдөө шалгаж, өөрсдөө хаяглаж илгээдэг.",
    storyCta: "Бидний тухай", storyCta2: "Агуулах харах",
    promises: [
      { icon: "badge-check", title: "Зөвхөн жинхэнэ бараа", body: "Японы албан ханган нийлүүлэгч, жижиглэн худалдаанаас л татна." },
      { icon: "plane", title: "Долоо хоног бүрийн онгоц", body: "Хуваарьт нислэг тул бараа агуулахад хүлээгдэхгүй." },
      { icon: "receipt", title: "Нэмэлт хураамжгүй", body: "Үнэ дотор гааль, тээвэр орсон. Хүргэх үед нэмж төлөхгүй." },
    ],
    voiceEyebrow: "ХАМТРАГЧИД",
    voiceTitle: "Хамтран ажилладаг брэндүүд",
    voices: [
      { rating: 5, quote: "Бүртгэлээс эхний хүргэлт хүртэл төлөвлөснөөс хурдан явлаа. Бичиг баримтыг япон хэлээр бүрдүүлж өгсөн.", name: "Гоо сайхны үйлдвэр", meta: "Осака · Арьс хамгаалал" },
      { rating: 5, quote: "Сар бүрийн тайлан ирдэг тул Монгол дахь нөөц, үнийг Японоос хянаж байна.", name: "Био бүтээгдэхүүний үйлдвэр", meta: "Токио · Витамин" },
      { rating: 4, quote: "Туршилтын жижиг хэмжээнээс эхэлсэн нь дотоод шийдвэрээ гаргахад хялбар байсан.", name: "Гэр ахуйн үйлдвэр", meta: "Нагоя · Тавилга" },
    ],
  },
  EN: {
    flowEyebrow: "HOW A PARTNERSHIP STARTS",
    flowTitle: "Four stages, each with a stated deadline",
    flowKicker: "You get the owner and duration of every stage up front, and progress reported as it happens.",
    steps: [
      { step: "01", title: "Introduction", body: "Send your product materials and target wholesale price." },
      { step: "02", title: "Market read", body: "Within two weeks we return a Mongolian price band and volume estimate." },
      { step: "03", title: "Trial import", body: "Start small, confirm registration and real sell-through." },
      { step: "04", title: "Formal agreement", body: "Exclusive or semi-exclusive terms based on measured results." },
    ],
    storyEyebrow: "ABOUT US",
    storyTitle: "桜森 — not one blossom, a forest of them",
    storyKicker: "The name carries the intent: many Japanese brands moving into Mongolia through one distribution network. We began in 2021 sending skincare and supplements to a handful of households, and we still inspect and ship every order ourselves.",
    storyCta: "About the company", storyCta2: "See the warehouse",
    promises: [
      { icon: "badge-check", title: "Genuine stock only", body: "Sourced exclusively from Japanese authorised wholesale and retail." },
      { icon: "plane", title: "Weekly air freight", body: "A scheduled route, so stock never waits in the warehouse." },
      { icon: "receipt", title: "No added fees", body: "Quoted prices include freight and customs. Nothing is charged on delivery." },
    ],
    voiceEyebrow: "PARTNERS",
    voiceTitle: "From the brands we work with",
    voices: [
      { rating: 5, quote: "Registration to first shipment moved faster than we expected, with paperwork prepared in Japanese.", name: "Cosmetics manufacturer", meta: "Osaka · Skincare" },
      { rating: 5, quote: "Monthly reporting means we can track Mongolian stock and pricing from Japan.", name: "Supplement manufacturer", meta: "Tokyo · Health foods" },
      { rating: 4, quote: "Being able to start with a trial import made internal approval straightforward.", name: "Housewares manufacturer", meta: "Nagoya · Kitchen goods" },
    ],
  },
};

function Story({ lang }) {
  const t = STORY_COPY[lang];
  return (
    <React.Fragment>
      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <SectionHeading align="center" eyebrow={t.flowEyebrow} title={t.flowTitle} kicker={t.flowKicker} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-5)", marginTop: "var(--space-12)" }}>
          {t.steps.map((s) => <FeatureCard key={s.step} {...s} />)}
        </div>
      </section>

      <section style={{ background: "var(--surface-ink)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url(/assets/pattern-asanoha.svg) left -60px center/200px repeat", opacity: 0.06 }} />
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: "var(--space-16)", alignItems: "center" }}>
          <div>
            <img src="/assets/seal.svg" alt="" style={{ width: 64, marginBottom: "var(--space-6)" }} />
            <SectionHeading tone="inverse" eyebrow={t.storyEyebrow} title={t.storyTitle} kicker={t.storyKicker} />
            <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-8)" }}>
              <Button variant="primary" iconRight="arrow-right">{t.storyCta}</Button>
              <Button variant="outline" style={{ color: "var(--washi-100)", borderColor: "var(--sumi-700)" }}>{t.storyCta2}</Button>
            </div>
          </div>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {t.promises.map((p) => <FeatureCard key={p.title} tone="ink" {...p} />)}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <SectionHeading eyebrow={t.voiceEyebrow} title={t.voiceTitle} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-6)", marginTop: "var(--space-10)" }}>
          {t.voices.map((v) => <Testimonial key={v.name} {...v} />)}
        </div>
      </section>
    </React.Fragment>
  );
}


export { Story };
