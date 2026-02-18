import React from 'react';
import Button from '../components/Button';
import { IMAGES } from '../constants';

const Product: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative bg-slate-900 rounded-lg overflow-hidden aspect-square flex items-center justify-center border border-slate-800">
            <img src={IMAGES.PRODUCT_1} alt="WAZRA Bottle" className="h-4/5 object-contain opacity-90 hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 left-4 bg-cyan-900/30 text-cyan-400 px-3 py-1 text-xs font-bold rounded uppercase">
              Premium Edition
            </div>
          </div>

          {/* Info */}
          <div>
             <h1 className="text-4xl font-bold text-white mb-2">WAZRA ORIGINAL</h1>
             <p className="text-xl text-cyan-500 mb-8">The Essence of Purity</p>
             
             <div className="space-y-6 mb-10 text-slate-300">
               <p>
                 와즈라는 단순한 갈증 해소를 넘어선, 일상을 깨우는 프리미엄 워터입니다.
                 가장 순수한 상태의 물을 보존하기 위해 특수 설계된 용기에 담았습니다.
               </p>
               
               <div className="bg-slate-900 p-6 rounded border border-slate-800">
                 <h3 className="text-white font-bold mb-4">Recommended Routine</h3>
                 <ul className="space-y-3 text-sm">
                   <li className="flex justify-between">
                     <span>AM 07:00</span>
                     <span className="text-slate-500">기상 직후, 몸을 깨우는 한 잔</span>
                   </li>
                   <li className="flex justify-between">
                     <span>PM 02:00</span>
                     <span className="text-slate-500">업무 집중력이 필요할 때</span>
                   </li>
                   <li className="flex justify-between">
                     <span>PM 09:00</span>
                     <span className="text-slate-500">하루를 마무리하는 휴식과 함께</span>
                   </li>
                 </ul>
               </div>
             </div>

             <div className="flex gap-4">
                <Button fullWidth onClick={() => window.open('https://coupang.com', '_blank')}>
                  쿠팡에서 구매하기
                </Button>
                <Button variant="outline" fullWidth>
                  대량 구매 문의
                </Button>
             </div>
             
             <p className="mt-4 text-xs text-slate-600">
               * 판매 수익의 일부는 환경 정화 기술 연구에 재투자됩니다.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;