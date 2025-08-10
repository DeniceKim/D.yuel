<template>
  <main class="l-page" data-page="notfound">
    <div class="cbody">
      <div class="nodata">
        <i class="icon warning"></i>
        <p class="title">요청하신 페이지를 찾을 수 없습니다.</p>
        <div class="desc">
          일시적인 오류일 수 있으니 와이파이 상태를 확인해 주시거나,<br />
          잠시 후 다시 시도해 주세요.
        </div>
      </div>
    </div>
    <div class="group_button">
      <button @click="goBack" class="c-btn squared xxl">이전으로 돌아가기</button>
    </div>
  </main>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted, watch } from "vue";

const router = useRouter();
const route = useRoute();

// ✅ 에러 페이지가 로드될 때 `document.title`을 "Error"로 설정
onMounted(() => {
  document.title = "Error";
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

// ✅ 브라우저 `뒤로가기(back)`와 동일한 동작 구현
const goBack = () => {
  if (window.history.length > 1) {
    router.back(); // ✅ 브라우저 `뒤로가기` 실행
  } else {
    router.push("/"); // ✅ 뒤로갈 페이지가 없을 경우 기본 페이지로 이동
  }
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/component/_button" as button;
</style>
