// src/sections/Timeline.tsx

import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { TimelineItem } from '../components/TimelineItem';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { timeline } from '../data/timeline';

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export const Timeline = () => {
  const { ref, ...motionProps } = useScrollReveal();

  return (
    <section id="timeline" className="py-24 bg-bg-surface">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} {...motionProps}>
          <SectionTitle>Trayectoria</SectionTitle>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            {timeline.map((entry) => (
              <motion.div key={entry.id} variants={itemVariants}>
                <TimelineItem entry={entry} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
