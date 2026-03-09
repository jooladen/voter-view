# voter-view Planning Document

> **Summary**: 선거 후보자 프로필, 공약, 활동 사진을 단일 페이지 스크롤 형태로 홍보하는 반응형 웹사이트
>
> **Project**: voter-view
> **Author**: jooladen
> **Date**: 2026-03-09
> **Status**: Draft

---

## Executive Summary

| Perspective | Content |
|-------------|---------|
| **Problem** | 유권자가 후보자의 핵심 정보(프로필, 공약, 활동)를 한눈에 파악하기 어려움 |
| **Solution** | 단일 페이지 스크롤 형태의 반응형 웹사이트로 후보자 정보를 효과적으로 전달 |
| **Function/UX Effect** | 섹션별 스크롤 내비게이션으로 직관적 탐색, 모바일/PC 모두 최적화된 레이아웃 |
| **Core Value** | 유권자에게 후보자의 비전과 공약을 신뢰감 있게 전달하여 선거 홍보 효과 극대화 |

---

## 1. Overview

### 1.1 Purpose

선거를 대비하여 특정 후보자의 프로필, 주요 공약, 활동 사진 등 핵심 정보를 유권자에게 효과적으로 전달하는 홍보 웹사이트를 구축한다.

### 1.2 Background

- 유권자가 후보자 정보를 빠르게 확인할 수 있는 전용 웹페이지 필요
- PC와 모바일 모두에서 최적화된 경험 제공 필요
- 단일 페이지 스크롤 형태로 간결하고 임팩트 있는 구성

### 1.3 Related Documents

- CLAUDE.md (프로젝트 설정)

---

## 2. Scope

### 2.1 In Scope

- [ ] 히어로 배너 섹션 (후보자 사진 + 슬로건)
- [ ] 후보자 프로필 섹션 (약력, 학력, 경력)
- [ ] 주요 공약 섹션 (분야별 공약 카드)
- [ ] 활동 사진 갤러리 섹션
- [ ] 푸터 (연락처, SNS 링크)
- [ ] 헤더 내비게이션 (섹션 이동)
- [ ] 반응형 디자인 (PC + 모바일)
- [ ] 다크모드 지원

### 2.2 Out of Scope

- 로그인/회원가입 기능
- 댓글/게시판 기능
- 관리자 페이지 (CMS)
- 다국어 지원
- 실시간 채팅/문의 기능

---

## 3. Requirements

### 3.1 Functional Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-01 | 히어로 배너: 후보자 사진, 이름, 슬로건 표시 | High | Pending |
| FR-02 | 프로필: 약력, 학력, 경력 정보 표시 | High | Pending |
| FR-03 | 공약: 분야별 공약 카드 리스트 표시 | High | Pending |
| FR-04 | 갤러리: 활동 사진 그리드/라이트박스 표시 | Medium | Pending |
| FR-05 | 헤더: 고정 내비게이션 바, 섹션 스크롤 이동 | High | Pending |
| FR-06 | 푸터: 연락처, SNS 링크 표시 | Medium | Pending |
| FR-07 | 반응형: 모바일/태블릿/PC 브레이크포인트 대응 | High | Pending |
| FR-08 | 다크모드: 시스템 설정 기반 자동 전환 | Low | Pending |
| FR-09 | Lenis 기반 관성 스크롤 (부드러운 관성 스크롤) | High | Done |
| FR-10 | 스크롤 프로그레스 바 (최상단 인디고 그라디언트) | Medium | Done |
| FR-11 | 커스텀 커서 (반전 블렌드, 호버 확대, 모바일 숨김) | Medium | Done |
| FR-12 | 마그네틱 버튼 (마우스 따라가는 CTA) | Medium | Done |
| FR-13 | 히어로 배경 부유 오브 (인디고/바이올렛/시안) | Medium | Done |
| FR-14 | Wavy SVG 섹션 디바이더 | Medium | Done |
| FR-15 | 그라디언트 텍스트 (히어로 이름) | Medium | Done |
| FR-16 | 히어로 사진 패럴랙스 (스크롤 시 Y축 이동) | Medium | Done |
| FR-17 | 공약 카드 글래스모피즘 + 3D 틸트 | High | Done |
| FR-18 | 갤러리 라이트박스 AnimatePresence 전환 (scale/blur) | Medium | Done |
| FR-19 | 노이즈 텍스처 오버레이 (body::before) | Low | Done |
| FR-20 | prefers-reduced-motion 접근성 대응 | High | Done |

### 3.2 Non-Functional Requirements

| Category | Criteria | Measurement Method |
|----------|----------|-------------------|
| Performance | LCP < 2.5s, FID < 100ms | Lighthouse |
| SEO | 메타태그, OG 이미지, 시맨틱 HTML | Lighthouse SEO 점수 90+ |
| Accessibility | WCAG 2.1 AA 준수 | Lighthouse 접근성 점수 90+ |
| Responsive | 320px ~ 1920px 해상도 대응 | 디바이스 테스트 |

