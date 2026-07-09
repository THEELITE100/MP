import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-sky-500/20 selection:text-sky-200">
      <div className="fimbulwinter-bg" />

      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main class="w-full">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;