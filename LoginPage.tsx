
import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShieldCheck, 
  ChevronLeft,
  Info,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';

export const LoginPage = ({ lang, onNavigate, onLogin }: { 
  lang: string, 
  onNavigate: (page: string) => void,
  onLogin: (program: 'newbie' | 'expert') => void 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t: Record<string, any> = {
    id: {
      title: 'Selamat Datang Kembali',
      sub: 'Masuk ke dashboard untuk melanjutkan progres belajar Anda.',
      emailLabel: 'Alamat Email',
      passLabel: 'Kata Sandi',
      forgot: 'Lupa kata sandi?',
      remember: 'Ingat saya',
      loginBtn: 'Masuk ke Dashboard',
      noAccount: 'Belum punya akun?',
      registerLink: 'Daftar Sekarang',
      secureNotice: 'Sesi Anda dilindungi oleh enkripsi 256-bit.',
      sidebarTitle: 'Kuasai Skill Meta Ads Hari Ini',
      sidebarDesc: 'Akses materi eksklusif, template campaign, dan rekaman live mentoring di satu tempat.',
      invalid: 'Email atau password salah. Pastikan Anda sudah mendaftar dan membayar.'
    },
    en: {
      title: 'Welcome Back',
      sub: 'Login to your dashboard to continue your learning progress.',
      emailLabel: 'Email Address',
      passLabel: 'Password',
      forgot: 'Forgot password?',
      remember: 'Remember me',
      loginBtn: 'Login to Dashboard',
      noAccount: "Don't have an account?",
      registerLink: 'Register Now',
      secureNotice: 'Your session is protected by 256-bit encryption.',
      sidebarTitle: 'Master Meta Ads Skills Today',
      sidebarDesc: 'Access exclusive materials, campaign templates, and live mentoring recordings in one place.',
      invalid: 'Invalid email or password. Ensure you have enrolled and paid.'
    }
  }[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const SUPABASE_URL = process.env.SUPABASE_URL || '';
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

    try {
      // Query Supabase for the user with matching email and password
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/registrations?email=eq.${encodeURIComponent(formData.email)}&password=eq.${encodeURIComponent(formData.password)}`,
        {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
          }
        }
      );

      const data = await response.json();

      if (data && data.length > 0) {
        // Successful login
        const user = data[0];
        onLogin(user.program === 'advance' ? 'expert' : 'newbie');
      } else {
        setError(t.invalid);
      }
    } catch (err) {
      console.error(err);
      setError("Gagal menghubungi server. Silakan coba lagi nanti.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 flex bg-white">
      <div className="hidden lg:flex lg:w-1/2 bg-adsup-dark relative overflow-hidden items-center justify-center p-20">
        <div className="absolute inset-0 bg-gradient-to-br from-adsup-blue/20 to-transparent"></div>
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <ShieldCheck size={300} className="text-white" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white max-w-lg"
        >
          <div className="w-16 h-1 bg-adsup-blue mb-8"></div>
          <h2 className="text-5xl font-black mb-6 leading-tight">{t.sidebarTitle}</h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            {t.sidebarDesc}
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
               <div className="w-10 h-10 rounded-xl bg-adsup-blue/20 flex items-center justify-center text-adsup-blue">
                 <ShieldCheck size={20} />
               </div>
               <p className="text-sm font-medium text-gray-300">{lang === 'id' ? 'Sertifikasi Resmi' : 'Official Certification'}</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
               <div className="w-10 h-10 rounded-xl bg-adsup-blue/20 flex items-center justify-center text-adsup-blue">
                 <ArrowRight size={20} />
               </div>
               <p className="text-sm font-medium text-gray-300">{lang === 'id' ? 'Update Materi Mingguan' : 'Weekly Content Updates'}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-20 bg-gray-50/30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-400 hover:text-adsup-blue font-bold text-sm mb-12 transition-colors group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            {lang === 'id' ? 'Kembali' : 'Back'}
          </button>

          <h1 className="text-4xl font-black text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-500 mb-10">{t.sub}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold">
                <AlertCircle size={18} /> {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest">{t.emailLabel}</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  required
                  disabled={isSubmitting}
                  type="email" 
                  className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 focus:border-adsup-blue outline-none transition-all bg-white disabled:opacity-50"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">{t.passLabel}</label>
                <button type="button" className="text-xs font-bold text-adsup-blue hover:underline">{t.forgot}</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  required
                  disabled={isSubmitting}
                  type={showPassword ? "text" : "password"} 
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 focus:border-adsup-blue outline-none transition-all bg-white disabled:opacity-50"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-adsup-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-2 disabled:bg-gray-400"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : <>{t.loginBtn} <ArrowRight size={20} /></>}
            </button>

            <div className="pt-8 text-center border-t border-gray-100">
              <p className="text-gray-500 text-sm font-medium">
                {t.noAccount} <button onClick={() => onNavigate('pricing')} className="text-adsup-blue font-bold hover:underline">{t.registerLink}</button>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
