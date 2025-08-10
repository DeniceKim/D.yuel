/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    node: true, // Node.js 환경 설정
    commonjs: true, // CommonJS 구문 허용
    es2021: true, // ECMAScript 2021 환경 지원
  },
  root: true, // 프로젝트 최상위 설정
  extends: [
    'plugin:vue/vue3-essential', // Vue 3 기본 규칙
    'eslint:recommended', // 추천 ESLint 규칙
    '@vue/eslint-config-prettier/skip-formatting', // Prettier와의 충돌 방지
    'prettier', // Prettier 설정 적용
  ],
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 지원
    sourceType: 'module', // ES 모듈 지원
  },
  plugins: [
    'node', // Node.js 관련 린트 플러그인
  ],
  rules: {
    'vue/multi-word-component-names': 'off', // Vue 다중 단어 이름 규칙 비활성화
    'no-var-requires': 'off', // require 관련 에러 비활성화
    'node/no-missing-require': 'error', // Node.js의 require 경로 오류 방지
    'quotes': ['error', 'single'], // 문자열은 싱글 쿼트 사용 강제
    'semi': ['error', 'always'], // 세미콜론 강제 사용
    'vue/component-name-in-template-casing': ['error', 'PascalCase'], // Vue 템플릿 내 PascalCase 강제
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always', // Vue 컴포넌트도 셀프 클로징 허용
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-multiple-template-root': 'off', // 다중 루트 허용
  },
};
