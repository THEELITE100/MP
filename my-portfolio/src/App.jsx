import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [snowflakes, setSnowflakes] = useState([]);

  // Generate random snow particles for the Ragnarok effect
  useEffect(() => {
    const flakes = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * -20}s`,
      opacity: Math.random() * 0.5 + 0.1,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-200 selection:bg-sky-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 nordic-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-900/20 rounded-full blur-[150px]" />
        
        {/* Snow Engine */}
        {snowflakes.map(flake => (
          <div
            key={flake.id}
            className="snow-particle"
            style={{
              left: flake.left,
              animationDuration: flake.animationDuration,
              animationDelay: flake.animationDelay,
              opacity: flake.opacity,
              width: flake.width,
              height: flake.height
            }}
          />
        ))}
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;