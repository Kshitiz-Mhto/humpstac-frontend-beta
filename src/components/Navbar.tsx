
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/">
          <div className="flex items-center cursor-pointer">
            <img
              src="/assets/logo_only_white-removebg.png"
              alt="Logo"
              className="w-16 h-16 rounded-xl object-contain scale-150"
            />

            <span className="text-4xl font-bold tracking-tight text-slate-900">
              humpStac
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-600">
          <a href="#product" className="hover:text-[#0CC1E0] transition-colors">Product</a>
          <a href="#marketplace" className="hover:text-[#0CC1E0] transition-colors">Marketplace</a>
          <a href="#pricing" className="hover:text-[#0CC1E0] transition-colors">Pricing</a>
          <a href="#resources" className="hover:text-[#0CC1E0] transition-colors">Resources</a>
          <button className="hover:text-[#0CC1E0] transition-colors border-0 outline-none focus:outline-none focus:ring-0 ring-0">
            Login
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#0CC1E0] text-white px-5 py-2.5 rounded-xl text-sm font-semibold 
            border-0 outline-none focus:outline-none focus:ring-0 ring-0
            hover:shadow-lg hover:shadow-[#0CC1E0]/20 transition-all active:scale-95">
            Book a demo
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
