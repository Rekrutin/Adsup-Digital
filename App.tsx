
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  BookOpen, 
  Heart, 
  MessageCircle,
  ArrowRight,
  Target,
  ShieldCheck,
  Star,
  User,
  LogIn,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { NAV_LINKS, CURRICULUM, METHODS, TARGET_AUDIENCE } from './constants';
import { ProgramsPage } from './ProgramsPage';
import { LearningMethodPage } from './LearningMethodPage';
import { AboutPage } from './AboutPage';
import { RegistrationPage } from './RegistrationPage';
import { LoginPage } from './LoginPage';
import { Dashboard } from './Dashboard';

const LogoAU = ({ 
  className = "w-10 h-10", 
  useGradient = true,
  animateOnLoad = false 
}: { 
  className?: string, 
  useGradient?: boolean,
  animateOnLoad?: boolean
}) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {useGradient && (
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#33ACFF" />
          <stop offset="100%" stopColor="#0077FF" />
        </linearGradient>
      </defs>
    )}
    <motion.path 
      initial={animateOnLoad ? { pathLength: 0, opacity: 0 } : {}}
      animate={animateOnLoad ? { pathLength: 1, opacity: 1 } : {}}
      transition={animateOnLoad ? { duration: 1.5, ease: "easeInOut", delay: 0.5 } : {}}
      d="M25 75V40C25 28.9543 33.9543 20 45 20C56.0457 20 65 28.9543 65 40V75M65 40V70C65 78.2843 71.7157 85 80 85C88.2843 85 95 78.2843 95 70V40M25 50H50" 
      stroke={useGradient ? "url(#logoGradient)" : "currentColor"} 
      strokeWidth="14" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const DUMMY_TESTIMONIALS = [
  { name: "Budi Santoso", role: "Owner Kedai Kopi", text: "Meta Ads dari Adsup benar-benar merubah cara saya berjualan. Omzet naik 3x lipat!" },
  { name: "Lestari Putri", role: "Reseller Skincare", text: "Pendampingannya sangat personal. Materi yang sulit jadi terasa sangat mudah." },
  { name: "Dewi Lestari", role: "Freelancer", text: "Akhirnya paham cara baca data iklan. Gak lagi boncos pas pasang Meta Ads." },
  { name: "Rizky Fauzi", role: "UMKM Fashion", text: "Strategi funneling-nya jenius. Customer datang terus lewat Instagram." },
  { name: "Ani Wijaya", role: "Jasa Foto Produk", text: "Dulu bingung mau mulai dari mana, sekarang sudah pede handle client besar." },
  { name: "Hendra Kurnia", role: "Dropshipper", text: "Adsup adalah investasi terbaik saya tahun ini. Praktis dan langsung hasil." },
  { name: "Sari Indah", role: "Owner Florist", text: "Materi copywriting-nya daging semua. Iklan jadi lebih narik dan persuasif." },
  { name: "Fajar Pratama", role: "Bisnis Kuliner", text: "Gak sangka belajar Meta Ads bisa seseru ini. Mentornya sangat kompeten." },
  { name: "Maya Sofia", role: "Personal Brand", text: "Membantu banget buat naikin engagement dan konversi gaya coaching saya." },
  { name: "Anton Hartono", role: "Toko Bangunan", text: "Walaupun gaptek, diajarin pelan-perlan sampai bisa jalanin campaign sendiri." }
];

interface ScrollRevealProps {
  children?: React.ReactNode;
  variant?: "fadeUp" | "zoomIn" | "fade";
  delay?: number;
  className?: string;
  // Added key to satisfy TypeScript when used in maps
  key?: React.Key;
}

