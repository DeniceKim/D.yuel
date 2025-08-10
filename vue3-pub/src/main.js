// 1. 전역 스타일 로드
import "./assets/scss/common/style.scss";

// 2. 필수 라이브러리 로드
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { createPinia } from "pinia"; // 상태 관리 라이브러리
import $ from "jquery"; // jQuery 라이브러리
import mainTypePlugin from "./plugins/mainTypePlugin"; // mainType 플러그인
import routes from "./router/routes"; // 퍼블리싱 환경 라우트

// ✅ `BASE_PATH` 설정 (마지막 `/` 제거)
const basePath = (import.meta.env.VITE_BASE_PATH || "/").replace(/\/$/, "");

// ✅ jQuery 전역 등록
if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
}

// ✅ ViteSSG로 Vue 앱 생성 (Vue Router 자동 처리)
export const createApp = ViteSSG(
  App,
  { routes: routes, base: basePath }, // ✅ `router`를 따로 `use()` 하지 않음
  (ctx) => {
    const store = createPinia();
    ctx.app.use(store);

    // ✅ 환경 변수 전역 제공
    ctx.app.provide("env", import.meta.env);

    // ✅ 플러그인 등록
    ctx.app.use(mainTypePlugin);

    console.log("Publishing mode initialized", ctx.router.getRoutes());
  }
);
