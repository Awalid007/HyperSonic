
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "James Martinez",
    role: "Head of Sales",
    company: "MarketPro LLC",
    content: "Our sales conversion rates increased significantly thanks to Hypersonic's AI-driven lead scoring system.",
    avatar: "https://picsum.photos/seed/p1/100/100",
    rating: 5
  },
  {
    name: "Sarah Thompson",
    role: "COO",
    company: "Tech Solutions Inc.",
    content: "Hypersonic's AI chatbot drastically cut our response times and boosted customer satisfaction.",
    avatar: "https://picsum.photos/seed/p2/100/100",
    rating: 5
  },
  {
    name: "Emily Richards",
    role: "CFO",
    company: "FinancePro Inc.",
    content: "Hypersonic streamlined our invoicing process, saving us time and reducing errors effectively.",
    avatar: "https://picsum.photos/seed/p3/100/100",
    rating: 5
  },
  {
    name: "Michael Johnson",
    role: "CEO",
    company: "InnovateTech Corp",
    content: "Their personalized cold outreach system greatly improved our email response rates.",
    avatar: "https://picsum.photos/seed/p4/100/100",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-slate-50 rounded-3xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 italic leading-relaxed">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