const ScrollReveal = ({ children, variant = "fadeUp", delay = 0, className }: ScrollRevealProps) => {
  const variants: Record<string, Variants> = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay } }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay } }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1, delay } }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const TestimonialMarquee = () => {
  return (
    <div className="relative overflow-hidden py-10 select-none">
      <motion.div 
        className="flex"
        animate={{
          x: [0, -332 * DUMMY_TESTIMONIALS.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {[...DUMMY_TESTIMONIALS, ...DUMMY_TESTIMONIALS].map((testimonial, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-[300px] mx-4 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-adsup-blue font-bold text-lg shadow-inner">
                {testimonial.name[0]}
              </div>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.1em]">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed italic line-clamp-3">"{testimonial.text}"</p>
            <div className="mt-6 flex text-yellow-400 gap-0.5">
               {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
            </div>
          </div>
        ))}
      </motion.div>
      
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

const Navbar = ({ onNavigate, currentPage, lang, setLang }: { onNavigate: (page: string) => void, currentPage: string, lang: string, setLang: (l: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    if (href === '#program') {
      onNavigate('programs');
    } else if (href === '#metode') {
      onNavigate('method');
    } else if (href === '#tentang') {
      onNavigate('about');
    } else if (href === '/') {
      onNavigate('home');
    } else {
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  };

  const currentNav = NAV_LINKS(lang);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.button 
            onClick={() => onNavigate('home')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer group outline-none"
          >
            <motion.div 
              className="flex items-center justify-center relative"
              initial={{ rotate: -12, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
            >
               <LogoAU className="w-12 h-12 drop-shadow-sm" animateOnLoad={true} />
               <motion.div 
                className="absolute inset-0 bg-adsup-blue/5 rounded-full blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
               />
            </motion.div>
            <div className="flex flex-col leading-none text-left overflow-hidden">
              <span className="text-xl font-black tracking-tighter text-gray-900 uppercase group-hover:text-adsup-blue transition-colors">
                Adsup
              </span>
              <span className="text-[10px] font-bold text-adsup-blue tracking-[0.2em] uppercase">
                Academy
              </span>
            </div>
          </motion.button>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex bg-gray-100 p-1 rounded-full mr-4">
              <button 
                onClick={() => setLang('id')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'id' ? 'bg-white text-adsup-blue shadow-sm' : 'text-gray-400'}`}
              >
                ID
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white text-adsup-blue shadow-sm' : 'text-gray-400'}`}
              >
                EN
              </button>
            </div>
            
            <button onClick={() => onNavigate('home')} className={`transition-colors font-bold text-sm ${currentPage === 'home' ? 'text-adsup-blue' : 'text-gray-600 hover:text-adsup-blue'}`}>
              {lang === 'id' ? 'Beranda' : 'Home'}
            </button>
            {currentNav.map((link: any) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.href)} 
                className={`transition-colors font-bold text-sm ${
                  (currentPage === 'programs' && link.href === '#program') || 
                  (currentPage === 'method' && link.href === '#metode') ||
                  (currentPage === 'about' && link.href === '#tentang')
                  ? 'text-adsup-blue' 
                  : 'text-gray-600 hover:text-adsup-blue'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            <button 
              onClick={() => onNavigate('login')}
              className={`text-gray-900 hover:text-adsup-blue font-bold text-sm flex items-center gap-1.5 transition-colors ${currentPage === 'login' ? 'text-adsup-blue' : ''}`}
            >
              <LogIn size={16} /> Login
            </button>
            <button 
              onClick={() => onNavigate('register')}
              className="bg-adsup-blue text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-200"
            >
              {lang === 'id' ? 'Daftar Sekarang' : 'Enroll Now'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')} 
              className="text-gray-500 hover:text-adsup-blue"
            >
              <Globe size={24} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b absolute w-full left-0 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="block w-full px-3 py-4 text-center text-base font-bold text-gray-700 border-b border-gray-100">
                {lang === 'id' ? 'Beranda' : 'Home'}
              </button>
              {currentNav.map((link: any) => (
                <button key={link.name} onClick={() => handleLinkClick(link.href)} className="block w-full px-3 py-4 text-center text-base font-bold text-gray-700 border-b border-gray-100">
                  {link.name}
                </button>
              ))}
              <div className="pt-6 grid grid-cols-2 gap-4 px-4">
                <button 
                  onClick={() => { onNavigate('login'); setIsOpen(false); }}
                  className="flex items-center justify-center gap-2 border-2 border-gray-100 text-gray-900 py-3 rounded-xl font-bold text-sm"
                >
                  <LogIn size={18} /> Login
                </button>
                <button 
                  onClick={() => { onNavigate('register'); setIsOpen(false); }}
                  className="bg-adsup-blue text-white py-3 rounded-xl font-bold text-sm text-center"
                >
                  {lang === 'id' ? 'Daftar' : 'Enroll'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HomePage = ({ lang, onNavigate }: { lang: string, onNavigate: (page: string) => void }) => {
  const t: Record<string, any> = {
    id: {
      heroTag: 'Praktikal Digital Marketing Academy',
      heroTitle: 'Ubah Strategi Iklan Menjadi <span class="text-adsup-blue">Hasil Nyata</span>',
      heroSub: 'Adsup Digital Academy membekali pemula dan UMKM dengan skill Meta Ads praktis, terukur, dan berbasis data untuk akselerasi bisnis di ekosistem digital.',
      btnStart: 'Mulai Belajar Sekarang',
      btnProgram: 'Lihat Kurikulum',
      trust: 'Dipercaya oleh <span class="text-adsup-blue">500+ Peserta</span> & Pelaku UMKM',
      aboutTitle: 'Lebih dari Sekadar Teori, Kami Berbagi Strategi yang <span class="text-adsup-blue">Sudah Teruji</span>',
      aboutText: 'Adsup Digital Academy lahir untuk menjembatani celah antara teori pemasaran dan eksekusi lapangan yang kompleks. Kami percaya bahwa setiap orang berhak menguasai teknologi iklan digital untuk mandiri secara ekonomi.',
      stats: [
        { label: 'Tahun Pengalaman', value: '5+' },
        { label: 'UMKM Terbantu', value: '200+' },
        { label: 'Batch Pelatihan', value: '12+' },
        { label: 'Kepuasan Alumni', value: '98%' }
      ],
      founderQuote: '"Pemasaran digital bukan soal siapa yang memiliki budget paling besar, tapi siapa yang paling mampu memahami audiensnya dan menyajikan solusi yang tepat di waktu yang tepat."',
      curriculumTitle: 'Materi Belajar Terstruktur',
      curriculumSub: 'Kurikulum kami disusun secara sistematis agar mudah dipahami bahkan oleh mereka yang baru memulai dari nol.',
      methodTitle: 'Metode Pendampingan <span class="text-adsup-blue">Hands-on</span>',
      methodSub: 'Kami memastikan setiap peserta tidak hanya \'tahu\' teorinya, tapi \'bisa\' melakukan eksekusinya dengan benar.',
      audienceTitle: 'Siapa yang Harus Bergabung?',
      socialTag: 'Adsup Untuk Sesama',
      socialTitle: 'Program Pelatihan Gratis Khusus Korban Bencana Aceh',
      socialDesc: 'Kami percaya pada kekuatan pemberdayaan ekonomi melalui pendidikan digital. Adsup menyediakan slot beasiswa penuh bagi warga terdampak bencana di Aceh untuk membekali mereka dengan skill mandiri di era ekonomi digital.',
      socialBtn: 'Informasi Pendaftaran Program',
      ctaTitle: 'Siap Skalakan Bisnis Anda Melalui Digital?',
      ctaSub: 'Jadilah mitra strategis kami dalam menumbuhkan bisnis Anda di ekosistem digital yang dinamis.',
      ctaBtn: 'Daftar Sekarang',
      partnerText: 'Partner Strategis Anda Untuk Skalakan Bisnis Melalui Digital'
    },
    en: {
      heroTag: 'Practical Digital Marketing Academy',
      heroTitle: 'Turn Ad Strategies into <span class="text-adsup-blue">Real Results</span>',
      heroSub: 'Adsup Digital Academy equips beginners and MSMEs with practical, measurable, and data-driven Meta Ads skills for business acceleration in the digital ecosystem.',
      btnStart: 'Start Learning Now',
      btnProgram: 'View Curriculum',
      trust: 'Trusted by <span class="text-adsup-blue">500+ Participants</span> & MSMEs',
      aboutTitle: 'More Than Just Theory, We Share <span class="text-adsup-blue">Proven Strategies</span>',
      aboutText: 'Adsup Digital Academy was born to bridge the gap between marketing theory and complex field execution. We believe everyone deserves to master digital ad technology to achieve economic independence.',
      stats: [
        { label: 'Years Experience', value: '5+' },
        { label: 'MSMEs Assisted', value: '200+' },
        { label: 'Training Batches', value: '12+' },
        { label: 'Alumni Satisfaction', value: '98%' }
      ],
      founderQuote: '"Digital marketing isn\'t about who has the biggest budget, but who best understands their audience and provides the right solution at the right time."',
      curriculumTitle: 'Structured Learning Material',
      curriculumSub: 'Our curriculum is systematically arranged to be easily understood even by those starting from scratch.',
      methodTitle: '<span class="text-adsup-blue">Hands-on</span> Mentoring Method',
      methodSub: 'We ensure every participant not only \'knows\' the theory, but \'can\' perform the execution correctly.',
      audienceTitle: 'Who Should Join?',
      socialTag: 'Adsup For Others',
      socialTitle: 'Free Training Program for Aceh Disaster Victims',
      socialDesc: 'Kami percaya pada kekuatan pemberdayaan ekonomi melalui pendidikan digital. Adsup menyediakan slot beasiswa penuh bagi warga terdampak bencana di Aceh untuk membekali mereka dengan skill mandiri di era ekonomi digital.',
      socialBtn: 'Program Registration Info',
      ctaTitle: 'Ready to Scale Your Business Digitally?',
      ctaSub: 'Become our strategic partner in growing your business in the dynamic digital ecosystem.',
      ctaBtn: 'Enroll Now',
      partnerText: 'Your Strategic Partner To Scale Your Business Through Digital'
    }
  }[lang];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl aspect-square bg-blue-50/50 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-adsup-blue text-xs font-bold uppercase tracking-widest mb-8">
              <TrendingUp size={14} /> {t.heroTag}
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8" dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button 
                onClick={() => onNavigate('register')}
                className="w-full sm:w-auto bg-adsup-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-blue-200"
              >
                {t.btnStart} <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('programs')}
                className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-200 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                {t.btnProgram}
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="fade" delay={0.5}>
            <div className="mt-20 flex flex-col items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=v${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="Student" />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest" dangerouslySetInnerHTML={{ __html: t.trust }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About */}
      <section id="tentang" className="py-24 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t.aboutTitle }} />
              <div className="w-20 h-1.5 bg-adsup-blue mx-auto mb-10 rounded-full"></div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                <p>{t.aboutText}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="zoomIn">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {t.stats.map((stat: any, idx: number) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <p className="text-3xl font-extrabold text-adsup-blue mb-1">{stat.value}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <TestimonialMarquee />

          <ScrollReveal variant="fadeUp">
            <div className="mt-20 bg-adsup-dark p-10 md:p-16 rounded-[40px] shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-white/5 opacity-10">
                <LogoAU className="w-64 h-64" useGradient={false} />
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-44 h-44 md:w-64 md:h-64 rounded-full border-4 border-adsup-blue overflow-hidden shadow-2xl mb-6 bg-gray-900 flex items-center justify-center relative">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
                      alt="Muhammad Fauzan" 
                      className="w-full h-full object-cover object-top scale-110" 
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-white mb-1">Muhammad Fauzan</h4>
                    <p className="text-adsup-blue text-lg font-semibold tracking-wide uppercase">Founder & CEO, Adsup Digital Academy</p>
                  </div>
                </div>
                <div className="max-w-4xl">
                  <blockquote className="text-white text-xl md:text-3xl italic leading-relaxed font-light mb-10 max-w-3xl mx-auto">
                    {t.founderQuote}
                  </blockquote>
                </div>
                <div className="flex flex-wrap gap-10 justify-center grayscale opacity-50 contrast-125 pt-4">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Logo_%282019%29.png" className="h-8 md:h-10" alt="Meta" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" className="h-8 md:h-10" alt="Instagram" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Google_Ads_logo.svg" className="h-8 md:h-10" alt="Google Ads" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.curriculumTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.curriculumSub}</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CURRICULUM(lang).map((item: any, index: number) => (
              <ScrollReveal key={index} variant="zoomIn">
                <div className="group p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-50 text-adsup-blue rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-adsup-blue group-hover:text-white transition-colors duration-500">
                    {index === 0 && <Target size={32} />}
                    {index === 1 && <TrendingUp size={32} />}
                    {index === 2 && <MessageCircle size={32} />}
                    {index === 3 && <ShieldCheck size={32} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="metode" className="py-24 bg-adsup-dark text-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t.methodTitle }} />
            <p className="text-gray-400 text-lg mb-20 max-w-2xl mx-auto">{t.methodSub}</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {METHODS(lang).map((method: any, index: number) => (
              <ScrollReveal key={index} variant="fadeUp">
                <div className="flex flex-col items-center p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-adsup-blue transition-colors group h-full">
                  <div className="w-16 h-16 rounded-full border-2 border-adsup-blue flex items-center justify-center font-bold text-2xl text-adsup-blue mb-8 group-hover:bg-adsup-blue group-hover:text-white transition-all">
                    0{index + 1}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{method.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{method.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade">
            <div className="mt-24 pt-24 border-t border-white/10 text-center">
              <h4 className="text-xl font-bold mb-10 flex items-center justify-center gap-3">
                 <Users className="text-adsup-blue" /> {t.audienceTitle}
              </h4>
              <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                 {TARGET_AUDIENCE(lang).map((item: any, idx: number) => (
                   <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                      <p className="font-bold text-lg mb-2 text-adsup-blue">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                   </div>
                 ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social */}
      <section id="sosial" className="py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="zoomIn">
            <div className="bg-blue-50 rounded-[50px] p-10 md:p-20 relative overflow-hidden text-center">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-10 mx-auto text-red-500 animate-pulse">
                  <Heart size={48} fill="currentColor" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 italic">{t.socialTag}</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-adsup-blue mb-8">{t.socialTitle}</h3>
                <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                  {t.socialDesc}
                </p>
                <button 
                  onClick={() => onNavigate('register')}
                  className="inline-flex items-center gap-2 bg-white text-adsup-blue px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all shadow-md"
                >
                  {t.socialBtn} <ArrowRight size={24} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-adsup-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center -rotate-12 scale-150">
           <LogoAU className="w-full h-full" useGradient={false} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">{t.ctaTitle}</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 font-medium">
              {t.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('register')}
                className="w-full sm:w-auto bg-adsup-dark text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-2xl"
              >
                {t.ctaBtn}
              </motion.button>
            </div>
            <p className="mt-10 text-sm font-bold uppercase tracking-widest text-blue-100 italic">
              {t.partnerText}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

const Footer = ({ lang, onNavigate }: { lang: string, onNavigate: (page: string) => void }) => {
  const t: Record<string, any> = {
    id: {
      tag: 'Platform pelatihan digital marketing strategis yang fokus pada pertumbuhan bisnis yang terukur dan berkelanjutan.',
      navTitle: 'Navigasi',
      progTitle: 'Program',
      contactTitle: 'Hubungi Kami',
      disclaimer: 'Pemberitahuan: Kami adalah institusi pendidikan independen. Meta, Facebook, dan Instagram adalah merek dagang dari Meta Platforms, Inc. Kami tidak berafiliasi secara langsung, disponsori, atau didukung oleh Meta. Keberhasilan setiap peserta bergantung sepenuhnya pada dedikasi dan implementasi strategi masing-masing.'
    },
    en: {
      tag: 'Strategic digital marketing training platform focusing on measurable and sustainable business growth.',
      navTitle: 'Navigation',
      progTitle: 'Programs',
      contactTitle: 'Contact Us',
      disclaimer: 'Notice: We are an independent educational institution. Meta, Facebook, and Instagram are trademarks of Meta Platforms, Inc. We are not directly affiliated, sponsored, or endorsed by Meta. Every participant\'s success depends entirely on their individual dedication and implementation.'
    }
  }[lang];

  return (
    <footer className="bg-adsup-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-adsup-blue border border-white/10">
              <LogoAU className="w-10 h-10" />
            </div>
            <div className="text-left">
              <span className="block text-2xl font-bold tracking-tight text-white">Adsup Academy</span>
              <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">PT Ads-up Digital Indonesia</span>
            </div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            {t.tag}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 text-center">
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-8 text-adsup-blue">{t.navTitle}</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">Programs</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">About</button></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-8 text-adsup-blue">{t.progTitle}</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">Meta Ads Mastery</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">Digital Funnel Design</button></li>
              <li><button onClick={() => onNavigate('programs')} className="hover:text-white transition-colors">Copywriting for Sales</button></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-8 text-adsup-blue">{t.contactTitle}</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>+62 852 6234 4328</li>
              <li>fauzan@adsup.id</li>
              <li>www.adsup.id</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-8 text-adsup-blue">Social Media</h4>
            <div className="flex justify-center gap-4">
               {['Instagram', 'Facebook', 'LinkedIn'].map(s => (
                 <div key={s} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-adsup-blue transition-all cursor-pointer border border-white/10">
                   <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col items-center gap-6 text-center">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} PT Ads-up Digital Indonesia. {lang === 'id' ? 'Seluruh hak cipta dilindungi.' : 'All rights reserved.'}
          </p>
          <div className="bg-white/5 p-6 rounded-2xl max-w-3xl border border-white/10">
            <p className="text-gray-600 text-[11px] leading-relaxed text-center italic">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [lang, setLang] = useState('id');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProgram, setUserProgram] = useState<'newbie' | 'expert'>('newbie');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleLogin = (program: 'newbie' | 'expert') => {
    setUserProgram(program);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  // If logged in, prioritize the Dashboard view
  if (isLoggedIn) {
    return (
      <Dashboard 
        lang={lang} 
        onLogout={handleLogout} 
        enrolledProgram={userProgram} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-adsup-blue overflow-x-hidden">
      <Navbar 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        lang={lang} 
        setLang={setLang} 
      />
      <main>
        {currentPage === 'home' && <HomePage lang={lang} onNavigate={setCurrentPage} />}
        {currentPage === 'programs' && <ProgramsPage lang={lang} onNavigate={setCurrentPage} />}
        {currentPage === 'method' && <LearningMethodPage lang={lang} />}
        {currentPage === 'about' && <AboutPage lang={lang} onNavigate={setCurrentPage} />}
        {currentPage === 'register' && <RegistrationPage lang={lang} onNavigate={setCurrentPage} />}
        {currentPage === 'login' && <LoginPage lang={lang} onNavigate={setCurrentPage} onLogin={handleLogin} />}
      </main>
      <Footer lang={lang} onNavigate={setCurrentPage} />
    </div>
  );
}
