
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onBack: () => void;
}

const SignIn: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-6">
              <div className="w-8 h-2 bg-white rounded-full"></div>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500 font-medium">Continue your automation journey</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 px-1">Email Address</label>
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2 px-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">Forgot?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium"
              />
            </div>

            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 shadow-xl transition-all active:scale-[0.98]">
              Sign In to Dashboard
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-50 text-center">
            <p className="text-slate-400 text-sm font-medium">
              Don't have an account yet? <br />
              <button onClick={onBack} className="text-indigo-600 font-bold hover:underline mt-2">Start with a Strategy Call</button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;
