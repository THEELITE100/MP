import { motion } from 'framer-motion';

const projectData = [
  { 
    title: "Dr. Maya Reynolds, PsyD | Therapy Practice Website",
    date: "Sept 2026 – Oct 2026",
    tech: "Next.js 16 • React 19 • TypeScript • Tailwind CSS 4 • Lucide React",
    points: [
      "Developed a fully responsive, SEO optimized therapy practice website featuring accessible navigation, service listings, therapist biography, office gallery, interactive FAQ, and booking call-to-actions.",
      "Implemented local SEO with metadata optimization, canonical URLs, Open Graph tags, and JSON-LD structured data for LocalBusiness and FAQPage, enhancing search visibility for therapy services in Santa Monica.",
      "Optimized performance and accessibility using Next.js image optimization, static prerendering, self-hosted fonts, semantic HTML, keyboard-accessible navigation, reduced-motion support, and centralized TypeScript-based content management."
    ] 
  },
  { 
    title: "SecureID – IAM Authentication & Registration System",
    date: "Aug 2026 – Sept 2026",
    tech: "React.js • Node.js • Express.js • MongoDB • JWT • bcrypt • Helmet.js",
    points: [
      "Engineered a secure Identity and Access Management system featuring validated user registration, email/SMS OTP verification, password strength analysis, and multi-factor authentication.",
      "Implemented server-side session management with secure HttpOnly cookies, configurable session expiry, bcrypt password hashing, account lockout protection, and single-use OTPs with expiration and rate-limiting controls.",
      "Developed JWT-based authentication with short-lived access tokens, Bearer token validation, and protected API endpoints, incorporating Helmet.js security headers, Content Security Policy, and input validation to strengthen application security."
    ] 
  },
  { 
    title: "Skill Sphere", 
    date: "June 2026 – July 2026", 
    tech: "React.js • Node.js • Express.js • MongoDB • Tailwind CSS • Socket.IO • Redux Toolkit", 
    points: [ 
      "Engineered a full-stack hyperlocal freelance marketplace featuring multi-role authentication, milestone-based gig management, and atomic proposal acceptances.", 
      "Integrated Socket.IO for instant real-time messaging and notifications alongside Stripe API and Stripe Connect for secure milestone escrow funding, automated payouts, and dispute refunds.", 
      "Developed a hybrid job matching engine pairing deterministic rule-based algorithms with optional dynamic AI transformer embeddings, backed by a recency-weighted reputation and review fraud detection system.",  
    ] 
  },
  { 
    title: "Focus", 
    date: "June 2026 – July 2026", 
    tech: "React.js • Node.js • Express.js • MongoDB • Tailwind CSS", 
    points: [ 
      "Engineered a task management dashboard.", 
      "Developed a robust Node.js and Express backend with a custom RESTful API to manage seamless data processing and CRUD operations.", 
      "Integrated MongoDB for efficient database management, enabling dynamic state updates.",  
    ] 
  },
  {
    title: "AEO Diagnostic Engine",
    date: "April 2026 – May 2026",
    tech: "Python • Selenium • Groq API • LLMs • Flask • React • Framer Motion • Docker",
    points: [
      "Developed a web application simulating modern AI Search Engines to check brand visibility and recommendation performance using LLM driven pipelines.",
      "Built a resilient backend using Python and custom headless browser automation for secure live product imagery extraction, integrated with the Groq API for advanced text analysis and generation.",
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
    <section id="projects" className="py-32 w-full px-6 border-t border-sky-950/20 bg-slate-950/10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-sky-500/40" />
            <h2 className="text-2xl md:text-3xl font-display tracking-widest text-sky-100 uppercase">Realm of Creation</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projectData.map((proj, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-sky-500/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-slate-200">{proj.title}</h3>
                    <span className="text-[10px] text-slate-500 whitespace-nowrap pt-1">{proj.date}</span>
                  </div>                  
                  <ul className="text-sm text-slate-400 font-light leading-relaxed mb-6 space-y-1.5 list-disc pl-4">
                    {proj.points?.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech?.split(" • ").map((t, tIdx) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 text-sky-400/80 border border-sky-950/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;