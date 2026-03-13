import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import {
  Plane,
  Battery,
  Car,
  Bike,
  Recycle,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

export default function Solutions() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const productionLines = [
    { icon: Plane, key: 0, color: 'var(--cyan)' },
    { icon: Battery, key: 1, color: 'var(--purple)' },
    { icon: Car, key: 2, color: 'var(--orange)' },
    { icon: Bike, key: 3, color: 'var(--blue)' },
    { icon: Recycle, key: 4, color: 'var(--cyan)' },
    { icon: Sparkles, key: 5, color: 'var(--purple)' },
  ];

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--orange)]/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[var(--cyan)]/5 rounded-full blur-[200px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <span className="text-[var(--orange)] text-sm uppercase tracking-widest mb-4 block">
              Production Export
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {t('production.title')}
            </h2>
          </motion.div>

          {/* Production Lines Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionLines.map((line, index) => {
              const name = t(`production.lines.${line.key}.name`);
              const desc = t(`production.lines.${line.key}.desc`);
              
              return (
                <motion.div
                  key={line.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <motion.div
                    className="group relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden cursor-pointer"
                    whileHover={{ y: -5 }}
                  >
                    {/* Hover Background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${line.color}10, transparent)`,
                      }}
                    />
                    
                    {/* Corner Accent */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(225deg, ${line.color}20, transparent 60%)`,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${line.color}15` }}
                    >
                      <line.icon
                        className="w-8 h-8"
                        style={{ color: line.color }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                      {name}
                    </h3>
                    <p className="relative text-white/60 text-sm leading-relaxed mb-4">
                      {desc}
                    </p>

                    {/* Learn More */}
                    <div className="relative flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: line.color }}>
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
