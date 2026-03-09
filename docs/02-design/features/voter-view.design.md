# voter-view Design

> **Created**: 2026-03-09
> **Plan Reference**: `docs/01-plan/features/voter-view.plan.md`
> **Level**: Starter

---

## Goal

선거 후보자의 프로필, 공약, 활동 사진을 단일 페이지 스크롤 형태의 반응형 웹사이트로 구축한다.
유권자가 페이지에 진입하면 섹션별 스크롤로 후보자 정보를 자연스럽게 탐색할 수 있다.

---

## How It Works

```
유권자 접속 → 히어로 배너 (첫인상)
           → 스크롤 또는 네비게이션 클릭
           → 프로필 / 공약 / 갤러리 섹션 탐색
           → 푸터에서 연락처/SNS 확인
```

---

## Page Layout (단일 페이지)

```
┌──────────────────────────────────────────────┐
│  [Header] 고정 네비게이션                      │
│  로고  |  소개  공약  갤러리  연락처            │
├──────────────────────────────────────────────┤
│                                              │
│  [Hero Banner]  id="hero"                    │
│  ┌──────────────────────────────────┐        │
│  │  후보자 사진 (배경 또는 좌측)       │        │
│  │  후보자 이름                       │        │
│  │  슬로건 텍스트                     │        │
│  │  [공약 보기] CTA 버튼              │        │
│  └──────────────────────────────────┘        │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│  [Profile Section]  id="profile"             │
│  ┌────────────┐  ┌─────────────────┐         │
│  │ 후보자 사진  │  │ 이름 / 소속      │         │
│  │ (정방형)    │  │ 약력 리스트       │         │
│  │            │  │ - 학력           │         │
│  │            │  │ - 경력           │         │
│  │            │  │ - 수상/활동       │         │
│  └────────────┘  └─────────────────┘         │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│  [Pledge Section]  id="pledges"              │
│  섹션 제목: "주요 공약"                        │
│  ┌──────┐  ┌──────┐  ┌──────┐               │
│  │ 아이콘 │  │ 아이콘 │  │ 아이콘 │               │
│  │ 분야명 │  │ 분야명 │  │ 분야명 │               │
│  │ 공약   │  │ 공약   │  │ 공약   │               │
│  │ 요약   │  │ 요약   │  │ 요약   │               │
│  └──────┘  └──────┘  └──────┘               │
│  (모바일: 1열, 태블릿: 2열, PC: 3열)           │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│  [Gallery Section]  id="gallery"             │
│  섹션 제목: "활동 갤러리"                      │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐               │
│  │ 📷 │ │ 📷 │ │ 📷 │ │ 📷 │               │
│  └────┘ └────┘ └────┘ └────┘               │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐               │
│  │ 📷 │ │ 📷 │ │ 📷 │ │ 📷 │               │
│  └────┘ └────┘ └────┘ └────┘               │
│  (모바일: 2열, PC: 3~4열 그리드)              │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│  [Footer]  id="contact"                      │
│  연락처 정보  |  SNS 링크  |  Copyright       │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Files to Create

### App Router 구조

| File | Purpose | FR |
|------|---------|-----|
| `src/app/layout.tsx` | 루트 레이아웃 (메타태그, 폰트, 공통 구조) | - |
| `src/app/page.tsx` | 메인 페이지 (섹션 조합) | All |
| `src/app/globals.css` | 글로벌 스타일 (Tailwind import) | - |

### Components

| File | Purpose | FR |
|------|---------|-----|
| `src/components/header.tsx` | 고정 네비게이션 바 (스크롤 시 배경 변경) | FR-05 |
| `src/components/hero-banner.tsx` | 히어로 배너 (사진 + 이름 + 슬로건 + CTA) | FR-01, FR-12, FR-13, FR-15, FR-16 |
| `src/components/profile-section.tsx` | 후보자 프로필 (사진 + 약력) | FR-02 |
| `src/components/pledge-section.tsx` | 공약 카드 그리드 | FR-03 |
| `src/components/pledge-card.tsx` | 개별 공약 카드 (글래스모피즘 + 3D 틸트) | FR-03, FR-17 |
| `src/components/gallery-section.tsx` | 활동 사진 그리드 (AnimatePresence 라이트박스) | FR-04, FR-18 |
| `src/components/footer.tsx` | 푸터 (연락처 + SNS) | FR-06 |
| `src/components/smooth-scroll.tsx` | Lenis 기반 부드러운 관성 스크롤 래퍼 | FR-09 |
| `src/components/scroll-progress.tsx` | 최상단 스크롤 진행률 바 (인디고 그라디언트 3px) | FR-10 |
| `src/components/custom-cursor.tsx` | 커스텀 커서 (큰 원+작은 점, mix-blend-mode: difference) | FR-11 |
| `src/components/magnetic-button.tsx` | 마우스 위치 따라가는 마그네틱 버튼 | FR-12 |
| `src/components/floating-orbs.tsx` | 히어로 배경 블러 부유 오브 3개 | FR-13 |
| `src/components/section-divider.tsx` | 섹션 간 Wavy SVG 디바이더 | FR-14 |

### Data

| File | Purpose |
|------|---------|
| `src/data/candidate.ts` | 후보자 기본 정보 (이름, 슬로건, 약력) |
| `src/data/pledges.ts` | 공약 데이터 (분야, 제목, 설명, 아이콘) |
| `src/data/gallery.ts` | 갤러리 이미지 (src, alt, caption) |
| `src/data/navigation.ts` | 네비게이션 메뉴 항목 |

---

## Component Specifications

### 1. Header (`header.tsx`)

```
"use client" (스크롤 이벤트 필요)

