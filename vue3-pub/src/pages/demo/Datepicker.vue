<template>
  <main class="l-page" :data-page="pageType">
    <div role="group" class="group_field padding">
      <div class="c-inptype">
        <label for="customField1" class="c-label">날짜</label>
        <div class="c-inp-el">
          <input type="text" name="customField1" id="customField" placeholder="YYYY-MM-DD" class="c-inp" />
          <button type="button" class="c-btn c-icon" aria-label="날짜선택" @click="openModal('date')">
            <i class="icon calendar" aria-hidden="true" @click="openCalendar" />
          </button>
        </div>
      </div>
      <div class="c-inptype">
        <label for="customTime1" class="c-label">시간</label>
        <div class="c-inp-el">
          <input type="text" name="customTime1" id="customTime" placeholder="HH:MM" class="c-inp" />
          <button type="button" class="c-btn c-icon" aria-label="시간선택" @click="openModal('time')">
            <i class="icon time" aria-hidden="true" @click="openTime" />
          </button>
        </div>
      </div>
    </div>
    <!-- 날짜 선택 -->
    <teleport to="body">
      <div
        v-if="isDateModalOpen"
        id="optBottomDate"
        class="c-modal bottom"
        :class="{ 'is-show': isDateModalOpen }"
        role="dialog"
        aria-labelledby="dateModalTitle"
      >
        <c-dim :isDateModalOpen="isDateModalOpen" @click="closeModal('date')" />
        <div class="c-modal-inner">
          <div class="c-modal-header">
            <strong class="c-modal-title" id="dateModalTitle">날짜 선택</strong>
            <button type="button" class="c-modal-close-btn" aria-label="닫기" @click="closeModal('date')"></button>
          </div>
          <div class="c-modal-body">
            <div class="datepicker-group">
              <!-- 연도 -->
              <div class="datepicker">
                <swiper
                  ref="yearSwiper"
                  :modules="[Navigation, A11y]"
                  :slides-per-view="3"
                  :loop="false"
                  :centeredSlides="true"
                  direction="vertical"
                  :navigation="{
                    nextEl: '.year-next',
                    prevEl: '.year-prev',
                  }"
                  @slideChange="updateYearState"
                  class="year-swiper"
                >
                  <swiper-slide v-for="(year, index) in years" :key="index" tabindex="-1">
                    <!-- Input + Label 구조 -->
                    <input
                      type="radio"
                      :id="`input-year-${index}`"
                      name="radiogroup-year"
                      :checked="currentYearIndex === index"
                      @change="currentYearIndex = index"
                    />
                    <label
                      :for="`input-year-${index}`"
                      class="selection"
                      :aria-label="`${year}년`"
                    >
                      <span aria-hidden="true">
                        {{ year }}<span>년</span>
                      </span>
                    </label>
                  </swiper-slide>
                </swiper>
                <!-- 이전/다음 버튼 -->
                <div
                  role="button"
                  class="swiper-button-prev year-prev"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentYear}년, 이전 ${prevYear || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasPrevYear }"
                  @click="slideToPrev"
                >
                  <i class="ri-arrow-up-s-line" aria-hidden="true"></i>
                </div>
                <div
                  role="button"
                  class="swiper-button-next year-next"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentYear}년, 다음 ${nextYear || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasNextYear }"
                  @click="slideToNext"
                >
                  <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
                </div>
    
              </div>
    
              <!-- 월 -->
              <div class="datepicker">
                <swiper
                  ref="monthSwiper"
                  :modules="[Navigation, A11y]"
                  :slides-per-view="3"
                  :loop="false"
                  :centeredSlides="true"
                  direction="vertical"
                  :navigation="{
                    nextEl: '.month-next',
                    prevEl: '.month-prev',
                  }"
                  @slideChange="updateMonthState"
                  class="month-swiper"
                >
                  <swiper-slide v-for="(month, index) in months" :key="index" tabindex="-1">
                    <input
                      type="radio"
                      :id="`input-month-${index}`"
                      name="radiogroup-month"
                      :checked="currentMonthIndex === index"
                      @change="currentMonthIndex = index"
                    />
                    <label :for="`input-month-${index}`" class="selection" :aria-label="`${month}월`">
                      <span aria-hidden="true">{{ month }}<span>월</span></span>
                    </label>
                  </swiper-slide>
                </swiper>
                <div
                  role="button"
                  class="swiper-button-prev month-prev"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentMonth}월, 이전 ${prevMonth || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasPrevMonth }"
                  @click="slideToPrev"
                >
                  <i class="ri-arrow-up-s-line" aria-hidden="true"></i>
                </div>
                <div
                  role="button"
                  class="swiper-button-next month-next"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentMonth}월, 다음 ${nextMonth || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasNextMonth }"
                  @click="slideToNext"
                >
                  <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
                </div>
              </div>
    
              <!-- 일 -->
              <div class="datepicker">
                <swiper
                  ref="daySwiper"
                  :modules="[Navigation, A11y]"
                  :slides-per-view="3"
                  :loop="false"
                  :centeredSlides="true"
                  direction="vertical"
                  :navigation="{
                    nextEl: '.day-next',
                    prevEl: '.day-prev',
                  }"
                  @slideChange="updateDayState"
                  class="day-swiper"
                >
                  <swiper-slide v-for="(day, index) in days" :key="index" tabindex="-1">
                    <input
                      type="radio"
                      :id="`input-day-${index}`"
                      name="radiogroup-day"
                      :checked="currentDayIndex === index"
                      @change="currentDayIndex = index"
                    />
                    <label :for="`input-day-${index}`" class="selection" :aria-label="`${day}일`">
                      <span aria-hidden="true">{{ day }}<span>일</span></span>
                    </label>
                  </swiper-slide>
                </swiper>
                <div
                  role="button"
                  class="swiper-button-prev day-prev"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentDay}일, 이전 ${prevDay || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasPrevDay }"
                  @click="slideToPrev"
                >
                  <i class="ri-arrow-up-s-line" aria-hidden="true"></i>
                </div>
                <div
                  role="button"
                  class="swiper-button-next day-next"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentDay}일, 다음 ${nextDay || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasNextDay }"
                  @click="slideToNext"
                >
                  <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <!-- Footer -->
          <div class="c-modal-footer">
            <button
              type="submit"
              class="c-modal-btn confirm"
              @click="closeModal('date')"
            >
              <span>확인</span>
            </button>
          </div>
        </div>
      </div>
    </teleport>
  
    <!-- 시간 선택 -->
    <teleport to="body">
      <div
        v-if="isTimeModalOpen"
        id="optBottomTime"
        class="c-modal bottom"
        :class="{ 'is-show': isTimeModalOpen }"
        role="dialog"
        aria-labelledby="timeModalTitle"
      >
        <c-dim :isTimeModalOpen="isTimeModalOpen" @click="closeModal('time')" />
        <div class="c-modal-inner">
          <div class="c-modal-header">
            <strong class="c-modal-title" id="timeModalTitle">시간 선택</strong>
            <button type="button" class="c-modal-close-btn" aria-label="닫기" @click="closeModal('time')"></button>
          </div>
          <div class="c-modal-body">
            <div class="datepicker-group">
              <!-- 시 -->
              <div class="datepicker">
                <swiper
                  ref="hourSwiper"
                  :modules="[Navigation, A11y]"
                  :slides-per-view="3"
                  :loop="false"
                  :centeredSlides="true"
                  direction="vertical"
                  :navigation="{
                    nextEl: '.hour-next',
                    prevEl: '.hour-prev',
                  }"
                  @slideChange="updateHourState"
                  class="hour-swiper"
                >
                  <swiper-slide v-for="(hour, index) in hours" :key="index" tabindex="-1">
                    <!-- Input + Label 구조 -->
                    <input
                      type="radio"
                      :id="`input-hour-${index}`"
                      name="radiogroup-hour"
                      :checked="currentHourIndex === index"
                      @change="currentHourIndex = index"
                    />
                    <label
                      :for="`input-hour-${index}`"
                      class="selection"
                      :aria-label="`${hour}시`"
                    >
                      <span aria-hidden="true">
                        {{ hour }}<span>시</span>
                      </span>
                    </label>
                  </swiper-slide>
                </swiper>
                <!-- 이전/다음 버튼 -->
                <div
                  role="button"
                  class="swiper-button-prev hour-prev"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentHour}시, 이전 ${prevHour || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasPrevHour }"
                  @click="slideToPrev"
                >
                  <i class="ri-arrow-up-s-line" aria-hidden="true"></i>
                </div>
                <div
                  role="button"
                  class="swiper-button-next hour-next"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentHour}시, 다음 ${nextHour || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasNextHour }"
                  @click="slideToNext"
                >
                  <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
                </div>
    
              </div>
    
              <!-- 분 -->
              <div class="datepicker">
                <swiper
                  ref="minuteSwiper"
                  :modules="[Navigation, A11y]"
                  :slides-per-view="3"
                  :loop="false"
                  :centeredSlides="true"
                  direction="vertical"
                  :navigation="{
                    nextEl: '.minute-next',
                    prevEl: '.minute-prev',
                  }"
                  @slideChange="updateMinuteState"
                  class="minute-swiper"
                >
                  <swiper-slide v-for="(minute, index) in minutes" :key="index" tabindex="-1">
                    <input
                      type="radio"
                      :id="`input-minute-${index}`"
                      name="radiogroup-minute"
                      :checked="currentMinuteIndex === index"
                      @change="currentMinuteIndex = index"
                    />
                    <label :for="`input-minute-${index}`" class="selection" :aria-label="`${minute}분`">
                      <span aria-hidden="true">{{ minute }}<span>분</span></span>
                    </label>
                  </swiper-slide>
                </swiper>
                <div
                  role="button"
                  class="swiper-button-prev minute-prev"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentMinute}분, 이전 ${prevMinute || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasPrevMinute }"
                  @click="slideToPrev"
                >
                  <i class="ri-arrow-up-s-line" aria-hidden="true"></i>
                </div>
                <div
                  role="button"
                  class="swiper-button-next minute-next"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentMinute}분, 다음 ${nextMinute || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasNextMinute }"
                  @click="slideToNext"
                >
                  <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
                </div>
              </div>
    
              <!-- 초 -->
              <div class="datepicker">
                <swiper
                  ref="secondSwiper"
                  :modules="[Navigation, A11y]"
                  :slides-per-view="3"
                  :loop="false"
                  :centeredSlides="true"
                  direction="vertical"
                  :navigation="{
                    nextEl: '.second-next',
                    prevEl: '.second-prev',
                  }"
                  @slideChange="updateSecondState"
                  class="second-swiper"
                >
                  <swiper-slide v-for="(second, index) in seconds" :key="index" tabindex="-1">
                    <input
                      type="radio"
                      :id="`input-second-${index}`"
                      name="radiogroup-second"
                      :checked="currentSecondIndex === index"
                      @change="currentSecondIndex = index"
                    />
                    <label :for="`input-second-${index}`" class="selection" :aria-label="`${second}초`">
                      <span aria-hidden="true">{{ second }}<span>초</span></span>
                    </label>
                  </swiper-slide>
                </swiper>
                <div
                  role="button"
                  class="swiper-button-prev second-prev"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentSecond}초, 이전 ${prevSecond || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasPrevSecond }"
                  @click="slideToPrev"
                >
                  <i class="ri-arrow-up-s-line" aria-hidden="true"></i>
                </div>
                <div
                  role="button"
                  class="swiper-button-next second-next"
                  aria-live="assertive"
                  tabindex="0"
                  :aria-label="`현재 선택 ${currentSecond}초, 다음 ${nextSecond || '선택 없음'}`"
                  :class="{ 'swiper-button-disabled': !hasNextSecond }"
                  @click="slideToNext"
                >
                  <i class="ri-arrow-down-s-line" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <!-- Footer -->
          <div class="c-modal-footer">
            <button
              type="submit"
              class="c-modal-btn confirm"
              @click="closeModal('time')"
            >
              <span>확인</span>
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </main>

