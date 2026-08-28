"use client";
import React from "react";
import { Badge } from "../core/Badge.js";

export function ProductCard({ name, nameJa, brand, price, oldPrice, image, badge, badgeTone = "matcha", currency = "₮", style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--font-body)", background: "var(--surface-card)",
        border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-lg)",
        overflow: "hidden", cursor: onClick ? "pointer" : "default",
        transition: "box-shadow var(--dur-normal) var(--ease-out-soft), transform var(--dur-normal) var(--ease-out-soft)",
        ...(hover ? { boxShadow: "var(--shadow-lg)", transform: "translateY(-3px)" } : { boxShadow: "var(--shadow-sm)" }),
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: "relative", aspectRatio: "1 / 1", background: "var(--washi-200) url(/assets/pattern-asanoha.svg) center/120px repeat", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {image ? (
          <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform var(--dur-slow) var(--ease-out-soft)", transform: hover ? "scale(1.04)" : "none" }} />
        ) : (
          <span style={{ fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-subtle)" }}>商品画像 · Бүтээгдэхүүний зураг</span>
        )}
        {badge ? <span style={{ position: "absolute", top: 12, left: 12 }}><Badge tone={badgeTone}>{badge}</Badge></span> : null}
      </div>
      <div style={{ padding: "var(--space-4) var(--space-5) var(--space-5)" }}>
        {brand ? <div style={{ fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-subtle)", marginBottom: 6 }}>{brand}</div> : null}
        <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", fontWeight: 600, color: "var(--text-heading)", lineHeight: "var(--leading-snug)" }}>{name}</div>
        {nameJa ? <div style={{ fontSize: "var(--text-caption)", color: "var(--text-subtle)", marginTop: 3 }}>{nameJa}</div> : null}
        <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-2)", marginTop: "var(--space-3)" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", fontWeight: 700, color: "var(--text-price)" }}>{price}{currency}</span>
          {oldPrice ? <span style={{ fontSize: "var(--text-body-sm)", color: "var(--text-subtle)", textDecoration: "line-through" }}>{oldPrice}{currency}</span> : null}
        </div>
      </div>
    </div>
  );
}
