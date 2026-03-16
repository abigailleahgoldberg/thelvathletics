import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | The LV Athletics',
  description: 'Get in touch with The LV Athletics — independent Las Vegas A\'s fan coverage.',
};

export default function ContactPage() {
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

      <article style={{ maxWidth: '700px', margin: '0 auto', padding: '5rem 2rem' }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8AA76', marginBottom: '1rem' }}>Get In Touch</p>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#F5F0E8', letterSpacing: '0.04em', marginBottom: '1.5rem' }}>Contact</h1>

        <p style={{ fontSize: '0.95rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
          Got a tip, a correction, or want to collaborate? We&apos;re an independent fan outlet covering the Las Vegas Athletics. Reach out.
        </p>

        <div style={{ background: 'rgba(200,170,118,0.05)', border: '1px solid rgba(200,170,118,0.15)', padding: '2.5rem', marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8AA76', marginBottom: '1rem' }}>Email</p>
          <a href="mailto:thevoiceofcash@gmail.com" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#F5F0E8', textDecoration: 'none', letterSpacing: '0.04em' }}>
            thevoiceofcash@gmail.com
          </a>
        </div>

        <div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8AA76', marginBottom: '1rem' }}>We handle</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'rgba(245,240,232,0.6)', fontSize: '0.9rem', lineHeight: 2 }}>
            <li>Fan tips and story leads</li>
            <li>Content corrections and factual feedback</li>
            <li>Partnership and collaboration inquiries</li>
            <li>DMCA and copyright notices</li>
            <li>Advertising inquiries</li>
            <li>General questions</li>
          </ul>
        </div>

        <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.3)', marginTop: '3rem', lineHeight: 1.65 }}>
          We are an independent fan site, not affiliated with the Las Vegas Athletics or MLB. For official team inquiries, visit{' '}
          <a href="https://www.mlb.com/athletics" target="_blank" rel="noopener noreferrer" style={{ color: '#C8AA76' }}>MLB.com/athletics</a>.
        </p>
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
