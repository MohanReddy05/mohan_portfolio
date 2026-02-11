import { motion } from 'framer-motion'

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-100 dark:opacity-0 transition-opacity duration-500">
      {/* Cyan shape - top left */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-32 -left-32 w-64 h-64 border-2 border-cyan-300/40 bg-gradient-to-br from-cyan-100/20 to-blue-200/20"
        style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
      />
      
      {/* Purple shape - top right */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-20 -right-20 w-56 h-56 border-2 border-purple-300/40 bg-gradient-to-br from-purple-100/20 to-pink-200/20"
        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
      />
      
      {/* Yellow square - bottom left */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-24 -left-24 w-48 h-48 border-2 border-yellow-300/40 bg-gradient-to-br from-yellow-100/20 to-orange-200/20 rotate-45"
      />
      
      {/* Green triangle - bottom right */}
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          rotate: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-32 -right-32 w-72 h-72 border-2 border-green-300/40 bg-gradient-to-br from-green-100/20 to-teal-200/20"
        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
      />
      
      {/* Center hexagon */}
      <motion.div
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-blue-300/30 bg-gradient-to-br from-blue-100/15 to-cyan-200/15"
        style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}
      />
      
      {/* Accent circle - subtle */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-2/3 left-1/3 w-32 h-32 border-2 border-indigo-300/30 bg-gradient-to-br from-indigo-100/15 to-purple-200/15 rounded-full"
      />
    </div>
  )
}

export default BackgroundBlobs
