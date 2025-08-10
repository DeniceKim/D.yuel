import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { nextTick } from "vue";

// ✅ BASE_PATH 설정 (마지막 `/` 제거)
const basePath = (import.meta.env.VITE_BASE_PATH || "/design/testurl").replace(/\/$/, "");

// ✅ Vue Router 인스턴스 생성 (BASE_PATH 적용)
const router = createRouter({
  history: createWebHistory(basePath), // ✅ BASE_PATH 유지하여 정상적인 URL 라우팅 설정
  routes: routes,
});

console.log("Generated Routes:", router.getRoutes());

// ✅ 전역 네비게이션 가드: BASE_PATH 유지 + 새로고침 정상 동작
router.beforeEach((to, from, next) => {
  const defaultTitle = "퍼블리싱";

  // ✅ `beforeEach()`에서 `document.title` 즉시 설정
  document.title = to.meta.title || defaultTitle;

  // ✅ BASE_PATH가 중복되지 않도록 보정
  if (!to.fullPath.startsWith(basePath) && !to.matched.length) {
    return next(`${basePath}${to.fullPath}`);
  }

  next();
});

// ✅ 뒤로가기 및 `<router-link>` 클릭 시에도 `document.title` 강제 업데이트
router.afterEach((to, from) => {
  nextTick(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        // ✅ 뒤로가기 시, 이전 페이지의 `meta.title`이 '404 Not Found'이면 이전 타이틀 유지
        if (to.meta && to.meta.title && to.meta.title === "404 Not Found" && from.meta?.title) {
          document.title = from.meta.title; // ✅ 이전 페이지의 타이틀 유지
        } else {
          document.title = to.meta.title || "퍼블리싱"; // ✅ 정상적인 경우 현재 페이지의 타이틀로 변경
        }
      }, 20); // ✅ DOM 업데이트 후 실행되도록 설정 (최소한의 딜레이 추가)
    });
  });
});

export default router;
