<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Table</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경<br>
        기본 테이블은 class name table로.<br>
        custom table만 c-table로 부여
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">기본 Type</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <table class="table">
              <caption hidden>기본 테이블</caption>
              <colgroup>
                <col style="width:auto">
                <col style="width:auto">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">제목</th>
                  <th scope="col">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">HTML</th>
                  <td>HTML 기본 문법</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">CSS</th>
                  <td>CSS 기본 문법</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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
        <h3 class="title_sub">div table</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <div class="c-table">
              <div class="c-thead">
                <div class="c-tr">
                  <div class="c-th">구분</div>
                  <div class="c-th">제목</div>
                  <div class="c-th">비고</div>
                </div>
              </div>
              <div class="c-tbody">
                <div class="c-tr">
                  <div class="c-th">HTML</div>
                  <div class="c-td">HTML 기본 문법</div>
                  <div class="c-td"></div>
                </div>
                <div class="c-tr">
                  <div class="c-th">CSS</div>
                  <div class="c-td">CSS 기본 문법</div>
                  <div class="c-td"></div>
                </div>
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
const pageTitle = ref("Table");
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
@use "@/assets/scss/component/_table" as table;
</style>