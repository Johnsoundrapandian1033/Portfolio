import { motion } from 'framer-motion'
import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="eyebrow">03 · Route History</div>
        <div className="section-head">
          <h2>Work Experience</h2>
          <p>Every stop on the route, from onboarding to production.</p>
        </div>

        <div className="route-timeline">
          {experience.map((job, i) => (
            <motion.div
              className="route-node"
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="route-card">
                <div className="route-card-head">
                  <div>
                    <div className="route-role">{job.role}</div>
                    <div className="route-company">{job.company} · {job.location}</div>
                  </div>
                  <div className="route-dates">
                    {job.manifestNo} · {job.start} — {job.end}
                  </div>
                </div>
                <ul className="route-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