---

## 4. Success Criteria

### 4.1 Definition of Done

- [ ] 모든 기능 요구사항(FR-01~08) 구현 완료
- [ ] PC/모바일 반응형 동작 확인
- [ ] Lighthouse 성능 점수 90+
- [ ] 빌드 에러 없음

### 4.2 Quality Criteria

- [ ] Zero lint errors
- [ ] TypeScript strict mode 빌드 성공
- [ ] 이미지 최적화 (next/image 사용)

---

## 5. Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| 이미지 용량으로 인한 로딩 속도 저하 | High | Medium | next/image 최적화, WebP 포맷, lazy loading |
| 모바일에서 갤러리 레이아웃 깨짐 | Medium | Medium | 반응형 그리드 + 브레이크포인트 테스트 |
| 콘텐츠(공약, 사진) 미확정으로 작업 지연 | Medium | High | 더미 데이터로 먼저 구현, 추후 교체 |
| 모션 과다로 60fps 미달 | High | Low | prefers-reduced-motion 대응, 모바일 커서/틸트 비활성화 |
| lenis 관성 스크롤 충돌 | Medium | Low | CSS scroll-behavior: smooth 제거, lenis 단독 관리 |

---

## 6. Architecture Considerations

### 6.1 Project Level Selection

| Level | Characteristics | Recommended For | Selected |
|-------|-----------------|-----------------|:--------:|
| **Starter** | Simple structure (`components/`, `lib/`, `types/`) | Static sites, portfolios, landing pages | ✅ |
| **Dynamic** | Feature-based modules, BaaS integration | Web apps with backend | ☐ |
| **Enterprise** | Strict layer separation, DI, microservices | High-traffic systems | ☐ |

### 6.2 Key Architectural Decisions

| Decision | Options | Selected | Rationale |
|----------|---------|----------|-----------|
| Framework | Next.js / React / Vue | Next.js 15 | 이미지 최적화, SSG, SEO 지원 |
| Styling | Tailwind / CSS Modules | Tailwind CSS v4 | 빠른 개발, 반응형 유틸리티 |
| Image | next/image / 수동 최적화 | next/image | 자동 최적화, lazy loading |
| Deployment | Vercel / Netlify | Vercel | Next.js 최적 호스팅 |

### 6.3 Clean Architecture Approach

```
Selected Level: Starter

Folder Structure:
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 (단일) 페이지
│   └── globals.css         # 글로벌 스타일
├── components/
│   ├── header.tsx          # 고정 내비게이션
│   ├── hero-banner.tsx     # 히어로 배너
│   ├── profile-section.tsx # 프로필 섹션
│   ├── pledge-section.tsx  # 공약 섹션
│   ├── gallery-section.tsx # 갤러리 섹션
│   └── footer.tsx          # 푸터
├── data/
│   ├── candidate.ts        # 후보자 정보 데이터
│   ├── pledges.ts          # 공약 데이터
│   └── gallery.ts          # 갤러리 이미지 데이터
└── lib/
    └── utils.ts            # 유틸리티 함수
public/
├── images/                 # 후보자/활동 이미지
└── og-image.png            # OG 이미지
```

---

## 7. Convention Prerequisites

### 7.1 Existing Project Conventions

- [x] `CLAUDE.md` has coding conventions section
- [ ] ESLint configuration (Next.js 기본 설정 사용)
- [ ] Prettier configuration (hooks로 자동 포맷팅)
- [ ] TypeScript configuration (`tsconfig.json`)

### 7.2 Conventions to Define/Verify

| Category | Current State | To Define | Priority |
|----------|---------------|-----------|:--------:|
| **Naming** | CLAUDE.md에 정의됨 | 전역 규칙 따름 | High |
| **Folder structure** | Missing | Starter 레벨 구조 | High |
| **Component** | Missing | 섹션 단위 컴포넌트 분리 | High |
| **Data** | Missing | 콘텐츠 데이터 파일 분리 | Medium |

### 7.3 Environment Variables Needed

| Variable | Purpose | Scope | To Be Created |
|----------|---------|-------|:-------------:|
| `NEXT_PUBLIC_SITE_URL` | 사이트 URL (OG 메타태그용) | Client | ☐ |

---

## 8. Next Steps

1. [ ] Design 문서 작성 (`voter-view.design.md`)
2. [ ] Next.js 프로젝트 초기화 (`pnpm create next-app`)
3. [ ] 컴포넌트 구현 시작

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2026-03-09 | Initial draft | jooladen |
| 0.2 | 2026-03-09 | Awwwards 2차 디자인 업그레이드 (FR-09~FR-20) 추가 | Claude Code |
