'use client'

import { useState, useEffect, useRef } from 'react'

interface ActiveItem {
  label: string
  photo: string
  caption: string
  description: string
}

const INTEREST_MAP: Record<string, Omit<ActiveItem, 'label'>> = {
  'Me [casual]': {
    photo: '/images/photo-casual.jpeg',
    caption: '[ Casual, 2025 ]',
    description: "I love trying new things, both food and culture. I've traveled around the country and love Boston, which is where I am in the picture to the right!",
  },
  'Me [professional]': {
    photo: '/images/photo-professional.jpg',
    caption: '[ Berkeley, 2026 ]',
    description: "On a professional level, I have been the President of a tech-consulting organization at UC Berkeley, which focuses on providing URM opportunities in tech, business, and design!",
  },
  Music: {
    photo: '/images/photo-music.jpeg',
    caption: '[ Music, 2025 ]',
    description: "I play 10+ different instruments, my primary being the alto saxophone! I've had the opportunity to be part of plenty of high level jazz and classical bands in California. Outside of competition, I play and write pop, alternative, and R&B music.",
  },
  Soccer: {
    photo: '/images/photo-soccer.jpeg',
    caption: '[ Soccer, 2025 ]',
    description: "Another HUGE passion of mine. I've played countless years of intramurals at UC Berkeley, club, and now even at a semi-pro level! My favorite team is FC Barcelona :)",
  },
  Climbing: {
    photo: '/images/photo-climbing.png',
    caption: '[ Climbing, 2025 ]',
    description: "A relatively new hobby of mine (around a year), but I love the puzzle aspect of this sport. It's so interesting how many ways you can tackle different grades. I'm currently a V6 climber.",
  },
  Surfing: {
    photo: '/images/photo-surf.JPG',
    caption: '[ Surf, 2025 ]',
    description: "Growing up near the beach, swimming and surfing have been a huge part of my life. The board pictured here is actually a custom 6.7 ft board that I use. I'm looking forward to having a collection in the future.",
  },
  Eats: {
    photo: '/images/photo-eating.jpeg',
    caption: '[ Eats, 2025 ]',
    description: "One of my favorite pastimes is eating yummy food. KBBQ is a staple, and I really enjoy hitting up new spots to see how they compare.",
  },
  Pets: {
    photo: '/images/photo-ollie.jpeg',
    caption: '[ Ollie, 2025 ]',
    description: "I have two dogs, the one pictured is Ollie, my 10 yr old Shih Tzu. I also have a 2 year old Golden Retriever named Bodie (he does not like his picture taken).",
  },
}

const LEFT_COL  = ['Me [casual]', 'Music', 'Climbing', 'Eats']
const RIGHT_COL = ['Me [professional]', 'Soccer', 'Surfing', 'Pets']
const CYCLE_ORDER = Object.keys(INTEREST_MAP)
const ALL_PHOTOS = Object.values(INTEREST_MAP)
  .map((e) => e.photo)
  .filter((src, i, arr) => arr.indexOf(src) === i)
const DEFAULT_ACTIVE: ActiveItem = { label: 'Me [casual]', ...INTEREST_MAP['Me [casual]'] }

