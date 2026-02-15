
import React from 'react';
import { motion } from 'framer-motion';
import { View } from '../App';

interface Props {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-40 px-4 overflow-hidden" aria-label="Hero Section">
      {/* Dynamic Background Blobs */}
      <div className="blob w-[500px] h-[500px] bg-indigo-100/40 -top-20 -left-20" aria-hidden="true"></div>
      <div className="blob w-[400px] h-[400px] bg-purple-100/40 bottom-0 -right-20" style={{ animationDelay: '-5s' }} aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 text-sm font-semibold text-indigo-600 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Trusted by 400+ Forward-Thinking Teams
          </span>
        </motion.div>

        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8"
          >
            We build the <span className="gradient-text italic">future</span> <br /> 
            so you can focus on the <span className="underline decoration-indigo-200 underline-offset-8">present</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            HyperSonic isn't just an agency; we're your partner in growth. We deploy 
            human-centric AI that works with you, not just for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => onNavigate('journey')}
              className="group w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-2xl hover:scale-[1.02] active:scale-95"
            >
              Start Your Automation Journey
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <button 
              onClick={() => onNavigate('cases')}
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-600 rounded-2xl font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all active:scale-95"
            >
              View Case Studies
            </button>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 w-full relative group"
        >
          <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] -z-10 group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
          <div className="rounded-[2.5rem] border border-white/50 bg-white/40 backdrop-blur-md p-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            <div className="rounded-[1.8rem] overflow-hidden border border-slate-200 shadow-inner bg-white aspect-[16/9] md:aspect-[21/9] flex flex-col">
              <div className="h-10 bg-slate-50 border-b flex items-center px-4 gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="ml-4 flex-1 h-5 bg-slate-100 rounded-lg max-w-xs"></div>
              </div>
              <div className="flex-1 p-8 grid grid-cols-12 gap-6">
                <div className="col-span-3 space-y-4">
                  <div className="h-32 bg-indigo-50 rounded-2xl animate-pulse"></div>
                  <div className="h-8 bg-slate-50 rounded-lg"></div>
                  <div className="h-8 bg-slate-50 rounded-lg"></div>
                </div>
                <div className="col-span-9 flex flex-col gap-6">
                  <div className="h-16 bg-slate-50 rounded-2xl flex items-center px-6 justify-between">
                     <div className="w-40 h-4 bg-slate-200 rounded-full"></div>
                     <div className="w-20 h-8 bg-indigo-100 rounded-lg"></div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-2xl border border-slate-100"></div>
                    <div className="bg-slate-50 rounded-2xl border border-slate-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
