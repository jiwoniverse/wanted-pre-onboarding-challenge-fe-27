# wanted-pre-onboarding-challenge-fe-27

## 유연하게 결합하기

### 웹 FE 구현 포인트

- 상태 관리(Form Validation, Local State, Global State)
- 비동기, 캐싱
- 인증, 인가
- 사용자 액션에 따른 적절한 피드백 (UI/UX)
- 관심사의 분리

### 복잡도를 낮추기 위해 고려할 내용들

- 순수 함수와 부수 효과
- 데이터, 계산, 액션의 구분

### 비즈니스 로직과 애플리케이션 로직 분리하기

- SOLID, 컴포넌트, 구조
- 추상화, 캡슐화, 응집도

## Todo App

### 시작하기

[배포 링크](https://todos-kappa-cyan.vercel.app)

백엔드는 아래 방법으로 로컬에서 실행시켜주셔야 합니다.

```bash
git clone https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api
cd wanted-pre-onboarding-challenge-fe-1-api
yarn
yarn start # localhost:8080
```

### 기술 스택

- React, Vite, TypeScript, React-router-dom
- 서버 상태 관리: React-query
- 폼 관리: React-hook-form, Zod
- UI: chakra-ui
