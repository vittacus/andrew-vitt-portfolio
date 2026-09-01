const CONTACTS = [
  { label: 'Email',     value: 'vitt.andrew@berkeley.edu',     href: 'mailto:vitt.andrew@berkeley.edu' },
  { label: 'LinkedIn',  value: '/in/andrew-vitt',              href: 'https://www.linkedin.com/in/andrew-vitt/' },
  { label: 'GitHub',    value: 'vittacus',                     href: 'https://github.com/vittacus' },
  { label: 'Instagram', value: '@andrewvitt12',                href: 'https://www.instagram.com/andrewvitt12' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-wrap" style={{ paddingTop: 0 }}>
      <p
        className="mono"
        style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'var(--text)', marginBottom: '2rem', userSelect: 'none' }}
      >
        [ Contact ]
      </p>
      {CONTACTS.map((c) => (
        <div key={c.label} className="contact-row">
          <span
            className="mono"
            style={{ fontSize: '11px', color: 'var(--text)', letterSpacing: '0.06em', fontWeight: 600 }}
          >
            {c.label}
          </span>
          <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
            {c.value}
          </a>
        </div>
      ))}
      <p
        className="mono"
        style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '3rem', letterSpacing: '0.06em' }}
      >
        [ andrewvitt.com — {new Date().getFullYear()} ]
      </p>
    </section>
  )
}
