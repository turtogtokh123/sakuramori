"use client";
import React from "react";

export function SectionHeading({ eyebrow, title, kicker, align = "left", tone = "ink", style, ...rest }) {
  const inverse = tone === "inverse";
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? "var(--container-narrow)" : "none", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0, ...style }} {...rest}>
      {eyebrow ? (
        <div style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-micro)", fontWeight: 600,
          letterSpacing: "var(--tracking-label)", textTransform: "uppercase",
          color: inverse ? "var(--sakura-200)" : "var(--sakura-600)", marginBottom: "var(--space-3)",
        }}>{eyebrow}</div>
      ) : null}
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 600, margin: 0,
        fontSize: "var(--text-h2)", lineHeight: "var(--leading-tight)",
        letterSpacing: "var(--tracking-tight)",
        color: inverse ? "var(--washi-50)" : "var(--text-heading)",
      }}>{title}</h2>
      {kicker ? (
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)",
          lineHeight: "var(--leading-normal)", margin: "var(--space-4) 0 0",
          color: inverse ? "var(--washi-400)" : "var(--text-muted)",
          maxWidth: "60ch", textWrap: "pretty",
        }}>{kicker}</p>
      ) : null}
    </div>
  );
}
