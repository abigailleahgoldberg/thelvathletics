import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DMCA Policy | The LV Athletics',
  description: 'DMCA copyright policy for TheLVAthletics.com.',
};

export default function DMCAPage() {
  return (
    <main style={{ background: '#060907', minHeight: '100vh', color: '#F5F0E8', fontFamily: "'Inter', sans-serif" }}>
      <nav style={{ background: '#060907', borderBottom: '1px solid rgba(200,170,118,0.12)', padding: '0 3rem', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 500 }}>
        <Link href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#C8AA76', textDecoration: 'none', letterSpacing: '0.06em' }}>THE LV ATHLETICS</Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[['Blog', '/blog'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(245,240,232,0.6)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</Link>
          ))}
        </div>
      </nav>

      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8AA76', marginBottom: '1rem' }}>Legal</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#F5F0E8', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>DMCA Policy</h1>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.3)', textTransform: 'uppercase', marginBottom: '3rem' }}>Last Updated: March 2026</p>

        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75, marginBottom: '2rem' }}>
          TheLVAthletics.com respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512. If you believe content on this site infringes your copyright, please contact our designated DMCA Agent.
        </p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: '#C8AA76', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>DMCA Agent</h2>
          <div style={{ background: 'rgba(200,170,118,0.05)', border: '1px solid rgba(200,170,118,0.15)', padding: '1.5rem', lineHeight: 1.85 }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(245,240,232,0.7)' }}>
              <strong style={{ color: '#F5F0E8' }}>Designated Agent:</strong> The Voice of Cash<br />
              <strong style={{ color: '#F5F0E8' }}>Email:</strong>{' '}
              <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#C8AA76' }}>thevoiceofcash@gmail.com</a><br />
              <strong style={{ color: '#F5F0E8' }}>Website:</strong> TheLVAthletics.com
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: '#C8AA76', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Requirements for a Valid DMCA Notice</h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(245,240,232,0.7)', marginBottom: '1rem', lineHeight: 1.75 }}>Your written DMCA notice must include all of the following:</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'rgba(245,240,232,0.65)', fontSize: '0.9rem', lineHeight: 1.85 }}>
            <li style={{ marginBottom: '0.5rem' }}>A physical or electronic signature of the copyright owner or authorized person.</li>
            <li style={{ marginBottom: '0.5rem' }}>Identification of the copyrighted work claimed to have been infringed.</li>
            <li style={{ marginBottom: '0.5rem' }}>Identification of the infringing material and its location on the site (URL).</li>
            <li style={{ marginBottom: '0.5rem' }}>Your contact information (name, address, phone, email).</li>
            <li style={{ marginBottom: '0.5rem' }}>A statement of good faith belief that the use is not authorized by the copyright owner, its agent, or the law.</li>
            <li style={{ marginBottom: '0.5rem' }}>A statement under penalty of perjury that the information is accurate and you are authorized to act.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: '#C8AA76', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Counter-Notification</h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75, marginBottom: '1rem' }}>If you believe content was removed in error, you may submit a counter-notification including:</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'rgba(245,240,232,0.65)', fontSize: '0.9rem', lineHeight: 1.85 }}>
            <li style={{ marginBottom: '0.5rem' }}>Your physical or electronic signature.</li>
            <li style={{ marginBottom: '0.5rem' }}>Identification of the removed material and its prior location.</li>
            <li style={{ marginBottom: '0.5rem' }}>A statement under penalty of perjury that you have a good faith belief the removal was in error.</li>
            <li style={{ marginBottom: '0.5rem' }}>Your name, address, phone, email, and consent to federal court jurisdiction.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: '#C8AA76', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Repeat Infringer Policy</h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75 }}>
            We have adopted a policy of terminating, in appropriate circumstances, users or accounts that are repeat infringers. Send all DMCA notices to:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#C8AA76' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </article>

      <footer style={{ borderTop: '1px solid rgba(200,170,118,0.08)', padding: '3rem 3rem 2rem', background: '#060907' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {[['Disclaimer', '/disclaimer'], ['Privacy', '/privacy'], ['Terms', '/terms'], ['DMCA', '/dmca'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: 'rgba(245,240,232,0.35)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</Link>
          ))}
        </div>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.52rem', textAlign: 'center', color: 'rgba(245,240,232,0.15)', marginTop: '1.5rem', letterSpacing: '0.08em' }}>
          &copy; 2026 thelvathletics.com — Fan site. Not affiliated with the Athletics organization or MLB.
        </p>
      </footer>
    </main>
  );
}
