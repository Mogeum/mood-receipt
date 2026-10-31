# 프론트엔드 개발 가이드

## 협업 방식

이 영역은 **사람(Mogeum)이 직접 코딩**한다.
Claude는 방향·구조 제안, 막히는 부분 설명, 요청 시 코드 제시를 담당한다.
묻기 전에 먼저 코드를 작성하지 않는다.

기능 구현 전에 **index.html 프로토타입**으로 UI를 먼저 확인한다.

---

## 담당 영역

```
apps/web/
  app/
    layout.tsx
    page.tsx              # 내 아카이브 (로그인 필요)
    receipt/
      [id]/page.tsx       # 영수증 상세 (공개)
    new/page.tsx          # 영수증 작성
  components/
    Receipt/              # 영수증 컴포넌트
  lib/
    api.ts                # API 호출 함수
```

---

## 기술 스택

| 항목       | 기술                  |
| ---------- | --------------------- |
| 프레임워크 | Next.js 16 (App Router) |
| 스타일     | Tailwind CSS          |
| 상태 관리  | TanStack Query        |
| 포트       | 3000                  |

---

## 개발 원칙

- 서버 상태 관리는 TanStack Query (`useQuery`, `useMutation`)
- API 호출은 반드시 `lib/api.ts`를 통해 (컴포넌트에서 직접 fetch 금지)
- Next.js App Router 사용 (pages router 사용 금지)
- 타입은 `@mood-receipt/types`에서 import

---

## 페이지 구조 (예정)

| 경로             | 설명                          | 인증 필요 |
| ---------------- | ----------------------------- | --------- |
| /                | 내 아카이브 (영수증 목록)     | O         |
| /receipt/:id     | 영수증 상세                   | X         |
| /new             | 영수증 작성                   | O         |
| /login           | 구글 로그인                   | X         |

---

## 영수증 디자인 특징

- 세로형 영수증 카드
- 찢어진 하단선 (CSS 또는 SVG)
- 점선 구분선
- 카테고리별 색상 구분

---

## 내가 참고하는 파일

- `.claude/agents/planning.md` — 기획 및 기능 범위
- `.claude/agents/index.md` — 전체 협업 방식
- `packages/types/src/index.ts` — 공유 타입
