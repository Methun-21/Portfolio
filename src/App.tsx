import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  Globe,
  Database,
  BrainCircuit,
  Layers,
  Terminal,
  Sparkles,
  Award,
  Code2,
  ExternalLink,
  Download
} from "lucide-react";

const PROJECTS = [
  {
    title: "The Last Spark",
    desc: "Apple Swift Student Challenge 2026 Winner. Sci-fi arcade dodge game with custom game loop, haptics and spatial audio in SwiftUI.",
    tech: ["SwiftUI", "Swift", "AVFoundation"],
    icon: <Sparkles className="text-yellow-400" />,
    color: "from-yellow-500/20 to-transparent",
    github: "https://github.com/Methun-21/The_Last_spark"
  },
  {
    title: "Air Quality Prediction",
    desc: "High-performance Stacking Ensemble model predicting PM2.5 levels. Includes a Flask REST API for 'Fastest and Cleanest' routing.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Flask"],
    icon: <Globe className="text-emerald-400" />,
    color: "from-emerald-500/20 to-transparent",
    github: "https://github.com/Methun-21/AirQI"
  },
  {
    title: "Lost & Found System",
    desc: "Full-stack web app using OpenAI's CLIP Foundation Model for advanced semantic text-to-image matching.",
    tech: ["React", "Flask", "MySQL", "Python"],
    icon: <Layers className="text-purple-400" />,
    color: "from-purple-500/20 to-transparent",
    github: "https://github.com/Methun-21/Lost_and_found"
  },
  {
    title: "FedCausalFreshNet",
    desc: "AI-powered system applying federated learning and causal inference for privacy-preserving product shelf-life prediction.",
    tech: ["PyTorch", "Flower", "FastAPI"],
    icon: <BrainCircuit className="text-blue-400" />,
    color: "from-blue-500/20 to-transparent",
    github: "https://github.com/Methun-21/FedCausalFreshNet"
  }
];

const EXPERIENCE = [
  {
    company: "Infosys Springboard",
    role: "Data Science Intern - AI & NLP",
    period: "Aug - Oct 2025",
    desc: "Engineered an end-to-end NLP pipeline for automated skill extraction using spaCy (NER). Implemented Sentence-BERT for semantic resume-job matching and developed an interactive Streamlit & Plotly dashboard."
  },
  {
    company: "DRDO, CVRDE",
    role: "Research Intern",
    period: "Jun - Jul 2025",
    desc: "Developed optimized CNC toolpath algorithms using quintic Bézier curves with Python. Created data visualization dashboards for process monitoring using Matplotlib and NumPy."
  }
];

const CERTIFICATIONS = [
  "Apple Swift Student Challenge 2026 Winner",
  "SnowPro Associate: Platform Certification - Snowflake",
  "Introduction to Computer Vision - IBM",
  "Database Management System - NPTEL"
];

const TECH_STACK = [
  "Python", "Swift", "C++", "React", "Flask", "FastAPI", "PyTorch", "Scikit-learn", "XGBoost", "NLP", "Snowflake", "SQL"
];

