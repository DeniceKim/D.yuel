<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Tabs</h2>
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

            <div class="c-tabs">
              <div class="c-tablist">
                <div role="tablist" class="c-tablist-inner">
                  <div class="c-tab-item is-active">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="true" aria-controls="cTab1-1">
                      <span class="text">탭메뉴1</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab1-2">
                      <span class="text">탭메뉴2</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab1-3">
                      <span class="text">탭메뉴3</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="c-tab-content">
                <div id="cTab1-1" class="c-tab-panel" aria-hidden="false">탭1 Contents</div>
                <div id="cTab1-2" class="c-tab-panel" aria-hidden="true">탭2 Contents</div>
                <div id="cTab1-3" class="c-tab-panel" aria-hidden="true">탭3 Contents</div>
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
        <h3 class="title_sub">fill(background)</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-tabs fill">
              <div class="c-tablist">
                <div role="tablist" class="c-tablist-inner">
                  <div class="c-tab-item is-active">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="true" aria-controls="cTab2-1">
                      <span class="text">탭메뉴1</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab2-2">
                      <span class="text">탭메뉴2</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab2-3">
                      <span class="text">탭메뉴3</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="c-tab-content">
                <div id="cTab2-1" class="c-tab-panel" aria-hidden="false">탭1 Contents</div>
                <div id="cTab2-2" class="c-tab-panel" aria-hidden="true">탭2 Contents</div>
                <div id="cTab2-3" class="c-tab-panel" aria-hidden="true">탭3 Contents</div>
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
        <h3 class="title_sub">outline</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-tabs outline">
              <div class="c-tablist">
                <div role="tablist" class="c-tablist-inner">
                  <div class="c-tab-item is-active">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="true" aria-controls="cTab3-1">
                      <span class="text">탭메뉴1</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab3-2">
                      <span class="text">탭메뉴2</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab3-3">
                      <span class="text">탭메뉴3</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="c-tab-content">
                <div id="cTab3-1" class="c-tab-panel" aria-hidden="false">탭1 Contents</div>
                <div id="cTab3-2" class="c-tab-panel" aria-hidden="true">탭2 Contents</div>
                <div id="cTab3-3" class="c-tab-panel" aria-hidden="true">탭3 Contents</div>
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
        <h3 class="title_sub">균등 분할(justify)</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-tabs justify">
              <div class="c-tablist">
                <div role="tablist" class="c-tablist-inner">
                  <div class="c-tab-item is-active">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="true" aria-controls="cTab4-1">
                      <span class="text">탭메뉴1</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab4-2">
                      <span class="text">Tabmenu2</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab4-3">
                      <span class="text">탭Menu3</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="c-tab-content">
                <div id="cTab4-1" class="c-tab-panel" aria-hidden="false">탭1 Contents</div>
                <div id="cTab4-2" class="c-tab-panel" aria-hidden="true">탭2 Contents</div>
                <div id="cTab4-3" class="c-tab-panel" aria-hidden="true">탭3 Contents</div>
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
        <h3 class="title_sub">pills</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-tabs pills">
              <div class="c-tablist">
                <div role="tablist" class="c-tablist-inner">
                  <div class="c-tab-item is-active">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="true" aria-controls="cTab5-1">
                      <span class="text">탭메뉴1</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab5-2">
                      <span class="text">Tabmenu2</span>
                    </button>
                  </div>
                  <div class="c-tab-item">
                    <button type="button" role="tab" class="c-tab-btn" aria-selected="false" aria-controls="cTab5-3">
                      <span class="text">탭Menu3</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="c-tab-content">
                <div id="cTab5-1" class="c-tab-panel" aria-hidden="false">탭1 Contents</div>
                <div id="cTab5-2" class="c-tab-panel" aria-hidden="true">탭2 Contents</div>
                <div id="cTab5-3" class="c-tab-panel" aria-hidden="true">탭3 Contents</div>
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
const pageTitle = ref("Tabs");
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
@use "@/assets/scss/component/_tabs" as tabs;
</style>