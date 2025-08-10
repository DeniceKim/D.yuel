<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">
        {{ pageTitle }}
      </h2>
    </div>
    <div class="cbody">
      <section>
        <div class="c-card fill round">
          <div class="c-card-inner">
            <div class="c-card-header">
              <strong class="c-card-title">Title</strong>
            </div>
            <div class="c-card-body">
              card body area<br>
              카드 Contents 영역
            </div>
            <div class="c-card-footer">
              카드 하단 영역
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="c-card outline">
          <div class="c-card-img">
            <div class="c-img">
              <img src="https://picsum.photos/900/250/?image=3" alt="">
            </div>
          </div>
          <div class="c-card-inner">
            <div class="c-card-header">
              <strong class="c-card-title">Title</strong>
            </div>
            <div class="c-card-body">
              card body area<br>
              카드 Contents 영역
            </div>
            <div class="c-card-footer">
              카드 하단 영역
            </div>
          </div>
        </div>
      </section>
      <section>
        <article>
          <div class="c-card horiz outline">
            <div class="c-card-img">
              <div class="c-img">
                <img src="https://picsum.photos/400/400/?image=20" alt="">
              </div>
            </div>
            <div class="c-card-inner">
              <div class="c-card-header">
                <strong class="c-card-title">Title</strong>
              </div>
              <div class="c-card-body">
                card body area<br>
                카드 Contents 영역
              </div>
            </div>
          </div>
        </article>
        <article>
          <div class="c-card horiz outline">
            <div class="c-card-img">
              <div class="c-img">
                <img src="https://picsum.photos/400/400/?image=20" alt="">
              </div>
            </div>
            <div class="c-card-inner">
              <div class="c-card-header">
                <strong class="c-card-title">Title</strong>
              </div>
              <div class="c-card-body">
                card body area<br>
                카드 Contents 영역
              </div>
            </div>
          </div>
        </article>
        <article>
          <div class="c-card horiz outline">
            <div class="c-card-img">
              <div class="c-img">
                <img src="https://picsum.photos/400/400/?image=20" alt="">
              </div>
            </div>
            <div class="c-card-inner">
              <div class="c-card-header">
                <strong class="c-card-title">Title</strong>
              </div>
              <div class="c-card-body">
                card body area<br>
                카드 Contents 영역
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";

const pageTitle = ref("Test Page");
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