import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Rocket, Target, Cpu, TrendingUp } from 'lucide-react';

export default function WhyUs() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const capabilities = [
    { icon: Rocket, text: t('whyUs.capabilities.items.0') },
    { icon: Target, text: t('whyUs.capabilities.items.1') },
    { icon: Cpu, text: t('whyUs.capabilities.items.2') },
    { icon: TrendingUp, text: t('whyUs.capabilities.items.3') },
  ];

  return (
    <section
      id="whyus"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('whyUs.title')}
            </h2>
          </motion.div>

          {/* Phases */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Initial Phase */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--cyan)]/10 to-transparent border border-[var(--cyan)]/20"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--cyan)] to-transparent rounded-t-2xl" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--cyan)]/20 flex items-center justify-center">
                  <span className="text-[var(--cyan)] font-bold">01</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {t('whyUs.phases.initial.title')}
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                {t('whyUs.phases.initial.desc')}
              </p>
            </motion.div>

            {/* Long-term Phase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--purple)]/10 to-transparent border border-[var(--purple)]/20"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--purple)] to-transparent rounded-t-2xl" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--purple)]/20 flex items-center justify-center">
                  <span className="text-[var(--purple)] font-bold">02</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {t('whyUs.phases.longterm.title')}
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                {t('whyUs.phases.longterm.desc')}
              </p>
            </motion.div>
          </div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-semibold text-white text-center mb-10">
              {t('whyUs.capabilities.title')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="group flex items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--cyan)]/20 to-[var(--purple)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <cap.icon className="w-6 h-6 text-[var(--cyan)]" />
                  </div>
                  <span className="text-white/80 text-sm">{cap.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
