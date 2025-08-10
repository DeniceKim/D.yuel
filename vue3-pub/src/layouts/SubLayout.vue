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
        <ul class="list">
          <li>
            <router-link to="/sub/page1" class="c-link block">
              <span class="text">서브 페이지 1</span>
              <i class="icon arrow-right"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/sub/page2" class="c-link block">
              <span class="text">서브 페이지 2</span>
              <i class="icon arrow-right"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/sub/page3" class="c-link block">
              <span class="text">서브 페이지 3</span>
              <i class="icon arrow-right"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/sub/page4" class="c-link block">
              <span class="text">서브 페이지 4</span>
              <i class="icon arrow-right"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/sub/page5" class="c-link block">
              <span class="text">서브 페이지 5</span>
              <i class="icon arrow-right"></i>
            </router-link>
          </li>
        </ul>
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

// DOM 조작으로 data-layout="sub" 추가
onMounted(() => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.setAttribute('data-layout', 'sub');
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
@use "@/assets/scss/page/theme" as theme;
</style>
