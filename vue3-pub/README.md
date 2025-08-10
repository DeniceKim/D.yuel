# VUE3 기본 구조

## 기본 명령어

```sh
# dist 폴더 삭제
rmdir /s /q dist

# .lock 파일 삭제
del package-lock.json

# node_modules 삭제
rmdir /s /q node_modules

# vite 캐시 삭제
rmdir /s /q node_modules\.vite

# S : Mac ==========================
dist 폴더 삭제
rm -rf dist

package-lock.json 파일 삭제
rm -f package-lock.json

node_modules 폴더 삭제
rm -rf node_modules

# E : Mac ==========================

# npm 캐시 삭제
npm cache clean --force

# ESLint 캐시 제거 및 재실행
npx eslint --ext .vue,.js src --fix

npm install           # 의존성 재설치
npm run dev           # 개발 서버 실행
npm run build:ssg     # 정적 파일 빌드
npm run preview       # 정적 파일 실행
```


## 기본 레이아웃 구조 및 class name 정의 

```sh

# 레이아웃
**l-* 로 시작하는 Prefix 제공**       
구조 예시)      
<div id="app" class="l-wrap"></div>      
변경 예시) 
index.html
<body id="app" data-layout="main & sub"></body>  
mainLayout에서는 data-layout="main"    
subLayout에서는 data-layout="sub"    
mainLayout.vue, subLayout.vue
<div class="l-wrap"></div>         
        
## 기본 레이아웃         
header, main, footer의 구조를 가지며 l-* 시작하는 Prefix 제공         
구조 예시)       
<header class="l-header"></header>                     // 레이아웃의 상단영역            
<main class="l-page" data-page="파일명"></main>        // 레이아웃의 본문영역            
<footer class="l-footer"></footer>                    // 레이아웃의 하단영역            
        
## page내 부모요소 레이아웃         
data-page="작업파일명" 추가 제공         
구조 예시)       
<main class="l-page" data-page="Button"></main>            
        
## page내 main안에 작성되는 Contents(디자인에 따라 동적으로 변경 가능)         
chead, cbody, cfoot의 구조를 가진 class name 지정    
구조 예시)        
<div class="chead"></div>  // Contents내 상단 구조                 
<div class="cbody"></div>  // Contents내 본문 구조     
<div class="cfoot"></div>  // Contents내 하단 구조     

## 전체 레이아웃 구조 예시
<body id="app" data-layout="main & sub">
  <div class="l-wrap">                            // 전체 감싸는 부모요소 레이아웃(고정)        
    <header class="l-header"></header>            // 레이아웃의 상단(고정)          
    <main class="l-page" data-page="파일명">      // 레이아웃의 본문(Contents)(고정)         
      <div class="chead"></div>                   // Contents내 상단(디자인에 따라서 동적으로 변할 수 있는 구조)                 
      <div class="cbody"></div>                   // Contents내 본문(디자인에 따라서 동적으로 변할 수 있는 구조)                 
      <div class="cfoot"></div>                   // Contents내 하단(디자인에 따라서 동적으로 변할 수 있는 구조)                 
    </main>      
    <footer class="l-footer"></footer>            // 레이아웃의 하단(디자인에 따라 사용할 수도 있고 없을 수도 있음)            
  </div>      
</body>

## 기본 Components 들의 class name 정의
**c-* 시작하는 Prefix를 정의하고 각각 Component들의 name정의**       

예시) <button type="button" class="c-btn"></button>   // 버튼   

## Component들의 style 호출 방식
Component들의 css는 각각 별도 호출      
예시)    
파일명 : Button.vue     
Button.vue에서 호출    
<style lang="scss">        
@use "@/assets/scss/component/_button" as button;       
</style>          

```

## 네이밍 및 scss 정의

