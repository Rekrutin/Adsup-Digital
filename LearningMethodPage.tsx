
import React from 'react';
import { 
  Monitor, 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  Zap, 
  Video, 
  Users, 
  RefreshCcw,
  ArrowRight,
  Layout,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

// Add className to ScrollReveal props and pass it to motion.div
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

export const LearningMethodPage = ({ lang }: { lang: string }) => {
  const t: Record<string, any> = {
    id: {
      heroTitle: 'Belajar Meta Ads Melalui Praktik Nyata, Bukan Sekadar Teori',
      heroSub: 'Metode belajar kami menggabungkan materi online terstruktur, mentoring langsung, dan diskusi harian — sehingga Anda tidak pernah belajar sendirian.',
      section1Title: 'Pembelajaran Online, Dirancang untuk Kemajuan Nyata',
      section1Desc: 'Semua materi disampaikan secara online, memungkinkan Anda belajar sesuai kecepatan Anda sendiri sambil mengikuti kurikulum terstruktur. Setiap pelajaran dirancang praktis, aplikatif, dan langsung ke dashboard Meta Ads.',
      section1Points: [
        'Kurikulum mingguan terstruktur',
        'Pelajaran langkah-demi-langkah yang jelas',
        'Contoh praktis dari akun iklan asli',
        'Dapat diakses kapan saja, di mana saja'
      ],
      section2Title: 'Sesi Live Mentoring — Dua Kali Setiap Minggu',
      section2Desc: 'Untuk memastikan Anda tidak terjebak sendirian, kami mengadakan sesi mentoring langsung dua kali seminggu. Sesi ini dirancang untuk penjelasan lebih dalam, tanya jawab real-time, review campaign, dan diskusi strategi.',
      section2Points: [
        'Live mentoring 2x per minggu',
        'Tanya jawab real-time',
        'Review & feedback campaign',
        'Diskusi strategi berdasarkan kasus nyata'
      ],
      section3Title: 'Diskusi Harian di Komunitas Discord Privat Kami',
      section3Desc: 'Belajar tidak berhenti setelah sesi berakhir. Setiap hari, siswa dapat bertanya, berbagi kemajuan, and mendiskusikan tantangan di dalam grup Discord privat kami bersama mentor dan rekan lainnya.',
      section3Points: [
        'Diskusi dan dukungan harian',
        'Tanya pertanyaan kapan saja',
        'Belajar dari pengalaman siswa lain',
        'Interaksi langsung dengan mentor'
      ],
      whyTitle: 'Mengapa Metode Belajar Kami Berhasil',
      whyPoints: [
        { title: 'Pembelajaran Berkelanjutan', desc: 'Materi + Mentoring + Diskusi memastikan pemahaman utuh.', icon: <RefreshCcw className="text-adsup-blue" /> },
        { title: 'Problem Solving Lebih Cepat', desc: 'Mendapat feedback harian sehingga Anda tidak stuck lama.', icon: <Zap className="text-adsup-blue" /> },
        { title: 'Kasus Iklan Dunia Nyata', desc: 'Bukan sekadar contoh buku teks, tapi kampanye yang berjalan.', icon: <Layout className="text-adsup-blue" /> },
        { title: 'Akuntabilitas Komunitas', desc: 'Belajar bersama komunitas membuat Anda tetap termotivasi.', icon: <Users className="text-adsup-blue" /> }
      ],
      ctaTitle: 'Pengalaman Belajar yang Membuat Anda Terus Melangkah Maju',
      ctaSub: 'Anda tidak hanya akan menonton video. Anda akan praktik, bertanya, diskusi, dan berkembang — setiap minggu.',
      ctaBtn: 'Gabung Adsup Academy'
    },
    en: {
      heroTitle: 'Learn Meta Ads Through Real Practice, Not Just Theory',
      heroSub: 'Our learning method combines structured online lessons, live mentoring, and daily discussions — so you’re never learning alone.',
      section1Title: 'Online Learning, Designed for Real Progress',
      section1Desc: 'All learning materials are delivered online, allowing you to study at your own pace while following a structured curriculum. Each lesson is designed to be practical, actionable, and directly applicable to real Meta Ads campaigns.',
      section1Points: [
        'Structured weekly curriculum',
        'Clear step-by-step lessons',
        'Practical examples from real ad accounts',
        'Accessible anytime, anywhere'
      ],
      section2Title: 'Live Mentoring Sessions — Twice Every Week',
      section2Desc: 'To ensure you’re not stuck learning alone, we hold live mentoring sessions twice a week. These sessions are designed for deeper explanations, real-time Q&A, campaign reviews, and strategic discussions directly with the mentor.',
      section2Points: [
        'Live mentoring 2x per week',
        'Real-time Q&A',
        'Campaign review & feedback',
        'Strategy discussion based on real cases'
      ],
      section3Title: 'Daily Discussions in Our Private Discord Community',
      section3Desc: 'Learning doesn’t stop after the session ends. Every day, students can ask questions, share progress, and discuss challenges inside our private Discord group. This creates an active learning environment.',
      section3Points: [
        'Daily discussion and support',
        'Ask questions anytime',
        'Learn from other students’ experiences',
        'Direct interaction with mentors and peers'
      ],
      whyTitle: 'Why Our Learning Method Works',
      whyPoints: [
        { title: 'Continuous Learning', desc: 'Lessons + Mentoring + Discussion ensures total mastery.', icon: <RefreshCcw className="text-adsup-blue" /> },
        { title: 'Faster Problem-solving', desc: 'Get daily feedback so you never stay stuck.', icon: <Zap className="text-adsup-blue" /> },
        { title: 'Real-world Ad Cases', desc: 'Not textbook examples, but live running campaigns.', icon: <Layout className="text-adsup-blue" /> },
        { title: 'Community Accountability', desc: 'Learning with a community keeps you moving forward.', icon: <Users className="text-adsup-blue" /> }
      ],
      ctaTitle: 'A Learning Experience That Keeps You Moving Forward',
      ctaSub: 'You won’t just watch videos. You’ll practice, ask, discuss, and improve — every single week.',
      ctaBtn: 'Join AdsUp Academy'
    }
  };

  const active = t[lang];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                {active.heroTitle}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                {active.heroSub}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=m${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar" />
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{lang === 'id' ? 'Aktif Sekarang' : 'Active Now'}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl rotate-3 scale-105"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Method Illustration" 
                  className="relative rounded-3xl shadow-2xl border border-white"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Online Learning Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="bg-gray-100 px-4 py-3 flex gap-1.5 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="aspect-video bg-gray-50 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
                  <Video size={64} className="text-adsup-blue opacity-50" />
                  <div className="absolute bottom-6 left-6 right-6 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-adsup-blue"></div>
                  </div>
                </div>
                <div className="p-6 bg-white flex flex-col gap-4">
                  <div className="h-4 w-1/3 bg-gray-100 rounded"></div>
                  <div className="h-4 w-full bg-gray-100 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-adsup-blue mb-8">
                <Monitor size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">{active.section1Title}</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {active.section1Desc}
              </p>
              <div className="grid gap-4">
                {active.section1Points.map((p: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-gray-900 font-bold">
                    <CheckCircle2 size={24} className="text-adsup-blue shrink-0" /> {p}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live Mentoring Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-adsup-blue mb-8">
                <Calendar size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">{active.section2Title}</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {active.section2Desc}
              </p>
              <div className="grid gap-4">
                {active.section2Points.map((p: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-gray-900 font-bold">
                    <CheckCircle2 size={24} className="text-adsup-blue shrink-0" /> {p}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="order-1 lg:order-2">
              <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 relative">
                <div className="absolute top-0 right-0 p-4">
                  <div className="px-3 py-1 bg-red-100 text-red-500 rounded-full text-xs font-bold animate-pulse">LIVE NOW</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src="https://i.pravatar.cc/300?u=mentor" alt="Mentor" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src="https://i.pravatar.cc/300?u=student1" alt="Student" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-adsup-blue/20 flex items-center justify-center"><MessageSquare size={20} className="text-adsup-blue"/></div>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
               <div className="bg-[#5865F2] p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#5865F2]">
                           <MessageSquare size={24} />
                        </div>
                        <div className="text-white">
                           <p className="font-bold text-lg">#general-discussion</p>
                           <p className="text-xs opacity-70">32 members online</p>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                           <p className="text-white text-sm font-bold mb-1">Mentor Fauzan</p>
                           <p className="text-white/80 text-sm">"Don't forget to check your Pixel tracking today!"</p>
                        </div>
                        <div className="bg-white/20 p-4 rounded-2xl border border-white/20 ml-8 backdrop-blur-sm">
                           <p className="text-white text-sm font-bold mb-1">Student Budi</p>
                           <p className="text-white/80 text-sm">"Got it! My ROAS jumped to 3.5x after the change."</p>
                        </div>
                     </div>
                  </div>
               </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#5865F2] mb-8">
                <Users size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">{active.section3Title}</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {active.section3Desc}
              </p>
              <div className="grid gap-4">
                {active.section3Points.map((p: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-gray-900 font-bold">
                    <CheckCircle2 size={24} className="text-[#5865F2] shrink-0" /> {p}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why This Method Works Section */}
      <section className="py-24 bg-adsup-dark text-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-20">{active.whyTitle}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {active.whyPoints.map((p: any, i: number) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-adsup-blue transition-colors group flex flex-col items-center h-full">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-adsup-blue transition-colors">
                    {/* Use React.ReactElement<any> to fix type errors for size/className props */}
                    {React.cloneElement(p.icon as React.ReactElement<any>, { size: 32, className: 'text-adsup-blue group-hover:text-white' })}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-blue-50 rounded-[60px] p-12 md:p-24 border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                {active.ctaTitle}
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                {active.ctaSub}
              </p>
              <a href="https://wa.me/6285262344328" className="inline-flex items-center gap-2 bg-adsup-blue text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-200">
                {active.ctaBtn} <ArrowRight size={24} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
