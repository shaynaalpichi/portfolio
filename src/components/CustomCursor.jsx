import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 250, damping: 25 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Subtracting half the width/height to perfectly center the custom tracking layers
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-linen pointer-events-none z-50 mix-blend-difference hidden md:block"
      style={{ x: cursorX, y: cursorY }}
    >
      <div className="w-1.5 h-1.5 bg-brand-linen rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}