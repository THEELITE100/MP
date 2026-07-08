import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "JavaScript", "SQL"]
  },
  { 
    title: "Frameworks & Libraries",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "Numpy", "OpenCV", "Django", "React", "Hugging Face Transformers", "Streamlit", "TailWind CSS", "FastAPI"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Flask", "Vercel", "Terraform", "Jira", "MongoDB"]
  },
  { 
    title: "Core Research Areas",
    skills: ["Computer Vision", "Document Intelligence", "Pattern Recognition", "Deep Learning", "Natural Language Processing", "AI driven Automation"]
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 w-full px-6 border-t border-sky-900/20 bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-sky-500/50" />
            <h2 className="text-3xl md:text-4xl font-light tracking-widest text-sky-100 uppercase">The Architect</h2>
          </div>
          
          <div className="mb-16">
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-6 text-justify">
              I am a Aspiring AI/ML Engineer with practical experience in full stack development and applied machine learning. I have designed and developed scalable web applications, built high accuracy data extraction systems, and implemented machine learning and deep learning models for real world tasks.
            </p>
            <p className="text-lg text-slate-300 font-light leading-relaxed text-justify">
              I excel at backend optimization, algorithm design, and delivering data driven solutions, particularly in computer vision, document intelligence, and AI powered automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-[#0f172a]/60 backdrop-blur-md border border-slate-800 hover:border-sky-500/40 transition-all duration-300 group"
              >
                <h3 className="text-sky-400/80 font-medium tracking-widest mb-5 uppercase text-xs">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sky-100 text-sm tracking-wide group-hover:bg-slate-800 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <a 
              href="https://drive.google.com/file/d/1o1SZCqvm2p5ytFs8Y9ZpTVhj5i-59hxZ/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-[#020617] border border-sky-900/50 rounded-full overflow-hidden flex items-center gap-4 transition-all duration-500 hover:border-sky-400/80 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-[200%] bg-gradient-to-r from-transparent via-sky-400/10 to-transparent transition-transform duration-[1.5s] ease-in-out" />
              
              <span className="relative text-sky-100 tracking-[0.25em] text-sm md:text-base uppercase font-medium">
                Open the Codex
              </span>
              
              <svg 
                className="w-5 h-5 text-sky-400 relative transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;