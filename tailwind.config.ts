// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Adicionamos a nova animação de gradiente aqui
      animation: {
        aurora: "aurora 60s linear infinite",
        "gradient-flow": "gradient-flow 3s linear infinite", // Nova animação
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "200% 50%" },
        },
        // Novos keyframes para o fluxo do gradiente
        "gradient-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      // Adicionamos um tamanho de fundo maior para a animação funcionar
      backgroundSize: {
        '200%': '200% auto',
      },
    },
  },
  plugins: [],
};
export default config;