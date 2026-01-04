
import React from 'react';

export const COLORS = {
  primary: '#0084FF',
  dark: '#0A1121',
  light: '#F8FAFC'
};

export const TRANSLATIONS: Record<string, any> = {
  id: {
    nav: [
      { name: 'Program', href: '#program' },
      { name: 'Metode', href: '#metode' },
      { name: 'Tentang', href: '#tentang' },
      { name: 'Sosial', href: '#sosial' }
    ],
    curriculum: [
      {
        title: 'Dasar Meta Ads',
        description: 'Memahami ekosistem Facebook & Instagram Ads dari dasar hingga struktur campaign yang efisien.',
      },
      {
        title: 'Funnel Penjualan Praktis',
        description: 'Membangun alur perjalanan konsumen (funnel) yang logis untuk meningkatkan konversi penjualan.',
      },
      {
        title: 'Copywriting Konversi',
        description: 'Seni menulis penawaran yang persuasif tanpa terkesan memaksa, fokus pada solusi audiens.',
      },
      {
        title: 'Analisa Data & Iklan',
        description: 'Membaca metrik iklan secara objektif dan melakukan optimasi berdasarkan data nyata.',
      }
    ],
    methods: [
      {
        title: 'Praktik Langsung',
        description: 'Kami percaya skill digital marketing hanya bisa dikuasai dengan melakukan, bukan sekadar menonton.'
      },
      {
        title: 'Studi Kasus Nyata',
        description: 'Membahas campaign yang sudah terbukti menghasilkan untuk dipelajari polanya.'
      },
      {
        title: 'Pendampingan Intensif',
        description: 'Akses diskusi personal dan grup untuk memastikan setiap peserta memahami materi secara tuntas.'
      }
    ],
    audience: [
      {
        title: 'Pemula Digital',
        description: 'Individu yang ingin membangun karir atau memulai bisnis pertama mereka di dunia digital.'
      },
      {
        title: 'Pelaku UMKM',
        description: 'Pemilik bisnis yang ingin mendigitalisasi pemasarannya agar lebih luas dan terukur.'
      },
      {
        title: 'Freelancer',
        description: 'Profesional jasa yang ingin meningkatkan nilai tawar dengan skill pemasaran yang mumpuni.'
      }
    ]
  },
  en: {
    nav: [
      { name: 'Programs', href: '#program' },
      { name: 'Methods', href: '#metode' },
      { name: 'About', href: '#tentang' },
      { name: 'Social', href: '#sosial' }
    ],
    curriculum: [
      {
        title: 'Meta Ads Fundamentals',
        description: 'Understanding the Facebook & Instagram Ads ecosystem from basics to efficient campaign structures.',
      },
      {
        title: 'Practical Sales Funnel',
        description: 'Building logical consumer journey flows (funnels) to increase sales conversion.',
      },
      {
        title: 'Conversion Copywriting',
        description: 'The art of writing persuasive offers without being pushy, focusing on audience solutions.',
      },
      {
        title: 'Data & Ad Analysis',
        description: 'Reading ad metrics objectively and performing optimization based on real data.',
      }
    ],
    methods: [
      {
        title: 'Direct Practice',
        description: 'We believe digital marketing skills can only be mastered by doing, not just watching.'
      },
      {
        title: 'Real Case Studies',
        description: 'Discussing proven successful campaigns to learn their patterns.'
      },
      {
        title: 'Intensive Mentoring',
        description: 'Personal and group discussion access to ensure every participant fully understands the material.'
      }
    ],
    audience: [
      {
        title: 'Digital Newbies',
        description: 'Individuals wanting to build a career or start their first business in the digital world.'
      },
      {
        title: 'MSME Owners',
        description: 'Business owners wanting to digitalize their marketing for broader and measurable reach.'
      },
      {
        title: 'Freelancers',
        description: 'Service professionals wanting to increase their value with proficient marketing skills.'
      }
    ]
  }
};

export const NAV_LINKS = (lang: string) => TRANSLATIONS[lang].nav;
export const CURRICULUM = (lang: string) => TRANSLATIONS[lang].curriculum;
export const METHODS = (lang: string) => TRANSLATIONS[lang].methods;
export const TARGET_AUDIENCE = (lang: string) => TRANSLATIONS[lang].audience;
