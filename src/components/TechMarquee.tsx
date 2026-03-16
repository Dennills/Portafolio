// src/components/TechMarquee.tsx

import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaReact, 
  FaAngular, 
  FaPython, 
  FaNode, 
  FaCss3Alt,
  FaJs 
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiPostgresql, 
  SiTailwindcss,
  SiTypescript,
  SiApachespark,
  SiPandas,
  SiDatabricks,
  SiGooglecloud
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { TbChartBar } from 'react-icons/tb';

interface TechItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

const row1: TechItem[] = [
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Angular', icon: FaAngular, color: '#dd0031' },
  { name: 'Python', icon: FaPython, color: '#3776ab' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
  { name: 'Node.js', icon: FaNode, color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Oracle SQL', icon: DiDatabase, color: '#f80000' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572b6' },
  { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
];

const row2: TechItem[] = [
  { name: 'Apache Spark', icon: SiApachespark, color: '#e25a1c' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'Power BI', icon: TbChartBar, color: '#f2c811' },
  { name: 'Databricks', icon: SiDatabricks, color: '#ff3621' },
  { name: 'GCP', icon: SiGooglecloud, color: '#4285f4' },
];

const MarqueeRow = ({ items, direction = 'left', duration = 40 }: { 
  items: TechItem[]; 
  direction?: 'left' | 'right'; 
  duration?: number;
}) => {
  const duplicatedItems = [...items, ...items];
  
  return (
    <div className="relative overflow-hidden py-4">
      {/* Máscara de degradado en los lados */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-surface to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-surface to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${index}`}
              className="group flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Icon 
                className="text-3xl text-text-subtle group-hover:text-[var(--tech-color)] transition-colors duration-300" 
                style={{ '--tech-color': tech.color } as React.CSSProperties}
              />
              <span className="text-sm font-mono text-text-muted group-hover:text-text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export const TechMarquee = () => {
  return (
    <div className="w-full space-y-2">
      <h2 className="font-serif text-3xl text-text-primary mb-8 text-center">
        Stack tecnológico
      </h2>
      <MarqueeRow items={row1} direction="left" duration={60} />
      <MarqueeRow items={row2} direction="right" duration={45} />
    </div>
  );
};
