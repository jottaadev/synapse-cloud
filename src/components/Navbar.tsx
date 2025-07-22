"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, CreditCard, HelpCircle } from "lucide-react";
import React from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Benefícios", href: "#beneficios", icon: <Rocket size={24} /> },
    { name: "Planos", href: "#planos", icon: <CreditCard size={24} /> },
    { name: "FAQ", href: "#faq", icon: <HelpCircle size={24} /> },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      >
        <div 
          className={`transition-all duration-300 ease-in-out flex items-center gap-6 rounded-full border px-4
            ${isScrolled 
              ? "bg-slate-900/50 backdrop-blur-xl border-white/10 shadow-lg"
              : "bg-transparent border-transparent"
            }`
          }
        >
          <Link href="/" className="text-2xl font-bold text-white p-3">
            Synapse Cloud
          </Link>
          
          <div className="h-6 w-px bg-white/10 hidden md:block"></div>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white/10">
                {React.cloneElement(link.icon, { size: 14 })}
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-white/10 hidden md:block"></div>

          <a
            href="#planos"
            className="hidden md:block text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all duration-300
                       bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Ver Planos
          </a>

          <div className="md:hidden p-2">
            <button onClick={() => setIsMenuOpen(true)} className="text-white" aria-label="Abrir menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-[60] flex flex-col p-6"
          >
            <div className="flex justify-between items-center">
               <Link href="/" className="text-2xl font-bold text-white">Synapse Cloud</Link>
               <button onClick={() => setIsMenuOpen(false)} className="text-white p-2" aria-label="Fechar menu">
                 <X size={28} />
               </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, ease: "easeOut" }}
                  className="flex items-center gap-4 text-3xl text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#planos"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, ease: "easeOut" }}
                className="mt-6 text-2xl font-semibold text-white px-8 py-4 rounded-full
                          bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Ver Planos
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}