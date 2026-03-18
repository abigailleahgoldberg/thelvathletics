"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { getAllPosts } from './blog/data'

const TARGET = new Date('2028-04-01T19:05:00-07:00').getTime()

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

export default function Home() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState<'latest' | 'stadium' | 'roster'>('latest')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const posts = getAllPosts()
  const latest = posts.slice(0, 6)
  const hero = latest[0]
  const sidebar = latest.slice(1, 4)
  const more = latest.slice(4, 6)

  useEffect(() => {
    setMounted(true)
    const tick = () => {
      const diff = TARGET - Date.now()
      if (diff <= 0) return
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  const categories = [...new Set(posts.map(p => p.category))]

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "The LV Athletics",
    "url": "https://thelvathletics.com",
    "logo": "https://thelvathletics.com/logo.png",
    "sameAs": [
      "https://twitter.com/thelvathletics",
      "https://facebook.com/thelvathletics"
    ],
    "description": "Independent editorial coverage of the Las Vegas Athletics. Stadium updates, roster analysis, and the untold stories of a franchise finding its desert home."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
        body { background: #060907; color: #F5F0E8; overflow-x: hidden; font-family: 'Inter', system-ui, sans-serif; }
        a { color: inherit; text-decoration: none; }

        ::selection { background: #C8AA76; color: #060907; }

        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(200,170,118,0.6); } 50% { box-shadow: 0 0 0 14px rgba(200,170,118,0); } }
        @keyframes float-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes grain { 0%, 100% { transform: translate(0, 0); } 10% { transform: translate(-5%, -10%); } 20% { transform: translate(-15%, 5%); } 30% { transform: translate(7%, -25%); } 40% { transform: translate(-5%, 25%); } 50% { transform: translate(-15%, 10%); } 60% { transform: translate(15%, 0%); } 70% { transform: translate(0%, 15%); } 80% { transform: translate(3%, 35%); } 90% { transform: translate(-10%, 10%); } }
        @keyframes glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        @keyframes line-draw { from { width: 0; } to { width: 100%; } }

        .grain::before {
          content: '';
          position: absolute;
          inset: -50%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)'/%3E%3C/svg%3E");
          opacity: 0.035;
          animation: grain 8s steps(10) infinite;
          pointer-events: none;
          z-index: 1;
        }

        .hover-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
        .hover-card:hover { transform: translateY(-4px); }
        .hover-card:hover .card-img { transform: scale(1.05); }
        .card-img { transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }

        .nav-link { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(245,240,232,0.5); transition: color 0.2s; }
        .nav-link:hover { color: #C8AA76; }

        .tab-btn { font-family: 'DM Mono', monospace; font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; padding: 0.8rem 1.8rem; border: 1px solid rgba(200,170,118,0.2); background: transparent; color: rgba(245,240,232,0.5); cursor: pointer; transition: all 0.2s; }
        .tab-btn:hover { border-color: rgba(200,170,118,0.5); color: #C8AA76; }
        .tab-btn.active { background: #003831; border-color: #C8AA76; color: #C8AA76; }

        .cta-btn { display: inline-flex; align-items: center; gap: 0.75rem; font-family: 'DM Mono', monospace; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: #C8AA76; border: 1px solid #C8AA76; padding: 0.9rem 2rem; transition: all 0.25s; background: transparent; cursor: pointer; }
        .cta-btn:hover { background: #C8AA76; color: #060907; }

        .stat-num { font-family: 'Bebas Neue', sans-serif; font-size: clamp(3.5rem, 7vw, 6rem); color: #C8AA76; line-height: 0.9; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-sidebar { display: none !important; }
          .blog-grid-3 { grid-template-columns: 1fr !important; }
          .stat-row { grid-template-columns: repeat(2, 1fr) !important; }
          .story-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .desktop-nav { display: none !important; }
          .countdown-row { gap: 0.4rem !important; }
          .countdown-cell { min-width: 55px !important; padding: 0.6rem !important; }
          .countdown-num { font-size: 2.2rem !important; }
          .hero-hl { font-size: 3.5rem !important; }
          .mobile-toggle { display: flex !important; }
          .section-pad { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        }
        @media (max-width: 600px) {
          .countdown-cell { min-width: 48px !important; }
          .hero-hl { font-size: 2.8rem !important; }
        }
      `}</style>

      {/* ============ BREAKING TICKER ============ */}
      <div style={{
        background: '#003831',
        overflow: 'hidden',
        padding: '0.55rem 0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001,
      }}>
        <div style={{
          display: 'inline-flex',
          animation: 'ticker 50s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {[0, 1].map(i => (
            <span key={i} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C8AA76',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2.5rem',
              paddingRight: '2.5rem',
            }}>
              <span>⬥ Opening Day 2028 — The Desert Awaits</span>
              <span>⬥ Stadium Construction On Track — Latest Updates</span>
              <span>⬥ Oakland Roots. Vegas Future. Forever Green &amp; Gold.</span>
              <span>⬥ 17 Stories. Independent Coverage. Zero Corporate Spin.</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ NAV ============ */}
      <nav style={{
        position: 'fixed',
        top: '28px',
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrollY > 50 ? 'rgba(6,9,7,0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(12px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(200,170,118,0.12)' : '1px solid transparent',
        transition: 'all 0.3s',
        padding: '0 3rem',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #C8AA76',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="20" height="22" viewBox="0 0 22 24" fill="none">
              <path d="M11 2L21 22H16.5L14.5 17H7.5L5.5 22H1L11 2Z" fill="#C8AA76"/>
              <rect x="7" y="14" width="8" height="2.5" fill="#060907"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: '#F5F0E8', letterSpacing: '0.08em', lineHeight: 1 }}>THE LV ATHLETICS</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.2em', color: '#C8AA76', textTransform: 'uppercase' }}>Independent Fan Coverage</div>
          </div>
        </Link>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <Link href="/blog" className="nav-link">All Stories</Link>
          <Link href="/blog/las-vegas-athletics-stadium-update-2026" className="nav-link">Stadium Watch</Link>
          <Link href="/blog/oakland-to-sacramento-to-vegas-timeline" className="nav-link">The Journey</Link>
          <a href="https://www.ticketsonsale.com/sports/athletics" target="_blank" rel="noopener" className="nav-link" style={{ color: '#C8AA76' }}>Tickets</a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileNav(!mobileNav)} style={{
          display: 'none',
          width: '36px',
          height: '36px',
          background: 'none',
          border: '1px solid rgba(200,170,118,0.3)',
          color: '#C8AA76',
          fontSize: '1.2rem',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
        }}>{mobileNav ? '✕' : '☰'}</button>
      </nav>

      {/* Mobile nav dropdown */}
      {mobileNav && (
        <div style={{
          position: 'fixed',
          top: '88px',
          left: 0,
          right: 0,
          background: 'rgba(6,9,7,0.98)',
          zIndex: 999,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid rgba(200,170,118,0.2)',
        }}>
          <Link href="/blog" className="nav-link" onClick={() => setMobileNav(false)}>All Stories</Link>
          <Link href="/blog/las-vegas-athletics-stadium-update-2026" className="nav-link" onClick={() => setMobileNav(false)}>Stadium Watch</Link>
          <Link href="/blog/oakland-to-sacramento-to-vegas-timeline" className="nav-link" onClick={() => setMobileNav(false)}>The Journey</Link>
        </div>
      )}

      {/* ============ HERO ============ */}
      <section className="grain section-pad" style={{
        minHeight: '100vh',
        paddingTop: '120px',
        padding: '120px 3rem 0',
        background: 'linear-gradient(165deg, #003831 0%, #001A17 40%, #060907 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Stars background */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          {[...Array(60)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: i % 7 === 0 ? '2px' : '1px',
              height: i % 7 === 0 ? '2px' : '1px',
              background: 'rgba(200,170,118,0.6)',
              borderRadius: '50%',
              left: `${(i * 17.3) % 100}%`,
              top: `${(i * 13.7) % 65}%`,
              animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.3) % 3}s`,
            }} />
          ))}
        </div>

        {/* Las Vegas Strip silhouette */}
        <svg aria-hidden="true" style={{ position: 'absolute', bottom: '118px', left: 0, right: 0, width: '100%', height: '160px', zIndex: 1, opacity: 0.12 }} viewBox="0 0 1440 160" preserveAspectRatio="none">
          {/* Strip buildings */}
          <rect x="0" y="60" width="40" height="100" fill="#C8AA76"/>
          <rect x="45" y="40" width="30" height="120" fill="#C8AA76"/>
          <rect x="80" y="20" width="50" height="140" fill="#C8AA76"/>
          <rect x="135" y="50" width="35" height="110" fill="#C8AA76"/>
          <rect x="175" y="30" width="55" height="130" fill="#C8AA76"/>
          <rect x="235" y="10" width="40" height="150" fill="#C8AA76"/>
          <rect x="280" y="45" width="30" height="115" fill="#C8AA76"/>
          <rect x="315" y="25" width="60" height="135" fill="#C8AA76"/>
          <rect x="380" y="55" width="35" height="105" fill="#C8AA76"/>
          <rect x="420" y="35" width="45" height="125" fill="#C8AA76"/>
          {/* Allegiant Stadium shape */}
          <ellipse cx="600" cy="130" rx="120" ry="35" fill="#003831" opacity="0.8"/>
          <rect x="510" y="85" width="180" height="50" rx="8" fill="#003831" opacity="0.8"/>
          <rect x="530" y="70" width="140" height="20" rx="4" fill="#004D40" opacity="0.6"/>
          {/* Continue Strip */}
          <rect x="780" y="40" width="50" height="120" fill="#C8AA76"/>
          <rect x="835" y="15" width="35" height="145" fill="#C8AA76"/>
          <rect x="875" y="50" width="65" height="110" fill="#C8AA76"/>
          <rect x="945" y="30" width="40" height="130" fill="#C8AA76"/>
          <rect x="990" y="20" width="55" height="140" fill="#C8AA76"/>
          <rect x="1050" y="45" width="30" height="115" fill="#C8AA76"/>
          <rect x="1085" y="35" width="50" height="125" fill="#C8AA76"/>
          <rect x="1140" y="55" width="40" height="105" fill="#C8AA76"/>
          <rect x="1185" y="25" width="60" height="135" fill="#C8AA76"/>
          <rect x="1250" y="40" width="35" height="120" fill="#C8AA76"/>
          <rect x="1290" y="15" width="50" height="145" fill="#C8AA76"/>
          <rect x="1345" y="50" width="45" height="110" fill="#C8AA76"/>
          <rect x="1395" y="30" width="45" height="130" fill="#C8AA76"/>
        </svg>

        {/* Giant ghost A */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'min(85vw, 900px)',
          color: 'rgba(200,170,118,0.018)',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>A</div>

        {/* Desert landscape silhouette at bottom */}
        <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: '120px', zIndex: 2 }} viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 L0,80 Q120,40 240,65 Q360,90 480,50 Q600,10 720,35 Q840,60 960,25 Q1080,0 1200,40 Q1320,75 1440,55 L1440,120 Z" fill="#060907"/>
        </svg>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
          {/* Live badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '2rem',
            animation: 'float-in 0.6s ease-out',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#4ADE80',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#4ADE80',
            }}>Live Coverage</span>
          </div>

          {/* COUNTDOWN — Hero position */}
          <div style={{ marginBottom: '2.5rem', animation: 'float-in 0.6s ease-out 0.1s both' }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.58rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(200,170,118,0.6)',
              marginBottom: '0.75rem',
            }}>Opening Day 2028</div>
            <div className="countdown-row" style={{ display: 'flex', gap: '0.5rem' }}>
              {[
                { val: mounted ? String(time.days) : '--', lbl: 'DAYS' },
                { val: mounted ? pad(time.hours) : '--', lbl: 'HRS' },
                { val: mounted ? pad(time.minutes) : '--', lbl: 'MIN' },
                { val: mounted ? pad(time.seconds) : '--', lbl: 'SEC' },
              ].map(({ val, lbl }) => (
                <div className="countdown-cell" key={lbl} style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(200,170,118,0.15)',
                  padding: '0.9rem 1rem 0.6rem',
                  minWidth: '72px',
                  textAlign: 'center',
                  backdropFilter: 'blur(4px)',
                }}>
                  <div className="countdown-num" style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '2.8rem',
                    color: '#C8AA76',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}>{val}</div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.45rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(245,240,232,0.4)',
                    marginTop: '0.3rem',
                  }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* HERO HEADLINE */}
          <h1 className="hero-hl" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(4rem, 9vw, 9rem)',
            lineHeight: 0.88,
            color: '#F5F0E8',
            letterSpacing: '0.02em',
            marginBottom: '2rem',
            animation: 'float-in 0.6s ease-out 0.2s both',
          }}>
            DESERT GOLD.<br />
            <span style={{ color: '#C8AA76' }}>FOREVER</span> GREEN.
          </h1>

          <p style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: 'rgba(245,240,232,0.6)',
            maxWidth: '580px',
            marginBottom: '3rem',
            animation: 'float-in 0.6s ease-out 0.3s both',
          }}>
            Independent editorial coverage of the Las Vegas Athletics. Stadium updates, roster analysis, and the untold stories of a franchise finding its desert home.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem', animation: 'float-in 0.6s ease-out 0.4s both' }}>
            <Link href="/blog" className="cta-btn" style={{ background: '#C8AA76', color: '#060907', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.08em', padding: '0.9rem 2rem' }}>
              Read Coverage →
            </Link>
            <a href="https://www.ticketsonsale.com/sports/athletics" target="_blank" rel="noopener" className="cta-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(200,170,118,0.4)', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', letterSpacing: '0.08em', padding: '0.9rem 2rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8AA76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
              Get Tickets
            </a>
          </div>

          {/* NEWS TICKER */}
          <div style={{ marginBottom: '5rem', animation: 'float-in 0.6s ease-out 0.5s both' }}>
            <div style={{ display: 'flex', alignItems: 'stretch', overflow: 'hidden', border: '1px solid rgba(200,170,118,0.15)', background: 'rgba(0,0,0,0.4)' }}>
              <div style={{ background: '#003831', padding: '0.6rem 1rem', fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8AA76', whiteSpace: 'nowrap', flexShrink: 0, display: 'flex', alignItems: 'center', borderRight: '1px solid rgba(200,170,118,0.15)' }}>
                LATEST
              </div>
              <div style={{ overflow: 'hidden', flex: 1 }}>
                <div style={{ display: 'flex', animation: 'ticker 35s linear infinite', width: 'max-content' }}>
                  {[
                    'Las Vegas Ballpark construction on schedule for 2028 Opening Day',
                    'New stadium site: Tropicana Avenue corridor confirmed',
                    '🎰 First MLB franchise in Nevada history — the desert gets its team',
                    '1000+ days until first pitch in Las Vegas',
                    '🏆 A\'s roster building for desert era — watch the moves',
                    '🌵 Vegas faithful: season tickets now available',
                    'Las Vegas Ballpark construction on schedule for 2028 Opening Day',
                    'New stadium site: Tropicana Avenue corridor confirmed',
                    '🎰 First MLB franchise in Nevada history — the desert gets its team',
                    '1000+ days until first pitch in Las Vegas',
                    '🏆 A\'s roster building for desert era — watch the moves',
                    '🌵 Vegas faithful: season tickets now available',
                  ].map((item, i) => (
                    <span key={i} style={{ padding: '0.6rem 2rem', fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.08em', color: 'rgba(245,240,232,0.65)', whiteSpace: 'nowrap', borderRight: '1px solid rgba(200,170,118,0.08)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STADIUM STATUS BAR ============ */}
      <section style={{ background: '#003831', borderTop: '1px solid rgba(200,170,118,0.2)', borderBottom: '1px solid rgba(200,170,118,0.2)', padding: '2rem 3rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(200,170,118,0.6)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Stadium Status</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#C8AA76', letterSpacing: '0.05em' }}>Under Construction</div>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(200,170,118,0.6)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Location</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#F5F0E8', letterSpacing: '0.05em' }}>Tropicana Ave, Las Vegas</div>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(200,170,118,0.6)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Capacity</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#F5F0E8', letterSpacing: '0.05em' }}>30,000 Seats</div>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(200,170,118,0.6)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Build Progress</div>
              <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '2px', height: '6px', overflow: 'hidden' }}>
                <div style={{ width: '38%', height: '100%', background: 'linear-gradient(90deg, #C8AA76, #FFD700)', borderRadius: '2px' }} />
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', color: 'rgba(200,170,118,0.6)', marginTop: '0.3rem' }}>Est. 38% complete</div>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(200,170,118,0.6)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Target Opening</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: '#4ADE80', letterSpacing: '0.05em' }}>April 2028</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED + SIDEBAR ============ */}
      <section className="section-pad" style={{
        background: '#060907',
        padding: '6rem 3rem',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginBottom: '3rem',
            borderBottom: '1px solid rgba(200,170,118,0.12)',
            paddingBottom: '1.25rem',
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.58rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C8AA76',
              background: 'rgba(200,170,118,0.08)',
              padding: '0.35rem 0.75rem',
              border: '1px solid rgba(200,170,118,0.15)',
            }}>Latest</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#F5F0E8',
              fontWeight: 900,
            }}>From The Desk</h2>
            <Link href="/blog" style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#C8AA76',
              marginLeft: 'auto',
              opacity: 0.7,
            }}>View All →</Link>
          </div>

          <div className="hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            gap: '2px',
            background: 'rgba(200,170,118,0.06)',
          }}>
            {/* FEATURED — big card */}
            <Link href={`/blog/${hero.slug}`} className="hover-card" style={{
              background: '#0C0F0A',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '420px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Green gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,56,49,0.1) 0%, rgba(0,56,49,0.3) 100%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  color: '#C8AA76',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(200,170,118,0.3)',
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  marginBottom: '1.25rem',
                }}>{hero.category}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)',
                  lineHeight: 1.1,
                  color: '#F5F0E8',
                  marginBottom: '1rem',
                  fontWeight: 900,
                }}>{hero.title}</h3>
                <p style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: '0.95rem',
                  lineHeight: 1.65,
                  color: 'rgba(245,240,232,0.55)',
                  marginBottom: '1.5rem',
                  maxWidth: '480px',
                }}>{hero.description}</p>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C8AA76',
                  borderBottom: '1px solid #C8AA76',
                  paddingBottom: '2px',
                }}>Read Story →</span>
              </div>
            </Link>

            {/* SIDEBAR — 3 stacked */}
            <div className="hero-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {sidebar.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="hover-card" style={{
                  background: '#0C0F0A',
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  borderLeft: '3px solid transparent',
                  transition: 'border-color 0.2s, background 0.2s',
                }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.5rem',
                    letterSpacing: '0.18em',
                    color: '#C8AA76',
                    textTransform: 'uppercase',
                    marginBottom: '0.6rem',
                    opacity: 0.7,
                  }}>{post.category} · {post.date}</div>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.05rem',
                    lineHeight: 1.25,
                    color: '#F5F0E8',
                    fontWeight: 700,
                  }}>{post.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ EDITORIAL QUOTE ============ */}
      <section className="grain section-pad" style={{
        background: '#003831',
        padding: '8rem 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Playfair Display', serif",
          fontSize: 'min(30vw, 400px)',
          color: 'rgba(200,170,118,0.03)',
          lineHeight: 1,
          pointerEvents: 'none',
        }}>&ldquo;</div>

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <blockquote style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
            fontStyle: 'italic',
            color: '#F5F0E8',
            lineHeight: 1.3,
            marginBottom: '2rem',
          }}>
            &ldquo;Every great franchise needs a city that matches its hunger. Las Vegas didn&rsquo;t just get a team &mdash; it got a legacy 124 years in the making.&rdquo;
          </blockquote>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C8AA76',
          }}>The LV Athletics Editorial</div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="section-pad" style={{
        background: '#060907',
        padding: '6rem 3rem',
        borderTop: '1px solid rgba(200,170,118,0.08)',
      }}>
        <div className="stat-row" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
        }}>
          {[
            { num: '1901', label: 'Franchise Founded', sub: 'Philadelphia' },
            { num: '9', label: 'World Series Titles', sub: 'And counting' },
            { num: '2028', label: 'First Desert Pitch', sub: 'Opening Day' },
            { num: '33K', label: 'Seat Stadium', sub: 'State of the art' },
          ].map(({ num, label, sub }) => (
            <div key={num} style={{
              textAlign: 'center',
              padding: '2rem 1rem',
              borderRight: '1px solid rgba(200,170,118,0.08)',
            }}>
              <div className="stat-num">{num}</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#F5F0E8',
                marginTop: '0.5rem',
                opacity: 0.7,
              }}>{label}</div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.72rem',
                color: 'rgba(245,240,232,0.35)',
                marginTop: '0.25rem',
              }}>{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ THE JOURNEY — MIGRATION TIMELINE ============ */}
      <section className="section-pad" style={{
        background: '#F5F0E8',
        padding: '8rem 3rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#003831',
              marginBottom: '0.75rem',
            }}>124 Years of Baseball</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#060907',
              fontWeight: 900,
            }}>The Migration</h2>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'linear-gradient(90deg, rgba(0,56,49,0.15) 0%, rgba(0,56,49,0.3) 70%, rgba(200,170,118,0.6) 100%)',
            }} />

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative',
            }}>
              {[
                { city: 'Philadelphia', year: '1901', size: 12, color: '#8B3A0F', sub: '54 seasons' },
                { city: 'Kansas City', year: '1955', size: 12, color: '#8B3A0F', sub: '13 seasons' },
                { city: 'Oakland', year: '1968', size: 18, color: '#003831', sub: '57 seasons' },
                { city: 'Sacramento', year: '2025', size: 14, color: '#8B3A0F', sub: '3 seasons' },
                { city: 'Las Vegas', year: '2028', size: 20, color: '#C8AA76', sub: 'FOREVER', pulse: true },
              ].map(({ city, year, size, color, sub, pulse }) => (
                <div key={city} style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    background: color,
                    margin: `${(22 - size) / 2}px auto 1.25rem`,
                    ...(pulse ? { animation: 'pulse 2s ease-in-out infinite' } : {}),
                  }} />
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.7rem',
                    letterSpacing: '0.08em',
                    color: '#060907',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    marginBottom: '0.25rem',
                  }}>{city}</div>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: pulse ? '2rem' : '1.6rem',
                    color: pulse ? '#C8AA76' : '#003831',
                    lineHeight: 1,
                  }}>{year}</div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.52rem',
                    letterSpacing: '0.1em',
                    color: pulse ? '#C8AA76' : '#8B3A0F',
                    marginTop: '0.35rem',
                    textTransform: 'uppercase',
                  }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/blog/oakland-to-sacramento-to-vegas-timeline" className="cta-btn" style={{ color: '#003831', borderColor: '#003831' }}>
              Read The Full Journey →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MORE STORIES GRID ============ */}
      <section className="section-pad" style={{
        background: '#060907',
        padding: '6rem 3rem',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
            borderBottom: '1px solid rgba(200,170,118,0.08)',
            paddingBottom: '1rem',
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.8rem',
              color: '#F5F0E8',
              fontWeight: 700,
            }}>More Coverage</h2>
            {/* Category pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.slice(0, 4).map(cat => (
                <Link key={cat} href="/blog" style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.55rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C8AA76',
                  border: '1px solid rgba(200,170,118,0.2)',
                  padding: '0.3rem 0.7rem',
                  opacity: 0.6,
                  transition: 'opacity 0.2s',
                }}>{cat}</Link>
              ))}
            </div>
          </div>

          <div className="blog-grid-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            background: 'rgba(200,170,118,0.05)',
          }}>
            {posts.slice(3, 9).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="hover-card" style={{
                background: '#0C0F0A',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{post.emoji}</div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.5rem',
                  letterSpacing: '0.18em',
                  color: '#C8AA76',
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                  opacity: 0.6,
                }}>{post.category}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.1rem',
                  lineHeight: 1.25,
                  color: '#F5F0E8',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  flex: 1,
                }}>{post.title}</h3>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.55rem',
                  color: 'rgba(245,240,232,0.3)',
                  letterSpacing: '0.1em',
                }}>{post.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TICKETS & GEAR CTA ============ */}
      <section className="grain section-pad" style={{
        background: 'linear-gradient(135deg, #003831 0%, #001A17 100%)',
        padding: '6rem 3rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.58rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#C8AA76',
            marginBottom: '1rem',
          }}>Affiliate Partners</div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#F5F0E8',
            marginBottom: '1rem',
            letterSpacing: '0.02em',
          }}>TICKETS &amp; GEAR</h2>
          <p style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: '0.95rem',
            color: 'rgba(245,240,232,0.55)',
            maxWidth: '500px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}>
            Support independent coverage. Purchases through our affiliate links keep the lights on at zero extra cost to you.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://www.ticketsonsale.com/sports/athletics/?PCID=lvathletics-20" target="_blank" rel="noopener" className="cta-btn" style={{ background: '#C8AA76', color: '#003831', borderColor: '#C8AA76' }}>
              StubHub Tickets
            </a>
            <a href="https://www.seatgeek.com/athletics-tickets?aid=lvathletics-20" target="_blank" rel="noopener" className="cta-btn">
              🎫 SeatGeek
            </a>
            <a href="https://www.fanatics.com/mlb/oakland-athletics/o-2793+t-53395338?aff=lvathletics-20" target="_blank" rel="noopener" className="cta-btn">
              👕 Fanatics Gear
            </a>
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="section-pad" style={{
        background: '#060907',
        padding: '5rem 3rem',
        borderTop: '1px solid rgba(200,170,118,0.08)',
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.58rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#C8AA76',
            marginBottom: '0.75rem',
          }}>Stay Connected</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            color: '#F5F0E8',
            marginBottom: '0.75rem',
            fontWeight: 700,
          }}>The Press Box</h2>
          <p style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: '0.95rem',
            color: 'rgba(245,240,232,0.5)',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}>
            Stadium updates. Roster moves. Independent analysis. Delivered when it matters.
          </p>
          <form onSubmit={async (e) => {
            e.preventDefault()
            if (!email || subscribing) return
            setSubscribing(true)
            try {
              await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'thelvathletics' }),
              })
              setSubscribed(true)
              setEmail('')
            } catch { setSubscribed(true) }
            setSubscribing(false)
          }} style={{
            display: 'flex',
            gap: '0',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: '0.9rem 1.25rem',
                background: 'rgba(200,170,118,0.05)',
                border: '1px solid rgba(200,170,118,0.2)',
                borderRight: 'none',
                color: '#F5F0E8',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.78rem',
                outline: 'none',
              }}
            />
            <button type="submit" style={{
              padding: '0.9rem 1.75rem',
              background: '#C8AA76',
              border: '1px solid #C8AA76',
              color: '#060907',
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 500,
            }}>{subscribed ? 'You\'re In!' : subscribing ? '...' : 'Subscribe'}</button>
          </form>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="section-pad" style={{
        background: '#060907',
        borderTop: '1px solid rgba(200,170,118,0.08)',
        padding: '5rem 3rem 3rem',
      }}>
        <div className="footer-grid" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #C8AA76',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="20" viewBox="0 0 22 24" fill="none">
                  <path d="M11 2L21 22H16.5L14.5 17H7.5L5.5 22H1L11 2Z" fill="#C8AA76"/>
                  <rect x="7" y="14" width="8" height="2.5" fill="#060907"/>
                </svg>
              </div>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', color: '#F5F0E8', letterSpacing: '0.06em' }}>THE LV ATHLETICS</span>
            </div>
            <p style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: '0.85rem',
              color: 'rgba(245,240,232,0.4)',
              lineHeight: 1.65,
              maxWidth: '320px',
            }}>Independent fan coverage of the Las Vegas Athletics. Not affiliated with the Athletics organization or Major League Baseball.</p>
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8AA76', marginBottom: '1.25rem' }}>Coverage</div>
            {['Blog', 'Stadium Watch', 'Roster Analysis', 'Fan Guide'].map(link => (
              <Link key={link} href="/blog" style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                color: 'rgba(245,240,232,0.45)',
                marginBottom: '0.65rem',
                transition: 'color 0.2s',
              }}>{link}</Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8AA76', marginBottom: '1.25rem' }}>Network</div>
            {[
              ['TheLVAs.com', 'https://thelvas.com'],
              ['LV Athletics Nation', 'https://lvathleticsnation.com'],
            ].map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener" style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                color: 'rgba(245,240,232,0.45)',
                marginBottom: '0.65rem',
              }}>{name}</a>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8AA76', marginBottom: '1.25rem' }}>Tickets</div>
            {[
              ['StubHub', 'https://www.ticketsonsale.com/sports/athletics'],
              ['SeatGeek', 'https://www.seatgeek.com/athletics-tickets'],
              ['Fanatics', 'https://www.fanatics.com/mlb/oakland-athletics'],
            ].map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener" style={{
                display: 'block',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                color: 'rgba(245,240,232,0.45)',
                marginBottom: '0.65rem',
              }}>{name}</a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(200,170,118,0.06)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.55rem',
            letterSpacing: '0.1em',
            color: 'rgba(245,240,232,0.2)',
          }}>&copy; 2026 thelvathletics.com — Fan site. Independent coverage.</span>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.55rem',
            letterSpacing: '0.1em',
            color: 'rgba(245,240,232,0.15)',
          }}>Oakland → Vegas. The story continues.</span>
          <div style={{ width: '100%', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid rgba(245,240,232,0.06)' }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', fontWeight: 700, color: 'rgba(0,120,48,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>MLB Resources</span>
            <a href="https://www.mlb.com/athletics" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(245,240,232,0.3)', fontSize: '0.55rem', textDecoration: 'none' }}>MLB.com Athletics →</a>
            <a href="https://www.espn.com/mlb/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(245,240,232,0.3)', fontSize: '0.55rem', textDecoration: 'none' }}>ESPN MLB →</a>
            <a href="https://baseballhall.org" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(245,240,232,0.3)', fontSize: '0.55rem', textDecoration: 'none' }}>Baseball Hall of Fame →</a>
            <a href="https://www.baseball-reference.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(245,240,232,0.3)', fontSize: '0.55rem', textDecoration: 'none' }}>Baseball Reference →</a>
          </div>
          <div style={{ width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid rgba(245,240,232,0.04)', marginTop: '8px' }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.55rem', fontWeight: 700, color: 'rgba(200,170,118,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Legal</span>
            <Link href="/disclaimer" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(245,240,232,0.25)', fontSize: '0.55rem', textDecoration: 'none' }}>Disclaimer</Link>
            <Link href="/privacy" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(245,240,232,0.25)', fontSize: '0.55rem', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(245,240,232,0.25)', fontSize: '0.55rem', textDecoration: 'none' }}>Terms</Link>
            <Link href="/dmca" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(245,240,232,0.25)', fontSize: '0.55rem', textDecoration: 'none' }}>DMCA</Link>
            <Link href="/contact" style={{ fontFamily: "'DM Mono', monospace", color: 'rgba(245,240,232,0.25)', fontSize: '0.55rem', textDecoration: 'none' }}>Contact</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
