export default function Footer() {
  return (
    <footer style={{
      background: "var(--green)",
      padding: "28px 24px",
      textAlign: "center",
      borderTop: "3px solid var(--gold)",
    }}>
      <div style={{
        marginBottom: "8px",
        fontFamily: "Arial, sans-serif",
        fontSize: "0.65rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--gold)",
      }}>
        A&apos;s Coverage Network
      </div>
      <div style={{
        marginBottom: "16px",
        fontFamily: "Arial, sans-serif",
        fontSize: "0.85rem",
        color: "var(--cream)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
      }}>
        <a href="https://thelvathletics.com" style={{ color: "var(--gold)", textDecoration: "none", fontWeight: "bold" }}>TheLVAthletics.com</a>
        <span style={{ opacity: 0.4 }}>|</span>
        <a href="https://thelvas.com" style={{ color: "var(--gold)", textDecoration: "none" }}>TheLVAs.com</a>
        <span style={{ opacity: 0.4 }}>|</span>
        <a href="https://lvathleticsnation.com" style={{ color: "var(--gold)", textDecoration: "none" }}>LVAthleticsNation.com</a>
        <span style={{ opacity: 0.4 }}>|</span>
        <a href="https://thevoiceofcash.com" style={{ color: "rgba(250,250,248,0.5)", textDecoration: "none", fontSize: "0.78rem" }}>TheVoiceOfCash.com</a>
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
