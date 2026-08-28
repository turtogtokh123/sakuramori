"use client";
import React from "react";

export function Testimonial({ quote, name, meta, rating = 5, style, ...rest }) {
  return (
    <figure style={{
      margin: 0, fontFamily: "var(--font-body)", background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)", ...style,
    }} {...rest}>
      {rating ? (
        <div style={{ display: "flex", gap: 3, marginBottom: "var(--space-4)", color: "var(--kohaku-500)" }}>
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} data-lucide="star" style={{ width: 14, height: 14, display: "inline-flex", fill: "currentColor" }} />
          ))}
        </div>
      ) : null}
      <blockquote style={{
        margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-body-lg)",
        lineHeight: "var(--leading-normal)", color: "var(--text-heading)", textWrap: "pretty",
      }}>{quote}</blockquote>
      <figcaption style={{ marginTop: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <span style={{
          width: 34, height: 34, borderRadius: "50%", background: "var(--sakura-100)",
          color: "var(--sakura-700)", display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: "var(--text-body-sm)", fontWeight: 600,
        }}>{(name || "?").trim().charAt(0)}</span>
        <span>
          <span style={{ display: "block", fontSize: "var(--text-body-sm)", fontWeight: 600, color: "var(--text-body)" }}>{name}</span>
          {meta ? <span style={{ display: "block", fontSize: "var(--text-caption)", color: "var(--text-subtle)" }}>{meta}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}
