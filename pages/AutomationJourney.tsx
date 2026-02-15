
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onBack: () => void;
}

const steps = [
  {
    id: 1,
    title: "What's your focus?",
    subtitle: "Select the area where AI can make the most impact today.",
    options: ["Sales Automation", "Customer Support", "Content Creation", "Data Analysis"]
  },
  {
    id: 2,
    title: "Current Workflow",
    subtitle: "How are you handling these tasks currently?",
    options: ["Fully Manual", "Basic Scripts", "Third-party Tools", "Hybrid Approach"]
  },
  {
    id: 3,
    title: "Desired Impact",
    subtitle: "What is your primary goal for this automation?",
    options: ["Save Time", "Reduce Cost", "Increase Quality", "Scale Operations"]
  }
];

const AutomationJourney: React.FC<Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    const newSelections = [...selections];
    newSelections[currentStep] = option;
    setSelections(newSelections);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(steps.length); // Completion step
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          Exit Journey
        </button>

        <AnimatePresence mode="wait">
          {currentStep < steps.length ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100"
            >
              <div className="mb-12">
                <div className="flex gap-2 mb-6">
                  {steps.map((_, i) => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= currentStep ? 'bg-indigo-600' : 'bg-slate-100'}`}></div>
                  ))}
                </div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">{steps[currentStep].title}</h1>
                <p className="text-lg text-slate-500 font-medium">{steps[currentStep].subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="p-6 text-left rounded-2xl border-2 border-slate-100 hover:border-indigo-600 hover:bg-indigo-50/30 transition-all font-bold text-slate-700"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] p-12 shadow-2xl border-2 border-indigo-100 text-center"
            >
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-6">Your Future is Ready</h1>
              <p className="text-lg text-slate-500 font-medium mb-10">
                We've analyzed your responses. Our experts are ready to build a <span className="text-indigo-600 font-bold">{selections[0]}</span> engine 
                that will <span className="text-indigo-600 font-bold">{selections[2]}</span> for your team.
              </p>
              <button 
                onClick={onBack}
                className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-indigo-700 active:scale-95 transition-all"
              >
                Finalize Strategy Call
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AutomationJourney;
