<template>
  <!-- data-main-type에 컴포넌트 이름(파일명)을 동적으로 설정 -->
  <main class="main" :data-main-type="mainType">
    
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useHeaderStore } from "@/store/useHeaderStore";

/* Pinia의 Header Store 사용 */
const headerStore = useHeaderStore();

/* 반응형 변수 */
const mainType = ref(""); // 기본값 설정

/* 파일명 추출 함수 */
const getFileName = () => {
  const url = import.meta.url; // 현재 파일 URL 가져오기
  return url.split("/").pop()?.split(".").shift() || "default"; // 파일명 추출
};

/* 페이지 타이틀 설정 함수 */
const setPageTitle = (title) => {
  document.title = title; // 브라우저 탭 타이틀 설정
  headerStore.setTitle(title); // 헤더 타이틀 설정
};

/* 컴포넌트 마운트 시 실행 */
onMounted(() => {
  setPageTitle("타이틀"); // 타이틀 설정
  mainType.value = getFileName(); // 파일명 추출 후 mainType에 저장
});
</script>
