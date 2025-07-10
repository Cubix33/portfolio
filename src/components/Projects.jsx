import React from 'react';
function Projects() {
  const projects = [
    {
      title: "Point Blank",
      description: "An engaging side-scrolling shooter game built with Go. Features include scoring systems, cusomizable characters. Ultilizes Ebiten for smooth graphics and gameplay.",
      technologies: ["GoLang", "Ebiten Library"],
      image: "./images/point_blank.png",
      link: "https://cubix33.github.io/go-game/",
      github: "https://github.com/Cubix33/go-game",
      status: "Completed",
      category: "GoLang"
    },
    {
      title: "AQI Forecasting System",
      description: "Advanced air quality prediction system using machine learning algorithms. Features real-time data visualization, historical trend analysis, and interactive Streamlit dashboard for environmental monitoring.",
      technologies: ["Python", "Streamlit", "Machine Learning", "ARIMA", "Prophet"],
      image: "/images/aqi.png",
      link: "https://aqiprediction-gzhzppvmmbgkrplotqxctg.streamlit.app/",
      github: "https://github.com/Cubix33/aqi_prediction",
      status: "Completed",
      category: "Machine Learning"
    },
    {
      title: "ProjectX",
      description: "AI-powered platform for real-time document summarization and feedback provision using ReactJS and FastAPI with Gemini Flash API. Contains user-friendly interface with a very low latency.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "FastAPI"],
      image: "/images/projectx.png",
      link: "https://drive.google.com/file/d/17feEdSCqSk-ogPfLrjPtgnVW4uiKZfyg/view?usp=drivesdk",
      github: "https://github.com/PS3098/ProjectX",
      status: "Completed",
      category: "Full Stack"
    },
    {
      title: "Simhastha Ujjain Missing Person Tracker",
      description: "Real-time missing person reporting and face recognition system built with ReactJS and Cloud Vision API. Powered by React and live face recognition with 92%+ accuracy for fast, scalable search and alerts.",
      technologies: ["React", "Google Cloud Vision API", "CSS", "OpenCV"],
      image: "/images/simhastha.png",
      link: "https://youtu.be/ocWosSs4PYA",
      github: "https://github.com/HARSHDIPSAHA/SIH1790_ERROR_404_CHANGE_FOUND",
      status: "Completed",
      category: ["Frontend", "Machine Learning"]
    }
  ];

  const categories = ["All", "Full Stack", "Machine Learning", "Frontend", "GoLang"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(selectedCategory);
        }
        return project.category === selectedCategory;
      });

  return (
    <section id="projects" className="bg-transparent py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development, 
            machine learning, and full-stack applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-6xl text-white hidden">
                  🚀
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Status and Category */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    {Array.isArray(project.category) ? project.category.join(" + ") : project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border-2 border-purple-400 text-purple-400 text-center py-2 px-4 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg"
          >
            Let's Work Together
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Projects;