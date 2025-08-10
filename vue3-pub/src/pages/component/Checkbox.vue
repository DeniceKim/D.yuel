<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Checkbox</h2>
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
            <div class="c-checktype">
              <input type="checkbox" name="chkBox" id="chkBox1" class="c-check" />
              <label for="chkBox1" class="c-label" aria-label="기본">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype">
              <input type="checkbox" name="chkBox" id="chkBox2" class="c-check" checked />
              <label for="chkBox2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype">
              <input type="checkbox" name="chkBox" id="chkBox3" class="c-check" disabled />
              <label for="chkBox3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype">
              <input type="checkbox" name="chkBox" id="chkBox4" class="c-check" checked disabled />
              <label for="chkBox4" class="c-label" aria-label="checked disabled">
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
            <div class="c-checktype before">
              <input type="checkbox" name="chkBox1" id="chkBox1-1" class="c-check" />
              <label for="chkBox1-1" class="c-label" aria-label="기본">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype before">
              <input type="checkbox" name="chkBox1" id="chkBox1-2" class="c-check" checked />
              <label for="chkBox1-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype before">
              <input type="checkbox" name="chkBox1" id="chkBox1-3" class="c-check" disabled />
              <label for="chkBox1-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype before">
              <input type="checkbox" name="chkBox1" id="chkBox1-4" class="c-check" checked disabled />
              <label for="chkBox1-4" class="c-label" aria-label="checked disabled">
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
        <h3 class="title_sub">circle</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-checktype circle">
              <input type="checkbox" name="chkBox2" id="chkBox2-1" class="c-check" />
              <label for="chkBox2-1" class="c-label" aria-label="circle">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype circle">
              <input type="checkbox" name="chkBox2" id="chkBox2-2" class="c-check" checked />
              <label for="chkBox2-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype circle">
              <input type="checkbox" name="chkBox2" id="chkBox2-3" class="c-check" disabled />
              <label for="chkBox2-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype circle">
              <input type="checkbox" name="chkBox2" id="chkBox2-4" class="c-check" checked disabled />
              <label for="chkBox2-4" class="c-label" aria-label="checked disabled">
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
            <div class="c-checktype half">
              <input type="checkbox" name="chkBox3" id="chkBox3-1" class="c-check" />
              <label for="chkBox3-1" class="c-label" aria-label="half">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype half">
              <input type="checkbox" name="chkBox3" id="chkBox3-2" class="c-check" checked />
              <label for="chkBox3-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype half">
              <input type="checkbox" name="chkBox3" id="chkBox3-3" class="c-check" disabled />
              <label for="chkBox3-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype half">
              <input type="checkbox" name="chkBox3" id="chkBox3-4" class="c-check" checked disabled />
              <label for="chkBox3-4" class="c-label" aria-label="checked disabled">
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
            <div class="c-checktype thirds">
              <input type="checkbox" name="chkBox4" id="chkBox4-1" class="c-check" />
              <label for="chkBox4-1" class="c-label" aria-label="half">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype thirds">
              <input type="checkbox" name="chkBox4" id="chkBox4-2" class="c-check" checked />
              <label for="chkBox4-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype thirds">
              <input type="checkbox" name="chkBox4" id="chkBox4-3" class="c-check" disabled />
              <label for="chkBox4-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype thirds">
              <input type="checkbox" name="chkBox4" id="chkBox4-4" class="c-check" checked disabled />
              <label for="chkBox4-4" class="c-label" aria-label="checked disabled">
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
            <div class="c-checktype vertical">
              <input type="checkbox" name="chkBox5" id="chkBox5-1" class="c-check" />
              <label for="chkBox5-1" class="c-label" aria-label="vertical">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype vertical">
              <input type="checkbox" name="chkBox5" id="chkBox5-2" class="c-check" checked />
              <label for="chkBox5-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype vertical">
              <input type="checkbox" name="chkBox5" id="chkBox5-3" class="c-check" disabled />
              <label for="chkBox5-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype vertical">
              <input type="checkbox" name="chkBox5" id="chkBox5-4" class="c-check" checked disabled />
              <label for="chkBox5-4" class="c-label" aria-label="checked disabled">
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
            <div class="c-checktype button">
              <input type="checkbox" name="chkBox6" id="chkBox6-1" class="c-check" />
              <label for="chkBox6-1" class="c-label" aria-label="button type">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype button">
              <input type="checkbox" name="chkBox6" id="chkBox6-2" class="c-check" checked />
              <label for="chkBox6-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype button">
              <input type="checkbox" name="chkBox6" id="chkBox6-3" class="c-check" disabled />
              <label for="chkBox6-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype button">
              <input type="checkbox" name="chkBox6" id="chkBox6-4" class="c-check" checked disabled />
              <label for="chkBox6-4" class="c-label" aria-label="checked disabled">
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
            <div class="c-checktype button outline">
              <input type="checkbox" name="chkBox7" id="chkBox7-1" class="c-check" />
              <label for="chkBox7-1" class="c-label" aria-label="button type">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype button outline">
              <input type="checkbox" name="chkBox7" id="chkBox7-2" class="c-check" checked />
              <label for="chkBox7-2" class="c-label" aria-label="checked">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype button outline">
              <input type="checkbox" name="chkBox7" id="chkBox7-3" class="c-check" disabled />
              <label for="chkBox7-3" class="c-label" aria-label="disabled">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <div class="c-checktype button outline">
              <input type="checkbox" name="chkBox7" id="chkBox7-4" class="c-check" checked disabled />
              <label for="chkBox7-4" class="c-label" aria-label="checked disabled">
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
        <h3 class="title_sub">switch</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-checktype switch">
              <input type="checkbox" name="chkBox8" id="chkBox8-1" class="c-check" />
              <label for="chkBox8-1" class="c-label" aria-label="switch">
                <span class="c-switch-rail">
                  <span class="c-switch-button"></span>
                </span>
              </label>
            </div>
            <div class="c-checktype switch">
              <input type="checkbox" name="chkBox8" id="chkBox8-2" class="c-check" checked />
              <label for="chkBox8-2" class="c-label" aria-label="checked">
                <span class="c-switch-rail">
                  <span class="c-switch-button"></span>
                </span>
              </label>
            </div>
            <div class="c-checktype switch">
              <input type="checkbox" name="chkBox8" id="chkBox8-3" class="c-check" disabled />
              <label for="chkBox8-3" class="c-label" aria-label="disabled">
                <span class="c-switch-rail">
                  <span class="c-switch-button"></span>
                </span>
              </label>
            </div>
            <div class="c-checktype switch">
              <input type="checkbox" name="chkBox8" id="chkBox8-4" class="c-check" checked disabled />
              <label for="chkBox8-4" class="c-label" aria-label="checked disabled">
                <span class="c-switch-rail">
                  <span class="c-switch-button"></span>
                </span>
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
        <h3 class="title_sub">switch size</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-checktype switch xs">
              <input type="checkbox" name="chkBox9" id="chkBox9-1" class="c-check" />
              <label for="chkBox9-1" class="c-label" aria-label="xs">
                <span class="c-switch-rail">
                  <span class="c-switch-button"></span>
                </span>
              </label>
            </div>
            <div class="c-checktype switch">
              <input type="checkbox" name="chkBox9" id="chkBox9-2" class="c-check" />
              <label for="chkBox9-2" class="c-label" aria-label="default md">
                <span class="c-switch-rail">
                  <span class="c-switch-button"></span>
                </span>
              </label>
            </div>
            <div class="c-checktype switch xl">
              <input type="checkbox" name="chkBox9" id="chkBox9-3" class="c-check" />
              <label for="chkBox9-3" class="c-label" aria-label="xl">
                <span class="c-switch-rail">
                  <span class="c-switch-button"></span>
                </span>
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
const pageTitle = ref("Checkbox");
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
@use "@/assets/scss/component/_checkbox" as checkbox;
</style>