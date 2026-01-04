
import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from './constants';
import { Home } from './Home';
import { AboutPage } from './AboutPage';
import { PricingPage } from './PricingPage';
import { RegistrationPage } from './RegistrationPage';
import { LoginPage } from './LoginPage';
import { Dashboard } from './Dashboard';

// Mock Logo
const LogoAU = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 75V40C25 28.9543 33.9543 20 45 20C56.0457 20 65 28.9543 65 40V75M65 40V70C65 78.2843 71.7157 85 80 85C88.2843 85 95 78.2843 95 70V40M25 50H50" stroke="#0084FF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Navbar = ({ onNavigate, currentPage, lang, setLang }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentNav = NAV_LINKS(lang);

  const handleNavClick = (href: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      // Delay slightly to allow Home to render before scrolling
      setTimeout(() => {
        const el = document.getElementById(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 outline-none">
            <LogoAU className="w-10 h-10" />
            <div className="flex flex-col text-left">
              <span className="text-xl font-black text-gray-900 uppercase">Adsup</span>
              <span className="text-[10px] font-bold text-adsup-blue uppercase tracking-widest">Academy</span>
            </div>
          </button>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`font-bold text-sm ${currentPage === 'home' ? 'text-adsup-blue' : 'text-gray-600'}`}>Home</button>
            {currentNav.map((link: any) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)} 
                className="text-gray-600 hover:text-adsup-blue font-bold text-sm transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => onNavigate('login')} className="text-gray-900 hover:text-adsup-blue font-bold text-sm flex items-center gap-1"><LogIn size={16}/> Login</button>
            <button onClick={() => onNavigate('pricing')} className="bg-adsup-blue text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-200 hover:scale-105 active:scale-95 transition-all">Daftar Sekarang</button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900"><Menu size={28} /></button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col">
              <button onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }} className="font-bold text-lg text-left">Home</button>
              {currentNav.map((link: any) => (
                <button key={link.name} onClick={() => handleNavClick(link.href)} className="font-bold text-lg text-left">{link.name}</button>
              ))}
              <hr className="border-gray-100" />
              <button onClick={() => { onNavigate('login'); setIsOpen(false); }} className="font-bold text-lg text-left flex items-center gap-2"><LogIn size={20}/> Login</button>
              <button onClick={() => { onNavigate('pricing'); setIsOpen(false); }} className="bg-adsup-blue text-white py-4 rounded-xl font-bold text-lg text-center">Daftar Sekarang</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('id');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [userProgram, setUserProgram] = useState<'newbie' | 'expert'>('newbie');

  const handleSelectPlan = (plan: any) => {
    setSelectedPlan(plan);
    setCurrentPage('register');
  };

  const handleLogin = (program: 'newbie' | 'expert') => {
    setUserProgram(program);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  if (isLoggedIn) return <Dashboard lang={lang} onLogout={() => setIsLoggedIn(false)} enrolledProgram={userProgram} />;

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} lang={lang} setLang={setLang} />
      <main>
        {currentPage === 'home' && <Home lang={lang} onNavigate={setCurrentPage} />}
        {currentPage === 'pricing' && <PricingPage lang={lang} onSelectPlan={handleSelectPlan} />}
        {currentPage === 'register' && <RegistrationPage lang={lang} selectedPlan={selectedPlan} onNavigate={setCurrentPage} />}
        {currentPage === 'login' && <LoginPage lang={lang} onNavigate={setCurrentPage} onLogin={handleLogin} />}
        {currentPage === 'tentang' && <AboutPage lang={lang} onNavigate={setCurrentPage} />}
      </main>
      <footer className="bg-adsup-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3">
              <LogoAU className="w-12 h-12" />
              <div className="text-left">
                <p className="text-2xl font-black uppercase">Adsup</p>
                <p className="text-xs font-bold text-adsup-blue uppercase tracking-widest">Academy</p>
              </div>
           </div>
           <div className="text-gray-400 text-sm font-medium">© 2023 Adsup Academy. All rights reserved.</div>
           <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-bold">LinkedIn</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
