import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Nayoda",
    duration: "June 2026 - Present",
    bullets: [
      "Engineered real world features and executed critical tasks across full stack production environments.",
      "Gained deep practical experience aligning development workflows with modern industry practices.",
      "Cultivated advanced professional communication and high tier technical problem solving skills.",
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 w-full px-6 border-t border-sky-950/20 bg-slate-950/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-sky-500/40" />
            <h2 className="text-2xl md:text-3xl font-display tracking-widest text-sky-100 uppercase">The Inscribed Journey</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-slate-900/30 border border-slate-800/60 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-medium text-slate-100">{exp.role}</h3>
                    <p className="text-sm text-sky-400/80 uppercase tracking-widest mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-400 tracking-wider bg-slate-950/50 border border-slate-800 px-3 py-1 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-slate-300 font-light text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500/50 shadow-[0_0_6px_rgba(56,189,248,0.4)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;