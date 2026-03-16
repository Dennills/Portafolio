// src/components/ProjectCard.tsx

import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className="group border-l-4 border-accent bg-bg-elevated p-6 hover:bg-bg-surface transition-colors rounded-lg"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-serif text-2xl text-text-primary pr-4">
          {project.title}
        </h3>
        {project.badge && (
          <span
            className={`shrink-0 px-2 py-1 rounded text-xs font-mono ${
              project.badge === 'Destacado'
                ? 'inline-flex items-center px-3 py-1.5 rounded-md bg-orange-300/15 text-orange-300 border border-orange-300/35 shadow-sm shadow-orange-300/10'
                : 'bg-green/10 text-green'
            }`}
          >
            {project.badge}
          </span>
        )}
      </div>
      <p className="text-text-muted mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-bg-surface text-xs text-text-muted font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.actionButton && (
        <motion.a
          href={project.actionButton.url}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
          className="inline-flex items-center mt-5 px-4 py-2 rounded-md border border-accent/40 text-sm font-mono text-accent hover:bg-accent/10 transition-colors"
        >
          {project.actionButton.label}
        </motion.a>
      )}
    </motion.article>
  );
};
