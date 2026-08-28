"use client";
import React from "react";

export function Tag({ children, active, icon, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", fontWeight: 500,
        padding: "8px 16px", borderRadius: "var(--radius-pill)", cursor: "pointer",
        display: "inline-flex", alignItems: "center", gap: 7,
        transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
        background: active ? "var(--sumi-800)" : hover ? "var(--washi-200)" : "var(--surface-card)",
        color: active ? "var(--washi-50)" : "var(--text-body)",
        border: "1px solid " + (active ? "var(--sumi-800)" : "var(--border-hairline)"),
        ...style,
      }}
      {...rest}
    >
      {icon ? <span data-lucide={icon} style={{ width: 14, height: 14, display: "inline-flex" }} /> : null}
      {children}
    </button>
  );
}
