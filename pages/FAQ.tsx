import React, { useState } from 'react';
import { FAQS, FAQItem } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      <section className="py-20 bg-slate-900 mb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">FAQ</h1>
          <p className="text-slate-400">자주 묻는 질문들을 확인하세요.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-24">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div>
                   <span className="text-xs font-bold text-cyan-600 uppercase mb-1 block">{faq.category}</span>
                   <span className={`font-medium ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                     {faq.question}
                   </span>
                </div>
                {openIndex === index ? <ChevronUp className="text-cyan-500" /> : <ChevronDown className="text-slate-500" />}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 text-slate-400 text-sm leading-relaxed border-t border-slate-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;