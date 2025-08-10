<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">{{ pageTitle }}</h2>
    </div>
    <!-- //.chead -->
    <section>
      <!-- 메인 아코디언 (multi 자동 적용됨) -->
        <CAccordion :items="mainAccordionItems" idPrefix="main">
          <template #body-0>
            <div>
              <p>메인 패널 1의 내용</p>

              <!-- 서브 아코디언 1 -->
              <CAccordion
                :items="subAccordionItems1"
                :defaultIndex="null"
                :toggleMode="true"
                isSub
                idPrefix="sub1"
              >
                <template #body-0>
                  <p>서브 패널 1-1의 내용</p>
                </template>
                <template #body-1>
                  <p>서브 패널 1-2의 내용</p>
                </template>
              </CAccordion>
            </div>
          </template>

          <template #body-1>
            <div>
              <p>메인 패널 2의 내용</p>

              <!-- 서브 아코디언 2 -->
              <CAccordion
                :items="subAccordionItems2"
                :defaultIndex="null"
                :toggleMode="true"
                isSub
                idPrefix="sub2"
              >
                <template #body-0>
                  <p>서브 패널 2-1의 내용</p>
                </template>
                <template #body-1>
                  <p>서브 패널 2-2의 내용</p>
                </template>
              </CAccordion>
            </div>
          </template>
        </CAccordion>
    </section>

    <section>
      <CAccordion :items="mainAccordionItems" :defaultIndex="0" idPrefix="main">
        <template #body-0>
          <div>
            <p>메인 패널 1의 내용</p>
          </div>
        </template>

        <template #body-1>
          <div>
            <p>메인 패널 2의 내용</p>
          </div>
        </template>
      </CAccordion>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import CAccordion from "@/components/base/CAccordion.vue";

const mainAccordionItems = [
  { title: "메인 아코디언 1" },
  { title: "메인 아코디언 2" },
];

const subAccordionItems1 = [
  { title: "서브 아코디언 1-1" },
  { title: "서브 아코디언 1-2" },
];

const subAccordionItems2 = [
  { title: "서브 아코디언 2-1" },
  { title: "서브 아코디언 2-2" },
];

const pageTitle = ref("Accordion Demo");
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

<style lang="scss">
</style>