Props: 없음 (navigation 데이터 import)
State: isScrolled (스크롤 여부에 따라 배경 변경)

동작:
- 상단 고정 (sticky top-0)
- 스크롤 시 배경 불투명 + 그림자 추가
- 네비게이션 클릭 → 해당 섹션으로 smooth scroll
- 모바일: 햄버거 메뉴 → 드롭다운 메뉴

구조:
<header class="sticky top-0 z-50">
  <nav>
    <Logo />
    <DesktopMenu />     <!-- md 이상 -->
    <MobileMenuButton /> <!-- md 미만 -->
  </nav>
  <MobileMenu />        <!-- 열림 상태일 때만 -->
</header>
```

### 2. Hero Banner (`hero-banner.tsx`)

```
Server Component

Props: 없음 (candidate 데이터 import)

구조:
<section id="hero" class="min-h-screen flex items-center">
  <div class="container">
    <div class="grid md:grid-cols-2">
      <ImageArea>
        <Image src={candidate.photo} ... priority />
      </ImageArea>
      <TextArea>
        <h1>{candidate.name}</h1>
        <p class="text-xl">{candidate.slogan}</p>
        <a href="#pledges" class="btn">공약 보기</a>
      </TextArea>
    </div>
  </div>
</section>

반응형:
- 모바일: 이미지 상단 + 텍스트 하단 (1열)
- PC: 이미지 좌측 + 텍스트 우측 (2열)
```

### 3. Profile Section (`profile-section.tsx`)

```
Server Component

Props: 없음 (candidate 데이터 import)

구조:
<section id="profile" class="py-20">
  <div class="container">
    <SectionTitle>후보자 소개</SectionTitle>
    <div class="grid md:grid-cols-[300px_1fr] gap-8">
      <Image src={candidate.profilePhoto} class="rounded-xl" />
      <div>
        <h3>{candidate.name}</h3>
        <p>{candidate.party}</p>
        <ul>  <!-- 약력 리스트 -->
          {candidate.history.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  </div>
</section>
```

### 4. Pledge Section (`pledge-section.tsx`)

```
Server Component

Props: 없음 (pledges 데이터 import)

구조:
<section id="pledges" class="py-20 bg-gray-50 dark:bg-gray-900">
  <div class="container">
    <SectionTitle>주요 공약</SectionTitle>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pledges.map(pledge => <PledgeCard key={pledge.id} {...pledge} />)}
    </div>
  </div>
