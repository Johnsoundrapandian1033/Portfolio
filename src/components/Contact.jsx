import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { profile } from '../data/portfolio.js'

// Fill these in from your EmailJS dashboard (emailjs.com) — see README for setup steps.
const EMAILJS_SERVICE_ID = 'service_6mvi11k'
const EMAILJS_TEMPLATE_ID = 'template_nnlbnm2'
const EMAILJS_PUBLIC_KEY = 'nKrSmLPup2C8Ekyod'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (EMAILJS_SERVICE_ID === '') {
      setStatus({
        state: 'error',
        message: 'Contact form is not configured yet — add your EmailJS keys in src/components/Contact.jsx.',
      })
      return
    }

    setStatus({ state: 'sending', message: 'Sending your booking request…' })
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message, title:'Portfolio',time:new Date().toLocaleTimeString() ,to_name:'John'},
        EMAILJS_PUBLIC_KEY
      )
      setStatus({ state: 'success', message: 'Message sent — I will get back to you soon.' })
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => {
        setStatus({
          state: "idle",
          message: "",
        });
      }, 5000);
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please email me directly instead.' })
      setTimeout(() => {
        setStatus({
          state: "idle",
          message: "",
        });
      }, 5000);
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="eyebrow">06 · Booking Request</div>
        <div className="section-head">
          <h2>Let's ship something together</h2>
          <p>Open to Java / Spring Boot backend roles in Chennai and remote. Send a note — I reply fast.</p>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <h3>Direct contact</h3>
            <div className="contact-line">
              <span className="icon-wrap">
                <FiMail size={15} />
              </span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-line">
              <span className="icon-wrap">
                <FiPhone size={15} />
              </span>
              <a href={`tel:+91${profile.phone}`}>+91 {profile.phone}</a>
            </div>
            <div className="contact-line">
              <span className="icon-wrap">
                <FiMapPin size={15} />
              </span>
              <span>{profile.location}</span>
            </div>

            <div className="contact-social">
              <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub size={17} />
              </a>
              <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin size={17} />
              </a>
              <a className="social-btn" href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
                <SiLeetcode size={17} />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="booking-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="form-row">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Full name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Your email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell me about the role or project…" />
            </div>

            {status.state !== 'idle' && (
              <p className={`form-msg ${status.state === 'success' ? 'success' : status.state === 'error' ? 'error' : ''}`}>
                {status.message}
              </p>
            )}

            <button className="btn btn-primary" type="submit" disabled={status.state === 'sending'}>
              <FiSend size={16} /> {status.state === 'sending' ? 'Sending…' : 'Send Booking Request'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
