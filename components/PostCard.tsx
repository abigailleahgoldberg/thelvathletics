"use client";

import Link from "next/link";
import { useState } from "react";
import type { Post } from "@/app/blog/data";

export default function PostCard({ post }: { post: Post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#111009",
          border: `1px solid ${hovered ? "var(--gold)" : "rgba(239, 178, 30, 0.2)"}`,
          borderRadius: "8px",
          overflow: "hidden",
          transition: "border-color 0.2s",
          height: "100%",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{
          width: "100%",
          height: "140px",
          background: "linear-gradient(135deg, var(--green) 0%, #001a15 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5rem",
        }}>
          {post.emoji}
        </div>
        <div style={{ padding: "20px" }}>
          <div style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "8px",
          }}>
            {post.category}
          </div>
          <div style={{
            fontSize: "1.05rem",
            color: "var(--cream)",
            marginBottom: "8px",
            lineHeight: 1.4,
          }}>
            {post.title}
          </div>
          <div style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "0.75rem",
            color: "var(--cream)",
            opacity: 0.5,
          }}>
            {post.date}
          </div>
        </div>
      </div>
    </Link>
  );
}
