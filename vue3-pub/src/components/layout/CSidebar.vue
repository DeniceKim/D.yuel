<template>
  <div :class="['c-sidebar', { 'is-show': isVisible }]">
    <div class="c-sidebar-inner">
      <div class="c-sidebar-head">
        <strong class="c-sidebar-title">{{ title }}</strong>
        <button
          type="button"
          class="c-sidebar-close"
          aria-label="닫기"
          @click="closeSidebar"
        >
          <i class="icon close"></i>
        </button>
      </div>
      <div class="c-sidebar-body">
        <slot name="body">본문 내용</slot>
      </div>
      <!-- 하단 내용이 존재할 경우에만 렌더링 -->
      <div
        class="c-sidebar-foot"
        v-if="$slots.footer && $slots.footer().length"
      >
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

defineProps({
  isVisible: {
    type: Boolean,
    required: true, // 사이드바 표시 여부
  },
  title: {
    type: String,
    default: "상단 타이틀", // 기본 타이틀
  },
});

const emit = defineEmits(["close"]);

// 사이드바 닫기 함수
const closeSidebar = () => {
  emit("close");
};
</script>

<style lang="scss">
@use "@/assets/scss/component/_button" as button;
@use "@/assets/scss/component/_card" as card;
@use "@/assets/scss/component/_list" as list;
</style>