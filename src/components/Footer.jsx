import { FiArrowUp } from 'react-icons/fi'
import { profile } from '../data/portfolio.js'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  return (
    <div className="site-footer">
      <div className="container footer-inner">
        < div className='row'>
            <div className='col-8 text-left'>
                <p>
                  © {new Date().getFullYear()} {profile.name}· All Rights Reserved. Designed & Developed by John Soundrapandian.
                </p>
            </div>
            <div className='col-md-3 footer-inner' style={{display:"flex"}}>
                 <a className="social-btn" href={`mailto:${profile.email}`} target="_blank" rel="noreferrer" aria-label="GitHub"><FiMail size={17} /></a>

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
        </div>
        
        {/* <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <FiArrowUp size={16} />
        </button> */}
         
      </div>
    </div>
  )
}
