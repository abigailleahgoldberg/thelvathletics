import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{
      background: "var(--green)",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "60px",
      position: "sticky",
      top: 0,
      zIndex: 100,
      borderBottom: "3px solid var(--gold)",
    }}>
      <Link href="/" style={{
        fontSize: "1.25rem",
        fontWeight: "bold",
        color: "var(--gold)",
        letterSpacing: "0.05em",
        fontFamily: "Arial, sans-serif",
        textDecoration: "none",
      }}>
        THE LV ATHLETICS
      </Link>
      <ul style={{
        display: "flex",
        gap: "28px",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}>
        <li>
          <Link href="/blog" style={{
            color: "var(--cream)",
            fontSize: "0.9rem",
            letterSpacing: "0.04em",
            fontFamily: "Arial, sans-serif",
          }}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/#stadium" style={{
            color: "var(--cream)",
            fontSize: "0.9rem",
            letterSpacing: "0.04em",
            fontFamily: "Arial, sans-serif",
          }}>
            Stadium Watch
          </Link>
        </li>
        <li>
          <Link href="/#signup" style={{
            color: "var(--cream)",
            fontSize: "0.9rem",
            letterSpacing: "0.04em",
            fontFamily: "Arial, sans-serif",
          }}>
            Updates
          </Link>
        </li>
      </ul>
    </nav>
  );
}
