<template>
  <header class="c-header">
    <div class="c-header-inner">
      <!-- 뒤로가기 버튼 -->
      <button
        v-if="showBackButton"
        type="button"
        class="c-btn c-icon back"
        aria-label="이전으로 돌아가기"
        @click="$emit('goBack')"
      >
        <i class="icon back" aria-hidden="true" />
      </button>

      <!-- 타이틀 -->
      <h1 :class="['h_title', { center: isCenterTitle }]">
        <strong v-if="logoType === 'both' || logoType === 'text'">{{ title }}</strong>
        <img
          v-if="logoType === 'both' || logoType === 'image'"
          src="/images/common/logo.svg"
          alt="LOGO"
        />
      </h1>

      <!-- 유틸 버튼 -->
      <div v-if="showUtil" class="c-header-util">
        <button v-if="hasNotification" type="button" class="c-btn c-icon noti" aria-label="공지">
          <i class="icon noti" aria-hidden="true" />
        </button>
        <button
          v-if="hasNotificationDot"
          type="button"
          class="c-btn c-icon noti"
          aria-label="공지 알림있음"
        >
          <i class="icon noti" aria-hidden="true" />
          <i class="dot" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="c-btn c-icon menu"
          aria-label="전체메뉴"
          @click="$emit('toggleSidebar')"
        >
          <i class="icon menu" aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  pageType: {type: String, default: '' },
  title: { type: String, default: "Title" },  // 기본 타이틀
  logoType: { type: String, default: "both" }, // "both", "text", "image" 중 하나
  showBackButton: { type: Boolean, default: false }, // 뒤로가기 버튼 표시 여부
  showUtil: { type: Boolean, default: false }, // 유틸 버튼 표시 여부
  hasNotification: { type: Boolean, default: false }, // 공지 버튼 표시 여부
  hasNotificationDot: { type: Boolean, default: false }, // 공지 알림 여부
  isCenterTitle: { type: Boolean, default: false }, // 타이틀 가운데 정렬 여부
});

defineEmits(["toggleSidebar", "goBack"]);
</script>

<style lang="scss">
@use "@/assets/scss/component/_button" as button;
</style>
