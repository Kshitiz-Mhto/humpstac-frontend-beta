import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/' + targetId);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'glass border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center cursor-pointer">
            <img
              src="/assets/humpstac_logo_bgwhite.png"
              alt="Logo"
              className="w-10 h-10 md:w-16 md:h-16 rounded-xl object-contain scale-125 md:scale-120"
            />

            <span className="text-4xl font-bold tracking-tight text-slate-900">
              humpStac
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-600">
          <a href="#product" onClick={(e) => handleNavClick(e, '#product')} className="hover:text-[#6366F1] transition-colors">Product</a>
          <a href="#marketplace" onClick={(e) => handleNavClick(e, '#marketplace')} className="hover:text-[#6366F1] transition-colors">Marketplace</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-[#6366F1] transition-colors">Pricing</a>
          <a href="#resources" onClick={(e) => handleNavClick(e, '#resources')} className="hover:text-[#6366F1] transition-colors">Resources</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/buyer-waitlist">
            <button className="bg-[#6366F1] text-white px-5 py-2.5 rounded-xl text-sm font-semibold 
              border-0 outline-none focus:outline-none focus:ring-0 ring-0
              hover:shadow-lg hover:shadow-[#6366F1]/20 transition-all active:scale-95">
              Book a demo
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-6 animate-fade-in">
          <a href="#product" onClick={(e) => handleNavClick(e, '#product')} className="text-xl font-medium text-slate-600 hover:text-[#6366F1]">Product</a>
          <a href="#marketplace" onClick={(e) => handleNavClick(e, '#marketplace')} className="text-xl font-medium text-slate-600 hover:text-[#6366F1]">Marketplace</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="text-xl font-medium text-slate-600 hover:text-[#6366F1]">Pricing</a>
          <a href="#resources" onClick={(e) => handleNavClick(e, '#resources')} className="text-xl font-medium text-slate-600 hover:text-[#6366F1]">Resources</a>
          <div className="pt-4 border-t border-slate-100">
            <Link to="/buyer-waitlist" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-[#6366F1] text-white px-5 py-3 rounded-xl text-lg font-semibold 
                border-0 outline-none focus:outline-none focus:ring-0 ring-0
                hover:shadow-lg hover:shadow-[#6366F1]/20 transition-all active:scale-95">
                Book a demo
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
