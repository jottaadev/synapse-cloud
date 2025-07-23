// src/components/FinalCta.tsx

"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function FinalCta() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const yH2 = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const yP = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const yButton = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);


  return (
    <section 
      ref={targetRef}
      className="relative py-24 sm:py-40 overflow-hidden"
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(125deg, #000000 0%, #020f1a 40%, #00284d 70%, #000000 100%)`,
          backgroundSize: '400% 400%',
          animation: 'aurora 15s ease infinite',
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.h2
          style={{ y: yH2 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Pronto para Começar?
        </motion.h2>

        <motion.p
          style={{ y: yP }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-[#8A94A7] max-w-2xl mx-auto"
        >
          Junte-se à Synapse e eleve sua experiência computacional a um novo patamar.
          Acesso instantâneo, performance garantida.
        </motion.p>

        <motion.div
          style={{ y: yButton }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="#planos"
            className="mt-8 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg 
                       transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50"
            style={{
              animation: 'pulseGlow 3s infinite',
            }}
          >
            Ver Planos
          </a>
        </motion.div>
      </div>
    </section>
  );
}