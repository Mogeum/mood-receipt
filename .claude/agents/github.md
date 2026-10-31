# GitHub 연동

## 프로젝트 정보

| 항목        | 값                                     |
| ----------- | -------------------------------------- |
| 레포        | https://github.com/Mogeum/mood-receipt |
| 브랜치 전략 | main (배포) / feat·fix 브랜치 (작업)   |

---

## 브랜치 전략

```
main
└── feat/{설명}   ← 기능 브랜치
└── fix/{설명}    ← 버그 수정
```

---

## 커밋 메시지

```
feat: 설명
fix: 설명
refactor: 설명
chore: 설명
```

Co-Authored-By 줄 추가 금지.

---

## PR 규칙

- 제목: `[feat] 설명` 또는 `[fix] 설명`
- 사람이 직접 작성 후 push
- 머지 후 브랜치 삭제

---

## 자주 쓰는 명령어

```bash
gh pr list
gh pr status
gh pr create
gh auth status
```
