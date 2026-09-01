'use client'

import { useState } from 'react'

const SIZE = 36

function SVGBadge({ initials, bg = '#1c1917', fg = '#e2d9c5' }: { initials: string; bg?: string; fg?: string }) {
  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      style={{ flexShrink: 0, display: 'block' }}
      aria-hidden="true"
    >
      <rect width={SIZE} height={SIZE} rx="4" fill={bg} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text
        x={SIZE / 2}
        y={SIZE / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        fill={fg}
        fontFamily="'Courier New', monospace"
        fontSize="10"
        fontWeight="700"
        letterSpacing="0.5"
      >
        {initials}
      </text>
    </svg>
  )
}

export default function FaviconLogo({
  src,
  initials,
  lightBg = false,
  badgeBg,
  badgeFg,
}: {
  src: string | null
  initials: string
  lightBg?: boolean
  badgeBg?: string
  badgeFg?: string
}) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return <SVGBadge initials={initials} bg={badgeBg} fg={badgeFg} />
  }

  return (
    <div
      style={{
        width: SIZE,
        height: SIZE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: lightBg ? '#ffffff' : 'var(--surface)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 4,
        flexShrink: 0,
        overflow: 'hidden',
        padding: 2,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={initials}
        onError={() => setFailed(true)}
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      />
    </div>
  )
}
