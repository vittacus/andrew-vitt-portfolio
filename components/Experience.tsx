import FaviconLogo from './FaviconLogo'

const EXPERIENCES = [
  {
    initials: 'SX',
    favicon: '/images/logo-spacex.png',
    lightBg: true,
    badgeBg: undefined,
    badgeFg: undefined,
    company: 'SpaceX',
    url: 'https://www.spacex.com',
    role: 'Product Manager Intern & Supply Chain Intern',
    period: 'June 2025 – Aug 2025',
    tags: ['Product Strategy', 'Supply Chain', 'Data Analysis'],
  },
  {
    initials: 'TS',
    favicon: '/images/logo-takes.png',
    lightBg: false,
    badgeBg: undefined,
    badgeFg: undefined,
    company: 'Takes Sports',
    url: 'https://www.linkedin.com/company/takesinc/',
    role: 'Product Manager Intern',
    period: 'Mar 2023 – May 2025',
    tags: ['Product Management', 'A/B Testing', 'User Research'],
  },
  {
    initials: 'XM',
    favicon: 'https://www.siriusxm.com/favicon.ico',
    lightBg: false,
    badgeBg: undefined,
    badgeFg: undefined,
    company: 'SiriusXM / Pandora',
    url: 'https://www.siriusxm.com',
    role: 'Project Manager, Product Strategy (Consulting Engagement)',
    period: 'June 2024 – Present',
    tags: ['Product Strategy', 'User Research', 'Healthcare'],
  },
  {
    initials: 'LN',
    favicon: 'https://www.livenationentertainment.com/favicon.ico',
    lightBg: false,
    badgeBg: undefined,
    badgeFg: undefined,
    company: 'Live Nation Entertainment',
    url: 'https://www.livenationentertainment.com',
    role: 'Product Manager (Contract)',
    period: 'Jan 2024 – June 2024',
    tags: ['Product Management', 'User Research', 'Roadmapping'],
  },
  {
    initials: 'SP',
    favicon: 'https://splice.com/favicon.ico',
    lightBg: false,
    badgeBg: undefined,
    badgeFg: undefined,
    company: 'Splice',
    url: 'https://splice.com',
    role: 'Product Strategy Intern (Consulting Engagement)',
    period: 'May 2024 – Dec 2024',
    tags: ['Go-to-Market Strategy', 'Market Research', 'Brand Partnerships'],
  },
  {
    initials: 'WB',
    favicon: '/images/logo-wbd.png',
    lightBg: false,
    badgeBg: '#1a237e',
    badgeFg: '#FFD700',
    company: 'Warner Bros. Discovery',
    url: 'https://wbd.com',
    role: 'Product Strategy (Contract)',
    period: 'Aug 2023 – Dec 2023',
    tags: ['Product Strategy', 'Analytics', 'Stakeholder Management'],
  },
  {
    initials: 'JP',
    favicon: 'https://www.jpmorganchase.com/favicon.ico',
    lightBg: false,
    badgeBg: undefined,
    badgeFg: undefined,
    company: 'JPMorgan Chase',
    url: 'https://www.jpmorganchase.com',
    role: 'Project Manager, Business Strategy (Contract)',
    period: 'May 2024 – Dec 2024',
    tags: ['SQL', 'Data Analytics', 'Business Strategy'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-wrap" style={{ paddingTop: '2.5rem' }}>
      <p
        className="mono"
        style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'var(--text)', marginBottom: '2rem', userSelect: 'none' }}
      >
        [ Work Experience ]
      </p>
      {EXPERIENCES.map((exp) => (
        <a
          key={exp.company}
          href={exp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="row-item row-clickable"
          style={{ alignItems: 'flex-start', gap: '1rem' }}
        >
          <FaviconLogo
            src={exp.favicon}
            initials={exp.initials}
            lightBg={exp.lightBg}
            badgeBg={exp.badgeBg}
            badgeFg={exp.badgeFg}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <span className="company-link">{exp.company}</span>
              <span className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)', flexShrink: 0 }}>{exp.period}</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '0.15rem 0 0.6rem' }}>{exp.role}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {exp.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </section>
  )
}
