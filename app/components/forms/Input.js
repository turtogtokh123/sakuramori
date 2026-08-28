"use client";
import React from "react";

export function Input({ label, hint, error, icon, type = "text", value, onChange, placeholder, disabled, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "block", fontFamily: "var(--font-body)", ...style }}>
      {label ? (
        <span style={{ display: "block", fontSize: "var(--text-body-sm)", fontWeight: 500, color: "var(--text-body)", marginBottom: "var(--space-2)" }}>{label}</span>
      ) : null}
      <span style={{
        display: "flex", alignItems: "center", gap: "var(--space-2)",
        background: disabled ? "var(--washi-200)" : "var(--surface-raised)",
        border: "1px solid " + (error ? "var(--state-danger)" : focus ? "var(--border-focus)" : "var(--border-hairline)"),
        borderRadius: "var(--radius-sm)", padding: "0 14px", height: 44,
        boxShadow: focus && !error ? "var(--ring-focus)" : "none",
        transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      }}>
        {icon ? <span data-lucide={icon} style={{ width: 16, height: 16, display: "inline-flex", color: "var(--text-subtle)" }} /> : null}
        <input
          type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ border: "none", outline: "none", background: "transparent", flex: 1, minWidth: 0, font: "inherit", fontSize: "var(--text-body-md)", color: "var(--text-body)" }}
          {...rest}
        />
      </span>
      {error || hint ? (
        <span style={{ display: "block", fontSize: "var(--text-caption)", marginTop: "var(--space-2)", color: error ? "var(--state-danger)" : "var(--text-subtle)" }}>{error || hint}</span>
      ) : null}
    </label>
  );
}
