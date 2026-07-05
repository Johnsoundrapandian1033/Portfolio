import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsStrip from './components/StatsStrip.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
       <ScrollToTopButton />
      <Footer />
    </>
  )
}
