<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">{{ pageTitle }}</h2>
    </div>
    <!-- //.chead -->

    <div class="cbody">
      <section>
        <div class="group_button column gap">
          <button type="button" class="c-btn" @click="openModal('center')">중앙에서 열기</button>
          <button type="button" class="c-btn" @click="openModal('bottom')">하단에서 열기</button>
          <button type="button" class="c-btn" @click="openModal('alert')">Alert 열기</button>
          <button type="button" class="c-btn" @click="openModal('fullscreen')">전체화면 열기</button>
          <button type="button" class="c-btn" @click="openModal('notice')">공지팝업 열기</button>
          <button type="button" class="c-btn" @click="openModal('noticeswiper')">공지팝업 내 swiper 열기</button>
          <button type="button" class="c-btn" @click="openModal('modalbutton')">모달 내 버튼 모달 열기</button>
          <button type="button" class="c-btn" @click="openMultiModal('multimodal')">multimodal 모달 열기</button>
        </div>
      </section>
    </div>

    <!-- 중앙에서 열기 -->
    <teleport to="body">
      <div
        v-if="activeModal === 'center'"
        :class="['c-modal', { 'is-show': isModalVisible }]"
      >
        <c-dim :isVisible="isModalVisible" @close="closeModal" />
        <div class="c-modal-inner">
          <div class="c-modal-header">
            <strong class="c-modal-title">타이틀</strong>
            <button type="button" class="c-modal-close-btn" aria-label="닫기" @click="closeModal"></button>
          </div>
          <div class="c-modal-body">
            모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
          </div>
          <div class="c-modal-footer">
            <button type="button" class="c-modal-btn cancel" @click="closeModal">
              <span class="text">취소</span>
            </button>
            <button type="button" class="c-modal-btn confirm" @click="closeModal">
              <span class="text">확인</span>
            </button>
          </div>
        </div>
      </div>
    </teleport>

    <!-- 하단에서 열기 -->
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
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
          </div>
          <div class="c-modal-footer">
            <button type="button" class="c-modal-btn cancel" @click="closeModal">
              <span class="text">취소</span>
            </button>
            <button type="button" class="c-modal-btn confirm" @click="closeModal">
              <span class="text">확인</span>
            </button>
          </div>
        </div>
      </div>
    </teleport>

    <!-- Alert 열기 -->
    <teleport to="body">
      <div
        v-if="activeModal === 'alert'"
        :class="['c-modal alert', { 'is-show': isModalVisible }]"
      >
        <c-dim :isVisible="isModalVisible" @close="closeModal" />
        <div class="c-modal-inner">
          <div class="c-modal-body">
            Alert 메시지
          </div>
          <div class="c-modal-footer">
            <button type="button" class="c-modal-btn confirm" @click="closeModal">
              <span class="text">확인</span>
            </button>
          </div>
        </div>
      </div>
    </teleport>

    <!-- 전체화면 열기 -->
    <teleport to="body">
      <div
        v-if="activeModal === 'fullscreen'"
        :class="['c-modal fullscreen', { 'is-show': isModalVisible }]"
      >
        <c-dim :isVisible="isModalVisible" @close="closeModal" />
        <div class="c-modal-inner">
          <div class="c-modal-header">
            <strong class="c-modal-title">타이틀</strong>
            <button type="button" class="c-modal-close-btn" aria-label="닫기" @click="closeModal"></button>
          </div>
          <div class="c-modal-body">
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
            모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용
          </div>
          <div class="c-modal-footer">
            <button type="button" class="c-modal-btn cancel" @click="closeModal">
              <span class="text">취소</span>
            </button>
            <button type="button" class="c-modal-btn confirm" @click="closeModal">
              <span class="text">확인</span>
            </button>
          </div>
        </div>
      </div>
    </teleport>

    <!-- 공지팝업 열기 -->
    <teleport to="body">
      <div
        v-if="activeModal === 'notice'"
        :class="['c-modal', { 'is-show': isModalVisible }]"
      >
        <c-dim :isVisible="isModalVisible" @close="closeModal" />
        <div class="c-modal-inner">
          <div class="c-modal-header">
            <strong class="c-modal-title">타이틀</strong>
            <button type="button" class="c-modal-close-btn" aria-label="닫기" @click="closeModal"></button>
          </div>
          <div class="c-modal-body">
            모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>
          </div>
          <div class="c-modal-footer">
            <div class="c-checktype">
              <input type="checkbox" name="chkBox" id="chkBox1" class="c-check" />
              <label for="chkBox1" class="c-label" aria-label="오늘 하루 보지 않기">
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
    
    <!-- 공지팝업 내 swiper 열기 -->
    <teleport to="body">
      <div
        v-if="activeModal === 'noticeswiper'"
        :class="['c-modal', { 'is-show': isModalVisible }]"
      >
        <c-dim :isVisible="isModalVisible" @close="closeModal" />
        <div class="c-modal-inner">
          <div class="c-modal-header">
            <strong class="c-modal-title">타이틀</strong>
            <button type="button" class="c-modal-close-btn" aria-label="닫기" @click="closeModal"></button>
          </div>
          <div class="c-modal-body">
            <div class="c-swiper" ref="swiperModal">
              <!-- 스와이퍼 구현 -->
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
              <button
                type="button"
                :class="isAutoplay ? 'swiper-stop' : 'swiper-play'"
                v-if="slidesContent.length > 1"
                @click="toggleAutoplay"
              >
                <span class="text">{{ isAutoplay ? 'Stop' : 'Play' }}</span>
              </button>
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

    
    <!-- 모달 안의 버튼 모달 열기 -->
    <teleport to="body">
      <div
        v-if="activeModal === 'modalbutton'"
        :class="['c-modal', { 'is-show': isModalVisible }]"
      >
        <c-dim :isVisible="isModalVisible" @close="closeModal" />
        <div class="c-modal-inner">
          <div class="c-modal-header">
            <strong class="c-modal-title">타이틀</strong>
            <button type="button" class="c-modal-close-btn" aria-label="닫기" @click="closeModal"></button>
          </div>
          <div class="c-modal-body">
            모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>모달 콘텐츠 내용<br>
            <button type="button" class="c-btn squared" @click="openModal('alert')">
              <span class="text">alert 호출</span>
            </button>
          </div>
          <div class="c-modal-footer">
            <div class="c-checktype">
              <input type="checkbox" name="chkBox" id="chkBox1" class="c-check" />
              <label for="chkBox1" class="c-label" aria-label="오늘 하루 보지 않기">
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
    
    
    <!-- 이중 모달 열기 -->
    <teleport to="body">
      <!-- Multi Modal -->
      <div
        v-if="multiActiveModal.includes('multimodal')"
        :class="['c-modal', { 'is-show': isMultiModalVisible }]"
      >
        <c-dim
          :class="{ 'is-hide': multiActiveModal.length > 1 }"
          :isVisible="multiActiveModal.length === 1 && isMultiModalVisible"
          @close="closeMultiModal('multimodal')"
        />
        <div class="c-modal-inner">
          <div class="c-modal-header">
            <strong class="c-modal-title">멀티 모달</strong>
            <button type="button" class="c-modal-close-btn" aria-label="닫기" @click="closeMultiModal('multimodal')"></button>
          </div>
          <div class="c-modal-body">
            <div class="c-card">
              <div class="c-card-img">
                <div class="c-img">
                  <img src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" alt="" />
                </div>
              </div>
              <div class="c-card-inner">
                <div class="c-card-header">
                  <strong class="c-card-title">타이틀</strong>
                </div>
                <div class="c-card-body">
                  내용내용내용내용내용내용내용내용내용내용
                </div>
              </div>
            </div>
            <button type="button" class="c-btn squared" @click="openMultiModal('alert')">
              <span class="text">alert 호출</span>
            </button>
          </div>
          <div class="c-modal-footer">
            <div class="c-checktype">
              <input type="checkbox" name="chkBox" id="chkBox1" class="c-check" />
              <label for="chkBox1" class="c-label" aria-label="오늘 하루 보지 않기">
                <i class="icon" aria-hidden="true"></i>
              </label>
            </div>
            <button type="button" class="c-modal-btn close" @click="closeMultiModal('multimodal')">
              <span class="text">닫기</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Alert Modal -->
      <div
        v-if="multiActiveModal.includes('alert')"
        :class="['c-modal alert', { 'is-show': isMultiModalVisible }]"
      >
        <c-dim
          :isVisible="multiActiveModal[multiActiveModal.length - 1] === 'alert' && isMultiModalVisible"
          @close="closeMultiModal('alert')"
        />
        <div class="c-modal-inner">
          <div class="c-modal-body">
            Alert 모달 콘텐츠입니다.<br>알림 내용<br>알림 내용<br>
          </div>
          <div class="c-modal-footer">
            <button type="button" class="c-modal-btn close" @click="closeMultiModal('alert')">
              <span class="text">닫기</span>
            </button>
          </div>
        </div>
      </div>
    </teleport>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import CDim from "@/components/base/CDim.vue"; // 공통 컴포넌트 import
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/swiper-bundle.css";

