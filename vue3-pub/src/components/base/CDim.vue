<template>
  <div class="c-dim" @click="handleClick" />
</template>

<script setup>
import { defineEmits } from "vue";

// Emits 정의
const emit = defineEmits(["close"]);

// 클릭 이벤트 핸들러
const handleClick = () => {
  emit("close"); // 부모 컴포넌트로 close 이벤트 전달
};
</script>