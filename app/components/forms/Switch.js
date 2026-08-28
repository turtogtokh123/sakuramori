"use client";
import React from "react";

export function Switch({ label, checked, onChange, disabled, style, ...rest }) {
  return (
    <label style={{
      display: "inline-flex", alignItems: "center", gap: "var(--space-3)",
      fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 42, height: 24, borderRadius: "var(--radius-pill)", padding: 3,
          background: checked ? "var(--action-primary)" : "var(--washi-400)",
          display: "inline-flex", alignItems: "center",
          transition: "background var(--dur-normal) var(--ease-standard)",
        }}
        {...rest}
      >
        <span style={{
          width: 18, height: 18, borderRadius: "50%", background: "#fff",
          boxShadow: "var(--shadow-sm)",
          transform: checked ? "translateX(18px)" : "translateX(0)",
          transition: "transform var(--dur-normal) var(--ease-out-soft)",
        }} />
      </span>
      {label}
    </label>
  );
}
