"use client";
import React from "react";

export function Card({ children, tone = "paper", padding = "var(--space-6)", hoverable, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    paper: { background: "var(--surface-card)", border: "1px solid var(--border-hairline)" },
    raised: { background: "var(--surface-raised)", border: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-md)" },
    sakura: { background: "var(--surface-sakura)", border: "1px solid var(--sakura-100)" },
    ink: { background: "var(--surface-ink)", border: "1px solid var(--sumi-700)", color: "var(--text-inverse)" },
    outline: { background: "transparent", border: "1px solid var(--border-strong)" },
  };
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: "var(--radius-lg)", padding, fontFamily: "var(--font-body)",
        color: tone === "ink" ? "var(--text-inverse)" : "var(--text-body)",
        transition: "box-shadow var(--dur-normal) var(--ease-out-soft), transform var(--dur-normal) var(--ease-out-soft)",
        ...tones[tone],
        ...(hoverable && hover ? { boxShadow: "var(--shadow-lg)", transform: "translateY(-3px)" } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
