import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-[#0b0b0f] pt-24 md:pt-0"
    >
      {/* Background Ambient Lighting Maps */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-brand-mocha/10 rounded-full blur-[140px] pointer-events-none z-0 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute left-1/4 bottom-1/4 w-[600px] h-[600px] bg-brand-green/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* ================= LEFT CONTENT COLUMN ================= */}
      <div className="relative z-20 flex flex-col gap-5 max-w-xl">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-mocha font-thin tracking-[0.35em] uppercase text-xs block"
        >
          • INTRODUCING
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl font-thin tracking-tight leading-none text-brand-linen"
        >
          <italic>Your</italic> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-mocha to-brand-linen font-bold">
            next developer!
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-brand-linen/70 font-thin text-sm md:text-base leading-relaxed tracking-wide"
        >
          My digital workspace blending high-fidelity cinematic animation with responsive interface frameworks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-2"
        >
          <a 
            href="#projects" 
            className="inline-block h-12 px-8 py-3 bg-brand-green hover:bg-brand-green/80 text-brand-linen font-normal rounded-lg shadow-xl shadow-brand-green/10 hover:scale-[1.02] transition-all duration-300 text-xs tracking-[0.2em] uppercase"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>

      {/* ================= RIGHT VIDEO CONTAINER ================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full md:w-[55%] h-[50vh] md:h-[calc(100vh-68px)] flex items-center justify-center z-10 md:absolute md:right-0 md:top-[68px] overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 45%, rgba(0,0,0,1) 100%)',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 45%, rgba(0,0,0,1) 100%)'
        }}
      >
        <video
  src="/hero-character.mp4"
  autoPlay
  muted
  playsInline
  preload="auto"
  onCanPlayThrough={(e) => {
    e.target.play().catch((err) => {
      console.log("Browser blocked autoplay engine, forcing secondary trigger:", err);
    });
  }}
  className="w-full h-full object-cover pointer-events-none select-none mix-blend-lighten"
  style={{ clipPath: 'inset(4px 0px 4px 0px)' }}
/>

        {/* Multi-Stage Ambient Vignette Blockers */}
        {/* Deep, ultra-wide horizontal shadow ramp that completely kills the middle seam line */}
        <div className="absolute inset-y-0 left-0 w-48 md:w-96 bg-gradient-to-r from-[#0b0b0f] via-[#0b0b0f]/60 to-transparent pointer-events-none z-20" />
        
        {/* Soft edge-smoothing feather boxes */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/40 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f]/20 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0b0f] to-transparent pointer-events-none z-20" />
      </motion.div>
    </section>
  );
}