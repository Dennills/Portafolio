// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  badge?: 'Destacado' | 'Comunidad' | null;
  actionButton?: {
    label: string;
    url: string;
  };
  links: {
    github?: string;
    demo?: string;
  };
}

export interface Skill {
  category: string;
  items: string[];
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string[];
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  image?: string;
  actionButton?: {
    label: string;
    url: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