```sh
# 파일명 네이밍 규칙 - 파스칼 케이스 (Pascal case)
예) Button.vue, ButtonTest.vue

# ID 네이밍 규칙 - 카멜 케이스 (Camel case)
예) id="btnGgroup"

# Component class 네이밍 규칙 - 케밥케이스 (Kebab case)
레이아웃 l-*
페이지   p-*
단위별   c-*

단위별 작업 scss
각 component*.scss

# Contents내 그룹화 작업(디자인에 맞추어 작업) class 네이밍 규칙 - 스네이크 케이스(Snake case)
예) class="group_button" 또는 단일 class class="cbody"
작업 scss
_reset.scss    // 초기화 정의
_utility.scss  // 공통 class 정의
_common.scss   // 기본 레이아웃, 페이지 레이아웃

# 상태 class - is-* Prifix로 시작
예) class="c-btn is-active", class="c-modal is-show"
```

## 기본 폴더 구조    

📦public    
📦src    
 ┣ 📂assets    
 ┣ 📂components    
 ┣ 📂composables   
 ┣ 📂data    
 ┣ 📂layouts      
 ┣ 📂mixins      
 ┣ 📂pages      
 ┣ 📂plugins     
 ┣ 📂router      
 ┣ 📂store      
 ┣ 📂utils        
 ┣ 📂views          

```sh
public: 정적 파일(정적 자산)을 저장하는 디렉토리.        
assets: 정적 자산(CSS, 이미지 등).       
components: 재사용 가능한 소형 컴포넌트.       
composables: Composition API를 활용한 로직.          
data: 정적 데이터 파일.          
layouts: 공통 레이아웃 컴포넌트.         
mixins: 재사용 가능한 로직(주로 Vue 2).          
pages: 라우트와 연결된 페이지.          
plugins: Vue 플러그인 설정.          
router: 라우터 설정.         
store: 상태 관리.         
utils: 재사용 가능한 유틸리티 함수.         
views: 중간 수준의 뷰 컴포넌트.       
```

## 폴더 구조 상세 설명 예시   

📦 **public**   
- 역할: 정적 파일(정적 자산)을 저장하는 디렉토리.    
- 내용:   
  - 정적 HTML, 이미지, 폰트, favicon 등.    
  - 빌드 시 변경되지 않고 그대로 배포.   
- 특징:   
  - 이 디렉토리 내 파일은 / 경로로 접근 가능.   
  - Vue CLI 사용 시 index.html이 이곳에 위치.   

---   
📦 **src**   
- 역할: 애플리케이션의 주요 소스 코드가 위치하는 디렉토리.   

---   

📂 **assets**   
- 역할: 이미지, CSS, SCSS, JavaScript 등 애플리케이션 내부에서 사용하는 정적 자산.   
- 특징:   
  - Webpack에 의해 처리되어 최적화 및 번들링.   
  - 보통 src 내부에서만 참조.   
- 예시:   
  - src/assets/images/logo.png   
  - src/assets/scss/main.scss   

---   

📂 **components**   
- 역할: 재사용 가능한 Vue 컴포넌트를 저장.   
- 특징:   
  - 작은 UI 요소나 독립적인 컴포넌트.   
  - 다른 페이지, 뷰 또는 레이아웃에서 사용.   
- 예시:   
  - 버튼, 모달, 카드 등.   

---   

📂 **composables**   
- 역할: Vue 3의 Composition API 관련 코드 저장.   
- 특징:   
  - 공통 로직을 캡슐화하여 재사용 가능.   
  - 상태 관리, 이벤트 처리 등을 처리.   
- 예시:   
  - useAuth.js: 사용자 인증 로직.   
  - useFetch.js: API 호출 로직.   

---   

📂 **data**   
- 역할: 정적 데이터 또는 데이터 파일 저장.   
- 특징:   
  - JSON, Mock 데이터 또는 설정 파일.   
  - 동적인 데이터 소스가 아닌 정적인 데이터 소스.   
- 예시:   
  - menuItems.json: 네비게이션 메뉴 데이터.   

---   

📂 **layouts**   
- 역할: 페이지의 공통 레이아웃 구조를 정의.   
- 특징:   
  - 헤더, 푸터, 사이드바 등 공통적으로 사용하는 레이아웃 컴포넌트를 포함.   
