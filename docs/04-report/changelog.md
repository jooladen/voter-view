# Changelog

모든 주요 변경사항을 이 문서에 기록합니다. 형식은 [Keep a Changelog](https://keepachangelog.com/ko/1.1.0/)을 기반합니다.

## [2026-03-09] - voter-view 프로젝트 완료

### Added
- **단일 페이지 웹사이트**: 6개 섹션(헤더, 히어로, 프로필, 공약, 갤러리, 푸터)
- **컴포넌트 아키텍처**: 7개 재사용 가능한 React 컴포넌트
- **데이터 계층**: 4개 타입 안전 데이터 파일 (candidate, pledges, gallery, navigation)
- **반응형 디자인**: Mobile/Tablet/Desktop 3단계 레이아웃 (320px ~ 1920px)
- **다크모드**: 시스템 설정 기반 자동 전환 (Tailwind dark: 클래스)
- **갤러리 라이트박스**: ESC/화살표/배경클릭 등 완벽한 키보드 네비게이션
- **SEO 최적화**: OG 메타태그 + 구조화된 메타데이터
- **이미지 최적화**: next/image 활용 (lazy loading, WebP, 자동 리사이징)
- **접근성**: HTML lang="ko" + semantic HTML + keyboard navigation
- **스타일링**: Tailwind CSS v4로 모든 컴포넌트 스타일링

### Changed
- Profile grid 너비 최적화: 300px → 280px (레이아웃 정밀도)
- Profile 섹션 gap 조정: 8 → 10 (시각적 여백 개선)
- Footer 텍스트 색상: white → gray-300 (다크모드 명도 개선)
- SEO title 패턴: 동적 슬로건 포함으로 검색 랭킹 강화
- SEO description: 공약 키워드 추가로 검색 관련성 개선
- Copyright 연도: 하드코딩 제거, 동적 계산으로 유지보수 간편화

### Fixed
- N/A (초기 구현으로 설계 미준수 버그 없음)

### Technical Details
- **Framework**: Next.js 15 + React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **Bundle**: 외부 라이브러리 0개 (Next.js 기본 기능만 활용)
- **Build**: `pnpm build` 성공
- **Lint**: 에러 없음

### Quality Metrics
- **Design Match Rate**: 97% ✅
- **Convention Compliance**: 100%
- **Type Safety**: 100% (any 미사용)
- **Iteration Count**: 0 (≥90% 기준 자동 통과)

### Files Created
- App Router: 3개 (layout.tsx, page.tsx, globals.css)
- Components: 7개 (header, hero-banner, profile-section, pledge-section, pledge-card, gallery-section, footer)
- Data: 4개 (candidate.ts, pledges.ts, gallery.ts, navigation.ts)

---

## 기록 형식 규칙

- **Added**: 새로운 기능 추가
- **Changed**: 기존 기능 수정/개선
- **Fixed**: 버그 수정
- **Removed**: 기능 제거
- **Deprecated**: 향후 제거될 예정인 기능
- **Security**: 보안 관련 변경

각 항목에는 실제 변경이 있는 파일/기능만 기록합니다.
