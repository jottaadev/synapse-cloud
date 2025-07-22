import Link from 'next/link';
import { Twitter, Github, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-2xl font-bold text-white">
            <Link href="/">Synapse Cloud</Link>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageCircle size={20} /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 pt-6 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Synapse Cloud. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}