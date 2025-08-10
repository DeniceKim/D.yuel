<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">{{ pageTitle }}</h2>
      
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
        <div class="group_radio">
          <div class="c-radiotype button half">
            <input type="radio" name="radBox" id="radBox1" class="c-radio" />
            <label for="radBox1" class="c-label" aria-label="주간">
              <i class="icon" aria-hidden="true" />
            </label>
          </div>
          <div class="c-radiotype button half">
            <input type="radio" name="radBox" id="radBox2" class="c-radio" checked />
            <label for="radBox2" class="c-label" aria-label="월간">
              <i class="icon" aria-hidden="true" />
            </label>
          </div>
        </div>
        <div class="c-calendar">
          <div class="c-calendar-headers">
            <div class="c-calendar-title">
              <strong :class="{ 'is-today': currentMonth.isSame(dayjs(), 'month') }">
                {{ currentMonth.format('YYYY년 M월') }}
              </strong>
            </div>
            <div class="c-calendar-nav">
              <div role="group" class="c-cal-group">
                <button type="button" class="prev-month-btn" @click="changeMonth(-1)" aria-label="이전 월 선택"></button>
                <button type="button" class="today-btn" @click="goToToday" aria-label="오늘 선택"></button>
                <button type="button" class="next-month-btn" @click="changeMonth(1)" aria-label="다음 월 선택"></button>
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
            <div
              v-for="day in calendarDays"
              :key="day.date"
              :class="[
                'c-cal-cell',
                day.weekdayClass,
                day.additionalClass,
                { 'is-today': day.isToday, 'is-selected': day.isSelected, 'is-disabled': day.isDisabled, 'is-task': day.isTask }
              ]"
              role="group"
              tabindex="0"
              @click="selectDate(day)"
            >
              <div class="c-cal-day" :aria-label="day.ariaLabel">{{ day.date.date() }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- //.cbody -->
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한글 로케일 추가

/* 반응형 변수 */
const pageTitle = ref("Calendar Demo");
const pageType = ref(""); // 기본값 설정
const { setHeaderOptions } = useHeaderOptions();

/* Start : 달력 기능 */
// dayjs의 로케일을 한글로 설정
dayjs.locale('ko');

// 현재 월 및 선택된 날짜 상태
const currentMonth = ref(dayjs());
const selectedDate = ref(null);

/**
 * 달력 데이터를 생성하는 함수
 * @param {object} month - 기준 월 (dayjs 객체)
 */
const generateCalendar = (month) => {
  const days = [];
  const startOfMonth = dayjs(month).startOf('month'); // 현재 월의 첫날
  const endOfMonth = dayjs(month).endOf('month'); // 현재 월의 마지막 날

  // 이전 달의 날짜 추가
  const startDayOfWeek = startOfMonth.day();
  for (let i = startDayOfWeek; i > 0; i--) {
    const prevDate = startOfMonth.subtract(i, 'day');
    days.push({
      date: prevDate,
      isToday: prevDate.isSame(dayjs(), 'day'),
      isSelected: prevDate.isSame(selectedDate.value, 'day'), // 선택 상태 추가
      isDisabled: true,
      weekdayClass: `c-cal-${['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][prevDate.day()]}`,
      additionalClass: 'prev-month',
      ariaLabel: `${prevDate.format('YYYY년 M월 D일 dddd')}`,
      isTask: false,
    });
  }

  // 현재 월의 날짜 추가
  let currentDate = startOfMonth;
  while (currentDate.isBefore(endOfMonth, 'day') || currentDate.isSame(endOfMonth, 'day')) {
    days.push({
      date: currentDate,
      isToday: currentDate.isSame(dayjs(), 'day'),
      isSelected: currentDate.isSame(selectedDate.value, 'day'), // 선택 상태 추가
      isDisabled: false,
      weekdayClass: `c-cal-${['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][currentDate.day()]}`,
      additionalClass: '',
      ariaLabel: `${currentDate.format('YYYY년 M월 D일 dddd')}`,
      isTask: currentDate.date() % 3 === 0,
    });
    currentDate = currentDate.add(1, 'day');
  }

  // 다음 달의 날짜 추가
  const endDayOfWeek = endOfMonth.day();
  for (let i = 1; i < 7 - endDayOfWeek; i++) {
    const nextDate = endOfMonth.add(i, 'day');
    days.push({
      date: nextDate,
      isToday: nextDate.isSame(dayjs(), 'day'),
      isSelected: nextDate.isSame(selectedDate.value, 'day'), // 선택 상태 추가
      isDisabled: true,
      weekdayClass: `c-cal-${['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][nextDate.day()]}`,
      additionalClass: 'next-month',
      ariaLabel: `${nextDate.format('YYYY년 M월 D일 dddd')}`,
      isTask: false,
    });
  }

  return days;
};

// 초기 달력 데이터 생성
const calendarDays = ref(generateCalendar(currentMonth.value));

/**
 * 이전/다음 월 이동
 * @param {number} direction - 이동 방향 (-1: 이전 월, 1: 다음 월)
 */
const changeMonth = (direction) => {
  currentMonth.value = currentMonth.value.add(direction, 'month');
  calendarDays.value = generateCalendar(currentMonth.value);
};

/**
 * 오늘 날짜로 이동
 */
const goToToday = () => {
  currentMonth.value = dayjs();
  selectedDate.value = dayjs();
  calendarDays.value = generateCalendar(currentMonth.value);
};

/**
 * 날짜 선택
 * @param {object} day - 선택한 날짜 객체
 */
const selectDate = (day) => {
  if (day.isDisabled) return; // 비활성화된 날짜는 선택 불가
  selectedDate.value = day.date; // 선택한 날짜 업데이트
  calendarDays.value = generateCalendar(currentMonth.value); // 선택 상태 반영
};
/* End : 달력 기능 */

// Initialize the component
onMounted(() => {
  pageType.value = import.meta.url.split("/").pop()?.split(".").shift() || "default";
  document.title = pageTitle.value;
  
  // 페이지 로드 시 Header 옵션 설정
  setHeaderOptions({
    title: pageTitle.value,      // 기본 타이틀
    logoType: "text",          // text, image, both
    showBackButton: true,      // 뒤로가기 버튼 표시 여부
    showUtil: true,            // 유틸 버튼 표시 여부
    hasNotification: false,    // 공지 버튼 표시 여부
    hasNotificationDot: false, // 공지 알림 여부
    isCenterTitle: false,      // 타이틀 가운데 정렬 여부
  });
});

onUnmounted(() => {
  unlockBody(); // 컴포넌트 언마운트 시 body 클래스 제거
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle; // pageTitle이 변경될 때마다 document.title 업데이트
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_calendar" as calendar;
@use "@/assets/scss/component/_radio" as radio;
</style>