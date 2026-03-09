export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export const gallery: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "/images/gallery/activity-1.jpg",
    alt: "지역 주민 간담회",
    caption: "지역 주민과 함께하는 간담회",
  },
  {
    id: "gallery-2",
    src: "/images/gallery/activity-2.jpg",
    alt: "청년 창업 지원 현장",
    caption: "청년 창업 지원 센터 방문",
  },
  {
    id: "gallery-3",
    src: "/images/gallery/activity-3.jpg",
    alt: "교육 현장 방문",
    caption: "초등학교 교육 현장 탐방",
  },
  {
    id: "gallery-4",
    src: "/images/gallery/activity-4.jpg",
    alt: "환경 캠페인 참여",
    caption: "탄소중립 캠페인 참여",
  },
  {
    id: "gallery-5",
    src: "/images/gallery/activity-5.jpg",
    alt: "봉사활동",
    caption: "지역 봉사활동 현장",
  },
  {
    id: "gallery-6",
    src: "/images/gallery/activity-6.jpg",
    alt: "정책 토론회",
    caption: "시민 정책 토론회 개최",
  },
  {
    id: "gallery-7",
    src: "/images/gallery/activity-7.jpg",
    alt: "시장 방문",
    caption: "전통시장 상인 격려 방문",
  },
  {
    id: "gallery-8",
    src: "/images/gallery/activity-8.jpg",
    alt: "캠페인 현장",
    caption: "거리 캠페인 활동",
  },
];
