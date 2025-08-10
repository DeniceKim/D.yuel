<template>
  <main class="l-page" :data-page="pageType">
    <!-- 기본 탭바 -->
    <CTabbar
      :ctabs="ctabs"
      defaultSelected="home"
      :isFixedBottom="true"
      @select="onTabSelect"
    />
    <!-- 그룹 탭바 -->
    <!-- <CTabbar
      :ctabs="ctabs"
      :groups="ctabGroups"
      defaultSelected="home"
      :isFixedBottom="true"
      :isCenter="true"
      @select="onTabSelect"
    /> -->
    <!-- 탭 콘텐츠 -->
    <div v-if="selectedTab === 'home'" class="cbody" id="homePanel">
      <section>
        <div class="c-swiper" ref="swiperModal">
          <Swiper
            v-if="slidesContent.length > 1"
            :modules="[Navigation, Pagination, Autoplay, A11y]"
            navigation
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            loop
            a11y
            class="swiper-container"
            @swiper="initializeSwiper"
          >
            <SwiperSlide v-for="(slide, index) in slidesContent" :key="index">
              <div class="c-card">
                <div class="c-card-img">
                  <div class="c-img">
                    <img :src="slide.image" :alt="slide.alt" />
                  </div>
                </div>
                <div class="c-card-inner">
                  <div class="c-card-header">
                    <strong class="c-card-title">{{ slide.title }}</strong>
                  </div>
                  <div class="c-card-body" v-html="slide.html"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div v-else class="single-slide">
            <div class="c-card">
              <div class="c-card-img">
                <div class="c-img">
                  <img :src="slidesContent[0].image" :alt="slidesContent[0].alt" />
                </div>
              </div>
              <div class="c-card-inner">
                <div class="c-card-header">
                  <strong class="c-card-title">{{ slidesContent[0].title }}</strong>
                </div>
                <div class="c-card-body" v-html="slidesContent[0].html"></div>
              </div>
            </div>
          </div>
          <button
            type="button"
            :class="isAutoplay ? 'swiper-stop' : 'swiper-play'"
            v-if="slidesContent.length > 1"
            @click="toggleAutoplay"
          >
            <span class="text">{{ isAutoplay ? 'Stop' : 'Play' }}</span>
          </button>
        </div>
      </section>
      <section>
        <article>
          <div class="c-card horiz">
            <div class="c-card-img">
              <div class="c-img">
                <img src="https://picsum.photos/400/400/?image=20" alt="">
              </div>
            </div>
            <div class="c-card-inner">
              <div class="c-card-header">
                <strong class="c-card-title">Title</strong>
              </div>
              <div class="c-card-body">
                card body area<br>
                카드 Contents 영역
              </div>
            </div>
          </div>
        </article>
        <article>
          <div class="c-card horiz">
            <div class="c-card-img">
              <div class="c-img">
                <img src="https://picsum.photos/400/400/?image=20" alt="">
              </div>
            </div>
            <div class="c-card-inner">
              <div class="c-card-header">
                <strong class="c-card-title">Title</strong>
              </div>
              <div class="c-card-body">
                card body area<br>
                카드 Contents 영역
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>

    <div v-if="selectedTab === 'menu1'" class="cbody" id="menu1Panel">
      <section>
        Menu1 본문
      </section>
    </div>

    <div v-if="selectedTab === 'menu2'" class="cbody" id="menu2Panel">
      <section>
        Menu2 본문
      </section>
    </div>

    <div v-if="selectedTab === 'menu3'" class="cbody" id="menu3Panel">
      <section>
        Menu3 본문
      </section>
    </div>

    <div v-if="selectedTab === 'menu4'" class="cbody" id="menu4Panel">
      <section>
        Menu4 본문
      </section>
    </div>

    
    <teleport to="body">
      <div
        v-if="activeModal === 'bottom'"
        :class="['c-modal bottom', { 'is-show': isModalVisible }]"
      >
        <c-dim :isVisible="isModalVisible" @close="closeModal" />
        <div class="c-modal-inner">
          <div class="c-modal-header">
            <strong class="c-modal-title">타이틀</strong>
            <button type="button" class="c-modal-close-btn" aria-label="닫기" @click="closeModal"></button>
          </div>
          <div class="c-modal-body">
            <div class="c-swiper">
              <Swiper
                v-if="slidesContent1.length > 1"
                :modules="[Navigation, Pagination, A11y]"
                navigation
                :pagination="{ clickable: true }"
                :loop="true"
                :a11y="true"
                class="swiper-container"
              >
                <SwiperSlide v-for="(slide, index) in slidesContent1" :key="index">
                  <div class="c-card">
                    <div class="c-card-inner">
                      <div class="c-card-header">
                        <strong class="c-card-title">{{ slide.title }}</strong>
                      </div>
                      <div class="c-card-body">
                        {{ slide.content }}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div v-else class="single-slide">
                <div class="c-card">
                  <div class="c-card-inner">
                    <div class="c-card-header">
                      <strong class="c-card-title">{{ slidesContent1[0].title }}</strong>
                    </div>
                    <div class="c-card-body">
                      {{ slidesContent1[0].content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="c-modal-footer">
            <div class="c-checktype">
              <input type="checkbox" name="chkBox" id="chkBox2" class="c-check" />
              <label for="chkBox2" class="c-label" aria-label="오늘 하루 보지 않기">
                <i class="icon" aria-hidden="true" />
              </label>
            </div>
            <button type="button" class="c-modal-btn close" @click="closeModal">
              <span class="text">닫기</span>
            </button>
          </div>
        </div>
      </div>
    </teleport>
    <teleport to="body">
      <div class="c-toast bottom" :class="{ 'is-show': isToastVisible }">
        <div class="c-toast-inner">
          <span class="text">메인 페이지에 접속하셨습니다.</span>
          <button
            type="button"
            class="toast-btn"
            aria-label="닫기"
            @click="closeToast"
          ></button>
        </div>
      </div>
    </teleport>
  </main>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import CTabbar from "@/components/layout/CTabbar.vue";

import CDim from "@/components/base/CDim.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/swiper-bundle.css";

const pageTitle = ref("건강의 신");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

// 기본 데이터
const ctabs = [
  { key: "home", label: "홈", icon: "home", controls: "homePanel" },
  { key: "menu1", label: "메뉴1", icon: "hospital", controls: "menu1Panel" },
  { key: "menu2", label: "메뉴2", icon: "heart", controls: "menu2Panel" },
  { key: "menu3", label: "메뉴3", icon: "set", controls: "menu3Panel" },
  { key: "menu4", label: "메뉴4", icon: "user", controls: "menu4Panel" },
];

// 그룹인 경우 데이터
/* const ctabs = [
  { key: "home", label: "홈", icon: "home", controls: "homePanel" },
];
const ctabGroups = [
  {
    id: "group1",
    ctabs: [
      { key: "menu1", label: "메뉴1", icon: "hospital", controls: "menu1Panel" },
      { key: "menu2", label: "메뉴2", icon: "heart", controls: "menu2Panel" },
    ],
  },
  {
    id: "group2",
    ctabs: [
      { key: "menu3", label: "메뉴3", icon: "set", controls: "menu3Panel" },
      { key: "menu4", label: "메뉴4", icon: "user", controls: "menu4Panel" },
    ],
  },
]; */

const selectedTab = ref("home");
const onTabSelect = (key) => {
  selectedTab.value = key;
  console.log(`선택된 탭: ${key}`);
};


// Swiper 슬라이드 데이터
const slidesContent = [
  {
    title: "Slide 1",
    image: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
    alt: "Slide 1",
    html: "<p>Content for Slide 1</p>",
  },
  {
    title: "Slide 2",
    image: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
    alt: "Slide 2",
    html: "<p>Content for Slide 2</p>",
  },
];

// Swiper 상태 관리
const swiper = ref(null);
const isAutoplay = ref(true);

// Swiper 초기화 함수
const initializeSwiper = (instance) => {
  swiper.value = instance;
};

// Autoplay 토글 함수
const toggleAutoplay = () => {
  if (swiper.value?.autoplay) {
    if (isAutoplay.value) {
      swiper.value.autoplay.stop();
    } else {
      swiper.value.autoplay.start();
    }
    isAutoplay.value = !isAutoplay.value;
  }
};

// 모달이 열릴 때 Swiper 초기화 강제 실행
const initializeSwiperOnModalOpen = async () => {
  await nextTick(); // DOM 렌더링 이후 실행 보장
  if (swiper.value) {
    swiper.value.update(); // Swiper 강제 업데이트
  }
};

// body에 is-lock 클래스 추가
const lockBody = () => {
  document.body.classList.add('is-lock');
};

// body에서 is-lock 클래스 제거
const unlockBody = () => {
  document.body.classList.remove('is-lock');
};

const activeModal = ref(null); // 현재 활성화된 모달 상태 
const isModalVisible = ref(false); // 현재 활성화된 모달의 가시성 상태
// 모달 열기 함수
const openModal = (modalType) => {
  activeModal.value = modalType; // 활성화할 모달 설정
  isModalVisible.value = true; // 모달 가시성 활성화
  lockBody(); // body 클래스 추가
};

// 모달 닫기 함수
const closeModal = () => {
  isModalVisible.value = false; // 모달 가시성 해제
  activeModal.value = null; // 활성화된 모달 해제
  unlockBody(); // body 클래스 제거
}; 
const slidesContent1 = [
  { title: "Title 1", content: "Content for slide 1" },
  { title: "Title 2", content: "Content for slide 2" },
];

// 토스트 표시 상태 관리
const isToastVisible = ref(false);

// 토스트 닫기 함수
const closeToast = () => {
  isToastVisible.value = false; // `is-show` 클래스 제거
};

onMounted(() => {
  pageType.value = import.meta.url.split("/").pop()?.split(".").shift() || "default";
  document.title = pageTitle.value;
  
  // 페이지 로드 시 Header 옵션 설정
  setHeaderOptions({
    title: "",                  // 기본 타이틀
    logoType: "image",          // text, image, both
    showBackButton: false,      // 뒤로가기 버튼 표시 여부
    showUtil: true,             // 유틸 버튼 표시 여부
    hasNotification: true,      // 공지 버튼 표시 여부
    hasNotificationDot: false,  // 공지 알림 여부
    isCenterTitle: false,       // 타이틀 가운데 정렬 여부
  });

  openModal("bottom"); // 하단 모달 자동 호출
  initializeSwiperOnModalOpen(); // 모달 열릴 때 Swiper 초기화

  isToastVisible.value = true; // `is-show` 클래스 추가
  // 5초 후 자동으로 `is-show` 클래스 제거
  setTimeout(() => {
    isToastVisible.value = false;
  }, 5000);
});

watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_button" as button;
@use "@/assets/scss/component/_checkbox" as checkbox;
@use "@/assets/scss/component/_swiper" as swiper;
@use "@/assets/scss/component/_card" as card;
@use "@/assets/scss/component/_modal" as modal;
@use "@/assets/scss/component/_toast" as toast;
</style>