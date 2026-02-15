
import React from 'react';
import { motion } from 'framer-motion';

const benefitList = [
  { title: 'Increased Efficiency', description: 'We streamline processes with AI automation, reducing manual effort and saving time.', icon: '⚡' },
  { title: 'Cost Savings', description: 'By automating tasks, we lower operational costs and reallocate resources effectively.', icon: '💰' },
  { title: 'Personalization', description: 'We deliver personalized experiences, enhancing customer satisfaction.', icon: '👤' },
  { title: 'Scalability', description: 'Our AI Automation solutions allow us to scale operations easily to meet growing demands.', icon: '📈' },
  { title: 'Faster Decision-Making', description: 'We analyze data swiftly, providing actionable insights for faster decision-making.', icon: '🚀' },
  { title: 'Adaptive Solutions', description: 'We adapt to changing circumstances, ensuring our solutions remain effective.', icon: '🔧' }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 md:py-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase mb-4 block">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience the <span className="gradient-text">AI Advantage</span></h2>
          <p className="text-slate-600">Discover the advantages of partnering with our AI automation agency</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-slate-100 hover:border-indigo-100 transition-all shadow-sm hover:shadow-xl group"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
