<template>
  <main class="l-page" :data-page="pageType">
    <CHeader showBackButton showUtil logoType="text" :title="pageTitle" />
    <div class="chead">
      <h2 class="title">{{ pageTitle }}</h2>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <!-- 1. 유형: 제목 + 내용 텍스트 -->
      <section>
        <h2 class="title">1. 유형 : 제목 + 내용 텍스트</h2>
  
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
  
      </section>
  
      <!-- 2. 유형: 이미지 제공 -->
      <section>
        <h2 class="title">2. 유형 : 이미지 제공</h2>
  
        <div class="c-swiper">
          <Swiper
            v-if="slidesContent2.length > 1"
            :modules="[Navigation, Pagination, A11y]"
            navigation
            :pagination="{ clickable: true }"
            :loop="true"
            :a11y="true"
            class="swiper-container"
          >
            <SwiperSlide v-for="(slide, index) in slidesContent2" :key="index">
              <div class="c-card">
                <div class="c-card-img">
                  <div class="c-img">
                    <img :src="slide.image" :alt="slide.alt" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div v-else class="single-slide">
            <div class="c-card">
              <div class="c-card-img">
                <div class="c-img">
                  <img :src="slidesContent2[0].image" :alt="slidesContent2[0].alt" />
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </section>
  
      <!-- 3. 유형: HTML 태그 사용 -->
      <section>
        <h2 class="title">3. 유형 : HTML 태그 사용</h2>
  
        <div class="c-swiper">
          <Swiper
            v-if="slidesContent3.length > 1"
            :modules="[Navigation, Pagination, A11y]"
            navigation
            :pagination="{ clickable: true }"
            :loop="true"
            :a11y="true"
            class="swiper-container"
          >
            <SwiperSlide v-for="(slide, index) in slidesContent3" :key="index">
              <div class="c-card">
                <div class="c-card-inner">
                  <div class="c-card-body" v-html="slide.html"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div v-else class="single-slide">
            <div class="c-card">
              <div class="c-card-inner">
                <div class="c-card-body" v-html="slidesContent3[0].html"></div>
              </div>
            </div>
          </div>
        </div>
  
      </section>
  
      <!-- 4. 유형: 1~3번 혼합 + Fraction Pagination -->
      <section>
        <h2 class="title">4. 유형 : 1~3번 혼합 + Fraction Pagination</h2>
  
        <div class="c-swiper">
          <Swiper
            v-if="slidesContent4.length > 1"
            :modules="[Navigation, Pagination, A11y]"
            navigation
            :pagination="{ type: 'fraction' }"
            :loop="true"
            :a11y="true"
            class="swiper-container"
          >
            <SwiperSlide v-for="(slide, index) in slidesContent4" :key="index">
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
                  <img :src="slidesContent4[0].image" :alt="slidesContent4[0].alt" />
                </div>
              </div>
              <div class="c-card-inner">
                <div class="c-card-header">
                  <strong class="c-card-title">{{ slidesContent4[0].title }}</strong>
                </div>
                <div class="c-card-body" v-html="slidesContent4[0].html"></div>
              </div>
            </div>
          </div>
        </div>
  
      </section>
  
      <!-- 5. 유형: 1~3번 혼합 + Pagination Bullet 클릭 가능 + Autoplay -->
      <section>
        <h2 class="title">5. 유형 : 1~3번 혼합 + Pagination Bullet 클릭 가능 + Autoplay</h2>
  
        <div class="c-swiper">
          <Swiper
            v-if="slidesContent5.length > 1"
            :modules="[Navigation, Pagination, Autoplay, A11y]"
            navigation
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :loop="true"
            :a11y="true"
            class="swiper-container"
            @swiper="initializeSwiper5"
          >
            <SwiperSlide v-for="(slide, index) in slidesContent5" :key="index">
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
            :class="isAutoplay5 ? 'swiper-stop' : 'swiper-play'"
            v-if="slidesContent5.length > 1"
            @click="toggleAutoplay5"
          >
            <span class="text">{{ isAutoplay5 ? 'Stop' : 'Play' }}</span>
          </button>
        </div>
  
      </section>
  
      <!-- 6. 유형: 좌/우 버튼 + Fraction Pagination + Autoplay + 재생/정지 버튼 -->
      <section>
        <h2 class="title">
          6. 유형 : 좌/우 버튼 + Fraction Pagination + Autoplay + 재생/정지 버튼
        </h2>
  
        <div class="c-swiper">
          <Swiper
            v-if="slidesContent6.length > 1"
            :modules="[Navigation, Pagination, Autoplay, A11y]"
            navigation
            :pagination="{ type: 'fraction' }"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :loop="true"
            :a11y="true"
            class="swiper-container"
            @swiper="initializeSwiper6"
          >
            <SwiperSlide v-for="(slide, index) in slidesContent6" :key="index">
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
                  <div class="c-card-body">
                    {{ slide.content }}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button
            type="button"
            :class="isAutoplay6 ? 'swiper-stop' : 'swiper-play'"
            v-if="slidesContent6.length > 1"
            @click="toggleAutoplay6"
          >
            <span class="text">{{ isAutoplay6 ? 'Stop' : 'Play' }}</span>
          </button>
        </div>
  
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import CHeader from "@/components/layout/CHeader.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/swiper-bundle.css";

