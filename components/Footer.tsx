
import React from 'react';
import { View } from '../App';

interface Props {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Final CTA */}
        <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center shadow-xl border border-slate-100 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to <span className="gradient-text">Transform Your Business</span>?</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">Schedule a consultation with our AI experts</p>
          <button 
            onClick={() => onNavigate('booking')}
            className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 mb-4"
          >
            Book a 15-min call
          </button>
          <p className="text-xs text-slate-400">It's 100% free</p>
        </div>

        {/* Links & Brand */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-slate-200 pb-12 mb-8">
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-1 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">HyperSonic</span>
          </button>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
             <button onClick={() => onNavigate('home')} className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Process</button>
             <button onClick={() => onNavigate('cases')} className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Cases</button>
             <button onClick={() => onNavigate('journey')} className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Journey</button>
             <button onClick={() => onNavigate('signin')} className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Account</button>
             <button onClick={() => onNavigate('booking')} className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">Booking</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-xs gap-6">
           <p>© Copyright 2024 HyperSonic</p>
           <p>Human-Centric Design by Hypersonic</p>
           <div className="flex items-center space-x-6">
              {['ln', 'tw', 'ig', 'fb'].map(social => (
                <a key={social} href="#" className="hover:text-indigo-600 transition-colors uppercase font-bold tracking-widest">{social}</a>
              ))}
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
