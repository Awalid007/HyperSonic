
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is AI automation and how can it benefit my business?",
    answer: "AI automation involves using artificial intelligence tools to handle repetitive tasks. This leads to reduced human error, lower costs, and increased operational efficiency."
  },
  {
    question: "What services does your agency offer?",
    answer: "We offer end-to-end AI consulting, custom chatbot development, workflow automation, personalized outreach strategies, and automated content generation."
  },
  {
    question: "How long does it take to implement an AI automation solution?",
    answer: "Typical implementations range from 4 to 8 weeks, depending on the complexity of your current infrastructure and the scope of the automation."
  },
  {
    question: "What kind of support do you provide after deploying an AI automation solution?",
    answer: "We provide ongoing monitoring, periodic updates, performance reporting, and a dedicated account manager to ensure long-term success."
  },
  {
    question: "How much does an AI automation solution cost?",
    answer: "Costs vary based on requirements, but our transparent plans start at $2,499 per month for standard needs."
  }
];

const FAQItem: React.FC<{ faq: typeof faqs[0] }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
           <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 md:py-40 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="space-y-2">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
