/**
 * Footer Component - Site Footer Navigation
 * 
 * Comprehensive footer with three-column layout featuring brand information,
 * quick navigation links, social media connections, and copyright details.
 * Includes animated entrances and interactive elements following the schematic design theme.
 * 
 * @component
 * @returns {JSX.Element} Professional footer with navigation and social links
 */

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { personalConfig } from '../config/personal.config'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: personalConfig.social.github.url, label: 'GitHub' },
    { icon: Linkedin, href: personalConfig.social.linkedin.url, label: 'LinkedIn' },
    { icon: Instagram, href: personalConfig.social.instagram.url, label: 'Instagram' },
    { icon: Mail, href: `mailto:${personalConfig.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative z-10 border-t-2 border-blueprint-line dark:border-dark-line bg-white dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-black tracking-tight">{personalConfig.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              {personalConfig.tagline}
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-blueprint-accent dark:bg-dark-line"></div>
              <span className="text-xs text-blueprint-accent dark:text-dark-line font-mono">
                BUILDING THE FUTURE
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold tracking-wider uppercase">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Skills', 'Experience', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-mono text-gray-600 dark:text-gray-400 hover:text-blueprint-accent dark:hover:text-dark-line transition-colors duration-200 w-fit group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    → {item}
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-bold tracking-wider uppercase">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 border-2 border-blueprint-line dark:border-dark-line bg-white dark:bg-dark-bg hover:bg-blueprint-accent dark:hover:bg-dark-line/20 transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-mono pt-2">
              {personalConfig.availability}
            </p>
          </motion.div>
        </div>

        <div className="h-px bg-blueprint-line dark:bg-dark-line mb-6"></div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blueprint-accent dark:bg-dark-line rounded-full animate-pulse"></div>
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} {personalConfig.name}. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span>DESIGN: SCHEMATIC_UI</span>
            <span>•</span>
            <span>BUILT WITH REACT + VITE</span>
            <span>•</span>
            <span className="text-blueprint-accent dark:text-dark-line">v2.0</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-blueprint-line dark:border-dark-line"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-blueprint-line dark:border-dark-line"></div>
    </footer>
  )
}

export default Footer
