<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Button</h2>
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
            <button type="button" class="c-btn">
              <span class="text">primary default</span>
            </button>
            <button type="button" class="c-btn secondary">
              <span class="text">secondary default</span>
            </button>
            <button type="button" class="c-btn tertiary">
              <span class="text">tertiary default</span>
            </button>
            <button type="button" class="c-btn gray">
              <span class="text">gray default</span>
            </button>
            <button type="button" class="c-btn black">
              <span class="text">black default</span>
            </button>
            <button type="button" class="c-btn" disabled>
              <span class="text">disabled 공통</span>
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
      
      <section>
        <h3 class="title_sub">기본 + squared Type</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <button type="button" class="c-btn squared">
              <span class="text">primary squared</span>
            </button>
            <button type="button" class="c-btn squared secondary">
              <span class="text">secondary squared</span>
            </button>
            <button type="button" class="c-btn squared tertiary">
              <span class="text">tertiary squared</span>
            </button>
            <button type="button" class="c-btn squared gray">
              <span class="text">gray squared</span>
            </button>
            <button type="button" class="c-btn squared black">
              <span class="text">black squared</span>
            </button>
            <button type="button" class="c-btn" disabled>
              <span class="text">disabled 공통</span>
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
      
      <section>
        <h3 class="title_sub">기본 + outline Type</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <button type="button" class="c-btn outline">
              <span class="text">primary outline</span>
            </button>
            <button type="button" class="c-btn outline secondary">
              <span class="text">secondary outline</span>
            </button>
            <button type="button" class="c-btn outline tertiary">
              <span class="text">tertiary outline</span>
            </button>
            <button type="button" class="c-btn outline gray">
              <span class="text">gray outline</span>
            </button>
            <button type="button" class="c-btn outline black">
              <span class="text">black outline</span>
            </button>
            <button type="button" class="c-btn outline black" disabled>
              <span class="text">outline disabled</span>
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
      
      <section>
        <h3 class="title_sub">사이즈 + 기본 + outline</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <button type="button" class="c-btn xxl">
              <span class="text">primary xxl size</span>
            </button>
            <button type="button" class="c-btn outline xxl">
              <span class="text">primary outline xxl size</span>
            </button>
            <button type="button" class="c-btn xl">
              <span class="text">primary xl size</span>
            </button>
            <button type="button" class="c-btn outline xl">
              <span class="text">primary outline xl size</span>
            </button>
            <button type="button" class="c-btn md">
              <span class="text">primary md size</span>
            </button>
            <button type="button" class="c-btn outline md">
              <span class="text">primary outline md size</span>
            </button>
            <button type="button" class="c-btn xs">
              <span class="text">primary xs size</span>
            </button>
            <button type="button" class="c-btn outline xs">
              <span class="text">primary outline xs size</span>
            </button>
            <button type="button" class="c-btn xxs">
              <span class="text">primary xxs size</span>
            </button>
            <button type="button" class="c-btn outline xxs">
              <span class="text">primary outline xxs size</span>
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
      
      <section>
        <h3 class="title_sub">아이콘 Type</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <button type="button" class="c-btn c-icon" aria-label="이전으로 돌아가기">
              <i class="icon back" aria-hidden="true" />
            </button>
            <button type="button" class="c-btn c-icon" aria-label="전체메뉴">
              <i class="icon menu" aria-hidden="true" />
            </button>
            <button type="button" class="c-btn c-icon" aria-label="취소">
              <i class="icon close" aria-hidden="true" />
            </button>
            <button type="button" class="c-btn c-icon" aria-label="취소">
              <i class="icon close-circle" aria-hidden="true" />
            </button>
            <button type="button" class="c-btn c-icon" aria-label="취소">
              <i class="icon close-circle-fill" aria-hidden="true" />
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
      
      <section>
        <h3 class="title_sub">아이콘+텍스트 Type</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <button type="button" class="c-btn c-icon">
              <i class="icon back" aria-hidden="true" />
              <span class="text">이전</span>
            </button>
            <button type="button" class="c-btn c-icon">
              <span class="text">전체메뉴</span>
              <i class="icon menu" aria-hidden="true" />
            </button>
            <button type="button" class="c-btn c-icon">
              <span class="text">취소</span>
              <i class="icon cancel" aria-hidden="true" />
            </button>
            <button type="button" class="c-btn c-icon">
              <span class="text">닫기</span>
              <i class="icon close" aria-hidden="true" />
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
      
      <section>
        <h3 class="title_sub">link Type</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <button type="button" class="c-btn c-link">
              <span class="text">primary default</span>
            </button>
            <button type="button" class="c-btn c-link secondary">
              <span class="text">secondary default</span>
            </button>
            <button type="button" class="c-btn c-link tertiary">
              <span class="text">tertiary default</span>
            </button>
            <button type="button" class="c-btn c-link gray">
              <span class="text">gray default</span>
            </button>
            <button type="button" class="c-btn c-link black">
              <span class="text">black default</span>
            </button>
            <button type="button" class="c-btn c-link white">
              <span class="text">white default</span>
            </button>
            <button type="button" class="c-btn c-link" disabled>
              <span class="text">disabled 공통</span>
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
const pageTitle = ref("Button");
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
@use "@/assets/scss/component/_button" as button;
</style>