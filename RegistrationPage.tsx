
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Loader2, AlertCircle, Lock, Mail, User, Phone, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const RegistrationPage = ({ lang, selectedPlan, onNavigate }: { lang: string, selectedPlan: any, onNavigate: (page: string) => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'info' | 'payment'>('info');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    business: ''
  });

  const t: Record<string, any> = {
    id: {
      title: 'Lengkapi Pendaftaran',
      sub: `Anda memilih paket ${selectedPlan?.title} (${selectedPlan?.cycle === '6months' ? '6 Bulan' : '1 Tahun'}).`,
      formName: 'Nama Lengkap',
      formEmail: 'Email (Untuk Login)',
      formPassword: 'Password Dashboard',
      formPhone: 'WhatsApp',
      formBusiness: 'Kategori Bisnis',
      formSubmit: 'Lanjut ke Pembayaran',
      payTitle: 'Konfirmasi Pembayaran',
      paySub: 'Silakan lakukan transfer sesuai nominal di bawah ini.',
      payBtn: 'Konfirmasi Saya Sudah Bayar',
      successTitle: 'Selamat! Akun Anda Aktif',
      successSub: 'Data login Anda telah terekam di database kami. Silakan gunakan email & password tadi untuk masuk ke dashboard.',
      loginBtn: 'Langsung Login ke Dashboard'
    },
    en: {
      title: 'Complete Enrollment',
      sub: `You selected ${selectedPlan?.title} (${selectedPlan?.cycle === '6months' ? '6 Months' : '1 Year'}).`,
      formName: 'Full Name',
      formEmail: 'Email (For Login)',
      formPassword: 'Dashboard Password',
      formPhone: 'WhatsApp',
      formBusiness: 'Business Category',
      formSubmit: 'Proceed to Payment',
      payTitle: 'Payment Confirmation',
      paySub: 'Please transfer the exact amount shown below.',
      payBtn: 'Confirm Payment',
      successTitle: 'Welcome! Account Active',
      successSub: 'Your login data has been recorded in our database. Please use your email & password to access the dashboard.',
      loginBtn: 'Login to Dashboard'
    }
  }[lang];

  const active = t;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    const SUPABASE_URL = process.env.SUPABASE_URL || '';
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/registrations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password, 
          phone: formData.phone,
          business: formData.business,
          program: selectedPlan?.id,
          duration: selectedPlan?.cycle,
          status: 'paid'
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'DB Error');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message === 'DB Error' ? "Email sudah terdaftar atau terjadi kesalahan server." : "Gagal menyimpan data ke database.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full px-4">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100"
            >
              {step === 'info' ? (
                <>
                  <h1 className="text-3xl font-black text-gray-900 mb-2">{active.title}</h1>
                  <p className="text-gray-500 mb-10 text-sm font-medium">{active.sub}</p>
                  
                  <form onSubmit={handleInfoSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest">{active.formName}</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input required type="text" className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-adsup-blue bg-gray-50" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest">{active.formEmail}</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input required type="email" className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-adsup-blue bg-gray-50" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest">{active.formPassword}</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input required type="password" placeholder="Min. 8 Karakter" className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-adsup-blue bg-gray-50" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                          <label className="text-xs font-black text-gray-400 uppercase tracking-widest">{active.formPhone}</label>
                          <input required type="tel" className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-adsup-blue bg-gray-50" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-black text-gray-400 uppercase tracking-widest">{active.formBusiness}</label>
                          <input required type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-adsup-blue bg-gray-50" value={formData.business} onChange={e => setFormData({...formData, business: e.target.value})} />
                       </div>
                    </div>

                    <button type="submit" className="w-full bg-adsup-blue text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 flex items-center justify-center gap-2">
                      {active.formSubmit} <ArrowRight size={20} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                   <div className="w-20 h-20 bg-blue-50 text-adsup-blue rounded-full flex items-center justify-center mx-auto mb-8">
                      <ShieldCheck size={40} />
                   </div>
                   <h2 className="text-3xl font-black mb-4">{active.payTitle}</h2>
                   <p className="text-gray-500 mb-8">{active.paySub}</p>
                   
                   {error && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold flex items-center gap-2"><AlertCircle size={18}/> {error}</div>}

                   <div className="bg-gray-50 p-6 rounded-3xl border-2 border-dashed border-gray-200 mb-10">
                      <p className="text-xs font-black text-gray-400 uppercase mb-2">Total Transfer</p>
                      <p className="text-4xl font-black text-gray-900">Rp {selectedPlan?.price}</p>
                      <div className="mt-4 pt-4 border-t border-gray-100 text-sm font-bold text-gray-600">
                         Bank BCA: 82910-231-10 <br/> a/n Adsup Academy
                      </div>
                   </div>

                   <button 
                     onClick={handleFinalSubmit}
                     disabled={isSubmitting}
                     className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-100 flex items-center justify-center gap-2"
                   >
                     {isSubmitting ? <Loader2 className="animate-spin" /> : active.payBtn}
                   </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-[40px] p-12 text-center shadow-2xl">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-black mb-4">{active.successTitle}</h2>
              <p className="text-gray-500 mb-10 leading-relaxed">{active.successSub}</p>
              <button onClick={() => onNavigate('login')} className="w-full bg-adsup-blue text-white py-5 rounded-2xl font-black text-lg">
                {active.loginBtn}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
