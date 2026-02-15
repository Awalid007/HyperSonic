
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const plans = [
    {
      name: 'The Starter',
      subtitle: 'For businesses taking their first AI steps',
      price: billingCycle === 'monthly' ? '$2,499' : '$1,999',
      features: [
        'Discovery & Strategy Session',
        '1 Custom AI Workflow',
        'Standard Integration Suite',
        'Basic Performance Dashboard',
        '48h Email Support'
      ],
      cta: 'Start Small',
      featured: false
    },
    {
      name: 'The Partner',
      subtitle: 'For teams ready to scale their impact',
      price: billingCycle === 'monthly' ? '$5,499' : '$4,599',
      features: [
        'Everything in Starter+',
        '3 Advanced AI Automations',
        'Custom Chatbot Deployment',
        'Full System Audit',
        'Priority Slack Support',
        'Monthly ROI Reporting'
      ],
      cta: 'Scale Efficiently',
      featured: true
    },
    {
      name: 'The Enterprise',
      subtitle: 'Bespoke solutions for global reach',
      price: 'Custom',
      features: [
        'Dedicated AI Architect',
        'Unlimited Automations',
        'White-label Dashboards',
        'Custom Model Training',
        '24/7 Dedicated Support',
        'On-site Implementation'
      ],
      cta: 'Contact Sales',
      featured: false
    }
  ];

  return (
    <section id="plans" className="py-24 md:py-48 bg-slate-50 relative overflow-hidden" aria-label="Pricing Plans">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-4"
          >
            TRANSPARENT PRICING
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">Invest in <span className="gradient-text">Freedom</span></h2>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
              className="w-16 h-8 rounded-full bg-slate-200 p-1 transition-colors relative"
              aria-label={`Switch to ${billingCycle === 'monthly' ? 'annual' : 'monthly'} billing`}
            >
              <div className={`w-6 h-6 rounded-full bg-indigo-600 transition-all shadow-md ${billingCycle === 'annually' ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-bold ${billingCycle === 'annually' ? 'text-slate-900' : 'text-slate-400'}`}>
              Annually <span className="text-emerald-500 ml-1">(-20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 rounded-[3rem] transition-all duration-500 ${
                plan.featured 
                  ? 'bg-white shadow-[0_32px_80px_-16px_rgba(99,102,241,0.15)] border-2 border-indigo-100 scale-105 z-10' 
                  : 'bg-white/50 border border-slate-200 hover:shadow-xl'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold tracking-[0.2em] px-5 py-2 rounded-full shadow-lg">
                  BEST VALUE
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm font-medium mb-10 h-10">{plan.subtitle}</p>
              
              <div className="mb-10 flex items-baseline">
                <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-400 font-bold ml-2">/mo</span>}
              </div>

              <div className="space-y-5 mb-12">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-sm font-medium text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-95 ${
                plan.featured 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 hover:bg-indigo-700' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm font-medium italic">
            * All plans include a 30-day money-back satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
