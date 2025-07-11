function About() {
  return (
    <section id="about" className="py-20 bg-transparent border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="text-center md:text-left">
            <div className="relative inline-block">
              <div className="w-96 h-96 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800/50 backdrop-blur-sm border border-white/10 overflow-hidden">
                  <img 
                    src="./images/dp.png" 
                    alt="Anshika Singh - Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Passionate Frontend Developer & ML Enthusiast
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hello! I'm Anshika Singh, a passionate frontend developer with a keen interest in machine learning 
                and creating exceptional digital experiences. I love turning complex problems into simple, 
                and intuitive solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey in tech started with curiosity about how websites work, and it has evolved into 
                a deep passion for creating user-centric applications that make a difference. I enjoy working 
                at the intersection of design and technology, where creativity meets functionality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I’m not coding, I’m usually prototyping side projects, exploring upcoming tech stacks, or participating in hackathons and tech communities.
              </p>
            </div>
            
            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-purple-400">8+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
              >
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1yC7Lxz6nRCRtjOPEG80VImCox9YvJdBV/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-400 text-purple-400 font-medium rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        
        {/* Additional Info Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4">Problem Solver</h4>
              <p className="text-gray-300">
                I thrive on solving complex challenges and turning ideas into reality through clean, 
                efficient code.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4">Innovation Driven</h4>
              <p className="text-gray-300">
                Always eager to learn new technologies and implement cutting-edge solutions 
                in my projects.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-4">Team Player</h4>
              <p className="text-gray-300">
                Collaborative mindset with excellent communication skills and experience 
                working in agile environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;