"use client";
import React from "react";
import { SiteHeader } from "./sections/Header.js";
import { Hero } from "./sections/Hero.js";
import { Partners } from "./sections/Partners.js";
import { Story } from "./sections/Story.js";
import { FaqContact, SiteFooter } from "./sections/Faq.js";

const LUCIDE_SRC = "https://unpkg.com/lucide@0.446.0/dist/umd/lucide.min.js";


export default function Page() {
  const [lang, setLang] = React.useState("JP");
  React.useEffect(() => {
    const draw = () => window.lucide && window.lucide.createIcons();
    if (window.lucide) return draw();
    let s = document.querySelector('script[data-lucide-lib]');
    if (!s) {
      s = document.createElement("script");
      s.src = LUCIDE_SRC;
      s.async = true;
      s.setAttribute("data-lucide-lib", "");
      document.head.appendChild(s);
    }
    s.addEventListener("load", draw);
    return () => s.removeEventListener("load", draw);
  }, []);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); }, [lang]);
  return (
    <>
      <SiteHeader lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Partners lang={lang} />
      <Story lang={lang} />
      <FaqContact lang={lang} />
      <SiteFooter lang={lang} setLang={setLang} />
    </>

  );
}
