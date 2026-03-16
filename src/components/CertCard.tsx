// src/components/CertCard.tsx

import { motion } from 'framer-motion';
import type { Certification } from '../types';

interface CertCardProps {
  cert: Certification;
}

export const CertCard = ({ cert }: CertCardProps) => {
  return (
    <motion.article
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        transition: { duration: 0.3 } 
      }}
      className="group relative border border-border rounded-lg bg-bg-surface p-6 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all overflow-hidden"
    >
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shimmer"></div>
      
      <div className="relative flex items-start gap-6">
        <div className="flex-1">
          <motion.h3 
            className="font-serif text-xl text-text-primary mb-2 group-hover:text-accent transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {cert.title}
          </motion.h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-text-muted group-hover:text-text-primary transition-colors">
              {cert.institution}
            </span>
            <span className="text-text-subtle">·</span>
            <span className="text-sm font-mono text-text-subtle group-hover:text-accent transition-colors">
              {cert.date}
            </span>
          </div>
          <p className="text-text-muted leading-relaxed group-hover:text-text-primary transition-colors">
            {cert.description}
          </p>

          {cert.actionButton && (
            <motion.a
              href={cert.actionButton.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              className="inline-flex items-center mt-4 px-4 py-2 rounded-md border border-accent/40 text-sm font-mono text-accent hover:bg-accent/10 transition-colors"
            >
              {cert.actionButton.label}
            </motion.a>
          )}
        </div>
        
        {cert.image && (
          <motion.div 
            className="flex-shrink-0 w-36 h-36 rounded-lg overflow-hidden border-2 border-border group-hover:border-accent/50 transition-all bg-white"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-full object-contain group-hover:brightness-110 transition-all duration-300"
            />
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};
