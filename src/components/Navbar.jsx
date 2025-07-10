export default function Navbar() {
  return (
    <nav className="bg-black/30 backdrop-blur-lg fixed w-full top-0 shadow-2xl z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-black font-bold text-lg">A</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Anshika's Portfolio
          </h1>
        </div>
        
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li>
            <a href="#hero" className="relative group px-3 py-2 hover:text-emerald-400 transition-all duration-300">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#about" className="relative group px-3 py-2 hover:text-emerald-400 transition-all duration-300">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="relative group px-3 py-2 hover:text-emerald-400 transition-all duration-300">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#skills" className="relative group px-3 py-2 hover:text-emerald-400 transition-all duration-300">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="relative group px-3 py-2 hover:text-emerald-400 transition-all duration-300">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-emerald-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium rounded-full hover:from-emerald-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
