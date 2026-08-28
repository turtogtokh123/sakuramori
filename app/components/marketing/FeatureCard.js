"use client";
import React from "react";

export function FeatureCard({ icon, step, title, body, tone = "paper", style, ...rest }) {
  const inverse = tone === "ink";
  return (
    <div style={{
      fontFamily: "var(--font-body)", padding: "var(--space-6)",
      borderRadius: "var(--radius-lg)",
      background: inverse ? "var(--surface-ink)" : tone === "sakura" ? "var(--surface-sakura)" : "var(--surface-card)",
      border: "1px solid " + (inverse ? "var(--sumi-700)" : tone === "sakura" ? "var(--sakura-100)" : "var(--border-hairline)"),
      ...style,
    }} {...rest}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
        {icon ? (
          <span style={{
            width: 40, height: 40, borderRadius: "var(--radius-pill)",
            background: inverse ? "rgba(243,196,208,.16)" : "var(--sakura-100)",
            color: inverse ? "var(--sakura-200)" : "var(--sakura-700)",
            display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "0 0 40px",
          }}>
            <span data-lucide={icon} style={{ width: 19, height: 19, display: "inline-flex" }} />
          </span>
        ) : null}
        {step ? (
          <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 700, color: inverse ? "var(--sakura-200)" : "var(--sakura-300)" }}>{step}</span>
        ) : null}
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", fontWeight: 600, color: inverse ? "var(--washi-50)" : "var(--text-heading)" }}>{title}</div>
      <p style={{ margin: "var(--space-2) 0 0", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-normal)", color: inverse ? "var(--washi-400)" : "var(--text-muted)", textWrap: "pretty" }}>{body}</p>
    </div>
  );
}
