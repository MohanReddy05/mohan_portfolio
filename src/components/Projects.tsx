import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    name: 'Guttu - Password Manager',
    description: 'A secure mobile password manager built with React Native and Expo. Utilizes AES encryption, Expo SecureStore for hardware-backed key management, and SQLite for robust local data persistence.',
    language: 'React Native',
    tech: ['Expo', 'AES Encryption', 'SQLite', 'SecureStore'],
    url: 'https://github.com/MohanReddy05/guttu'
  },
  {
    name: 'SQL Data Warehouse',
    description: 'Building a comprehensive data warehouse using MySQL for advanced data analytics. Implements star schema, ETL workflows, data normalization, and query optimization for analytical performance.',
    language: 'MySQL',
    tech: ['ETL', 'Star Schema', 'Data Modeling', 'SQL'],
    url: 'https://github.com/MohanReddy05/sql-data-warehouse-and-data-analysis-project'
  },
  {
    name: 'MERN Authentication System',
    description: 'Full-stack user authentication system with login, sign-up, and account verification. Client and server-side implementation using MongoDB, Express, React, and Node.js.',
    language: 'JavaScript',
    tech: ['MERN Stack', 'JWT', 'Authentication', 'REST API'],
    url: 'https://github.com/MohanReddy05/MERN-Auth-ClientSide'
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 border-t border-blueprint-line dark:border-dark-line bg-gray-50 dark:bg-dark-surface relative overflow-hidden transition-colors duration-300">
       <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex items-center gap-2 md:gap-4 mb-12 md:mb-16">
             <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border border-blueprint-line dark:border-dark-line text-xs md:text-base font-bold bg-white dark:bg-dark-bg transition-colors duration-300">03</div>
             <h2 className="text-lg md:text-2xl font-bold tracking-widest">PROJECT_VAULT // REPOS</h2>
             <div className="h-px flex-1 bg-blueprint-line/30 dark:bg-dark-line/30"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <motion.a 
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block group h-full"
              >
                <div className="blueprint-box h-full p-6 transition-all duration-300 bg-white dark:bg-dark-bg">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                     <div className="flex items-center gap-3">
                       <FaGithub className="text-2xl group-hover:text-blueprint-accent dark:group-hover:text-dark-line transition-colors" />
                     </div>
                     <div className="flex items-center gap-2">
                       <FaExternalLinkAlt className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blueprint-accent dark:group-hover:text-dark-line transition-colors" />
                     </div>
                  </div>
                  
                  {/* Project Name */}
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blueprint-accent dark:group-hover:text-dark-line transition-colors">
                    {project.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs border border-blueprint-line dark:border-dark-line rounded bg-white dark:bg-dark-surface font-mono hover:bg-blueprint-accent dark:hover:bg-dark-line/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Language Indicator */}
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-gray-400 mt-auto pt-4 border-t border-blueprint-line dark:border-dark-line">
                    <span className="w-3 h-3 rounded-full bg-blueprint-accent dark:bg-dark-line"></span>
                    {project.language}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/MohanReddy05?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blueprint-line dark:border-dark-line bg-white dark:bg-dark-surface font-mono text-sm hover:bg-blueprint-accent dark:hover:bg-dark-line/20 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <span>VIEW_ALL_REPOSITORIES</span>
              <FaExternalLinkAlt />
            </motion.a>
          </motion.div>
       </div>
    </section>
  )
}

export default Projects
