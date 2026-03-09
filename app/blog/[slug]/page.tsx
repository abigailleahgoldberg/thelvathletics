import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "../data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://thelvathletics.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://thelvathletics.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <main>
      {/* Post Header */}
      <div style={{
        background: "linear-gradient(160deg, var(--green) 0%, var(--dark) 60%)",
        padding: "60px 24px 48px",
        borderBottom: "3px solid var(--gold)",
      }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <Link href="/blog" style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gold)",
            opacity: 0.8,
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "20px",
          }}>
            ← All Posts
          </Link>
          <div style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "12px",
          }}>
            {post.category}
          </div>
          <h1 style={{
            fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            color: "var(--cream)",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}>
            {post.title}
          </h1>
          <div style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "0.8rem",
            color: "var(--cream)",
            opacity: 0.5,
          }}>
            {post.date} &nbsp;&bull;&nbsp; The LV Athletics
          </div>
        </div>
      </div>

      {/* Post Body */}
      <article style={{ maxWidth: "780px", margin: "0 auto", padding: "48px 24px" }}>
        <div
          className="prose-lv"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>

      {/* Post Navigation */}
      <nav style={{
        maxWidth: "780px",
        margin: "0 auto",
        padding: "32px 24px 64px",
        borderTop: "1px solid rgba(239,178,30,0.2)",
        display: "flex",
        justifyContent: "space-between",
        gap: "24px",
        flexWrap: "wrap",
      }}>
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} style={{
            flex: 1,
            minWidth: "200px",
            textDecoration: "none",
          }}>
            <div style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
              opacity: 0.7,
              marginBottom: "6px",
            }}>
              Previous
            </div>
            <div style={{ color: "var(--cream)", fontSize: "0.95rem", lineHeight: 1.4 }}>
              {prevPost.title}
            </div>
          </Link>
        ) : <div />}
        {nextPost && (
          <Link href={`/blog/${nextPost.slug}`} style={{
            flex: 1,
            minWidth: "200px",
            textDecoration: "none",
            textAlign: "right",
          }}>
            <div style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
              opacity: 0.7,
              marginBottom: "6px",
            }}>
              Next
            </div>
            <div style={{ color: "var(--cream)", fontSize: "0.95rem", lineHeight: 1.4 }}>
              {nextPost.title}
            </div>
          </Link>
        )}
      </nav>
    </main>
  );
}