</template>

<script setup>
import { ref, onMounted, watch, computed, nextTick, watchEffect } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import CDim from "@/components/base/CDim.vue"; // 공통 컴포넌트 import
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, A11y } from "swiper";
import "swiper/swiper-bundle.css";

const pageTitle = ref("Datepicker Demo");
const pageType = ref(""); // 기본값 설정
const { setHeaderOptions } = useHeaderOptions();

const isDateModalOpen = ref(false);
const isTimeModalOpen = ref(false);
const lastFocusedElement = ref(null); // 마지막 초점 요소 저장

const years = [2025, 2024, 2023, 2022];
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const hours = Array.from({ length: 24 }, (_, i) => i + 1); // 1부터 24까지
const minutes = Array.from({ length: 60 }, (_, i) => i + 1); // 1부터 60까지
const seconds = Array.from({ length: 60 }, (_, i) => i + 1); // 1부터 60까지


const currentYearIndex = ref(0);
const currentMonthIndex = ref(0);
const currentDayIndex = ref(0);

const currentHourIndex = ref(0);
const currentMinuteIndex = ref(0);
const currentSecondIndex = ref(0);

// 현재 연도 상태 계산
const currentYear = computed(() => years[currentYearIndex.value]);
const prevYear = computed(() => years[currentYearIndex.value - 1] || null);
const nextYear = computed(() => years[currentYearIndex.value + 1] || null);
const hasPrevYear = computed(() => currentYearIndex.value > 0);
const hasNextYear = computed(() => currentYearIndex.value < years.length - 1);

