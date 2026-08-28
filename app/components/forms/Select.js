"use client";
import React from "react";

export function Select({ label, options = [], value, onChange, disabled, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "block", fontFamily: "var(--font-body)", ...style }}>
      {label ? (
        <span style={{ display: "block", fontSize: "var(--text-body-sm)", fontWeight: 500, color: "var(--text-body)", marginBottom: "var(--space-2)" }}>{label}</span>
      ) : null}
      <span style={{ display: "block", position: "relative" }}>
        <select
          value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: "100%", height: 44, padding: "0 38px 0 14px", appearance: "none",
            font: "inherit", fontSize: "var(--text-body-md)", color: "var(--text-body)",
            background: disabled ? "var(--washi-200)" : "var(--surface-raised)",
            border: "1px solid " + (focus ? "var(--border-focus)" : "var(--border-hairline)"),
            borderRadius: "var(--radius-sm)", outline: "none",
            boxShadow: focus ? "var(--ring-focus)" : "none",
          }}
          {...rest}
        >
          {options.map((o) => {
            const opt = typeof o === "string" ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <span data-lucide="chevron-down" style={{ position: "absolute", right: 14, top: 14, width: 16, height: 16, color: "var(--text-subtle)", pointerEvents: "none" }} />
      </span>
    </label>
  );
}
