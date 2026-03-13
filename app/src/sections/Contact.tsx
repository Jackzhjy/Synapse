import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { Send, User, Mail, Building2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const inputClasses = `
    w-full px-4 py-4 pl-12
    bg-white/5 border border-white/10 rounded-xl
    text-white placeholder:text-white/40
    focus:outline-none focus:border-[var(--cyan)] focus:ring-1 focus:ring-[var(--cyan)]
    transition-all
  `;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[var(--cyan)]/10 via-transparent to-transparent rounded-full blur-3xl" />
      
      {/* Animated Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/5"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              left: '50%',
              top: '50%',
              marginLeft: `${-(400 + i * 200) / 2}px`,
              marginTop: `${-(400 + i * 200) / 2}px`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-white/60 text-lg">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="relative p-8 lg:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[var(--cyan)]/5 to-transparent pointer-events-none" />

            <div className="relative grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder={t('contact.form.name')}
                  className={inputClasses}
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  placeholder={t('contact.form.email')}
                  className={inputClasses}
                  required
                />
              </div>

              {/* Company */}
              <div className="relative sm:col-span-2">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder={t('contact.form.company')}
                  className={inputClasses}
                />
              </div>

              {/* Message */}
              <div className="relative sm:col-span-2">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                <textarea
                  placeholder={t('contact.form.message')}
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  required
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`
                    w-full py-4 px-8 rounded-xl font-medium text-lg
                    flex items-center justify-center gap-3
                    transition-all duration-300
                    ${isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-black hover:bg-[var(--cyan)]'
                    }
                    disabled:opacity-70
                  `}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.99 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : isSubmitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.form.submit')}</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