</section>
```

### 5. Pledge Card (`pledge-card.tsx`)

```
Server Component

Props: { icon: string, category: string, title: string, description: string }

구조:
<article class="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
  <div class="text-4xl mb-4">{icon}</div>
  <span class="text-sm text-blue-600">{category}</span>
  <h3 class="text-lg font-bold mt-1">{title}</h3>
  <p class="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
</article>
```

### 6. Gallery Section (`gallery-section.tsx`)

```
"use client" (라이트박스 인터랙션 필요)

Props: 없음 (gallery 데이터 import)
State: selectedImage (선택된 이미지 인덱스, null이면 라이트박스 닫힘)

구조:
<section id="gallery" class="py-20">
  <div class="container">
    <SectionTitle>활동 갤러리</SectionTitle>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {gallery.map((img, i) => (
        <button onClick={() => setSelectedImage(i)}>
          <Image src={img.src} alt={img.alt} class="rounded-lg" />
        </button>
      ))}
    </div>
  </div>
  {selectedImage !== null && <Lightbox />}  <!-- 모달 오버레이 -->
</section>

Lightbox:
- 전체 화면 오버레이 (fixed inset-0)
- 이전/다음 버튼
- 닫기 버튼 (X) + 배경 클릭으로 닫기
- ESC 키로 닫기
```

### 7. Footer (`footer.tsx`)

```
Server Component

Props: 없음 (candidate 데이터 import)

구조:
<footer id="contact" class="py-12 bg-gray-900 text-white">
  <div class="container grid md:grid-cols-3 gap-8">
    <div>  <!-- 연락처 -->
      <h4>연락처</h4>
      <p>이메일: {candidate.email}</p>
      <p>전화: {candidate.phone}</p>
    </div>
    <div>  <!-- SNS -->
      <h4>SNS</h4>
      <SocialLinks links={candidate.socialLinks} />
    </div>
    <div>  <!-- Copyright -->
      <p>© 2026 {candidate.name}. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

## Data Schema

### candidate.ts

```typescript
export type Candidate = {
  name: string;
  party: string;
  slogan: string;
  photo: string;         // 히어로 배너용 사진
  profilePhoto: string;  // 프로필 섹션용 사진
  history: string[];     // 약력 리스트
  email: string;
  phone: string;
  socialLinks: {
    platform: string;    // "instagram" | "facebook" | "youtube" | "twitter"
    url: string;
    label: string;
  }[];
};
```

### pledges.ts

```typescript
export type Pledge = {
  id: string;
  icon: string;          // 이모지 또는 아이콘 이름
  category: string;      // "경제", "교육", "복지" 등
  title: string;
  description: string;
};
```

### gallery.ts

```typescript
export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};
```

### navigation.ts

