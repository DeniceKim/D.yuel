<template>
  <main class="main" data-main-type="imgslide" aria-label="본문 내용">
    <div class="cbody facilities">
      <!-- 탭 메뉴 -->
      <div role="group" class="group navtab" data-group-type="tab" data-width-size="full">
        <nav class="nav" data-nav-type="navtab" aria-label="편의시설 선택">
          <div class="scrollin" data-gap="8" role="tablist">
            <button
              type="button"
              role="tab"
              class="navitem"
              :aria-selected="activeTab === tab.id"
              @click="switchTab(tab.id)"
              v-for="tab in tabs"
              :key="tab.id"
              :aria-controls="'tabPanel' + tab.id"
            >
              <span>{{ tab.title }}</span>
            </button>
          </div>
        </nav>
      </div>

      <!-- 동적으로 생성된 탭 패널 -->
      <div
        v-for="tab in tabs"
        :key="tab.id"
        :id="'tabPanel' + tab.id"
        class="tabpanel"
        :class="{ 'is-active': activeTab === tab.id }"
      >
        <section class="division" data-padding="32" data-padding-bottom="false" v-for="(section, sectionIndex) in tab.sections" :key="sectionIndex">
          <h2 class="title" data-title-type="sub">{{ section.title }}</h2>
          <div class="swiper imgslider" :ref="'swiper' + tab.id + sectionIndex">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(image, imageIndex) in section.images"
                :key="imageIndex"
                :aria-hidden="section.images.length === 1 ? 'false' : 'true'" 
                :tabindex="section.images.length === 1 ? '0' : '-1'" 
                role="group"
              >
                <div class="slide-content">
                  <img
                    :src="image.src"
                    :alt="generateAltText(tab.title, section.title, imageIndex, section.images.length)"
                    lang="ko"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              class="swiper-button-prev"
              aria-label="이전"
              tabindex="0"
              v-if="section.images.length > 1" 
            ></button>
            <button
              type="button"
              class="swiper-button-next"
              aria-label="다음"
              tabindex="0"
              v-if="section.images.length > 1" 
            ></button>
            <div class="swiper-pagination" aria-hidden="true"></div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 탭 데이터 정의
