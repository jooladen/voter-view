export type SocialLink = {
  platform: "instagram" | "facebook" | "youtube" | "twitter";
  url: string;
  label: string;
};

export type Candidate = {
  name: string;
  party: string;
  slogan: string;
  photo: string;
  profilePhoto: string;
  history: string[];
  email: string;
  phone: string;
  socialLinks: SocialLink[];
};

export const candidate: Candidate = {
  name: "홍길동",
  party: "OOO당",
  slogan: "함께 만드는 더 나은 내일",
  photo: "/images/sejong.png",
  profilePhoto: "/images/sejong.png",
  history: [
    "서울대학교 행정학과 졸업",
    "하버드대학교 케네디스쿨 행정학 석사",
    "제20대 국회의원 (2016-2020)",
    "국회 교육위원회 위원장",
    "前 서울시 부시장",
    "前 교육부 차관",
    "대한민국 정책대상 수상 (2019)",
  ],
  email: "contact@candidate.kr",
  phone: "02-1234-5678",
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/candidate",
      label: "Instagram",
    },
    {
      platform: "facebook",
      url: "https://facebook.com/candidate",
      label: "Facebook",
    },
    {
      platform: "youtube",
      url: "https://youtube.com/@candidate",
      label: "YouTube",
    },
    {
      platform: "twitter",
      url: "https://twitter.com/candidate",
      label: "X (Twitter)",
    },
  ],
};
