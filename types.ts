
// Added React import to provide access to the React namespace for types like ReactNode
import React from 'react';

export interface CurriculumItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface MethodItem {
  title: string;
  description: string;
}
