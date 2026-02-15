
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase mb-4 block">About</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-slate-900">Who We Are</h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10">
            We are <span className="font-bold text-slate-900">HyperSonic</span>, a leading AI Automation Agency dedicated to transforming businesses 
            with cutting-edge technology and innovative solutions. Our team is committed to driving efficiency 
            and growth for your business.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
            Learn more
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
