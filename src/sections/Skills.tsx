// src/sections/Skills.tsx

import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { SkillBadge } from '../components/SkillBadge';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skills } from '../data/skills';

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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const Skills = () => {
  const { ref, ...motionProps } = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-bg-surface">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} {...motionProps}>
          <SectionTitle>Habilidades técnicas</SectionTitle>

          <div className="space-y-10">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-sm font-mono text-text-subtle mb-4">
                  {skillGroup.category}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {skillGroup.items.map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <SkillBadge>{skill}</SkillBadge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
