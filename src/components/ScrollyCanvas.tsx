"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

const FRAME_COUNT = 80;

export default function ScrollyCanvas({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const drawFrame = useCallback((index: number, imgs: HTMLImageElement[]) => {
    if (!canvasRef.current || !imgs[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgs[index];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      loadedImages.push(img); // Push immediately to maintain index order and avoid synchronous onload bugs

      const handleLoad = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT && isMounted) {
          setImages([...loadedImages]); // Use spread to ensure React sees a distinct new array instance
          drawFrame(0, loadedImages);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // Ensure we don't hang if an image fails
      
      const frameIndex = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameIndex}_delay-0.062s.png`; // Setting src last triggers the load
    }
    
    return () => {
      isMounted = false;
    };
  }, [drawFrame]);

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );
    drawFrame(frameIndex, images);
  });

  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(scrollYProgress.get() * FRAME_COUNT))
        );
        drawFrame(frameIndex, images);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress, drawFrame]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-80 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
    </div>
  );
}
