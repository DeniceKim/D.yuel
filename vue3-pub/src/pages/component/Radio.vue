<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">{{ pageTitle }}</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">기본 Type(icon + text)</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-radiotype">
              <input type="radio" name="radBox1" id="radBox1" class="c-radio" />
              <label for="radBox1" class="c-label" aria-label="기본">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype">
              <input type="radio" name="radBox1" id="radBox2" class="c-radio" checked />
              <label for="radBox2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype">
              <input type="radio" name="radBox2" id="radBox3" class="c-radio" disabled />
              <label for="radBox3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype">
              <input type="radio" name="radBox2" id="radBox4" class="c-radio" checked disabled />
              <label for="radBox4" class="c-label" aria-label="checked disabled">
                <i class="icon" aria-hidden="true" />
              </label>
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
        <h3 class="title_sub">텍스트 방향 before(text + icon)</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-radiotype before">
              <input type="radio" name="radBox1-1" id="radBox1-1" class="c-radio" />
              <label for="radBox1-1" class="c-label" aria-label="기본">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype before">
              <input type="radio" name="radBox1-1" id="radBox1-2" class="c-radio" checked />
              <label for="radBox1-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype before">
              <input type="radio" name="radBox1-2" id="radBox1-3" class="c-radio" disabled />
              <label for="radBox1-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype before">
              <input type="radio" name="radBox1-2" id="radBox1-4" class="c-radio" checked disabled />
              <label for="radBox1-4" class="c-label" aria-label="checked disabled">
                <i class="icon" aria-hidden="true" />
              </label>
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
        <h3 class="title_sub">squared</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-radiotype squared">
              <input type="radio" name="radBox2-1" id="radBox2-1" class="c-radio" />
              <label for="radBox2-1" class="c-label" aria-label="squared">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype squared">
              <input type="radio" name="radBox2-1" id="radBox2-2" class="c-radio" checked />
              <label for="radBox2-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype squared">
              <input type="radio" name="radBox2-2" id="radBox2-3" class="c-radio" disabled />
              <label for="radBox2-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype squared">
              <input type="radio" name="radBox2-2" id="radBox2-4" class="c-radio" checked disabled />
              <label for="radBox2-4" class="c-label" aria-label="checked disabled">
                <i class="icon" aria-hidden="true" />
              </label>
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
        <h3 class="title_sub">half(50%)</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-radiotype half">
              <input type="radio" name="radBox3-1" id="radBox3-1" class="c-radio" />
              <label for="radBox3-1" class="c-label" aria-label="half">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype half">
              <input type="radio" name="radBox3-1" id="radBox3-2" class="c-radio" checked />
              <label for="radBox3-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype half">
              <input type="radio" name="radBox3-2" id="radBox3-3" class="c-radio" disabled />
              <label for="radBox3-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype half">
              <input type="radio" name="radBox3-2" id="radBox3-4" class="c-radio" checked disabled />
              <label for="radBox3-4" class="c-label" aria-label="checked disabled">
                <i class="icon" aria-hidden="true" />
              </label>
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
        <h3 class="title_sub">thirds(3등분)</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-radiotype thirds">
              <input type="radio" name="radBox4-1" id="radBox4-1" class="c-radio" />
              <label for="radBox4-1" class="c-label" aria-label="half">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype thirds">
              <input type="radio" name="radBox4-1" id="radBox4-2" class="c-radio" checked />
              <label for="radBox4-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype thirds">
              <input type="radio" name="radBox4-2" id="radBox4-3" class="c-radio" disabled />
              <label for="radBox4-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype thirds">
              <input type="radio" name="radBox4-2" id="radBox4-4" class="c-radio" checked disabled />
              <label for="radBox4-4" class="c-label" aria-label="checked disabled">
                <i class="icon" aria-hidden="true" />
              </label>
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
        <h3 class="title_sub">vertical</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-radiotype vertical">
              <input type="radio" name="radBox5-1" id="radBox5-1" class="c-radio" />
              <label for="radBox5-1" class="c-label" aria-label="vertical">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype vertical">
              <input type="radio" name="radBox5-1" id="radBox5-2" class="c-radio" checked />
              <label for="radBox5-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype vertical">
              <input type="radio" name="radBox5-2" id="radBox5-3" class="c-radio" disabled />
              <label for="radBox5-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype vertical">
              <input type="radio" name="radBox5-2" id="radBox5-4" class="c-radio" checked disabled />
              <label for="radBox5-4" class="c-label" aria-label="checked disabled">
                <i class="icon" aria-hidden="true" />
              </label>
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
        <h3 class="title_sub">button type</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-radiotype button">
              <input type="radio" name="radBox6-1" id="radBox6-1" class="c-radio" />
              <label for="radBox6-1" class="c-label" aria-label="button type">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype button">
              <input type="radio" name="radBox6-1" id="radBox6-2" class="c-radio" checked />
              <label for="radBox6-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype button">
              <input type="radio" name="radBox6-2" id="radBox6-3" class="c-radio" disabled />
              <label for="radBox6-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype button">
              <input type="radio" name="radBox6-2" id="radBox6-4" class="c-radio" checked disabled />
              <label for="radBox6-4" class="c-label" aria-label="checked disabled">
                <i class="icon" aria-hidden="true" />
              </label>
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
        <h3 class="title_sub">button type outline</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-radiotype button outline">
              <input type="radio" name="radBox7-1" id="radBox7-1" class="c-radio" />
              <label for="radBox7-1" class="c-label" aria-label="button type">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype button outline">
              <input type="radio" name="radBox7-1" id="radBox7-2" class="c-radio" checked />
              <label for="radBox7-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype button outline">
              <input type="radio" name="radBox7-2" id="radBox7-3" class="c-radio" disabled />
              <label for="radBox7-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-radiotype button outline">
              <input type="radio" name="radBox7-2" id="radBox7-4" class="c-radio" checked disabled />
              <label for="radBox7-4" class="c-label" aria-label="checked disabled">
                <i class="icon" aria-hidden="true" />
              </label>
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
const pageTitle = ref("Radio");
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
@use "@/assets/scss/component/_radio" as radio;
</style>