<template>
  <div
    class="c-tabbar"
    :class="{ 'fixed-bottom': isFixedBottom, 'center': isCenter }"
  >
    <div role="tablist" class="c-tabbar-inner">
      <!-- 그룹이 없는 경우 기본 탭 출력 -->
      <template v-if="groups.length === 0">
        <button
          v-for="ctab in ctabs"
          :key="ctab.key"
          type="button"
          role="tab"
          class="tabbar-btn"
          :class="{ 'is-active': selectedTab === ctab.key }"
          :aria-controls="ctab.controls"
          :aria-selected="selectedTab === ctab.key"
          @click="selectTab(ctab.key)"
        >
          <i :class="['icon', ctab.icon]" aria-hidden="true" />
          <span class="text">{{ ctab.label }}</span>
        </button>
      </template>

      <!-- 그룹이 있을 경우 그룹화된 탭 출력 -->
      <template v-else>
          <button
            v-if="homeTab"
            type="button"
            role="tab"
            class="tabbar-btn home"
            :class="{ 'is-active': selectedTab === homeTab.key }"
            :aria-controls="homeTab.controls"
            :aria-selected="selectedTab === homeTab.key"
            @click="selectTab(homeTab.key)"
          >
            <i :class="['icon', homeTab.icon]" aria-hidden="true" />
            <span class="text">{{ homeTab.label }}</span>
          </button>
        <div
          v-for="group in groups"
          :key="group.id"
          class="c-tabbar-group"
        >
          <button
            v-for="ctab in group.tabs"
            :key="ctab.key"
            type="button"
            role="tab"
            class="tabbar-btn"
            :class="{ 'is-active': selectedTab === ctab.key }"
            :aria-controls="ctab.controls"
            :aria-selected="selectedTab === ctab.key"
            @click="selectTab(ctab.key)"
          >
            <i :class="['icon', ctab.icon]" aria-hidden="true" />
            <span class="text">{{ ctab.label }}</span>
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue";

// Props 정의
const props = defineProps({
  ctabs: {
    type: Array,
    required: true,
    default: () => [],
  },
  defaultSelected: {
    type: String,
    default: "", // 초기값
  },
  isFixedBottom: {
    type: Boolean,
    default: false, // 고정 여부
  },
  groups: {
    type: Array,
    default: () => [], // 그룹화된 탭 데이터
  },
  isCenter: {
    type: Boolean,
    default: false, // 중앙 정렬 여부
  },
});

// Emits 정의
const emit = defineEmits(["select"]);

// 상태 변수
const selectedTab = ref("");
const homeTab = ref(null);

// 초기화
onMounted(() => {
  selectedTab.value = props.defaultSelected; // defaultSelected를 초기값으로 설정
  homeTab.value = props.ctabs.find((tab) => tab.key === "home") || null; // 홈 탭 찾기
});

// 탭 선택 함수
const selectTab = (key) => {
  selectedTab.value = key; // 현재 선택된 탭 업데이트
  emit("select", key); // 부모 컴포넌트로 선택 이벤트 전달
};
</script>

<style lang="scss">
@use "@/assets/scss/component/_tabbar" as tabbar;
</style>
