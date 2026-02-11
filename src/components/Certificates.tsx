import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
import { BiCheck } from 'react-icons/bi'

const certificate = {
  name: 'Google Data Analytics Professional Certificate',
  issuer: 'Google',
  skills: [
    { name: 'Data Validation' },
    { name: 'Data Cleansing' },
    { name: 'Data Visualization' },
    { name: 'Data Analysis' }
  ]
}

const Certificates = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 border-t border-blueprint-line dark:border-dark-line bg-gray-50 dark:bg-dark-surface relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 md:gap-4 mb-12 md:mb-16">
           <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border border-blueprint-line dark:border-dark-line text-xs md:text-base font-bold bg-white dark:bg-dark-bg transition-colors duration-300">04</div>
           <h2 className="text-lg md:text-2xl font-bold tracking-widest">CERTIFICATIONS // CREDENTIALS</h2>
           <div className="h-px flex-1 bg-blueprint-line/30 dark:bg-dark-line/30"></div>
        </div>

        {/* Certificate Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="blueprint-box p-8 max-w-3xl mx-auto bg-white dark:bg-dark-bg"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 border-2 border-blueprint-line dark:border-dark-line flex items-center justify-center bg-blueprint-accent dark:bg-dark-line/20 transition-colors duration-300">
                <FaCertificate className="text-3xl text-white dark:text-dark-line" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{certificate.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">Issued by: <span className="text-blueprint-accent dark:text-dark-line font-bold">{certificate.issuer}</span></p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {certificate.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-blueprint-line dark:border-dark-line p-4 bg-white dark:bg-dark-surface hover:bg-blueprint-accent dark:hover:bg-dark-line/20 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <BiCheck className="text-blueprint-accent dark:text-dark-line text-xl" />
                </div>
                <h4 className="font-bold text-sm">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
