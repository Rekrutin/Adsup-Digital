
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
      { name: 'Tentang', href: '#tentang' }
    ],
    // ... rest of translations
  },
  en: {
    nav: [
      { name: 'Programs', href: '#program' },
      { name: 'Methods', href: '#metode' },
      { name: 'About', href: '#tentang' }
    ],
    // ... rest of translations
  }
};

export const NAV_LINKS = (lang: string) => [
  { name: lang === 'id' ? 'Program' : 'Programs', href: 'program' },
  { name: lang === 'id' ? 'Metode' : 'Methods', href: 'metode' },
  { name: lang === 'id' ? 'Tentang' : 'About', href: 'tentang' }
];
