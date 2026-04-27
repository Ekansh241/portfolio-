"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/30">
      <div ref={containerRef} className="relative h-[500vh]">
        <ScrollyCanvas scrollYProgress={scrollYProgress} />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
      <div className="relative overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Aurora Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-900/40 blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1], 
              opacity: [0.2, 0.4, 0.2],
              x: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] right-[0%] w-[70%] h-[70%] rounded-full bg-fuchsia-900/30 blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1], 
              opacity: [0.3, 0.6, 0.3],
              y: [0, -50, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-900/40 blur-[120px]" 
          />
        </div>
        <div className="relative z-10">
          <Projects />
          <Resume />
        </div>
      </div>
    </main>
  );
}
