
import React from 'react';
import { 
  Users, 
  Target, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  Search, 
  ArrowRight,
  TrendingUp,
  Layout,
  MessageSquare,
  Globe,
  ExternalLink,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, className }: { children?: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const AboutPage = ({ lang, onNavigate }: { lang: string, onNavigate: (page: string) => void }) => {
  const t: Record<string, any> = {
    id: {
      heroTitle: 'Dibangun dari Pengalaman Industri Nyata, Bukan Sekadar Janji Kosong',
      heroSub: 'Adsup Academy didirikan pada tahun 2023 untuk menjawab masalah yang berkembang di pendidikan pemasaran digital — terlalu banyak pelajar dibimbing oleh mentor tanpa pengalaman lapangan yang nyata.',
      storyTitle: 'Bagaimana Adsup Academy Dimulai',
      storyText: 'Adsup Academy lahir dari rasa frustrasi nyata yang dirasakan oleh banyak calon pemasar digital. Terlalu sering, orang yang ingin belajar digital marketing akhirnya belajar dari mentor yang kurang memiliki pengalaman langsung dalam menjalankan kampanye nyata and mengelola anggaran iklan yang besar.',
      storyHighlight: 'Kami percaya belajar digital marketing harus dipandu oleh praktisi — orang-orang yang telah menghadapi tantangan performa nyata, mengelola ekspektasi klien, and membuat keputusan berisiko tinggi dengan anggaran nyata.',
      storyPoints: [
        'Dibangun oleh praktisi, bukan teoritis',
        'Edukasi berdasarkan kasus nyata, bukan slide usang',
        'Fokus pada skill yang bekerja di pasar saat ini'
      ],
      mentorsTitle: 'Belajar Langsung dari Praktisi Teruji',
      mentor1: {
        name: 'Muhammad Fauzan',
        role: 'Founder — Ads-up Digital Indonesia',
        bio: 'Muhammad Fauzan adalah Founder dari Ads-up Digital Indonesia dengan lebih dari 6 tahun pengalaman praktis dalam pemasaran digital. Sepanjang karirnya, ia telah menangani lebih dari 30 brand di berbagai industri and memberikan lebih dari 300 konsultasi pemasaran digital.',
        highlights: [
          '6+ tahun pengalaman Digital Marketing',
          'Menangani 30+ Brand ternama',
          '300+ Konsultasi pemasaran digital',
          'Fokus kuat pada performa & skalabilitas'
        ]
      },
      mentor2: {
        name: 'Ignasius Ocvin',
        role: 'Co-Founder — Adsup Digital Academy',
        subRole: 'Certified Meta Trainer',
        bio: 'Ignasius Ocvin membawa lebih dari 10 tahun pengalaman dalam industri pemasaran digital. Sebagai Certified Meta Trainer selama lebih dari 5 tahun, ia telah melatih para profesional and bisnis tentang cara menjalankan kampanye iklan yang efektif, bertanggung jawab, and scalable.',
        highlights: [
          '10+ tahun pengalaman Digital Marketing',
          'Certified Meta Trainer (5+ tahun)',
          'Eksper dalam strategi iklan lanjutan',
          'Fondasi kuat dalam Meta Ads best practices'
        ]
      },
      diffTitle: 'Apa yang Membuat Adsup Academy Berbeda',
      diffPoints: [
        { title: 'Mentor Berpengalaman Industri', desc: 'Bukan pengajar teori, tapi praktisi yang masih aktif di industri.', icon: <Users /> },
        { title: 'Data Campaign Aktual', desc: 'Materi berdasarkan data kampanye asli yang sedang berjalan.', icon: <Layout /> },
        { title: 'Tanpa Hype Kosong', desc: 'Kami jujur tentang apa yang berhasil and apa yang tidak.', icon: <ShieldCheck /> },
        { title: 'Feedback Jujur', desc: 'Evaluasi campaign Anda berdasarkan standar industri nyata.', icon: <MessageSquare /> },
        { title: 'Pertumbuhan Jangka Panjang', desc: 'Edukasi dirancang untuk pertumbuhan skill yang berkelanjutan.', icon: <TrendingUp /> }
      ],
      ctaTitle: 'Belajarlah dari Orang yang Benar-benar Melakukan Pekerjaannya',
      ctaSub: 'Jika Anda serius ingin membangun skill pemasaran digital yang nyata, Adsup Academy dibangun khusus untuk Anda.',
      ctaBtn: 'Jelajahi Program Kami'
    },
    en: {
      heroTitle: 'Built From Real Industry Experience, Not Empty Promises',
      heroSub: 'AdsUp Academy was founded in 2023 to answer a growing problem in digital marketing education — too many learners are guided by mentors without real-world experience.',
      storyTitle: 'How AdsUp Academy Started',
      storyText: 'AdsUp Academy was established in 2023, born from a real frustration shared by many aspiring digital marketers. Too often, people who want to learn digital marketing end up learning from mentors who lack hands-on experience in running real campaigns and managing real ad budgets.',
      storyHighlight: 'We believe learning digital marketing should be guided by practitioners — people who have faced real performance challenges, managed real client expectations, and made real decisions with real money on the line.',
      storyPoints: [
        'Built by practitioners, not theorists',
        'Education based on real cases, not recycled slides',
        'Focus on skills that work in today’s market'
      ],
      mentorsTitle: 'Learn Directly From Proven Practitioners',
      mentor1: {
        name: 'Muhammad Fauzan',
        role: 'Founder — Ads-up Digital Indonesia',
        bio: 'Muhammad Fauzan is the Founder of Ads-up Digital Indonesia with over 6 years of hands-on experience in digital marketing. Throughout his career, he has handled more than 30 brands across various industries and delivered over 300 digital marketing consultations.',
        highlights: [
          '6+ years experience in digital marketing',
          'Managed 30+ brands',
          '300+ digital marketing consultations',
          'Strong focus on performance & scalability'
        ]
      },
      mentor2: {
        name: 'Ignasius Ocvin',
        role: 'Co-Founder — AdsUp Digital Academy',
        subRole: 'Certified Meta Trainer',
        bio: 'Ignasius Ocvin brings over 10 years of experience in the digital marketing industry. As a Certified Meta Trainer for more than 5 years, he has trained professionals and businesses on how to run effective, responsible, and scalable advertising campaigns.',
        highlights: [
          '10+ years digital marketing experience',
          'Certified Meta Trainer (5+ years)',
          'Expert in advanced advertising strategy',
          'Strong foundation in Meta Ads best practices'
        ]
      },
      diffTitle: 'What Makes AdsUp Academy Different',
      diffPoints: [
        { title: 'Real Industry Mentors', desc: 'Not theory teachers, but practitioners active in the industry.', icon: <Users /> },
        { title: 'Actual Campaign Data', desc: 'Lessons based on real, live running campaign data.', icon: <Layout /> },
        { title: 'No Empty Hype', desc: 'We are honest about what works and what doesn’t.', icon: <ShieldCheck /> },
        { title: 'Honest Feedback', desc: 'Evaluate your campaigns based on real industry standards.', icon: <MessageSquare /> },
        { title: 'Long-term Growth', desc: 'Education designed for sustainable skill development.', icon: <TrendingUp /> }
      ],
      ctaTitle: 'Learn From People Who Actually Do the Work',
      ctaSub: 'If you’re serious about building real digital marketing skills, AdsUp Academy is built for you.',
      ctaBtn: 'Explore Our Programs'
    }
  };

  const active = t[lang];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-adsup-dark text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-adsup-blue text-xs font-bold uppercase tracking-widest mb-8 border border-white/5">
              <Award size={14} className="fill-current" /> Adsup Digital Academy
            </div>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              {active.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {active.heroSub}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">{active.storyTitle}</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
                <p>{active.storyText}</p>
                <p className="font-bold text-gray-900 border-l-4 border-adsup-blue pl-6 italic">
                  {active.storyHighlight}
                </p>
              </div>
              <div className="grid gap-4">
                {active.storyPoints.map((p: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-gray-900 font-bold">
                    <CheckCircle2 size={24} className="text-adsup-blue shrink-0" /> {p}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-adsup-dark/50 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-3xl font-black">EST. 2023</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Foundation</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-20">{active.mentorsTitle}</h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mentor 1 - Muhammad Fauzan */}
            <ScrollReveal>
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col h-full text-left group hover:-translate-y-2 transition-transform duration-500">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                  <div className="w-40 h-56 rounded-3xl overflow-hidden bg-gray-100 shrink-0 border-4 border-gray-50 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" alt={active.mentor1.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{active.mentor1.name}</h3>
                    <p className="text-adsup-blue font-bold uppercase tracking-widest text-sm mb-4">{active.mentor1.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{active.mentor1.bio}</p>
                  </div>
                </div>
                <div className="grid gap-4 mt-auto pt-8 border-t border-gray-50">
                  {active.mentor1.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-gray-900 font-bold">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-adsup-blue shrink-0">
                        {i === 0 && <Clock size={16} />}
                        {i === 1 && <Briefcase size={16} />}
                        {i === 2 && <Search size={16} />}
                        {i === 3 && <Target size={16} />}
                      </div>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Mentor 2 - Ignasius Ocvin */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col h-full text-left group hover:-translate-y-2 transition-transform duration-500">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                  <div className="w-40 h-56 rounded-3xl overflow-hidden bg-gray-100 shrink-0 border-4 border-gray-50 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" alt={active.mentor2.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{active.mentor2.name}</h3>
                    <p className="text-adsup-blue font-bold uppercase tracking-widest text-sm mb-2">{active.mentor2.role}</p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-adsup-blue text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-100">
                      <Globe size={10} /> {active.mentor2.subRole}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{active.mentor2.bio}</p>
                  </div>
                </div>
                <div className="grid gap-4 mt-auto pt-8 border-t border-gray-50">
                  {active.mentor2.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-gray-900 font-bold">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-adsup-blue shrink-0">
                        {i === 0 && <Clock size={16} />}
                        {i === 1 && <Award size={16} />}
                        {i === 2 && <Target size={16} />}
                        {i === 3 && <ShieldCheck size={16} />}
                      </div>
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-20">{active.diffTitle}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {active.diffPoints.map((p: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-blue-50/30 border border-blue-100 flex flex-col items-center text-center h-full hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-adsup-blue mb-6 shadow-sm">
                    {React.cloneElement(p.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-adsup-blue text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              {active.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              {active.ctaSub}
            </p>
            <button 
              onClick={() => onNavigate('programs')}
              className="bg-adsup-dark text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto"
            >
              {active.ctaBtn} <ArrowRight size={24} />
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
