import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', background: '#090C08', color: '#F5F0E8' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#C8AA76', fontWeight: 900, letterSpacing: '-0.03em' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#888' }}>This page doesn&apos;t exist. But we&apos;ve got plenty that do.</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{ padding: '12px 24px', background: '#C8AA76', color: '#090C08', textDecoration: 'none', fontWeight: 700 }}>Go Home</Link>
        <Link href="/blog" style={{ padding: '12px 24px', border: '2px solid #C8AA76', color: '#C8AA76', textDecoration: 'none', fontWeight: 700 }}>Read the Blog</Link>
      </div>
    </div>
  );
}
