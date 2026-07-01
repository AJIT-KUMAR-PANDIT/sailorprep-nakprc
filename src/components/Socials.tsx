"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaYoutube, FaFacebook, FaInstagram, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';

const socials = [
  { name: 'WhatsApp', icon: <FaWhatsapp size={24} />, href: '#', color: 'bg-green-500 hover:bg-green-600' },
  { name: 'Call Us', icon: <FaPhoneAlt size={24} />, href: '#', color: 'bg-brand-600 hover:bg-brand-700' },
  { name: 'Truecaller', icon: <FaShieldAlt size={24} />, href: '#', color: 'bg-blue-500 hover:bg-blue-600' },
  { name: 'YouTube', icon: <FaYoutube size={24} />, href: '#', color: 'bg-red-600 hover:bg-red-700' },
  { name: 'Facebook', icon: <FaFacebook size={24} />, href: '#', color: 'bg-blue-600 hover:bg-blue-700' },
  { name: 'Instagram', icon: <FaInstagram size={24} />, href: 'https://instagram.com/sailorprep', color: 'bg-pink-600 hover:bg-pink-700' },
];

export function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="#"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
      >
        <FaWhatsapp size={28} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="#"
        className="w-14 h-14 bg-brand-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-600/30"
      >
        <FaPhoneAlt size={28} />
      </motion.a>
    </div>
  );
}

export default function FooterSocials() {
  return (
    <footer id="contact" className="bg-gray-50 dark:bg-gray-950 pt-24 pb-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16">
                <Image 
                  src="/sailorprep-logo.png" 
                  alt="Sailor Prep Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">SAILOR PREP</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md text-lg">
              Join the ranks of elite mariners. We provide top-tier preparation for maritime entrance exams. 
              Connect with us today!
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-start md:justify-end">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`flex flex-col items-center justify-center w-20 h-20 rounded-2xl text-white shadow-lg transition-colors ${social.color}`}
              >
                {social.icon}
                <span className="text-[10px] font-bold mt-2">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 dark:text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Sailor Prep. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
