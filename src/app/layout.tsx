import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Synapse - Máquinas Virtuais de Alta Performance",
  description: "Potencialize seus projetos e games com a latência mais baixa e o poder computacional que você precisa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.className} bg-black text-gray-300`}>
        <ParticlesBackground />
        <CursorSpotlight />
        
        <Navbar />
      
        <main>
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
