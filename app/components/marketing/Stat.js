"use client";
import React from "react";

export function Stat({ value, label, sublabel, tone = "ink", align = "left", style, ...rest }) {
  const inverse = tone === "inverse";
  return (
    <div style={{ fontFamily: "var(--font-body)", textAlign: align, ...style }} {...rest}>
      <div style={{
        fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 700,
        lineHeight: 1, letterSpacing: "var(--tracking-tight)",
        color: inverse ? "var(--washi-50)" : "var(--text-heading)",
      }}>{value}</div>
      <div style={{
        marginTop: "var(--space-3)", fontSize: "var(--text-body-sm)", fontWeight: 500,
        color: inverse ? "var(--sakura-200)" : "var(--sakura-700)",
      }}>{label}</div>
      {sublabel ? (
        <div style={{ marginTop: 4, fontSize: "var(--text-caption)", color: inverse ? "var(--washi-400)" : "var(--text-subtle)" }}>{sublabel}</div>
      ) : null}
    </div>
  );
}
