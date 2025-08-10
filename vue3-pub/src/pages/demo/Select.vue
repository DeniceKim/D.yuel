<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">{{ pageTitle }} Demo</h2>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <div class="c-seltype">
          <strong class="c-label">{{ pageTitle }}</strong>
          <div class="c-selgroup">
            <button type="button" class="c-selbtn" :class="{ 'is-active': isOptionsVisible }" @click="toggleOptions">
              <span>{{ selectedOption }}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
    <!-- //.cbody -->
    
    <!-- Option Group -->
    <teleport to="body">
      <div class="c-optgroup" :class="{ 'is-show': isOptionsVisible, [positionClass]: isOptionsVisible }">
        <c-dim :isVisible="isOptionsVisible" @close="closeOptions" />
        <ul class="c-optlist">
          <li class="c-optitem" v-for="(option, index) in options" :key="index">
            <div class="c-radiotype">
              <input
                type="radio"
                :id="`radBox${index + 1}`"
                class="c-radio"
                name="radBox"
                :value="option.label"
                @change="selectOption(option.label)"
              />
              <label
                :for="`radBox${index + 1}`"
                class="c-label"
                :aria-label="option.label"
              >
                <i class="icon" aria-hidden="true"></i>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </teleport>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import CDim from "@/components/base/CDim.vue"; // 공통 컴포넌트 import

/* 반응형 변수 */
const pageTitle = ref("Custom Select");
const pageType = ref(""); // 기본값 설정
const { setHeaderOptions } = useHeaderOptions();

// 옵션 데이터 및 상태
const options = ref([
  { label: "button" },
  { label: "input" },
  { label: "checkbox" },
  { label: "radio" },
]);
const isOptionsVisible = ref(false);
const selectedOption = ref("옵션선택");
const positionClass = ref(""); // 위치

// 옵션 리스트 토글
const toggleOptions = () => {
  isOptionsVisible.value = true; // 옵션 리스트 열기
  lockBody(); // body 클래스 추가
};

// 옵션 선택
const selectOption = (label) => {
  selectedOption.value = label; // 선택된 값 반영
  closeOptions(); // 옵션 닫기
  unlockBody(); // body 클래스 제거
};

// 옵션 닫기
const closeOptions = () => {
  isOptionsVisible.value = false; // 옵션 리스트와 Dim 닫기
  unlockBody(); // body 클래스 제거
};

// body에 is-lock 클래스 추가
const lockBody = () => {
  document.body.classList.add('is-lock');
};

// body에서 is-lock 클래스 제거
const unlockBody = () => {
  document.body.classList.remove('is-lock');
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
});

onUnmounted(() => {
  unlockBody(); // 컴포넌트 언마운트 시 body 클래스 제거
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle; // pageTitle이 변경될 때마다 document.title 업데이트
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_radio" as radio;
@use "@/assets/scss/component/_select" as select;
</style>