import { motion } from 'framer-motion'
import { achievements } from '../data/portfolio.js'

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="eyebrow">05 · Certificates of Origin</div>
        <div className="section-head">
          <h2>Milestones worth stamping</h2>
        </div>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              className="seal-card"
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="seal-icon">{String(i + 1).padStart(2, '0')}</div>
              <h3>{a.title}</h3>
              <p>{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
