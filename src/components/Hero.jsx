import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { profile } from '../data/portfolio.js'

const techStack = ['Java 8', 'Spring Boot 3', 'PostgreSQL', 'AngularJS', 'REST APIs', 'Microservices']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hero-status">
            <span className="dot-live" /> Immediate joiner · Chennai, India
          </div>

          <h1>
            Building scalable <span className="accent">applications</span>, One
            <br />
            solution at a time.
          </h1>

          <p className="hero-tagline"> {"// "+profile.tagline}</p>

          <p className="hero-lede">{profile.summary.split('.')[0]}. Focused on Spring Boot services, well-indexed PostgreSQL, and APIs that hold up in production.</p>

          <div className="hero-cta">
            <a
              className="btn btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Manifest <FiArrowRight size={16} />
            </a>
            <a className="btn btn-outline" href={profile.resumeFile} download>
              <FiDownload size={16} /> Download Resume
            </a>
          </div>

          <div className="hero-tech-row">
            {techStack.map((t) => (
              <span className="tech-chip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="manifest-card justify-content-center">
            <div className="manifest-photo-frame">
              <img src={profile.photo} alt={`${profile.name} portrait`} loading="eager" />
            </div>
            <div className="manifest-perforation" />
            <div className="manifest-footer-row">
              <span className="manifest-name">{profile.name}</span>
              <span className="manifest-badge">Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
