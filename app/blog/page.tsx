import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "./data";

export const metadata: Metadata = {
  title: "Blog -- Las Vegas A's Fan Coverage",
  description: "All posts from The LV Athletics: stadium updates, roster analysis, fan guides, history, and Las Vegas baseball coverage.",
  alternates: { canonical: "https://thelvathletics.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px" }}>
      <div style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "0.75rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--gold)",
        marginBottom: "12px",
      }}>
        The LV Athletics
      </div>
      <h1 style={{
        fontSize: "clamp(1.8rem, 4vw, 3rem)",
        color: "var(--gold)",
        lineHeight: 1.15,
        marginBottom: "8px",
      }}>
        Blog
      </h1>
      <div style={{ width: "60px", height: "3px", background: "var(--gold)", marginBottom: "40px" }} />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "28px",
      }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <article style={{
              background: "#111009",
              border: "1px solid rgba(239, 178, 30, 0.2)",
              borderRadius: "8px",
              overflow: "hidden",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{
                width: "100%",
                height: "150px",
                background: "linear-gradient(135deg, var(--green) 0%, #001a15 100%)",
                flexShrink: 0,
              }} />
              <div style={{ padding: "22px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "8px",
                }}>
                  {post.category}
                </div>
                <h2 style={{
                  fontSize: "1.05rem",
                  color: "var(--cream)",
                  lineHeight: 1.4,
                  marginBottom: "10px",
                  flex: 1,
                }}>
                  {post.title}
                </h2>
                <p style={{
                  fontSize: "0.85rem",
                  color: "var(--cream)",
                  opacity: 0.65,
                  lineHeight: 1.5,
                  marginBottom: "14px",
                }}>
                  {post.description}
                </p>
                <div style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.72rem",
                  color: "var(--gold)",
                  opacity: 0.7,
                }}>
                  {post.date}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
