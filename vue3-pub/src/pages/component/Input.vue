<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Input</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">input, textarea</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <div class="c-inptype">
              <label for="inputField1" class="c-label">label</label>
              <div class="c-inp-el">
                <input type="text" name="inputField1" id="inputField1" placeholder="입력하세요" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype">
              <label for="pwdField1" class="c-label">label</label>
              <div class="c-inp-el">
                <input type="password" name="pwdField1" id="pwdField1" placeholder="비밀번호" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype">
              <label for="numField1" class="c-label">label</label>
              <div class="c-inp-el">
                <input type="number" name="numField1" id="numField1" placeholder="숫자" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype">
              <label for="searField1" class="c-label">label</label>
              <div class="c-inp-el">
                <input type="search" name="searField1" id="searField1" placeholder="검색" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
                <button type="button" class="c-btn c-icon" aria-label="검색">
                  <i class="icon search" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div class="c-inptype">
              <label for="systemField1" class="c-label">시스템달력</label>
              <div class="c-inp-el">
                <input type="date" name="systemField1" id="systemField1" placeholder="기본달력" class="c-inp" />
                <!-- <button type="button" class="c-btn c-icon" aria-label="날짜선택">
                  <i class="icon calendar" aria-hidden="true" />
                </button> -->
              </div>
            </div>
            <div class="c-inptype">
              <label for="customField1" class="c-label">커스텀달력</label>
              <div class="c-inp-el">
                <input type="text" name="customField1" id="customField1" v-model="dateValue" placeholder="YYYY-MM-DD" class="c-inp" />
                <button type="button" class="c-btn c-icon" aria-label="날짜선택">
                  <i class="icon calendar" aria-hidden="true" @click="openCalendar" />
                </button>
              </div>
            </div>
            <div class="c-inptype">
              <label for="systemTime1" class="c-label">시스템시간</label>
              <div class="c-inp-el">
                <input type="time" name="systemTime1" id="systemTime1" placeholder="기본시간" class="c-inp" />
                <!-- <button type="button" class="c-btn c-icon" aria-label="시간선택">
                  <i class="icon time" aria-hidden="true" />
                </button> -->
              </div>
            </div>
            <div class="c-inptype">
              <label for="customTime1" class="c-label">커스텀시간</label>
              <div class="c-inp-el">
                <input type="text" name="customTime1" id="customTime1" v-model="timeValue" placeholder="HH:MM" class="c-inp" />
                <button type="button" class="c-btn c-icon" aria-label="시간선택">
                  <i class="icon time" aria-hidden="true" @click="openTime" />
                </button>
              </div>
            </div>
            <div class="c-inptype">
              <label for="inputField2" class="c-label">disabled</label>
              <div class="c-inp-el">
                <input type="text" name="inputField2" id="inputField2" placeholder="입력하세요" value="텍스트 입력값" class="c-inp" disabled />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype">
              <label for="urlField" class="c-label">url</label>
              <div class="c-inp-el">
                <input type="url" name="urlField" id="urlField" placeholder="입력하세요" value="https://remixicon.com/" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype">
              <label for="urlField" class="c-label">email</label>
              <div class="c-inp-el">
                <input type="email" name="emailField" id="emailField" placeholder="입력하세요" value="test@lemonhc.com" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype">
              <label for="urlField" class="c-label">tel</label>
              <div class="c-inp-el">
                <input type="tel" name="telField" id="telField" placeholder="입력하세요" value="000-0000-0000" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype">
              <label for="inputField3" class="c-label">readonly</label>
              <div class="c-inp-el">
                <input type="text" name="inputField3" id="inputField3" placeholder="입력하세요" value="텍스트 입력값" class="c-inp" readonly />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-texttype">
              <label for="textField" class="c-label">label</label>
              <div class="c-inp-el">
                <textarea name="textField" id="textField" placeholder="입력하세요" class="c-textarea"></textarea>
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-texttype">
              <label for="textField2" class="c-label">disabled</label>
              <div class="c-inp-el">
                <textarea name="textField" id="textField2" maxlength="200" placeholder="입력하세요" class="c-textarea" disabled></textarea>
                <button type="button" class="clear-btn" aria-label="삭제" />
                <div class="c-inp-word-count">0 / 200</div>
              </div>
              <p class="exceeded">최대 글자 수를 초과하였습니다.</p>
            </div>
            <div class="c-texttype">
              <label for="textField2" class="c-label">readonly</label>
              <div class="c-inp-el">
                <textarea name="textField" id="textField2" maxlength="200" placeholder="입력하세요" class="c-textarea" readonly></textarea>
                <button type="button" class="clear-btn" aria-label="삭제" />
                <div class="c-inp-word-count">0 / 200</div>
              </div>
              <p class="exceeded">최대 글자 수를 초과하였습니다.</p>
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
        <h3 class="title_sub">input, textarea Vertical</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <div class="c-inptype vertical">
              <label for="inputField2-1" class="c-label">label</label>
              <div class="c-inp-el">
                <input type="text" name="inputField2-1" id="inputField2-1" placeholder="입력하세요" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-texttype vertical">
              <label for="textField2-1" class="c-label">label</label>
              <div class="c-inp-el">
                <textarea name="textField2-1" id="textField2-1" maxlength="200" placeholder="입력하세요" class="c-textarea"></textarea>
                <button type="button" class="clear-btn" aria-label="삭제" />
                <div class="c-inp-word-count">0 / 200</div>
              </div>
              <p class="exceeded">최대 글자 수를 초과하였습니다.</p>
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
        <h3 class="title_sub">Size</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <div class="c-inptype xxl">
              <label for="xxl1-1" class="c-label">xxl size</label>
              <div class="c-inp-el">
                <input type="text" name="xxl1-1" id="xxl1-1" placeholder="class xxl" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype xl">
              <label for="xl2-1" class="c-label">xl size</label>
              <div class="c-inp-el">
                <input type="text" name="xl2-1" id="xl2-1" placeholder="class xl" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype">
              <label for="default3-1" class="c-label">default</label>
              <div class="c-inp-el">
                <input type="text" name="default3-1" id="default3-1" placeholder="기본 사이즈" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
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
        <h3 class="title_sub">round</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <div class="c-inptype round xxl">
              <label for="round3-1" class="c-label">Round</label>
              <div class="c-inp-el">
                <input type="text" name="round3-1" id="round3-1" placeholder="xxl 사이즈" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype round xl">
              <label for="round2-1" class="c-label">Round</label>
              <div class="c-inp-el">
                <input type="text" name="round2-1" id="round2-1" placeholder="xl 사이즈" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype round">
              <label for="round1-1" class="c-label">Round</label>
              <div class="c-inp-el">
                <input type="text" name="round1-1" id="round1-1" placeholder="기본 사이즈" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
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
        <h3 class="title_sub">Validation status</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <div class="c-inptype error">
              <label for="err1-1" class="c-label">Error</label>
              <div class="c-inp-el">
                <input type="text" name="err1-1" id="err1-1" placeholder="입력오류 class error" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype error">
              <label for="err1-2" class="c-label">Error</label>
              <div class="c-inp-el">
                <input type="text" name="err1-2" id="err1-2" placeholder="입력오류 class error" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
                <i class="icon error" aria-hidden="true" />
              </div>
            </div>
            <div class="c-inptype round error">
              <label for="err1-3" class="c-label">Error</label>
              <div class="c-inp-el">
                <input type="text" name="err1-3" id="err1-3" placeholder="입력오류 class error" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
            </div>
            <div class="c-inptype error">
              <label for="err1-4" class="c-label">Error</label>
              <div class="c-inp-el">
                <input type="text" name="err1-4" id="err1-4" placeholder="입력오류 class error" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
              <p class="feedback"><span>내용을 입력해주세요.</span></p>
            </div>
            <div class="c-inptype error vertical">
              <label for="err1-5" class="c-label">Error</label>
              <div class="c-inp-el">
                <input type="text" name="err1-5" id="err1-5" placeholder="입력오류 class error" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
              </div>
              <p class="feedback"><span>내용을 입력해주세요.</span></p>
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
        <h3 class="title_sub">prefix + suffix</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <div class="c-inptype">
              <label for="fix1-1" class="c-label">Prefix</label>
              <div class="c-inp-el">
                <i class="icon search" aria-hidden="true" />
                <input type="text" name="fix1-1" id="fix1-1" placeholder="입력하세요" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
                <i class="icon search" aria-hidden="true" />
              </div>
            </div>
            <div class="c-inptype">
              <label for="fix1-2" class="c-label">Prefix</label>
              <div class="c-inp-el">
                <span class="unit">text</span>
                <input type="text" name="fix1-2" id="fix1-2" placeholder="입력하세요" value="" class="c-inp" />
                <button type="button" class="clear-btn" aria-label="삭제" />
                <span class="unit">text</span>
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
import { setupInputFields } from '@/utils/fieldUtils.js'; // input, textarea 제어 유틸리티 호출

/* 반응형 변수 */
const pageTitle = ref("Input");
const pageType = ref(""); // 기본값 설정

/* 파일명 추출 함수 */
const getFileName = () => {
  const url = import.meta.url; // 현재 파일 URL 가져오기
  return url.split("/").pop()?.split(".").shift() || "default"; // 파일명 추출
};

const dateValue = ref('');
const timeValue = ref('');

const openCalendar = () => {
  alert('커스텀 달력 호출');
};
const openTime = (time) => {
  alert('커스텀 시간 호출');
};
// Initialize the component
onMounted(() => {
  pageType.value = getFileName(); // 파일명 추출 후 pageType에 저장
  document.title = pageTitle.value; // 초기에 document.title 설정

  // 입력 필드 유틸리티 호출
  setupInputFields('.c-inptype, .c-texttype');
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle; // pageTitle이 변경될 때마다 document.title 업데이트
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_button" as button;
@use "@/assets/scss/component/_input" as input;
</style>