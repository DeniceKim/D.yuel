<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Tag</h2>
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
            <div class="c-tag">
              <span class="text">기본 Tag</span>
            </div>
            <div class="c-tag">
              <span class="text">Defualt Tag DefualtDefualtDefualtDefualtDefualtDefualtDefualtDefualtDefualtDefualtDefualtDefualtDefualtDefualt</span>
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
        <h3 class="title_sub">Round</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-tag round">
              <span class="text">Round Tag</span>
            </div>
            <div class="c-tag round">
              <span class="text">Round</span>
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
        <h3 class="title_sub">size</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-tag xxs">
              <span class="text">xxs</span>
            </div>
            <div class="c-tag xs">
              <span class="text">xs</span>
            </div>
            <div class="c-tag xl">
              <span class="text">xl</span>
            </div>
            <div class="c-tag xxl">
              <span class="text">xxl</span>
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
        <h3 class="title_sub">fill</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-tag fill">
              <span class="text">tag</span>
            </div>
            <div class="c-tag fill round">
              <span class="text">tag</span>
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
        <h3 class="title_sub">State</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-tag success">
              <span class="text">success</span>
            </div>
            <div class="c-tag error">
              <span class="text">error</span>
            </div>
            <div class="c-tag fill success">
              <span class="text">success</span>
            </div>
            <div class="c-tag fill error">
              <span class="text">error</span>
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
const pageTitle = ref("Tag");
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
@use "@/assets/scss/component/_tag" as tag;
</style>