import FaviconLogo from './FaviconLogo'

const INVOLVEMENTS = [
  {
    initials: 'DT',
    favicon: 'https://www.diversatech.org/favicon.ico',
    org: 'DiversaTech',
    url: 'https://www.diversatech.org',
    role: 'President',
    period: 'June 2024 – Present',
    tags: ['Leadership', 'Operations', 'Business Development'],
  },
  {
    initials: 'BC',
    favicon: null,
    org: 'BCEC',
    url: 'https://www.linkedin.com/company/bcec-berkeley',
    role: 'Project Manager Lead',
    period: 'Fall 2023 – Spring 2024',
    tags: ['Project Management', 'Strategy', 'Entertainment'],
  },
]

export default function Involvements() {
  return (
    <section id="involvements" className="section-wrap" style={{ paddingTop: 0 }}>
      <p
        className="mono"
        style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'var(--text)', marginBottom: '2rem', userSelect: 'none' }}
      >
        [ Involvements ]
      </p>
      {INVOLVEMENTS.map((inv) => (
        <a
          key={inv.org}
          href={inv.url}
          target="_blank"
          rel="noopener noreferrer"
          className="row-item row-clickable"
          style={{ alignItems: 'flex-start', gap: '1rem' }}
        >
          <FaviconLogo src={inv.favicon} initials={inv.initials} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <span className="company-link">{inv.org}</span>
              <span className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)', flexShrink: 0 }}>{inv.period}</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0.15rem 0 0.6rem' }}>{inv.role}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {inv.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </section>
  )
}
