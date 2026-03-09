import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Premium A's Analytics Dashboard | Analytics & Advanced Stats",
  description: "A's advanced stats hub. View player metrics, prospect rankings, and Athletics payroll trackers for the Las Vegas Athletics.",
  keywords: "athletics advanced stats, athletics payroll tracker, las vegas athletics stats, athletics prospect rankings",
};

export default function AnalyticsDashboard() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--dark)", color: "var(--cream)" }}>
      <Nav />
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        
        <header style={{ marginBottom: "50px", borderBottom: "1px solid var(--green)", paddingBottom: "20px" }}>
          <h1 style={{ color: "var(--gold)", fontSize: "2.5rem", marginBottom: "10px", fontFamily: "Georgia, serif" }}>
            A&apos;s Advanced Stats Hub
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--gold)", fontStyle: "italic" }}>
            The definitive analytics source for the Las Vegas Athletics.
          </p>
        </header>

        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          
          {/* Dashboard Item 1: Player Metrics */}
          <div style={{ 
            background: "rgba(0, 56, 49, 0.2)", 
            padding: "30px", 
            borderRadius: "12px", 
            border: "1px solid var(--green)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}>
            <h2 style={{ color: "var(--gold)", fontSize: "1.5rem", marginTop: 0 }}>Player Efficiency Index</h2>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Real-time adjusted WAR and Statcast percentile averages.</p>
            <div style={{ margin: "25px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>Mason Miller</span>
                <span style={{ color: "var(--gold)" }}>99.2 (Elite)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>Lawrence Butler</span>
                <span style={{ color: "var(--gold)" }}>91.5 (High)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>JJ Bleday</span>
                <span style={{ color: "var(--gold)" }}>78.9 (Above Avg)</span>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", fontStyle: "italic" }}>Data updated every Sunday.</p>
          </div>

          {/* Dashboard Item 2: Prospect Rankings */}
          <div style={{ 
            background: "rgba(0, 56, 49, 0.2)", 
            padding: "30px", 
            borderRadius: "12px", 
            border: "1px solid var(--green)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}>
            <h2 style={{ color: "var(--gold)", fontSize: "1.5rem", marginTop: 0 }}>The LV Athletics Top 30</h2>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Ranking the highest upside talent in the A&apos;s system.</p>
            <div style={{ margin: "25px 0" }}>
              <ol style={{ paddingLeft: "1.5rem", color: "var(--gold)", fontWeight: "bold" }}>
                <li style={{ padding: "8px 0", color: "var(--cream)" }}>Nick Kurtz (1B) - <span style={{ color: "var(--gold)" }}>ETA 2026/27</span></li>
                <li style={{ padding: "8px 0", color: "var(--cream)" }}>Jacob Wilson (SS) - <span style={{ color: "var(--gold)" }}>Active</span></li>
                <li style={{ padding: "8px 0", color: "var(--cream)" }}>Luis Morales (RHP) - <span style={{ color: "var(--gold)" }}>ETA 2026</span></li>
              </ol>
            </div>
            <p style={{ 
              background: "var(--gold)", 
              color: "var(--dark)", 
              padding: "10px", 
              fontSize: "0.8rem", 
              textAlign: "center", 
              borderRadius: "4px", 
              fontWeight: "bold" 
            }}>
              Monthly prospect ranking updates exclusively for premium members.
            </p>
          </div>

          {/* Dashboard Item 3: Payroll Tracker */}
          <div style={{ 
            background: "rgba(0, 56, 49, 0.2)", 
            padding: "30px", 
            borderRadius: "12px", 
            border: "1px solid var(--green)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}>
            <h2 style={{ color: "var(--gold)", fontSize: "1.5rem", marginTop: 0 }}>Athletics Payroll Tracker</h2>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>Current luxury tax calculation and dead money analysis.</p>
            <div style={{ margin: "25px 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span>Active Payroll:</span>
                <span style={{ fontWeight: "bold" }}>$68,450,000</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span>Retained Salary:</span>
                <span style={{ fontWeight: "bold" }}>$4,200,000</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <span>Projected Arb (2027):</span>
                <span style={{ fontWeight: "bold", color: "var(--gold)" }}>$18,900,000</span>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>A&apos;s projected payroll remains 26th in MLB.</p>
          </div>
        </section>

        {/* Premium Gate */}
        <div style={{ 
          background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 40px", 
          borderRadius: "12px", 
          marginTop: "60px",
          border: "3px solid var(--gold)",
          textAlign: "center",
          position: "relative"
        }}>
          <div style={{ color: "var(--gold)", fontWeight: "bold", fontSize: "0.8rem", letterSpacing: "2px", marginBottom: "10px" }}>PREMIUM ACCESS ONLY</div>
          <h2 style={{ fontSize: "2.5rem", color: "var(--cream)", marginTop: 10, margin: "0 auto", maxWidth: "800px" }}>
            The Full Advanced Stats Hub is Locked
          </h2>
          <p style={{ fontSize: "1.1rem", margin: "20px auto 40px auto", maxWidth: "600px", color: "rgba(255,255,255,0.9)" }}>
            Unlock every metric, every scout&apos;s report, and the full salary tracker database 
            for the cost of one ballpark beer per year.
          </p>
          
          <form style={{ display: "flex", gap: "10px", maxWidth: "500px", margin: "0 auto" }}>
            <input 
              type="email" 
              placeholder="Your email address..." 
              required
              style={{ flex: 1, padding: "15px", borderRadius: "4px", border: "none", background: "var(--cream)", color: "var(--dark)" }}
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
              Go Premium
            </button>
          </form>
          <p style={{ fontSize: "0.8rem", marginTop: "20px", color: "var(--gold)" }}>
            Already a member? <a href="#" style={{ textDecoration: "underline" }}>Log in here</a>.
          </p>
        </div>

        {/* Affiliate Section */}
        <section style={{ marginTop: "80px", textAlign: "center", padding: "40px", borderTop: "1px solid var(--green)" }}>
          <h3 style={{ color: "var(--gold)" }}>Our Trusted Analytics Partners</h3>
          <p>Get deep, narrative-driven analysis with a subscription to The Athletic.</p>
          <a 
            href="https://theathletic.com" 
            target="_blank" 
            rel="nofollow"
            style={{ 
              display: "inline-block", 
              border: "2px solid var(--gold)", 
              color: "var(--gold)", 
              padding: "12px 30px", 
              borderRadius: "4px", 
              fontWeight: "bold",
              marginTop: "10px"
            }}
          >
            Get 50% Off The Athletic
          </a>
        </section>

      </main>
      <Footer />
    </div>
  );
}
