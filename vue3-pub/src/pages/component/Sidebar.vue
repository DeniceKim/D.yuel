<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Sidebar</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br />
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br />
        마크업 구조는 현재 구조 유지. css만 변경
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">기본 Type</h3>
        <div class="code_editor">
          <router-link to="/demo/sidebar" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="height:500px">

            <div class="c-sidebar is-show">
              <div class="c-sidebar-inner">
                <div class="c-sidebar-head">
                  <strong classs="c-sidebar-title">상단 내용</strong>
                  <button type="button" class="c-sidebar-close" aria-label="닫기">
                    <i class="icon close"></i>
                  </button>
                </div>
                <div class="c-sidebar-body">
                  본문 내용
                </div>
                <div class="c-sidebar-foot">
                  하단 내용
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
import { ref, onMounted, watch } from "vue";

// 상태 변수
const pageTitle = ref("Sidebar");
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
@use "@/assets/scss/component/_card" as card;
@use "@/assets/scss/component/_list" as list;
</style>