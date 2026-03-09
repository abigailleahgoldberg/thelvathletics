import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "./blog/data";
import Countdown from "@/components/Countdown";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "The LV Athletics -- Las Vegas A's Fan Hub",
  description: "Your home for Las Vegas Athletics news, stadium updates, and fan coverage. Independent. Local. Las Vegas.",
  alternates: { canonical: "https://thelvathletics.com" },
};

const stadiumItems = [
  { name: "Site Preparation and Grading", status: "Complete", pct: 100, note: "The 9-acre footprint at Las Vegas Boulevard South is fully prepped for vertical construction." },
  { name: "Foundation and Infrastructure", status: "In Progress", pct: 45, note: "Foundation piling and underground utility work ongoing. Estimated completion: late 2026." },
  { name: "Steel and Structural Frame", status: "Upcoming", pct: 5, note: "Structural steel delivery scheduled to begin 2027. The iconic roof frame will define the skyline." },
  { name: "Interior Fit-Out and Field", status: "Planned", pct: 0, note: "Seating, field installation, and club spaces targeted for 2027-2028. Capacity: 33,000." },
];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 6);

  return (
    <>
      {/* HERO */}
      <div style={{
        background: "linear-gradient(160deg, var(--green) 0%, var(--dark) 55%)",
        padding: "80px 24px 60px",
        textAlign: "center",
        borderBottom: "4px solid var(--gold)",
      }}>
        <div style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "20px",
        }}>
          Las Vegas Athletics Fan Hub
        </div>
        <h1 style={{
          fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
          color: "var(--gold)",
          lineHeight: 1.1,
          marginBottom: "20px",
          textShadow: "0 2px 20px rgba(0,0,0,0.5)",
        }}>
          Las Vegas is Baseball Country Now
        </h1>
        <p style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "var(--cream)",
          maxWidth: "580px",
          margin: "0 auto 48px",
          opacity: 0.9,
        }}>
          Your home for Las Vegas Athletics news, stadium updates, and fan coverage.
        </p>

        <Countdown />
      </div>

      {/* LATEST BLOG POSTS */}
      <section style={{ padding: "64px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontSize: "1.8rem", color: "var(--gold)", marginBottom: "8px" }}>
          Latest Posts
        </div>
        <div style={{ width: "60px", height: "3px", background: "var(--gold)", marginBottom: "36px" }} />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/blog" style={{
            display: "inline-block",
            padding: "12px 32px",
            background: "var(--gold)",
            color: "var(--dark)",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            borderRadius: "4px",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            textDecoration: "none",
          }}>
            All Posts
          </Link>
        </div>
      </section>

      {/* STADIUM WATCH */}
      <div id="stadium" style={{ background: "var(--green)", padding: "64px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ fontSize: "1.8rem", color: "var(--gold)", marginBottom: "8px" }}>
            Stadium Watch
          </div>
          <div style={{ width: "60px", height: "3px", background: "var(--gold)", marginBottom: "36px" }} />
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px", margin: 0, padding: 0 }}>
            {stadiumItems.map((item) => (
              <li key={item.name} style={{
                background: "rgba(0,0,0,0.3)",
                borderRadius: "8px",
                padding: "20px 24px",
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                  flexWrap: "wrap",
                  gap: "8px",
                }}>
                  <span style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    color: "var(--cream)",
                  }}>{item.name}</span>
                  <span style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "var(--gold)",
                    color: "var(--dark)",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                  }}>{item.status}</span>
                </div>
                <div style={{
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  height: "8px",
                  overflow: "hidden",
                }}>
                  <div style={{
                    height: "100%",
                    background: "var(--gold)",
                    borderRadius: "4px",
                    width: `${item.pct}%`,
                  }} />
                </div>
                <div style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.78rem",
                  color: "var(--cream)",
                  opacity: 0.6,
                  marginTop: "8px",
                }}>{item.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* EMAIL SIGNUP */}
      <div id="signup" style={{
        background: "var(--dark)",
        padding: "64px 24px",
        textAlign: "center",
        borderTop: "1px solid rgba(239,178,30,0.15)",
      }}>
        <div style={{ fontSize: "1.8rem", color: "var(--gold)", marginBottom: "10px" }}>
          Get LV A&apos;s Updates
        </div>
        <p style={{
          color: "var(--cream)",
          opacity: 0.7,
          marginBottom: "28px",
          fontFamily: "Arial, sans-serif",
          fontSize: "0.95rem",
        }}>
          Stadium news, game coverage, and fan alerts delivered to your inbox.
        </p>
        <SignupForm />
      </div>
    </>
  );
}

function SignupForm() {
  return (
    <form
      style={{
        display: "flex",
        gap: "12px",
        maxWidth: "460px",
        margin: "0 auto",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
      action="#"
      method="POST"
    >
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
        style={{
          flex: 1,
          minWidth: "220px",
          padding: "12px 16px",
          background: "#1a1600",
          border: "1px solid rgba(239,178,30,0.4)",
          borderRadius: "4px",
          color: "var(--cream)",
          fontSize: "0.95rem",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "12px 24px",
          background: "var(--gold)",
          color: "var(--dark)",
          border: "none",
          borderRadius: "4px",
          fontFamily: "Arial, sans-serif",
          fontSize: "0.9rem",
          fontWeight: "bold",
          letterSpacing: "0.05em",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </form>
  );
}
