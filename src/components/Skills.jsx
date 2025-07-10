function Skills() {
  const skills = ["ReactJS", "Tailwind CSS", "Python", "C++", "HTML/CSS", "Machine Learning", "GCP", "LangChain", "SQL", "FastAPI", "JavaScript", "Gen AI"];

  return (
    <section id="skills" className="py-16 bg-transparent px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm shadow rounded-lg py-4 px-2 text-purple-300 font-medium border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;