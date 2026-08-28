"use client";
import React from "react";

const LANGS = [
  { code: "JP", label: "日本語" },
  { code: "MN", label: "Монгол" },
  { code: "EN", label: "English" },
];

export function LangSwitcher({ value = "JP", onChange, tone = "light", style, ...rest }) {
  const inverse = tone === "inverse";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 2, padding: 3,
      borderRadius: "var(--radius-pill)",
      background: inverse ? "rgba(254,252,250,.10)" : "var(--washi-200)",
      fontFamily: "var(--font-body)", ...style,
    }} {...rest}>
      {LANGS.map((l) => {
        const active = l.code === value;
        return (
          <button
            key={l.code} onClick={() => onChange && onChange(l.code)} title={l.label}
            style={{
              border: "none", cursor: "pointer", padding: "5px 12px",
              borderRadius: "var(--radius-pill)", font: "inherit",
              fontSize: "var(--text-caption)", fontWeight: 600, letterSpacing: "0.04em",
              background: active ? (inverse ? "var(--washi-50)" : "var(--surface-raised)") : "transparent",
              color: active ? "var(--text-heading)" : inverse ? "var(--washi-400)" : "var(--text-muted)",
              boxShadow: active ? "var(--shadow-sm)" : "none",
              transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)",
            }}
          >{l.code}</button>
        );
      })}
    </div>
  );
}
