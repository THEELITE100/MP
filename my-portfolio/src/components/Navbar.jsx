import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-md border-b border-sky-900/30 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium tracking-[0.15em]">
        <a href="#home" className="text-xl font-bold tracking-widest text-sky-100 uppercase">
          SP
        </a>
        <div className="hidden md:flex gap-8 text-slate-400">
          <a href="#about" className="hover:text-sky-300 transition-colors">ABOUT</a>
          <a href="#experience" className="hover:text-sky-300 transition-colors">EXPERIENCE</a>
          <a href="#projects" className="hover:text-sky-300 transition-colors">PROJECTS</a>
          <a href="#certifications" className="hover:text-sky-300 transition-colors">CERTIFICATES</a>
          <a href="#contact" className="hover:text-sky-300 transition-colors">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;