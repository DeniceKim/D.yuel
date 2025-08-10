<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Loading</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경<br>
        로딩 UI는 기본 구조만 유지하고 스타일은 변경 될 수 있음.<br>
        <a href="https://cssloaders.github.io/" target="_blank" class="c-link">https://cssloaders.github.io/</a><br>
        <a href="https://css-loaders.com/" target="_blank" class="c-link">https://css-loaders.com/</a>
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">Page Loading Type1</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="height:150px;">

            <div class="c-load type1">
              <div class="c-load-inner">
                <div class="c-load-circle" />
                <div class="c-load-text">loading</div>
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

      <section>
        <h3 class="title_sub">Page Loading Type2</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="height:150px;">

            <div class="c-load type2">
              <div class="c-load-inner">
                <div class="c-load-spinner" />
                <div class="c-load-text">loading</div>
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
      
      <section>
        <h3 class="title_sub">버튼 내 로딩</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <button type="button" class="c-btn">
              <span class="text" hidden>primary default</span>
              <span class="loader"><i></i><i></i><i></i></span>
            </button>

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
const pageTitle = ref("Loading");
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
@use "@/assets/scss/component/_loading" as loading;
</style>