/* 반응형 변수 */
const pageTitle = ref("Modal Demo");
const pageType = ref(""); // 기본값 설정
const { setHeaderOptions } = useHeaderOptions();

// body에 is-lock 클래스 추가
const lockBody = () => {
  document.body.classList.add('is-lock');
};

// body에서 is-lock 클래스 제거
const unlockBody = () => {
  document.body.classList.remove('is-lock');
};

/* Start : 단발성 모달 열기 */
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
/* End : 단발성 모달 열기 */

/* Start : 멀티 모달 */
// 멀티 활성화된 모달 관리 (배열로 관리)
const multiActiveModal = ref([]); // 활성화된 모달 리스트
const isMultiModalVisible = ref(false); // 현재 활성화된 모달의 가시성 상태

/**
 * 모달 열기 함수
 * @param {string} modalType - 열고자 하는 모달의 이름
 */
const openMultiModal = (modalType) => {
  if (!multiActiveModal.value.includes(modalType)) {
    multiActiveModal.value.push(modalType); // 활성화된 모달 리스트에 추가
  }
  isMultiModalVisible.value = true; // 모달 가시성 활성화
  lockBody(); // body 클래스 추가
};

/**
 * 모달 닫기 함수
 * @param {string} modalType - 닫고자 하는 모달의 이름
 */
const closeMultiModal = (modalType) => {
  const index = multiActiveModal.value.indexOf(modalType);
  if (index !== -1) {
    multiActiveModal.value.splice(index, 1); // 해당 모달을 리스트에서 제거
  }
  if (multiActiveModal.value.length === 0) {
    isMultiModalVisible.value = false; // 모든 모달이 닫혔을 때만 가시성 해제
    unlockBody(); // body 클래스 제거
  }
};
/* End : 멀티 모달 */

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
  {
    title: "Slide 3",
    image: "https://cache.lemonhc.com/thumnail/banner/card-health_note_1730279387241.svg",
    alt: "Slide 3",
    html: "<p>Content for Slide 3</p>",
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


// 페이지 로드시 하단 모달 자동 호출
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

  openModal("bottom"); // 하단 모달 자동 호출
  initializeSwiperOnModalOpen(); // 모달 열릴 때 Swiper 초기화
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
@use "@/assets/scss/component/_button" as button;
@use "@/assets/scss/component/_checkbox" as checkbox;
@use "@/assets/scss/component/_card" as card;
@use "@/assets/scss/component/_swiper" as swiper;
@use "@/assets/scss/component/_modal" as modal;
</style>
