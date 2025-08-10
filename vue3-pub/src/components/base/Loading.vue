<template>
  <div v-if="isLoading" role="status" class="loading" data-loading-type="page" aria-live="polite">
    <div role="text" class="loading_in">
      <span class="dot" aria-hidden="true"><i></i></span>
      <p class="loading_text">페이지 로딩중.</p>
    </div>
  </div>
</template>

<script setup>
import { useLoadingStore } from '@/store/loadingStore';
const { isLoading } = useLoadingStore(); // 로딩 상태 가져오기
</script>

<style lang="scss">
</style>
