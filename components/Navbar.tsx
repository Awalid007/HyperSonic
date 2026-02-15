
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { View } from '../App';

interface Props {
  onNavigate: (view: View) => void;
  currentView: View;
}

import logo from '../assets/logo.png';

const Navbar: React.FC<Props> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Process', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Plans', href: '#plans' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      // Delay scrolling to allow render
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 py-4 ${isScrolled ? 'md:py-4' : 'md:py-8'
        }`}
      aria-label="Main Navigation"
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-[1.5rem] transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_-16px_rgba(0,0,0,0.1)] border border-white/50' : 'bg-transparent'
        }`}>
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 group">
          <img src={logo} alt="HyperSonic Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">HyperSonic</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button onClick={() => onNavigate('cases')} className={`text-sm font-bold transition-colors ${currentView === 'cases' ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}>Cases</button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => onNavigate('signin')} className={`text-sm font-bold transition-colors ${currentView === 'signin' ? 'text-indigo-600' : 'text-slate-900 hover:text-indigo-600'}`}>Sign In</button>
          <button
            onClick={() => onNavigate('booking')}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-xl hover:shadow-2xl hover:bg-slate-800 hover:scale-[1.02] active:scale-95"
          >
            Book a strategy call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden fixed inset-x-4 top-24 bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 z-[101]"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <button onClick={() => { onNavigate('cases'); setMobileMenuOpen(false); }} className="text-2xl font-bold text-left text-slate-900">Cases</button>
              <button onClick={() => { onNavigate('signin'); setMobileMenuOpen(false); }} className="text-2xl font-bold text-left text-slate-900">Sign In</button>
              <hr className="border-slate-100" />
              <button onClick={() => { onNavigate('booking'); setMobileMenuOpen(false); }} className="bg-indigo-600 text-white px-8 py-5 rounded-2xl font-bold w-full text-lg shadow-xl">
                Book a strategy call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
