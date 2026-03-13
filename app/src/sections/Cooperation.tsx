import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import {
  ShoppingCart,
  FileKey,
  HardHat,
  TrendingUp,
  Handshake,
  ArrowRight,
} from 'lucide-react';

export default function Cooperation() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const models = [
    { icon: ShoppingCart, key: 0, color: 'var(--cyan)' },
    { icon: FileKey, key: 1, color: 'var(--purple)' },
    { icon: HardHat, key: 2, color: 'var(--orange)' },
    { icon: TrendingUp, key: 3, color: 'var(--blue)' },
    { icon: Handshake, key: 4, color: 'var(--cyan)' },
  ];

  return (
    <section
      id="cooperation"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
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
            <span className="text-[var(--blue)] text-sm uppercase tracking-widest mb-4 block">
              Partnership
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {t('cooperation.title')}
            </h2>
          </motion.div>

          {/* Models */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {models.map((model, index) => {
              const title = t(`cooperation.models.${model.key}.title`);
              const desc = t(`cooperation.models.${model.key}.desc`);
              
              return (
                <motion.div
                  key={model.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group"
                >
                  <motion.div
                    className="relative h-full p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    {/* Number */}
                    <div
                      className="absolute -top-4 -right-4 text-8xl font-bold opacity-5"
                      style={{ color: model.color }}
                    >
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${model.color}15` }}
                    >
                      <model.icon
                        className="w-6 h-6"
                        style={{ color: model.color }}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="relative text-lg font-semibold text-white mb-2">
                      {title}
                    </h3>
                    <p className="relative text-white/50 text-sm">
                      {desc}
                    </p>

                    {/* Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight
                        className="w-5 h-5"
                        style={{ color: model.color }}
                      />
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
