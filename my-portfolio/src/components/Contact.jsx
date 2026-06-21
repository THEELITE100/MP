import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 w-full px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-light tracking-widest text-sky-100 uppercase mb-8"
        >
          Initiate Contact
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 font-light mb-12 text-lg"
        >
          Open to engineering roles, AI/ML opportunities, and strategic collaborations.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:parasharsumit730@gmail.com" className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 hover:border-sky-500/50 hover:text-sky-200 transition-all">
            parasharsumit730@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/sumit-parashar-30164228a/" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 hover:border-sky-500/50 hover:text-sky-200 transition-all">
            LinkedIn
          </a>
          <a href="https://github.com/THEELITE100" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 hover:border-sky-500/50 hover:text-sky-200 transition-all">
            GitHub
          </a>
        </div>
        
        <p className="mt-24 text-sm text-slate-600 tracking-widest uppercase">
          © {new Date().getFullYear()} Sumit Parashar. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;