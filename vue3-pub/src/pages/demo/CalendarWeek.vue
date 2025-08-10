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
              <td>prev-week-btn</td>
              <td class="text-left">이전 주 선택 버튼</td>
            </tr>
            <tr>
              <td>next-week-btn</td>
              <td class="text-left">다음 주 선택 버튼</td>
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
            <input type="radio" name="radBox" id="radBox1" class="c-radio" v-model="weekMode" :value="true" />
            <label for="radBox1" class="c-label" aria-label="주간">
              <i class="icon" aria-hidden="true" />
            </label>
          </div>
          <div class="c-radiotype button half">
            <input type="radio" name="radBox" id="radBox2" class="c-radio" v-model="weekMode" :value="false" />
            <label for="radBox2" class="c-label" aria-label="월간">
              <i class="icon" aria-hidden="true" />
            </label>
          </div>
        </div>

        <div class="c-calendar" :class="weekMode ? 'week' : ''">
          <div class="c-calendar-headers">
            <div class="c-calendar-title">
              <strong :class="{ 'is-today': isCurrentViewToday }">
                {{ currentViewTitle }}
              </strong>
            </div>
            <div class="c-calendar-nav">
              <div role="group" class="c-cal-group">
                <button
                  type="button"
                  :class="weekMode ? 'prev-week-btn' : 'prev-month-btn'"
                  @click="changeView(-1)"
                  :aria-label="weekMode ? '이전 주 선택' : '이전 월 선택'"
                ></button>
                <button type="button" class="today-btn" @click="goToToday" aria-label="오늘 선택"></button>
                <button
                  type="button"
                  :class="weekMode ? 'next-week-btn' : 'next-month-btn'"
                  @click="changeView(1)"
                  :aria-label="weekMode ? '다음 주 선택' : '다음 월 선택'"
                ></button>
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
              v-for="day in currentViewDays"
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
import { ref, onMounted, onUnmounted, watch, computed, defineExpose } from 'vue';
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

const pageTitle = ref("Calendar Week Demo");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

const weekMode = ref(false); // true: 주간, false: 월간
const currentDate = ref(dayjs());
const selectedDate = ref(null); // 선택된 날짜 초기화

/**
 * 날짜 선택 함수
 * @param {Object} day - 선택한 날짜 객체
 */
const selectDate = (day) => {
  if (day.isDisabled) return; // 비활성화된 날짜는 선택 불가
  selectedDate.value = day.date; // 선택한 날짜 업데이트
  currentViewDays.value = weekMode.value ? generateWeek(currentDate.value) : generateCalendar(currentDate.value);
};

/**
 * `selectDate`를 외부에서 접근 가능하도록 설정
 */
defineExpose({ selectDate });

/**
 * 주간 데이터 생성
 */
const generateWeek = (date) => {
  const startOfWeek = date.startOf('week');
  return Array.from({ length: 7 }, (_, i) => {
    const day = startOfWeek.add(i, 'day');
    return {
      date: day,
      isToday: day.isSame(dayjs(), 'day'),
      isSelected: day.isSame(selectedDate.value, 'day'),
      isDisabled: false,
      weekdayClass: `c-cal-${['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][day.day()]}`,
      additionalClass: '',
      ariaLabel: `${day.format('YYYY년 M월 D일 dddd')}`,
      isTask: day.date() % 3 === 0,
    };
  });
};

/**
 * 월간 데이터 생성
 */
const generateCalendar = (month) => {
  const days = [];
  const startOfMonth = month.startOf('month');
  const endOfMonth = month.endOf('month');

  // 이전 달의 날짜 추가
  const startDayOfWeek = startOfMonth.day();
  for (let i = startDayOfWeek; i > 0; i--) {
    const prevDate = startOfMonth.subtract(i, 'day');
    days.push({
      date: prevDate,
      isToday: prevDate.isSame(dayjs(), 'day'),
      isSelected: prevDate.isSame(selectedDate.value, 'day'),
      isDisabled: true,
      weekdayClass: `c-cal-${['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][prevDate.day()]}`,
      additionalClass: 'prev-month',
      ariaLabel: `${prevDate.format('YYYY년 M월 D일 dddd')}`,
      isTask: false,
    });
  }

  // 현재 달의 날짜 추가
  let currentDate = startOfMonth;
  while (currentDate.isBefore(endOfMonth, 'day') || currentDate.isSame(endOfMonth, 'day')) {
    days.push({
      date: currentDate,
      isToday: currentDate.isSame(dayjs(), 'day'),
      isSelected: currentDate.isSame(selectedDate.value, 'day'),
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
  for (let i = 1; i <= (6 - endDayOfWeek); i++) {
    const nextDate = endOfMonth.add(i, 'day');
    days.push({
      date: nextDate,
      isToday: nextDate.isSame(dayjs(), 'day'),
      isSelected: nextDate.isSame(selectedDate.value, 'day'),
      isDisabled: true,
      weekdayClass: `c-cal-${['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][nextDate.day()]}`,
      additionalClass: 'next-month',
      ariaLabel: `${nextDate.format('YYYY년 M월 D일 dddd')}`,
      isTask: nextDate.date() % 3 === 0,
    });
  }

  return days;
};

// 주간/월간 데이터
const currentViewDays = ref(weekMode.value ? generateWeek(currentDate.value) : generateCalendar(currentDate.value));

/**
 * 현재 보이는 주 또는 월이 오늘을 포함하는지 확인하는 computed 속성
 */
const isCurrentViewToday = computed(() => {
  return currentViewDays.value.some((day) => day.isToday);
});

/**
 * 현재 주간 또는 월간의 제목을 반환하는 computed 속성
 */
const currentViewTitle = computed(() => {
  return weekMode.value
    ? `주간 (${currentDate.value.startOf('week').format('M월 D일')} ~ ${currentDate.value.endOf('week').format('D일')})`
    : `${currentDate.value.format('YYYY년 M월')}`;
});

/**
 * 주간/월간 이동
 */
const changeView = (direction) => {
  currentDate.value = weekMode.value
    ? currentDate.value.add(direction, 'week')
    : currentDate.value.add(direction, 'month');
};

/**
 * 오늘 날짜로 이동
 */
const goToToday = () => {
  currentDate.value = dayjs();
};

/**
 * `currentDate` 또는 `weekMode` 변경 시 `currentViewDays` 업데이트
 */
watch([currentDate, weekMode], () => {
  currentViewDays.value = weekMode.value ? generateWeek(currentDate.value) : generateCalendar(currentDate.value);
});

// Initialize the component
onMounted(() => {
  pageType.value = import.meta.url.split("/").pop()?.split(".").shift() || "default";
  document.title = pageTitle.value;
  
  // 페이지 로드 시 Header 옵션 설정
  setHeaderOptions({
    title: pageTitle.value,
    logoType: "text",
    showBackButton: true,
    showUtil: true,
    hasNotification: false,
    hasNotificationDot: false,
    isCenterTitle: false,
  });
});

onUnmounted(() => {
  unlockBody();
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_calendar" as calendar;
@use "@/assets/scss/component/_radio" as radio;
</style>