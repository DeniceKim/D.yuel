<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Header</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br />
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br />
        마크업 구조는 현재 구조 유지. css만 변경<br>
        header css는 별도로 component에서 호출 안 함.<br>
        공통 common에서 처리.
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">Logo + noti + menu</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <header class="c-header">
              <div class="c-header-inner">
                <h1 class="h_title">
                  <img src="/images/common/logo.svg" alt="LOGO">
                </h1>
                <div class="c-header-util">
                  <button type="button" class="c-btn c-icon noti" aria-label="공지">
                    <i class="icon noti" aria-hidden="true" />
                  </button>
                  <button type="button" class="c-btn c-icon noti" aria-label="공지 알림있음">
                    <i class="icon noti" aria-hidden="true" />
                    <i class="dot" aria-hidden="true"></i>
                  </button>
                  <button type="button" class="c-btn c-icon menu" aria-label="전체메뉴">
                    <i class="icon menu" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </header>

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
        <h3 class="title_sub">Back + Title + menu</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <header class="c-header">
              <div class="c-header-inner">
                <button type="button" class="c-btn c-icon back" aria-label="이전으로 돌아가기">
                  <i class="icon back" aria-hidden="true" />
                </button>
                <h1 class="h_title">
                  <strong>Title</strong>
                </h1>
                <div class="c-header-util">
                  <button type="button" class="c-btn c-icon menu" aria-label="전체메뉴">
                    <i class="icon menu" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </header>

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
        <h3 class="title_sub">center + 메뉴없음</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <header class="c-header">
              <div class="c-header-inner">
                <button type="button" class="c-btn c-icon back" aria-label="이전으로 돌아가기">
                  <i class="icon back" aria-hidden="true" />
                </button>
                <h1 class="h_title center">
                  <strong>Title</strong>
                </h1>
              </div>
            </header>

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
        <h3 class="title_sub">Back + Menu</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <header class="c-header">
              <div class="c-header-inner">
                <button type="button" class="c-btn c-icon back" aria-label="이전으로 돌아가기">
                  <i class="icon back" aria-hidden="true" />
                </button>
                <h1 class="h_title">
                  <strong>Title</strong>
                </h1>
                <div class="c-header-util">
                  <button type="button" class="c-btn c-icon menu" aria-label="전체메뉴">
                    <i class="icon menu" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </header>

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
import { ref, onMounted, watch } from "vue";

// 상태 변수
const pageTitle = ref("Header");
const pageType = ref("");

// 페이지 초기화
onMounted(() => {
  pageType.value = import.meta.url.split("/").pop()?.split(".").shift() || "default";
  document.title = pageTitle.value;
});

// 페이지 제목 변경 감지
watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_button" as button;
</style>