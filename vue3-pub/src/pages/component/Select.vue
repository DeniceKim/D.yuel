<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">{{ pageTitle }}</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경<br>
        Custom 옵션이 하단에서 호출된 경우는 c-optgroup에 bottom class 추가
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">기본 Type</h3>
        <div class="code_editor">
          <router-link to="/demo/select" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-seltype">
              <label for="sel1" class="c-label">기본 select</label>
              <select name="sel1" id="sel1" class="c-sel">
                <option value="">옵션선택</option>
                <option value="button">button</option>
                <option value="input">input</option>
                <option value="checkbox">checkbox</option>
                <option value="radio">radio</option>
              </select>
            </div>
            <div class="c-seltype">
              <strong class="c-label">Custom select</strong>
              <div class="c-selgroup">
                <!-- c-selbtn 클릭시 is-active 추가 option이나 dim 클릭시 제거 -->
                <button type="button" class="c-selbtn">
                  <span>옵션선택</span>
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
        <h3 class="title_sub">Bottom Line</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-seltype btmline">
              <label for="sel2" class="c-label">bottom line</label>
              <select name="sel2" id="sel2" class="c-sel">
                <option value="">옵션선택</option>
                <option value="button">button</option>
                <option value="input">input</option>
                <option value="checkbox">checkbox</option>
                <option value="radio">radio</option>
              </select>
            </div>
            <div class="c-seltype btmline">
              <strong class="c-label">Custom</strong>
              <div class="c-selgroup">
                <!-- c-selbtn 클릭시 is-active 추가 option이나 dim 클릭시 제거 -->
                <button type="button" class="c-selbtn">
                  <span>옵션선택</span>
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
        <h3 class="title_sub">Width Size</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-seltype wauto">
              <label for="sel3" class="c-label">width size auto</label>
              <select name="sel3" id="sel3" class="c-sel">
                <option value="">옵션선택</option>
                <option value="button">button</option>
                <option value="input">input</option>
                <option value="checkbox">checkbox</option>
                <option value="radio">radio</option>
              </select>
            </div>
            <div class="c-seltype wauto">
              <strong class="c-label">width size auto</strong>
              <div class="c-selgroup">
                <!-- c-selbtn 클릭시 is-active 추가 option이나 dim 클릭시 제거 -->
                <button type="button" class="c-selbtn">
                  <span>옵션선택</span>
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
        <h3 class="title_sub">Height Size</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input gap">
            <div class="c-seltype xl">
              <label for="sel4-1" class="c-label">Height size xl</label>
              <select name="sel4-1" id="sel4-1" class="c-sel">
                <option value="">옵션선택</option>
                <option value="button">button</option>
                <option value="input">input</option>
                <option value="checkbox">checkbox</option>
                <option value="radio">radio</option>
              </select>
            </div>
            <div class="c-seltype xxl">
              <label for="sel4-2" class="c-label">Height size xxl</label>
              <select name="sel4-2" id="sel4-2" class="c-sel">
                <option value="">옵션선택</option>
                <option value="button">button</option>
                <option value="input">input</option>
                <option value="checkbox">checkbox</option>
                <option value="radio">radio</option>
              </select>
            </div>
            <div class="c-seltype xl">
              <strong class="c-label">Height size xl</strong>
              <div class="c-selgroup">
                <!-- c-selbtn 클릭시 is-active 추가 option이나 dim 클릭시 제거 -->
                <button type="button" class="c-selbtn">
                  <span>옵션선택</span>
                </button>
              </div>
            </div>
            <div class="c-seltype xxl">
              <strong class="c-label">Height size xl</strong>
              <div class="c-selgroup">
                <!-- c-selbtn 클릭시 is-active 추가 option이나 dim 클릭시 제거 -->
                <button type="button" class="c-selbtn">
                  <span>옵션선택</span>
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
    
    <teleport to="body">
      <!-- 
        c-selbtn 클릭시 c-optgroup에 class is-show 추가
        해당 옵션 선택하면 class is-show 제거
        선택된 aria-label의 값이 c-selbtn의 span에 호출
        기본 : 가운데 호출
        하단에서 올라오는 위치이면 c-optgroup 에 class bottom 추가
      -->
      <div class="c-optgroup">
      <!-- <div class="c-optgroup bottom"> -->
      <!-- <div class="c-optgroup is-show"> -->
        <!-- 
          modal형식으로 호출되는 부분에서 공통으로 처리
          c-dim z-index는 동적으로 조정. 
          클릭시 부모 is-show class 제거 
        -->
        <div class="c-dim" style="z-index:10" />
        <ul class="c-optlist">
          <li class="c-optitem">
            <div class="c-radiotype">
              <input type="radio" name="radBox" id="radBox1" class="c-radio" />
              <label for="radBox1" class="c-label" aria-label="button">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
          </li>
          <li class="c-optitem">
            <div class="c-radiotype">
              <input type="radio" name="radBox" id="radBox2" class="c-radio" />
              <label for="radBox2" class="c-label" aria-label="input">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
          </li>
          <li class="c-optitem">
            <div class="c-radiotype">
              <input type="radio" name="radBox" id="radBox3" class="c-radio" />
              <label for="radBox3" class="c-label" aria-label="checkbox">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
          </li>
          <li class="c-optitem">
            <div class="c-radiotype">
              <input type="radio" name="radBox" id="radBox4" class="c-radio" />
              <label for="radBox4" class="c-label" aria-label="radio">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
          </li>
        </ul>
      </div>
    </teleport>
  </main>
  
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

/* 반응형 변수 */
const pageTitle = ref("Select");
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
@use "@/assets/scss/component/_select" as select;
</style>