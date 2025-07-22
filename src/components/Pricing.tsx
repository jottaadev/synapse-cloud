// src/components/Pricing.tsx

"use client";

import { useState, type ReactElement } from 'react';
import { Check, Gamepad2, Rocket, Zap } from 'lucide-react';
type Plan = {
  name: string;
  specs: string;
  priceMonthly: number;
  priceBiWeekly: number;
  features: string[];
  isPopular: boolean;
  recommendation: string;
  icon: ReactElement;
};

const plans: Plan[] = [
  {
    name: 'Pro',
    specs: '4 vCPUs',
    priceBiWeekly: 70.00,
    priceMonthly: 99.90,
    features: [
      'CPU: AMD EPYC 7V12 @ 2.44GHz',
      'RAM: 28 GB',
      'Armazenamento: 255 GB SSD',
      'GPU: NVIDIA Tesla T4',
    ],
    isPopular: false,
    recommendation: 'Ideal para jogos populares',
    icon: <Gamepad2 className="w-4 h-4 text-cyan-400" />,
  },
  {
    name: 'Ultra',
    specs: '8 vCPUs',
    priceBiWeekly: 90.00,
    priceMonthly: 124.99,
    features: [
      'CPU: AMD EPYC 7V12 @ 2.44GHz',
      'RAM: 56 GB',
      'Armazenamento: 255 GB SSD',
      'GPU: NVIDIA Tesla T4',
    ],
    isPopular: true,
    recommendation: 'Streaming e jogos em alta qualidade',
    icon: <Rocket className="w-4 h-4 text-cyan-400" />,
  },
  {
    name: 'Elite',
    specs: '16 vCPUs',
    priceBiWeekly: 99.90,
    priceMonthly: 169.90,
    features: [
      'CPU: AMD EPYC 7V12 @ 2.44GHz',
      'RAM: 110 GB',
      'Armazenamento: 255 GB SSD',
      'GPU: NVIDIA Tesla T4',
    ],
    isPopular: false,
    recommendation: 'Performance extrema para 4K e Ray Tracing',
    icon: <Zap className="w-4 h-4 text-cyan-400" />,
  },
];

type BillingCycle = 'bi-weekly' | 'monthly';

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <section 
      id="planos" 
      className="py-20 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Planos Flexíveis. Performance Pura.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Quanto mais poder, mais imersão. Escolha a sua máquina ideal.
          </p>
        </div>

        <div className="mt-16 flex justify-center items-center gap-2 rounded-full bg-slate-900/50 p-1 border border-white/10 w-fit mx-auto">
          <button 
            onClick={() => setBillingCycle('bi-weekly')} 
            className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${billingCycle === 'bi-weekly' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Quinzenal
          </button>
          <button 
            onClick={() => setBillingCycle('monthly')} 
            className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${billingCycle === 'monthly' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Mensal
          </button>
        </div>

        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative flex flex-col rounded-2xl p-8 bg-slate-900/60 backdrop-blur-sm 
                border transition-all duration-300 group
                ${plan.isPopular ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10' : 'border-white/10'}
              `}
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true"></div>
              
              <div className="relative z-10">
                {plan.isPopular && (
                  <p className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-full tracking-wider uppercase">
                    Mais Popular
                  </p>
                )}
                
                <div className="flex items-baseline gap-3">
                    <h3 className="text-3xl font-bold text-white">{plan.name}</h3>
                    <p className="text-sm text-gray-400">{plan.specs}</p>
                </div>

                <div className="flex items-center gap-2 mt-3 h-5">
                  {plan.icon}
                  <p className="text-xs font-semibold text-cyan-400">{plan.recommendation}</p>
                </div>

                <p className="mt-6 text-5xl font-bold tracking-tight text-white">
                  R$ {(billingCycle === 'monthly' ? plan.priceMonthly : plan.priceBiWeekly).toFixed(2).replace('.', ',')}
                  <span className="text-base font-medium text-gray-400">/{billingCycle === 'monthly' ? 'mês' : 'quinzena'}</span>
                </p>

                <div className="my-8 h-px w-full bg-white/10"></div>
                
                <ul role="list" className="space-y-4 text-sm leading-6 text-gray-300 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-cyan-400" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#"
                  className={`
                    mt-10 block w-full text-center text-sm font-semibold leading-6 rounded-lg py-3 px-8 transition-all duration-300
                    bg-white/5 text-white hover:bg-white/20
                    group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 group-hover:text-white
                  `}
                >
                  Contratar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}