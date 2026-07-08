import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans overflow-x-hidden selection:bg-sky-500/20 selection:text-sky-200">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="snow" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

export default App;