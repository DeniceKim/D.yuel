<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Calendar</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경
      </div>
      
      <div class="table">
        <table>
          <caption>달력 테이블 class name 정의</caption>
          <colgroup>
            <col style="width:150px">
            <col>
          </colgroup>
          <tbody>
            <tr>
              <td>prev-month-btn</td>
              <td class="text-left">이전 월 선택 버튼</td>
            </tr>
            <tr>
              <td>next-month-btn</td>
              <td class="text-left">다음 월 선택 버튼</td>
            </tr>
            <tr>
              <td>today-btn</td>
              <td class="text-left">오늘 선택 버튼</td>
            </tr>
            <tr>
              <td>prev-month</td>
              <td class="text-left">이전 월 인경우 표시</td>
            </tr>
            <tr>
              <td>next-month</td>
              <td class="text-left">다음 월 인경우 표시</td>
            </tr>
            <tr>
              <td>is-holiday</td>
              <td class="text-left">공휴일 인경우 상태표시</td>
            </tr>
            <tr>
              <td>is-today</td>
              <td class="text-left">오늘 인경우 상태표시</td>
            </tr>
            <tr>
              <td>is-disabled</td>
              <td class="text-left">선택 불가 상태표시</td>
            </tr>
            <tr>
              <td>is-selected</td>
              <td class="text-left">선택한 경우 상태표시</td>
            </tr>
            <tr>
              <td>is-task</td>
              <td class="text-left">일정이 있는 경우 상태표시</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">Basic</h3>
        <div class="code_editor">
          <router-link to="/demo/calendar" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input">

            <div class="c-calendar">
              <div class="c-calendar-headers">
                <div class="c-calendar-title">
                  <strong class="is-today">2025년 1월 21일</strong>
                </div>
                <div class="c-calendar-nav">
                  <div role="group" class="c-cal-group">
                    <button type="button" class="prev-month-btn" aria-label="이전 월 선택"></button>
                    <button type="button" class="today-btn" aria-label="오늘 선택"></button>
                    <button type="button" class="next-month-btn" aria-label="다음 월 선택"></button>
                  </div>
                </div>
              </div>
              <div class="c-calendar-head" aria-hidden="true">
                <div class="c-cal-sun">일</div>
                <div class="c-cal-mon">월</div>
                <div class="c-cal-tue">화</div>
                <div class="c-cal-wed">수</div>
                <div class="c-cal-thu">목</div>
                <div class="c-cal-fri">금</div>
                <div class="c-cal-sat">토</div>
              </div>
              <div class="c-calendar-body">
                <div role="group" class="c-cal-cell c-cal-sun prev-month is-disabled" tabindex="0">
                  <div class="c-cal-day" aria-label="2024년 12월 29일 일요일">29</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-mon prev-month is-disabled" tabindex="0">
                  <div class="c-cal-day" aria-label="2024년 12월 30일 월요일">30</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-tue prev-month is-disabled" tabindex="0">
                  <div class="c-cal-day" aria-label="2024년 12월 31일 화요일">31</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-wed is-holiday" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 1일 수요일">1</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-thu" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 2일 목요일">2</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-fri" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 3일 금요일">3</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-sat" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 4일 토요일">4</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-sun" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 5일 일요일">5</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-mon" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 6일 월요일">6</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-tue" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 7일 화요일">7</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-wed" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 8일 수요일">8</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-thu" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 9일 목요일">9</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-fri" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 10일 금요일">10</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-sat" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 11일 토요일">11</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-sun" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 12일 일요일">12</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-mon" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 13일 월요일">13</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-tue is-task" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 14일 화요일">14</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-wed is-task" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 15일 수요일">15</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-thu is-task" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 16일 목요일">16</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-fri is-task" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 17일 금요일">17</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-sat" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 18일 토요일">18</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-sun" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 19일 일요일">19</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-mon" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 20일 월요일">20</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-tue is-today is-task" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 21일 화요일">21</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-wed is-selected" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 22일 수요일">22</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-thu" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 23일 목요일">23</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-fri" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 24일 금요일">24</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-sat" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 25일 토요일">25</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-sun" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 26일 일요일">26</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-mon" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 27일 월요일">27</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-tue is-holiday is-disabled" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 28일 화요일">28</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-wed is-holiday" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 29일 수요일">29</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-thu is-holiday" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 30일 목요일">30</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-fri is-task" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 1월 31일 금요일">31</div>
                </div>
                <div role="group" class="c-cal-cell c-cal-sat next-month is-disabled" tabindex="0">
                  <div class="c-cal-day" aria-label="2025년 2월 1일 토요일">1</div>
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
const pageTitle = ref("Calendar");
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
@use "@/assets/scss/component/_calendar" as calendar;
</style>