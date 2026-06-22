import { motion } from 'framer-motion';

const certs = [
  { name: "Next-Gen Workplace Automation with GenAI", link: "https://coursera.org/verify/specialization/22AXYXLODCPS" },
  { name: "Getting Started with Accelerated Computing in Modern CUDA C++", link: "https://learn.nvidia.com/certificates?id=Y56xbAjBT5qL_OM1h5aKZg" },
  { name: "Improving Deep Neural Networks", link: "https://coursera.org/verify/KDL5GO4VH1UZ" },
  { name: "Database and SQL for Data Science with Python", link: "https://coursera.org/verify/7SFS53T0KIU1" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 w-full px-6 border-t border-sky-900/20 bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-sky-500/50" />
          <h2 className="text-3xl md:text-4xl font-light tracking-widest text-sky-100 uppercase">Relics of Knowledge</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 border border-slate-800 rounded-xl hover:bg-slate-800/50 hover:border-sky-500/40 transition-all duration-300 group flex items-center justify-between"
            >
              <span className="text-slate-300 group-hover:text-sky-200 transition-colors">{cert.name}</span>
              <span className="text-sky-500/50 group-hover:text-sky-400">↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;