const PROFILE_LINKS = [
  { label: 'Resume',   href: '/andrew-vitt-resume.pdf', download: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrew-vitt/' },
  { label: 'GitHub',   href: 'https://github.com/vittacus' },
  { label: 'Email',    href: 'mailto:vitt.andrew@berkeley.edu' },
]

export default function About() {
  const [active, setActive] = useState<ActiveItem>(DEFAULT_ACTIVE)
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cycleIdxRef = useRef(0)
  const advanceRef  = useRef<((delay?: number) => void) | undefined>(undefined)
  const photoInnerRef = useRef<HTMLDivElement>(null)
  const heroPhotoInnerRef = useRef<HTMLDivElement>(null)

  // Interest auto-cycling
  useEffect(() => {
    function advance(delay = 3500) {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        const nextIdx = (cycleIdxRef.current + 1) % CYCLE_ORDER.length
        cycleIdxRef.current = nextIdx
        const label = CYCLE_ORDER[nextIdx]
        setActive({ label, ...INTEREST_MAP[label] })
        advance()
      }, delay)
    }
    advanceRef.current = advance
    advance()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  // Scroll-driven parallax pan — applied to both the hero photo and the Interests cycling photo
  useEffect(() => {
    function onScroll() {
      const section = document.getElementById('about')
      if (!section) return
      const rect = section.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.65)))
      if (photoInnerRef.current)
        photoInnerRef.current.style.transform = `translateY(-${progress * 10}%)`
      if (heroPhotoInnerRef.current)
        heroPhotoInnerRef.current.style.transform = `translateY(-${progress * 8}%)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleClick(label: string) {
    const idx = CYCLE_ORDER.indexOf(label)
    cycleIdxRef.current = idx
    setActive({ label, ...INTEREST_MAP[label] })
    advanceRef.current?.(6000)
  }

  return (
    <section
      id="about"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 2.5rem 4rem' }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>

        {/* ── Hero: text left + professional photo right ── */}
        <div className="hero-top" style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', marginBottom: '4rem' }}>
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <h1
              className="display-name"
              style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 4.5rem)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                color: 'var(--text)',
                marginBottom: '1rem',
                lineHeight: 1.1,
              }}
            >
              Andrew Vitt
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              Aspiring Product Manager, dual degree student in Data Science and Legal Studies at UC Berkeley
            </p>

            {/* About Me */}
            <div style={{ marginBottom: '1.75rem' }}>
              <p className="mono" style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'var(--amber)', marginBottom: '1.1rem', userSelect: 'none' }}>
                [ About Me ]
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.85 }}>
                I&apos;ve always been drawn to where different roles overlap. Data tells you what&apos;s happening, policy tells you whether it should/should not be, and product tells you what to actually do about it. Most specialize in one of these lanes, but I&apos;ve spent my time as a student at UC Berkeley in combination with every internship to work across all three. I&apos;m currently looking for product management roles at companies where data literacy, sound judgement, and curiosity about people all matter. I believe a background that doesn&apos;t fit neatly into one box is not a weakness, but instead what allows for fresh perspective to be brought to any industry!
              </p>
            </div>

            {/* Profile links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {PROFILE_LINKS.map(({ label, href, download }) => (
                <a
                  key={label}
                  href={href}
                  download={download || undefined}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Hero photo — parallax pan, same pattern as the Interests cycling photo below */}
          <div style={{ flex: '0 0 240px', width: '240px', maxWidth: '240px' }}>
            <div style={{ aspectRatio: '3/4', borderRadius: 6, overflow: 'hidden', border: '1px solid var(--border)', position: 'relative' }}>
              <div
                ref={heroPhotoInnerRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 'calc(100% + 20%)',
                  willChange: 'transform',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/photo-professional.jpg"
                  alt="Andrew Vitt"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 0 2.5rem' }} />

        {/* ── Interests + Photo row ── */}
        {/* alignItems: center so the shorter interests list sits centered beside the taller photo */}
        <div
          className="about-bottom"
          style={{
            display: 'flex',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Interests */}
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <p className="mono" style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'var(--amber)', marginBottom: '1.1rem', userSelect: 'none' }}>
              [ Interests ]
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem', marginBottom: '1.25rem' }}>
              <div>
                {LEFT_COL.map((label) => (
                  <button
                    key={label}
                    className="interest-btn"
                    onClick={() => handleClick(label)}
                    style={{
                      fontWeight: active.label === label ? 600 : 400,
                      textDecoration: active.label === label ? 'underline' : 'none',
                      textUnderlineOffset: '3px',
                      color: active.label === label ? 'var(--text)' : undefined,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div>
                {RIGHT_COL.map((label) => (
                  <button
                    key={label}
                    className="interest-btn"
                    onClick={() => handleClick(label)}
                    style={{
                      fontWeight: active.label === label ? 600 : 400,
                      textDecoration: active.label === label ? 'underline' : 'none',
                      textUnderlineOffset: '3px',
                      color: active.label === label ? 'var(--text)' : undefined,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <p
              key={active.label}
              style={{
                fontSize: '0.825rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                animation: 'fadeSlideIn 0.25s ease',
              }}
            >
              {active.description}
            </p>
          </div>

          {/* Photo — natural 3:4 aspect-ratio from CSS, parallax inside photo-frame's overflow */}
          <div style={{ flex: '0 0 300px', width: '300px', maxWidth: '300px' }}>
            <div className="photo-frame">
              {/* Parallax slider — 20% taller than frame for scroll pan headroom */}
              <div
                ref={photoInnerRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 'calc(100% + 20%)',
                  willChange: 'transform',
                }}
              >
                {ALL_PHOTOS.map((src) => (
                  <div key={src} className={`photo-layer${src === active.photo ? ' visible' : ''}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <p
              key={active.caption}
              className="mono"
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                marginTop: '0.6rem',
                textAlign: 'center',
                animation: 'fadeSlideIn 0.25s ease',
              }}
            >
              {active.caption}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 820px) {
          .hero-top { flex-direction: column !important; }
          .hero-top > div:last-child { flex: none !important; width: 100% !important; max-width: 320px !important; }
          .about-bottom { flex-direction: column !important; }
          .about-bottom > div:last-child { flex: none !important; width: 100% !important; max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
