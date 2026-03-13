import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Globe, Truck, HandshakeIcon } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Globe,
      title: t('about.features.local.title'),
      description: t('about.features.local.desc'),
      color: 'var(--cyan)',
    },
    {
      icon: Truck,
      title: t('about.features.delivery.title'),
      description: t('about.features.delivery.desc'),
      color: 'var(--purple)',
    },
    {
      icon: HandshakeIcon,
      title: t('about.features.flexible.title'),
      description: t('about.features.flexible.desc'),
      color: 'var(--orange)',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--cyan)]/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[var(--cyan)] text-sm uppercase tracking-widest mb-4 block">
                {t('about.title')}
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {t('about.subtitle')}
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg text-white/70 leading-relaxed">
                {t('about.description')}
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  className="group relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${feature.color}10, transparent 70%)`,
                    }}
                  />
                  
                  {/* Icon */}
                  <div
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon
                      className="w-7 h-7"
                      style={{ color: feature.color }}
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="relative text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="relative text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Bottom Line */}
                  <div
                    className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
