"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Anchor } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-50 dark:bg-gray-950 pt-20">
      {/* Animated Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-400/30 blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-300/20 blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-brand-500/20 blur-[150px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-brand-200 dark:border-gray-700 text-brand-800 dark:text-brand-300 text-sm font-medium shadow-sm backdrop-blur-sm">
              <Anchor size={16} /> 
              Path To Merchant Navy
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8"
          >
            Set Sail for Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">
              Dream Career
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Expert coaching for IMUCET, DNS, BSc Maritime Science, B.Tech Marine Engineering, and Gp Rating. 
            Your journey to the merchant navy starts here.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#courses" className="w-full sm:w-auto">
              <button className="w-full group flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-500/30 hover:bg-brand-700 hover:shadow-2xl transition-all">
                Explore Courses
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-xl font-bold text-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                Contact Us
              </button>
            </a>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.9,127,201.2,119.53,243.6,115.06,284.14,97.7,321.39,56.44Z" className="fill-white dark:fill-gray-900"></path>
        </svg>
      </div>
    </section>
  );
}
