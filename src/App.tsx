
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
// import StudioEngine from './components/StudioEngine';
import Features from './components/Features';
import Footer from './components/Footer';
import BeReady from './components/BeReady';
import Values from './components/Values';
import WorkingMechanism from './components/WorkingMechanism';

function App() {
  // Simple intersection observer to add reveal classes on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#0CC1E0]/30 selection:text-slate-900">
      <Navbar />

      <main>
        <div className="reveal">
          <Hero />
        </div>

        <div className="reveal">
          <Values />
        </div>

        <div className="reveal">
          <WorkingMechanism />
        </div>

        <div className="reveal">
          <Marketplace />
        </div>

        <div className="reveal">
          <Features />
        </div>

        <div className="reveal">
          <BeReady />
        </div>

        {/* <div className="reveal">
          <StudioEngine />
        </div> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
