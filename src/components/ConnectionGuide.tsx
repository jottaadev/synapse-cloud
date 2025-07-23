// src/components/ConnectionGuide.tsx

"use client";

import React from 'react';
import { Globe, Cpu, Zap, Gem, Tv, Share2 } from 'lucide-react';

const tools = [
  {
    name: 'Parsec',
    punchline: 'Acesso Universal, Simplicidade Absoluta.',
    features: [
      { name: 'Acesso Web', description: 'Conecte-se de qualquer lugar, sem instalações.', icon: <Globe size={20} /> },
      { name: 'Ampla Compatibilidade', description: 'Funciona em qualquer hardware gráfico.', icon: <Share2 size={20} /> },
      { name: 'Interface Intuitiva', description: 'Uma experiência de usuário limpa e direta.', icon: <Zap size={20} /> },
      { name: 'Performance Sólida', description: 'Streaming de baixa latência para trabalho e jogos.', icon: <Cpu size={20} /> },
    ],
    downloadLink: 'https://parsec.app/downloads',
  },
  {
    name: 'Moonlight',
    punchline: 'Performance Extrema, Fidelidade Máxima.',
    features: [
      { name: 'Latência Mínima', description: 'Resposta quase nativa com NVIDIA GameStream.', icon: <Zap size={20} /> },
      { name: 'Qualidade 4K HDR', description: 'A mais alta fidelidade visual possível.', icon: <Tv size={20} /> },
      { name: 'Otimizado para NVIDIA', description: 'Extrai o máximo de GPUs dedicadas.', icon: <Cpu size={20} /> },
      { name: 'Comunidade Ativa', description: 'Open source e com atualizações constantes.', icon: <Gem size={20} /> },
    ],
    downloadLink: 'https://moonlight-stream.org/downloads',
  },
];

export function ConnectionGuide() {
  return (
    <section 
      id="guia" 
      className="py-20 sm:py-32"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ecossistema de Conexão
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#8A94A7]">
            Integramos as melhores tecnologias para você acessar sua VM. Escolha a sua preferida.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-md grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-2">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative flex flex-col rounded-2xl bg-slate-900/50 p-8 backdrop-blur-sm 
                         border border-white/10 transition-all duration-300 hover:border-white/20"
            >
              <h3 className="text-3xl font-bold text-white">{tool.name}</h3>
              <p className="mt-2 text-lg text-[#00BFFF]">{tool.punchline}</p>
              
              <div className="my-10 grid grid-cols-2 gap-x-6 gap-y-8">
                {tool.features.map((feature) => (
                  <div key={feature.name} className="flex items-start gap-4">
                    <div className="mt-1 text-cyan-400">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.name}</h4>
                      <p className="mt-1 text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-grow"></div> 

              <a
                href={tool.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center text-sm font-semibold leading-6 rounded-lg
                           text-white py-3 px-8 transition-all duration-300
                           bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                Download {tool.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}