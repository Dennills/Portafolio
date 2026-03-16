// src/sections/Hero.tsx

import { motion } from 'framer-motion';
import { SkillBadge } from '../components/SkillBadge';

const mainSkills = ['Python', 'SQL', 'Power BI', 'React', 'Java', 'Excel'];

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="font-serif text-5xl md:text-7xl text-text-primary mb-4">
                Dennis Aguilar
              </h1>

              <p className="text-2xl md:text-3xl text-accent mb-6">
                Data · Software Development · AI 
              </p>

              <p className="text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                Estudiante de Ingeniería Informática (7.º ciclo, quinto superior) 
                con sólida formación en data, software e inteligencia artificial.
                Transformo información en soluciones escalables, integrando el análisis de datos
                y el desarrollo de software para automatizar procesos y generar impacto.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono text-text-subtle mb-4">
                Skills principales
              </h3>
              <div className="flex flex-wrap gap-2">
                {mainSkills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-[560px] overflow-visible">
              {/* Hexagonos */}
              {[
                { top: '-4%', left: '-6%', w: 92, duration: 44 },
                { top: '2%', right: '-4%', w: 88, duration: 48 },
                { top: '34%', left: '6%', w: 82, duration: 42 },
                { bottom: '18%', right: '10%', w: 86, duration: 46 },
                { bottom: '-6%', left: '18%', w: 90, duration: 50 },
              ].map((pos, i) => (
                <motion.div
                  key={`hex-${i}`}
                  animate={{ x: [0, 30, -22, 0], y: [0, -22, 18, 0], rotate: [0, 360] }}
                  transition={{ duration: pos.duration, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute"
                  style={{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right, width: pos.w, height: pos.w }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,8 88,28 88,72 50,92 12,72 12,28" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-accent/38" />
                  </svg>
                </motion.div>
              ))}

              {/* Cuadrados rotados */}
              {[
                { top: '12%', left: '24%', w: 68, duration: 45, delay: 0 },
                { top: '26%', right: '22%', w: 72, duration: 41, delay: 0.7 },
                { bottom: '28%', left: '38%', w: 64, duration: 47, delay: 1.2 },
                { bottom: '8%', right: '34%', w: 66, duration: 43, delay: 1.6 },
              ].map((pos, i) => (
                <motion.div
                  key={`sq-${i}`}
                  animate={{ x: [0, -26, 20, 0], y: [0, 18, -14, 0], rotate: [45, 405] }}
                  transition={{ duration: pos.duration, repeat: Infinity, ease: 'easeInOut', delay: pos.delay }}
                  className="absolute border border-green/35 rotate-45"
                  style={{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right, width: pos.w, height: pos.w }}
                >
                  <div className="absolute inset-2 border border-green/20"></div>
                </motion.div>
              ))}

              {/* Triangulos */}
              {[
                { top: '6%', left: '52%', w: 72, duration: 49 },
                { top: '46%', left: '18%', w: 66, duration: 44 },
                { bottom: '12%', left: '56%', w: 70, duration: 52 },
                { bottom: '32%', right: '-2%', w: 74, duration: 46 },
              ].map((pos, i) => (
                <motion.div
                  key={`tri-${i}`}
                  animate={{ x: [0, 28, -20, 0], y: [0, -20, 14, 0], rotate: [0, -360] }}
                  transition={{ duration: pos.duration, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute"
                  style={{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right, width: pos.w, height: pos.w }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,12 90,80 10,80" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-accent/30" />
                  </svg>
                </motion.div>
              ))}

              {/* Rombos */}
              {[
                { top: '18%', left: '2%', w: 58, duration: 48 },
                { top: '58%', right: '22%', w: 54, duration: 50 },
                { bottom: '20%', left: '-2%', w: 60, duration: 46 },
                { bottom: '2%', right: '12%', w: 56, duration: 52 },
              ].map((pos, i) => (
                <motion.div
                  key={`rhom-${i}`}
                  animate={{ x: [0, -22, 24, 0], y: [0, 16, -18, 0], rotate: [0, 360] }}
                  transition={{ duration: pos.duration, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute"
                  style={{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right, width: pos.w, height: pos.w }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-green/38" />
                  </svg>
                </motion.div>
              ))}

              {/* Pentagonos */}
              {[
                { top: '-2%', left: '40%', w: 64, duration: 47 },
                { top: '38%', right: '4%', w: 60, duration: 53 },
                { bottom: '6%', right: '44%', w: 62, duration: 45 },
                { bottom: '40%', left: '28%', w: 58, duration: 49 },
              ].map((pos, i) => (
                <motion.div
                  key={`pent-${i}`}
                  animate={{ x: [0, 24, -16, 0], y: [0, -16, 12, 0], rotate: [0, 360] }}
                  transition={{ duration: pos.duration, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute"
                  style={{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right, width: pos.w, height: pos.w }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,10 91,35 73,88 27,88 9,35" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/34" />
                  </svg>
                </motion.div>
              ))}

              {/* Octagonos */}
              {[
                { top: '22%', right: '42%', w: 56, duration: 54 },
                { top: '70%', right: '2%', w: 60, duration: 50 },
                { bottom: '28%', left: '54%', w: 58, duration: 48 },
              ].map((pos, i) => (
                <motion.div
                  key={`oct-${i}`}
                  animate={{ x: [0, -20, 24, 0], y: [0, -14, 16, 0], rotate: [0, -360] }}
                  transition={{ duration: pos.duration, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute"
                  style={{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right, width: pos.w, height: pos.w }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="35,6 65,6 94,35 94,65 65,94 35,94 6,65 6,35" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-accent/30" />
                  </svg>
                </motion.div>
              ))}

              {/* Microfiguras */}
              {[
                { top: '8%', left: '14%' }, { top: '14%', left: '72%' }, { top: '24%', left: '34%' },
                { top: '34%', left: '86%' }, { top: '42%', left: '8%' }, { top: '52%', left: '46%' },
                { top: '64%', left: '26%' }, { top: '72%', left: '78%' }, { top: '84%', left: '56%' },
              ].map((point, i) => (
                <motion.div
                  key={`dot-${i}`}
                  animate={{
                    y: [0, -12 + (i % 3) * 6, 10 - (i % 2) * 8, 0],
                    x: [0, 16 - (i % 4) * 8, -12 + (i % 3) * 10, 0],
                    opacity: [0.12, 0.36, 0.12],
                  }}
                  transition={{
                    duration: 26 + i * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 border border-accent/35 rotate-45"
                  style={{ top: point.top, left: point.left }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
