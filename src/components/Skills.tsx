/**
 * Skills Component - Technical & Soft Skills Display
 * 
 * Showcases technical proficiency across programming languages, databases, libraries,
 * visualization tools, and development environments. Also highlights key soft skills.
 * Features animated skill cards with proficiency level indicators.
 * 
 * @component
 * @returns {JSX.Element} Grid layout of technical and soft skills with progress bars
 */

import { motion } from 'framer-motion'
import { SiPython, SiMysql, SiPostgresql, SiMongodb, SiPandas, SiNumpy, SiTableau, SiGithub, SiJupyter, SiLinux } from 'react-icons/si'
import { BiCodeAlt, BiData, BiLineChart, BiWindows } from 'react-icons/bi'

const technicalSkills = [
  { name: 'Python', icon: SiPython, category: 'Programming', level: 95 },
  { name: 'SQL', icon: BiCodeAlt, category: 'Programming', level: 90 },
  { name: 'R Language', icon: BiCodeAlt, category: 'Programming', level: 80 },
  { name: 'MySQL', icon: SiMysql, category: 'Database', level: 90 },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', level: 85 },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database', level: 75 },
  { name: 'Pandas', icon: SiPandas, category: 'Libraries', level: 90 },
  { name: 'Numpy', icon: SiNumpy, category: 'Libraries', level: 85 },
  { name: 'Matplotlib', icon: BiLineChart, category: 'Libraries', level: 80 },
  { name: 'Seaborn', icon: BiLineChart, category: 'Libraries', level: 80 },
  { name: 'Tableau', icon: SiTableau, category: 'Visualization', level: 85 },
  { name: 'PowerBI', icon: BiData, category: 'Visualization', level: 90 },
  { name: 'Git-Hub', icon: SiGithub, category: 'Tools', level: 85 },
  { name: 'Jupyter', icon: SiJupyter, category: 'Tools', level: 90 },
  { name: 'VS Code', icon: BiCodeAlt, category: 'Tools', level: 95 },
  { name: 'Excel', icon: BiData, category: 'Tools', level: 90 },
  { name: 'Linux', icon: SiLinux, category: 'OS', level: 75 },
  { name: 'Windows', icon: BiWindows, category: 'OS', level: 90 },
]

const softSkills = [
  'Problem Solving', 'Analytical Thinking', 'Attention to Detail', 
  'Presentation', 'Adaptability', 'Team Collaboration'
]

const Skills = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 border-t border-blueprint-line dark:border-dark-line bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with numbering and title */}
        <div className="flex items-center gap-2 md:gap-4 mb-12 md:mb-16">
           <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border border-blueprint-line dark:border-dark-line text-xs md:text-base font-bold bg-white dark:bg-dark-surface transition-colors duration-300">01</div>
           <h2 className="text-lg md:text-2xl font-bold tracking-widest">TECHNICAL_STACK // CAPABILITIES</h2>
           <div className="h-px flex-1 bg-blueprint-line/30 dark:bg-dark-line/30"></div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 tracking-wide">TECHNICAL SKILLS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="blueprint-box p-5 bg-white dark:bg-dark-surface group cursor-pointer"
              >
                <skill.icon className="text-4xl mb-3 group-hover:text-blueprint-accent dark:group-hover:text-dark-line transition-colors" />
                <h4 className="font-bold text-sm mb-1">{skill.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{skill.category}</p>
                
                {/* Skill level bar */}
                <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 mt-2 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.05 + 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-blueprint-accent dark:bg-dark-line"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 tracking-wide">SOFT SKILLS</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-blueprint-line dark:border-dark-line p-4 bg-white dark:bg-dark-surface hover:bg-blueprint-accent dark:hover:bg-dark-line/20 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
              >
                <p className="text-xs font-bold text-center">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
