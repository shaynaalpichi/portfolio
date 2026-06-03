import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project, index, itemVariants }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  // Programmatic playback engine to ensure loops don't drop frames on hover trigger
  useEffect(() => {
    if (project.videoSrc && videoRef.current) {
      if (isHovered) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => console.log("Autoplay caught:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered, project.videoSrc]);

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative h-[440px] bg-zinc-900/10 border border-zinc-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-mocha/60 transition-all duration-500 backdrop-blur-xs cursor-pointer overflow-hidden shadow-2xl ${project.className || ""}`}
    >
      {/* Dynamic Ambient Background Aura */}
      <div className={`absolute inset-0 bg-gradient-to-b ${project.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`} />

      {/* STATIC LAYOUT CONTENT (Collapses slightly on hover if a video exists) */}
      <div className="relative z-10 transition-all duration-500 group-hover:translate-y-[-4px]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-brand-mocha font-mono text-[10px] tracking-wider">{project.course}</span>
          <div className={`w-2 h-2 rounded-full ${project.dotBg} ${project.pulse ? "animate-pulse" : ""}`} />
        </div>
        <h3 className="text-2xl font-thin tracking-wide text-zinc-100 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        
        {/* Paragraph fades down slightly on hover to give the video preview focal authority */}
        <p className="text-brand-linen/60 text-xs leading-relaxed mt-3 font-thin transition-opacity duration-500 group-hover:opacity-30">
          {project.description}
        </p>
      </div>

      {/* DYNAMIC VIDEO PREVIEW LOOP OVERLAY */}
      <AnimatePresence>
        {isHovered && project.videoSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 p-4 pt-24 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/95 to-transparent z-20 flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Realistic smartphone/viewport frame wrapper */}
            <div className="relative w-[150px] h-[240px] md:w-[170px] md:h-[260px] rounded-2xl border-4 border-zinc-800/90 overflow-hidden shadow-2xl bg-zinc-950">
              <video
                ref={videoRef}
                src={project.videoSrc}
                muted
                loop
                playsInline
                className="w-full h-full object-cover mix-blend-lighten"
              />
              {/* Internal vignette shadowing */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOWER TAG FOOTER */}
      <div className="relative z-30 space-y-4">
        <div className="flex flex-wrap gap-1.5 text-[10px] font-mono tracking-wider uppercase text-brand-linen/40">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-zinc-950/40 rounded border border-zinc-900/60 text-brand-linen/50 group-hover:border-brand-mocha/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}