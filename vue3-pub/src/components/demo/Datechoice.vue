<template>
  <teleport to="body"> <!-- 모달을 body 하위로 이동 -->
    <div
      v-if="isOpen"
      class="offcanvas-backdrop fade show"
      tabindex="-1"
      :aria-hidden="!isOpen ? 'true' : 'false'"
      @click="handleBackdropClick"
    ></div>

    <!-- 모달 -->
    <div
      v-if="isOpen"
      :id="modalId"
      class="offcanvas"
      :class="['offcanvas-' + position, showClass]"
      tabindex="0"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="titleId"
      :data-bs-backdrop="backdrop"
      :data-offcanvas-type="dataOffcanvasType"
      @transitionend="onTransitionEnd"
    >
      <div class="offcanvas-content">
        <div class="offcanvas-header">
          <strong class="offcanvas-title" :id="titleId">
            {{ title }}
          </strong>
          <button
            type="button"
            class="btn-close text-reset"
            @click="closeModal"
            aria-label="닫기"
          ></button>
        </div>

        <!-- 동적 바디 -->
        <div class="offcanvas-body">
          <slot name="body-content"></slot> <!-- 본문 내용 슬롯 -->
        </div>

        <!-- 동적 푸터 -->
        <div class="offcanvas-footer" :data-gap="position === 'center' ? '1' : null">
          <slot name="footer-content"></slot> <!-- 푸터 내용 슬롯 -->
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed, watch } from 'vue';

// props로 받아오는 값: isOpen, position, title, titleId, modalId, backdrop, dataOffcanvasType
const props = defineProps({
  isOpen: Boolean, // 모달 열기 상태
  position: { type: String, default: 'bottom' }, // offcanvas 위치 (center, bottom)
  title: { type: String, default: '' }, // 타이틀을 prop으로 받음
  titleId: { type: String, default: 'check-date' }, // 타이틀의 id 값을 동적으로 받음
  modalId: { type: String, required: true }, // 모달의 id를 prop으로 받음
  backdrop: { type: String, default: 'static' }, // data-bs-backdrop 값 동적으로 받음
  dataOffcanvasType: { type: String, default: '' }, // data-offcanvas-type 동적으로 받음
});

const emit = defineEmits(['update:isOpen']);

// 상태와 모달 애니메이션 클래스 처리
const showClass = ref('');
const offcanvasPositionClass = computed(() => {
  // position 값에 따라 동적으로 클래스를 설정
  return props.position === 'center' ? 'offcanvas-center' : 'offcanvas-bottom';
});

// 모달 열기 상태 관리
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    // 모달이 열릴 때 'show' 클래스를 추가
    showClass.value = 'show';
    // setTimeout으로 fade 추가 (애니메이션 효과 적용)
    setTimeout(() => {
      showClass.value = 'fade show'; // fade 클래스 추가 후 show 클래스 추가
    }, 10); // 딜레이를 주어 애니메이션 효과가 적용되도록 함

    // 모달 열릴 때 초점 이동
    focusModal();
  } else {
    // 모달이 닫힐 때 'fade'와 'show' 클래스를 모두 제거
    showClass.value = ''; // 'show'와 'fade'를 모두 제거
  }
});

// 애니메이션 끝난 후 클래스를 제거
const onTransitionEnd = () => {
  if (!props.isOpen) {
    showClass.value = ''; // 'show'와 'fade'를 모두 제거
  }
};

// 모달에 초점 이동
const focusModal = () => {
  const modal = document.querySelector('[role="dialog"]');
  const title = modal?.querySelector('.offcanvas-title');
  if (title) {
    title.focus();
  }
};

// 모달 닫기
const closeModal = () => {
  emit('update:isOpen', false); // 부모 컴포넌트에 상태 변경 이벤트 전송
};

// 백드롭 클릭 시 처리
const handleBackdropClick = () => {
  if (props.backdrop !== 'static') {
    closeModal(); // 백드롭이 'static'이 아닐 경우 모달을 닫는다.
  }
};
</script>

<style scoped>
/* 스타일은 필요시 추가 */
</style>
