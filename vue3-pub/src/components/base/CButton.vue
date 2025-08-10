<template>
  <component
    :is="elementType"
    :class="buttonClass"
    :aria-label="ariaLabel || defaultSlotText"
    :href="isLink && elementType === 'a' ? linkHref : undefined"
    :role="isLink && elementType !== 'button' ? 'link' : undefined"
    :data-btn-size="btnSize"
    @click="btnevtClick"
  >
    <!-- 아이콘이 텍스트 앞에 있을 때 -->
    <i
      v-if="icon && iconPosition === 'left'"
      :class="`ri-${icon}`"
      :data-icon-size="iconSize"
      aria-hidden="true"
    ></i>
    <!-- 텍스트 -->
    <span v-if="!$slots.default && defaultSlotText">{{ defaultSlotText }}</span>
    <slot></slot>
    <!-- 아이콘이 텍스트 뒤에 있을 때 -->
    <i
      v-if="icon && iconPosition === 'right'"
      :class="`ri-${icon}`"
      :data-icon-size="iconSize"
      aria-hidden="true"
    ></i>
  </component>
</template>

<script setup>
import { computed } from 'vue';

// Props 정의
const props = defineProps({
  btnType: {
    type: String,
    required: true,
    validator: (value) => ['primary', 'secondary', 'tertiary', 'line', 'link'].includes(value),
  },
  icon: {
    type: String,
    default: '', // Remixicon 아이콘 클래스
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
  iconSize: {
    type: Number,
    default: 16, // 아이콘 크기
  },
  ariaLabel: {
    type: String,
    default: '', // 접근성 레이블
  },
  btnSize: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  isLink: {
    type: Boolean,
    default: false, // 링크 여부
  },
  linkHref: {
    type: String,
    default: '', // 링크 대상
  },
  elementType: {
    type: String,
    default: 'button',
    validator: (value) => ['a', 'button', 'div'].includes(value),
  },
});

// Emits 정의
const emit = defineEmits(['click']);

// 버튼 클래스 계산
const buttonClass = computed(() => ({
  btn: true,
  [`btn-${props.btnType}`]: true,
  [`btn-${props.btnSize}`]: true,
  'btn-link': props.isLink,
}));

// 기본 슬롯 텍스트 계산
const defaultSlotText = computed(() => {
  if (props.ariaLabel) return props.ariaLabel;
  const defaultTextMap = {
    primary: 'Primary',
    secondary: 'Secondary',
    tertiary: 'Tertiary',
    line: 'Button',
    link: 'Link',
  };
  return defaultTextMap[props.btnType] || 'Button';
});

// 클릭 핸들러
const btnevtClick = (event) => {
  if (props.elementType === 'a' && !props.linkHref) {
    event.preventDefault(); // 링크 없는 a 태그 동작 차단
  }
  emit('click', event); // 클릭 이벤트 방출
};
</script>

<style lang="scss">
// @use "@/assets/scss/component/button" as button;
</style>

