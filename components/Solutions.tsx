
import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Workflows that Breathe',
    tag: 'EFFICIENCY',
    description: 'We don\'t just automate tasks; we optimize them. Our AI workflows learn from your data to constantly improve speed and accuracy.',
    icon: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-8">
        <div className="relative w-full h-full flex flex-col gap-4">
          <div className="w-full h-12 bg-white rounded-xl shadow-sm border border-indigo-100 animate-pulse"></div>
          <div className="w-3/4 h-12 bg-white rounded-xl shadow-sm border border-indigo-100 ml-auto flex items-center px-4">
             <div className="w-full h-2 bg-indigo-100 rounded-full"></div>
          </div>
          <div className="w-full h-12 bg-indigo-600 rounded-xl shadow-lg flex items-center justify-center">
             <div className="w-32 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Human-Like Support',
    tag: 'EXPERIENCE',
    description: 'Chatbots shouldn\'t sound like robots. We build conversational agents with personality, nuance, and true understanding of your customer\'s needs.',
    icon: (
      <div className="w-full h-full bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-12">
        <div className="w-full space-y-4">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
              <div className="p-4 bg-white rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-[10px] font-bold">Hello! How can I help?</div>
           </div>
           <div className="flex flex-row-reverse items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200"></div>
              <div className="p-4 bg-slate-900 text-white rounded-2xl rounded-tr-none shadow-sm text-[10px] font-bold">I need help with my plan.</div>
           </div>
        </div>
      </div>
    )
  },
  {
    title: 'Intelligent Outreach',
    tag: 'GROWTH',
    description: 'Cold outreach that feels warm. We use AI to research your prospects at scale, creating messages that are genuinely relevant to their business.',
    icon: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center p-8">
         <div className="w-full bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100"></div>
              <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-slate-50 rounded-full"></div>
              <div className="h-2 w-full bg-slate-50 rounded-full"></div>
              <div className="h-2 w-2/3 bg-slate-50 rounded-full"></div>
            </div>
            <div className="mt-6 flex gap-2">
              <div className="h-6 w-16 bg-emerald-500 rounded-lg"></div>
              <div className="h-6 w-16 bg-slate-100 rounded-lg"></div>
            </div>
         </div>
      </div>
    )
  },
  {
    title: 'Creative Co-Pilot',
    tag: 'CONTENT',
    description: 'Never start from a blank page again. Our content automations generate high-quality drafts, visuals, and copy tailored to your brand voice.',
    icon: (
      <div className="w-full h-full bg-gradient-to-br from-amber-50 to-white flex items-center justify-center p-8">
        <div className="w-full h-full border-4 border-dashed border-amber-200 rounded-[2rem] flex flex-col items-center justify-center gap-4">
           <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center rotate-3">
             <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
           </div>
           <div className="text-[10px] font-black tracking-widest text-amber-500">GENERATING...</div>
        </div>
      </div>
    )
  }
];

const Solutions: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-48 bg-white relative overflow-hidden" aria-label="Our AI Solutions">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-indigo-600 text-sm font-black tracking-[0.2em] mb-4 block uppercase">SERVICES</span>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">Human Intelligence, <span className="gradient-text">Augmented.</span></h2>
          </div>
          <p className="text-lg text-slate-500 font-medium max-w-sm">
            We don't replace people. We give them superpowers. Discover our core pillars of transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-1 bg-gradient-to-br from-slate-100 to-white rounded-[3rem] transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]"
            >
              <div className="bg-white rounded-[2.8rem] p-10 h-full flex flex-col">
                <div className="h-72 mb-10 overflow-hidden rounded-[2rem] border border-slate-50">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-black tracking-widest rounded-lg mb-4">{item.tag}</span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
                <div className="mt-10 pt-10 border-t border-slate-50">
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Dive Deeper
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
