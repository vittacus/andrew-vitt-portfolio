'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
  twinkleOffset: number
  twinkleSpeed: number
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const COUNT = 280
    let particles: Particle[] = []
    let raf: number
    let t = 0

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
      init()
    }

    function init() {
      if (!canvas) return
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.3,
        opacity: Math.random() * 0.55 + 0.08,
        vx: (Math.random() - 0.5) * 0.08,
        vy: -Math.random() * 0.1 - 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
      }))
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDark = document.documentElement.classList.contains('dark')
      const r = isDark ? 210 : 100
      const g = isDark ? 185 : 78
      const b = isDark ? 140 : 48

      for (const p of particles) {
        const twinkle = Math.sin(t * p.twinkleSpeed + p.twinkleOffset) * 0.15
        const alpha = Math.max(0, Math.min(0.6, p.opacity + twinkle))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.y < -2) { p.y = canvas.height + 2; p.x = Math.random() * canvas.width }
        if (p.x < -2) p.x = canvas.width + 2
        if (p.x > canvas.width + 2) p.x = -2
      }

      t++
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(document.documentElement)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
