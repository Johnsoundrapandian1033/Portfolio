import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '../hooks/useCountUp.js'
import { stats } from '../data/portfolio.js'

function StatCell({ value, suffix, label, start }) {
  const count = useCountUp(value, { start })
  return (
    <div className="stat-cell">
      <div className="stat-value">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function StatsStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="stats-strip" ref={ref}>
      <div className="container stats-grid">
        {stats.map((s) => (
          <StatCell key={s.label} {...s} start={inView} />
        ))}
      </div>
    </section>
  )
}
