
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Listen & Understand',
    description: 'We don\'t start with code. We start with you. We sit down with your team to uncover the friction points in your daily operations that AI can truly resolve.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: 'bg-indigo-50',
    borderColor: 'border-indigo-100'
  },
  {
    number: '02',
    title: 'Design for Humans',
    description: 'Technology should be invisible. We design intuitive interfaces and workflows that feel like a natural extension of your team, not a complicated new tool.',
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    color: 'bg-purple-50',
    borderColor: 'border-purple-100'
  },
  {
    number: '03',
    title: 'Seamless Integration',
    description: 'Our launch process is hands-on. We work side-by-side with your staff to ensure adoption is smooth, and that the value is felt from day one.',
    icon: (
      <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-100'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-48 bg-white relative overflow-hidden" aria-label="Our Planning Process">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold tracking-tight mb-6"
          >
            OUR BLUEPRINT
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">How We <span className="gradient-text">Plan Your Success</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            AI is complex, but our partnership isn't. We follow a simple, human-focused 
            path to digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative group p-10 rounded-[3rem] border ${step.borderColor} ${step.color} transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-8 p-6 bg-white rounded-3xl w-max shadow-sm border border-white group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <div className="absolute top-10 right-10 text-5xl font-black text-slate-200/50 group-hover:text-indigo-600/10 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>
                <div className="mt-auto pt-8 flex items-center gap-3 text-indigo-600 font-bold group-hover:gap-5 transition-all cursor-pointer">
                  Learn about this stage
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Connector Line (Desktop Only) */}
        <div className="hidden lg:block absolute top-[60%] left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-indigo-100 to-transparent -z-10"></div>
      </div>
    </section>
  );
};

export default Process;
