<template>
  <div class="l-wrap">
    <CHeader
      v-bind="headerOptions"
      @toggleSidebar="toggleSidebar"
      @goBack="goBack"
    />
    <router-view />
    <CSidebar
      :isVisible="isSidebarVisible"
      title="전체 메뉴"
      @close="closeSidebar"
    >
      <template #body>
        <p>사이드바 본문 내용</p>
      </template>
      <template #footer>
        <div>하단 내용</div>
      </template>
    </CSidebar>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted, onUnmounted, watch } from 'vue';
import CHeader from "@/components/layout/CHeader.vue";
import CSidebar from "@/components/layout/CSidebar.vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";

const router = useRouter();
const route = useRoute();

const isSidebarVisible = ref(false);

const { headerOptions } = useHeaderOptions();

const toggleSidebar = () => {
  isSidebarVisible.value = true;
};
const closeSidebar = () => {
  isSidebarVisible.value = false;
};

// DOM 조작으로 data-layout="main" 추가
onMounted(() => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.setAttribute('data-layout', 'main');
  }
});

// 컴포넌트가 언마운트될 경우 속성 제거 (선택 사항)
onUnmounted(() => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.removeAttribute('data-layout');
  }
});

// ✅ `route.meta.title`이 변경될 때 `document.title`을 자동 업데이트
watch(
  () => route.meta.title,
  (newTitle) => {
    if (newTitle) {
      document.title = newTitle;
    }
  },
  { immediate: true }
);
const goBack = () => {
  if (window.history.length > 1) {
    router.back(); // ✅ 브라우저 `뒤로가기` 실행
  } else {
    router.push("/"); // ✅ 뒤로갈 페이지가 없을 경우 기본 페이지로 이동
  }
};
</script>

<style lang="scss">
@use "@/assets/scss/main/main" as main;
</style>