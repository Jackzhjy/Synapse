import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Atom,
  Brain,
  Building2,
  Zap,
  Pickaxe,
  Wheat,
  Droplets,
  Factory,
  Bot,
  Shield,
  Briefcase,
  Users,
  Settings,
  ChevronRight,
} from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTier, setActiveTier] = useState(0);

  const tier1Items = [
    { icon: Cloud, text: t('services.tiers.tier1.items.0') },
    { icon: Atom, text: t('services.tiers.tier1.items.1') },
    { icon: Brain, text: t('services.tiers.tier1.items.2') },
    { icon: Bot, text: t('services.tiers.tier1.items.3') },
  ];

  const tier2Categories = [
    { key: 'city', icon: Building2 },
    { key: 'energy', icon: Zap },
    { key: 'mining', icon: Pickaxe },
    { key: 'agriculture', icon: Wheat },
    { key: 'water', icon: Droplets },
    { key: 'manufacturing', icon: Factory },
    { key: 'robotics', icon: Bot },
  ];

  const tier3Items = [
    { icon: Briefcase, text: t('services.tiers.tier3.items.0') },
    { icon: Users, text: t('services.tiers.tier3.items.1') },
    { icon: Shield, text: t('services.tiers.tier3.items.2') },
    { icon: Settings, text: t('services.tiers.tier3.items.3') },
  ];

  const tiers = [
    {
      title: t('services.tiers.tier1.title'),
      subtitle: t('services.tiers.tier1.subtitle'),
      color: 'var(--cyan)',
      items: tier1Items,
    },
    {
      title: t('services.tiers.tier2.title'),
      subtitle: t('services.tiers.tier2.subtitle'),
      color: 'var(--purple)',
      categories: tier2Categories,
    },
    {
      title: t('services.tiers.tier3.title'),
      subtitle: t('services.tiers.tier3.subtitle'),
      color: 'var(--orange)',
      items: tier3Items,
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--purple)]/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--cyan)]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <span className="text-[var(--purple)] text-sm uppercase tracking-widest mb-4 block">
              Our Ecosystem
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {t('services.title')}
            </h2>
          </motion.div>

          {/* Tier Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {tiers.map((tier, index) => (
              <motion.button
                key={tier.title}
                onClick={() => setActiveTier(index)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTier === index
                    ? 'text-black'
                    : 'text-white/70 hover:text-white bg-white/5'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTier === index && (
                  <motion.div
                    layoutId="activeTier"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: tier.color }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tier.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tier Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[400px]"
            >
              <div className="text-center mb-10">
                <p className="text-white/60">{tiers[activeTier].subtitle}</p>
              </div>

              {/* Tier 1 & 3 - Grid Layout */}
              {(activeTier === 0 || activeTier === 2) && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tiers[activeTier].items?.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${tiers[activeTier].color}15` }}
                      >
                        <item.icon
                          className="w-7 h-7"
                          style={{ color: tiers[activeTier].color }}
                        />
                      </div>
                      <p className="text-white/80 text-sm">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Tier 2 - Categories Grid */}
              {activeTier === 1 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {tier2Categories.map((cat, index) => {
                    const items = t(`services.tiers.tier2.categories.${cat.key}.items`, { returnObjects: true }) as string[];
                    return (
                      <motion.div
                        key={cat.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[var(--purple)]/30 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-[var(--purple)]/15 flex items-center justify-center">
                            <cat.icon className="w-5 h-5 text-[var(--purple)]" />
                          </div>
                          <h4 className="text-white font-medium">
                            {t(`services.tiers.tier2.categories.${cat.key}.title`)}
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {items.slice(0, 4).map((item, i) => (
                            <li
                              key={i}
                              className="text-white/50 text-sm flex items-center gap-2"
                            >
                              <ChevronRight className="w-3 h-3 text-[var(--purple)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
