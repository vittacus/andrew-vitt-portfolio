'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

type ProjectScreenshot = {
  src: string
  caption: string
}

type ProjectSection = {
  label: string
  text: string
}

type Project = {
  slug: string
  name: string
  tagline: string
  sections: ProjectSection[]
  demoUrl: string | null
  liveUrl: string | null
  githubUrl: string | null
  tags: string[]
  screenshots: ProjectScreenshot[]
}

const PROJECTS: Project[] = [
  {
    slug: 'noted',
    name: 'Noted',
    tagline: 'Music rating and discovery, the way you actually listen.',
    sections: [
      {
        label: 'The Problem',
        text: 'Letterboxd proved people want to rate what they consume thoughtfully and build an identity around their taste. Nothing does this well for music. Spotify\'s own rating system is a binary like/dislike buried in a menu, and it doesn\'t capture what actually made a song work: the lyrics, the production, or just its replay value. It also doesn\'t turn a listening history into something browsable or shareable.',
      },
      {
        label: 'What I Built',
        text: 'A full-stack rating platform where every song is scored across three dimensions (Replay Value, Lyrics, Production) rather than one flattened score. Those ratings feed two radar charts on a user\'s profile, Genre DNA and Vibe DNA, that turn a rating history into a visual taste identity. It also includes an ELO-style Battle Mode to re-rank a library head to head, mood-tagged collections users can customize, and a real social layer: a Postgres-backed follow graph, a community feed, and inline commenting.',
      },
      {
        label: 'A Key Decision',
        text: 'Since this is a portfolio piece, I originally built an auto-login flow so evaluators could explore a populated account without creating one. I rebuilt it as a read-only, server-rendered public demo route instead: faster, free of an entire class of authentication bugs, and closer to what someone evaluating a project actually wants. Separately, Spotify permanently deprecated the recommendation endpoint mid-build, so the recommendation logic had to be rebuilt on genre and artist overlap instead of Spotify\'s own collaborative filtering.',
      },
      {
        label: 'Outcome',
        text: 'A live, fully functional social music-rating app with a public no-signup demo anyone can click through immediately. The social layer is real, not a mockup: a Postgres-backed follow graph, live follower and following counts, and a handful of seeded friend accounts with genuine rating histories, so a first-time visitor sees a populated product rather than an empty state.',
      },
    ],
    demoUrl: 'https://noted-app-eight.vercel.app/demo',
    liveUrl: 'https://noted-app-eight.vercel.app',
    githubUrl: 'https://github.com/vittacus/noted-app',
    tags: ['Next.js 14', 'Supabase', 'Spotify Web API', 'Tailwind CSS', 'Vercel'],
    screenshots: [
      {
        src: '/images/projects/noted/Home Feed.png',
        caption: 'Community feed showing ratings as they happen, with inline commenting.',
      },
      {
        src: '/images/projects/noted/User Profile.png',
        caption: 'A user\'s profile: taste stats, Genre/Vibe DNA, and rating history.',
      },
      {
        src: '/images/projects/noted/Battle Mode.png',
        caption: 'ELO-style Battle Mode for re-ranking rated songs head to head.',
      },
      {
        src: '/images/projects/noted/Library View.png',
        caption: 'Full library with genre-coded accents, sort, and a grid/list toggle.',
      },
      {
        src: '/images/projects/noted/Mood Collection.png',
        caption: 'Mood-tagged collections, including custom user-created moods.',
      },
      {
        src: '/images/projects/noted/Genre DNA.png',
        caption: 'Genre DNA and Vibe DNA radar charts, built from a user\'s rating history.',
      },
    ],
  },
  {
    slug: 'us-stock-evaluation',
    name: 'US Stock Evaluation',
    tagline: 'Can technical indicators beat buy-and-hold?',
    sections: [
      {
        label: 'The Question',
        text: 'Can a machine learning model built on technical indicators actually outperform a simple buy-and-hold strategy on VOO, the S&P 500 ETF? Most retail algorithmic trading claims don\'t survive a clean backtest. This project was an attempt to find out honestly.',
      },
      {
        label: 'What I Built',
        text: 'The project pulls historical price data, engineers features like recent returns, moving averages, trading volume, volatility, and RSI, and trains a classification model to predict near-term price direction. The resulting strategy is backtested and compared against buy-and-hold across returns, Sharpe ratio, and maximum drawdown.',
      },
      {
        label: 'A Key Decision',
        text: 'Rather than optimizing for raw accuracy, the model evaluation centers on whether the strategy adds risk-adjusted value. A model that\'s right 55% of the time still loses if the wrong 45% are the big down moves. That framing, Sharpe ratio over accuracy, shaped what "better" meant throughout the project.',
      },
      {
        label: 'What It Shows',
        text: 'The strategy\'s actual results against buy-and-hold are visible in the live Streamlit dashboard. Whether it beats passive investing is the honest question, and the app shows the answer directly rather than cherry-picking favorable windows.',
      },
    ],
    demoUrl: null,
    liveUrl: 'https://voo-quant-strategy.streamlit.app/',
    githubUrl: 'https://github.com/vittacus/U.S.-Stock-Evaluation',
    tags: ['Python', 'scikit-learn', 'pandas', 'Streamlit', 'Plotly'],
    screenshots: [
      {
        src: '/images/projects/us-stock-evaluation/1.png',
        caption: 'Backtested strategy returns vs. buy and hold over the full period.',
      },
      {
        src: '/images/projects/us-stock-evaluation/2.png',
        caption: 'Model performance metrics and feature importance breakdown.',
      },
    ],
  },
  {
    slug: 'football-scouting',
    name: 'Football Player Scouting Engine',
    tagline: 'Find the next Saka before the market does.',
    sections: [
      {
        label: 'The Problem',
        text: 'Traditional scouting relies on name recognition, transfer fees, and gut feel, all of which are noisier signals than the actual on-pitch data. The question was whether statistical similarity could replace those proxies: given a player a club wants to replace or upgrade, find who actually plays like them.',
      },
      {
        label: 'What I Built',
        text: 'The tool pulls two seasons of Premier League data from FBref, builds separate feature sets for attackers and goalkeepers, and finds comparable players using cosine similarity on standardized per-90 stats. A club and player selector returns the five most similar options with a head-to-head stat comparison and a plain-language scouting verdict: not a chart to interpret, but a conclusion.',
      },
      {
        label: 'A Key Decision',
        text: 'An early attempt to predict minutes played as a value proxy was scrapped after testing showed no real relationship in the data. Rather than force a broken model, the value score became a transparent weighted composite where every input and its weight is stated openly. Interpretable by design, not as a fallback, because a scout needs to explain a recommendation, not just cite a number.',
      },
      {
        label: 'What It Shows',
        text: 'A tool that answers a real scouting question with an approach that\'s honest about what the data can and can\'t tell you. The dashboard is live and runs against current Premier League data. The deliberate simplification of the value model is the most important design decision in the project.',
      },
    ],
    demoUrl: null,
    liveUrl: 'https://vittacus-football-player-scouting-engine-appdashboard-walnhp.streamlit.app/',
    githubUrl: 'https://github.com/vittacus/Football-Player-Scouting-Engine',
    tags: ['Python', 'pandas', 'scikit-learn', 'Streamlit'],
    screenshots: [
      {
        src: '/images/projects/football-scouting/1.png',
        caption: 'Player similarity dashboard: pick a club and player to find comparable options.',
      },
      {
        src: '/images/projects/football-scouting/2.png',
        caption: 'Head-to-head stat comparison with value score breakdown.',
      },
      {
        src: '/images/projects/football-scouting/3.png',
        caption: 'Plain language scouting verdict with per-90 stat overlay.',
      },
    ],
  },
]

