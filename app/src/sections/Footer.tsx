import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.solutions'), href: '#solutions' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0a] to-black" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/logo.png"
                  alt="Synapse"
                  className="h-10 w-auto object-contain mb-6"
                />
                <p className="text-white/60 max-w-md mb-6">
                  {t('footer.tagline')}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-white font-semibold mb-6">Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/60">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Global Headquarters</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/60">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span>contact@synapse.global</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/60">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>+86 400-XXX-XXXX</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm">
                {t('footer.copyright')}
              </p>
              <div className="flex gap-6 text-sm text-white/40">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
