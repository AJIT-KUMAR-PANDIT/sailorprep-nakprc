"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent, motion, useTransform } from 'framer-motion';

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoaded(true);
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      // requestAnimationFrame ensures the video currentTime update is synced with the display refresh rate
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = latest * duration;
        }
      });
    }
  });

  const videoSrc = isMobile ? "/sailorprep-mobile.mp4" : "/sailorprep-pc.mp4";

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-black"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Loading State or overlay could go here */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black">
            <div className="animate-pulse text-brand-500 font-medium">Loading Immersive Experience...</div>
          </div>
        )}
        
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          preload="auto"
          muted
          playsInline
          onLoadedMetadata={handleLoadedMetadata}
          // We don't want it to play automatically since scroll controls it
        />
        
        {/* Optional text overlay while scrolling */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1]) }}
        >
          <div className="text-center bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Experience Excellence</h2>
            <p className="text-xl text-gray-300">Scroll to explore</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
