"use client";
import React from "react";

const base = {
  fontFamily: "var(--font-body)", fontWeight: 500, cursor: "pointer",
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-2)",
  border: "1px solid transparent", borderRadius: "var(--radius-sm)",
  transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-instant) var(--ease-standard)",
  textDecoration: "none", whiteSpace: "nowrap",
};

const sizes = {
  sm: { padding: "7px 14px", fontSize: "var(--text-body-sm)" },
  md: { padding: "11px 22px", fontSize: "var(--text-body-md)" },
  lg: { padding: "15px 30px", fontSize: "var(--text-body-lg)" },
};

const variants = {
  primary: { background: "var(--action-primary)", color: "var(--action-primary-text)", boxShadow: "var(--shadow-sm)" },
  secondary: { background: "var(--action-secondary)", color: "var(--text-inverse)" },
  outline: { background: "transparent", color: "var(--text-body)", borderColor: "var(--border-strong)" },
  ghost: { background: "transparent", color: "var(--text-accent)" },
  seal: { background: "var(--urushi-500)", color: "#fff", borderRadius: "var(--radius-pill)" },
};

const hovers = {
  primary: { background: "var(--action-primary-hover)" },
  secondary: { background: "var(--action-secondary-hover)" },
  outline: { background: "var(--washi-200)", borderColor: "var(--sumi-400)" },
  ghost: { background: "var(--sakura-50)" },
  seal: { background: "#8E2F2A" },
};

export function Button({ children, variant = "primary", size = "md", icon, iconRight, block, disabled, href, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = href ? "a" : "button";
  const css = {
    ...base, ...sizes[size], ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(down && !disabled ? { transform: "translateY(1px)" } : null),
    ...(block ? { display: "flex", width: "100%" } : null),
    ...(disabled ? { opacity: 0.42, cursor: "not-allowed", boxShadow: "none" } : null),
    ...style,
  };
  return (
    <Tag
      href={href} onClick={disabled ? undefined : onClick} disabled={href ? undefined : disabled} style={css}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)} {...rest}
    >
      {icon ? <span data-lucide={icon} style={{ width: 16, height: 16, display: "inline-flex" }} /> : null}
      {children}
      {iconRight ? <span data-lucide={iconRight} style={{ width: 16, height: 16, display: "inline-flex" }} /> : null}
    </Tag>
  );
}
