
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Target, 
  Rocket, 
  CheckCircle2, 
  Monitor, 
  Calendar, 
  Users, 
  MessageSquare, 
  PlayCircle,
  Briefcase,
  Clock,
  Award,
  Globe,
  Layout,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

const ScrollReveal = ({ children, delay = 0 }: { children?: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export const Home = ({ lang, onNavigate }: { lang: string, onNavigate: (page: string) => void }) => {
  const t: Record<string, any> = {
    id: {
      heroTitle: 'Ubah Strategi Iklan Jadi <span class="text-adsup-blue">Profit Nyata</span>',
      heroSub: 'Adsup Academy membekali UMKM dengan skill Meta Ads praktis yang didampingi mentor berpengalaman. Belajar dari praktisi, bukan teori.',
      ctaMain: 'Mulai Belajar Sekarang',
      programTitle: 'Pilih Jalur Belajar Anda',
      newbie: 'Kelas Newbie',
      expert: 'Kelas Expert',
      methodTitle: 'Cara Kami Melatih Anda',
      methodSub: 'Gabungan kurikulum terstruktur, mentoring live, dan support komunitas 24 jam.',
      aboutTitle: 'Belajar Langsung dari Praktisi Teruji',
      aboutSub: 'Adsup Academy didirikan oleh praktisi yang telah menghadapi tantangan performa nyata, mengelola anggaran iklan besar, dan membangun brand dari nol.',
      mentor1: {
        name: 'Muhammad Fauzan',
        role: 'Founder — Ads-up Digital Indonesia',
        bio: 'Fauzan memiliki 6+ tahun pengalaman menangani 30+ brand dan memberikan 300+ konsultasi digital marketing.',
        highlights: ['6+ Tahun Pengalaman', '30+ Brand Handle', '300+ Konsultasi']
      },
      mentor2: {
        name: 'Ignasius Ocvin',
        role: 'Co-Founder — Adsup Digital Academy',
        subRole: 'Certified Meta Trainer',
        bio: 'Ocvin adalah Certified Meta Trainer dengan 10+ tahun pengalaman melatih bisnis untuk iklan yang scalable.',
        highlights: ['10+ Tahun Pengalaman', 'Certified Meta Trainer', 'Ads Strategy Expert']
      }
    },
    en: {
      heroTitle: 'Turn Ad Strategies Into <span class="text-adsup-blue">Real Profit</span>',
      heroSub: 'AdsUp Academy equips MSMEs with practical Meta Ads skills mentored by experts. Learn from practitioners, not theorists.',
      ctaMain: 'Start Learning Now',
      programTitle: 'Choose Your Learning Path',
      newbie: 'Newbie Class',
      expert: 'Expert Class',
      methodTitle: 'How We Train You',
      methodSub: 'A mix of structured curriculum, live mentoring, and 24/7 community support.',
      aboutTitle: 'Learn Directly From Proven Practitioners',
      aboutSub: 'AdsUp Academy was founded by practitioners who have faced real performance challenges and managed multi-million budgets.',
      mentor1: {
        name: 'Muhammad Fauzan',
        role: 'Founder — Ads-up Digital Indonesia',
        bio: 'Fauzan has 6+ years experience handling 30+ brands and delivering 300+ digital marketing consultations.',
        highlights: ['6+ Years Experience', '30+ Brands Managed', '300+ Consultations']
      },
      mentor2: {
        name: 'Ignasius Ocvin',
        role: 'Co-Founder — AdsUp Digital Academy',
        subRole: 'Certified Meta Trainer',
        bio: 'Ocvin is a Certified Meta Trainer with 10+ years experience training businesses for scalable advertising.',
        highlights: ['10+ Years Experience', 'Certified Meta Trainer', 'Ads Strategy Expert']
      }
    }
  }[lang];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-48 pb-32 md:pt-64 md:pb-48 text-center px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-100/30 blur-[120px] rounded-full -z-10"></div>
        <ScrollReveal>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight" dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium">
            {t.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => onNavigate('pricing')} className="bg-adsup-blue text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
              {t.ctaMain} <ArrowRight size={24} />
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Program Section */}
      <section id="program" className="py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">{t.programTitle}</h2>
              <div className="w-24 h-2 bg-adsup-blue mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-gray-100 group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-blue-50 text-adsup-blue rounded-2xl flex items-center justify-center mb-8">
                  <Rocket size={32} />
                </div>
                <h3 className="text-3xl font-black mb-4">{t.newbie}</h3>
                <p className="text-gray-500 mb-8 font-medium">Dari nol pengalaman sampai mahir menjalankan campaign Meta Ads yang profitable.</p>
                <ul className="space-y-4 mb-10">
                   {['Struktur Akun & Business Manager', 'Strategi Targeting Audiens', 'Copywriting Dasar', 'Setup Pixel & API'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                       <CheckCircle2 size={20} className="text-green-500" /> {item}
                     </li>
                   ))}
                </ul>
                <button onClick={() => onNavigate('pricing')} className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-black transition-all">Lihat Detail Paket</button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-adsup-dark p-8 md:p-12 rounded-[40px] shadow-xl text-white group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-white/10 text-adsup-blue rounded-2xl flex items-center justify-center mb-8">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-black mb-4">{t.expert}</h3>
                <p className="text-gray-400 mb-8 font-medium">Untuk advertiser yang ingin scaling budget ke miliaran rupiah per bulan secara efisien.</p>
                <ul className="space-y-4 mb-10">
                   {['Scaling Architecture Lanjutan', 'Creative Testing Framework', 'Data Analytics (ROI/ROAS)', 'CAPI & Server Side Tracking'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 font-bold text-gray-200">
                       <CheckCircle2 size={20} className="text-adsup-blue" /> {item}
                     </li>
                   ))}
                </ul>
                <button onClick={() => onNavigate('pricing')} className="w-full py-4 rounded-xl bg-adsup-blue text-white font-bold hover:bg-blue-600 transition-all">Lihat Detail Paket</button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metode" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <div className="w-16 h-1 bg-adsup-blue mb-8"></div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                {t.methodTitle}
              </h2>
              <p className="text-xl text-gray-500 mb-12 font-medium">
                {t.methodSub}
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: <Monitor />, title: 'Materi Online Video', desc: 'Akses selamanya ke modul video langkah demi langkah.' },
                  { icon: <Calendar />, title: 'Live Mentoring', desc: 'Sesi Zoom 2x seminggu untuk review iklan & tanya jawab.' },
                  { icon: <Users />, title: 'Komunitas Discord', desc: 'Grup privat diskusi dengan mentor dan sesama advertiser.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-adsup-blue flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-[60px] blur-2xl opacity-50 -rotate-3"></div>
                <div className="relative bg-white p-4 rounded-[40px] shadow-2xl border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" className="rounded-[32px] w-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" alt="Learning" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-adsup-blue shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                      <PlayCircle size={40} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mentors Section (Tentang) */}
      <section id="tentang" className="py-32 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">{t.aboutTitle}</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">{t.aboutSub}</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Founder */}
            <ScrollReveal>
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 group hover:-translate-y-2 transition-all">
                <div className="w-full md:w-48 h-64 md:h-auto rounded-3xl overflow-hidden bg-gray-100 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
                    alt={t.mentor1.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-black text-gray-900 mb-1">{t.mentor1.name}</h3>
                  <p className="text-adsup-blue font-bold uppercase tracking-widest text-xs mb-4">{t.mentor1.role}</p>
                  <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">{t.mentor1.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.mentor1.highlights.map((h: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-adsup-blue text-[10px] font-black uppercase tracking-wider rounded-lg border border-blue-100">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Co-Founder */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 group hover:-translate-y-2 transition-all">
                <div className="w-full md:w-48 h-64 md:h-auto rounded-3xl overflow-hidden bg-gray-100 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" 
                    alt={t.mentor2.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-black text-gray-900">{t.mentor2.name}</h3>
                    <span className="px-2 py-0.5 bg-adsup-blue text-white text-[8px] font-black uppercase rounded flex items-center gap-1"><Globe size={8}/> Meta Certified</span>
                  </div>
                  <p className="text-adsup-blue font-bold uppercase tracking-widest text-xs mb-4">{t.mentor2.role}</p>
                  <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed">{t.mentor2.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.mentor2.highlights.map((h: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-adsup-blue text-[10px] font-black uppercase tracking-wider rounded-lg border border-blue-100">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-adsup-blue">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Siap Untuk Meledakkan Sales Bisnis Anda?</h2>
            <p className="text-xl mb-12 opacity-90 font-medium">Jangan biarkan budget iklan Anda terbuang sia-sia tanpa strategi yang tepat.</p>
            <button onClick={() => onNavigate('pricing')} className="bg-white text-adsup-blue px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-blue-900/20 hover:bg-gray-50 transition-all">
              Daftar Sekarang Juga
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
