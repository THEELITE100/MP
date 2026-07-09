import { motion } from 'framer-motion';

const certs = [
  { name: "Next-Gen Workplace Automation with GenAI", link: "https://coursera.org/verify/specialization/22AXYXLODCPS" },
  { name: "Getting Started with Accelerated Computing in Modern CUDA C++", link: "https://learn.nvidia.com/certificates?id=Y56xbAjBT5qL_OM1h5aKZg" },
  { name: "Improving Deep Neural Networks", link: "https://coursera.org/verify/KDL5GO4VH1UZ" },
  { name: "Database and SQL for Data Science with Python", link: "https://coursera.org/verify/7SFS53T0KIU1" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 w-full px-6 border-t border-sky-950/20 bg-slate-950/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-sky-500/40" />
            <h2 className="text-2xl md:text-3xl font-display tracking-widest text-sky-100 uppercase">Relics of Knowledge</h2>
          </div>

          <div className="space-y-4">
            {certs.map((cert, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-slate-900/20 border border-slate-800/40 flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-sky-500/40 shrink-0" />
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 text-sm md:text-base font-light tracking-wide hover:text-sky-400 transition-colors duration-200"
                >
                  {cert.name}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;