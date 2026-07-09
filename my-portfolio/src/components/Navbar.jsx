import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["about", "experience", "projects", "certifications", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/70 backdrop-blur-md border-b border-sky-950/40">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-display text-xl tracking-[0.2em] text-sky-100 font-semibold hover:text-sky-400 transition-colors">
          SP<span className="text-sky-500/50">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="text-xs uppercase tracking-[0.25em] text-slate-400 hover:text-sky-400 transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-400 hover:text-sky-400 p-2" aria-label="Toggle Navigation Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L16 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 w-full bg-[#020617] border-b border-sky-900/30 flex flex-col p-6 gap-4 md:hidden"
          >
            {links.map((link) => (
              <a key={link} href={`#${link}`} onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-[0.2em] text-slate-300 py-2 border-b border-slate-900/50">
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;