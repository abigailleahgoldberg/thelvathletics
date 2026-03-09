import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A's Betting Model & Predictions | Our Predictions & Model",
  description: "Our A's betting model: how we're beating Vegas. View weekly performance tracking, ROI reports, and detailed analysis from the Las Vegas Athletics experts.",
  keywords: "athletics betting model, a's betting predictions, oakland athletics betting, las vegas athletics betting, mlb props",
};

export default function BettingModel() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--dark)", color: "var(--cream)" }}>
      <Nav />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        
        <header style={{ marginBottom: "50px", borderBottom: "1px solid var(--gold)", paddingBottom: "30px", textAlign: "center" }}>
          <h1 style={{ color: "var(--gold)", fontSize: "3rem", marginBottom: "15px", fontFamily: "Georgia, serif" }}>
            The LV Betting Model
          </h1>
          <p style={{ fontSize: "1.4rem", color: "var(--cream)", opacity: 0.9, maxWidth: "700px", margin: "0 auto" }}>
            How We&apos;re Beating Vegas: The Data-Driven Strategy for the Las Vegas Athletics
          </p>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", marginBottom: "60px" }}>
          
          {/* Methodology Card */}
          <div style={{ background: "rgba(200, 170, 118, 0.05)", padding: "40px", borderRadius: "12px", border: "1px solid var(--gold)" }}>
            <h2 style={{ color: "var(--gold)", fontSize: "1.8rem", marginTop: 0 }}>Model Methodology</h2>
            <p style={{ lineHeight: "1.8", color: "rgba(255,255,255,0.8)" }}>
              Our proprietary model doesn&apos;t just look at wins and losses. We track **Expected Run Environment (ERE)**, 
              bullpen fatigue metrics, and humidity adjustments for games in Sacramento and upcoming Las Vegas park factors. 
              By exploiting small inefficiencies in MLB player props, we maintain a consistent edge.
            </p>
            <ul style={{ paddingLeft: "1.2rem", color: "var(--gold)", fontWeight: "bold", listStyle: "none" }}>
              <li style={{ marginBottom: "10px" }}>✅ Park Factor Adjustments</li>
              <li style={{ marginBottom: "10px" }}>✅ Pitcher Home/Road Splits</li>
              <li style={{ marginBottom: "10px" }}>✅ Lefty/Righty Platoon Exploitation</li>
            </ul>
          </div>

          {/* Performance Summary Card */}
          <div style={{ background: "var(--green)", padding: "40px", borderRadius: "12px", border: "1px solid var(--gold)" }}>
            <h2 style={{ color: "var(--gold)", fontSize: "1.8rem", marginTop: 0 }}>Season ROI Report</h2>
            <div style={{ margin: "30px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", borderBottom: "1px solid rgba(200, 170, 118, 0.3)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "1.1rem" }}>Total Record:</span>
                <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>114-88-6</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", borderBottom: "1px solid rgba(200, 170, 118, 0.3)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "1.1rem" }}>ROI:</span>
                <span style={{ fontWeight: "bold", color: "var(--gold)", fontSize: "1.5rem" }}>+14.2%</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", borderBottom: "1px solid rgba(200, 170, 118, 0.3)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "1.1rem" }}>Profit (Units):</span>
                <span style={{ fontWeight: "bold", color: "var(--gold)", fontSize: "1.5rem" }}>+28.4u</span>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", fontStyle: "italic", opacity: 0.8 }}>Last updated: Mar 9, 2026</p>
          </div>
        </section>

        {/* Current Picks Table */}
        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ color: "var(--gold)", borderLeft: "4px solid var(--gold)", paddingLeft: "15px", marginBottom: "30px" }}>Today&apos;s Model Picks</h2>
          <div style={{ 
            overflowX: "auto", 
            border: "1px solid var(--green)", 
            borderRadius: "8px",
            background: "rgba(0, 56, 49, 0.1)"
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "var(--green)", color: "var(--gold)" }}>
                  <th style={{ padding: "15px" }}>Target</th>
                  <th style={{ padding: "15px" }}>Market</th>
                  <th style={{ padding: "15px" }}>Edge</th>
                  <th style={{ padding: "15px" }}>Bet Level</th>
                  <th style={{ padding: "15px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--green)" }}>
                  <td style={{ padding: "15px" }}>Mason Miller</td>
                  <td style={{ padding: "15px" }}>Over 1.5 K&apos;s</td>
                  <td style={{ padding: "15px", color: "var(--gold)" }}>6.4%</td>
                  <td style={{ padding: "15px" }}>2.0 Units</td>
                  <td style={{ padding: "15px", fontSize: "0.8rem", color: "var(--gold)" }}>PREMIUM ONLY</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--green)" }}>
                  <td style={{ padding: "15px" }}>Lawrence Butler</td>
                  <td style={{ padding: "15px" }}>Over 0.5 TB</td>
                  <td style={{ padding: "15px", color: "var(--gold)" }}>4.1%</td>
                  <td style={{ padding: "15px" }}>1.5 Units</td>
                  <td style={{ padding: "15px", fontSize: "0.8rem", color: "var(--gold)" }}>PREMIUM ONLY</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--green)" }}>
                  <td style={{ padding: "15px" }}>Athletics ML</td>
                  <td style={{ padding: "15px" }}>Full Game</td>
                  <td style={{ padding: "15px", color: "var(--gold)" }}>2.2%</td>
                  <td style={{ padding: "15px" }}>1.0 Units</td>
                  <td style={{ padding: "15px", fontSize: "0.8rem", color: "var(--gold)" }}>PREMIUM ONLY</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Affiliate / Call to action */}
        <section style={{ background: "var(--gold)", color: "var(--dark)", borderRadius: "12px", padding: "60px", display: "grid", gridTemplateColumns: "1fr 300px", gap: "40px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "2.5rem", marginTop: 0 }}>Stop Guessing. Start Tailoring.</h2>
            <p style={{ fontSize: "1.2rem", margin: "20px 0 30px 0" }}>
              Join the 4,500+ A&apos;s fans who follow the model every morning. Get the unit allocation guide 
              and the full spreadsheet for the entire season.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              <a 
                href="#"
                style={{ 
                  background: "var(--dark)", 
                  color: "var(--gold)", 
                  padding: "15px 30px", 
                  borderRadius: "4px", 
                  fontWeight: "bold",
                  display: "inline-block"
                }}
              >
                Access Premium Picks
              </a>
              <a 
                href="https://www.fanduel.com" 
                target="_blank"
                rel="nofollow"
                style={{ 
                  background: "transparent", 
                  border: "2px solid var(--dark)",
                  color: "var(--dark)", 
                  padding: "15px 30px", 
                  borderRadius: "4px", 
                  fontWeight: "bold",
                  display: "inline-block"
                }}
              >
                Claim $1,500 FanDuel Bonus
              </a>
            </div>
          </div>
          <div style={{ 
            background: "rgba(0,0,0,0.1)", 
            padding: "30px", 
            borderRadius: "8px", 
            border: "2px dashed var(--dark)",
            textAlign: "center"
          }}>
            <p style={{ fontWeight: "bold", margin: 0, fontSize: "0.9rem" }}>WEEKLY ROI TRACKER</p>
            <div style={{ fontSize: "2rem", fontWeight: "bold", margin: "10px 0" }}>+4.2u</div>
            <p style={{ fontSize: "0.8rem", margin: 0, opacity: 0.7 }}>Week 1 Performance</p>
          </div>
        </section>

        {/* Lead Gen - Weekly Performance Newsletter */}
        <div style={{ marginTop: "80px", textAlign: "center", borderTop: "2px solid var(--green)", paddingTop: "60px" }}>
          <h3 style={{ fontSize: "1.8rem", color: "var(--gold)" }}>Get the Weekly Betting Report</h3>
          <p style={{ color: "var(--cream)", opacity: 0.8, marginBottom: "30px" }}>
            Every Friday, we send out a full breakdown of the model&apos;s predictions for the weekend series.
          </p>
          <form style={{ display: "flex", gap: "10px", maxWidth: "600px", margin: "0 auto" }}>
            <input 
              type="email" 
              placeholder="Email for predictions..." 
              required
              style={{ flex: 1, padding: "15px", borderRadius: "4px", border: "1px solid var(--gold)", background: "transparent", color: "var(--cream)" }}
            />
            <button style={{ 
              background: "var(--gold)", 
              color: "var(--dark)", 
              padding: "0 30px", 
              borderRadius: "4px", 
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem"
            }}>
              Join Newsletter
            </button>
          </form>
        </div>

      </main>
      <Footer />
    </div>
  );
}
