# 테니스 협회 관리 시스템

테니스 협회를 위한 통합 관리 시스템입니다.

## 주요 기능

- 클럽 등록 및 관리
- 회원 등록 및 가입
- 대회 요강 등록
- 대회 참석 신청
- 대진 및 대회 결과 등록
- 포스트 등록

## 기술 스택

- **Next.js**: React 기반 프레임워크
- **Sanity**: 콘텐츠 관리 시스템
- **Bootstrap**: UI 컴포넌트 라이브러리
- **TypeScript**: 타입 안정성

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
tennistab/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx   # 루트 레이아웃
│   │   ├── page.tsx     # 홈 페이지
│   │   └── globals.css  # 전역 스타일
│   └── lib/
│       └── sanity/      # Sanity 클라이언트 설정
├── public/              # 정적 파일
├── next.config.js       # Next.js 설정
├── tsconfig.json        # TypeScript 설정
└── package.json
```

## 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run start`: 프로덕션 서버 실행
- `npm run lint`: ESLint 실행

