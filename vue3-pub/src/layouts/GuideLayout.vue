<template>
  <router-view />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { initializeCodeEditors, observeDomChanges } from '@/utils/codeEditorUtils';

let stopObserving;

// DOM 조작으로 data-layout="sub" 추가
onMounted(() => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.setAttribute('data-layout', 'guide');
  }
  initializeCodeEditors(); // 초기화
  stopObserving = observeDomChanges(initializeCodeEditors); // DOM 변경 시 초기화
});

// 컴포넌트가 언마운트될 경우 속성 제거 (선택 사항)
onUnmounted(() => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.removeAttribute('data-layout');
  }
  if (stopObserving) {
    stopObserving(); // Observer 중단
  }
});
</script>