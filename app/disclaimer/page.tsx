import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | The LV Athletics',
  description: 'Disclaimer for TheLVAthletics.com — independent fan coverage of the Las Vegas Athletics.',
};

export default function DisclaimerPage() {
  return (
    <main style={{ background: '#060907', minHeight: '100vh', color: '#F5F0E8', fontFamily: "'Inter', sans-serif" }}>
      {/* Nav */}
      <nav style={{ background: '#060907', borderBottom: '1px solid rgba(200,170,118,0.12)', padding: '0 3rem', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 500 }}>
        <Link href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.2rem', color: '#C8AA76', textDecoration: 'none', letterSpacing: '0.06em' }}>
          THE LV ATHLETICS
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[['Blog', '/blog'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(245,240,232,0.6)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</Link>
          ))}
        </div>
      </nav>

      {/* Content */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8AA76', marginBottom: '1rem' }}>Legal</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#F5F0E8', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>Disclaimer</h1>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.3)', textTransform: 'uppercase', marginBottom: '3rem' }}>Last Updated: March 2026</p>

        {[
          {
            title: 'Entertainment Purposes Only',
            body: 'All content published on TheLVAthletics.com — including articles, analysis, stadium coverage, roster breakdowns, and commentary — is provided for entertainment and informational purposes only. Nothing on this site constitutes professional sports advice, financial advice, or wagering advice of any kind.',
          },
          {
            title: 'No Affiliation with MLB or the Athletics',
            body: 'TheLVAthletics.com is an independent fan site. We are not affiliated with, endorsed by, or connected to Major League Baseball (MLB), the Las Vegas Athletics, the Oakland Athletics, or any other professional sports organization, team, or league. All team names, logos, and trademarks are the property of their respective owners.',
          },
          {
            title: 'Betting & Gambling Content',
            body: 'Any content related to sports betting, odds analysis, or wagering on this site is provided strictly for entertainment purposes. We do not encourage or facilitate illegal gambling. Gambling involves significant financial risk. Please gamble responsibly. If you or someone you know has a gambling problem, contact the National Problem Gambling Helpline at 1-800-522-4700.',
          },
          {
            title: 'AI-Generated Content',
            body: 'Some content on this site may be generated or assisted by artificial intelligence tools. While we make reasonable efforts to ensure accuracy, AI-generated content may contain errors, outdated information, or inaccuracies. Always verify important information through official sources such as MLB.com.',
          },
          {
            title: 'External Links',
            body: 'This site contains links to third-party websites, including ticket providers and external media. We have no control over the content, privacy policies, or practices of those sites and accept no responsibility for them. External links are provided for convenience and informational purposes only.',
          },
          {
            title: 'Accuracy of Information',
            body: 'While we strive to provide accurate and up-to-date sports news and analysis, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of any information on this site. Roster information, stadium details, and schedules may change without notice.',
          },
        ].map(({ title, body }) => (
          <section key={title} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: '#C8AA76', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>{title}</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75 }}>{body}</p>
          </section>
        ))}

        <section>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: '#C8AA76', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Contact</h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.75 }}>
            Questions about this disclaimer? Email us at{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#C8AA76' }}>thevoiceofcash@gmail.com</a>.
          </p>
        </section>
      </article>

      {/* Footer */}
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
