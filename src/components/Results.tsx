"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const mockStudents = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  name: `Student ${i + 1}`,
  rank: `AIR ${Math.floor(Math.random() * 100) + 1}`,
  course: ["IMUCET", "DNS", "BSc", "B.Tech"][Math.floor(Math.random() * 4)],
}));

export default function Results() {
  return (
    <section id="results" className="py-24 bg-brand-950 text-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[100px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full blur-[120px] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Hall of Fame
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-cyan-500 mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-brand-100 max-w-2xl mx-auto"
          >
            Hundreds of our students have secured top ranks and company sponsorships. Your photo could be here next!
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee - Row 1 */}
      <div className="flex w-[200%] gap-4 animate-marquee mb-6 hover:[animation-play-state:paused]">
        {[...mockStudents, ...mockStudents].map((student, idx) => (
          <div 
            key={`${student.id}-${idx}`} 
            className="flex-shrink-0 w-72 bg-brand-900/50 backdrop-blur-md rounded-2xl p-4 border border-brand-800/50 hover:border-brand-500 transition-colors cursor-pointer group"
          >
            <div className="w-full h-64 bg-brand-800 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
              {/* Placeholder for student image */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent z-10" />
              <div className="text-brand-500 opacity-50">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-cyan-500 text-brand-950 text-xs font-bold px-2 py-1 rounded">
                  {student.rank}
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                {student.name}
              </h4>
              <p className="text-brand-300">Selected for {student.course}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Marquee - Row 2 (Reverse direction logic can be added by tweaking animation, using simple marquee here) */}
      <div className="flex w-[200%] gap-4 animate-marquee ml-[-50%] hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
        {[...mockStudents, ...mockStudents].reverse().map((student, idx) => (
          <div 
            key={`row2-${student.id}-${idx}`} 
            className="flex-shrink-0 w-72 bg-brand-900/50 backdrop-blur-md rounded-2xl p-4 border border-brand-800/50 hover:border-brand-500 transition-colors cursor-pointer group"
          >
            <div className="w-full h-64 bg-brand-800 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent z-10" />
              <div className="text-brand-500 opacity-50">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-cyan-500 text-brand-950 text-xs font-bold px-2 py-1 rounded">
                  {student.rank}
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                {student.name}
              </h4>
              <p className="text-brand-300">Selected for {student.course}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
