
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'LOGOIPSUM', 'L O G O', 'logoipsum*', 'L O G O I P S U M', 'logoipsum^', '∞'
];

const LogoCloud: React.FC = () => {
  return (
    <section className="py-12 md:py-20 border-y border-slate-100 bg-white/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-slate-900"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
