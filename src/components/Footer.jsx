function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 text-gray-300 text-center py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-4">
          <p className="text-lg font-medium">
            &copy; {new Date().getFullYear()} Anshika Singh
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built using React & Tailwind CSS
          </p>
        </div>
        
        {/* Social links or additional info can go here */}
        <div className="flex justify-center space-x-6 text-purple-400">
          <a href="https://github.com/Cubix33" className="hover:text-purple-300 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/anshika-singh-95b5a7200/" className="hover:text-purple-300 transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/u/skyfall23/" className="hover:text-purple-300 transition-colors">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;