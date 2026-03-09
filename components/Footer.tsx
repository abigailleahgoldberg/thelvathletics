export default function Footer() {
  return (
    <footer style={{
      background: "var(--green)",
      padding: "28px 24px",
      textAlign: "center",
      borderTop: "3px solid var(--gold)",
    }}>
      <div style={{
        marginBottom: "16px",
        fontFamily: "Arial, sans-serif",
        fontSize: "0.85rem",
        color: "var(--cream)",
        fontWeight: "bold",
        letterSpacing: "0.05em",
      }}>
        The LV Athletics Network:{" "}
        <a href="https://lvathleticsnation.com" target="_blank" rel="noopener" style={{ color: "var(--gold)", textDecoration: "none" }}>LVAthleticsNation.com</a>
        <span style={{ margin: "0 12px", opacity: 0.5 }}>|</span>
        <a href="https://thelvas.com" target="_blank" rel="noopener" style={{ color: "var(--gold)", textDecoration: "none" }}>TheLVAs.com</a>
      </div>
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
