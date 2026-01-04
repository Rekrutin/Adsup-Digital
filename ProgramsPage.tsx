
import React, { useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Trophy, 
  Layers, 
  MousePointer2, 
  BarChart3, 
  Cpu,
  Target,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0 }: { children?: React.ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

const ComparisonTable = ({ lang }: { lang: string }) => {
  const content: Record<string, any> = {
    id: {
      headers: ['Fitur', 'Kelas Newbie', 'Kelas Expert'],
      features: [
        { name: 'Tingkat Skill', newbie: 'Pemula / Nol Pengalaman', expert: 'Berpengalaman (6+ Bulan)' },
        { name: 'Fokus Utama', newbie: 'Dasar & Pengaturan', expert: 'Scaling & Strategi Lanjutan' },
        { name: 'Praktik Langsung', newbie: 'Eksekusi Langkah-demi-langkah', expert: 'Implementasi Framework' },
        { name: 'Cocok Untuk', newbie: 'UMKM & Pemula E-commerce', expert: 'Owner Brand & Media Buyer' },
        { name: 'Hasil Utama', newbie: 'Campaign Profit Pertama', expert: 'Scaling Profit di Budget Tinggi' },
      ]
    },
    en: {
      headers: ['Feature', 'Newbie Class', 'Expert Class'],
      features: [
        { name: 'Skill Level', newbie: 'Beginner / Zero Knowledge', expert: 'Experienced (6+ Months)' },
        { name: 'Primary Focus', newbie: 'Fundamentals & Setup', expert: 'Scaling & Advanced Strategy' },
        { name: 'Hands-on Practice', newbie: 'Step-by-step Execution', expert: 'Framework Implementation' },
        { name: 'Ideal For', newbie: 'MSME & E-commerce Newbies', expert: 'Brand Owners & Media Buyers' },
        { name: 'Key Outcome', newbie: 'First Profitable Campaign', expert: 'Profitable Scaling at High Budget' },
      ]
    }
  };

  const active = content[lang];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-6 text-sm font-bold text-gray-400 uppercase tracking-widest">{active.headers[0]}</th>
            <th className="p-6 text-xl font-bold text-adsup-blue">{active.headers[1]}</th>
            <th className="p-6 text-xl font-bold text-adsup-dark">{active.headers[2]}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {active.features.map((f: any, i: number) => (
            <tr key={i} className="hover:bg-blue-50/30 transition-colors">
              <td className="p-6 font-bold text-gray-900">{f.name}</td>
              <td className="p-6 text-gray-600 font-medium">{f.newbie}</td>
              <td className="p-6 text-gray-600 font-medium">{f.expert}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ProgramsPage = ({ lang, onNavigate }: { lang: string, onNavigate: (page: string) => void }) => {
  const newbieRef = useRef<HTMLDivElement>(null);
  const expertRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const texts: Record<string, any> = {
    id: {
      heroTag: 'Edukasi untuk Generasi Advertiser Berikutnya',
      heroTitle: 'Pelajari Meta Ads dengan <span class="text-adsup-blue">Cara yang Benar</span>',
      heroSub: 'Edukasi Meta Ads praktis yang dibangun oleh praktisi, bukan teori. Dari nol hingga mengelola budget miliaran.',
      btnNewbie: 'Mulai dari Pemula',
      btnExpert: 'Kuasai Iklan Lanjutan',
      usp: ['Kurikulum Terstruktur', 'Pendekatan Praktis', 'Berbasis Data'],
      newbie: {
        tag: 'Mulai Dari Nol',
        title: 'Newbie Class',
        desc: 'Program ini dirancang untuk pemula total yang ingin mempelajari Meta Ads Manager dari awal. Selama empat minggu, Anda akan berpindah dari pemahaman dasar hingga meluncurkan campaign yang profitable.',
        highlights: [
          'Tidak butuh pengalaman iklan sebelumnya',
          'Walkthrough Meta Ads Manager langkah-demi-langkah',
          'Dasar-dasar targeting audiens',
          'Setup conversion tracking & pixel',
          'Dasar-dasar scaling untuk e-commerce'
        ],
        outcome: 'Hasil Akhir',
        outcomeText: '"Luncurkan dan kelola campaign Meta Ads Anda sendiri dengan percaya diri total."',
        join: 'Daftar Kelas Newbie'
      },
      expert: {
        tag: 'Untuk Advertiser Berpengalaman',
        title: 'Expert Class',
        desc: 'Dirancang untuk advertiser berpengalaman yang ingin melampaui optimasi tingkat permukaan. Selama empat minggu intensif, Anda akan belajar cara scaling melalui arsitektur campaign lanjutan dan testing.',
        highlights: [
          'Arsitektur campaign tingkat lanjut',
          'Optimasi kreatif & budget skala besar',
          'Framework incrementality testing',
          'Interpretasi ROAS vs Dampak Bisnis Nyata',
          'Penggunaan AI praktis dalam workflow Meta Ads'
        ],
        outcome: 'Hasil Akhir',
        outcomeText: '"Berpikir dan beroperasi seperti performance marketing strategist, bukan sekadar ads operator."',
        join: 'Daftar Kelas Expert'
      },
      compareTitle: 'Bandingkan Program',
      compareSub: 'Pilih jalur yang sesuai dengan pengalaman Anda saat ini dan tujuan masa depan.',
      whyTitle: 'Kenapa Adsup Academy',
      whyItems: [
        { title: 'Dibangun Praktisi', desc: 'Pengalaman nyata dengan budget iklan asli, bukan sekadar teori.' },
        { title: 'Tanpa Basa-basi', desc: 'Framework praktis yang bisa Anda terapkan segera.' },
        { title: 'ROI Cepat', desc: 'Dirancang untuk meningkatkan performa iklan saat Anda belajar.' },
        { title: 'Fokus Pasar Lokal', desc: 'Strategi yang dioptimasi khusus untuk pasar Indonesia.' }
      ],
      finalTitle: 'Pilih Jalur Anda. Bangun Skill Iklan Nyata.',
      finalBtnBeginner: 'Saya Pemula',
      finalBtnPro: 'Saya Berpengalaman'
    },
    en: {
      heroTag: 'Education for the Next Generation of Advertisers',
      heroTitle: 'Learn Meta Ads the <span class="text-adsup-blue">Right Way</span>',
      heroSub: 'Practical Meta Ads education built by practitioners, not theorists. From zero knowledge to scaling seven-figure budgets.',
      btnNewbie: 'Start as a Beginner',
      btnExpert: 'Master Advanced Ads',
      usp: ['Structured Curriculum', 'Practical Approach', 'Data Driven'],
      newbie: {
        tag: 'Start From Zero',
        title: 'Newbie Class',
        desc: 'This program is designed for complete beginners who want to learn Meta Ads Manager from scratch. Over four weeks, you’ll go from understanding fundamentals to launching profitable campaigns.',
        highlights: [
          'No prior ads experience required',
          'Step-by-step Meta Ads Manager walkthrough',
          'Audience targeting fundamentals',
          'Conversion tracking & pixel setup',
          'Scaling basics for e-commerce'
        ],
        outcome: 'The Outcome',
        outcomeText: '"Launch and manage your own profitable Meta Ads campaigns with total confidence."',
        join: 'Join Newbie Class'
      },
      expert: {
        tag: 'For Experienced Advertisers',
        title: 'Expert Class',
        desc: 'Designed for experienced advertisers who want to move beyond surface-level optimization. Over four intensive weeks, you’ll learn scaling via advanced architecture and testing.',
        highlights: [
          'Advanced campaign architecture',
          'Creative & budget optimization at scale',
          'Incrementality testing frameworks',
          'Interpreting ROAS vs True Impact',
          'Practical AI use in Meta Ads workflows'
        ],
        outcome: 'The Outcome',
        outcomeText: '"Think and operate like a performance marketing strategist, not just an ads operator."',
        join: 'Join Expert Class'
      },
      compareTitle: 'Compare the Programs',
      compareSub: 'Choose the path that fits your current experience and future goals.',
      whyTitle: 'Why AdsUp Academy',
      whyItems: [
        { title: 'Built by Practitioners', desc: 'Real experience with real ad spend, not just theory.' },
        { title: 'No Fluff, No Theory', desc: 'Practical frameworks that you can apply immediately.' },
        { title: 'Immediate ROI', desc: 'Designed to improve your campaign performance as you learn.' },
        { title: 'Market Focused', desc: 'Optimized strategies specifically for the Indonesian market.' }
      ],
      finalTitle: 'Choose Your Path. Build Real Advertising Skills.',
      finalBtnBeginner: "I'm a Beginner",
      finalBtnPro: "I'm an Experienced Pro"
    }
  };

  const t = texts[lang];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white text-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-adsup-blue text-xs font-bold uppercase tracking-widest mb-8">
              <Zap size={14} className="fill-current" /> {t.heroTag}
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900 leading-[1.05] mb-8" dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollTo(newbieRef)}
                className="bg-adsup-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-2"
              >
                {t.btnNewbie} <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollTo(expertRef)}
                className="bg-adsup-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-2xl"
              >
                {t.btnExpert} <Trophy size={20} />
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="mt-20 flex justify-center opacity-50 grayscale">
               <div className="flex flex-wrap justify-center gap-12">
                  <div className="flex items-center gap-2 font-bold text-gray-400"><Layers size={24}/> {t.usp[0]}</div>
                  <div className="flex items-center gap-2 font-bold text-gray-400"><MousePointer2 size={24}/> {t.usp[1]}</div>
                  <div className="flex items-center gap-2 font-bold text-gray-400"><BarChart3 size={24}/> {t.usp[2]}</div>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Newbie Card */}
            <div ref={newbieRef} className="scroll-mt-32">
              <ScrollReveal>
                <div className="h-full bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-blue-100/50 flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-adsup-blue">
                      <Rocket size={40} />
                    </div>
                    <span className="px-4 py-2 rounded-full bg-blue-50 text-adsup-blue text-xs font-bold uppercase tracking-widest border border-blue-100">{t.newbie.tag}</span>
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-6">{t.newbie.title}</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {t.newbie.desc}
                  </p>
                  <div className="space-y-4 mb-10 text-left">
                    {t.newbie.highlights.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                        <CheckCircle2 size={20} className="text-adsup-blue shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-8 border-t border-gray-50 text-left">
                    <div className="mb-8">
                      <p className="text-sm font-bold text-gray-400 uppercase mb-2">{t.newbie.outcome}</p>
                      <p className="text-gray-900 font-bold text-lg italic">{t.newbie.outcomeText}</p>
                    </div>
                    <button 
                      onClick={() => onNavigate('register')}
                      className="inline-flex items-center justify-center w-full bg-adsup-blue text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all"
                    >
                      {t.newbie.join}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Expert Card */}
            <div ref={expertRef} className="scroll-mt-32">
              <ScrollReveal delay={0.2}>
                <div className="h-full bg-adsup-dark rounded-[40px] p-8 md:p-12 text-white flex flex-col group hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-adsup-blue">
                      <Cpu size={40} />
                    </div>
                    <span className="px-4 py-2 rounded-full bg-white/10 text-adsup-blue text-xs font-bold uppercase tracking-widest border border-white/10">{t.expert.tag}</span>
                  </div>
                  <h2 className="text-4xl font-black mb-6">{t.expert.title}</h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {t.expert.desc}
                  </p>
                  <div className="space-y-4 mb-10 text-left">
                    {t.expert.highlights.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-gray-300 font-semibold">
                        <CheckCircle2 size={20} className="text-adsup-blue shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-8 border-t border-white/5 text-left">
                    <div className="mb-8">
                      <p className="text-sm font-bold text-gray-500 uppercase mb-2">{t.expert.outcome}</p>
                      <p className="text-white font-bold text-lg italic">{t.expert.outcomeText}</p>
                    </div>
                    <button 
                      onClick={() => onNavigate('register')}
                      className="inline-flex items-center justify-center w-full bg-white text-adsup-dark py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all"
                    >
                      {t.expert.join}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.compareTitle}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.compareSub}</p>
            </div>
            <ComparisonTable lang={lang} />
          </ScrollReveal>
        </div>
      </section>

      {/* Why AdsUp Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-16">{t.whyTitle}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.whyItems.map((item: any, i: number) => (
                <div key={i} className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100 flex flex-col items-center text-center">
                  <div className="mb-6">
                    {i === 0 && <Target className="text-adsup-blue"/>}
                    {i === 1 && <Zap className="text-adsup-blue"/>}
                    {i === 2 && <BarChart3 className="text-adsup-blue"/>}
                    {i === 3 && <Trophy className="text-adsup-blue"/>}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-adsup-dark text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black mb-10">{t.finalTitle}</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => onNavigate('register')}
                className="bg-adsup-blue text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-blue-600 transition-all shadow-xl"
              >
                {t.finalBtnBeginner}
              </button>
              <button 
                onClick={() => onNavigate('register')}
                className="bg-white text-adsup-dark px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-xl"
              >
                {t.finalBtnPro}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
