
import React, { useState } from 'react';
import { 
  BookOpen, 
  CreditCard, 
  LogOut, 
  PlayCircle, 
  CheckCircle2, 
  MessageSquare, 
  Layout,
  ChevronRight,
  Clock,
  Video,
  FileText,
  Lock,
  MessageCircle,
  Users,
  Zap,
  TrendingUp,
  ArrowUpCircle,
  ShieldCheck,
  Star,
  Download,
  Award,
  BarChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardProps {
  lang: string;
  onLogout: () => void;
  enrolledProgram: 'newbie' | 'expert';
}

export const Dashboard = ({ lang, onLogout, enrolledProgram }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState<'courses' | 'transactions' | 'upgrade'>('courses');

  const t: Record<string, any> = {
    id: {
      memberArea: 'Member Area',
      transactions: 'Transaksi',
      upgrade: 'Upgrade ke Expert',
      logout: 'Keluar',
      welcome: 'Halo, Siswa Adsup!',
      enrolled: 'Program Anda saat ini',
      startLearning: 'Lanjutkan Belajar',
      curriculum: 'Kurikulum Kursus',
      transactionTitle: 'Riwayat Pembayaran',
      statusPaid: 'Berhasil',
      date: 'Tanggal',
      amount: 'Total Pembayaran',
      method: 'Metode',
      discordJoin: 'Gabung Discord Komunitas',
      waSupport: 'Bantuan Mentor (WA)',
      newbieTitle: 'Newbie Meta Ads Mastery',
      expertTitle: 'Expert Scaling Framework',
      upgradeTitle: 'Siap Naik Level ke Expert?',
      upgradeSub: 'Buka strategi scaling budget miliaran, arsitektur campaign lanjutan, dan optimasi kreatif tingkat tinggi.',
      upgradeBtn: 'Upgrade Sekarang & Klaim Diskon Alumni',
      progressTitle: 'Progres Belajar Anda',
      nextLesson: 'Pelajaran Selanjutnya',
      completed: 'Selesai',
      resourcesTitle: 'Resources & Templates',
      download: 'Unduh',
      lessons: [
        'Pengenalan Ads Manager & Struktur Akun',
        'Setup Pixel & Conversion API',
        'Strategi Targeting & Audiens',
        'Analisa Data & Optimasi Iklan',
        'Creative Testing Framework'
      ],
      resourceList: [
        { title: 'Template Struktur Campaign', type: 'Excel', size: '1.2 MB' },
        { title: 'Cheatsheet Copywriting Ads', type: 'PDF', size: '850 KB' },
        { title: 'Checklist Launching Iklan', type: 'PDF', size: '420 KB' }
      ]
    },
    en: {
      memberArea: 'Member Area',
      transactions: 'Transactions',
      upgrade: 'Upgrade to Expert',
      logout: 'Logout',
      welcome: 'Hello, AdsUp Student!',
      enrolled: 'Your current program',
      startLearning: 'Continue Learning',
      curriculum: 'Course Curriculum',
      transactionTitle: 'Payment History',
      statusPaid: 'Paid',
      date: 'Date',
      amount: 'Total Amount',
      method: 'Method',
      discordJoin: 'Join Community Discord',
      waSupport: 'Mentor Support (WA)',
      newbieTitle: 'Newbie Meta Ads Mastery',
      expertTitle: 'Expert Scaling Framework',
      upgradeTitle: 'Ready to Level Up to Expert?',
      upgradeSub: 'Unlock multi-million budget scaling strategies, advanced campaign architecture, and high-level creative optimization.',
      upgradeBtn: 'Upgrade Now & Claim Alumni Discount',
      progressTitle: 'Your Learning Progress',
      nextLesson: 'Next Lesson',
      completed: 'Completed',
      resourcesTitle: 'Resources & Templates',
      download: 'Download',
      lessons: [
        'Introduction to Ads Manager & Structure',
        'Pixel & Conversion API Setup',
        'Targeting & Audience Strategy',
        'Data Analysis & Ad Optimization',
        'Creative Testing Framework'
      ],
      resourceList: [
        { title: 'Campaign Structure Template', type: 'Excel', size: '1.2 MB' },
        { title: 'Ads Copywriting Cheatsheet', type: 'PDF', size: '850 KB' },
        { title: 'Ads Launching Checklist', type: 'PDF', size: '420 KB' }
      ]
    }
  }[lang];

  const sidebarLinks = [
    { id: 'courses', label: t.memberArea, icon: <BookOpen size={20} /> },
    { id: 'transactions', label: t.transactions, icon: <CreditCard size={20} /> },
  ];

  if (enrolledProgram === 'newbie') {
    sidebarLinks.push({ id: 'upgrade', label: t.upgrade, icon: <ArrowUpCircle size={20} /> });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b px-6 py-4 flex justify-between items-center">
        <div className="font-black text-adsup-blue uppercase tracking-tighter">Adsup Dashboard</div>
        <button onClick={onLogout} className="text-gray-400 hover:text-red-500"><LogOut size={20} /></button>
      </div>

      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex w-72 bg-white border-r flex-col sticky top-0 h-screen">
        <div className="p-8 border-b">
           <div className="flex flex-col">
              <span className="text-xl font-black text-gray-900 uppercase">Adsup</span>
              <span className="text-[10px] font-bold text-adsup-blue uppercase tracking-widest">Academy Dashboard</span>
           </div>
        </div>
        
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {sidebarLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-4 rounded-2xl font-bold transition-all ${
                activeTab === link.id ? 'bg-blue-50 text-adsup-blue shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {link.icon} {link.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t space-y-4">
           <button 
             onClick={onLogout}
             className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl font-bold text-gray-400 hover:text-red-500 transition-colors"
           >
             <LogOut size={20} /> {t.logout}
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12">
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">{t.welcome}</h1>
            <p className="text-gray-500 font-medium">{t.enrolled}: <span className="text-adsup-blue font-bold">{enrolledProgram === 'newbie' ? t.newbieTitle : t.expertTitle}</span></p>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 pr-6 rounded-2xl shadow-sm border border-gray-100">
             <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-adsup-blue font-bold shadow-inner">U</div>
             <div className="text-sm">
                <p className="font-bold text-gray-900 leading-none mb-1">User Adsup</p>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-wider">Student ID: #8291</p>
             </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'courses' && (
            <motion.div 
              key="courses"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
               {/* Course Summary & Progress */}
               <div className="grid lg:grid-cols-3 gap-8">
                  {/* Hero Course Card */}
                  <div className="lg:col-span-2 bg-adsup-dark rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-white/5 opacity-10">
                      <BookOpen size={160} />
                    </div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-adsup-blue/20 text-adsup-blue text-[10px] font-black uppercase tracking-widest mb-6 border border-adsup-blue/30">
                        {enrolledProgram.toUpperCase()} CLASS
                      </div>
                      <h2 className="text-3xl font-black mb-6 leading-tight">{enrolledProgram === 'newbie' ? t.newbieTitle : t.expertTitle}</h2>
                      
                      <div className="flex items-center gap-6 mb-8">
                         <div className="flex flex-col">
                            <span className="text-2xl font-bold">24</span>
                            <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Lessons</span>
                         </div>
                         <div className="w-px h-8 bg-white/10"></div>
                         <div className="flex flex-col">
                            <span className="text-2xl font-bold">12h</span>
                            <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Content</span>
                         </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-400">
                           <span>{t.progressTitle}</span>
                           <span className="text-adsup-blue">25%</span>
                        </div>
                        <div className="w-full bg-white/10 h-3 rounded-full">
                          <div className="bg-adsup-blue h-full w-1/4 rounded-full shadow-[0_0_15px_rgba(0,132,255,0.5)]"></div>
                        </div>
                      </div>

                      <button className="bg-adsup-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 group">
                        {t.startLearning} <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Next Lesson Focus */}
                  <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 flex flex-col">
                     <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-adsup-blue">
                           <Zap size={20} />
                        </div>
                        <h3 className="font-black text-gray-900 text-sm uppercase tracking-widest">{t.nextLesson}</h3>
                     </div>
                     <div className="flex-1 p-6 bg-gray-50 rounded-3xl border border-gray-100 mb-6">
                        <p className="text-xs font-black text-adsup-blue uppercase mb-2">Module 2 • Part 1</p>
                        <p className="font-bold text-gray-900 text-lg mb-4">Setup Pixel & Conversion API Mastery</p>
                        <div className="flex items-center gap-2 text-xs text-gray-400 font-bold">
                           <Clock size={14} /> 45 Mins
                        </div>
                     </div>
                     <button className="w-full py-4 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black transition-colors flex items-center justify-center gap-2">
                        Watch Now <ChevronRight size={18} />
                     </button>
                  </div>
               </div>

               {/* Curriculum & Resources Grid */}
               <div className="grid lg:grid-cols-3 gap-8">
                  {/* Curriculum List */}
                  <div className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-12 shadow-xl border border-gray-100">
                     <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-gray-900 flex items-center gap-3">
                           <BarChart className="text-adsup-blue" /> {t.curriculum}
                        </h3>
                     </div>
                     <div className="space-y-4">
                        {t.lessons.map((lesson: string, idx: number) => (
                           <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-blue-50/50 transition-all cursor-pointer group border border-transparent hover:border-blue-100">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${idx === 0 ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500 group-hover:bg-adsup-blue group-hover:text-white'}`}>
                                 {idx === 0 ? <CheckCircle2 size={18} /> : idx + 1}
                              </div>
                              <div className="flex-1">
                                 <p className="text-sm font-bold text-gray-900">{lesson}</p>
                                 <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">{idx === 0 ? t.completed : 'Up Next'}</p>
                              </div>
                              {idx > 0 && <Lock size={16} className="text-gray-300" />}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Resources Section */}
                  <div className="space-y-8">
                     <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100">
                        <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-3">
                           <FileText className="text-adsup-blue" /> {t.resourcesTitle}
                        </h3>
                        <div className="space-y-4">
                           {t.resourceList.map((res: any, idx: number) => (
                              <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                                 <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-adsup-blue flex items-center justify-center">
                                       <FileText size={18} />
                                    </div>
                                    <div>
                                       <p className="text-xs font-bold text-gray-900">{res.title}</p>
                                       <p className="text-[10px] text-gray-400 font-bold">{res.type} • {res.size}</p>
                                    </div>
                                 </div>
                                 <button className="text-gray-400 hover:text-adsup-blue transition-colors">
                                    <Download size={18} />
                                 </button>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Quick Award Tracker */}
                     <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-[40px] p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                           <Award size={100} />
                        </div>
                        <h4 className="font-black text-sm uppercase tracking-widest mb-2">Certification</h4>
                        <p className="text-xs opacity-90 mb-6">Complete 100% curriculum to unlock your official AdsUp Academy Certificate.</p>
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                              <Star size={20} className="fill-white" />
                           </div>
                           <p className="font-bold text-sm">Level: Novice Advertiser</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Community Support */}
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#5865F2] rounded-[32px] p-8 text-white shadow-xl flex items-center justify-between group cursor-pointer hover:-translate-y-1 transition-all overflow-hidden relative">
                     <div className="absolute right-0 top-0 p-4 opacity-10">
                        <Users size={80} />
                     </div>
                     <div className="flex items-center gap-5 relative z-10">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                           <Users size={28} />
                        </div>
                        <div>
                           <p className="font-black text-xl mb-1">{t.discordJoin}</p>
                           <p className="text-sm opacity-70">500+ members online</p>
                        </div>
                     </div>
                     <ChevronRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="bg-green-600 rounded-[32px] p-8 text-white shadow-xl flex items-center justify-between group cursor-pointer hover:-translate-y-1 transition-all overflow-hidden relative">
                     <div className="absolute right-0 top-0 p-4 opacity-10">
                        <MessageCircle size={80} />
                     </div>
                     <div className="flex items-center gap-5 relative z-10">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                           <MessageCircle size={28} />
                        </div>
                        <div>
                           <p className="font-black text-xl mb-1">{t.waSupport}</p>
                           <p className="text-sm opacity-70">Mon - Fri (09:00 - 17:00)</p>
                        </div>
                     </div>
                     <ChevronRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
               </div>
            </motion.div>
          )}

          {activeTab === 'transactions' && (
            <motion.div 
              key="transactions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-8 md:p-12">
                 <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-black text-gray-900">{t.transactionTitle}</h2>
                    <div className="px-4 py-2 bg-blue-50 text-adsup-blue rounded-xl text-xs font-bold border border-blue-100">
                       2 {lang === 'id' ? 'Item Ditemukan' : 'Items Found'}
                    </div>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="border-b">
                             <th className="pb-6 text-xs font-black text-gray-400 uppercase tracking-widest">Order ID</th>
                             <th className="pb-6 text-xs font-black text-gray-400 uppercase tracking-widest">Program</th>
                             <th className="pb-6 text-xs font-black text-gray-400 uppercase tracking-widest">{t.date}</th>
                             <th className="pb-6 text-xs font-black text-gray-400 uppercase tracking-widest">{t.amount}</th>
                             <th className="pb-6 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Status</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y">
                          <tr className="hover:bg-gray-50 transition-colors group">
                             <td className="py-6 font-bold text-gray-900">#AD-98210</td>
                             <td className="py-6">
                                <p className="font-bold text-gray-900">{enrolledProgram === 'newbie' ? 'Newbie Class' : 'Expert Class'}</p>
                                <p className="text-xs text-gray-400">Full Access Pass</p>
                             </td>
                             <td className="py-6 text-sm text-gray-600 font-medium">12 Oct 2023</td>
                             <td className="py-6 font-bold text-gray-900">Rp 1.499.000</td>
                             <td className="py-6 text-right">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase">
                                   <CheckCircle2 size={12} /> {t.statusPaid}
                                </span>
                             </td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors group">
                             <td className="py-6 font-bold text-gray-900">#AD-98105</td>
                             <td className="py-6">
                                <p className="font-bold text-gray-900">E-Book: Facebook Ads 101</p>
                                <p className="text-xs text-gray-400">Digital Product</p>
                             </td>
                             <td className="py-6 text-sm text-gray-600 font-medium">05 Oct 2023</td>
                             <td className="py-6 font-bold text-gray-900">Rp 199.000</td>
                             <td className="py-6 text-right">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase">
                                   <CheckCircle2 size={12} /> {t.statusPaid}
                                </span>
                             </td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'upgrade' && (
            <motion.div 
              key="upgrade"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
               <div className="bg-gradient-to-br from-adsup-blue to-blue-800 rounded-[40px] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                     <Zap size={300} />
                  </div>
                  <div className="max-w-2xl relative z-10">
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-8 border border-white/30">
                        Limited Student Offer
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{t.upgradeTitle}</h2>
                     <p className="text-xl text-blue-50 mb-10 leading-relaxed">
                        {t.upgradeSub}
                     </p>
                     
                     <div className="grid sm:grid-cols-2 gap-6 mb-12">
                        {[
                          { title: 'Scaling Strategy', desc: 'Manage 10M+ daily budget' },
                          { title: 'Advanced Tracking', desc: 'Full API & Offline Events' },
                          { title: 'Psychology Design', desc: 'High-conversion visual hooks' },
                          { title: 'Data Analysis', desc: 'Predictive ROI modeling' }
                        ].map((item, i) => (
                          <div key={i} className="flex gap-4 items-start">
                             <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                <CheckCircle2 size={14} className="text-white" />
                             </div>
                             <div>
                                <p className="font-bold text-sm">{item.title}</p>
                                <p className="text-xs text-blue-200">{item.desc}</p>
                             </div>
                          </div>
                        ))}
                     </div>

                     <button className="bg-white text-adsup-blue px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-2xl flex items-center gap-3">
                        {t.upgradeBtn} <ChevronRight size={24} />
                     </button>
                  </div>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: <TrendingUp />, title: 'ROI Analysis', desc: 'Master deep metric analysis' },
                    { icon: <ShieldCheck />, title: 'Official Certificate', desc: 'Get Expert Certification' },
                    { icon: <Star />, title: 'Priority Support', desc: 'Direct 1-on-1 mentor access' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                       <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-adsup-blue mb-6">
                          {item.icon}
                       </div>
                       <h4 className="font-black text-gray-900 mb-2">{item.title}</h4>
                       <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating WA Button for help */}
      <a 
        href="https://wa.me/6285262344328" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-20 bg-white text-gray-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
           Chat Admin Support
        </span>
      </a>
    </div>
  );
};
