// src/sections/Projects.tsx

import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

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

export const Projects = () => {
  const { ref, ...motionProps } = useScrollReveal();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} {...motionProps}>
          <SectionTitle subtitle="Soluciones escalables orientados a la optimización de procesos operativos y automatización inteligente de negocios.">
            Proyectos
          </SectionTitle>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
