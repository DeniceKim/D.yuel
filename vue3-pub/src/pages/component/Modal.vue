<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">Modal</h2>
      <div class="desc">
        Component는 Prifix c-* 시작하는 class name을 지정<br>
        현재 스타일은 임시. 추 후 디자인에 따라 변경.<br>
        마크업 구조는 현재 구조 유지. css만 변경
      </div>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <h3 class="title_sub">모달 기본 Type</h3>
        <div class="code_editor">
          <router-link to="/demo/modal" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="height:300px">

            <div id="cModal" class="c-modal is-show" aria-describedby="modalTitle">
              <div class="c-dim"></div>
              <div class="c-modal-inner">
                <div class="c-modal-header">
                  <strong class="c-modal-title" id="modalTitle">타이틀</strong>
                  <button type="button" class="c-modal-close-btn" aria-label="닫기"></button>
                </div>
                <div class="c-modal-body">
                  모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용콘텐츠 내용콘텐츠 내용콘텐츠 내용<br>
                  모달 콘텐츠 내용<br>
                  모달 콘텐츠 내용<br>
                  모달 콘텐츠 내용
                </div>
                <div class="c-modal-footer">
                  <button type="button" class="c-modal-btn cancel">
                    <span class="text">취소</span>
                  </button>
                  <button type="button" class="c-modal-btn confirm">
                    <span class="text">확인</span>
                  </button>
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

      <section>
        <h3 class="title_sub">하단 위치</h3>
        <div class="code_editor">
          <router-link to="/demo/modal" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="height:300px">

            <div id="cModalBottom" class="c-modal bottom is-show" aria-describedby="modalBottomTitle">
              <div class="c-dim"></div>
              <div class="c-modal-inner">
                <div class="c-modal-header">
                  <strong class="c-modal-title" id="modalBottomTitle">타이틀</strong>
                  <button type="button" class="c-modal-close-btn" aria-label="닫기"></button>
                </div>
                <div class="c-modal-body">
                  모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용콘텐츠 내용콘텐츠 내용콘텐츠 내용<br>
                  모달 콘텐츠 내용<br>
                  모달 콘텐츠 내용<br>
                  모달 콘텐츠 내용
                </div>
                <div class="c-modal-footer">
                  <button type="button" class="c-modal-btn cancel">
                    <span class="text">취소</span>
                  </button>
                  <button type="button" class="c-modal-btn confirm">
                    <span class="text">확인</span>
                  </button>
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

      <section>
        <h3 class="title_sub">alert 유형</h3>
        <div class="code_editor">
          <router-link to="/demo/modal" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <p class="desc">c-modal-header가 없는 경우</p>
          <div class="code_input" style="height:300px">

            <div id="cModalAlert" class="c-modal alert is-show" aria-describedby="alertMessage">
              <div class="c-dim"></div>
              <div class="c-modal-inner">
                <div class="c-modal-body" id="alertMessage">
                  Alert 메시지
                </div>
                <div class="c-modal-footer">
                  <button type="button" class="c-modal-btn confirm">
                    <span class="text">확인</span>
                  </button>
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

      <section>
        <h3 class="title_sub">전체 화면(fullscreen) 유형</h3>
        <div class="code_editor">
          <router-link to="/demo/modal" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="height:300px">

            <div id="cModalFullscreen" class="c-modal fullscreen is-show" aria-describedby="fullscreenTitle">
              <!-- <div class="c-dim"></div> -->
              <div class="c-modal-inner">
                <div class="c-modal-header">
                  <strong class="c-modal-title" id="fullscreenTitle">타이틀</strong>
                  <button type="button" class="c-modal-close-btn" aria-label="닫기"></button>
                </div>
                <div class="c-modal-body">
                  모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용콘텐츠 내용콘텐츠 내용콘텐츠 내용<br>
                  모달 콘텐츠 내용<br>
                  모달 콘텐츠 내용<br>
                  모달 콘텐츠 내용
                </div>
                <div class="c-modal-footer">
                  <button type="button" class="c-modal-btn cancel">
                    <span class="text">취소</span>
                  </button>
                  <button type="button" class="c-modal-btn confirm">
                    <span class="text">확인</span>
                  </button>
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
      
      <section>
        <h3 class="title_sub">공지팝업 Type</h3>
        <div class="code_editor">
          <router-link to="/demo/modal" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="height:300px">

            <div id="cModal" class="c-modal notice is-show" aria-describedby="modalTitle">
              <div class="c-dim"></div>
              <div class="c-modal-inner">
                <div class="c-modal-header">
                  <strong class="c-modal-title" id="modalTitle">타이틀</strong>
                  <button type="button" class="c-modal-close-btn" aria-label="닫기"></button>
                </div>
                <div class="c-modal-body">
                  모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용모달 콘텐츠 내용콘텐츠 내용콘텐츠 내용콘텐츠 내용<br>
                  모달 콘텐츠 내용<br>
                  모달 콘텐츠 내용<br>
                  모달 콘텐츠 내용
                </div>
                <div class="c-modal-footer">
                  <div class="c-checktype">
                    <input type="checkbox" name="chkBox" id="chkBox1" class="c-check" />
                    <label for="chkBox1" class="c-label" aria-label="오늘 하루 보지 않기">
                      <i class="icon" aria-hidden="true" />
                    </label>
                  </div>
                  <button type="button" class="c-modal-btn close">
                    <span class="text">닫기</span>
                  </button>
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
      
      <section>
        <h3 class="title_sub">팝업 내 swiper</h3>
        <div class="code_editor">
          <router-link to="/demo/modal" class="c-link demo"><span class="text">Demo</span></router-link>
          <button type="button" class="code-btn">Code View</button>
          <div class="code_input" style="height:600px">

            <div id="cModal" class="c-modal noticeswiper is-show" aria-describedby="modalTitle">
              <div class="c-dim"></div>
              <div class="c-modal-inner">
                <div class="c-modal-header">
                  <strong class="c-modal-title" id="modalTitle">타이틀</strong>
                  <button type="button" class="c-modal-close-btn" aria-label="닫기"></button>
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
                </div>
                <div class="c-modal-footer">
                  <div class="c-checktype">
                    <input type="checkbox" name="chkBox" id="chkBox2" class="c-check" />
                    <label for="chkBox2" class="c-label" aria-label="오늘 하루 보지 않기">
                      <i class="icon" aria-hidden="true"></i>
                    </label>
                  </div>
                  <button type="button" class="c-modal-btn close">
                    <span class="text">닫기</span>
                  </button>
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
import { ref, onMounted, watch, nextTick } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/swiper-bundle.css";

// 반응형 변수
const pageTitle = ref("Modal");
const pageType = ref(""); // 기본값 설정

// 파일명 추출 함수
const getFileName = () => {
  const url = import.meta.url; // 현재 파일 URL 가져오기
  return url.split("/").pop()?.split(".").shift() || "default"; // 파일명 추출
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

// Initialize the component
onMounted(() => {
  pageType.value = getFileName(); // 파일명 추출 후 pageType에 저장
  document.title = pageTitle.value; // 초기에 document.title 설정
  initializeSwiperOnModalOpen(); // 모달 열릴 때 Swiper 초기화
});

// pageTitle 값 변경 시 document.title 자동 업데이트
watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_modal" as modal;
@use "@/assets/scss/component/_swiper" as swiper;
@use "@/assets/scss/component/_card" as card;
@use "@/assets/scss/component/_checkbox" as checkbox;
</style>