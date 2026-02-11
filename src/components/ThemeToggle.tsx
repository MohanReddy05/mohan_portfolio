import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="pointer-events-auto border-2 border-blueprint-line dark:border-dark-line bg-white dark:bg-dark-surface px-3 py-2 hover:bg-blueprint-accent dark:hover:bg-dark-line/20 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {isDark ? (
          <FiMoon className="text-lg text-blueprint-accent" />
        ) : (
          <FiSun className="text-lg" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
