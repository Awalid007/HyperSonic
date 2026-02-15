
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  onBack: () => void;
}

const Booking: React.FC<Props> = ({ onBack }) => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white font-bold transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          Back to Site
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-400 font-black tracking-widest text-sm uppercase mb-4 block">SCHEDULING</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Book Your <span className="text-indigo-400">Strategy</span> Call</h1>
            <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">
              In 15 minutes, we'll map out your automation roadmap and identify 
              exactly where AI can save your team 20+ hours a week.
            </p>
            <div className="space-y-6">
              {[
                "Audit your current workflows",
                "Review automation possibilities",
                "Transparent project estimation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="font-bold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-10 text-slate-900 shadow-2xl"
          >
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6">Select a Day</h3>
              <div className="flex flex-wrap gap-3">
                {days.map((day, i) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(i)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all ${
                      selectedDay === i ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6">Select a Time Slot</h3>
              <div className="grid grid-cols-2 gap-3">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-4 rounded-xl font-bold transition-all text-sm ${
                      selectedTime === time ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <button 
              disabled={!selectedTime}
              className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all ${
                selectedTime ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Confirm Booking
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
