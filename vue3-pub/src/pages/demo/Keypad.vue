<template>
  <main class="l-page" :data-page="pageType">
    <div class="c-keypad">
      <div class="keyfake" aria-hidden="true">
        <span 
          v-for="(dot, index) in 7" 
          :key="index" 
          :class="['dot', { 'is-active': index < inputCount }]"
        ></span>
      </div>
      <div class="keynumber">
        <button 
          v-for="number in numbers" 
          type="button"
          :key="number.key" 
          :class="['number', number.class, { 'is-active': number.isActive }]"
          @click="handleButtonClick(number)"
        >
          {{ number.label }}
        </button>
        <p class="message" aria-live="polite">{{ message }}</p>
        <button type="button" class="number confirm" @click="confirmInput">
          확인
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, reactive, watch } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";

const pageTitle = ref("Keypad Demo");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

// 상태 관리
const inputCount = ref(0); // 현재 입력 개수
const maxInput = 7; // 최대 입력 개수
const message = ref();

// 버튼 리스트
const numbers = reactive([
  { key: 1, label: "1", class: "", isActive: false },
  { key: 2, label: "2", class: "", isActive: false },
  { key: 3, label: "3", class: "", isActive: false },
  { key: 4, label: "4", class: "", isActive: false },
  { key: 5, label: "5", class: "", isActive: false },
  { key: 6, label: "6", class: "", isActive: false },
  { key: 7, label: "7", class: "", isActive: false },
  { key: 8, label: "8", class: "", isActive: false },
  { key: 9, label: "9", class: "", isActive: false },
  { key: 10, label: "지우기", class: "clear", isActive: false },
  { key: 11, label: "0", class: "", isActive: false },
  { key: 12, label: "재배열", class: "rearr", isActive: false }
]);

// 메시지 업데이트
const updateMessage = (text) => {
  message.value = text;
};

// 버튼 클릭 처리
const handleButtonClick = (button) => {
  if (button.class === "clear") {
    // 전체 초기화
    inputCount.value = 0;
    numbers.forEach((num) => (num.isActive = false));
    updateMessage("입력이 초기화되었습니다.");
  } else if (button.class === "rearr") {
    // 숫자 버튼 재배열
    rearrangeLabels();
    updateMessage("숫자가 재배열되었습니다.");
  } else if (inputCount.value < maxInput) {
    // 숫자 입력
    inputCount.value++;
    button.isActive = true;
    updateMessage(`총 7자리 중 ${inputCount.value}번째 입력`);

    // 클릭 후 is-active 클래스 삭제 (0.1초 후)
    setTimeout(() => {
      button.isActive = false;
    }, 10);
  } else {
    updateMessage("최대 입력 개수에 도달했습니다.");
  }
};

// 숫자 버튼 재배열 함수 (label 값만 변경, 0 포함)
const rearrangeLabels = () => {
  // 숫자 버튼의 label만 추출 (지우기, 재배열 제외)
  const numberLabels = numbers
    .filter((num) => num.class === "" && num.label !== "지우기" && num.label !== "재배열")
    .map((num) => num.label);

  // 숫자 버튼의 label을 랜덤하게 섞음
  for (let i = numberLabels.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numberLabels[i], numberLabels[j]] = [numberLabels[j], numberLabels[i]];
  }

  // 섞인 label을 numbers 배열에 적용
  let index = 0;
  numbers.forEach((num) => {
    if (num.class === "" && num.label !== "지우기" && num.label !== "재배열") {
      num.label = numberLabels[index++];
    }
  });
};

// 확인 버튼 클릭
const confirmInput = () => {
  updateMessage("입력이 확인되었습니다.");
};
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

watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<style scoped>
</style>