// Floating orbs background
function FloatingOrbs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="grid-overlay" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#020208] text-white selection:bg-blue-500/30 relative overflow-hidden font-sans">
      <FloatingOrbs />
      
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3.5 glass-nav rounded-full flex items-center gap-12 shadow-2xl shadow-black/50 border border-white/8 backdrop-blur-xl">
        <span className="font-black tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500">METHUNRAJ.A</span>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          <a href="#work" className="hover:text-white transition-colors duration-300">Work</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Methun-21" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-blue-400 transition-all duration-300 text-white/60"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/methunraj-a-6a5aa932a" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-blue-400 transition-all duration-300 text-white/60"><Linkedin size={18} /></a>
        </div>
      </nav>

      <main className="relative z-10 pt-48 px-6 max-w-7xl mx-auto pb-32">
        
        {/* Hero */}
        <section className="text-center mb-52 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-400"
              animate={{ boxShadow: ["0 0 20px rgba(59,130,246,0.2)", "0 0 40px rgba(59,130,246,0.5)", "0 0 20px rgba(59,130,246,0.2)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles size={14} />
              <span className="text-sm font-semibold tracking-wide">Available for New Challenges</span>
            </motion.div>

            <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-12">
              <span className="block text-glow text-white">CRAFTING</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 animate-gradient">INTELLIGENCE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
              CS student (Honors: Quantum Computing) at SRM. Winner of the Apple Swift Student Challenge 2026.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#work" className="group px-10 py-5 bg-white text-black font-black rounded-full hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-3">
                Explore Work <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a href="/resume.pdf" download className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-black rounded-full hover:scale-105 hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] transition-all duration-300 flex items-center gap-3">
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform duration-300" /> Resume
              </a>
              <a href="mailto:methunraja7393@gmail.com" className="group px-10 py-5 glass-card font-black rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-3">
                <Mail size={20} className="group-hover:scale-110 transition-transform" /> Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* Work Section */}
        <section id="work" className="mb-48">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <h2 className="text-3xl font-black tracking-tight flex items-center gap-4"><Code2 className="text-blue-500" /> SELECTED PROJECTS</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.a
                key={i}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="project-card glass-card p-10 md:p-12 group cursor-pointer relative overflow-hidden rounded-[2.5rem] border border-white/5 hover:border-white/25 transition-all block"
              >
                {/* Glow blob */}
                <div className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${project.color} blur-[120px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                {/* GitHub badge */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/30 group-hover:text-white/80 group-hover:border-white/30 transition-all duration-500 text-[10px] font-bold uppercase tracking-widest z-20">
                  <Github size={12} /> View on GitHub <ExternalLink size={10} />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="p-4 bg-white/5 rounded-2xl w-fit mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl">
                    {project.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-10 font-medium flex-grow">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold tracking-wider uppercase text-white/70 group-hover:border-white/30 transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Experience & Skills */}
        <section id="about" className="grid lg:grid-cols-3 gap-8 mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-10 md:p-12 rounded-[2.5rem] border border-white/5"
          >
            <h2 className="text-3xl font-black mb-16 flex items-center gap-4 tracking-tight">
              <Terminal size={32} className="text-blue-500" /> EXPERIENCE
            </h2>
            <div className="space-y-16">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-10 group relative">
                  <div className="md:w-32 flex-shrink-0 text-blue-400/80 font-black text-sm pt-1 tracking-widest uppercase">{exp.period}</div>
                  <div className="relative">
                    <div className="absolute -left-12 top-2 w-3 h-3 rounded-full bg-blue-500/20 group-hover:bg-blue-400 transition-colors hidden md:block" />
                    <div className="absolute -left-[43px] top-5 w-px h-full bg-white/5 group-last:hidden hidden md:block" />
                    <h3 className="text-2xl font-black group-hover:text-blue-400 transition-colors tracking-tight mb-1">{exp.company}</h3>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">{exp.role}</p>
                    <p className="text-white/60 leading-relaxed text-lg font-medium">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col"
          >
            <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 flex-1">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/40 mb-8 flex items-center gap-3"><Database size={16}/> TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map(s => (
                  <motion.span 
                    key={s} 
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full text-[11px] font-bold text-white/70 hover:text-white transition-all cursor-default"
                  >{s}</motion.span>
                ))}
              </div>
            </div>

            <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 flex-1">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-yellow-500/80 mb-6 flex items-center gap-3"><Award size={16}/> CERTIFICATIONS</h3>
              <ul className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={i} className="text-sm text-white/70 font-medium flex items-start gap-3 hover:text-white transition-colors">
                    <span className="text-yellow-500/50 mt-1">✦</span> {cert}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6 relative z-10">RESEARCH</h3>
              <p className="text-lg font-bold leading-snug mb-4 relative z-10 text-white/90">
                Green Task: A Carbon-Aware Scheduling Algorithm for Enhancing Energy Efficiency in Edge-Fog Computing Systems.
              </p>
              <p className="text-sm text-blue-300/60 font-medium italic relative z-10">Published in IJSAT, 2025</p>
            </div>
          </motion.div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="glass-card p-16 md:p-24 text-center relative overflow-hidden rounded-[3rem] border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none" />
          <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
              LET'S BUILD <br /> THE FUTURE.
            </h2>
            <p className="text-white/50 text-xl mb-16 font-medium max-w-xl mx-auto">
              Currently open for high-impact roles and experimental collaborations.
            </p>
            
            <div className="flex flex-col items-center gap-10">
              <a href="mailto:methunraja7393@gmail.com" className="text-2xl md:text-4xl font-black text-white hover:text-blue-400 transition-colors relative group">
                methunraja7393@gmail.com
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full" />
              </a>
              
              <div className="flex gap-6">
                <a href="https://github.com/Methun-21" target="_blank" rel="noreferrer" className="group p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/20 hover:scale-110 hover:-translate-y-2 transition-all duration-300 text-white/70 hover:text-white flex items-center gap-3">
                  <Github size={24} /> <span className="text-sm font-bold hidden sm:block">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/methunraj-a-6a5aa932a" target="_blank" rel="noreferrer" className="group p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/20 hover:scale-110 hover:-translate-y-2 transition-all duration-300 text-white/70 hover:text-[#0A66C2] flex items-center gap-3">
                  <Linkedin size={24} /> <span className="text-sm font-bold hidden sm:block">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
              <span>© 2026 METHUNRAJ A</span>
              <div className="flex gap-6 md:gap-12">
                <span className="hover:text-white/60 transition-colors">SRM UNIVERSITY</span>
                <span className="hover:text-white/60 transition-colors">AI/ML SPECIALIST</span>
              </div>
            </div>
          </motion.div>
        </footer>
      </main>
    </div>
  );
}