```typescript
export type NavItem = {
  label: string;
  href: string;   // "#hero", "#profile", "#pledges", "#gallery", "#contact"
};
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|---------------|
| Mobile | < 640px (sm) | 1열, 햄버거 메뉴, 갤러리 2열 |
| Tablet | 640px~1023px (md) | 2열 그리드, 공약 2열 |
| Desktop | >= 1024px (lg) | 풀 레이아웃, 공약 3열, 갤러리 4열 |

---

## Dark Mode

Tailwind `dark:` 클래스 사용, 시스템 설정 기반 자동 전환.

| Element | Light | Dark |
|---------|-------|------|
| 배경 | white / gray-50 | gray-950 / gray-900 |
| 텍스트 | gray-900 | gray-100 |
| 카드 | white + shadow | gray-800 |
| 헤더 | white/80 backdrop-blur | gray-950/80 backdrop-blur |
| 링크/CTA | blue-600 | blue-400 |

---

## SEO & Meta Tags (`layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "{candidate.name} - 공약과 비전",
  description: "{candidate.slogan}",
  openGraph: {
    title: "{candidate.name} - 공약과 비전",
    description: "{candidate.slogan}",
    images: ["/og-image.png"],
    type: "website",
  },
};
```

---

## Implementation Order

| Step | Task | Dependencies |
|------|------|-------------|
| 1 | Next.js 프로젝트 초기화 (`pnpm create next-app`) | - |
| 2 | 데이터 파일 생성 (`src/data/*`) | Step 1 |
| 3 | 레이아웃 + 글로벌 스타일 (`layout.tsx`, `globals.css`) | Step 1 |
| 4 | Header 컴포넌트 | Step 3 |
| 5 | Hero Banner 컴포넌트 | Step 2, 3 |
| 6 | Profile Section 컴포넌트 | Step 2, 3 |
| 7 | Pledge Section + Card 컴포넌트 | Step 2, 3 |
| 8 | Gallery Section (라이트박스 포함) | Step 2, 3 |
| 9 | Footer 컴포넌트 | Step 2, 3 |
| 10 | 메인 페이지 조합 (`page.tsx`) | Step 4~9 |
| 11 | 반응형 / 다크모드 확인 및 조정 | Step 10 |
| 12 | SEO 메타태그 최종 설정 | Step 10 |

---

## Completion Checklist

- [ ] 모든 컴포넌트 구현 (7개)
- [ ] 데이터 파일 분리 (4개)
- [ ] 반응형 동작 확인 (Mobile / Tablet / Desktop)
- [ ] 다크모드 동작 확인
- [ ] 섹션 스크롤 내비게이션 동작
- [ ] 갤러리 라이트박스 동작
- [ ] SEO 메타태그 설정
- [ ] next/image 사용 (모든 이미지)
- [ ] `pnpm build` 성공
- [ ] Lighthouse 성능 90+

---

## Awwwards 2차 디자인 업그레이드 (2026-03-09)

### 추가 의존성
- `lenis@1.3.18` — 부드러운 관성 스크롤

### 효과 매트릭스

| 효과 | 위치 | Awwwards 임팩트 |
|------|------|:---:|
| Lenis 관성 스크롤 | 전체 (layout.tsx 래퍼) | ★★★ |
| 스크롤 프로그레스 바 | 최상단 고정 | ★★ |
| 커스텀 커서 (반전 블렌드) | 전체 (pointer: fine만) | ★★★ |
| 마그네틱 버튼 | CTA "공약 보기" | ★★ |
| 그라디언트 텍스트 | 히어로 이름 | ★★★ |
| 패럴랙스 | 히어로 사진 (useTransform Y축) | ★★ |
| 부유 오브 | 히어로 배경 (3개, 15~22초 주기) | ★★★ |
| Wavy 섹션 디바이더 | 섹션 간 | ★★ |
| 카드 3D 틸트 + 글래스모피즘 | 공약 카드 | ★★★ |
| 노이즈 텍스처 | body::before (SVG filter) | ★★ |
| Lightbox AnimatePresence | 갤러리 (scale/blur 전환) | ★★ |

### 접근성 대응
- `prefers-reduced-motion: reduce` 시 모든 애니메이션 비활성화
- 모바일(pointer: coarse): 커스텀 커서 숨김
- 3D 틸트: onMouseMove 기반이므로 터치 기기에 영향 없음

---

## Notes

- 콘텐츠(사진, 공약 텍스트)가 확정되기 전까지 더미 데이터 사용
- 이미지는 placeholder 이미지로 개발, 추후 실제 이미지로 교체
- 갤러리 라이트박스는 외부 라이브러리 없이 직접 구현 (의존성 최소화)