const tabs = ref([
  {
    id: 1,
    title: '식당/커피숍',
    sections: [
      {
        title: '티카페',
        images: [
          { src: 'http://www.snuh.org/upload/guide/conven/inter/91bb423e9399491bbef2a2fc7cd5a004.jpg' },
          { src: 'http://www.snuh.org/upload/guide/conven/inter/61c37e16e3164cca86b8e8d9752defea.jpg' },
        ],
      },
      {
        title: '아로마띠꼬',
        images: [
          { src: 'http://www.snuh.org/upload/guide/conven/inter/76acc15c9e1e4c0d86bffbda474f8e51.jpg' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: '매점/마트',
    sections: [
      {
        title: '암병원 편의점',
        images: [
          { src: 'http://www.snuh.org/upload/guide/conven/inter/a1df9a03486f495ea67e076ffae1bd2e.jpg' },
          { src: 'http://www.snuh.org/upload/guide/conven/inter/b52608f9d06e4cf5bbf43e2c184f0eb8.jpg' },
          { src: 'http://www.snuh.org/upload/guide/conven/inter/4968c3adee1a43f78bffc51dc37c75d5.jpg' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: '종교시설',
    sections: [
      {
        title: '천주교 원목실',
        images: [
          { src: 'http://www.snuh.org/upload/guide/conven/inter/ffce75f628e94ea39b2f7e65181d22b0.jpg' },
        ],
      },
    ],
  },
]);

const activeTab = ref(1);
const swiperInstances = ref({});

function switchTab(tabIndex) {
  activeTab.value = tabIndex;
  initSwiper(tabIndex); // 탭 전환 시 swiper 초기화
}

function initSwiper(tabIndex) {
  nextTick(() => {
    const swiperContainers = document.querySelectorAll(`#tabPanel${tabIndex} .imgslider`);
    swiperContainers.forEach((swiperContainer, sectionIndex) => {
      const slidesCount = swiperContainer.querySelectorAll('.swiper-slide').length;

      // 이미 초기화된 인스턴스가 있다면 제거
      if (swiperInstances.value[tabIndex] && swiperInstances.value[tabIndex][sectionIndex]) {
        swiperInstances.value[tabIndex][sectionIndex].destroy(true, true);
      }

      swiperInstances.value[tabIndex] = swiperInstances.value[tabIndex] || {};
      swiperInstances.value[tabIndex][sectionIndex] = new Swiper(swiperContainer, {
        modules: [Navigation, Pagination, Scrollbar],
        navigation: {
          nextEl: swiperContainer.querySelector('.swiper-button-next'),
          prevEl: swiperContainer.querySelector('.swiper-button-prev'),
        },
        pagination: {
          el: swiperContainer.querySelector('.swiper-pagination'),
          type: 'fraction',
        },
        loop: true, // 슬라이드가 무한 반복되도록 설정
        autoplay: {
          delay: 3000, // 3초마다 자동 재생
          disableOnInteraction: false, // 사용자가 조작해도 자동 재생 계속
        },
        on: {
          slideChange: function () {
            updateAriaLabels(swiperContainer, sectionIndex); // 슬라이드 변경 시 aria-label 갱신
          },
        },
      });

      // 슬라이드가 1개일 경우 swiper-pagination 영역 제거
      if (slidesCount === 1) {
        const swiperPagination = swiperContainer.querySelector('.swiper-pagination');
        if (swiperPagination) {
          swiperPagination.remove();  // DOM에서 swiper-pagination 영역 제거
        }
        swiperContainer.classList.add('single');  // single 클래스를 추가
        swiperContainer.querySelectorAll('.swiper-button-prev, .swiper-button-next').forEach(button => {
          button.style.display = 'none'; // 좌/우 버튼 숨기기
        });
      } else {
        swiperContainer.classList.remove('single');  // single 클래스 제거
      }

      updateAriaLabels(swiperContainer, sectionIndex); // 초기 aria-label 설정
    });
  });
}

// alt 값 동적으로 생성 (이미지 인덱스와 title을 기반으로, 이미지가 1개일 경우 index를 제외)
function generateAltText(title, sectionTitle, index, imagesLength) {
  if (imagesLength === 1) {
    return `${title} - ${sectionTitle} 이미지`; // 이미지가 1개일 경우, index 값을 제외한 alt 텍스트
  }
  return `${title} - ${sectionTitle} 이미지 ${index + 1}`; // 여러 이미지일 경우, index 값을 포함
}

// aria-label 동적으로 업데이트
function updateAriaLabels(swiperContainer, sectionIndex) {
  const swiperInstance = swiperInstances.value[activeTab.value][sectionIndex];
  const totalSlides = swiperInstance.slides.length;

  // 현재 활성 슬라이드 추출
  const currentSlide = swiperInstance.slides[swiperInstance.activeIndex];
  const currentSlideAlt = currentSlide.querySelector('img').alt;

  // swiper-pagination-current 클래스가 있는 슬라이드 추적
  const prevSlideIndex = (swiperInstance.activeIndex - 1 + totalSlides) % totalSlides;
  const nextSlideIndex = (swiperInstance.activeIndex + 1) % totalSlides;

  const prevSlide = swiperInstance.slides[prevSlideIndex];
  const nextSlide = swiperInstance.slides[nextSlideIndex];

  const prevSlideAlt = prevSlide.querySelector('img').alt;
  const nextSlideAlt = nextSlide.querySelector('img').alt;

  const prevButton = swiperContainer.querySelector('.swiper-button-prev');
  const nextButton = swiperContainer.querySelector('.swiper-button-next');

  // 이전 버튼 aria-label 업데이트
  if (prevButton) {
    prevButton.setAttribute(
      'aria-label',
      `총 ${totalSlides}개의 슬라이드 중 현재 ${swiperInstance.activeIndex + 1}번째 슬라이드, ${currentSlideAlt}, 이전 ${prevSlideIndex + 1}번째 슬라이드, ${prevSlideAlt}`
    );
    prevButton.setAttribute('aria-live', 'assertive');
  }

  // 다음 버튼 aria-label 업데이트
  if (nextButton) {
    nextButton.setAttribute(
      'aria-label',
      `총 ${totalSlides}개의 슬라이드 중 현재 ${swiperInstance.activeIndex + 1}번째 슬라이드, ${currentSlideAlt}, 다음 ${nextSlideIndex + 1}번째 슬라이드, ${nextSlideAlt}`
    );
    nextButton.setAttribute('aria-live', 'assertive');
  }
}

onMounted(() => {
  initSwiper(activeTab.value); // 처음 로드시 첫 번째 탭 초기화
});
</script>

<style scoped>
/* 스타일 */
.imgslider {
  overflow: hidden;
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  padding: 0;
  padding-bottom: 32px;
}

.imgslider.single {
  height: auto;
  padding: 0;
}
.imgslider.single .swiper-slide img {
    max-height: none;
}

.imgslider .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  position: relative;
  transition-property: transform;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  background: var(--white);
}

.imgslider .swiper-slide img {
  width: 100%;
  max-height: 164px;
}

.imgslider .swiper-button-prev {
  left: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='rgba(255,255,255,1)'%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z'%3E%3C/path%3E%3C/svg%3E");
}

.imgslider .swiper-button-next {
  right: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='rgba(255,255,255,1)'%3E%3Cpath fill='none' d='M0 0h24v24H0z'%3E%3C/path%3E%3Cpath d='M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z'%3E%3C/path%3E%3C/svg%3E");
}

.imgslider .swiper-button-prev, .imgslider .swiper-button-next {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: auto;
  z-index: 1;
  bottom: 0;
  width: 32px;
  height: 32px;
  background-color: rgba(0,0,0,0);
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 50% 50%;
}

.imgslider .swiper-button-prev::after, .imgslider .swiper-button-next::after {
  display: none;
}

.imgslider .swiper-pagination-bullet {
  color: var(--black);
  cursor: pointer;
}

.imgslider .swiper-button-disabled {
  opacity: .8;
  cursor: default;
}

.imgslider .swiper-horizontal>.swiper-pagination-bullets,
.imgslider .swiper-pagination-bullets.swiper-pagination-horizontal,
.imgslider .swiper-pagination-custom,
.imgslider .swiper-pagination-fraction {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 32px;
  background-color: var(--black);
  color: var(--white);
  font-size: 12px;
  text-align: center;
  transition: .3s opacity;
  transform: translate3d(0, 0, 0);
}

.imgslider .swiper-pagination-current {
  font-weight: 600;
}

.imgslider .swiper-android .swiper-slide,
.imgslider .swiper-ios .swiper-slide,
.imgslider .swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}

.imgslider .swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}

.imgslider.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.imgslider .swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
}
</style>
