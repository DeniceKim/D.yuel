<template>
  <main class="l-page" :data-page="pageType">
    <div class="cbody">

    </div>
  </main>
</template>


<script setup>
import { ref, onMounted, watch } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";

const pageTitle = ref("Sub Page2");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

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