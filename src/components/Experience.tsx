/**
 * Experience Component - Professional Work History
 * 
 * Displays current work experience and key project accomplishments.
 * Features detailed achievement lists and project highlights with animated reveals.
 * 
 * @component
 * @returns {JSX.Element} Work experience and project showcase section
 */

import { motion } from 'framer-motion'
import { BiBuildings, BiCalendar } from 'react-icons/bi'
import { FiCheckCircle } from 'react-icons/fi'

const experience = {
  company: 'Puthur Infotech PVT LTD',
  role: 'MIS Executive',
  period: 'April 2025 – Ongoing',
  location: 'Bengaluru, India',
  achievements: [
    'Automated operational reporting using Python and SQL backend scripts, reducing manual data preparation time and improving data accessibility for cross-functional teams.',
    'Designed and automated MIS reports and dashboards to track operational performance and key business metrics.',
    'Analyzed structured and semi-structured data to identify trends, inconsistencies, and opportunities for process improvement.',
    'Collaborated with cross-functional teams to understand data requirements and deliver actionable insights.',
    'Ensured data accuracy, consistency, and timely availability for decision-making.'
  ]
}

const project = {
  name: 'Data warehouse and Data Analysis using MySQL',
  period: 'November 2025 – December 2026',
  highlights: [
    'Designed and implemented a SQL-based data warehouse using a star schema to support analytical queries and reporting.',
    'Built ETL workflows to extract, transform, and load raw data into fact and dimension tables.',
    'Performed data cleaning, normalization, and validation to ensure data accuracy and consistency.',
    'Wrote complex SQL queries for business analysis, KPI tracking, and trend identification.',
    'Demonstrated understanding of data modeling, indexing, and query optimization for analytical performance.'
  ]
}

const Experience = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 border-t border-blueprint-line dark:border-dark-line bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 md:gap-4 mb-12 md:mb-16">
           <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border border-blueprint-line dark:border-dark-line text-xs md:text-base font-bold bg-white dark:bg-dark-surface transition-colors duration-300">02</div>
           <h2 className="text-lg md:text-2xl font-bold tracking-widest">EXPERIENCE_LOG // HISTORY</h2>
           <div className="h-px flex-1 bg-blueprint-line/30 dark:bg-dark-line/30"></div>
        </div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="blueprint-box p-8 mb-12 bg-white dark:bg-dark-surface"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{experience.role}</h3>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                <BiBuildings className="text-blueprint-accent dark:text-dark-line" />
                <span className="font-mono text-sm">{experience.company}</span>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 mt-2 md:mt-0">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-mono text-sm">
                <BiCalendar />
                <span>{experience.period}</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">{experience.location}</div>
            </div>
          </div>

          <div className="space-y-3">
            {experience.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <FiCheckCircle className="text-blueprint-accent dark:text-dark-line mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Highlight */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="blueprint-box p-8 bg-white dark:bg-dark-surface"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-blueprint-accent dark:bg-dark-line rounded-full"></div>
            <h3 className="text-xl font-bold">KEY PROJECT</h3>
          </div>
          
          <h4 className="text-lg md:text-2xl font-bold mb-3">{project.name}</h4>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-mono text-sm mb-6">
            <BiCalendar />
            <span>{project.period}</span>
          </div>

          <div className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <FiCheckCircle className="text-blueprint-accent dark:text-dark-line mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
