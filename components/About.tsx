'use client'

import { useState } from 'react'

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

// All unique photo srcs — pre-rendered for smooth crossfades
const ALL_PHOTOS = Object.values(INTEREST_MAP).map((e) => e.photo).filter((src, i, arr) => arr.indexOf(src) === i)

const DEFAULT_ACTIVE: ActiveItem = { label: 'Me [casual]', ...INTEREST_MAP['Me [casual]'] }

export default function About() {
  const [active, setActive] = useState<ActiveItem | null>(DEFAULT_ACTIVE)

  function handleClick(label: string) {
    const entry = INTEREST_MAP[label]
    setActive((prev) => (prev?.label === label ? null : { label, ...entry }))
  }

  return (
    <section
      id="about"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 2.5rem 4rem' }}
    >
      <div
        className="about-grid"
        style={{ maxWidth: 900, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem', alignItems: 'start' }}
      >
        {/* ── Left column ── */}
        <div>
          <h1
            className="mono"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: '2.5rem', lineHeight: 1.05 }}
          >
            Andrew Vitt
          </h1>

          {/* TL;DR */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p className="mono" style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'var(--text)', marginBottom: '1.1rem', userSelect: 'none' }}>
              [ TL;DR ]
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.1rem', maxWidth: '480px' }}>
              UC Berkeley &rsquo;26 — dual degree in Data Science &amp; Legal Studies. Building at
              the intersection of data, policy, and product. Seeking PM roles.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {[
                { label: 'Resume',   href: '/andrew-vitt-resume.pdf', download: true },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrew-vitt/' },
                { label: 'GitHub',   href: 'https://github.com/vittacus' },
                { label: 'Email',    href: 'mailto:vitt.andrew@berkeley.edu' },
              ].map(({ label, href, download }) => (
                <a
                  key={label}
                  href={href}
                  download={download || undefined}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <p className="mono" style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'var(--text)', marginBottom: '1.1rem', userSelect: 'none' }}>
              [ Interests ]
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem', marginBottom: active ? '1.25rem' : 0 }}>
              <div>
                {LEFT_COL.map((label) => (
                  <button
                    key={label}
                    className="interest-btn"
                    onClick={() => handleClick(label)}
                    style={{
                      fontWeight: active?.label === label ? 600 : 400,
                      textDecoration: active?.label === label ? 'underline' : 'none',
                      textUnderlineOffset: '3px',
                      color: active?.label === label ? 'var(--text)' : undefined,
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
                      fontWeight: active?.label === label ? 600 : 400,
                      textDecoration: active?.label === label ? 'underline' : 'none',
                      textUnderlineOffset: '3px',
                      color: active?.label === label ? 'var(--text)' : undefined,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {active && (
              <p
                key={active.label}
                style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '480px', animation: 'fadeSlideIn 0.25s ease' }}
              >
                {active.description}
              </p>
            )}
          </div>
        </div>

        {/* ── Right column: crossfading photo stack ── */}
        <div style={{ position: 'sticky', top: '5rem' }}>
          <div
            className="photo-frame"
            style={{ opacity: active ? 1 : 0, transition: 'opacity 0.3s ease' }}
          >
            {ALL_PHOTOS.map((src) => (
              <div key={src} className={`photo-layer${src === active?.photo ? ' visible' : ''}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              </div>
            ))}
          </div>

          <p
            className="mono"
            style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.08em', marginTop: '0.6rem', textAlign: 'center', opacity: active ? 1 : 0, transition: 'opacity 0.3s ease' }}
          >
            {active?.caption ?? ''}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 680px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
