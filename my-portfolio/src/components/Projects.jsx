import { motion } from 'framer-motion';

const projectData = [
  {
    title: "AEO Diagnostic Engine",
    date: "April 2026 – May 2026",
    tech: "Python • Selenium • Groq API • Flask • React • Docker",
    points: [
      "Developed a web application simulating modern AI Search Engines to check brand visibility and recommendation performance.",
      "Built a highly resilient backend using Python and custom headless browser automation for secure live product imagery extraction.",
      "Enabled automated diagnostics to calculate brand win rates and identify competitors dominating AI recommendation results."
    ]
  },
  {
    title: "Interactive Commercial Sales Deck",
    date: "April 2026 – May 2026",
    tech: "React • Tailwind CSS • Framer Motion • Lucide • Gemini AI",
    points: [
      "A purpose built, high performance interactive sales tool designed to replace static PDFs for a massive mixed use destination.",
      "Features a cinematic, non linear UX driving immediate emotional buy in for prospective retail tenants and corporate sponsors.",
      "Engineered with modular architecture to deliver data without cluttering the UI.",
      "Generated 100% of the media assets using prompt engineering via Google Gemini."
    ]
  },
  {
    title: "Invoice Data Extraction System",
    date: "Aug 2025 – Dec 2025",
    tech: "Python • Flask • YOLOv8 • Tesseract OCR • OpenCV",
    points: [
      "Integrated YOLOv8 object detection with Tesseract OCR for high-accuracy invoice field extraction.",
      "Designed a Python backend using Flask to process, clean, and structure data from invoice images.",
      "Enabled export of structured data in Excel/JSON formats for user verification."
    ]
  },
  {
    title: "Cheaply",
    date: "Jan 2025 – May 2025",
    tech: "Python • Selenium • MongoDB",
    points: [
      "Built a system to compare real-time prices across multiple online grocery stores, simplifying users’ shopping experience.",
      "Developed the frontend interface and handled server-side routing for seamless navigation.",
      "Assisted in backend algorithm design for real-time price comparison and database management."
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 w-full px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-sky-500/50" />
          <h2 className="text-3xl md:text-4xl font-light tracking-widest text-sky-100 uppercase">Projects</h2>
        </div>

        <div className="flex flex-col gap-12">
          {projectData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#0f172a]/40 backdrop-blur-md rounded-2xl p-8 border border-slate-800 hover:border-sky-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                  <h3 className="text-2xl font-medium text-sky-50 tracking-wide mb-2 md:mb-0">{project.title}</h3>
                  <span className="font-mono text-sm text-sky-400/70 tracking-widest">{project.date}</span>
                </div>
                
                <div className="mb-6 inline-block px-3 py-1 bg-sky-950/50 border border-sky-800/50 rounded-md font-mono text-[11px] text-sky-200/70">
                  {project.tech}
                </div>

                <ul className="space-y-3 text-slate-400 font-light leading-relaxed">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-sky-500/50 mt-1.5 text-xs">◆</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;