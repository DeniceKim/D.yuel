<template>
  <div
    ref="accordionRef"
    :class="{
      'c-accordion': !isSub,
      'c-accordion-sub': isSub,
      'multi': hasSubAccordion // 자동으로 multi 클래스 추가
    }"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="c-acc-item"
      :class="{ 'is-show': isPanelOpen(index) }"
    >
      <div class="c-acc-header">
        <div class="c-acc-title">
          <div class="text">{{ item.title }}</div>
        </div>
        <button
          type="button"
          class="acc-btn"
          :aria-label="`${isSub ? '' : ''}${item.title}`"
          :aria-expanded="isPanelOpen(index)"
          :aria-controls="`accordion-${idPrefix}-${index}`"
          @click="toggleAccordion(index)"
        >
          <!-- {{ isPanelOpen(index) ? 'Close' : 'Open' }} -->
        </button>
      </div>
      <div
        class="c-acc-body"
        v-show="isPanelOpen(index)"
        :id="`accordion-${idPrefix}-${index}`"
        role="region"
        :aria-labelledby="`accordion-header-${idPrefix}-${index}`"
      >
        <slot :name="'body-' + index"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Props 정의
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  defaultIndex: {
    type: [Number, Array],
    default: null, // 초기 열릴 아이템의 인덱스
  },
  toggleMode: {
    type: Boolean,
    default: false, // true이면 다중 패널 열림 허용
  },
  isSub: {
    type: Boolean,
    default: false, // true이면 서브 아코디언 (c-accordion-sub 적용)
  },
  idPrefix: {
    type: String,
    required: true, // ID를 구별하기 위한 prefix
  }
});

// 현재 활성화된 패널 상태 관리
const activeIndices = ref(new Set());
const accordionRef = ref(null);
const hasSubAccordion = ref(false); // 자동 감지

// 초기 활성화 설정
onMounted(() => {
  if (props.defaultIndex !== null) {
    if (Array.isArray(props.defaultIndex)) {
      props.defaultIndex.forEach((index) => activeIndices.value.add(index));
    } else {
      activeIndices.value.add(props.defaultIndex);
    }
  }

  // 내부에 `.c-accordion-sub`이 존재하는지 자동 감지하여 multi 클래스 적용
  if (accordionRef.value) {
    hasSubAccordion.value = accordionRef.value.querySelector(".c-accordion-sub") !== null;
  }
});

// 패널 열림 여부 확인
const isPanelOpen = (index) => activeIndices.value.has(index);

// 패널 토글 함수
const toggleAccordion = (index) => {
  if (props.toggleMode) {
    activeIndices.value.has(index)
      ? activeIndices.value.delete(index)
      : activeIndices.value.add(index);
  } else {
    activeIndices.value.has(index)
      ? activeIndices.value.clear()
      : (activeIndices.value = new Set([index]));
  }
};
</script>

<style lang="scss">
@use "@/assets/scss/component/_accordion" as accordion;
</style>
