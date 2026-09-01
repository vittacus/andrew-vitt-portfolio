'use client'

import { useState } from 'react'

const COURSES = [
  { code: 'DATA C8',     name: 'Foundations of Data Science',                  category: 'Data Science & CS' },
  { code: 'DATA C100',   name: 'Principles & Techniques of Data Science',      category: 'Data Science & CS' },
  { code: 'DATA C104',   name: 'Human Contexts and Ethics of Data',            category: 'Data Science & CS' },
  { code: 'INDENG 142A', name: 'Machine Learning and Data Analytics',          category: 'Data Science & CS' },
  { code: 'INDENG 174',  name: 'Simulation for Enterprise Systems',            category: 'Data Science & CS' },
  { code: 'STAT 134',    name: 'Concepts of Probability',                      category: 'Data Science & CS' },
  { code: 'MATH W54',    name: 'Linear Algebra and Differential Equations',    category: 'Data Science & CS' },

  { code: 'COMPSCI 61A', name: 'Structure and Interpretation of Computer Programs', category: 'Data Science & CS' },
  { code: 'COMPSCI 61B', name: 'Data Structures',                             category: 'Data Science & CS' },
  { code: 'COMPSCI 169A',name: 'Introduction to Software Engineering',        category: 'Data Science & CS' },

  { code: 'UGBA 88',     name: 'Data and Decisions',                          category: 'Business' },
  { code: 'UGBA 104',    name: 'Introduction to Business Analytics',          category: 'Business' },
  { code: 'ECON 1',      name: 'Introduction to Economics',                   category: 'Business' },
  { code: 'ECON 140',    name: 'Econometrics',                                category: 'Business' },
  { code: 'INDENG 120',  name: 'Principles of Engineering Economics',         category: 'Business' },
  { code: 'INDENG 166',  name: 'Decision Analytics',                          category: 'Business' },
  { code: 'LEGALST 149', name: 'Law, Technology and Entrepreneurship',        category: 'Business' },
  { code: 'GPP 115',     name: 'Global Poverty: Challenges and Hopes',        category: 'Business' },

  { code: 'PHILOS 2',    name: 'Individual Morality and Social Justice',      category: 'Other' },
  { code: 'EPS 7',       name: 'Introduction to Climate Change',              category: 'Other' },
  { code: 'ANTHRO 2AC',  name: 'Introduction to Archaeology',                 category: 'Other' },
  { code: 'MUSIC 25',    name: 'Introduction to Music Theory',                category: 'Other' },
]

const CATEGORIES = ['Data Science & CS', 'Business', 'Other']

export default function Coursework() {
  const [active, setActive] = useState('Data Science & CS')

  const filtered = COURSES.filter((c) => c.category === active)

  return (
    <section id="coursework" className="section-wrap" style={{ paddingTop: 0 }}>
      <p
        className="mono"
        style={{ fontSize: '12px', letterSpacing: '0.08em', color: 'var(--text)', marginBottom: '1.5rem', userSelect: 'none' }}
      >
        [ Coursework ]
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`tab-btn${active === cat ? ' active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.map((course) => (
        <div key={course.code} className="course-row">
          <span className="mono" style={{ fontSize: '11px', color: 'var(--text)', fontWeight: 600, letterSpacing: '0.04em' }}>
            {course.code}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            {course.name}
          </span>
        </div>
      ))}
    </section>
  )
}
