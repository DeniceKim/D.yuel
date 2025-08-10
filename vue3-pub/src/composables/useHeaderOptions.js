// useHeaderOptions.js
import { ref } from "vue";

const headerOptions = ref({
  title: "",                  // 기본 타이틀
  logoType: "text",           // text, image, both
  showBackButton: false,      // 뒤로가기 버튼 표시 여부
  showUtil: false,            // 유틸 버튼 표시 여부
  hasNotification: false,     // 공지 버튼 표시 여부
  hasNotificationDot: false,  // 공지 알림 여부
  isCenterTitle: false,       // 타이틀 가운데 정렬 여부
});

export const useHeaderOptions = () => {
  const setHeaderOptions = (options) => {
    headerOptions.value = { ...headerOptions.value, ...options };
  };

  const getHeaderOptions = () => headerOptions.value;

  return {
    headerOptions,
    setHeaderOptions,
    getHeaderOptions,
  };
};
