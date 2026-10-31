# mood-receipt — Agent 운영 가이드

## 협업 원칙 (핵심)

이 프로젝트는 **사람(Mogeum) + Claude가 함께** 만든다.

| 영역                       | 주도             | 역할                                         |
| -------------------------- | ---------------- | -------------------------------------------- |
| 백엔드 API (apps/api)      | **사람 + Claude** | 사람이 직접 코딩, Claude는 방향·막히는 부분 지원 |
| DB 스키마                  | **사람 + Claude** | 사람이 설계, Claude는 검토·제안               |
| 공유 타입 (packages/types) | **사람 + Claude** | 함께 정의                                    |
| 프론트엔드 (apps/web)      | **사람 + Claude** | 사람이 직접 코딩, Claude는 방향·막히는 부분 지원 |
| 기획                       | **사람 + Claude** | 사람이 요구사항, Claude가 정리·검토           |

> Claude는 묻기 전에 코드를 먼저 작성하지 않는다.
> 막히는 부분을 물어보면 설명하거나 코드를 제시한다.
> 방향과 구조는 함께 잡는다.

---

## 워크플로우

```
[기획 확정 — 사람 + Claude]
  요구사항 정리 + index.html 프로토타입으로 UI 확인
      ↓
[백엔드 구현 — 사람]     [프론트엔드 구현 — 사람]
  NestJS API 구현          Next.js UI 구현
  Prisma schema/migrate    API 스펙 참고
  (apps/api)               (apps/web)
      ↓
[Claude 지원]
  막히는 부분 설명·코드 제시
  코드리뷰 요청 시 검토
```

---

## Agent 파일 목록

| 파일                         | 역할                  |
| ---------------------------- | --------------------- |
| [planning.md](./planning.md) | 기획 및 기능 범위     |
| [api.md](./api.md)           | 백엔드 개발 가이드    |
| [frontend.md](./frontend.md) | 프론트엔드 개발 가이드 |
| [review.md](./review.md)     | 코드리뷰 가이드       |
| [github.md](./github.md)     | GitHub 연동 정보      |

---

## 기능 변경 시 순서

1. **기획 확정** — `planning.md`의 "현재 기능 범위" 업데이트
2. **index.html 프로토타입** — UI를 Claude와 함께 확인
3. **도메인 확정** — `schema.prisma`, `packages/types` 변경 여부 판단
4. **백엔드 구현** — 사람이 직접, 막히면 Claude에게
5. **프론트엔드 구현** — 사람이 직접, 막히면 Claude에게

---

## 공유 컨벤션

- 브랜치: `feat/{설명}` / `fix/{설명}`
- 커밋: `feat: 설명` / `fix: 설명` (Co-Authored-By 금지)
- PR 제목: `[feat] 설명`
- 공유 타입: `@mood-receipt/types`에서만 import

---

## 기술 스택

| 분류       | 기술                          |
| ---------- | ----------------------------- |
| 모노레포   | Turborepo + pnpm workspaces   |
| 언어       | TypeScript                    |
| 백엔드     | NestJS (port 4000)            |
| 프론트엔드 | Next.js 16 (port 3000)        |
| ORM        | Prisma                        |
| DB         | PostgreSQL                    |
| 인증       | Google OAuth + JWT            |
| 이미지     | Supabase Storage (추후 결정)  |
| 공유 타입  | @mood-receipt/types           |
