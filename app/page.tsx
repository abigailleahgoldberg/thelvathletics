"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllPosts } from './blog/data'

const TARGET = new Date('2028-04-01T19:05:00-07:00').getTime()

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Home() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  const posts = getAllPosts()
  const recent = posts.slice(0, 3)
  const featured = recent[0]
  const small = recent.slice(1, 3)

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

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;1,8..60,400&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #090C08;
          color: #F5F0E8;
          overflow-x: hidden;
          font-family: 'Source Serif 4', Georgia, serif;
        }
        a { color: inherit; text-decoration: none; }

        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(200,170,118,0.6); }
          50% { transform: scale(1.3); box-shadow: 0 0 0 8px rgba(200,170,118,0); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.65);
          transition: color 0.2s, opacity 0.2s;
        }
        .nav-link:hover { color: #C8AA76; opacity: 1; }

        .blog-card-featured:hover { background: rgba(0,56,49,0.25) !important; }
        .blog-card-small:hover { background: rgba(0,56,49,0.25) !important; }

        .stat-cell:not(:last-child) {
          border-right: 1px solid rgba(200,170,118,0.18);
        }

        @media (max-width: 900px) {
          .hero-split { flex-direction: column !important; }
          .hero-left { flex: none !important; min-height: 70vh; }
          .hero-right { flex: none !important; min-height: 50vw; clip-path: none !important; }
          .story-cols { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: repeat(2,1fr) !important; }
          .stat-cell:nth-child(2) { border-right: none !important; }
          .migration-row { flex-direction: column !important; gap: 2rem !important; align-items: flex-start !important; }
          .migration-arrow { transform: rotate(90deg); }
          nav { padding: 0 1.5rem !important; }
          .nav-links { display: none !important; }
          .countdown-row { gap: 0.5rem !important; }
          .countdown-block { min-width: 60px !important; padding: 0.75rem 0.75rem 0.5rem !important; }
          .countdown-num { font-size: 2rem !important; }
        }
      `}</style>

      {/* ============ NAV ============ */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 999,
        background: '#090C08',
        borderBottom: '1px solid #C8AA76',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
        height: '64px',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          {/* A in a circle -- Oakland A's homage */}
          <div style={{
            width: '38px', height: '38px',
            borderRadius: '50%',
            border: '2px solid #C8AA76',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L21 22H16.5L14.5 17H7.5L5.5 22H1L11 2Z" fill="#C8AA76"/>
              <rect x="7" y="14" width="8" height="2.5" fill="#090C08"/>
            </svg>
          </div>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.78rem',
            letterSpacing: '0.1em',
            color: '#F5F0E8',
            textTransform: 'lowercase',
          }}>thelvathletics.com</span>
        </Link>

        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          <li><Link href="/blog" className="nav-link">Blog</Link></li>
          <li><Link href="/blog/oakland-to-sacramento-to-vegas-timeline" className="nav-link">The Journey</Link></li>
          <li><Link href="/blog/las-vegas-athletics-stadium-update-2026" className="nav-link">2028</Link></li>
        </ul>
      </nav>

      {/* ============ HERO ============ */}
      <section className="hero-split" style={{
        minHeight: '100vh',
        paddingTop: '64px',
        display: 'flex',
      }}>

        {/* LEFT 60% -- Green */}
        <div className="hero-left" style={{
          flex: '0 0 60%',
          background: '#003831',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '4rem 4rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Ghost A watermark */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(20rem, 55vw, 55vw)',
            color: 'rgba(200,170,118,0.04)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-0.05em',
          }}>A</div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Hero headline */}
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(5rem, 10vw, 11rem)',
              lineHeight: 0.88,
              color: '#F5F0E8',
              letterSpacing: '0.02em',
              marginBottom: '2.5rem',
            }}>
              THE DESERT<br />
              CALLS
            </h1>

            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.82rem',
              letterSpacing: '0.14em',
              color: '#C8AA76',
              textTransform: 'uppercase',
              marginBottom: '2.75rem',
            }}>Las Vegas Athletics. Opening Day 2028.</p>

            {/* Countdown -- old scoreboard style */}
            <div className="countdown-row" style={{
              display: 'flex',
              gap: '0.6rem',
              alignItems: 'flex-start',
            }}>
              {[
                { value: mounted ? String(time.days) : '--', label: 'DAYS' },
                { value: mounted ? pad(time.hours) : '--', label: 'HRS' },
                { value: mounted ? pad(time.minutes) : '--', label: 'MIN' },
                { value: mounted ? pad(time.seconds) : '--', label: 'SEC' },
              ].map(({ value, label }) => (
                <div className="countdown-block" key={label} style={{
                  background: '#090C08',
                  padding: '1.1rem 1.25rem 0.8rem',
                  minWidth: '80px',
                  textAlign: 'center',
                  position: 'relative',
                }}>
                  <div className="countdown-num" style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '3rem',
                    color: '#F5F0E8',
                    lineHeight: 1,
                    letterSpacing: '0.04em',
                    fontVariantNumeric: 'tabular-nums',
                    display: 'block',
                  }}>{value}</div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.5rem',
                    letterSpacing: '0.2em',
                    color: '#C8AA76',
                    marginTop: '0.4rem',
                    display: 'block',
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT 40% -- Gold diagonal panel */}
        <div className="hero-right" style={{
          flex: '0 0 40%',
          background: '#C8AA76',
          clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 3rem 3rem 5rem',
          position: 'relative',
        }}>
          {/* Giant stylized A letterform */}
          <svg
            viewBox="0 0 220 260"
            style={{ width: '78%', maxWidth: '280px' }}
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Athletics A"
          >
            {/* Outer A shape */}
            <path
              d="M110 8L210 252H170L152 204H68L50 252H10L110 8Z"
              fill="#003831"
            />
            {/* Crossbar cutout (creates the hollow) */}
            <rect x="72" y="168" width="76" height="20" fill="#C8AA76"/>
            {/* Inner hollow triangle */}
            <path
              d="M110 52L168 220H140L122 176H98L80 220H52L110 52Z"
              fill="#C8AA76"
            />
          </svg>

          {/* EST. LAS VEGAS 2025 */}
          <div style={{
            position: 'absolute',
            bottom: '2.25rem',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.22em',
            color: '#003831',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>EST. LAS VEGAS 2025</div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <div style={{
        background: '#090C08',
        borderTop: '1px solid #C8AA76',
        borderBottom: '1px solid rgba(200,170,118,0.3)',
        overflow: 'hidden',
        padding: '0.9rem 0',
        position: 'relative',
      }}>
        <div style={{
          display: 'inline-flex',
          animation: 'ticker-scroll 40s linear infinite',
          whiteSpace: 'nowrap',
        }}>
          {/* Two copies for seamless loop */}
          {[0, 1].map(i => (
            <span key={i} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#C8AA76',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2rem',
              paddingRight: '2rem',
            }}>
              <span>2028 Opening Day Countdown</span>
              <span style={{ color: '#003831', background: '#C8AA76', padding: '0.15rem 0.5rem', fontSize: '0.55rem' }}>*</span>
              <span>Oakland Roots. Vegas Future.</span>
              <span style={{ color: '#003831', background: '#C8AA76', padding: '0.15rem 0.5rem', fontSize: '0.55rem' }}>*</span>
              <span>The Western Division Just Got Interesting.</span>
              <span style={{ color: '#003831', background: '#C8AA76', padding: '0.15rem 0.5rem', fontSize: '0.55rem' }}>*</span>
              <span>Desert Gold. Forever Green.</span>
              <span style={{ color: '#003831', background: '#C8AA76', padding: '0.15rem 0.5rem', fontSize: '0.55rem' }}>*</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============ THE STORY ============ */}
      <section style={{
        background: '#090C08',
        padding: '9rem 3rem',
        position: 'relative',
      }}>
        <div className="story-cols" style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '7rem',
          alignItems: 'start',
        }}>
          {/* Left -- Pull quote */}
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              color: '#C8AA76',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}>The Story</div>
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.7rem, 2.8vw, 3rem)',
              fontStyle: 'italic',
              color: '#F5F0E8',
              lineHeight: 1.2,
              borderLeft: '4px solid #C8AA76',
              paddingLeft: '2rem',
            }}>
              &ldquo;Every great team needs a city that matches its hunger.&rdquo;
            </blockquote>
          </div>

          {/* Right -- Editorial body */}
          <div style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: 'rgba(245,240,232,0.78)',
          }}>
            <p style={{ marginBottom: '1.75rem' }}>
              The Oakland Athletics arrived in the East Bay in 1968, and for fifty-five years they were more than a baseball team. They were a character in the story of a city -- scrappy, under-resourced, and consistently more interesting than the money suggested they should be. Three World Series championships in the 1970s. The Moneyball revolution in the early 2000s. A playoff run from 13 games back in 2012 that defied every rational projection.
            </p>
            <p style={{ marginBottom: '1.75rem' }}>
              The move to Las Vegas was not without pain. Oakland fans had a legitimate grievance -- a stadium negotiation that many believed was conducted in bad faith, a community that invested years of advocacy into a waterfront ballpark that never came. That history is real and it belongs in the record. A new city does not erase what came before.
            </p>
            <p>
              What Las Vegas offers is something different: a city still writing its own sports identity, still figuring out what it means to have teams that play here year-round. The Athletics arrive not as conquerors but as the final piece of a transformation. The desert called. The franchise answered. What happens next is the story.
            </p>
          </div>
        </div>
      </section>

      {/* ============ LATEST FROM THE BLOG ============ */}
      <section style={{
        background: '#0C0F0A',
        padding: '8rem 3rem',
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '3rem',
            borderBottom: '1px solid rgba(200,170,118,0.18)',
            paddingBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                color: '#C8AA76',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}>Latest Coverage</div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#F5F0E8',
                lineHeight: 1,
              }}>From The Desk</h2>
            </div>
            <Link href="/blog" style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C8AA76',
              borderBottom: '1px solid rgba(200,170,118,0.4)',
              paddingBottom: '2px',
            }}>All Stories</Link>
          </div>

          {/* Featured 60% + 2 small 40% */}
          <div className="blog-grid" style={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: '2px',
            background: 'rgba(200,170,118,0.08)',
          }}>
            {/* Featured post */}
            <Link href={`/blog/${featured.slug}`}
              className="blog-card-featured"
              style={{
                background: '#090C08',
                padding: '3.5rem',
                display: 'block',
                textDecoration: 'none',
                color: '#F5F0E8',
                transition: 'background 0.2s',
              }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.58rem',
                letterSpacing: '0.2em',
                color: '#C8AA76',
                textTransform: 'uppercase',
                border: '1px solid rgba(200,170,118,0.3)',
                display: 'inline-block',
                padding: '0.2rem 0.7rem',
                marginBottom: '1.75rem',
              }}>{featured.category}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 2.3rem)',
                lineHeight: 1.1,
                color: '#F5F0E8',
                marginBottom: '1.25rem',
              }}>{featured.title}</h3>
              <p style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.6)',
                marginBottom: '2.25rem',
              }}>{featured.description}</p>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C8AA76',
                borderBottom: '1px solid #C8AA76',
                paddingBottom: '2px',
              }}>READ</span>
            </Link>

            {/* 2 small posts stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {small.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="blog-card-small"
                  style={{
                    background: '#090C08',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    textDecoration: 'none',
                    color: '#F5F0E8',
                    transition: 'background 0.2s',
                  }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.55rem',
                    letterSpacing: '0.18em',
                    color: '#C8AA76',
                    textTransform: 'uppercase',
                    background: 'rgba(200,170,118,0.1)',
                    display: 'inline-block',
                    padding: '0.2rem 0.55rem',
                    marginBottom: '0.9rem',
                  }}>{post.category}</div>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.15rem',
                    lineHeight: 1.25,
                    color: '#F5F0E8',
                    flex: 1,
                    marginBottom: '0.75rem',
                  }}>{post.title}</h4>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '0.58rem',
                    letterSpacing: '0.1em',
                    color: 'rgba(245,240,232,0.35)',
                    marginTop: 'auto',
                  }}>{post.date}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ STAT BAR ============ */}
      <section style={{
        background: '#003831',
        padding: '5rem 3rem',
      }}>
        <div className="stat-grid" style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {[
            { num: '98', label: "Years of A's Baseball" },
            { num: '3', label: 'World Series Titles (Oakland Era)' },
            { num: '2028', label: 'First Vegas Pitch' },
            { num: '18', label: 'Seasons Until Now' },
          ].map(({ num, label }) => (
            <div className="stat-cell" key={num} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(4rem, 6vw, 7rem)',
                color: '#C8AA76',
                lineHeight: 1,
                marginBottom: '0.6rem',
                letterSpacing: '0.02em',
              }}>{num}</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.15em',
                color: '#F5F0E8',
                textTransform: 'uppercase',
                opacity: 0.65,
                lineHeight: 1.4,
              }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ MIGRATION MAP ============ */}
      <section style={{
        background: '#F5F0E8',
        padding: '8rem 3rem',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.62rem',
            letterSpacing: '0.22em',
            color: '#003831',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>The Migration</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.8rem, 3vw, 3rem)',
            color: '#090C08',
            marginBottom: '5rem',
            lineHeight: 1.1,
          }}>A Franchise in Motion</h2>

          {/* Timeline row */}
          <div className="migration-row" style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            position: 'relative',
          }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '5%',
              right: '5%',
              height: '2px',
              background: 'rgba(0,56,49,0.15)',
              zIndex: 0,
            }} />

            {/* Philadelphia */}
            {[
              { city: 'Philadelphia', year: '1901', dot: 12, color: '#8B3A0F', sub: null, yearColor: '#003831', yearSize: '1.8rem' },
            ].map(({ city, year, dot, color, sub, yearColor, yearSize }) => (
              <div key={city} style={{ textAlign: 'center', flex: 1, position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: `${dot}px`, height: `${dot}px`,
                  borderRadius: '50%',
                  background: color,
                  margin: `${(18 - dot) / 2}px auto 1.5rem`,
                  position: 'relative', zIndex: 1,
                }} />
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: '#090C08',
                  textTransform: 'uppercase',
                  marginBottom: '0.3rem',
                }}>{city}</div>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: yearSize,
                  color: yearColor,
                  lineHeight: 1,
                }}>{year}</div>
                {sub && <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.58rem',
                  letterSpacing: '0.1em',
                  color: '#8B3A0F',
                  marginTop: '0.3rem',
                }}>{sub}</div>}
              </div>
            ))}

            {/* Arrow */}
            <div className="migration-arrow" style={{ color: 'rgba(0,56,49,0.3)', fontSize: '1.2rem', paddingTop: '0', flexShrink: 0, margin: '0 0.5rem' }}>--</div>

            {/* Kansas City */}
            <div style={{ textAlign: 'center', flex: 1, position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '12px', height: '12px',
                borderRadius: '50%',
                background: '#8B3A0F',
                margin: '3px auto 1.5rem',
              }} />
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                color: '#090C08',
                textTransform: 'uppercase',
                marginBottom: '0.3rem',
              }}>Kansas City</div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.8rem',
                color: '#003831',
                lineHeight: 1,
              }}>1955</div>
            </div>

            <div className="migration-arrow" style={{ color: 'rgba(0,56,49,0.3)', fontSize: '1.2rem', flexShrink: 0, margin: '0 0.5rem' }}>--</div>

            {/* Oakland -- special treatment */}
            <div style={{ textAlign: 'center', flex: 1, position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '18px', height: '18px',
                borderRadius: '50%',
                background: '#003831',
                border: '3px solid #003831',
                margin: '0 auto 1.5rem',
              }} />
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                color: '#090C08',
                textTransform: 'uppercase',
                marginBottom: '0.3rem',
                fontWeight: 500,
              }}>Oakland</div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2.2rem',
                color: '#003831',
                lineHeight: 1,
              }}>1968</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.58rem',
                letterSpacing: '0.1em',
                color: '#8B3A0F',
                marginTop: '0.4rem',
              }}>47 years</div>
            </div>

            <div className="migration-arrow" style={{ color: 'rgba(0,56,49,0.3)', fontSize: '1.2rem', flexShrink: 0, margin: '0 0.5rem' }}>--</div>

            {/* Las Vegas -- pulsing gold */}
            <div style={{ textAlign: 'center', flex: 1, position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '18px', height: '18px',
                borderRadius: '50%',
                background: '#C8AA76',
                margin: '0 auto 1.5rem',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                color: '#090C08',
                textTransform: 'uppercase',
                marginBottom: '0.3rem',
                fontWeight: 500,
              }}>Las Vegas</div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2.2rem',
                color: '#C8AA76',
                lineHeight: 1,
              }}>2028</div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.58rem',
                letterSpacing: '0.1em',
                color: '#C8AA76',
                marginTop: '0.4rem',
              }}>COMING 2028</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer style={{
        background: '#090C08',
        borderTop: '1px solid rgba(200,170,118,0.12)',
        padding: '4.5rem 3rem',
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.75rem',
          textAlign: 'center',
        }}>
          {/* Gold A mark */}
          <div style={{
            width: '52px', height: '52px',
            borderRadius: '50%',
            border: '2px solid #C8AA76',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="26" height="28" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 2L21 22H16.5L14.5 17H7.5L5.5 22H1L11 2Z" fill="#C8AA76"/>
              <rect x="7" y="14" width="8" height="2.5" fill="#090C08"/>
            </svg>
          </div>

          <p style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: '0.95rem',
            color: '#F5F0E8',
            opacity: 0.45,
            maxWidth: '520px',
            lineHeight: 1.6,
          }}>thelvathletics.com -- Covering the Las Vegas Athletics from Day Zero.</p>

          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              ['Blog', '/blog'],
              ['The Journey', '/blog/oakland-to-sacramento-to-vegas-timeline'],
              ['2028', '/blog/las-vegas-athletics-stadium-update-2026'],
            ].map(([label, href]) => (
              <Link key={label} href={href} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.68rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#C8AA76',
                opacity: 0.65,
                transition: 'opacity 0.2s',
              }}>{label}</Link>
            ))}
          </div>

          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            color: '#F5F0E8',
            opacity: 0.2,
          }}>Fan site. Not affiliated with the Athletics organization. &copy; 2026</p>
        </div>
      </footer>
    </>
  )
}
