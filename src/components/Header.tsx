import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-3 md:p-6 flex justify-between items-center z-50 pointer-events-none">
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="pointer-events-auto border-2 border-blueprint-line dark:border-dark-line bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-bold hover:bg-blueprint-accent dark:hover:bg-dark-line/20 hover:border-black dark:hover:border-blueprint-accent transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] no-underline"
      >
        MOHAN.DEV
      </a>
      <div className="pointer-events-auto flex gap-2 md:gap-4 items-center">
        <a href="#projects" className="nav-link decoration-0 text-xs md:text-sm font-bold tracking-widest hover:text-blueprint-accent dark:hover:text-dark-line transition-colors flex items-center gap-1 md:gap-2">
          <span className="w-2 h-2 bg-blueprint-line dark:bg-dark-line inline-block"></span> 
          <span className="hidden sm:inline">PROJECTS</span>
        </a>
        <a href="#contact" className="nav-link decoration-0 text-xs md:text-sm font-bold tracking-widest hover:text-blueprint-accent dark:hover:text-dark-line transition-colors flex items-center gap-1 md:gap-2">
          <span className="w-2 h-2 bg-blueprint-line dark:bg-dark-line inline-block"></span> 
          <span className="hidden sm:inline">CONTACT</span>
        </a>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Header

