// src/hooks/useScrollReveal.ts

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return {
    ref,
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] as const },
  };
};
