import React, { useState } from 'react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general', // general, partnership, bulk
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 담당자 확인 후 연락드리겠습니다.');
    // API integration would go here
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-slate-400">
            제휴, 대량 구매, 기타 문의사항을 남겨주세요.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-16">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">이름 (회사명)</label>
              <input 
                type="text" 
                required
                className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">이메일</label>
              <input 
                type="email" 
                required
                className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-slate-300 mb-2">문의 유형</label>
             <select 
               className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none"
               value={formData.type}
               onChange={(e) => setFormData({...formData, type: e.target.value})}
             >
               <option value="general">일반 문의</option>
               <option value="partnership">제휴 문의</option>
               <option value="bulk">대량 구매/납품</option>
             </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">문의 내용</label>
            <textarea 
              required
              rows={6}
              className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-none"
              placeholder="내용을 입력해주세요."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <div className="bg-slate-900 p-4 rounded text-xs text-slate-500 border border-slate-800">
            <p>
              * [개인정보 최소 수집 원칙] 문의 처리를 위해 이름과 연락처(이메일)만을 수집하며, 
              수집된 정보는 문의 회신 완료 후 3개월 이내 파기됩니다.
            </p>
          </div>

          <Button type="submit" fullWidth size="lg">문의하기</Button>

        </form>
      </section>
    </div>
  );
};

export default Contact;