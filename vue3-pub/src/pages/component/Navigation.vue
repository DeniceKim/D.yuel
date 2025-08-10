<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Navigation Menu</h2>
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

            <div class="c-nav">
              <nav role="tablist" class="c-navlist">
                <div class="c-nav-item is-active">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="true">
                    <span class="text">메뉴1</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴2</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴3</span>
                  </button>
                </div>
              </nav>
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
        <h3 class="title_sub">fill(background)</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-nav fill">
              <nav role="tablist" class="c-navlist">
                <div class="c-nav-item is-active">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="true">
                    <span class="text">메뉴1</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴2</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴3</span>
                  </button>
                </div>
              </nav>
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
        <h3 class="title_sub">outline</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-nav outline">
              <nav role="tablist" class="c-navlist">
                <div class="c-nav-item is-active">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="true">
                    <span class="text">메뉴1</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴2</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴3</span>
                  </button>
                </div>
              </nav>
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
        <h3 class="title_sub">균등 분할(justify)</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-nav justify">
              <nav role="tablist" class="c-navlist">
                <div class="c-nav-item is-active">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="true">
                    <span class="text">메뉴1</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴2</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴3</span>
                  </button>
                </div>
              </nav>
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
        <h3 class="title_sub">pills 분리형</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-nav pills">
              <nav role="tablist" class="c-navlist">
                <div class="c-nav-item is-active">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="true">
                    <span class="text">메뉴1</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴2</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴3</span>
                  </button>
                </div>
              </nav>
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
        <h3 class="title_sub">pills 분리형 + round</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-nav pills round">
              <nav role="tablist" class="c-navlist">
                <div class="c-nav-item is-active">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="true">
                    <span class="text">메뉴1</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴2</span>
                  </button>
                </div>
                <div class="c-nav-item">
                  <button type="button" role="tab" class="c-nav-btn" aria-selected="false">
                    <span class="text">메뉴3</span>
                  </button>
                </div>
              </nav>
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
const pageTitle = ref("Navigation");
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
@use "@/assets/scss/component/_nav" as nav;
</style>