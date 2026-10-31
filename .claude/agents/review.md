# 코드리뷰 가이드

## 협업 방식

사람이 코드 작성 후 리뷰 요청 시 Claude가 검토한다.
기획 → 설계 → 구현이 일치하는지 확인한다.

---

## 리뷰 체크리스트

### 공통
- [ ] 브랜치명이 `feat/{설명}` 형식인가
- [ ] 커밋 메시지가 `feat: 설명` 형식인가 (Co-Authored-By 없는지)
- [ ] `@mood-receipt/types` 타입을 올바르게 사용하는가
- [ ] 불필요한 `console.log`, 주석 없는가
- [ ] TypeScript 타입 오류 없는가

### 백엔드 (apps/api)
- [ ] 기획 명세의 엔드포인트가 구현되었는가
- [ ] 에러 응답이 NestJS HttpException 형태인가
- [ ] 존재하지 않는 리소스에 404 반환하는가
- [ ] JWT 인증이 필요한 엔드포인트에 Guard 적용되었는가

### 프론트엔드 (apps/web)
- [ ] 기획 명세의 화면이 구현되었는가
- [ ] API 호출이 `lib/api.ts`를 통하는가
- [ ] 로딩/에러 상태 처리가 있는가
- [ ] 비로그인 접근 시 redirect 처리가 되는가

---

## 내가 참고하는 파일

- `.claude/agents/planning.md` — 기획 요구사항 (구현 일치 여부 검증 기준)
- `.claude/agents/api.md` — API 명세
- `.claude/agents/index.md` — 컨벤션 및 전체 협업 방식
