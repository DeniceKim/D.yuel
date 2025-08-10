<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Floating</h2>
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
          <router-link to="/demo/floating" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <ul class="list fs-14">
            <li>floatin 기본 설명</li>
            <li>
              - floating-btn more 클릭시 <b>is-active</b> class 추가
              <p>예) &lt;button type="button" class="floating-btn more is-active" aria-label="더보기"&gt;</p>
            </li>
            <li>
              - floating-btn more 클릭시 floating-info에 <b>is-show</b> class 추가
              <p>예) &lt;div class="floating-info is-show"&gt;</p>
            </li>
            <li>
              - floating-btn wauto 클릭시 <b>is-active</b> class 추가
              <p>예) &lt;a role="link" class="floating-btn wauto is-active"&gt;</p>
            </li>
          </ul>
          <div class="code_input">

            <div class="c-floating">
              <div class="c-floating-inner">
                <!-- Top 버튼 -->
                <button
                  type="button"
                  class="floating-btn top"
                  aria-label="위로 가기"
                  @click="scrollToTop"
                >
                  <i class="icon top" aria-hidden="true"></i>
                  <span class="text" aria-hidden="true">TOP</span>
                </button>

                <!-- More 버튼 -->
                <button type="button" class="floating-btn more" aria-label="더보기">
                  <i class="icon more" aria-hidden="true"></i>
                </button>

                <!-- Floating Info -->
                <div class="floating-info">
                  <ul class="floating-list">
                    <li>
                      <a role="link" class="floating-btn">
                        <span class="text">메뉴1</span>
                      </a>
                    </li>
                    <li>
                      <a role="link" class="floating-btn wauto">
                        <span class="text">메뉴2</span>
                        <div class="text-info">
                          메뉴 정보 메뉴 정보 메뉴 정보
                        </div>
                      </a>
                    </li>
                    <li>
                      <a role="link" class="floating-btn">
                        <span class="text">메뉴3</span>
                      </a>
                    </li>
                  </ul>
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
const pageTitle = ref("Floating");
const pageType = ref("");

// Top 버튼 동작
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 스크롤을 부드럽게 이동
  });
};

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
@use "@/assets/scss/component/_floating" as floating;
</style>