function ScreenshotCard({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <figure style={{ margin: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: 4,
          border: '1px solid var(--border)',
          boxShadow: '0 2px 14px rgba(0, 0, 0, 0.18)',
        }}
      />
      <figcaption
        className="mono"
        style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.06em', marginTop: '0.5rem' }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

const ARROW_BTN: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 28,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--bg)',
  border: '1px solid var(--border)',
  borderRadius: 3,
  color: 'var(--text-muted)',
  cursor: 'pointer',
  fontSize: '14px',
  lineHeight: 1,
  fontFamily: 'var(--font-mono), monospace',
  padding: 0,
}

const AUTO_ADVANCE_MS = 4500
const RESUME_AFTER_MS = 6000

function ScreenshotCarousel({ screenshots }: { screenshots: ProjectScreenshot[] }) {
  const [idx, setIdx] = useState(0)
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleResume = useCallback(() => {
    pausedRef.current = true
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false
    }, RESUME_AFTER_MS)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setIdx(i => (i + 1) % screenshots.length)
      }
    }, AUTO_ADVANCE_MS)
    return () => {
      clearInterval(timer)
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [screenshots.length])

  const prev = () => {
    scheduleResume()
    setIdx(i => (i - 1 + screenshots.length) % screenshots.length)
  }
  const next = () => {
    scheduleResume()
    setIdx(i => (i + 1) % screenshots.length)
  }
  const goTo = (i: number) => {
    scheduleResume()
    setIdx(i)
  }

  const shot = screenshots[idx]

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <figure style={{ margin: 0 }}>
        <div style={{ position: 'relative' }}>
          <div
            style={{
              borderRadius: 4,
              border: '1px solid var(--border)',
              boxShadow: '0 2px 14px rgba(0, 0, 0, 0.18)',
              overflow: 'hidden',
              background: 'var(--surface)',
              height: 420,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={shot.src}
              src={shot.src}
              alt={`screenshot ${idx + 1} of ${screenshots.length}`}
              style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </div>
          <button onClick={prev} style={{ ...ARROW_BTN, left: 8 }}>‹</button>
          <button onClick={next} style={{ ...ARROW_BTN, right: 8 }}>›</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.5rem' }}>
          <figcaption
            key={shot.caption}
            className="mono"
            style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.06em' }}
          >
            {shot.caption}
          </figcaption>
          <span className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.06em', flexShrink: 0, marginLeft: '1rem' }}>
            {idx + 1} / {screenshots.length}
          </span>
        </div>
      </figure>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '0.65rem' }}>
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: i === idx ? 'var(--text-secondary)' : 'var(--border)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'background 200ms',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  isOpen,
  onToggle,
}: {
  project: Project
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="project-row">
      <div className="project-header" onClick={onToggle}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '0.35rem',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text)' }}>
            {project.name}
          </span>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              onClick={(e) => e.stopPropagation()}
            >
              Try the Demo ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              onClick={(e) => e.stopPropagation()}
            >
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub ↗
            </a>
          )}
        </div>

        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            marginBottom: '0.5rem',
          }}
        >
          {project.tagline}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--text-muted)', flexShrink: 0 }}
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="case-study-btn">
          <span>{isOpen ? 'Close case study' : 'Read the case study'}</span>
          <span
            style={{
              display: 'inline-block',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 300ms ease',
              lineHeight: 1,
            }}
          >
            ▾
          </span>
        </div>
      </div>

      {/* accordion body */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 350ms ease',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div style={{ paddingTop: '1.5rem' }}>
            {project.screenshots.length > 2 ? (
              <ScreenshotCarousel screenshots={project.screenshots} />
            ) : project.screenshots.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
                {project.screenshots.map((shot, i) => (
                  <ScreenshotCard
                    key={shot.src}
                    src={shot.src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    caption={shot.caption}
                  />
                ))}
              </div>
            ) : null}

            {/* Structured case study sections */}
            <div style={{ marginBottom: '1.25rem' }}>
              {project.sections.map((section, i) => (
                <div key={section.label} style={{ marginBottom: i < project.sections.length - 1 ? '1rem' : 0 }}>
                  <p
                    className="mono"
                    style={{
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '0.3rem',
                      userSelect: 'none',
                    }}
                  >
                    {section.label}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
              <span
                className="mono"
                style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.06em', marginRight: '0.25rem' }}
              >
                Built with
              </span>
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill-quiet">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  return (
    <section id="projects" className="section-wrap" style={{ paddingTop: 0 }}>
      <p
        className="mono"
        style={{
          fontSize: '12px',
          letterSpacing: '0.08em',
          color: 'var(--amber)',
          marginBottom: '2rem',
          userSelect: 'none',
        }}
      >
        [ Projects ]
      </p>
      {PROJECTS.map((proj) => (
        <ProjectCard
          key={proj.slug}
          project={proj}
          isOpen={openSlug === proj.slug}
          onToggle={() =>
            setOpenSlug(openSlug === proj.slug ? null : proj.slug)
          }
        />
      ))}
    </section>
  )
}
