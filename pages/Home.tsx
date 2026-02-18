import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Droplets, Award, FlaskConical } from 'lucide-react';
import Button from '../components/Button';
import { HOME_COPY, IMAGES } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* S1: Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-950 z-10"></div>
          <img 
            src={IMAGES.HERO_BG} 
            alt="Water Texture" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow" 
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            {HOME_COPY.HERO.HEADLINE}
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-300 mb-10 whitespace-pre-line leading-relaxed"
          >
            {HOME_COPY.HERO.SUB}
          </motion.p>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              onClick={() => window.open('https://coupang.com', '_blank')}
            >
              {HOME_COPY.HERO.CTA_MAIN} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              {HOME_COPY.HERO.CTA_SUB}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* S2: Why Expensive (Value Proposition) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              {HOME_COPY.WHY_EXPENSIVE.TITLE}
            </h2>
            <div className="space-y-6">
              {HOME_COPY.WHY_EXPENSIVE.POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle className="text-cyan-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-300 text-lg leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S3: Founder Proof */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
               <div className="aspect-[4/5] rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                 <img src={IMAGES.DR_KIM} alt="Dr. Kim" className="w-full h-full object-cover" />
               </div>
               {/* Badge */}
               <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-full shadow-lg border-4 border-slate-900 w-32 h-32 flex flex-col items-center justify-center">
                 <span className="text-3xl font-bold">75</span>
                 <span className="text-xs uppercase tracking-wider mt-1">Patents</span>
               </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <FlaskConical size={20} />
                <span className="text-sm font-bold uppercase tracking-wider">Founder</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                김부열 박사
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                40년의 연구 인생을 오직 '정화(Purification)' 기술에 바쳤습니다. 
                공기 정화부터 시작된 그의 연구는 가장 순수한 물을 만드는 기술로 이어졌습니다.
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                "물은 생명의 근원이자, 우리가 매일 마주하는 가장 중요한 물질입니다. 
                타협하지 않는 연구자로서의 양심을 걸고, 가장 완벽에 가까운 물을 만들고자 했습니다."
              </p>
              <Link to="/story">
                <Button variant="outline">연구 스토리 더보기</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S4: Timeline Preview */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">History of Innovation</h2>
            <p className="text-slate-400 mt-4">연구실에서 시작된 여정</p>
          </div>
          
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-800 hidden md:block"></div>
            
            <div className="space-y-12">
              {HOME_COPY.TIMELINE.slice(0, 3).map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 p-4"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 hidden md:block"></div>
                  <div className={`md:w-1/2 p-4 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-cyan-500 font-bold">{item.year}</span>
                    <h3 className="text-xl text-white font-semibold mt-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
             <div className="text-center mt-12">
                 <Link to="/story" className="text-sm text-cyan-500 hover:text-cyan-400 underline">전체 연혁 보기</Link>
             </div>
          </div>
        </div>
      </section>

       {/* S5: Product Snapshot - Premium Routine */}
       <section className="py-24 bg-slate-900">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-16">Premium Water Routine</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Droplets, title: "Pure Technology", desc: "특허 기술로 완성된 정제 과정" },
                { icon: Award, title: "Master Craftsmanship", desc: "김부열 박사의 철학이 담긴 블렌딩" },
                { icon: CheckCircle, title: "Daily Ritual", desc: "나를 위한 가장 완벽한 수분 섭취" }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors">
                  <item.icon className="mx-auto w-12 h-12 text-cyan-500 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
       </section>

       {/* S6: CTA Bar */}
       <section className="py-20 bg-gradient-to-r from-cyan-900 to-slate-900 border-t border-slate-700">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              지금, 와즈라를 경험하세요
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://coupang.com', '_blank')}>
                  쿠팡 로켓배송으로 구매하기
               </Button>
               <Link to="/contact">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    제휴 및 대량구매 문의
                  </Button>
               </Link>
            </div>
            <p className="mt-6 text-sm text-cyan-200/60">
              *1+1 체험팩은 재고 소진 시 조기 종료될 수 있습니다.
            </p>
         </div>
       </section>

    </div>
  );
};

export default Home;