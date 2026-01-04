
import React from 'react';

export interface CurriculumItem {
  title: string;
  description: string;
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

export interface ProgramFeature {
  name: string;
  newbie: string | boolean;
  expert: string | boolean;
}