- 예시:   
  - MainLayout.vue: 메인 레이아웃.   
  - AuthLayout.vue: 로그인/회원가입 레이아웃.   

---   

📂 **mixins**   
- 역할: Vue 2에서 사용되던 로직 재사용을 위한 믹스인 파일 저장.   
- 특징:   
  - Vue 3에서는 Composition API로 대체되는 경우가 많음.   
  - 여전히 Vue 2 프로젝트 또는 일부 특수 상황에서 사용.   
- 예시:   
  - validationMixin.js: 입력 검증 로직.   

---   

📂 **pages**   
- 역할: 라우트와 직접 연결된 페이지 컴포넌트 저장.   
- 특징:   
  - 최상위 수준의 Vue 컴포넌트.   
  - 각 페이지는 고유한 라우트와 연결됨.   
  - 내부에서 components 또는 views를 조합하여 사용.   
- 예시:   
  - HomePage.vue, LoginPage.vue, Error404Page.vue.   

---   

📂 **plugins**   
- 역할: Vue 플러그인 관련 설정 저장.   
- 특징:   
  - 제3자 라이브러리(Vuetify, Axios 등) 설정 파일.   
  - Vue 애플리케이션에 글로벌 설정을 추가.   
- 예시:   
  - axios.js: Axios 전역 설정.   
  - vuetify.js: Vuetify 설정.   

---   

📂 **router**   
- 역할: Vue Router 설정 파일 저장.   
- 특징:   
  - 애플리케이션의 라우트 정의.   
  - 동적 라우트, 네비게이션 가드 등을 포함.   
- 예시:   
  - index.js: 라우트 설정.   
  - routes.js: 모든 라우트 모음.   

---   

📂 **store**   
- 역할: 상태 관리 관련 파일 저장.   
- 특징:   
  - Vuex 또는 Pinia를 사용하여 상태 관리.   
  - 글로벌 상태, 모듈화된 상태 저장.   
- 예시:   
  - index.js: Vuex 스토어 초기화.   
  - auth.js: 인증 관련 상태 모듈.   

---   

📂 **utils**   
- 역할: 유틸리티 함수 저장.   
- 특징:   
  - 일반적으로 재사용 가능한 함수들.   
  - 날짜 처리, 문자열 변환, 데이터 형식화 등.   
- 예시:   
  - dateUtils.js: 날짜 관련 함수.   
  - apiUtils.js: API 응답 처리 함수.   

---   

📂 **views**      
- 역할: 재사용 가능한 중간 수준의 뷰 컴포넌트 저장.   
- 특징:   
  - 주로 페이지 내부에서 사용되는 큰 단위의 UI 구성 요소.   
  - 라우트와 독립적이며, pages에서 사용됨.   
- 예시:   
  - DashboardView.vue: 대시보드 뷰.   
  - ProfileView.vue: 프로필 뷰.   
   
---   

📦 **dist**    
애플리케이션이 빌드(build) 과정 후 생성된 배포용 파일이 저장되는 디렉토리입니다. 이 디렉토리는 프로젝트의 최종 산출물이며, 서버에 업로드하거나 배포 플랫폼에서 사용하는 파일들로 구성됩니다.

- 빌드된 결과물:
  - Vue.js 프로젝트에서 npm run build 또는 yarn build를 실행하면 dist 디렉토리에 최적화된 파일들이 생성됩니다.
  - HTML, CSS, JavaScript 파일이 번들링(minified)되고, 브라우저에서 실행할 수 있는 상태로 준비됩니다.
- 최적화:
  - Webpack 또는 Vite를 사용하여 파일 크기를 줄이고 성능을 최적화.
  - 결과물에는 일반적으로 소스맵 파일도 포함될 수 있음(디버깅용).
- 배포 대상:
  - dist 디렉토리는 서버(Nginx, Apache 등) 또는 클라우드 서비스(예: Netlify, Vercel)에 업로드됩니다.
  - 대부분의 CI/CD 파이프라인에서도 이 디렉토리를 사용하여 애플리케이션을 배포합니다.