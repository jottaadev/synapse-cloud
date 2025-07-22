"use client";

import { Cpu, Zap, MonitorSmartphone, HardDrive } from 'lucide-react';
import React, { useRef } from 'react';
import { motion, useMotionTemplate, useSpring, useTransform } from 'framer-motion';

const benefits = [
    {
    icon: <Cpu size={24} />,
    title: 'Poder de Elite',
    description: 'Nossas VMs contam com GPUs NVIDIA e CPUs de ponta, prontas para rodar os últimos lançamentos com gráficos no máximo e FPS nas alturas.',
    },
    {
    icon: <Zap size={24} />,
    title: 'Latência Ultra-Baixa',
    description: 'Com servidores otimizados e localizados no Brasil, garantimos uma conexão ultra-rápida para que seus comandos sejam instantâneos.',
    },
    {
    icon: <MonitorSmartphone size={24} />,
    title: 'Jogue em Qualquer Tela',
    description: 'Liberte-se do seu setup. Jogue no seu PC, notebook, tablet ou até na TV. Sua máquina gamer te acompanha em qualquer lugar.',
    },
    {
    icon: <HardDrive size={24} />,
    title: 'Seu Espaço, Seus Jogos',
    description: 'Cada VM vem com armazenamento SSD NVMe dedicado para você instalar seus jogos, mods e salvar seu progresso com velocidade máxima.',
    },
];

const BenefitCard = ({ benefit }: { benefit: (typeof benefits)[0] }) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useSpring(0, { stiffness: 400, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const transform = useMotionTemplate`perspective(1000px) rotateY(${useTransform(mouseX, [-150, 150], [-15, 15])}deg) rotateX(${useTransform(mouseY, [-100, 100], [15, -15])}deg)`;

  return (
    <motion.div
      ref={ref}
      style={{ transform }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="shimmer-card relative flex flex-col p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm 
                 border border-white/10"
    >
      <div className="mb-4 bg-cyan-500/10 text-cyan-400 p-3 rounded-lg w-min">
        {benefit.icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
      <p className="text-base text-[#8A94A7]">{benefit.description}</p>
    </motion.div>
  );
}

export function Benefits() {
  return (
    <section 
      id="beneficios" 
      className="py-20 sm:py-32"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Uma Experiência Sem Compromissos
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#8A94A7]">
            Cada aspecto da nossa plataforma foi desenhado para entregar poder, velocidade e liberdade para seu gameplay.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
