// src/data/projects.ts

import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proyecto-1',
    title: 'Sistema de Inteligencia Empresarial con Asistente IA',
    description: 'Desarrolle una plataforma web para gestión de inventario, ventas y análisis de datos, con dashboards, reportes y un asistente de IA para consultar información del negocio.',
    tech: ['React', 'Django','PostgreeSQL', 'Supabase', 'API de Gemini'],
    badge: 'Destacado',
    links: {
      github: '#',
      demo: '#',
    },
    /*
    actionButton: {
    label: "Ver proyecto",
    url: "https://google.com",
    },
    */
  },
{
    id: 'proyecto-2',
    title: 'Dashboard de Analítica Predictiva de Negocio',
    description: 'Análisis exploratorio de datos y segmentación mediante visualización interactiva para identificar patrones y apoyar decisiones comerciales.',
    tech: ['Python', 'Pandas', 'Power BI', 'DAX'],
    badge: 'Destacado',
    links: {
      github: '#',
    },
    /*
    actionButton: {
    label: "Ver proyecto",
    url: "https://google.com",
    },
    */
  },
  {
    id: 'proyecto-3',
    title: 'Agente Inteligente de Automatización y Reportes',
    description: 'Agente basado en LLM que procesa datos dinámicos y genera reportes automatizados por correo, eliminando tareas manuales de monitoreo.',
    tech: ['Python', 'Google Sheets', 'n8n','Gmail API', 'OpenAI API'],
    badge: 'Destacado',
    links: {
      github: '#',
    },
    /*
    actionButton: {
    label: "Ver proyecto",
    url: "https://google.com",
    },
    */
  },


];
