"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Fade in 0-10%, fully visible 10-20%, fade out 20-30%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [50, 0, 0, -50]);

  // Fade in 35-45%, fully visible 45-55%, fade out 55-65%
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [-50, 0, 0, -50]);

  // Fade in 70-80%, fully visible 80-90%, fade out 90-100%
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [50, 0, 0, 50]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-xl mb-4">
            Somunath Sahu. <br className="md:hidden"/> Cybersecurity & CS.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
            Motivated Cybersecurity student with a strong foundation in computer science and hands-on software development.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, x: x2 }}
          className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
        >
          <div className="max-w-xl bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              I build secure systems.
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              From real-time Intrusion Detection Systems using OpenCV to automated CI/CD DevOps pipelines, I focus on building robust, automated, and secure digital architectures.
            </p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, x: x3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-24"
        >
          <div className="max-w-xl bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Bridging security <br/> and intelligence.
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Experienced in identifying vulnerabilities and developing AI-driven solutions like NLP Fake News Detection. I combine security best practices with technical rigor.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
