
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onBack: () => void;
}

const cases = [
  {
    title: "MarketPro's Lead Engine",
    category: "Sales Automation",
    stats: "240% ROI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Tech Solutions Support Bot",
    category: "Customer Experience",
    stats: "92% CSAT",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Content Scale for InnovateTech",
    category: "Creative Automation",
    stats: "5x Volume",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800",
    color: "from-orange-600 to-red-600"
  },
  {
    title: "Invoicing Flow for FinancePro",
    category: "Operations",
    stats: "0 Errors",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    color: "from-emerald-600 to-teal-600"
  }
];

const CaseStudies: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-indigo-600 font-black tracking-widest text-sm uppercase mb-4 block">PORTFOLIO</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">Proven <span className="gradient-text">Success</span> Stories</h1>
          </div>
          <p className="text-xl text-slate-500 font-medium max-w-sm">
            Real impact for real businesses. See how we've moved the needle using intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-80 mix-blend-multiply group-hover:opacity-90 transition-opacity`}></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                <span className="text-sm font-black tracking-widest uppercase mb-4 opacity-80">{item.category}</span>
                <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                <div className="flex items-center gap-6">
                  <div className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full font-bold text-lg">
                    {item.stats}
                  </div>
                  <button className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                    Full Case Study
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
