import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A's Trade Value Calculator | Athletics Trade Rumors",
  description: "What would the A's get in a trade? Use our interactive baseball trade calculator to analyze player values, contract status, and Athletics trade rumors.",
  keywords: "athletics trade rumors, baseball trade calculator, oakland athletics trades, las vegas athletics trades, mlb trade value",
};

export default function TradeCalculator() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--dark)", color: "var(--cream)" }}>
      <Nav />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "40px" }}>
          
          {/* Main Content */}
          <section>
            <h1 style={{ color: "var(--gold)", fontSize: "2.5rem", marginBottom: "20px", fontFamily: "Georgia, serif" }}>
              Athletics Trade Value Calculator
            </h1>
            <p style={{ fontSize: "1.1rem", marginBottom: "30px", opacity: 0.9 }}>
              Analyze potential deals for current A&apos;s stars and prospects. Our model factors in remaining team control, 
              surplus value, and positional scarcity to determine what the Las Vegas Athletics could fetch on the open market.
            </p>

            {/* Interactive Concept Placeholder */}
            <div style={{ 
              background: "rgba(0, 56, 49, 0.3)", 
              border: "1px solid var(--green)", 
              borderRadius: "12px", 
              padding: "40px",
              textAlign: "center",
              marginBottom: "40px"
            }}>
              <h2 style={{ color: "var(--gold)", marginBottom: "20px" }}>Interactive Calculator Coming Soon</h2>
              <p style={{ marginBottom: "30px" }}>We are refining our algorithmic model to provide real-time trade simulations.</p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid var(--green)" }}>
                  <span>Select Player:</span>
                  <select style={{ background: "var(--dark)", color: "var(--gold)", border: "1px solid var(--gold)", padding: "5px" }}>
                    <option>Mason Miller (CP)</option>
                    <option>Shea Langeliers (C)</option>
                    <option>Lawrence Butler (OF)</option>
                    <option>JJ Bleday (OF)</option>
                    <option>Zack Gelof (2B)</option>
                  </select>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid var(--green)" }}>
                  <span>Contract Status:</span>
                  <span style={{ color: "var(--gold)" }}>Pre-Arb</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid var(--green)" }}>
                  <span>Estimated Trade Value:</span>
                  <span style={{ fontWeight: "bold", color: "var(--gold)" }}>85.5 (Elite Asset)</span>
                </div>
              </div>
            </div>

            <article className="prose-lv">
              <h2>What Would [Player] Get in a Trade?</h2>
              <p>
                When evaluating Athletics trade rumors, the primary factor is always <strong>surplus value</strong>. Since the A&apos;s 
                typically operate with lower payrolls, players like Mason Miller or Lawrence Butler hold immense value because 
                they provide elite production at a fraction of market cost.
              </p>
              <h3>Player Values & Contract Analysis</h3>
              <p>
                A player with 4+ years of team control is significantly more valuable than a rental, regardless of talent gap. 
                Our model weighs this control heavily, alongside adjusted OPS+ and Statcast durability metrics.
              </p>
              <h3>Team Needs and Market Dynamics</h3>
              <p>
                Trade value isn&apos;t static. It fluctuates based on the desperation of contenders. A team losing their 
                starting shortstop in June will pay a 20-30% premium over the winter market rate.
              </p>
            </article>

            {/* Email Capture */}
            <div style={{ 
              background: "var(--green)", 
              padding: "30px", 
              borderRadius: "8px", 
              marginTop: "40px",
              border: "2px solid var(--gold)"
            }}>
              <h3 style={{ color: "var(--gold)", marginTop: 0 }}>Get Early Access to the Full Trade Model</h3>
              <p>Join our insiders list to receive the full trade value spreadsheet and breaking rumors analysis.</p>
              <form style={{ display: "flex", gap: "10px" }}>
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  style={{ flex: 1, padding: "12px", borderRadius: "4px", border: "none", background: "var(--cream)", color: "var(--dark)" }}
                />
                <button style={{ 
                  background: "var(--gold)", 
                  color: "var(--dark)", 
                  padding: "0 20px", 
                  borderRadius: "4px", 
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer"
                }}>
                  Join Insiders
                </button>
              </form>
            </div>
          </section>

          {/* Sidebar */}
          <aside>
            <div style={{ 
              border: "1px solid var(--gold)", 
              padding: "20px", 
              borderRadius: "8px", 
              textAlign: "center",
              background: "rgba(200, 170, 118, 0.05)"
            }}>
              <h4 style={{ color: "var(--gold)", margin: "0 0 10px 0", fontSize: "0.8rem", letterSpacing: "1px" }}>PARTNER OFFER</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--gold)", fontWeight: "bold" }}>DraftKings DFS Special</p>
              <p style={{ fontSize: "0.8rem", marginBottom: "15px" }}>Think you know player value? Put it to the test on DraftKings.</p>
              <a 
                href="https://www.draftkings.com" 
                target="_blank" 
                rel="nofollow"
                style={{ 
                  display: "block", 
                  background: "var(--gold)", 
                  color: "var(--dark)", 
                  padding: "10px", 
                  borderRadius: "4px", 
                  fontWeight: "bold",
                  fontSize: "0.9rem"
                }}
              >
                Claim DFS Bonus
              </a>
            </div>

            <div style={{ marginTop: "30px" }}>
              <h4 style={{ color: "var(--gold)", fontSize: "0.9rem", borderBottom: "1px solid var(--green)", paddingBottom: "10px" }}>Top Trade Candidates</h4>
              <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
                <li style={{ padding: "8px 0", borderBottom: "1px solid rgba(0, 56, 49, 0.5)" }}>Mason Miller - <span style={{ color: "var(--gold)" }}>High</span></li>
                <li style={{ padding: "8px 0", borderBottom: "1px solid rgba(0, 56, 49, 0.5)" }}>Lawrence Butler - <span style={{ color: "var(--gold)" }}>Untouchable</span></li>
                <li style={{ padding: "8px 0", borderBottom: "1px solid rgba(0, 56, 49, 0.5)" }}>Shea Langeliers - <span style={{ color: "var(--gold)" }}>High</span></li>
              </ul>
            </div>
          </aside>

        </div>
      </main>
      <Footer />
    </div>
  );
}
