// src/sections/Certifications.tsx

import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { CertCard } from '../components/CertCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { certifications } from '../data/certifications';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const Certifications = () => {
  const { ref, ...motionProps } = useScrollReveal();

  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} {...motionProps}>
          <SectionTitle>Certificaciones</SectionTitle>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants}>
                <CertCard cert={cert} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
