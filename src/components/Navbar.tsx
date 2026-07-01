"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 relative z-50">
          <div className="relative w-12 h-12">
            <Image 
              src="/sailorprep-logo.png" 
              alt="Sailor Prep Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className={`font-bold text-xl md:text-2xl tracking-tight ${
            isScrolled ? 'text-brand-950 dark:text-white' : 'text-brand-950 dark:text-white'
          }`}>
            SAILOR PREP
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-600 text-white px-5 py-2 rounded-full font-medium shadow-md shadow-brand-500/20 hover:bg-brand-700 hover:shadow-lg transition-all"
            >
              Enroll Now
            </motion.button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50 relative">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900 dark:text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl flex flex-col py-4 px-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border-b border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="mt-4" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-brand-600 text-white px-5 py-3 rounded-xl font-medium shadow-md text-center">
                Enroll Now
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
