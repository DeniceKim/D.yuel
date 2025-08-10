<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">{{ pageTitle }}</h2>
    </div>
    <!-- //.chead -->
    <section>
      <div class="group_head">
        <h3 class="title_sub">기본 드롭다운 icon</h3>
      </div>
      <Dropdown type="default" :tooltipEnabled="true" position="bottom" ariaLabel="도움말" class="help">
        <template #trigger>
          <i class="icon"></i>
        </template>
        <template #content>
          <div class="c-dropdown-in">여기에 원하는 내용을 넣을 수 있습니다.</div>
        </template>
      </Dropdown>
    </section>
    <section>
      <div class="group_head">
        <h3 class="title_sub">기본 드롭다운 text</h3>
      </div>
      <Dropdown type="default">
        <template #trigger>
          <span class="text">기본</span>
        </template>
        <template #content>
          <div class="c-dropdown-in">여기에 원하는 내용을 넣을 수 있습니다.</div>
        </template>
      </Dropdown>
    </section>
    <section>
      <div class="group_head">
        <h3 class="title_sub">메뉴 스타일 드롭다운 (items 데이터 제공)</h3>
      </div>
      <Dropdown type="menu" v-model="selectedMenuItem" :items="menuItems">
        <template #trigger>
          {{ selectedMenuItem?.label || "메뉴 스타일" }}
        </template>
      </Dropdown>
    </section>
    <section>
      <div class="group_head">
        <h3 class="title_sub">툴팁이 활성화된 기본 드롭다운</h3>
      </div>
      <Dropdown type="default" :tooltipEnabled="true">
        <template #trigger>
          툴팁 스타일521321322132131
        </template>
        <template #content>
          <div class="c-dropdown-in">툴팁이 활성화된 기본 드롭다운</div>
        </template>
      </Dropdown>
    </section>
    <section>
      <div class="group_head">
        <h3 class="title_sub">위치 지정 드롭다운</h3>
      </div>
      <article style="text-align: center;">
        <Dropdown type="menu" v-model="selectedTop" :items="menuItems" :tooltipEnabled="true" position="top">
          <template #trigger>
            {{ selectedTop?.label || "TOP" }}
          </template>
        </Dropdown>
        <Dropdown type="menu" v-model="selectedBottom" :items="menuItems" :tooltipEnabled="true" position="bottom">
          <template #trigger>
            {{ selectedBottom?.label || "BOTTOM" }}
          </template>
        </Dropdown>
      </article>
      <article style="text-align: center;">
        <Dropdown type="menu" v-model="selectedLeft" :items="menuItems" :tooltipEnabled="true" position="left">
          <template #trigger>
            {{ selectedLeft?.label || "LEFT" }}
          </template>
        </Dropdown>
        <Dropdown type="menu" v-model="selectedRight" :items="menuItems" :tooltipEnabled="true" position="right">
          <template #trigger>
            {{ selectedRight?.label || "RIGHT" }}
          </template>
        </Dropdown>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import Dropdown from "@/components/base/CDropdown.vue";

const menuItems = [{ label: "Menu 1" }, { label: "Menu 2" }];
const tooltipItems = [{ label: "Tooltip 1" }, { label: "Tooltip 2" }];

// 사용자가 선택한 값을 저장하는 ref 변수
const selectedMenuItem = ref(null);
const selectedTop = ref(null);
const selectedBottom = ref(null);
const selectedLeft = ref(null);
const selectedRight = ref(null);

const pageTitle = ref("Dropdown Demo");
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