// src/components/Faq.tsx

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users } from 'lucide-react'; // 1. Importamos o ícone 'Users'

// Conteúdo do FAQ
const faqData = [
  {
    question: 'Qual é a velocidade de internet recomendada?',
    answer: 'Para uma experiência fluida e sem interrupções, recomendamos uma conexão estável e de baixa latência (ping). As velocidades mínimas sugeridas são:\n• 15 Mbps para resolução HD (720p).\n• 25 Mbps para Full HD (1080p).\n• 35+ Mbps para Quad HD (1440p) e 4K.',
  },
  {
    question: 'Como funciona o processo de contratação?',
    answer: 'Nosso processo é direto e personalizado, realizado através do nosso servidor no Discord. Lá, nossa equipe irá auxiliá-lo com a escolha do plano e o processamento do pagamento. Sua VM é provisionada instantaneamente após a confirmação.',
  },
  {
    question: 'A Synapse é compatível com meus dispositivos?',
    answer: 'Sim. Nossa plataforma foi projetada para ser universal. Acesse sua VM de alta performance em praticamente qualquer dispositivo:\n• Desktops (Windows, macOS, Linux)\n• Dispositivos Móveis (Android, iOS)\n• Smart TVs e até mesmo Consoles com navegador integrado.',
  },
  {
    question: 'Como a tecnologia de cloud gaming funciona?',
    answer: 'Nós eliminamos a necessidade de hardware caro. O jogo ou aplicação é executado em nossos servidores de última geração com GPUs NVIDIA, e a imagem e o som são transmitidos em tempo real para sua tela. Seus comandos são enviados instantaneamente para a nuvem, proporcionando uma experiência idêntica à de um PC local, mas com poder ilimitado.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section 
      id="faq" 
      className="py-20 sm:py-32 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ainda tem Dúvidas?
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#8A94A7]">
            Encontre aqui as respostas para as perguntas mais comuns. Se não encontrar o que procura, nossa comunidade pode ajudar.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left p-6"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="whitespace-pre-line"
                    >
                      <div className="px-6 pb-6 text-[#8A94A7]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-base font-bold text-white
                         transform transition-all duration-300 
                         hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <Users className="h-6 w-6" />
              <span>Junte-se à nossa comunidade no Discord</span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
