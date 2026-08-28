"use client";
import React from "react";

export function Accordion({ items = [], defaultOpen = 0, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ fontFamily: "var(--font-body)", borderTop: "1px solid var(--border-hairline)", ...style }} {...rest}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--border-hairline)" }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%", background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-4)",
                padding: "var(--space-5) 0", textAlign: "left", font: "inherit",
                fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", fontWeight: 600,
                color: isOpen ? "var(--text-accent)" : "var(--text-heading)",
                transition: "color var(--dur-fast) var(--ease-standard)",
              }}
            >
              {it.q}
              <span data-lucide={isOpen ? "minus" : "plus"} style={{ width: 18, height: 18, flex: "0 0 18px", color: "var(--text-muted)" }} />
            </button>
            {isOpen ? (
              <p style={{ margin: "0 0 var(--space-5)", maxWidth: "68ch", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-normal)", color: "var(--text-muted)", textWrap: "pretty" }}>{it.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
