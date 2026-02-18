import { LucideIcon, Beaker, Award, Droplets, ShieldCheck, History, User } from 'lucide-react';

// --- Images ---
export const IMAGES = {
  LOGO: 'https://github.com/sangini70/wazralogo/blob/main/Gemini_Generated_Image_iwt456iwt456iwt4.png?raw=true',
  DR_KIM: 'https://github.com/sangini70/wazralogo/blob/main/%EA%B9%80%EB%B6%80%EC%97%B4%EB%B0%95%EC%82%AC%EB%8B%98.png?raw=true',
  HERO_BG: 'https://picsum.photos/1920/1080', // Placeholder for water abstract
  PRODUCT_1: 'https://picsum.photos/600/800', // Placeholder for bottle
  LAB: 'https://picsum.photos/800/600', // Placeholder for lab
};

// --- Navigation ---
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Story', path: '/story' },
  { name: 'Technology', path: '/technology' },
  { name: 'Product', path: '/product' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

// --- Compliance & Legal ---
export const COMPLIANCE = {
  FOOTER_WARNING: "본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.",
  DISCLAIMER: "개인의 생활습관과 상황에 따라 체감에는 차이가 있을 수 있습니다.",
};

// --- Copy: Home ---
export const HOME_COPY = {
  HERO: {
    HEADLINE: "연구의 끝에서, 물의 본질을 만나다.",
    SUB: "75개 특허 기술과 40년 연구 철학이 담긴 프리미엄 워터.\n와즈라는 단순한 물이 아닌, 당신을 위한 루틴입니다.",
    CTA_MAIN: "쿠팡에서 구매하기",
    CTA_SUB: "1+1 체험팩 신청",
  },
  WHY_EXPENSIVE: {
    TITLE: "왜 다른 물보다 가격이 높은가요?",
    POINTS: [
      "와즈라는 대량 생산의 효율성을 따르지 않습니다.",
      "75개의 특허 기술이 집약된 독자적인 공정만을 고집합니다.",
      "김부열 박사의 40년 연구 데이터를 바탕으로 설계되었습니다.",
      "단 한 병에도 타협하지 않는 프리미엄 품질 관리 비용입니다."
    ]
  },
  TIMELINE: [
    { year: '1980s', title: '연구의 시작', desc: '자연의 정화 원리에 대한 기초 연구 착수' },
    { year: '1990s', title: '공기정화 기술', desc: '오염 물질 제어 및 정화 핵심 특허 획득' },
    { year: '2000s', title: '환경 기술 확장', desc: '산업 전반의 환경 개선 솔루션 개발' },
    { year: '2010s', title: '물의 본질 탐구', desc: '"왜 우리가 마시는 물은 변하지 않는가?" 질문 제기' },
    { year: '2024', title: 'WAZRA 탄생', desc: '연구와 기술의 결정체, 프리미엄 워터 와즈라 출시' },
  ]
};

// --- FAQ Data ---
export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  { category: "Product", question: "와즈라는 일반 생수와 무엇이 다른가요?", answer: "와즈라는 일반적인 취수 및 여과 방식의 생수가 아닙니다. 김부열 박사의 특허 기술을 기반으로 한 독자적인 공정을 통해 생산되며, 까다로운 품질 관리를 거친 프리미엄 워터입니다." },
  { category: "Price", question: "가격이 비싼 이유가 궁금합니다.", answer: "대량 생산 방식이 아닌, 특허 기술이 적용된 정밀 공정과 엄격한 품질 관리를 거치기 때문입니다. 프리미엄 가치를 유지하기 위해 타협하지 않는 생산 방식을 고수합니다." },
  { category: "Patents", question: "특허가 75개라고 하는데, 어떤 특허인가요?", answer: "공기 정화, 유체 역학, 환경 개선 등 김부열 박사가 40년간 연구해온 다양한 분야의 기술 특허들입니다. 이 기술들은 와즈라의 생산 설비와 공정 설계의 기반이 되었습니다." },
  { category: "Experience", question: "1+1 체험팩은 언제까지 진행되나요?", answer: "현재 론칭 기념으로 한정 수량 진행 중이며, 재고 소진 시 조기 종료될 수 있습니다. 메인 페이지의 배너를 확인해주세요." },
  { category: "Usage", question: "어떻게 마시는 것이 가장 좋은가요?", answer: "기상 직후, 운동 전후 등 수분이 필요한 순간에 천천히 음용하시는 것을 권장합니다. 상온 보관 혹은 시원하게 드셔도 좋습니다." },
  { category: "Effect", question: "마시면 건강이 좋아지나요?", answer: "와즈라는 질병의 예방 및 치료를 위한 의약품이 아닙니다. 꾸준한 수분 섭취는 건강 유지에 도움을 줄 수 있으며, 와즈라는 이를 위한 최적의 경험을 제공합니다." },
  { category: "Shipping", question: "배송은 얼마나 걸리나요?", answer: "평일 오후 2시 이전 주문 시 당일 발송되며, 일반적으로 다음 날 받아보실 수 있습니다 (도서 산간 제외)." },
  { category: "Refund", question: "환불 규정이 어떻게 되나요?", answer: "제품 훼손이나 불량의 경우 100% 교환 및 환불이 가능합니다. 단, 단순 변심의 경우 왕복 배송비가 발생할 수 있습니다." },
  { category: "Product", question: "유통기한은 어떻게 되나요?", answer: "제조일로부터 12개월입니다. 병 뚜껑 또는 라벨에 표기된 날짜를 확인해주세요." },
  { category: "Safety", question: "아이들이 마셔도 되나요?", answer: "네, 와즈라는 엄격한 품질 관리를 거친 안전한 물이므로 남녀노소 누구나 안심하고 드실 수 있습니다." },
  { category: "Packaging", question: "용기 소재는 안전한가요?", answer: "환경 호르몬 걱정이 없는 안전한 PET 소재를 사용하였으며, 재활용이 용이하도록 라벨 분리가 쉽습니다." },
  { category: "Contact", question: "대량 구매나 제휴 문의는 어떻게 하나요?", answer: "Contact 페이지의 문의 폼을 작성해주시면 담당자가 검토 후 24시간 이내에 연락드립니다." },
  { category: "Taste", question: "물 맛이 다른가요?", answer: "목 넘김이 부드럽고 깔끔하다는 평가를 많이 받습니다. 개인의 취향에 따라 차이가 있을 수 있습니다." },
  { category: "Storage", question: "보관 방법이 궁금합니다.", answer: "직사광선을 피하고 서늘한 곳에 보관해주세요. 개봉 후에는 가급적 빨리 드시는 것이 좋습니다." },
  { category: "Brand", question: "와즈라(WAZRA)라는 이름의 뜻은 무엇인가요?", answer: "와즈라는 '본질'과 '순수'를 지향하는 브랜드 철학을 담은 고유 명사입니다." },
];

// --- Compliance Checklist for Developers/Admins ---
export const COMPLIANCE_CHECKLIST = [
  "질병 명칭(암, 당뇨, 혈압 등) 사용 금지 확인",
  "치료, 개선, 효능, 효과 단정적 표현 삭제",
  "Before/After 비교 금지",
  "최상급 표현(최고, No.1)은 객관적 근거 있을 때만 사용",
  "특허가 직접적인 효능을 보증하는 것처럼 오인 금지",
  "필수 고지 문구(의약품 아님) 푸터/상세페이지 삽입",
];
