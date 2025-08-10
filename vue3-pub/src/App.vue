<template>
  <router-view />
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { detectEnvironment } from "@/utils/detect"; // 환경 감지 함수
import { useHospitalStore } from "@/store/hospitalStore";
import {
  initializeScrollEvents,
  initializeTextareaFocusHandler,
} from "@/utils/scrollUtils";

const hospitalStore = useHospitalStore();

let removeScrollEvents; // 스크롤 이벤트 제거 함수 참조

onMounted(async () => {
  // 환경 감지 실행
  detectEnvironment();

  // 공통 스크롤 이벤트 초기화
  const removeScrollHandler = initializeScrollEvents();
  const removeFocusHandler = initializeTextareaFocusHandler();

  // 두 이벤트 제거 함수를 결합하여 하나의 제거 함수 생성
  removeScrollEvents = () => {
    if (removeScrollHandler) removeScrollHandler();
    if (removeFocusHandler) removeFocusHandler();
  };

  // 페이지 로드 시 병원 정보 초기화
  hospitalStore.setHospital(hospitalStore.hospital);
});

onUnmounted(() => {
  // 스크롤 이벤트 제거
  if (removeScrollEvents) {
    removeScrollEvents();
  }
});
</script>
