<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Badge</h2>
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
          <div class="code_input gap">
            <div class="c-badge">
              <span class="text">new</span>
            </div>
            <div class="c-badge">
              <span class="text">0</span>
            </div>
            <div class="c-badge">
              <span class="text">100</span>
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
      <section>
        <h3 class="title_sub">round</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-badge round">
              <span class="text">new</span>
            </div>
            <div class="c-badge round">
              <span class="text">0</span>
            </div>
            <div class="c-badge round">
              <span class="text">100</span>
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
      <section>
        <h3 class="title_sub">circle</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-badge circle">
              <span class="text">new</span>
            </div>
            <div class="c-badge circle">
              <span class="text">99</span>
            </div>
            <div class="c-badge circle">
              <span class="text">10</span>
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
const pageTitle = ref("Badge");
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
@use "@/assets/scss/component/_badge" as badge;
</style>