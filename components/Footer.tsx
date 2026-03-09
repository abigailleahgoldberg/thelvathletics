export default function Footer() {
  return (
    <footer style={{
      background: "var(--green)",
      padding: "28px 24px",
      textAlign: "center",
      borderTop: "3px solid var(--gold)",
    }}>
      <p style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "0.78rem",
        color: "var(--cream)",
        opacity: 0.55,
      }}>
        The LV Athletics is an independent fan site. Not affiliated with the Oakland Athletics or MLB. &copy; 2026 TheLVAthletics.com
      </p>
    </footer>
  );
}
