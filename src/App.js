import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Debug each component
console.log("Navbar:", Navbar);
console.log("Hero:", Hero);
console.log("About:", About);
console.log("Projects:", Projects);
console.log("Skills:", Skills);
console.log("Contact:", Contact);
console.log("Footer:", Footer);

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Animated Background for sections after Hero */}
      <div className="fixed inset-0 -z-10">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

// ← This line is absolutely required!
export default App;