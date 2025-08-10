<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Progress</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
            
      <section>
        <h3 class="title_sub">Custom Type</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-progress">
              <div class="c-progress-text">진행률</div>
              <div class="c-progress-inner">
                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" aria-label="80%" class="c-progress-rail" style="width: 80%;" />
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
        <h3 class="title_sub">시스템 타입 progress</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-progress">
              <div class="c-progress-text">진행률</div>
              <label class="c-progress-label" aria-label="80%" style="--c-progress:80%">
                <progress max="100" value="80"></progress>
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
        <h3 class="title_sub">semi 타입</h3>
        <div class="code_editor">
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">
            <ul class="list fs-14">
              <li>semi type 기본 설명</li>
              <li>--semi-value: ${semiValue}; = 설정 값
                <p>0=0%, 75/2(37.5)=50%, 75=100%</p>
              </li>
              <li>계산식 : (((달성 값 / 목표 값) * 100) * 75) / 100 - css 변수 처리</li>
              <li>호출 : --semi-current : 달성 값, --semi-goal: 목표 값 설정</li>
            </ul>
            <!-- <div class="c-progress semi" :style="`--semi-current:${currentValue};--semi-goal:${goalValue};--semi-value:calc((((${currentValue} / ${goalValue}) * 100) * 75) / 100)`"> -->
            <div class="c-progress semi" :style="`--semi-current:${currentValue};--semi-goal:${goalValue};`">
              <svg class="c-semi-circle" viewBox="0 0 35 35" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle class="c-semi-rail" />
                <circle class="c-semi-fill" />
              </svg>
              
              <div class="c-value">
                <strong class="c-value-text">{{ formattedValue }}</strong>
                <div class="c-icon-walk"></div>
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
import { ref, onMounted, computed, watch } from 'vue';

/* 반응형 변수 */
const pageTitle = ref("Progress");
const pageType = ref(""); // 기본값 설정

/* 파일명 추출 함수 */
const getFileName = () => {
  const url = import.meta.url; // 현재 파일 URL 가져오기
  return url.split("/").pop()?.split(".").shift() || "default"; // 파일명 추출
};

/* Start : circle */
const currentValue = ref(0); // 현재 값 초기
const displayedValue = ref(0); // 숮자 표시될 값
const targetValue = 5000; // 목표 값
const goalValue = 10000; // 목표 값

// 콤마 구분을 위한 계산된 값
const formattedValue = computed(() => {
  return displayedValue.value.toLocaleString(); // 3자리마다 콤마 추가
});

// 카운트 업 함수
const countUp = (start, end, duration = 1000) => {
  const startTime = performance.now(); // 시작 시간 기록

  const animate = (currentTime) => {
    const elapsedTime = currentTime - startTime; // 경과 시간
    const progress = Math.min(elapsedTime / duration, 1); // 진행률 (0 ~ 1)

    // `easeOutExpo` 적용하여 부드러운 증가 효과
    const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

    displayedValue.value = Math.round(start + (end - start) * easedProgress);
    displayedValue.value; // 반응형 업데이트

    if (progress < 1) {
      requestAnimationFrame(animate); // 다음 프레임 호출
    } else {
      displayedValue.value = end;
    }
  };

  requestAnimationFrame(animate);
};
/* End : circle */

// Initialize the component
onMounted(() => {
  pageType.value = getFileName(); // 파일명 추출 후 pageType에 저장
  document.title = pageTitle.value; // 초기에 document.title 설정

  setTimeout(() => {
    currentValue.value = targetValue;
    countUp(0, targetValue, 1500); // 숫자 1.5초 동안 0 → targetValue (5000)로 증가
  }, 500);
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle; // pageTitle이 변경될 때마다 document.title 업데이트
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_progress" as progress;
</style>