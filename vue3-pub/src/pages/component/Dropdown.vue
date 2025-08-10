<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Badge</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody" style="padding-bottom:150px">
      <section>
        <h3 class="title_sub">텍스트 Type</h3>
        <div class="code_editor">
          <router-link to="/demo/dropdown" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-dropdown is-open">
              <button type="button" class="c-dropdown-btn bottom" aria-expanded="true">
                <span class="text">도움말</span>
              </button>

              <!-- 드롭다운 패널 -->
              <div class="c-dropdown-panel" style="--dropdown-top: 44px; --dropdown-left: 0px;">
                <button type="button" class="c-dropdown-close-btn" aria-label="닫기"></button>

                <div class="c-dropdown-menu">
                  <div class="c-dropdown-in">원하는 내용 등록.</div>
                  <!-- 내용이 없는 경우 -->
                  <!-- <p class="text-muted">내용이 없습니다.</p> -->
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
        <h3 class="title_sub">Icon Type</h3>
        <div class="code_editor">
          <router-link to="/demo/dropdown" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-dropdown help is-open">
              <button type="button" class="c-dropdown-btn bottom" aria-expanded="true" aria-label="도움말">
                <i class="icon" aria-hidden="true"></i>
              </button>

              <!-- 드롭다운 패널 -->
              <div class="c-dropdown-panel" style="--dropdown-top: 34px; --dropdown-left: 0px;">
                <button type="button" class="c-dropdown-close-btn" aria-label="닫기"></button>

                <div class="c-dropdown-menu">
                  <div class="c-dropdown-in">원하는 내용 등록.</div>
                  <!-- 내용이 없는 경우 -->
                  <!-- <p class="text-muted">내용이 없습니다.</p> -->
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
        <h3 class="title_sub">Tooltip Type</h3>
        <div class="code_editor">
          <router-link to="/demo/dropdown" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-dropdown help tooltip is-open">
              <button type="button" class="c-dropdown-btn bottom" aria-expanded="true" aria-label="도움말">
                <i class="icon" aria-hidden="true"></i>
              </button>
              <!-- 툴팁 화살표 (dropdown 부모 기준으로 가운데 정렬 계산) -->
              <div class="c-tooltip-arrow" style="--tooltip-top: 34px; --tooltip-left: 50%;"></div>

              <!-- 드롭다운 패널 -->
              <div class="c-dropdown-panel" style="--dropdown-top: 34px; --dropdown-left: 0px;">
                <button type="button" class="c-dropdown-close-btn" aria-label="닫기"></button>

                <div class="c-dropdown-menu">
                  <div class="c-dropdown-in">원하는 내용 등록.</div>
                  <!-- 내용이 없는 경우 -->
                  <!-- <p class="text-muted">내용이 없습니다.</p> -->
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
        <h3 class="title_sub">메뉴 Type</h3>
        <div class="code_editor">
          <router-link to="/demo/dropdown" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-dropdown is-open">
              <button type="button" class="c-dropdown-btn bottom" aria-expanded="true">
                <span class="text">메뉴</span>
              </button>

              <!-- 드롭다운 패널 -->
              <div class="c-dropdown-panel" style="--dropdown-top: 44px; --dropdown-left: 0px;">
                <button type="button" class="c-dropdown-close-btn" aria-label="닫기"></button>

                <div class="c-dropdown-menu">
                  <ul class="c-dropdown-menu" role="menu">
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 1</li>
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 2</li>
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
      <section>
        <h3 class="title_sub">위치 bottom</h3>
        <div class="code_editor">
          <router-link to="/demo/dropdown" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-dropdown tooltip is-open">
              <button type="button" class="c-dropdown-btn bottom" aria-expanded="true">
                <span class="text">기본 bottom</span>
              </button>

              <div class="c-tooltip-arrow" style="--tooltip-top: 44px; --tooltip-left: 50%;"></div>
              <!-- 드롭다운 패널 -->
              <div class="c-dropdown-panel" style="--dropdown-top: 44px; --dropdown-left: 0px;">
                <button type="button" class="c-dropdown-close-btn" aria-label="닫기"></button>

                <div class="c-dropdown-menu">
                  <ul class="c-dropdown-menu" role="menu">
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 1</li>
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 2</li>
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
      <section>
        <h3 class="title_sub">위치 top</h3>
        <div class="code_editor">
          <router-link to="/demo/dropdown" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="text-align: center;">

            <div class="c-dropdown tooltip is-open">
              <button type="button" class="c-dropdown-btn top" aria-expanded="true">
                <span class="text">기본 top</span>
              </button>

              <div class="c-tooltip-arrow" style="--tooltip-top: -8px; --tooltip-left: 50%;"></div>
              <!-- 드롭다운 패널 -->
              <div class="c-dropdown-panel" style="--dropdown-top: -69px; --dropdown-left: 0px;">
                <button type="button" class="c-dropdown-close-btn" aria-label="닫기"></button>

                <div class="c-dropdown-menu">
                  <ul class="c-dropdown-menu" role="menu">
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 1</li>
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 2</li>
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
      <section>
        <h3 class="title_sub">위치 left</h3>
        <div class="code_editor">
          <router-link to="/demo/dropdown" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="text-align: right;">

            <div class="c-dropdown tooltip is-open">
              <button type="button" class="c-dropdown-btn left" aria-expanded="true">
                <span class="text">기본 left</span>
              </button>

              <div class="c-tooltip-arrow" style="--tooltip-top: 50%; --tooltip-left: -8px;"></div>
              <!-- 드롭다운 패널 -->
              <div class="c-dropdown-panel" style="--dropdown-top: 0px; --dropdown-left: -176px;">
                <button type="button" class="c-dropdown-close-btn" aria-label="닫기"></button>

                <div class="c-dropdown-menu">
                  <ul class="c-dropdown-menu" role="menu">
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 1</li>
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 2</li>
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
      <section>
        <h3 class="title_sub">위치 right</h3>
        <div class="code_editor">
          <router-link to="/demo/dropdown" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-dropdown tooltip is-open">
              <button type="button" class="c-dropdown-btn right" aria-expanded="true">
                <span class="text">기본 right</span>
              </button>

              <div class="c-tooltip-arrow" style="--tooltip-top: 50%; --tooltip-left: calc(100% + 8px);"></div>
              <!-- 드롭다운 패널 -->
              <div class="c-dropdown-panel" style="--dropdown-top: 0px; --dropdown-left: calc(100% + 8px)">
                <button type="button" class="c-dropdown-close-btn" aria-label="닫기"></button>

                <div class="c-dropdown-menu">
                  <ul class="c-dropdown-menu" role="menu">
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 1</li>
                    <li class="c-dropdown-item" role="menuitem" tabindex="0">Menu 2</li>
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
import { ref, onMounted, watch } from 'vue';

/* 반응형 변수 */
const pageTitle = ref("Dropdown");
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
@use "@/assets/scss/component/_dropdown" as dropdown;
</style>