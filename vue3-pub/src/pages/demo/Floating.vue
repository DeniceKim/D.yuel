<template>
  <main class="l-page" :data-page="pageType" style="height: 200vh">
    <div class="chead">
      <h2 class="title">{{ pageTitle }}</h2>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <div class="c-floating">
        <div class="c-floating-inner">
          <!-- Top 버튼 -->
          <button
            type="button"
            class="floating-btn top"
            aria-label="위로 가기"
            @click="scrollToTop"
          >
            <i class="icon top" aria-hidden="true"></i>
            <span class="text" aria-hidden="true">TOP</span>
          </button>

          <!-- More 버튼 -->
          <button
            type="button"
            class="floating-btn more"
            :class="{ 'is-active': isMoreActive }"
            aria-label="더보기"
            @click="toggleMore"
          >
            <i class="icon more" aria-hidden="true"></i>
          </button>

          <!-- Floating Info -->
          <div class="floating-info" :class="{ 'is-show': isInfoVisible }">
            <ul class="floating-list">
              <li>
                <a role="link" class="floating-btn">
                  <span class="text">메뉴1</span>
                </a>
              </li>
              <li>
                <a
                  role="link"
                  class="floating-btn wauto"
                  :class="{ 'is-active': isWautoActive }"
                  @click="toggleWauto"
                >
                  <span class="text">메뉴2</span>
                  <div class="text-info">
                    메뉴 정보 메뉴 정보 메뉴 정보
                  </div>
                </a>
              </li>
              <li>
                <a role="link" class="floating-btn">
                  <span class="text">메뉴3</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- //.cbody -->
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";

const pageTitle = ref("Floating Demo");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

// 버튼 상태 관리
const isMoreActive = ref(false); // More 버튼 상태
const isWautoActive = ref(false); // Wauto 버튼 상태
const isInfoVisible = ref(false); // Floating Info 표시 상태

// Top 버튼 동작
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 스크롤을 부드럽게 이동
  });
};

// More 버튼 토글 함수
const toggleMore = () => {
  if (isMoreActive.value) {
    isMoreActive.value = false;
    isInfoVisible.value = false;
    isWautoActive.value = false; // Wauto 상태도 초기화
  } else {
    isMoreActive.value = true;
    isInfoVisible.value = true;
  }
};

// Wauto 버튼 토글 함수
const toggleWauto = (event) => {
  event.stopPropagation(); // 이벤트 전파 방지
  isWautoActive.value = !isWautoActive.value; // Wauto 상태만 변경
};

// 페이지 초기화
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
});

// 페이지 제목 변경 감지
watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_floating" as floating;
</style>