// 현재 월 상태 계산
const currentMonth = computed(() => months[currentMonthIndex.value]);
const prevMonth = computed(() => months[currentMonthIndex.value - 1] || null);
const nextMonth = computed(() => months[currentMonthIndex.value + 1] || null);
const hasPrevMonth = computed(() => currentMonthIndex.value > 0);
const hasNextMonth = computed(() => currentMonthIndex.value < months.length - 1);

// 현재 일 상태 계산
const currentDay = computed(() => days[currentDayIndex.value]);
const prevDay = computed(() => days[currentDayIndex.value - 1] || null);
const nextDay = computed(() => days[currentDayIndex.value + 1] || null);
const hasPrevDay = computed(() => currentDayIndex.value > 0);
const hasNextDay = computed(() => currentDayIndex.value < days.length - 1);

// 현재 시간 상태 계산 (1시부터 24시까지)
const currentHour = computed(() => hours[currentHourIndex.value]);
const prevHour = computed(() =>
  currentHourIndex.value > 0 ? hours[currentHourIndex.value - 1] : null
);
const nextHour = computed(() =>
  currentHourIndex.value < hours.length - 1 ? hours[currentHourIndex.value + 1] : null
);
const hasPrevHour = computed(() => currentHourIndex.value > 0);
const hasNextHour = computed(() => currentHourIndex.value < hours.length - 1);

