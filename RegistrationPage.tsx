
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Zap, 
  Clock,
  MessageSquare,
  Lock,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, className }: { children?: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const RegistrationPage = ({ lang, onNavigate }: { lang: string, onNavigate: (page: string) => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'newbie',
    business: ''
  });

  const t: Record<string, any> = {
    id: {
      title: 'Formulir Pendaftaran Siswa',
      sub: 'Lengkapi data Anda untuk memulai perjalanan menjadi advertiser handal di Adsup Academy.',
      formName: 'Nama Lengkap',
      formEmail: 'Alamat Email',
      formPhone: 'Nomor WhatsApp',
      formProgram: 'Pilih Program',
      formBusiness: 'Kategori Bisnis / Minat',
      formSubmit: 'Kirim Pendaftaran & Hubungi Mentor',
      successTitle: 'Pendaftaran Berhasil Terkirim!',
      successSub: 'Mentor kami akan menghubungi Anda via WhatsApp dalam 1x24 jam untuk aktivasi akun dan jadwal onboarding.',
      successBtn: 'Kembali ke Beranda',
      benefitsTitle: 'Apa yang Anda Dapatkan Setelah Daftar?',
      benefits: [
        { title: 'Akses Kurikulum Lengkap', desc: 'Materi video terstruktur dari dasar hingga mahir.', icon: <Zap size={20} /> },
        { title: 'Komunitas Discord Privat', desc: 'Diskusi harian bersama mentor dan ratusan siswa aktif.', icon: <Users size={20} /> },
        { title: '2x Live Mentoring Mingguan', desc: 'Sesi tanya jawab langsung dan review campaign real-time.', icon: <Clock size={20} /> }
      ],
      trustNotice: 'Data Anda aman dan hanya digunakan untuk keperluan edukasi Adsup Academy.'
    },
    en: {
      title: 'Student Enrollment Form',
      sub: 'Complete your details to start your journey as a pro advertiser with AdsUp Academy.',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formPhone: 'WhatsApp Number',
      formProgram: 'Select Program',
      formBusiness: 'Business Category / Interest',
      formSubmit: 'Submit & Contact Mentor',
      successTitle: 'Enrollment Submitted Successfully!',
      successSub: 'Our mentor will contact you via WhatsApp within 24 hours for account activation and onboarding schedule.',
      successBtn: 'Back to Home',
      benefitsTitle: 'What Happens After Enrollment?',
      benefits: [
        { title: 'Full Curriculum Access', desc: 'Structured video lessons from basics to advanced levels.', icon: <Zap size={20} /> },
        { title: 'Private Discord Community', desc: 'Daily discussions with mentors and hundreds of active students.', icon: <Users size={20} /> },
        { title: '2x Weekly Live Mentoring', desc: 'Real-time Q&A sessions and campaign reviews.', icon: <Clock size={20} /> }
      ],
      trustNotice: 'Your data is secure and used exclusively for AdsUp Academy educational purposes.'
    }
  };

  const active = t[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, we would send this to a backend or redirect to WA with the data
    const message = `Halo Adsup Academy! Saya ingin daftar:%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0AProgram: ${formData.program}%0ABisnis: ${formData.business}`;
    setTimeout(() => {
        window.open(`https://wa.me/6285262344328?text=${message}`, '_blank');
    }, 2000);
  };

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-12 gap-12"
            >
              {/* Left Side: Form */}
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{active.title}</h1>
                    <p className="text-gray-500 mb-10 leading-relaxed">{active.sub}</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{active.formName}</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-adsup-blue focus:ring-2 focus:ring-adsup-blue/20 outline-none transition-all"
                            placeholder="Ex: John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{active.formEmail}</label>
                          <input 
                            required
                            type="email" 
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-adsup-blue focus:ring-2 focus:ring-adsup-blue/20 outline-none transition-all"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{active.formPhone}</label>
                          <input 
                            required
                            type="tel" 
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-adsup-blue focus:ring-2 focus:ring-adsup-blue/20 outline-none transition-all"
                            placeholder="0812..."
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{active.formProgram}</label>
                          <select 
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-adsup-blue focus:ring-2 focus:ring-adsup-blue/20 outline-none transition-all bg-white"
                            value={formData.program}
                            onChange={(e) => setFormData({...formData, program: e.target.value})}
                          >
                            <option value="newbie">Newbie Class - {lang === 'id' ? 'Pemula' : 'Beginner'}</option>
                            <option value="expert">Expert Class - {lang === 'id' ? 'Lanjutan' : 'Advanced'}</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{active.formBusiness}</label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-adsup-blue focus:ring-2 focus:ring-adsup-blue/20 outline-none transition-all"
                          placeholder={lang === 'id' ? 'Contoh: Fashion Muslim, Kuliner, atau Freelancer' : 'e.g., Fashion, Culinary, or Freelancer'}
                          value={formData.business}
                          onChange={(e) => setFormData({...formData, business: e.target.value})}
                        />
                      </div>

                      <div className="pt-4">
                        <button 
                          type="submit"
                          className="w-full bg-adsup-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2"
                        >
                          {active.formSubmit} <ArrowRight size={20} />
                        </button>
                      </div>

                      <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
                        <ShieldCheck size={14} /> {active.trustNotice}
                      </div>
                    </form>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Side: Benefits */}
              <div className="lg:col-span-5">
                <ScrollReveal delay={0.2}>
                  <div className="sticky top-32 space-y-8">
                    <div className="bg-adsup-dark rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 text-white/5 opacity-10">
                        <ShieldCheck size={120} />
                      </div>
                      <h3 className="text-2xl font-bold mb-8 relative z-10">{active.benefitsTitle}</h3>
                      <div className="space-y-8 relative z-10">
                        {active.benefits.map((b: any, i: number) => (
                          <div key={i} className="flex gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-adsup-blue shrink-0">
                              {b.icon}
                            </div>
                            <div>
                              <p className="font-bold text-lg mb-1">{b.title}</p>
                              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-adsup-blue">
                          <MessageSquare size={20} />
                        </div>
                        <p className="font-bold text-gray-900">{lang === 'id' ? 'Butuh bantuan pendaftaran?' : 'Need help with enrollment?'}</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {lang === 'id' 
                          ? 'Tim kami siap membantu menjawab pertanyaan Anda seputar kurikulum dan jadwal belajar.'
                          : 'Our team is ready to help answer your questions about the curriculum and study schedule.'}
                      </p>
                      <a href="https://wa.me/6285262344328" className="text-adsup-blue font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                        Chat Admin WhatsApp <ChevronRight size={16} />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto py-20 text-center"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-10">
                <CheckCircle2 size={48} />
              </div>
              <h1 className="text-4xl font-black text-gray-900 mb-6">{active.successTitle}</h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                {active.successSub}
              </p>
              <button 
                onClick={() => onNavigate('home')}
                className="bg-adsup-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-100"
              >
                {active.successBtn}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
