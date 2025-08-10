<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">{{ pageTitle }} Demo</h2>
    </div>
    <div class="cbody">
      <section>
        <div class="c-rangetype slider">
          <strong class="c-label">Custom Range</strong>
          <div
            class="c-slider-container"
            ref="sliderContainer"
            @mousedown="startDragging"
            @touchstart="startDragging"
            :style="{
              '--track-width': `${percentage}%`,
              '--thumb-position': `${percentage}%`
            }"
          >
            <div class="c-slider-track"></div>
            <div
              class="c-slider-thumb"
              tabindex="0"
              @keydown="handleKeydown"
              role="slider"
              :aria-valuemin="min"
              :aria-valuemax="max"
              :aria-valuenow="value"
              :aria-label="`Slider value is ${value}`"
            >
              <div class="c-tooltip top" style="--c-tooltip-top:30px;--c-tooltip-center:50%;">
                <span class="text">{{ value }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";

/* 상태 관리 */
const pageTitle = ref("Custom Slider(Range)");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

const min = 0; // 최소값
const max = 100; // 최대값
const value = ref(50); // 슬라이더 초기값
const isDragging = ref(false); // 드래그 상태

const sliderContainer = ref(null);

/* 퍼센티지 계산 */
const percentage = computed(() => ((value.value - min) / (max - min)) * 100);

/* 이벤트 핸들러 추가 */
const addListeners = () => {
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDragging);
  document.addEventListener("touchmove", drag, { passive: false }); // 스크롤 방지
  document.addEventListener("touchend", stopDragging);
};

/* 이벤트 핸들러 제거 */
const removeListeners = () => {
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", stopDragging);
  document.removeEventListener("touchmove", drag);
  document.removeEventListener("touchend", stopDragging);
};

/* 드래그 시작 */
const startDragging = (event) => {
  isDragging.value = true;
  addListeners();
  updateValue(event);
};

/* 드래그 중 */
const drag = (event) => {
  if (!isDragging.value) return;
  if (event.type === "touchmove") event.preventDefault(); // 스크롤 방지
  updateValue(event);
};

/* 드래그 종료 */
const stopDragging = () => {
  isDragging.value = false;
  removeListeners();
};

/* 키보드 조작 */
const handleKeydown = (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowUp") {
    value.value = Math.min(max, value.value + 1); // 최대값 제한
  } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
    value.value = Math.max(min, value.value - 1); // 최소값 제한
  }
};

/* 값 업데이트 */
const updateValue = (event) => {
  const rect = sliderContainer.value.getBoundingClientRect();
  const clientX = event.type.startsWith("touch")
    ? event.touches[0].clientX
    : event.clientX;

  let newLeft = clientX - rect.left;
  newLeft = Math.max(0, Math.min(newLeft, rect.width));
  value.value = Math.round((newLeft / rect.width) * (max - min)) + min;
};

// Initialize the component
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
  
  sliderContainer.value.addEventListener("touchstart", startDragging, {
    passive: true, // 성능 최적화
  });
});

/* 이벤트 정리 */
onUnmounted(() => {
  removeListeners();
  sliderContainer.value.removeEventListener("touchstart", startDragging);
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle; // pageTitle이 변경될 때마다 document.title 업데이트
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_range" as range;
@use "@/assets/scss/component/_tooltip" as tooltip;
</style>