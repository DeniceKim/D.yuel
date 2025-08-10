<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Accordion</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">모두 닫힘</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <p class="desc fs-14 mb-20">
            활성화시 : .c-acc-item에 class is-show 추가<br>
            활성화시 : acc-btn에 aria-expanded="true"<br>
            acc-btn 속성 aria-controls="c-acc-body id값" 매칭
          </p>
          <div class="code_input gap">

            <div class="c-accordion">
              <div class="c-acc-item">
                <div class="c-acc-header">
                  <div class="c-acc-title">
                    <div class="text">AccordionTitle1</div>
                  </div> 
                  <button type="button" class="acc-btn" aria-label="Accordion Title1" aria-expanded="false" aria-controls="accordion-1"></button>
                </div>
                <div class="c-acc-body" id="accordion-1">
                  <!-- 내용 -->
                  <div class="c-card">
                    <div class="c-card-img">
                      <div class="c-img">
                        <img src="https://picsum.photos/900/250/?image=3" alt="">
                      </div>
                    </div>
                    <div class="c-card-inner">
                      <div class="c-card-header">
                        <strong class="c-card-title">Title</strong>
                      </div>
                      <div class="c-card-body">
                        card body area<br>
                        카드 Contents 영역
                      </div>
                      <div class="c-card-footer">
                        카드 하단 영역
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="c-acc-item">
                <div class="c-acc-header">
                  <div class="c-acc-title">
                    <div class="text">Accordion Title2</div>
                  </div> 
                  <button type="button" class="acc-btn" aria-label="Accordion Title2" aria-expanded="false" aria-controls="accordion-2"></button>
                </div>
                <div class="c-acc-body" id="accordion-2">
                  <!-- 내용 -->
                  내용내용내용내용내용내용내용내용내용내용내용<br>
                  내용내용내용내용내용내용내용내용내용내용내용<br>
                  내용내용내용내용내용내용내용내용내용내용내용<br>
                  내용내용내용내용내용내용내용내용내용내용내용

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
        <h3 class="title_sub">첫번째 요소 열림</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">

            <div class="c-accordion">
              <div class="c-acc-item is-show">
                <div class="c-acc-header">
                  <div class="c-acc-title">
                    <div class="text">AccordionTitle1Title1Title1Title1Title1Title1Title1Title1Title1Title1Title1Title1title</div>
                  </div> 
                  <button type="button" class="acc-btn" aria-label="Accordion Title1" aria-expanded="true" aria-controls="accordion-2-1"></button>
                </div>
                <div class="c-acc-body" id="accordion-2-1">
                  <!-- 내용 -->
                  <div class="c-card">
                    <div class="c-card-img">
                      <div class="c-img">
                        <img src="https://picsum.photos/900/250/?image=3" alt="">
                      </div>
                    </div>
                    <div class="c-card-inner">
                      <div class="c-card-header">
                        <strong class="c-card-title">Title</strong>
                      </div>
                      <div class="c-card-body">
                        card body area<br>
                        카드 Contents 영역
                      </div>
                      <div class="c-card-footer">
                        카드 하단 영역
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="c-acc-item">
                <div class="c-acc-header">
                  <div class="c-acc-title">
                    <div class="text">Accordion Title2</div>
                  </div> 
                  <button type="button" class="acc-btn" aria-label="Accordion Title2" aria-expanded="false" aria-controls="accordion-2-2"></button>
                </div>
                <div class="c-acc-body" id="accordion-2-2">
                  <!-- 내용 -->
                  내용내용내용내용내용내용내용내용내용내용내용<br>
                  내용내용내용내용내용내용내용내용내용내용내용<br>
                  내용내용내용내용내용내용내용내용내용내용내용<br>
                  내용내용내용내용내용내용내용내용내용내용내용

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
        <h3 class="title_sub">다중(Multi)</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <p class="desc fs-14 mb-20">
            accordion안에 accordion이 있는 경우 c-accordion-sub class 부여
          </p>
          <div class="code_input gap">

            <div class="c-accordion multi">
              <div class="c-acc-item is-show">
                <div class="c-acc-header">
                  <div class="c-acc-title">
                    <div class="text">depth1 accordion title</div>
                  </div> 
                  <button type="button" class="acc-btn" aria-label="Accordion Title1" aria-expanded="true" aria-controls="accordion-3-1"></button>
                </div>
                <div class="c-acc-body" id="accordion-3-1">
                  <!-- 내용 -->
                  <div class="c-accordion-sub">
                    <div class="c-acc-item">
                      <div class="c-acc-header">
                        <div class="c-acc-title">
                          <div class="text">sub accordion title1</div>
                        </div> 
                        <button type="button" class="acc-btn" aria-label="sub accordion title1" aria-expanded="false" aria-controls="accordion-3-1-1"></button>
                      </div>
                      <div class="c-acc-body" id="accordion-3-1-1">
                        <!-- 내용 -->
                        내용내용내용내용내용내용내용내용내용내용내용<br>
                        내용내용내용내용내용내용내용내용내용내용내용<br>
                        내용내용내용내용내용내용내용내용내용내용내용<br>
                        내용내용내용내용내용내용내용내용내용내용내용
                      </div>
                    </div>
                    <div class="c-acc-item">
                      <div class="c-acc-header">
                        <div class="c-acc-title">
                          <div class="text">sub accordion title2</div>
                        </div> 
                        <button type="button" class="acc-btn" aria-label="sub accordion title2" aria-expanded="false" aria-controls="accordion-3-1-2"></button>
                      </div>
                      <div class="c-acc-body" id="accordion-3-1-2">
                        <!-- 내용 -->
                        내용내용내용내용내용내용내용내용내용내용내용<br>
                        내용내용내용내용내용내용내용내용내용내용내용<br>
                        내용내용내용내용내용내용내용내용내용내용내용<br>
                        내용내용내용내용내용내용내용내용내용내용내용
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="c-acc-item">
                <div class="c-acc-header">
                  <div class="c-acc-title">
                    <div class="text">Accordion Title2</div>
                  </div> 
                  <button type="button" class="acc-btn" aria-label="Accordion Title2" aria-expanded="false" aria-controls="accordion-3-2"></button>
                </div>
                <div class="c-acc-body" id="accordion-3-2">
                  <!-- 내용 -->
                  내용내용내용내용내용내용내용내용내용내용내용<br>
                  내용내용내용내용내용내용내용내용내용내용내용<br>
                  내용내용내용내용내용내용내용내용내용내용내용<br>
                  내용내용내용내용내용내용내용내용내용내용내용

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
const pageTitle = ref("Accordion");
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
@use "@/assets/scss/component/_accordion" as accordion;
@use "@/assets/scss/component/_card" as card;
</style>