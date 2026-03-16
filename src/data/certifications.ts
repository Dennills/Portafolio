// src/data/certifications.ts

import type { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Power BI Intermedio',
    institution: 'UNI',
    date: 'Dic 2024',
    description: 'Creación de dashboards interactivos con DAX, KPIs y visualizaciones para análisis de datos empresariales.',
    image: '/src/assets/loguni.png',
    /*
    actionButton: {
    label: "Ver certificado",
    url: "https://google.com",
    },
    */
  },
  {
    id: 'cert-2',
    title: 'Ciencia de Datos: Exploratory Data Analysis',
    institution: 'UNI',
    date: 'Nov 2024',
    description: 'Análisis exploratorio de datos con Python para detección de patrones, correlaciones y outliers.',
    image: '/src/assets/loguni.png',
    /*
    actionButton: {
    label: "Ver certificado",
    url: "https://google.com",
    },
    */
  },
  
];