// 현재 분 상태 계산 (1분부터 60분까지)
const currentMinute = computed(() => minutes[currentMinuteIndex.value]);
const prevMinute = computed(() =>
  currentMinuteIndex.value > 0 ? minutes[currentMinuteIndex.value - 1] : null
);
const nextMinute = computed(() =>
  currentMinuteIndex.value < minutes.length - 1 ? minutes[currentMinuteIndex.value + 1] : null
);
const hasPrevMinute = computed(() => currentMinuteIndex.value > 0);
const hasNextMinute = computed(() => currentMinuteIndex.value < minutes.length - 1);

// 현재 초 상태 계산 (1초부터 60초까지)
const currentSecond = computed(() => seconds[currentSecondIndex.value]);
const prevSecond = computed(() =>
  currentSecondIndex.value > 0 ? seconds[currentSecondIndex.value - 1] : null
);
const nextSecond = computed(() =>
  currentSecondIndex.value < seconds.length - 1 ? seconds[currentSecondIndex.value + 1] : null
);
const hasPrevSecond = computed(() => currentSecondIndex.value > 0);
const hasNextSecond = computed(() => currentSecondIndex.value < seconds.length - 1);


// Swiper 상태 업데이트
const updateYearState = (swiper) => {
  currentYearIndex.value = swiper.realIndex;
};
const updateMonthState = (swiper) => {
  currentMonthIndex.value = swiper.realIndex;
};
const updateDayState = (swiper) => {
  currentDayIndex.value = swiper.realIndex;
};
const updateHourState = (swiper) => {
  currentHourIndex.value = swiper.realIndex;
};
const updateMinuteState = (swiper) => {
  currentMinuteIndex.value = swiper.realIndex;
};
const updateSecondState = (swiper) => {
  currentSecondIndex.value = swiper.realIndex;
};

// 공통 함수: 모달 열기
const openModal = async (type) => {
  lastFocusedElement.value = document.activeElement; // 현재 초점 요소 저장

  if (type === "date") isDateModalOpen.value = true;
  if (type === "time") isTimeModalOpen.value = true;

  document.body.classList.add("is-lock"); // body에 클래스 추가
  const app = document.querySelector(".l-wrap");
  app?.setAttribute("inert", ""); // inert 속성 추가

  await nextTick();
  // 모달 타이틀에 초점 이동
  const modalTitle = document.getElementById(type === "date" ? "dateModalTitle" : "timeModalTitle");
  modalTitle?.focus();
};

// 공통 함수: 모달 닫기
const closeModal = (type) => {
  if (type === "date") isDateModalOpen.value = false;
  if (type === "time") isTimeModalOpen.value = false;

  document.body.classList.remove("is-lock"); // body 클래스 제거
  const app = document.querySelector(".l-wrap");
  app?.removeAttribute("inert");
  app?.removeAttribute("aria-hidden");

  // 이전 초점 복원
  lastFocusedElement.value?.focus();
};

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

// watchEffect: inert 처리 보장
watchEffect(() => {
  const app = document.querySelector(".l-wrap");
  const isModalOpen = isDateModalOpen.value || isTimeModalOpen.value;

  if (app) {
    if (isModalOpen) {
      app.setAttribute("inert", "");
    } else {
      app.removeAttribute("inert");
    }
  }
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle; // pageTitle이 변경될 때마다 document.title 업데이트
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_input" as input;
@use "@/assets/scss/component/_swiper" as swiper;
@use "@/assets/scss/component/_modal" as modal;
</style>
