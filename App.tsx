import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import AIPlanner from './components/AIPlanner';
import CTA from './components/CTA';
import { Icons } from './components/Icons';

const App: React.FC = () => {
  
  const scrollToPlanner = () => {
    const element = document.getElementById('planner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check for API key on mount to warn developer if missing
  useEffect(() => {
    if (!process.env.API_KEY) {
      console.warn("WARNING: API_KEY is missing. The AI Planner feature will not work.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icons.Sparkles className="text-red-600 w-6 h-6" />
            <span className="text-xl font-bold font-serif text-gray-800">Natal Lucrativo</span>
          </div>
          <button 
            onClick={scrollToPlanner}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Testar IA
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        <Hero onStart={scrollToPlanner} />
        <Testimonials />
        <Features />
        <AIPlanner />
        <CTA />
      </main>

      <footer className="bg-gray-950 text-gray-500 py-8 border-t border-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Natal Lucrativo na Prática. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;