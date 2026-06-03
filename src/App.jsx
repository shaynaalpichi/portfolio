import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0b0b0f] flex flex-col items-center justify-center z-50">
        <div className="text-xl font-thin text-brand-linen mb-4 tracking-[0.4em] uppercase animate-pulse">Initializing Canvas</div>
        <div className="w-64 h-[1px] bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-green via-brand-mocha to-brand-linen w-full" style={{ animation: 'loading 1.5s ease-in-out forwards' }} />
        </div>
      </div>
    );
  }

  // Animation constants for clean staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 16 } }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0b0b0f] text-brand-linen overflow-x-hidden font-thin">
      <CustomCursor />
      <Header />
      <Hero />
      
      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className="w-full min-h-screen py-32 px-6 md:px-20 bg-[#0b0b0f] flex flex-col justify-center border-t border-zinc-900/40 relative z-30">
        <div className="max-w-6xl mx-auto w-full space-y-16">
          
          {/* Section Header */}
          <div className="space-y-2">
            <span className="text-brand-mocha font-thin tracking-widest uppercase text-xs">• PRODUCTION & ARCHITECTURE</span>
            <h2 className="text-3xl md:text-5xl font-thin tracking-tight text-zinc-100 mt-4 mb-6 leading-tight">Projects</h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-brand-green via-brand-mocha to-brand-linen rounded-full mt-2" />
          </div>
          
          {/* Dynamic Staggered Project Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            
            {/* Project 1: Wildflower */}
            <motion.div variants={itemVariants} className="group relative h-[440px] bg-zinc-900/10 border border-zinc-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-mocha/60 transition-all duration-500 backdrop-blur-xs cursor-pointer overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-linen/0 to-brand-linen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-mocha font-mono text-[10px] tracking-wider">WEB FRAMEWORKS & UX</span>
                  <div className="w-2 h-2 rounded-full bg-brand-linen shadow-[0_0_8px_#b5a79c]" />
                </div>
                <h3 className="text-2xl font-thin tracking-wide text-zinc-100 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Wildflower</h3>
                <p className="text-brand-linen/60 text-xs leading-relaxed mt-3 font-thin">
                  Conceptualized and engineered a gamified educational application using JavaScript to map localized plant biology. Built interactive gameplay modules translating high-fidelity Figma blueprints into performant code.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono tracking-wider uppercase text-brand-linen/40">
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">UX Physics</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">State Loops</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">Optimization</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Carbon */}
            <motion.div variants={itemVariants} className="group relative h-[440px] bg-zinc-900/10 border border-zinc-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-mocha/60 transition-all duration-500 backdrop-blur-xs cursor-pointer overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-mocha font-mono text-[10px] tracking-wider">SOFTWARE ENGINEERING & DATA</span>
                  <div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_#013820] animate-pulse" />
                </div>
                <h3 className="text-2xl font-thin tracking-wide text-zinc-100 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Carbon</h3>
                <p className="text-brand-linen/60 text-xs leading-relaxed mt-3 font-thin">
                  Designed a dynamic data overlay UI tracking dining menu footprints. Integrated an AI recommendation layer parsing ingredients asynchronously to recommend low-impact offsets while authoring strict SRS schema constraints for minimal data-query latency.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono tracking-wider uppercase text-brand-linen/40">
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">AI Integration</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">Relational Models</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">SRS Docs</span>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Reaper */}
            <motion.div variants={itemVariants} className="group relative h-[440px] bg-zinc-900/10 border border-zinc-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-mocha/60 transition-all duration-500 backdrop-blur-xs cursor-pointer overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-mocha/0 to-brand-mocha/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-mocha font-mono text-[10px] tracking-wider">HCI & WEB DEVELOPMENT</span>
                  <div className="w-2 h-2 rounded-full bg-brand-mocha shadow-[0_0_8px_#695445]" />
                </div>
                <h3 className="text-2xl font-thin tracking-wide text-zinc-100 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Reaper Companion</h3>
                <p className="text-brand-linen/60 text-xs leading-relaxed mt-3 font-thin">
                  Architected a low-latency DAW companion layout engineered to accelerate keyboard workflows and track live studio metrics. Implemented focused state stores utilizing React and Tailwind CSS, prioritizing rapid readability for dark audio production monitors.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono tracking-wider uppercase text-brand-linen/40">
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">React Engine</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">Tailwind UX</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">Low Latency</span>
                </div>
              </div>
            </motion.div>

            {/* Project 4: Full-Stack E-Commerce Application */}
            <motion.div variants={itemVariants} className="group relative h-[440px] bg-zinc-900/10 border border-zinc-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-mocha/60 transition-all duration-500 backdrop-blur-xs cursor-pointer overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-mocha font-mono text-[10px] tracking-wider">WEB INFORMATION MANAGEMENT</span>
                </div>
                <h3 className="text-2xl font-thin tracking-wide text-zinc-100 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Full-Stack Data Hub</h3>
                <p className="text-brand-linen/60 text-xs leading-relaxed mt-3 font-thin">
                  Designed a hardened relational database schema paired with a structured RESTful Node.js/Express API pipeline. Handles robust encrypted user authentication, synchronized global inventory nodes, and transactional states under high simulated client concurrency.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono tracking-wider uppercase text-brand-linen/40">
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">Node / Express</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">Schema Design</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">REST APIs</span>
                </div>
              </div>
            </motion.div>

            {/* Project 6: Community Partner Commercial Kitchen Spatial & Systems Redesign */}
            <motion.div 
              variants={itemVariants} 
              className="group relative h-[440px] bg-zinc-900/10 border border-zinc-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-mocha/60 transition-all duration-500 backdrop-blur-xs cursor-pointer overflow-hidden shadow-2xl lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-mocha font-mono text-[10px] tracking-wider">HUMAN-CENTERED DESIGN & ENGINEERING</span>
                  <div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_#013820]" />
                </div>
                <h3 className="text-2xl font-thin tracking-wide text-zinc-100 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Spatial Redesign</h3>
                <p className="text-brand-linen/60 text-xs leading-relaxed mt-3 font-thin">
                  Partnered with a local organization to overhaul a high-traffic community kitchen layout, executing end-to-end user research, spatial workflows, and accessibility analysis. Transformed ambiguous requirements into rigorous, production-ready blueprint documentation to guide physical engineering implementation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono tracking-wider uppercase text-brand-linen/40">
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">Human Factors</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">User Research</span>
                  <span className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60">Blueprinting</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className="w-full min-h-screen py-32 px-6 md:px-20 bg-zinc-950/40 flex flex-col justify-center border-t border-zinc-900/40 relative z-30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="space-y-6">
            <div className="space-y-5">
              <span className="text-brand-mocha font-thin tracking-widest uppercase text-xs">A Bit About Me</span>
              <h2 className="text-3xl md:text-5xl font-thin tracking-tight text-white mt-4 mb-6 leading-tight">Hi, I'm Shayna!</h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-brand-green to-brand-linen rounded-full mt-2" />
            </div>
            <p className="text-brand-linen/80 leading-relaxed text-sm md:text-base font-thin tracking-wide">
              I specialize in building high-end interactive interfaces that blur the line between cinema and code. By combining hardware-accelerated rendering frameworks with clean, responsive front-end design, I turn complex creative visions into immersive digital realities.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-brand-green/5 rounded-2xl blur-3xl pointer-events-none" />
            <div className="relative group max-w-sm overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-2 shadow-2xl shadow-brand-green/5 transition-all duration-500 hover:border-brand-mocha/40">
              <img src="/about-photo.png" alt="Developer Portfolio Background" className="w-full h-auto object-cover rounded-xl grayscale-[25%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.01]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="w-full min-h-screen py-32 px-6 md:px-20 bg-[#0b0b0f] flex flex-col justify-center border-t border-zinc-900/40 relative z-30">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-xl mx-auto text-center space-y-8 w-full">
          <div className="space-y-2 flex flex-col items-center">
            <span className="text-brand-mocha font-thin tracking-widest uppercase text-xs">• INITIATE COLLABORATION</span>
            <h2 className="text-3xl md:text-5xl font-thin tracking-tight text-zinc-100 mt-4 mb-6 leading-tight">Let's Connect</h2>
            <p>Whether you have a complex frontend pipeline that needs optimized, a creative vision that requires technical translation, or a premium brand looking for its next core digital interface, you've found your next developer. Drop your details below, and let’s construct an environment that converts.</p> <br />
            <div className="w-16 h-[1px] bg-gradient-to-r from-brand-green to-brand-linen rounded-full mt-3" />
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-left mt-6 font-thin">
            <input type="text" placeholder="Your Name" className="w-full h-12 px-4 bg-zinc-900/20 rounded-lg border border-zinc-800/80 focus:border-brand-mocha outline-none text-sm transition-colors text-white font-thin" />
            <input type="email" placeholder="Your Email" className="w-full h-12 px-4 bg-zinc-900/20 rounded-lg border border-zinc-800/80 focus:border-brand-mocha outline-none text-sm transition-colors text-white font-thin" />
            <textarea placeholder="Message" rows="4" className="w-full p-4 bg-zinc-900/20 rounded-lg border border-zinc-800/80 focus:border-brand-mocha outline-none text-sm transition-colors resize-none text-white font-thin" />
            <motion.button 
              type="submit" 
              whileHover={{ 
                y: -2,
                backgroundColor: "#695445", 
                boxShadow: "0px 10px 25px rgba(1, 56, 32, 0.4)" 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-full h-12 bg-brand-green text-white font-normal rounded-lg text-xs tracking-widest uppercase cursor-pointer focus:outline-none"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}