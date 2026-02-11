import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 md:py-24">
       <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1, ease: "easeOut" }}
         className="relative z-30 text-center p-6 md:p-12 max-w-5xl w-full mx-4"
       >
          {/* Corner brackets - Smaller on mobile */}
          <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-l-2 border-t-2 border-blueprint-line dark:border-dark-line transition-colors duration-300"></div>
          <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-r-2 border-t-2 border-blueprint-line dark:border-dark-line transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-l-2 border-b-2 border-blueprint-line dark:border-dark-line transition-colors duration-300"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-r-2 border-b-2 border-blueprint-line dark:border-dark-line transition-colors duration-300"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-4 md:mb-6"
          >
            <div className="w-2 h-2 bg-blueprint-accent dark:bg-dark-line rounded-full animate-pulse"></div>
            <p className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-gray-500 dark:text-gray-400 font-bold uppercase">System ID: AI_001</p>
            <div className="w-2 h-2 bg-blueprint-accent dark:bg-dark-line rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter leading-none"
          >
            MOHAN KUMAR N
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-2 md:gap-4 mb-8 md:mb-10"
          >
              <div className="h-px w-12 md:w-16 bg-blueprint-line dark:bg-dark-line"></div>
              <p className="text-lg md:text-xl lg:text-2xl font-mono font-bold">
                AI_ENGINEER // DATA_SCIENTIST
              </p>
              <div className="h-px w-16 bg-blueprint-line dark:bg-dark-line"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600 dark:text-gray-400 font-mono"
          >
            <span>Bengaluru, India</span>
            <span>•</span>
            <span>MIS Executive @ Puthur Infotech</span>
          </motion.div>

          {/* Tech Stack - Enhanced interactivity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3"
          >
            {['Python', 'SQL', 'Machine Learning', 'PowerBI', 'Data Analysis'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-xs border-2 border-blueprint-line dark:border-dark-line bg-white dark:bg-dark-surface hover:bg-blueprint-accent dark:hover:bg-dark-line/20 transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
       </motion.div>
    </section>
  )
}

export default Hero
