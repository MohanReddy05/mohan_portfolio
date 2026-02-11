import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiInstagram } from 'react-icons/fi'

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'mohanreddymk05@gmail.com',
    href: 'mailto:mohanreddymk05@gmail.com',
    color: 'blueprint-accent'
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    value: '@mohan.pulikanti',
    href: 'https://instagram.com/mohan.pulikanti',
    color: 'blueprint-accent'
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/MohanReddy05',
    href: 'https://github.com/MohanReddy05',
    color: 'blueprint-accent'
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohan-pulikanti',
    href: 'https://www.linkedin.com/in/mohan-pulikanti',
    color: 'blueprint-accent'
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 border-t border-blueprint-line dark:border-dark-line bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
       <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex items-center gap-2 md:gap-4 mb-12 md:mb-16">
             <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border border-blueprint-line dark:border-dark-line text-xs md:text-base font-bold bg-white dark:bg-dark-surface transition-colors duration-300">05</div>
             <h2 className="text-lg md:text-2xl font-bold tracking-widest">CONTACT_CHANNEL // CONNECT</h2>
             <div className="h-px flex-1 bg-blueprint-line/30 dark:bg-dark-line/30"></div>
          </div>

          <div className="max-w-4xl mx-auto">
             {/* Contact Info */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
             >
                <h3 className="text-4xl md:text-5xl font-bold mb-6">LET'S CONNECT</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto">
                   Open for freelance opportunities, full-time roles in AI/Data Engineering, or technical consultation.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                  <FiMapPin />
                  <span>Bengaluru, India</span>
                </div>
             </motion.div>
                
             {/* Contact Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactLinks.map((contact, i) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="blueprint-box p-8 bg-white dark:bg-dark-surface group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 border-2 border-blueprint-line dark:border-dark-line flex items-center justify-center group-hover:bg-blueprint-accent dark:group-hover:bg-dark-line/20 transition-all">
                        <contact.icon className="text-2xl" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-1">{contact.label}</p>
                        <p className="font-mono text-sm group-hover:text-blueprint-accent dark:group-hover:text-dark-line transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-end gap-2 text-xs font-bold text-gray-400 dark:text-gray-600 group-hover:text-blueprint-accent dark:group-hover:text-dark-line transition-colors">
                      <span>CONNECT</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </motion.a>
                ))}
             </div>

             {/* Additional Message */}
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="mt-12 text-center"
             >
               <p className="text-sm font-mono text-gray-500 dark:text-gray-600">
                 // Transmission channels active 24/7
               </p>
             </motion.div>
          </div>
       </div>
    </section>
  )
}

export default Contact
