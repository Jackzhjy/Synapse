import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import WhyUs from './sections/WhyUs';
import Services from './sections/Services';
import Solutions from './sections/Solutions';
import Cooperation from './sections/Cooperation';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  // Initialize smooth scroll behavior
  useEffect(() => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && ['zh', 'en', 'es'].includes(savedLang)) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <WhyUs />
          <Services />
          <Solutions />
          <Cooperation />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
