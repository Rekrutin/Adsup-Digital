
import React, { useState } from 'react';
import { CheckCircle2, Zap, Rocket, Star, ArrowRight, ShieldCheck, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const PricingPage = ({ lang, onSelectPlan }: { lang: string, onSelectPlan: (plan: any) => void }) => {
  const [billingCycle, setBillingCycle] = useState<'6months' | '1year'>('6months');

  const t: Record<string, any> = {
    id: {
      title: 'Pilih Investasi Masa Depan Anda',
      sub: 'Akses kurikulum standar industri, mentoring eksklusif, dan komunitas praktisi.',
      toggle6: '6 Bulan',
      toggle12: '1 Tahun (Hemat 20%)',
      newbie: {
        title: 'Newbie Program',
        desc: 'Cocok untuk Anda yang ingin mulai dari nol hingga jago.',
        price6: '649.000',
        price12: '975.000',
        features: ['Dasar Meta Ads Manager', 'Setup Pixel & API', 'Targeting Fundamental', 'Live Mentoring 2x Seminggu', 'Lifetime Support Group', '24 Jam Support Admin']
      },
      advance: {
        title: 'Advance Program',
        desc: 'Untuk advertiser yang ingin scaling budget miliaran.',
        price6: '750.000',
        price12: '1.500.000',
        features: ['Scaling Architecture', 'Creative Testing Framework', 'Advance Data Analytics', 'Live Mentoring 2x Seminggu', 'Lifetime Support Group', '24 Jam Priority Support']
      },
      cta: 'Pilih Paket & Daftar'
    },
    en: {
      title: 'Choose Your Future Investment',
      sub: 'Access industry-standard curriculum, exclusive mentoring, and practitioner community.',
      toggle6: '6 Months',
      toggle12: '1 Year (Save 20%)',
      newbie: {
        title: 'Newbie Program',
        desc: 'Perfect for those who want to start from zero to pro.',
        price6: '649.000',
        price12: '975.000',
        features: ['Meta Ads Fundamentals', 'Pixel & API Setup', 'Targeting Mastery', '2x Weekly Live Mentoring', 'Lifetime Support Group', '24h Admin Support']
      },
      advance: {
        title: 'Advance Program',
        desc: 'For advertisers wanting to scale multi-million budgets.',
        price6: '750.000',
        price12: '1.500.000',
        features: ['Scaling Architecture', 'Creative Testing Framework', 'Advance Data Analytics', '2x Weekly Live Mentoring', 'Lifetime Support Group', '24h Priority Support']
      },
      cta: 'Select & Enroll'
    }
  }[lang];

  const plans = [
    {
      id: 'newbie',
      title: t.newbie.title,
      desc: t.newbie.desc,
      price: billingCycle === '6months' ? t.newbie.price6 : t.newbie.price12,
      features: t.newbie.features,
      icon: <Rocket className="text-blue-500" size={32} />,
      popular: false
    },
    {
      id: 'advance',
      title: t.advance.title,
      desc: t.advance.desc,
      price: billingCycle === '6months' ? t.advance.price6 : t.advance.price12,
      features: t.advance.features,
      icon: <Zap className="text-yellow-500" size={32} />,
      popular: true
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">{t.title}</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t.sub}</p>
          
          {/* Toggle */}
          <div className="mt-12 inline-flex p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100">
            <button 
              onClick={() => setBillingCycle('6months')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${billingCycle === '6months' ? 'bg-adsup-blue text-white shadow-lg' : 'text-gray-400'}`}
            >
              {t.toggle6}
            </button>
            <button 
              onClick={() => setBillingCycle('1year')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${billingCycle === '1year' ? 'bg-adsup-blue text-white shadow-lg' : 'text-gray-400'}`}
            >
              {t.toggle12}
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <motion.div 
              key={plan.id}
              whileHover={{ y: -8 }}
              className={`relative bg-white p-8 md:p-12 rounded-[40px] shadow-xl border-2 flex flex-col text-left ${plan.popular ? 'border-adsup-blue' : 'border-transparent'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-12 -translate-y-1/2 bg-adsup-blue text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Best Value
                </div>
              )}
              
              <div className="mb-8 p-4 bg-gray-50 rounded-2xl w-fit">
                {plan.icon}
              </div>
              
              <h3 className="text-3xl font-black text-gray-900 mb-2">{plan.title}</h3>
              <p className="text-gray-500 text-sm mb-8">{plan.desc}</p>
              
              <div className="mb-10">
                <span className="text-5xl font-black text-gray-900">Rp {plan.price}</span>
                <span className="text-gray-400 font-bold ml-2">/ {billingCycle === '6months' ? '6bln' : 'thn'}</span>
              </div>
              
              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    <span className="text-sm font-bold text-gray-700">{feat}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => onSelectPlan({ ...plan, cycle: billingCycle })}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 ${plan.popular ? 'bg-adsup-blue text-white hover:bg-blue-600 shadow-xl shadow-blue-100' : 'bg-gray-900 text-white hover:bg-black'}`}
              >
                {t.cta} <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
