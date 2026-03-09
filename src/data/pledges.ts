export type Pledge = {
  id: string;
  icon: string;
  category: string;
  title: string;
  description: string;
};

export const pledges: Pledge[] = [
  {
    id: "economy-1",
    icon: "💼",
    category: "경제",
    title: "청년 일자리 10만개 창출",
    description:
      "스타트업 지원 확대와 디지털 전환 가속화를 통해 청년 일자리 10만개를 새롭게 만들겠습니다.",
  },
  {
    id: "education-1",
    icon: "📚",
    category: "교육",
    title: "공교육 혁신",
    description:
      "AI 기반 맞춤형 교육 도입과 교사 처우 개선으로 공교육의 질을 높이겠습니다.",
  },
  {
    id: "welfare-1",
    icon: "🏥",
    category: "복지",
    title: "지역 의료 격차 해소",
    description:
      "지방 의료 인프라 확충과 원격 의료 확대로 어디서나 양질의 의료 서비스를 받을 수 있도록 하겠습니다.",
  },
  {
    id: "environment-1",
    icon: "🌱",
    category: "환경",
    title: "탄소중립 2040 실현",
    description:
      "재생에너지 비중 확대와 녹색 산업 육성으로 2040년까지 탄소중립을 달성하겠습니다.",
  },
  {
    id: "housing-1",
    icon: "🏠",
    category: "주거",
    title: "청년·신혼부부 주거 안정",
    description:
      "공공임대 10만호 공급과 전세 사기 방지 대책 강화로 주거 불안을 해소하겠습니다.",
  },
  {
    id: "safety-1",
    icon: "🛡️",
    category: "안전",
    title: "디지털 범죄 근절",
    description:
      "사이버 수사 역량 강화와 디지털 성범죄 처벌 강화로 안전한 디지털 환경을 만들겠습니다.",
  },
];
