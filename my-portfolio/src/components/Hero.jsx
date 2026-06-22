import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p className="text-sky-400/80 tracking-[0.3em] text-sm md:text-base font-semibold uppercase mb-4">
          The Realm Gate
        </p>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">
          Sumit Parashar
        </h1>
        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light tracking-wide">
          Full Stack Web Developer & AI/ML Engineer.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="inline-block bg-sky-950/50 border border-sky-500/30 text-sky-100 px-10 py-4 rounded-full font-medium tracking-widest hover:bg-sky-900/60 transition-all duration-300"
        >
          VIEW REALM
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;