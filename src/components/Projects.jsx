import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight, FiGlobe } from 'react-icons/fi'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="eyebrow">04 · Manifest</div>
        <div className="section-head">
          <h2>Personal Projects</h2>
          <p>Personal builds and side projects — each one shipped, tagged and tracked on GitHub.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              className="shipment-card"
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div className="shipment-card-head">
                <span className="manifest-no">#{p.id}</span>
                <span className="shipment-status">{p.status}</span>
              </div>
              <div className="shipment-title">{p.title}</div>
              <div className="shipment-dates">{p.dates}</div>
              <p className="shipment-desc">{p.description}</p>
              <ul className="shipment-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="shipment-stack">
                {p.stack.map((s) => (
                  <span className="tech-chip" key={s}>
                    {s}
                  </span>
                ))}
                {p.live && (<span className="tech-chip" key={p.stack.size}>
                  <a
                    className="shipment-link1"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGlobe size={15} /> Live Demo <FiArrowUpRight size={13} />
                  </a></span>
                )}
               
              </div>
              <a className="shipment-link" href={p.github} target="_blank" rel="noreferrer">
                <FiGithub size={15} /> View repository <FiArrowUpRight size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
