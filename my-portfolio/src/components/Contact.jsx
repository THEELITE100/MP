import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 w-full px-6 border-t border-sky-950/20 bg-slate-950/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-widest text-sky-100 uppercase mb-4">Send a Raven</h2>
          <p className="text-sm md:text-base text-slate-400 font-light max-w-md mx-auto tracking-wide mb-8">
            Available for AI/ML opportunities, developer role, and technical collaborations.
          </p>
          <div className="flex justify-center gap-4">
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
          © {new Date().getFullYear()} SP. All rights reserved.
        </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;