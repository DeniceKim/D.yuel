<template>
  <main class="main" data-main-type="button">
    <!-- 기본 HTML 버튼 -->
    <button type="button" class="btn">
      <span>button</span>
    </button>

    <!-- Primary 버튼 -->
    <c-button btnType="primary"><span>Click Me</span></c-button>

    <!-- Secondary 버튼 -->
    <c-button 
      btnType="secondary" 
      icon="save-line" 
      iconPosition="left" 
      aria-label="Save Changes">
      <span>Save Changes</span>
    </c-button>

    <!-- Tertiary 버튼 -->
    <c-button 
      btnType="tertiary" 
      aria-label="Cancel">
      <span>Cancel</span>
    </c-button>

    <!-- Line 버튼 -->
    <c-button 
      btnType="line" 
      icon="delete-bin-line" 
      iconPosition="right" 
      aria-label="Delete">
      <span>Delete</span>
    </c-button>

    <!-- 슬롯으로 커스텀 콘텐츠 제공 -->
    <c-button 
      btnType="primary" 
      aria-label="Edit Content">
      <i class="ri-edit-line" aria-hidden="true"></i>
      <span>Edit</span>
    </c-button>

    <!-- 전화 예약 버튼 -->
    <c-button 
      btnType="link" 
      btnSize="small" 
      elementType="a" 
      :isLink="true" 
      linkHref="tel:1588-0063" 
      aria-label="전화예약 1588-0063"
      class="btn-line">
      <span>전화예약</span>
      <span class="tel">
        <i class="ri-phone-fill blue"></i>
        1588-0063
      </span>
    </c-button>

    <!-- 외부 링크 버튼 -->
    <c-button 
      btnType="link" 
      elementType="a" 
      :isLink="true" 
      linkHref="https://example.com" 
      aria-label="Visit Example" 
      class="btn-line">
      <span>Visit Example</span>
    </c-button>

    <!-- Div 역할의 링크 -->
    <c-button 
      btnType="tertiary" 
      elementType="div" 
      :isLink="true" 
      aria-label="Div as Link" 
      class="btn-line">
      <span>Div Link Example</span>
    </c-button>
  </main>
</template>

<script setup>
import CButton from '@/components/base/CButton.vue'; // Button 컴포넌트 가져오기
</script>

<style lang="scss">
// @use "@/assets/scss/component/_button" as button;
</style>