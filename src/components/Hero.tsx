"use client";

import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <section 
      id="inicio"
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 w-full h-full"
      ></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tighter"
        >
          O Fim dos Limites.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Jogue em Qualquer Tela.
          </span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-3xl text-[#8A94A7] mb-8"
        >
          Esqueça os downloads e upgrades. Com a Synapse, seu próximo PC gamer de alta performance está a um clique, pronto para rodar os maiores títulos com gráficos no máximo.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <a
            href="#planos"
            className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-bold text-white
                       transform transition-all duration-300 
                       hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Ver planos
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
