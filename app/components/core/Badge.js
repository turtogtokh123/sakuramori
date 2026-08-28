"use client";
import React from "react";

const tones = {
  sakura: { background: "var(--sakura-100)", color: "var(--sakura-700)" },
  matcha: { background: "#E7EEDD", color: "#4C6431" },
  kohaku: { background: "#F7EAD1", color: "#8A5C15" },
  urushi: { background: "#F5DEDC", color: "var(--urushi-500)" },
  ink: { background: "var(--sumi-800)", color: "var(--washi-50)" },
  neutral: { background: "var(--washi-200)", color: "var(--text-muted)" },
};

export function Badge({ children, tone = "sakura", dot, style, ...rest }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-body)", fontSize: "var(--text-micro)", fontWeight: 600,
        letterSpacing: "var(--tracking-wide)", textTransform: "uppercase",
        padding: "4px 9px", borderRadius: "var(--radius-xs)", display: "inline-flex",
        alignItems: "center", gap: 6, ...tones[tone], ...style,
      }}
      {...rest}
    >
      {dot ? <span style={{ width: 5, height: 5, borderRadius: "50%", background: "currentColor" }} /> : null}
      {children}
    </span>
  );
}
