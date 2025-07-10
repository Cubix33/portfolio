export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Hero-specific background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Hero animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-emerald-400 rounded-full opacity-80 animate-ping"></div>
        <div className="absolute top-3/4 right-1/5 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-400 rounded-full opacity-70 animate-pulse"></div>
      </div>
      
      <div className="text-center max-w-4xl px-4 z-10 relative">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Anshika !
            </span>{" "}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Google WE Scholar'24 | ML Enthusiast | Millennium fellow'24
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about creating beautiful, functional, and user-centered digital experiences 
            that solve real-world problems.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium rounded-full shadow-lg hover:from-emerald-700 hover:to-cyan-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-medium rounded-full hover:bg-emerald-400 hover:text-black transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute -bottom-300 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
