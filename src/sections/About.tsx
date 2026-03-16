// src/sections/About.tsx

import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { TimelineItem } from '../components/TimelineItem';
import { TechMarquee } from '../components/TechMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { timeline } from '../data/timeline';

export const About = () => {
  const { ref, ...motionProps } = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-bg-surface">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} {...motionProps}>
          <div className="grid md:grid-cols-3 gap-12 mb-16 items-start">
            <div className="md:col-span-2 space-y-6">
              <SectionTitle>Sobre mí</SectionTitle>

              <p className="text-lg text-text-muted leading-relaxed">
                Soy una persona curiosa, colaborativa y a la que le encanta construir cosas desde cero.
                Me apasiona encontrar el lado lógico y ordenado de los problemas complejos. 
                Esa mentalidad me ha llevado a especializarme en la eficiencia a través de la tecnología.
              </p>

              <p className="text-lg text-text-muted leading-relaxed">
                Desarrollo sistemas  inteligentes hasta la automatización de reportes para reducir tiempos de trabajo
              </p>

              <p className="text-lg text-text-muted leading-relaxed">
                Disfruto mucho compartir lo que aprendo, 
                lo que me motiva a participar en talleres técnicos dentro de la IEEE Computer Society. 
                Donde  aplico mis conocimientos en Data, Desarrollo de Software, Inteligencia Artificial
                y automatización para generar un impacto directo en el resultado.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-mono text-text-subtle mb-4">
                Trayectoria
              </h3>
              {timeline.map((entry) => (
                <TimelineItem key={entry.id} entry={entry} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <TechMarquee />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
