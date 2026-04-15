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
  MapPin,
  Phone,
  Code2
} from "lucide-react";

const PROJECTS = [
  {
    title: "The Last Spark",
    desc: "Apple Swift Student Challenge 2026 Winner. Sci-fi arcade dodge game with haptics and spatial audio.",
    tech: ["SwiftUI", "Swift", "Xcode"],
    icon: <Sparkles className="text-yellow-400" />,
    color: "from-yellow-500/20 to-transparent"
  },
  {
    title: "FedCausalFreshNet",
    desc: "AI-powered system applying federated learning and causal inference for product shelf-life prediction.",
    tech: ["PyTorch", "Flower", "FastAPI"],
    icon: <BrainCircuit className="text-blue-400" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Lost & Found System",
    desc: "Full-stack web app with image similarity matching for finding lost items.",
    tech: ["React", "Flask", "MySQL"],
    icon: <Layers className="text-purple-400" />,
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Air Quality Prediction",
    desc: "Human Mobility-Aware Air Quality Prediction and Exposure Risk Mapping in Delhi.",
    tech: ["Python", "XGBoost", "Flask"],
    icon: <Globe className="text-emerald-400" />,
    color: "from-emerald-500/20 to-transparent"
  }
];

const EXPERIENCE = [
  {
    company: "Infosys",
    role: "Virtual Internship",
    period: "Aug - Oct 2025",
    desc: "AI-powered skill gap analysis using Python, NLP, NER, and Sentence-BERT semantic similarity."
  },
  {
    company: "DRDO, CVRDE",
    role: "Research Intern",
    period: "Jun - Jul 2025",
    desc: "Developed Computer-Aided Process Planning (CAPP) optimizing CNC toolpaths using quintic Bézier curves."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-blue-500/30 relative overflow-hidden">
      {/* Mesh Background */}
      <div className="fixed inset-0 z-0 mesh-gradient animate-slow-pan opacity-50 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 glass-nav rounded-full flex items-center gap-12">
        <span className="font-black tracking-tighter text-xl">METHUNRAJ.A</span>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Methun-21" target="_blank" className="hover:scale-110 transition-transform"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/methunraj-a-6a5aa932a" target="_blank" className="hover:scale-110 transition-transform"><Linkedin size={18} /></a>
        </div>
      </nav>

      <main className="relative z-10 pt-48 px-6 max-w-7xl mx-auto pb-32">
        {/* Hero Section */}
        <section className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex glass-pill mb-8 text-blue-400">
              <Sparkles size={12} className="mr-2" />
              <span>Available for New Challenges</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12 text-glow">
              CRAFTING <br />
              <span className="text-white/20">INTELLIGENCE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
              CS student (Honors: Quantum Computing) at SRM. Winner of the Apple Swift Student Challenge 2026.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#work" className="px-10 py-5 bg-white text-black font-black rounded-3xl hover:scale-105 transition-all flex items-center gap-3 shadow-2xl shadow-white/20">
                Explore Work <ArrowUpRight size={20} />
              </a>
              <button className="px-10 py-5 glass-card font-black rounded-3xl hover:bg-white/10 transition-all">
                Download CV
              </button>
            </div>
          </motion.div>
        </section>

        {/* Work Section */}
        <section id="work" className="mb-48">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-3xl font-black tracking-tight">SELECTED PROJECTS</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-12 group cursor-pointer"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className="p-5 bg-white/5 rounded-3xl w-fit mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <h3 className="text-4xl font-black mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed mb-10 font-medium">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-2 glass-pill text-[9px]">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Skills */}
        <section id="about" className="grid md:grid-cols-3 gap-8 mb-48">
          <div className="md:col-span-2 glass-card p-12">
            <h2 className="text-2xl font-black mb-16 flex items-center gap-4 tracking-tight">
              <Terminal size={28} className="text-blue-400" /> EXPERIENCE
            </h2>
            <div className="space-y-16">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-white/20 font-black text-xs pt-1 tracking-widest">{exp.period}</div>
                  <div>
                    <h3 className="text-2xl font-black group-hover:text-blue-400 transition-colors tracking-tight">{exp.company}</h3>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mb-4">{exp.role}</p>
                    <p className="text-white/50 leading-relaxed text-lg font-medium">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8">TECH STACK</h3>
              <div className="flex flex-wrap gap-3">
                {["Python", "Swift", "C++", "React", "Flask", "PyTorch", "Scikit", "Tailwind"].map(s => (
                  <span key={s} className="px-4 py-2 glass-pill text-[9px]">{s}</span>
                ))}
              </div>
            </div>
            <div className="glass-card p-10 bg-blue-500/5 border-blue-500/20">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6">RESEARCH</h3>
              <p className="text-lg font-bold leading-tight mb-4">
                Green Task: A Carbon-Aware Scheduling Algorithm for Enhancing Energy Efficiency in Edge-Fog Computing Systems.
              </p>
              <p className="text-sm text-white/30 font-medium italic">Published in IJSAT, 2025</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="glass-card p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12">LET'S BUILD <br /> THE FUTURE.</h2>
            <p className="text-white/40 text-xl mb-16 font-medium max-w-xl mx-auto">
              Currently open for high-impact roles and experimental collaborations.
            </p>
            
            <div className="flex flex-col items-center gap-12">
              <a href="mailto:methunraja7393@gmail.com" className="text-2xl md:text-4xl font-black border-b-2 border-white/10 pb-4 hover:border-white transition-colors">
                methunraja7393@gmail.com
              </a>
              
              <div className="flex gap-8">
                <a href="https://github.com/Methun-21" target="_blank" className="p-5 glass-card rounded-3xl hover:bg-white/10 transition-all">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/methunraj-a-6a5aa932a" target="_blank" className="p-5 glass-card rounded-3xl hover:bg-white/10 transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-white/10">
              <span>© 2026 METHUNRAJ A</span>
              <div className="flex gap-8">
                <span>SRM UNIVERSITY</span>
                <span>AI/ML SPECIALIST</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
