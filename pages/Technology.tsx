import React from 'react';
import { ShieldCheck, Wind, Zap } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Technology & Patents</h1>
          <p className="text-lg text-slate-400">
            75개의 특허. 숫자가 증명하는 기술의 깊이.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
             <div>
               <h2 className="text-2xl font-bold text-white mb-6">공기 정화 기술에서 시작된 혁신</h2>
               <p className="text-slate-400 leading-relaxed mb-6">
                 미세 입자를 제어하는 고도의 공기 정화 기술은 물 속의 미세 불순물을 제어하는 기술과 맞닿아 있습니다.
                 와즈라는 김부열 박사가 보유한 유체 역학 및 정화 관련 특허 기술을 수처리 공정에 접목하여 탄생했습니다.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-slate-300">
                   <Wind className="text-cyan-500" />
                   <span>Nano-Fluid Control System (유체 제어 시스템)</span>
                 </li>
                 <li className="flex items-center gap-3 text-slate-300">
                   <Zap className="text-cyan-500" />
                   <span>Advanced Purification Tech (고도 정화 기술)</span>
                 </li>
               </ul>
             </div>
             <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
               <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-600 pb-4">특허 현황 (요약)</h3>
               <div className="grid grid-cols-2 gap-4">
                 <div className="text-center p-4 bg-slate-900 rounded">
                   <span className="block text-3xl font-bold text-cyan-500 mb-1">45</span>
                   <span className="text-xs text-slate-500">Domestic Patents</span>
                 </div>
                 <div className="text-center p-4 bg-slate-900 rounded">
                   <span className="block text-3xl font-bold text-cyan-500 mb-1">30</span>
                   <span className="text-xs text-slate-500">International Patents</span>
                 </div>
               </div>
               <p className="text-xs text-slate-600 mt-6 text-center">
                 * 김부열 박사 및 연구팀 보유 특허 (출원 포함) 누적 합계
               </p>
             </div>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
            <div className="flex items-start gap-4">
               <ShieldCheck className="text-slate-500 mt-1 flex-shrink-0" />
               <div>
                 <h4 className="text-white font-bold mb-2">Compliance Notice</h4>
                 <p className="text-sm text-slate-500">
                   본 페이지에 언급된 특허 기술은 와즈라의 생산 설비 및 공정에 적용된 기술적 배경을 설명하는 것이며, 
                   이것이 물을 마셨을 때의 직접적인 의학적 효능(질병 치료 등)을 의미하지 않습니다.
                 </p>
               </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Technology;