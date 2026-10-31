# mood-receipt

개인 문화 경험을 영수증 형태로 기록하고 쌓아보는 노트 서비스

## 협업 방식

- 코딩은 사람(Mogeum)이 직접 한다
- Claude는 방향·구조 제안, 막히는 부분 설명, 요청 시 코드 제시
- 묻기 전에 코드를 먼저 작성하지 않는다
- 기능 구현 전에 index.html 프로토타입으로 UI를 먼저 확인한다
- Git은 사람이 직접 한다 (Claude는 git 명령 실행 안 함)

## 상세 가이드

- `.claude/agents/index.md` — 전체 협업 방식 및 컨벤션
- `.claude/agents/planning.md` — 기획 및 기능 범위
- `.claude/agents/api.md` — 백엔드 개발 가이드
- `.claude/agents/frontend.md` — 프론트엔드 개발 가이드
- `.claude/agents/review.md` — 코드리뷰 가이드
- `.claude/agents/github.md` — GitHub 연동 정보

## 기술 스택

| 분류       | 기술                        |
| ---------- | --------------------------- |
| 모노레포   | Turborepo + pnpm workspaces |
| 백엔드     | NestJS (port 4000)          |
| 프론트엔드 | Next.js 16 (port 3000)      |
| ORM        | Prisma                      |
| DB         | PostgreSQL                  |
| 인증       | Google OAuth + JWT          |
| 공유 타입  | @mood-receipt/types         |
