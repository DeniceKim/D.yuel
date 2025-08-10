<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Tabbar</h2>
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
          <div class="code_input" style="padding-top:50px">

            <div class="c-tabbar">
              <div role="tablist" class="c-tabbar-inner">
                <button type="button" role="tab" class="tabbar-btn home" aria-selected="true">
                  <i class="icon home" aria-hidden="true" />
                  <span class="text">홈</span>
                </button>
                <button type="button" role="tab" class="tabbar-btn">
                  <i class="icon hospital" aria-hidden="true" />
                  <span class="text">메뉴1</span>
                </button>
                <button type="button" role="tab" class="tabbar-btn">
                  <i class="icon heart" aria-hidden="true" />
                  <span class="text">메뉴2</span>
                </button>
                <button type="button" role="tab" class="tabbar-btn">
                  <i class="icon set" aria-hidden="true" />
                  <span class="text">메뉴3</span>
                </button>
                <button type="button" role="tab" class="tabbar-btn">
                  <i class="icon user" aria-hidden="true" />
                  <span class="text">메뉴4</span>
                </button>
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
        <h3 class="title_sub">home center</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="padding-top:50px">

            <div class="c-tabbar center">
              <div role="tablist" class="c-tabbar-inner">
                <button type="button" role="tab" class="tabbar-btn home">
                  <i class="icon home" aria-hidden="true" />
                  <span class="text">홈</span>
                </button>
                <div class="c-tabbar-group">
                  <button type="button" role="tab" class="tabbar-btn" aria-selected="true">
                    <i class="icon hospital" aria-hidden="true" />
                    <span class="text">메뉴1</span>
                  </button>
                  <button type="button" role="tab" class="tabbar-btn">
                    <i class="icon heart" aria-hidden="true" />
                    <span class="text">메뉴2</span>
                  </button>
                </div>
                <div class="c-tabbar-group">
                  <button type="button" role="tab" class="tabbar-btn">
                    <i class="icon set" aria-hidden="true" />
                    <span class="text">메뉴3</span>
                  </button>
                  <button type="button" role="tab" class="tabbar-btn">
                    <i class="icon user" aria-hidden="true" />
                    <span class="text">메뉴4</span>
                  </button>
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

      
      <section>
        <h3 class="title_sub">하단 고정 fixed</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-tabbar fixed-bottom">
              <div role="tablist" class="c-tabbar-inner">
                <button type="button" role="tab" class="tabbar-btn home" aria-selected="true">
                  <i class="icon home" aria-hidden="true" />
                  <span class="text">홈</span>
                </button>
                <button type="button" role="tab" class="tabbar-btn">
                  <i class="icon hospital" aria-hidden="true" />
                  <span class="text">메뉴1</span>
                </button>
                <button type="button" role="tab" class="tabbar-btn">
                  <i class="icon heart" aria-hidden="true" />
                  <span class="text">메뉴2</span>
                </button>
                <button type="button" role="tab" class="tabbar-btn">
                  <i class="icon set" aria-hidden="true" />
                  <span class="text">메뉴3</span>
                </button>
                <button type="button" role="tab" class="tabbar-btn">
                  <i class="icon user" aria-hidden="true" />
                  <span class="text">메뉴4</span>
                </button>
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
const pageTitle = ref("Tabbar");
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
@use "@/assets/scss/component/_tabbar" as tabbar;
</style>