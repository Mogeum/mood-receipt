# 백엔드 개발 가이드

## 협업 방식

이 영역은 **사람(Mogeum)이 직접 코딩**한다.
Claude는 방향·구조 제안, 막히는 부분 설명, 요청 시 코드 제시를 담당한다.
묻기 전에 먼저 코드를 작성하지 않는다.

---

## 담당 영역

```
apps/api/
  src/
    main.ts
    app.module.ts
    auth/           # Google OAuth + JWT
    receipt/        # 영수증 CRUD
    user/           # 유저 정보

packages/types/
  src/index.ts      # 공유 타입 (프론트와 공유)
```

---

## 기술 스택

| 항목   | 기술                            |
| ------ | ------------------------------- |
| 프레임워크 | NestJS                      |
| ORM    | Prisma                          |
| DB     | PostgreSQL                      |
| 인증   | Passport.js + Google OAuth + JWT |
| 포트   | 4000                            |

---

## 개발 원칙

- 타입은 `@mood-receipt/types`에서 import, 로컬 중복 정의 금지
- 모듈은 기능 단위로 분리 (auth, receipt, user)
- 에러 응답은 NestJS 기본 HttpException 활용
- 존재하지 않는 리소스는 반드시 NotFoundException (404)
- `as` 타입 캐스팅 금지

---

## API 엔드포인트 (예정)

### 인증
| 메서드 | 경로                  | 설명                    |
| ------ | --------------------- | ----------------------- |
| GET    | /auth/google          | 구글 로그인 시작        |
| GET    | /auth/google/callback | 구글 OAuth 콜백         |
| GET    | /auth/me              | 내 정보 조회 (JWT 필요) |

### 영수증
| 메서드 | 경로            | 설명                          |
| ------ | --------------- | ----------------------------- |
| POST   | /receipts       | 영수증 생성 (JWT 필요)        |
| GET    | /receipts       | 내 영수증 목록 (JWT 필요)     |
| GET    | /receipts/:id   | 영수증 상세 (비로그인 가능)   |
| PATCH  | /receipts/:id   | 영수증 수정 (JWT + 본인 확인) |
| DELETE | /receipts/:id   | 영수증 삭제 (JWT + 본인 확인) |

---

## 내가 참고하는 파일

- `.claude/agents/planning.md` — 기획 및 기능 범위
- `.claude/agents/index.md` — 전체 협업 방식
- `packages/types/src/index.ts` — 공유 타입
