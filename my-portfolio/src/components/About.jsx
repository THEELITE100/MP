import { motion } from 'framer-motion';

const skillCategories = [
  { title: "Languages", skills: ["Python", "C++", "Java", "JavaScript", "SQL"] },
  { title: "Frameworks & Libraries", skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "Numpy", "OpenCV", "Django", "React", "Hugging Face Transformers", "Streamlit", "TailWind CSS", "FastAPI"] },
  { title: "Tools & Platforms", skills: ["Git", "GitHub", "Docker", "Flask", "Vercel", "Terraform", "Jira", "MongoDB"] },
  { title: "Core Research Areas", skills: ["Computer Vision", "Document Intelligence", "Pattern Recognition", "Deep Learning", "Natural Language Processing", "AI driven Automation"] }
];

const About = () => {
  return (
    <section id="about" className="py-32 w-full px-6 border-t border-sky-950/20 bg-slate-950/10 backdrop-blur-xs">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-sky-500/40" />
            <h2 className="text-2xl md:text-3xl font-display tracking-widest text-sky-100 uppercase">The Wanderer</h2>
          </div>
          
          <div className="mb-16 space-y-6 text-slate-300 font-light text-base md:text-lg leading-relaxed text-justify">
            <p>
              I am a Aspiring AI/ML Engineer with practical experience in full stack development and applied machine learning. I have designed and developed scalable web applications, built high accuracy data extraction systems, and implemented machine learning and deep learning models for real world tasks.
            </p>
            <p>
              I excel at backend optimization, algorithm design, and delivering data driven solutions, particularly in computer vision, document intelligence, and AI powered automation.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-sky-500/30 transition-all duration-300">
                <h3 className="text-sky-400/90 font-display text-xs tracking-wider mb-4 uppercase">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1 text-xs rounded bg-slate-950/60 border border-slate-800 text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://drive.google.com/file/d/1o1SZCqvm2p5ytFs8Y9ZpTVhj5i-59hxZ/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-slate-950 border border-sky-900/40 rounded-full overflow-hidden flex items-center gap-3 transition-all duration-300 hover:border-sky-400"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-sky-100 font-medium">Unseal the Scroll</span>
              <svg className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;