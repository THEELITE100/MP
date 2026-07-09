import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 relative">
      <div className="max-w-4xl w-full text-center mt-12">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-xs md:text-sm tracking-[0.4em] text-sky-400/80 uppercase mb-4"
        >
          The Realm Gate
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-slate-100 uppercase mb-6 leading-tight"
        >
          Sumit Parashar
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-slate-400 font-light max-w-2xl mx-auto tracking-wide mb-12 leading-relaxed"
        >
          Full Stack Developer & AI/ML Engineer
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center"
        >
          <a 
            href="#about"
            className="group relative px-8 py-4 bg-transparent border border-sky-500/30 rounded-lg overflow-hidden transition-all duration-500 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-400/10 to-sky-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative text-xs uppercase tracking-[0.3em] font-medium text-sky-100 group-hover:text-sky-300 transition-colors">
              Exploar The Realm
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;