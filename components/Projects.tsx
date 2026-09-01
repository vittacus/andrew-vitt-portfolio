const PROJECTS = [
  {
    name: 'Noted',
    tagline: 'Music rating and discovery, the way you actually listen.',
    description: 'A social platform for tracking albums, rating tracks, and sharing taste. Built with Next.js and Supabase. Features a personalized discovery feed, collection management, and a radar chart for taste profiling.',
    liveUrl: 'https://noted-app.vercel.app',
    githubUrl: 'https://github.com/vittacus/noted-app',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Product'],
    featured: true,
  },
  {
    name: 'VOO Quant/ML Trading Strategy',
    tagline: 'Can technical indicators beat buy-and-hold?',
    description: 'An ML pipeline that predicts daily VOO price direction using technical indicators (RSI, MACD, Bollinger Bands, moving averages). Trains a Random Forest classifier and backtests against a passive buy-and-hold benchmark. Built with scikit-learn and visualized with Plotly in a Streamlit dashboard.',
    liveUrl: 'https://voo-quant-strategy.streamlit.app/',
    githubUrl: 'https://github.com/vittacus/U.S.-Stock-Evaluation',
    tags: ['Python', 'scikit-learn', 'pandas', 'Streamlit', 'Plotly'],
    featured: false,
  },
  {
    name: 'Drive Organizer',
    tagline: 'Automated Google Drive cleanup — folders, names, duplicates.',
    description: 'A Python tool that audits and reorganizes Google Drive folders using the Drive API. Detects duplicates, suggests naming conventions, and generates a reorganization report.',
    liveUrl: null,
    githubUrl: 'https://github.com/vittacus/drive-organizer',
    tags: ['Python', 'Google Drive API', 'Automation'],
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-wrap" style={{ paddingTop: 0 }}>
      <p
        className="mono"
        style={{
          fontSize: '12px',
          letterSpacing: '0.08em',
          color: 'var(--text)',
          marginBottom: '2rem',
          userSelect: 'none',
        }}
      >
        [ Projects ]
      </p>
      {PROJECTS.map((proj) => (
        <div key={proj.name} className="project-row">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text)' }}>{proj.name}</span>
            {proj.liveUrl && (
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Live ↗
              </a>
            )}
            {proj.githubUrl && (
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                GitHub ↗
              </a>
            )}
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
            {proj.tagline}
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
            {proj.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
            {proj.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
