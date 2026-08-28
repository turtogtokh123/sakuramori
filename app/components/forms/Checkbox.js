"use client";
import React from "react";

export function Checkbox({ label, checked, onChange, disabled, style, ...rest }) {
  return (
    <label style={{
      display: "inline-flex", alignItems: "center", gap: "var(--space-3)",
      fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)",
      color: disabled ? "var(--text-subtle)" : "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer", ...style,
    }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 20, height: 20, flex: "0 0 20px", borderRadius: "var(--radius-xs)",
          border: "1px solid " + (checked ? "var(--action-primary)" : "var(--border-strong)"),
          background: checked ? "var(--action-primary)" : "var(--surface-raised)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
          opacity: disabled ? 0.5 : 1,
        }}
        {...rest}
      >
        {checked ? <span data-lucide="check" style={{ width: 13, height: 13, color: "#fff", display: "inline-flex" }} /> : null}
      </span>
      {label}
    </label>
  );
}
