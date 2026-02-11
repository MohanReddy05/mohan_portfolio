import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Sparks from './components/Sparks'
import BackgroundBlobs from './components/BackgroundBlobs'

function App() {
  return (
    <main className="w-full min-h-screen relative overflow-hidden selection:bg-blueprint-accent selection:text-blueprint-text dark:selection:bg-dark-line dark:selection:text-dark-bg bg-white dark:bg-dark-bg transition-colors duration-300">
       <BackgroundBlobs />
       <Sparks />
       {/* Background Grid - Gray for both themes */}
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
      
      <footer className="py-10 text-center border-t border-blueprint-line dark:border-dark-line bg-gray-50 dark:bg-dark-surface relative z-10 transition-colors duration-300">
        <p className="font-mono text-xs">DESIGN: SCHEMATIC_UI // © 2026 MOHAN KUMAR N</p>
      </footer>
    </main>
  )
}

export default App



