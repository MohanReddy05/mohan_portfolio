/**
 * Portfolio Application - Main Entry Component
 * 
 * This is the root component of Mohan Kumar N's portfolio website.
 * Features a schematic/blueprint design aesthetic with dark mode support.
 * 
 * @component
 * @returns {JSX.Element} The complete portfolio application
 */

import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Sparks from './components/Sparks'
import BackgroundBlobs from './components/BackgroundBlobs'
import Footer from './components/Footer'

function App() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden selection:bg-blueprint-accent selection:text-blueprint-text dark:selection:bg-dark-line dark:selection:text-dark-bg bg-white dark:bg-dark-bg transition-colors duration-300">
       <BackgroundBlobs />
       <Sparks />
       
       <div className='fixed inset-0 pointer-events-none z-0' style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
       }} />
       
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      
      <Footer />
    </main>
  )
}

export default App



