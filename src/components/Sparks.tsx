import { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  type: 'square' | 'cross'
  color: string
}

const Sparks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number
    
    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    handleResize() // Initial sizing

    // Window listener for full coverage
    const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX
        const y = e.clientY
      
      // Spawn particles
      for (let i = 0; i < 2; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 0,
          maxLife: 30 + Math.random() * 20,
          size: 2 + Math.random() * 4,
          type: Math.random() > 0.5 ? 'square' : 'cross',
          color: Math.random() > 0.7 ? '#00ffff' : '#000000'
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++
        
        // Physics
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.05 // Slight gravity
        
        // Render
        const opacity = 1 - p.life / p.maxLife
        ctx.globalAlpha = opacity
        ctx.strokeStyle = p.color
        ctx.fillStyle = p.color
        
        ctx.beginPath()
        if (p.type === 'square') {
          ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size)
        } else {
          // Draw Cross
          ctx.moveTo(p.x - p.size, p.y)
          ctx.lineTo(p.x + p.size, p.y)
          ctx.moveTo(p.x, p.y - p.size)
          ctx.lineTo(p.x, p.y + p.size)
          ctx.lineWidth = 1
          ctx.stroke()
        }
        
        // Cleanup
        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
        }
      }
      
      animationFrameId = requestAnimationFrame(render)
    }
    
    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-events-none mix-blend-multiply"
      style={{ width: '100%', height: '100%' }}
    />
  )
}

export default Sparks
