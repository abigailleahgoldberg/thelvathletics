import Link from 'next/link'

export const metadata = {
  title: 'The LV Athletics -- Las Vegas A\'s Fan Hub',
  description: 'Your home for Las Vegas Athletics news, stadium updates, and fan coverage. The A\'s are coming to Vegas in 2028.',
}

const COUNTDOWN_TARGET = new Date('2028-04-01T19:05:00-07:00').getTime()

const posts = [
  { slug: 'las-vegas-athletics-stadium-update-2026', tag: 'Stadium Watch', title: 'The Ballpark: What We Know Right Now', desc: 'Construction is moving. Here is everything confirmed about the new Las Vegas A\'s stadium opening in 2028.' },
  { slug: 'las-vegas-as-roster-2026', tag: 'Roster', title: 'A\'s Roster Breakdown: 2026 Season', desc: 'Key players, holes to fill, and prospects about to arrive. Who carries this team into the Vegas era?' },
  { slug: 'john-fisher-controversy-explained', tag: 'Deep Dive', title: 'The Fisher Problem: An Honest Look', desc: 'Why Oakland fans are furious and what it means for the franchise going forward.' },
  { slug: 'las-vegas-athletics-season-tickets-guide', tag: 'Fan Guide', title: 'Season Tickets: Everything You Need to Know', desc: 'How to get on the list, what the tiers look like, and what PSL ownership might cost.' },
  { slug: 'oakland-as-world-series-history', tag: 'History', title: 'Four Championships. One Legacy.', desc: 'The dynasties, the players, the moments. The history Las Vegas inherited.' },
  { slug: 'las-vegas-sports-town-history', tag: 'Las Vegas', title: 'How Vegas Became a Real Sports Town', desc: 'Golden Knights. Raiders. Aces. And now the A\'s complete the picture.' },
]

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@400;500;600&display=swap');

        :root {
          --dark: #060804;
          --green: #003831;
          --green2: #00523F;
          --gold: #EFB21E;
          --gold2: #C8940A;
          --cream: #F5F0E8;
          --muted: rgba(245,240,232,0.55);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: var(--dark);
          color: var(--cream);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        a { color: inherit; text-decoration: none; }

        /* ---- NAV ---- */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.25rem 3rem;
          background: rgba(6,8,4,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(239,178,30,0.12);
        }
        .nav-wordmark {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 1.3rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .nav-wordmark span { color: var(--gold); }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a {
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; opacity: 0.6; transition: opacity 0.2s, color 0.2s;
        }
        .nav-links a:hover { opacity: 1; color: var(--gold); }
        .nav-cta {
          background: var(--gold); color: var(--dark) !important;
          padding: 0.5rem 1.25rem; font-family: 'Oswald', sans-serif;
          font-weight: 700 !important; letter-spacing: 0.12em !important;
          opacity: 1 !important; transition: background 0.2s !important;
        }
        .nav-cta:hover { background: var(--gold2) !important; }

        /* ---- HERO ---- */
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
        }

        /* left panel */
        .hero-left {
          background: var(--green);
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 8rem 4rem 5rem;
          position: relative;
          overflow: hidden;
        }

        /* huge ghost number */
        .hero-left::before {
          content: 'A';
          position: absolute;
          font-family: 'Oswald', sans-serif;
          font-size: 50vw;
          font-weight: 700;
          color: rgba(239,178,30,0.04);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          line-height: 1;
        }

        .hero-tag {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 2rem;
          position: relative;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .hero-tag::before {
          content: ''; width: 2.5rem; height: 2px; background: var(--gold);
        }

        .hero-h1 {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(2.8rem, 5vw, 5.5rem);
          line-height: 1.05;
          margin-bottom: 2rem;
          position: relative;
        }
        .hero-h1 em {
          font-style: normal;
          color: var(--gold);
          display: block;
        }

        .hero-sub {
          font-size: 1rem; line-height: 1.7;
          color: var(--muted);
          max-width: 380px;
          margin-bottom: 3rem;
          position: relative;
        }

        /* right panel */
        .hero-right {
          background: var(--dark);
          display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          padding: 8rem 4rem 5rem;
          border-left: 1px solid rgba(239,178,30,0.15);
          position: relative;
        }

        /* countdown clock */
        .countdown-label {
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 2.5rem;
          text-align: center;
        }

        .countdown-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
          width: 100%;
          max-width: 420px;
        }

        .countdown-cell {
          background: var(--green);
          border: 1px solid rgba(239,178,30,0.2);
          padding: 1.5rem 0.75rem 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .countdown-cell::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--gold), transparent);
        }

        .countdown-num {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 3rem;
          color: var(--gold);
          line-height: 1;
          display: block;
          font-variant-numeric: tabular-nums;
        }

        .countdown-unit {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.5;
          margin-top: 0.4rem;
          display: block;
        }

        .countdown-sub {
          font-size: 0.85rem; text-align: center;
          color: var(--muted); line-height: 1.6;
          max-width: 320px;
        }

        /* ---- DIVIDER BAR ---- */
        .divider-bar {
          background: var(--gold);
          height: 4px;
          position: relative;
          overflow: hidden;
        }
        .divider-bar::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: sweep 2.5s linear infinite;
        }
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* ---- NEWS SECTION ---- */
        .news-section {
          padding: 6rem 3rem;
          max-width: 1340px;
          margin: 0 auto;
        }
        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          border-bottom: 1px solid rgba(239,178,30,0.15);
          padding-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .section-kicker {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 0.5rem;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          line-height: 1;
        }
        .view-all {
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--gold);
          white-space: nowrap;
          transition: opacity 0.2s;
        }
        .view-all:hover { opacity: 0.7; }

        /* cards */
        .featured-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-template-rows: auto;
          gap: 1px;
          background: rgba(239,178,30,0.1);
        }
        .grid-right {
          display: flex; flex-direction: column; gap: 1px;
        }

        .post-card {
          background: var(--dark);
          padding: 2.5rem;
          transition: background 0.2s;
          cursor: pointer;
          display: block;
          color: var(--cream);
          text-decoration: none;
          position: relative;
        }
        .post-card:hover { background: rgba(0,56,49,0.2); }
        .post-card.featured { padding: 3rem; }

        .post-tag {
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--gold);
          padding: 0.25rem 0.75rem;
          border: 1px solid rgba(239,178,30,0.3);
          display: inline-block;
          margin-bottom: 1.25rem;
        }

        .post-card.featured h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.8rem);
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }
        .post-card h3 {
          font-family: 'Oswald', sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .post-desc {
          font-size: 0.9rem; line-height: 1.65;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }

        .post-read {
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold);
        }

        /* ---- STADIUM SECTION ---- */
        .stadium-section {
          background: var(--green);
          padding: 6rem 3rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .stadium-section::before {
          content: '2028';
          position: absolute;
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 40vw;
          color: rgba(0,0,0,0.2);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          line-height: 1;
        }
        .stadium-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
        .stadium-inner h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 4.5rem);
          line-height: 1.05;
          margin-bottom: 1.5rem;
        }
        .stadium-inner h2 span { color: var(--gold); }
        .stadium-inner p {
          font-size: 1.05rem; line-height: 1.75;
          color: var(--muted); margin-bottom: 3rem;
        }
        .btn-gold {
          display: inline-block;
          background: var(--gold);
          color: var(--dark);
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 3rem;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-gold:hover { background: var(--gold2); transform: translateY(-2px); }

        /* ---- EMAIL ---- */
        .email-section {
          padding: 6rem 3rem;
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }
        .email-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .email-section h2 em { font-style: italic; color: var(--gold); }
        .email-section p { color: var(--muted); font-size: 0.95rem; line-height: 1.7; margin-bottom: 2.5rem; }
        .email-row {
          display: flex;
          border: 1px solid rgba(239,178,30,0.3);
          overflow: hidden;
        }
        .email-row input {
          flex: 1; background: rgba(239,178,30,0.05);
          border: none; color: var(--cream);
          font-size: 0.95rem; padding: 1rem 1.5rem;
          outline: none; font-family: 'Inter', sans-serif;
        }
        .email-row input::placeholder { opacity: 0.4; }
        .email-row button {
          background: var(--gold); color: var(--dark);
          border: none; padding: 1rem 2rem;
          font-family: 'Oswald', sans-serif;
          font-weight: 700; font-size: 0.85rem;
          letter-spacing: 0.15em; text-transform: uppercase;
          cursor: pointer; transition: background 0.2s;
        }
        .email-row button:hover { background: var(--gold2); }

        /* ---- FOOTER ---- */
        footer {
          border-top: 1px solid rgba(239,178,30,0.12);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-wordmark {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .footer-wordmark span { color: var(--gold); }
        footer p { font-size: 0.78rem; opacity: 0.35; }

        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; }
          .hero-left { padding: 7rem 2rem 3rem; }
          .hero-right { padding: 3rem 2rem; border-left: none; border-top: 1px solid rgba(239,178,30,0.15); }
          .nav-links { display: none; }
          nav { padding: 1rem 1.5rem; }
          .featured-grid { grid-template-columns: 1fr; }
          .news-section, .stadium-section, .email-section { padding: 4rem 1.5rem; }
          footer { padding: 2rem 1.5rem; }
          .countdown-grid { gap: 0.75rem; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-wordmark">The LV <span>Athletics</span></div>
        <ul className="nav-links">
          <li><a href="#news">News</a></li>
          <li><a href="#stadium">Stadium</a></li>
          <li><a href="/blog">All Stories</a></li>
          <li><a href="#signup" className="nav-cta">Get Updates</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">Las Vegas Athletics Fan Hub</div>
          <h1 className="hero-h1">
            Las Vegas<br />is Baseball<br />
            <em>Country Now.</em>
          </h1>
          <p className="hero-sub">The primary source for Las Vegas Athletics coverage. Stadium updates, roster moves, gameday guides, and everything you need before 2028.</p>
          <Link href="/blog" className="btn-gold" style={{display:'inline-block',width:'fit-content'}}>Browse All Coverage</Link>
        </div>
        <div className="hero-right">
          <div className="countdown-label">Days Until The A&apos;s Are Home</div>
          <div className="countdown-grid">
            <div className="countdown-cell">
              <span className="countdown-num" id="cd-days">--</span>
              <span className="countdown-unit">Days</span>
            </div>
            <div className="countdown-cell">
              <span className="countdown-num" id="cd-hours">--</span>
              <span className="countdown-unit">Hours</span>
            </div>
            <div className="countdown-cell">
              <span className="countdown-num" id="cd-mins">--</span>
              <span className="countdown-unit">Mins</span>
            </div>
            <div className="countdown-cell">
              <span className="countdown-num" id="cd-secs">--</span>
              <span className="countdown-unit">Secs</span>
            </div>
          </div>
          <p className="countdown-sub">2028 Opening Day. Las Vegas Strip. The wait is real -- and so is the stadium.</p>
        </div>
      </section>

      <div className="divider-bar" />

      {/* NEWS */}
      <section className="news-section" id="news">
        <div className="section-header">
          <div>
            <div className="section-kicker">Latest Coverage</div>
            <h2 className="section-title">From The Desk</h2>
          </div>
          <Link href="/blog" className="view-all">All Stories &rarr;</Link>
        </div>
        <div className="featured-grid">
          <Link href={`/blog/${posts[0].slug}`} className="post-card featured">
            <span className="post-tag">{posts[0].tag}</span>
            <h2>{posts[0].title}</h2>
            <p className="post-desc">{posts[0].desc}</p>
            <span className="post-read">Read Full Story &rarr;</span>
          </Link>
          <div className="grid-right">
            {posts.slice(1,4).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="post-card">
                <span className="post-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p className="post-desc" style={{fontSize:'0.85rem',marginBottom:'1rem'}}>{p.desc}</p>
                <span className="post-read">Read &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STADIUM */}
      <section className="stadium-section" id="stadium">
        <div className="stadium-inner">
          <div className="section-kicker">Stadium Watch</div>
          <h2>The Most Anticipated Ballpark <span>In Baseball History.</span></h2>
          <p>$1.75 billion. On the Strip. Opening 2028. The Las Vegas A&apos;s stadium is unlike anything MLB has built in decades. We are covering every detail from groundbreaking to Opening Day.</p>
          <Link href="/blog/las-vegas-athletics-stadium-update-2026" className="btn-gold">Read The Latest Update</Link>
        </div>
      </section>

      {/* EMAIL */}
      <section className="email-section" id="signup">
        <h2>Stay Ahead Of <em>Every Move.</em></h2>
        <p>Stadium news, roster moves, and gameday guides -- delivered before the rest of the internet catches up.</p>
        <form className="email-row" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="your@email.com" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-wordmark">The LV <span>Athletics</span></div>
        <p>Fan site. Not affiliated with the Athletics organization. &copy; 2026</p>
      </footer>

      <script dangerouslySetInnerHTML={{__html:`
        function tick(){
          var t=${COUNTDOWN_TARGET}-Date.now();
          if(t<0)return;
          var d=Math.floor(t/86400000);
          var h=Math.floor((t%86400000)/3600000);
          var m=Math.floor((t%3600000)/60000);
          var s=Math.floor((t%60000)/1000);
          var pad=function(n){return String(n).padStart(2,'0');};
          document.getElementById('cd-days').textContent=d;
          document.getElementById('cd-hours').textContent=pad(h);
          document.getElementById('cd-mins').textContent=pad(m);
          document.getElementById('cd-secs').textContent=pad(s);
        }
        tick(); setInterval(tick,1000);
      `}} />
    </>
  )
}
