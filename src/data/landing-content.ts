export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export type UseCase = {
  icon: string;
  label: string;
  title: string;
  description: string;
};

export const HERO = {
  badge: "Promotion Landing Page Service",
  headline: "당신의 비전을,\n세상에 전합니다",
  subtext:
    "정치인 · CEO · 리더 · 단체장 — 분야를 넘어, 모든 리더의 브랜딩 파트너. 공약부터 포트폴리오까지, 당신의 이야기를 가장 임팩트 있게 전달하는 프로모션 사이트를 제작합니다.",
  cta1: "서비스 살펴보기",
  cta2: "문의하기",
} as const;

export const FEATURES: Feature[] = [
  {
    icon: "👤",
    title: "맞춤형 프로필",
    description:
      "경력, 비전, 핵심 가치를 전문적이고 세련된 레이아웃으로 전달합니다.",
  },
  {
    icon: "🎯",
    title: "비전 & 공약 카드",
    description:
      "핵심 메시지를 3D 인터랙티브 카드로 시각화하여 강렬한 첫인상을 남깁니다.",
  },
  {
    icon: "📸",
    title: "활동 갤러리",
    description:
      "현장의 생생한 순간을 라이트박스 갤러리로 기록하고 공유합니다.",
  },
  {
    icon: "✉️",
    title: "실시간 문의",
    description:
      "Web3Forms 연동으로 방문자의 메시지를 즉시 이메일로 수신합니다.",
  },
  {
    icon: "📱",
    title: "반응형 디자인",
    description:
      "모바일, 태블릿, 데스크톱 — 어떤 디바이스에서도 완벽한 경험을 제공합니다.",
  },
  {
    icon: "✨",
    title: "Awwwards급 인터랙션",
    description:
      "3D 틸트, 패러렉스, 커스텀 커서 등 수상급 모션 디자인을 적용합니다.",
  },
];

export const USE_CASES: UseCase[] = [
  {
    icon: "🏛",
    label: "정치",
    title: "선거 후보자",
    description:
      "공약과 비전을 유권자에게 효과적으로 전달하고, 활동 현장을 실시간으로 공유합니다.",
  },
  {
    icon: "🏢",
    label: "비즈니스",
    title: "기업 CEO · 임원",
    description:
      "리더십 철학과 경영 비전을 전문적으로 소개하고, 기업 브랜딩을 강화합니다.",
  },
  {
    icon: "🎤",
    label: "퍼스널 브랜딩",
    title: "공인 · 인플루언서",
    description:
      "개인 브랜드를 구축하고, 팬 및 파트너와의 소통 채널을 마련합니다.",
  },
  {
    icon: "🤝",
    label: "비영리",
    title: "단체 · 커뮤니티",
    description:
      "미션과 활동 성과를 투명하게 공유하고, 후원자·참여자를 확보합니다.",
  },
];

export const STATS = [
  { value: "50+", label: "제작 사이트" },
  { value: "98%", label: "고객 만족도" },
  { value: "3일", label: "평균 제작 기간" },
  { value: "24/7", label: "기술 지원" },
] as const;

export const CONTACT = {
  heading: "프로젝트를 시작하세요",
  subtext: "아래 양식을 작성해 주시면, 24시간 내에 맞춤 상담을 드립니다.",
  successTitle: "문의가 접수되었습니다!",
  successMessage: "빠른 시일 내에 연락드리겠습니다. 감사합니다.",
} as const;
