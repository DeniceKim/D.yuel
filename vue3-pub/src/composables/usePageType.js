import { ref, getCurrentInstance, onMounted } from "vue";

export function usePageType() {
  const pageType = ref("");

  onMounted(() => {
    const instance = getCurrentInstance();
    if (instance) {
      pageType.value = instance.type.name || "default"; // 컴포넌트 이름 반환
    }
  });

  return { pageType };
}