// 반응형 변수
const pageTitle = ref("Swiper Demo");
const pageType = ref(""); // 기본값 설정

// 파일명 추출 함수
const getFileName = () => {
  const url = import.meta.url; // 현재 파일 URL 가져오기
  return url.split("/").pop()?.split(".").shift() || "default"; // 파일명 추출
};

// 슬라이드 데이터
const slidesContent1 = [
  { title: "Title 1", content: "Content for slide 1" },
  { title: "Title 2", content: "Content for slide 2" },
];

const slidesContent2 = [
  { image: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg", alt: "Slide 1" },
  { image: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg", alt: "Slide 2" },
];

const slidesContent3 = [
  { html: "<strong>HTML Slide 1</strong>" },
  { html: "<em>HTML Slide 2</em>" },
];

const slidesContent4 = [
  {
    title: "Slide 1",
    image: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
    alt: "Slide 1",
    html: "<p>HTML Content 1</p>",
  },
  {
    title: "Slide 2",
    image: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
    alt: "Slide 2",
    html: "<p>HTML Content 2</p>",
  },
];

// 5번 슬라이드 데이터
const slidesContent5 = [
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

// 6번 슬라이드 데이터
const slidesContent6 = [
  {
    title: "Slide 1",
    image: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
    alt: "Slide 1",
    content: "Content for Slide 1",
  },
  {
    title: "Slide 2",
    image: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
    alt: "Slide 2",
    content: "Content for Slide 2",
  },
];


// Swiper 상태 관리
const swiper5 = ref(null);
const swiper6 = ref(null);

const isAutoplay5 = ref(true);
const isAutoplay6 = ref(true);

// Swiper 초기화
const initializeSwiper5 = (instance) => {
  swiper5.value = instance;
};

const initializeSwiper6 = (instance) => {
  swiper6.value = instance;
};

// Autoplay 제어 함수
const toggleAutoplay5 = () => {
  if (swiper5.value?.autoplay) {
    if (isAutoplay5.value) {
      swiper5.value.autoplay.stop(); // Autoplay 중지
    } else {
      swiper5.value.autoplay.start(); // Autoplay 시작
    }
    isAutoplay5.value = !isAutoplay5.value; // 상태 업데이트
  }
};

const toggleAutoplay6 = () => {
  if (swiper6.value?.autoplay) {
    if (isAutoplay6.value) {
      swiper6.value.autoplay.stop(); // Autoplay 중지
    } else {
      swiper6.value.autoplay.start(); // Autoplay 시작
    }
    isAutoplay6.value = !isAutoplay6.value; // 상태 업데이트
  }
};

// Initialize the component
onMounted(() => {
  pageType.value = getFileName(); // 파일명 추출 후 pageType에 저장
  document.title = pageTitle.value; // 초기에 document.title 설정
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_swiper" as swiper;
@use "@/assets/scss/component/_card" as card;
</style>