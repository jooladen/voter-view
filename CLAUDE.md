# voter-view

선거 후보자 홍보 웹사이트 (공약, 활동 사진/갤러리, 반응형)

## 기술 스택

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- pnpm

## 개발 명령어

```bash
pnpm dev          # 개발 서버
pnpm build        # 프로덕션 빌드
pnpm lint         # ESLint 실행
pnpm typecheck    # TypeScript 타입 체크
```

## 프로젝트 구조

```
src/
├── app/           # Next.js App Router 페이지
├── components/    # 재사용 컴포넌트
├── lib/           # 유틸리티 함수
└── assets/        # 정적 자산 (이미지 등)
public/            # 공개 정적 파일
```

## 프로젝트 규칙

### 이미지

- next/image 컴포넌트 필수 사용 (width, height, alt 필수)
- 후보자 사진은 WebP 포맷 우선
- 갤러리 이미지는 lazy loading 적용

### SEO

- 모든 페이지에 메타태그 (title, description, og:image) 필수
- 시맨틱 HTML 사용 (header, main, section, footer)

### 접근성

- 모든 인터랙티브 요소에 aria-label 또는 시맨틱 태그
- 색상 대비 WCAG AA 기준 충족

### 콘텐츠

- 후보자 정보, 공약 등 콘텐츠는 별도 데이터 파일로 분리
- 하드코딩 금지 → 데이터 파일에서 import
