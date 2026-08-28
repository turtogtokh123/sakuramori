"use client";
import React from "react";

export function IconButton({ icon, label, size = "md", variant = "outline", onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dim = size === "sm" ? 32 : size === "lg" ? 48 : 40;
  const looks = {
    outline: { background: "var(--surface-card)", border: "1px solid var(--border-hairline)", color: "var(--text-body)" },
    ghost: { background: "transparent", border: "1px solid transparent", color: "var(--text-body)" },
    solid: { background: "var(--action-primary)", border: "1px solid transparent", color: "#fff" },
  };
  return (
    <button
      aria-label={label} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: dim, height: dim, borderRadius: "var(--radius-pill)", cursor: "pointer",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        transition: "background var(--dur-fast) var(--ease-standard)",
        ...looks[variant],
        ...(hover ? { background: variant === "solid" ? "var(--action-primary-hover)" : "var(--washi-200)" } : null),
        ...style,
      }}
      {...rest}
    >
      <span data-lucide={icon} style={{ width: size === "sm" ? 15 : 18, height: size === "sm" ? 15 : 18, display: "inline-flex" }} />
    </button>
  );
}
