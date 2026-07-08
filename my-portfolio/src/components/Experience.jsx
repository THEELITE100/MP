import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Nayoda",
    duration: "June 2026 - Present",
    description: [
      "Engineered real world features and executed critical tasks across full stack production environments.",
      "Gained deep practical experience aligning development workflows with modern industry practices.",
      "Cultivated advanced professional communication and high tier technical problem solving skills.",
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 w-full px-6 border-t border-sky-900/20 bg-slate-900/10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-sky-500/50" />
            <h2 className="text-3xl md:text-4xl font-light tracking-widest text-sky-100 uppercase">The Inscribed Journey</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative p-8 rounded-2xl bg-[#0f172a]/60 backdrop-blur-md border border-slate-800 hover:border-sky-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-sky-100 tracking-wide">{exp.role}</h3>
                    <p className="text-sm text-sky-400/80 tracking-wider uppercase mt-1">{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-400 tracking-widest font-light bg-slate-800/40 border border-slate-700/30 px-3 py-1 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 font-light text-base leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500/60 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;