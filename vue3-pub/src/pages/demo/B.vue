<template>
  <main class="l-page" :data-page="pageType">
    
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const pageTitle = ref("Test Page");
const pageType = ref("");

onMounted(() => {
  pageType.value = import.meta.url.split("/").pop()?.split(".").shift() || "default";
  document.title = pageTitle.value;
});

watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>