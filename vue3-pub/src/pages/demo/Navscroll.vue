<template>
  <main class="l-page" :data-page="pageType">
    <section>
      <div class="c-nav pills round" ref="navList">
        <nav role="tablist" class="c-navlist">
          <div 
            v-for="(item, index) in navItems"
            :key="index"
            type="button"
            :class="['c-nav-item', { 'is-active': selectedIndex === index }]"
            ref="navItemsRefs"
          >
            <button
              type="button"
              role="tab"
              class="c-nav-btn"
              :aria-selected="selectedIndex === index ? 'true' : 'false'"
              @click="selectNavItem(index)"
              @keydown="handleKeydown(index, $event)"
            >
              <span class="text">{{ item }}</span>
            </button>
          </div>
        </nav>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import { xScrollToCenter } from '@/utils/xscroll';

// 네비게이션 항목 데이터
const navItems = ref(['식당/커피숍', '매점/마트', '종교시설', '금융/우체국', '기타', '기타', '기타', '기타', '기타', '기타', '기타', '기타']);
const selectedIndex = ref(0); // 현재 선택된 탭 인덱스
const navList = ref(null); // 네비게이션 리스트
const navItemsRefs = ref([]); // 각 항목의 DOM 참조 배열

// 항목 선택 처리
const selectNavItem = async (index) => {
  selectedIndex.value = index;
  await nextTick(); // Vue DOM 업데이트 후 실행

  setTimeout(() => {
    const container = navList.value?.querySelector('.c-navlist');
    const item = navItemsRefs.value[index];

    if (container && item) {
      xScrollToCenter(container, item);
    }
  }, 10);
};

// 키보드 탐색 처리
const handleKeydown = (index, event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();

    let newIndex = index;
    if (event.key === 'ArrowLeft' && index > 0) {
      newIndex = index - 1;
    } else if (event.key === 'ArrowRight' && index < navItems.value.length - 1) {
      newIndex = index + 1;
    }

    selectNavItem(newIndex);

    // 포커스 이동
    navItemsRefs.value[newIndex]?.focus();
  }
};

const pageTitle = ref("Navscroll Demo");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

// 초기화
onMounted(() => {
  pageType.value = import.meta.url.split("/").pop()?.split(".").shift() || "default";
  document.title = pageTitle.value;
  
  // 페이지 로드 시 Header 옵션 설정
  setHeaderOptions({
    title: pageTitle.value,      // 기본 타이틀
    logoType: "text",          // text, image, both
    showBackButton: true,      // 뒤로가기 버튼 표시 여부
    showUtil: true,            // 유틸 버튼 표시 여부
    hasNotification: false,    // 공지 버튼 표시 여부
    hasNotificationDot: false, // 공지 알림 여부
    isCenterTitle: false,      // 타이틀 가운데 정렬 여부
  });

  // 초기 선택 항목 설정
  selectNavItem(selectedIndex.value);
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_nav" as nav;
</style>
