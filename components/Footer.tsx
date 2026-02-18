import React from 'react';
import { COMPLIANCE } from '../constants';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-widest">WAZRA</h3>
            <p className="text-sm leading-relaxed">
              40년 연구의 결실.<br/>
              김부열 박사의 철학이 담긴 프리미엄 워터.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col space-y-2 text-sm">
            <h4 className="font-semibold text-slate-200 mb-2">Legal</h4>
            <a href="#" className="hover:text-cyan-400 transition-colors">이용약관</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">사업자정보확인</a>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <h4 className="font-semibold text-slate-200 mb-2">Contact</h4>
            <p>Customer Center: 1588-0000</p>
            <p>Email: support@wazra.com</p>
            <p className="mt-2">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
          </div>
        </div>

        {/* Compliance Warning Section */}
        <div className="border-t border-slate-900 pt-8 mt-8">
          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-4">
            <ShieldCheck className="text-cyan-600 flex-shrink-0" size={32} />
            <div className="text-xs text-slate-500 space-y-1">
              <p className="font-medium text-slate-400">{COMPLIANCE.FOOTER_WARNING}</p>
              <p>{COMPLIANCE.DISCLAIMER}</p>
              <p className="opacity-75">본 사이트의 콘텐츠는 김부열 박사의 연구 배경과 철학을 설명하는 것이며, 특정 질병의 치료 효과를 보증하지 않습니다.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} WAZRA WATER. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;