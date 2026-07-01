"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass, Ship, Waves, Navigation } from 'lucide-react';

const courses = [
  {
    title: "IMUCET",
    description: "Comprehensive preparation for Indian Maritime University Common Entrance Test. Secure top ranks with our expert guidance.",
    icon: <Navigation className="text-brand-500" size={32} />,
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    title: "DNS (Diploma in Nautical Science)",
    description: "Launch your career as a Deck Officer. We prepare you thoroughly for sponsorships and company exams.",
    icon: <Compass className="text-brand-500" size={32} />,
    color: "from-cyan-500/20 to-cyan-600/5",
  },
  {
    title: "BSc Maritime Science",
    description: "Master both nautical science and marine engineering concepts. Ideal for those who want versatile career options.",
    icon: <Ship className="text-brand-500" size={32} />,
    color: "from-teal-500/20 to-teal-600/5",
  },
  {
    title: "B.Tech Marine Engineering",
    description: "Become a top-tier Marine Engineer. Specialized physics, math, and mechanical aptitude training.",
    icon: <Anchor className="text-brand-500" size={32} />,
    color: "from-indigo-500/20 to-indigo-600/5",
  },
  {
    title: "Gp Rating",
    description: "Start your journey at sea with General Purpose Rating. Practical knowledge and interview prep.",
    icon: <Waves className="text-brand-500" size={32} />,
    color: "from-sky-500/20 to-sky-600/5",
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Elite Programs
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-brand-500 mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Choose your path to the merchant navy. We provide specialized coaching for every major maritime entrance exam and company sponsorship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${course.color} border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 transform translate-x-4 -translate-y-4">
                {course.icon}
              </div>
              <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-gray-700">
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {course.description}
              </p>
              <div className="mt-6 flex items-center text-brand-600 font-semibold cursor-pointer group-hover:text-brand-700">
                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
