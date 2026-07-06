import { useState } from 'react'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import { navLinks, profile } from '../data/portfolio.js'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Primary">
        <a
          href="#top"
          className="brand"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="brand-tag">&lt;/&gt;</span> John.dev
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <button key={link.target} className="nav-link-btn" onClick={() => scrollTo(link.target)}>
              <span className={`method-tag ${link.method.toLowerCase()}`}>--</span>
              {link.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="btn btn-outline"
            style={{ padding: '8px 14px', fontSize: '0.8rem' }}
            href={profile.resumeFile}
            download
          >
            <FiDownload size={14} /> Resume
          </a>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
          <button
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-panel ${open ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.target}
            className="nav-link-btn"
            onClick={() => {
              scrollTo(link.target)
              setOpen(false)
            }}
          >
            <span className={`method-tag ${link.method.toLowerCase()}`}>--</span>
            {link.label}
          </button>
        ))}
      </div>
    </header>
  )
}
