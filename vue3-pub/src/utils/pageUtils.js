// src/utils/pageUtils.js

import { onMounted } from "vue";

/**
 * 현재 파일명을 추출
 * - import.meta.url에서 파일명을 추출합니다.
 * @returns {string} - 파일명 또는 기본값 "default"
 */
export const getFileName = () => {
  const url = import.meta.url; // 현재 파일 URL 가져오기
  return url.split("/").pop()?.split(".").shift() || "default"; // 파일명 추출
};

/**
 * 페이지 타이틀 및 헤더 타이틀 설정
 * @param {string} title - 페이지와 헤더에 사용할 타이틀
 * @param {object} headerStore - Pinia의 Header Store 인스턴스
 */
export const setPageTitle = (title, headerStore) => {
  onMounted(() => {
    document.title = title; // 브라우저 탭 타이틀 설정
    if (headerStore) {
      headerStore.setTitle(title); // 헤더 타이틀 설정
    }
  });
};
