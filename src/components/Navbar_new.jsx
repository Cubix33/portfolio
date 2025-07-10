export default function Navbar() {
  return (
    <nav className="bg-black/20 backdrop-blur-md fixed w-full top-0 shadow-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Anshika
        </h1>
        <ul className="flex space-x-6 text-gray-300 font-medium">
          <li><a href="#hero" className="hover:text-purple-400 transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
          <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
