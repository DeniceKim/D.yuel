<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Toast</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">기본 Type</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <!-- 호출 시 c-toast에 is-show 추가 
            toast-btn 클릭시 닫기 is-show class 제거
            요청에 따라 시간이 지나만 자동 닫기 is-show class 제거-->
            <div class="c-toast top is-show">
              <div class="c-toast-inner">
                <span class="text">토스트 내용. 등록되었습니다.</span>
                <button type="button" class="toast-btn" aria-label="닫기"></button>
              </div>
            </div>
            <div class="c-toast bottom is-show">
              <div class="c-toast-inner">
                <span class="text">토스트 내용. 등록되었습니다.</span>
                <button type="button" class="toast-btn" aria-label="닫기"></button>
              </div>
            </div>
            <div class="c-toast center is-show">
              <div class="c-toast-inner">
                <span class="text">center</span>
                <button type="button" class="toast-btn" aria-label="닫기"></button>
              </div>
            </div>
            <div class="c-toast top-left is-show">
              <div class="c-toast-inner">
                <span class="text">top left</span>
                <button type="button" class="toast-btn" aria-label="닫기"></button>
              </div>
            </div>
            <div class="c-toast top-right is-show">
              <div class="c-toast-inner">
                <span class="text">top right</span>
                <button type="button" class="toast-btn" aria-label="닫기"></button>
              </div>
            </div>
            <div class="c-toast bottom-left is-show">
              <div class="c-toast-inner">
                <span class="text">bottom left</span>
                <button type="button" class="toast-btn" aria-label="닫기"></button>
              </div>
            </div>
            <div class="c-toast bottom-right is-show">
              <div class="c-toast-inner">
                <span class="text">bottom right</span>
                <button type="button" class="toast-btn" aria-label="닫기"></button>
              </div>
            </div>
          </div>
          <transition name="fade">
            <div class="code_output">
              <code></code>
              <button type="button" class="copy-btn">Code Copy</button>
            </div>
          </transition>
        </div>
      </section>
    </div>
    <!-- //.cbody -->
  </main>
  
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

/* 반응형 변수 */
const pageTitle = ref("Toast");
const pageType = ref(""); // 기본값 설정

/* 파일명 추출 함수 */
const getFileName = () => {
  const url = import.meta.url; // 현재 파일 URL 가져오기
  return url.split("/").pop()?.split(".").shift() || "default"; // 파일명 추출
};

// Initialize the component
onMounted(() => {
  pageType.value = getFileName(); // 파일명 추출 후 pageType에 저장
  document.title = pageTitle.value; // 초기에 document.title 설정
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle; // pageTitle이 변경될 때마다 document.title 업데이트
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_toast" as toast;
</style>