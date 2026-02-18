import React from 'react';
import { IMAGES, HOME_COPY } from '../constants';

const Story: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      
      {/* Intro */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Founder Story</h1>
          <p className="text-xl text-slate-400">
            "왜 공기를 연구하던 과학자가 물을 연구하게 되었을까요?"
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="prose prose-invert prose-lg mx-auto">
            <div className="float-right ml-6 mb-6 w-48 h-64 relative rounded-lg overflow-hidden border border-slate-700">
              <img src={IMAGES.DR_KIM} alt="김부열 박사" className="object-cover w-full h-full" />
            </div>
            
            <h3>연구자의 길</h3>
            <p>
              김부열 박사는 지난 40년 동안 눈에 보이지 않는 미세 입자와 유체의 흐름을 연구해왔습니다. 
              초기에는 산업 현장의 공기 오염 문제를 해결하기 위한 정화 기술 개발에 몰두했으며, 
              이 과정에서 획득한 수많은 특허 기술들은 국내외에서 그 가치를 인정받았습니다.
            </p>

            <h3>물의 본질로 향하다</h3>
            <p>
              공기 정화 기술의 핵심은 '불순물의 완벽한 제어'와 '순환'에 있습니다. 
              이 원리는 물에도 동일하게 적용됩니다. 
              "인간에게 가장 필수적인 물을, 공기 정화 기술만큼이나 정밀하게 다룰 수는 없을까?" 
              이 단순한 호기심이 와즈라(WAZRA) 프로젝트의 시작이었습니다.
            </p>

            <h3>타협하지 않는 철학</h3>
            <p>
              와즈라는 효율성을 추구하지 않습니다. 일반적인 생수 공정보다 몇 배 더 복잡하고 비용이 많이 드는 
              독자적인 프로세스를 고집합니다. 그것이 연구자 김부열이 생각하는 '물에 대한 예의'이기 때문입니다.
            </p>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Research Timeline</h2>
            <div className="border-l-2 border-slate-800 ml-4 space-y-12">
              {HOME_COPY.TIMELINE.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-950 border-2 border-cyan-500 rounded-full"></div>
                  <span className="block text-sm text-cyan-500 font-bold mb-1">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Story;