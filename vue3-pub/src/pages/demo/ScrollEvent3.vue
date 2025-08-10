<template>
  <main class="main" data-main-type="demoChart" aria-label="본문 내용">
    <div class="cbody">
      <!-- 버튼 리스트 -->
      <nav>
        <ul class="testNav">
          <li v-for="(btn, idx) in buttons" :key="idx">
            <button
              :id="btn.id"
              :aria-controls="btn.controls"
              :class="{ 'is-active': articleTab === btn.controls }"
              @click="showSection(btn.controls, idx)"
            >
              {{ btn.label }}
            </button>
          </li>
        </ul>
      </nav>
      <!-- 섹션 리스트 -->
      <section>
        <!-- [1] onepage Scroll -->
        <article 
          class="scrollType01" 
          :class="{ 'is-show': articleTab === 'test1' }"
          id="test1" 
        >
          <div class="nav">
            <ul>
              <li><a role="link" class="active">One</a></li>
              <li><a role="link">Two</a></li>
              <li><a role="link">Three</a></li>
              <li><a role="link">Four</a></li>
              <li><a role="link">Five</a></li>
            </ul>
          </div>
          <div class="section" id="one"><p>Slide One</p></div>
          <div class="section" id="two"><p>Slide Two</p></div>
          <div class="section" id="three"><p>Slide Three</p></div>
          <div class="section" id="four"><p>Slide Four</p></div>
          <div class="section" id="five"><p>Slide Five</p></div>
        </article>
        <!-- [2] onepage Scroll -->
        <article 
          class="scrollType02" 
          :class="{ 'is-show': articleTab === 'test2' }"
          id="test2" 
        >
          <div class="nav">
            <ul>
              <li><a role="link" class="active"><span>One</span></a></li>
              <li><a role="link"><span>Two</span></a></li>
              <li><a role="link"><span>Three</span></a></li>
              <li><a role="link"><span>Four</span></a></li>
              <li><a role="link"><span>Five</span></a></li>
            </ul>
          </div>
          <div class="section" id="one"><p>Slide One</p></div>
          <div class="section" id="two"><p>Slide Two</p></div>
          <div class="section" id="three"><p>Slide Three</p></div>
          <div class="section" id="four"><p>Slide Four</p></div>
          <div class="section" id="five"><p>Slide Five</p></div>
        </article>
        <!-- [3] onepage Scroll -->
        <article 
          class="scrollType03" 
          :class="{ 'is-show': articleTab === 'test3' }"
          id="test3" 
        >
          <nav>
            <div class="nodes"> 
              <div class="line">
                <div class="blue">
                  <div class="red-container">
                    <div class="red"></div>
                  </div>
                </div>
              </div>
              <div class="node" v-for="(idx, index) in 8" :key="index" :class="index === 0 ? 'main' : ''">
                <div class="active-circle">
                  <div class="splash"></div>
                  <div class="cover">
                    <div class="white"></div>
                  </div>
                </div>
                <div class="inactive-circle">
                  <div class="small-cover"></div>
                </div>
              </div>
            </div>
            <div class="shares"></div>
          </nav>

          <div class="items">
            <div class="item main">
              <span>Scroll</span>
            </div>  
            <div class="item" v-for="(idx, index) in 7" :key="index">
              <span>{{ idx }}</span>
            </div>
          </div>
        </article>
        <!-- [4] swiper js -->
        <article 
          class="scrollType04" 
          :class="{ 'is-show': articleTab === 'test4' }"
          id="test4" 
        >
          <div class="slide_nav">
            <ul role="tablist" class="nav_list">
              <li role="presentation" class="nav_item"><a role="tab" class="nav_link is-active">1page</a></li>
              <li role="presentation" class="nav_item"><a role="tab" class="nav_link">2page</a></li>
              <li role="presentation" class="nav_item"><a role="tab" class="nav_link">3page</a></li>
              <li role="presentation" class="nav_item"><a role="tab" class="nav_link">4page</a></li>
              <li role="presentation" class="nav_item"><a role="tab" class="nav_link">5page</a></li>
              <li role="presentation" class="nav_item"><a role="tab" class="nav_link">6page</a></li>
              <li role="presentation" class="nav_item"><a role="tab" class="nav_link">7page</a></li>
            </ul>
          </div>
          <div class="slide_container">
            <div class="slide slide_wrap">
              <div class="slide_item"><p>1</p></div>
              <div class="slide_item"><p>2</p></div>
              <div class="slide_item"><p>3</p></div>
              <div class="slide_item"><p>4</p></div>
              <div class="slide_item"><p>5</p></div>
              <div class="slide_item"><p>6</p></div>
              <div class="slide_item"><p>7</p></div>
            </div>
          </div>
        </article>
        <!-- [4] swiper vue js -->
        <article 
          class="scrollType05" 
          :class="{ 'is-show': articleTab === 'test5' }"
          id="test5" 
        >
          <div class="c-swiper swiper-pageType">
            <Swiper
              :modules="[Pagination, A11y]"
              :pagination="pagination"
              :loop="true"
              :a11y="true"
              class="swiper-container"
            >
              <SwiperSlide><div class="page-area">1</div></SwiperSlide>
              <SwiperSlide><div class="page-area">2</div></SwiperSlide>
              <SwiperSlide><div class="page-area">3</div></SwiperSlide>
              <SwiperSlide><div class="page-area">4</div></SwiperSlide>
              <SwiperSlide><div class="page-area">5</div></SwiperSlide>
            </Swiper>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/swiper-bundle.css";

const articleTab = ref('test1'); 

// 버튼과 섹션 데이터
const buttons = [
  { id: "button1", label: "tab01", controls: "test1" },
  { id: "button2", label: "tab02", controls: "test2" },
  { id: "button3", label: "tab03", controls: "test3" },
  { id: "button4", label: "tab04", controls: "test4" },
  { id: "button5", label: "tab05", controls: "test5" },
];

// 특정 섹션만 표시하고 활성화된 버튼 관리
function showSection(tabId, index) {
  articleTab.value = tabId;

  // 스크롤 상단으로 이동
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  // nav container와 버튼 위치 가져오기
  const body = document.querySelector('body');
  const navContainer = document.querySelector('.testNav');
  const buttons = navContainer.querySelectorAll('button');
  const targetButton = buttons[index];
  
  // 버튼의 위치를 기준으로 스크롤 이동
  const targetRect = targetButton.getBoundingClientRect();
  const containerRect = navContainer.getBoundingClientRect();

  const scrollOffset =
    navContainer.scrollLeft + (targetRect.left - containerRect.left) - (containerRect.width / 2) + (targetRect.width / 2);

  navContainer.scrollTo({
    left: scrollOffset,
    behavior: 'smooth',
  });
  nextTick(() => { // DOM이 렌더링된 후 호출
    if (articleTab.value === "test1") {
      initScrollNavigation(".scrollType01");
    } else if (articleTab.value === "test2") {
      initScrollNavigation(".scrollType02");
    } else if (articleTab.value === "test3") {
      scrolltset();
    } else if(articleTab.value === 'test4'){
      swipertest();
    } else if(articleTab.value === 'test5'){
      swiperVueJStest();
    }
  });
}

const initScrollNavigation = (articleType) => {
  const navLinks = document.querySelectorAll(`${articleType} .nav li a`);
  const sections = document.querySelectorAll(`${articleType} .section`);

  // 네비게이션 클릭 이벤트 추가
  navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // 기본 동작 방지

      // 해당 섹션으로 부드럽게 스크롤 이동
      sections[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // 모든 네비게이션 링크에서 active 제거 후 클릭된 링크에 추가
      navLinks.forEach((link) => link.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // IntersectionObserver 설정
  const observerOptions = {
    threshold: 0.55, // 섹션의 55%가 화면에 보이면 작동
  };

  const changeActiveOnScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 현재 활성화된 링크에서 active 제거
        navLinks.forEach((link) => link.classList.remove('active'));

        // 현재 보이는 섹션의 인덱스를 기반으로 네비게이션 활성화
        const index = Array.from(sections).indexOf(entry.target);
        if (navLinks[index]) {
          navLinks[index].classList.add('active');
        }
      }
    });
  };

  const observer = new IntersectionObserver(changeActiveOnScroll, observerOptions);

  // 모든 섹션에 Observer 연결
  sections.forEach((section) => observer.observe(section));
};

function scrolltset() {
  // 모든 아이템 높이를 뷰포트 높이로 설정
  document.querySelectorAll('.scrollType03 .item').forEach(item => {
    item.style.height = `${window.innerHeight}px`;
  });

  const revealBar = document.querySelector('.scrollType03 .red-container');
  const line = document.querySelector('.scrollType03 .line');
  const nodes = document.querySelectorAll('.scrollType03 .node');
  const elements = document.querySelectorAll('.scrollType03 .item');
  const documentHeight = window.innerHeight;

  // .line의 width 가져오기
  const lineWidth = line.getBoundingClientRect().width;
  const stepDistance = lineWidth / (nodes.length - 1); // 노드 간 거리 계산

  // 클릭 동작 시 스크롤 이벤트와 충돌 방지용 플래그
  let isManualScroll = false;

  // IntersectionObserver 설정
  const observerOptions = {
    threshold: 0.55, // 화면에 55% 이상 보이면 활성화
  };

  const updateActiveStates = (entries) => {
    if (isManualScroll) return; // 수동 스크롤 중이면 업데이트 건너뜀

    let current = -1; // 현재 활성화된 index
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        current = Array.from(elements).indexOf(entry.target); // 현재 화면에 보이는 item index
      }
    });

    // 노드 활성화 상태 업데이트
    nodes.forEach((node, index) => {
      if (index <= current) {
        node.classList.add('active'); // 활성화
      } else {
        node.classList.remove('active'); // 비활성화
      }
    });

    // 바 너비 업데이트
    let totalWidth;
    if (current === -1) { // 첫 번째 item 이전
      totalWidth = 0;
    } else if (current >= elements.length - 1) { // 마지막 item 이후
      totalWidth = lineWidth; // 최대 너비로 설정
    } else { // 현재 item과 다음 item 사이의 계산
      const rect = elements[current].getBoundingClientRect();
      const visibleHeight = Math.min(documentHeight, rect.bottom) - Math.max(0, rect.top);
      const nextStep = visibleHeight / rect.height; // 현재 item이 보이는 비율
      totalWidth = stepDistance * (current + nextStep);
    }

    // 바의 최대값을 lineWidth로 제한
    totalWidth = Math.min(totalWidth, lineWidth);
    revealBar.style.width = `${totalWidth}px`;
  };

  const observer = new IntersectionObserver(updateActiveStates, observerOptions);

  // 모든 item에 Observer 연결
  elements.forEach((item) => observer.observe(item));

  // 노드 클릭 이벤트 처리
  nodes.forEach((node, index) => {
    node.addEventListener('click', () => {
      isManualScroll = true; // 수동 스크롤 시작

      const targetScrollTop = elements[index].offsetTop + documentHeight * 0.1; // 정확한 위치 조정
      console.log(targetScrollTop)
      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      });

      // 수동으로 상태 업데이트
      nodes.forEach((node, idx) => {
        if (idx <= index) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }
      });

      // 바 너비 직접 업데이트
      const totalWidth = Math.min(index * stepDistance, lineWidth);
      revealBar.style.width = `${totalWidth}px`;

      // 수동 스크롤 플래그 초기화
      setTimeout(() => {
        isManualScroll = false; // 애니메이션이 끝난 후 플래그 초기화
      }, 1000); // 스크롤 애니메이션 시간과 동기화
    });
  });
}

// 네비게이션 스크롤 이동 함수 (공통 함수)
const scrollNavToActive = (index, navLinks, navContainer) => {
  if (!navLinks || !navContainer) return;

  const item = navLinks[index];
  if (!item) return;

  const containerRect = navContainer.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  const scrollLeft =
    navContainer.scrollLeft +
    (itemRect.left - containerRect.left) -
    navContainer.clientWidth / 2 +
    item.clientWidth / 2;

  navContainer.scrollTo({
    left: scrollLeft,
    behavior: "smooth",
  });
};

function swipertest() {  
  const slideWrap = document.querySelector(".scrollType04 .slide_wrap");
  const slideItems = document.querySelectorAll(".scrollType04 .slide_item");
  const navLinks = document.querySelectorAll(".scrollType04 .nav_link");
  const type4navCont = document.querySelector(".scrollType04 .slide_nav"); // 네비게이션 컨테이너

  let currentIndex = 0; // 현재 슬라이드 인덱스
  const totalSlides = slideItems.length; // 슬라이드 총 개수
  const slideWidth = slideItems[0].getBoundingClientRect().width; // 슬라이드의 정확한 너비
  let isSwiping = false; // 스와이프 중인지 확인
  let startX = 0; // 터치 시작 X 좌표
  let moveX = 0; // 터치 이동 거리

  // 1. 슬라이드 초기화
  slideWrap.style.width = `${slideWidth * totalSlides}px`; // 전체 슬라이드 너비 설정

  slideItems.forEach((item, index) => {
    item.style.width = `${slideWidth}px`; // 각 슬라이드 너비 설정
    item.style.left = `${index * slideWidth}px`; // 슬라이드의 초기 위치 설정
    item.style.position = "absolute"; // 모든 슬라이드 절대 위치로 설정
    item.style.transition = "transform 0.3s ease"; // 부드러운 전환 효과 추가
  });

  // 네비게이션 활성화 상태 업데이트 함수
  const updateActiveNav = (index) => {
    navLinks.forEach((link, idx) => {
      if (idx === index) {
        link.classList.add("is-active"); // 현재 활성화된 슬라이드에 클래스 추가
      } else {
        link.classList.remove("is-active"); // 나머지 슬라이드는 클래스 제거
      }
    });
  };

  // 초기 네비게이션 상태 설정
  updateActiveNav(currentIndex);
  scrollNavToActive(currentIndex, navLinks, type4navCont);

  // 2. 슬라이드 이동 함수
  const moveToSlide = (index) => {
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1)); // 인덱스가 범위를 벗어나지 않도록 제한
    const translateX = -(slideWidth * currentIndex); // 이동할 거리 계산
    slideWrap.style.transform = `translateX(${translateX}px)`; // 슬라이드 이동
    slideWrap.style.transition = "transform 0.3s ease"; // 부드러운 전환 추가
    updateActiveNav(currentIndex); // 네비게이션 상태 업데이트
    scrollNavToActive(currentIndex, navLinks, type4navCont); // 네비게이션 스크롤 이동
  };

  // 3. 터치 시작 이벤트
  const handleTouchStart = (e) => {
    isSwiping = true;
    startX = e.touches[0].clientX; // 터치 시작 위치 기록
    slideWrap.style.transition = "none"; // 터치 이동 중에는 전환 효과 제거
  };

  // 4. 터치 이동 이벤트
  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    moveX = e.touches[0].clientX - startX; // 이동 거리 계산
    const translateX = -(slideWidth * currentIndex) + moveX; // 이동 거리 반영
    slideWrap.style.transform = `translateX(${translateX}px)`; // 슬라이드 이동
  };

  // 5. 터치 종료 이벤트
  const handleTouchEnd = () => {
    if (!isSwiping) return;
    isSwiping = false;
    const threshold = slideWidth / 4; // 슬라이드 이동 기준 거리
    if (moveX < -threshold && currentIndex < totalSlides - 1) {
      // 다음 슬라이드로 이동
      moveToSlide(currentIndex + 1);
    } else if (moveX > threshold && currentIndex > 0) {
      // 이전 슬라이드로 이동
      moveToSlide(currentIndex - 1);
    } else {
      // 현재 슬라이드 유지
      moveToSlide(currentIndex);
    }
  };

  // 6. 네비게이션 버튼 클릭 이벤트
  navLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      moveToSlide(index);
    });
  });

  // 7. 이벤트 리스너 추가
  slideWrap.addEventListener("touchstart", handleTouchStart);
  slideWrap.addEventListener("touchmove", handleTouchMove);
  slideWrap.addEventListener("touchend", handleTouchEnd);
}

function swiperVueJStest() {
  const navLinks = document.querySelectorAll(".scrollType05 .swiper-pagination-bullet");
  const type4navCont = document.querySelector(".scrollType05 .swiper-pagination"); // 네비게이션 컨테이너

  let currentIndex = 0; // 현재 슬라이드 인덱스
  scrollNavToActive(currentIndex, navLinks, type4navCont);
}

const pagination = {
  clickable: true,
  renderBullet: (index, className) => `<span class="${className}">page${index + 1}</span>`,
};

// DOM이 로드된 후 모든 섹션 참조
onMounted(() => {
  // 기본 활성화된 섹션 설정
  showSection("test1", 0);

  document.querySelector('.c-header').classList.add('hidden');
});
</script>

<style lang="scss">
.c-header.hidden{display:none;}
.main{ 
  width: 100%; 
  position: relative;
}
nav{
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0 auto;
  padding: 8px;
  z-index: 100;
  background: white;
  .testNav{
    display: flex;
    align-items: center;
    overflow-x: scroll;
    gap: 8px;
    li{
      button{
        &.is-active {
          background-color: #303030; /* 활성화된 버튼 스타일 예시 */
          color: #fff;
        }
      }
    }
  }
}
section{
  overflow-x: hidden;
  padding: 0;
  @keyframes aniarrow {
    0%{ transform: translateY(0); }
    50%{ transform: translateY(-10%); }
    100%{ transform: translateY(0); }
  }
  article {
    display: none;
    &.is-show {
      display: block;
    }
    ~ article{ margin-top: 0; }
  }
}
// [1] 
.scrollType01 {
  .nav {
    width: 100%;
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    overflow-x: scroll;
    background-color: white;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;
      padding: 0;
      li {
        display: inline-block;
        padding: 5px;
      }
      a {
        cursor: pointer;
        display: block;
        height: 32px;
        padding: 0 12px;
        line-height: 32px;
        color: #323232;
        font-weight: bold;
        border-radius: 4px;
        transition: background-color 0.3s ease-in;
        &:hover,
        &:active,
        &:focus {
          background-color: rgba(184, 214, 168, 0.5);
        }
        &.active {
          background-color: rgba(184, 214, 168, 0.7);
        }
      }
    }
  }
  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    p {
      text-align: center;
      color: white;
      font-size: 3.5em;
      font-weight: bold;
      text-transform: uppercase;
    }
    &#one { background-color: #6c74a3; }
    &#two { background-color: #caba9a; }
    &#three { background-color: #e27f6e; }
    &#four { background-color: #77b6b2; }
    &#five { background-color: #9f96c9; }
  }
}

// [2] 
.scrollType02{  
  .nav {
    width: 24px;
    position: fixed;
    top: 50%;
    left: 5px;
    padding: unset;
    transform: translate(0, -50%);
    overflow: hidden;
    background-color: transparent;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      gap: 5px;
      margin: 0 auto;
      padding: 0;
      li { display: inline-block; margin: 5px; }
      a {
        cursor: pointer;
        width: 12px; height: 12px;
        display: block;
        border-radius: 50%;
        background-color: #eee;
        transition: background-color 0.3s ease-in;
        span{ 
          overflow: hidden;
          position: absolute;
          clip: rect(0, 0, 0, 0);
          clip-path: polygon(0 0, 0 0, 0 0);
          width: 1px;
          height: 1px;
          margin: -1px;
          white-space: nowrap;
        }
        &:hover,
        &:active,
        &:focus {
          background-color: rgba(36, 37, 35, 0.5);
        }
        &.active {
          background-color: rgba(36, 37, 35, 1);
        }
      }
    }
  }
  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    p {
      text-align: center;
      color: white;
      font-size: 3.5em;
      font-weight: bold;
      text-transform: uppercase;
    }
    &#one { background-color: #6ca36c; }
    &#two { background-color: #8985c0; }
    &#three { background-color: #4a5080; }
    &#four { background-color: #cf7c7c; }
    &#five { background-color: #beaf6a; }
  }
}

// [3] 
.scrollType03{
  background: #000;
    
  nav {
    width: max-content;
    height: 55px;
    position: fixed;
    bottom: 50px;
    top: unset;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    background: rgba(0,0,0,0.8);
    .nodes {
      position: relative;
      margin-top: -5px;
      margin-left: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // float: left;
      // &::before{ content:''; display: block; clear: both; }
    }
  }

  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    top: 14px;
    .red, .blue {
      width: 100%;
      height: 1px;
    }
    .red {
      background-color: rgb(75,18,2);
      background-image: filter-gradient(#4b1202, #fd8107, horizontal);
      background-image: background-image(linear-gradient(left,  rgba(253,129,7,1) 0%,rgba(253,129,7,1) 16%,rgba(224,58,13,1) 58%,rgba(253,129,7,1) 100%));
      &-container {
        overflow: hidden;
        height: 1px;
        width: 58px;
      } 
    }
    .blue {
      background-color: rgb(35,46,58);
      background-image: filter-gradient(#232e3a, #446b95, horizontal);
      background-image: background-image(linear-gradient(left,  rgba(35,46,58,1) 0%,rgba(92,125,159,1) 29%,rgba(24,55,87,1) 55%,rgba(68,107,149,1) 100%));
    }
  }

  .node {
    // margin-left: 5rem;
    margin-left: 7vw;
    width: 20px;
    height: 20px;
    margin-top: 5px;
    float: left;
    // margin-right: -10px;
    position: relative;
    &::before{ content:''; display: block; clear: both; }
    &.main{ margin-left: 0; }
    .splash {
      box-shadow: 0px 0px 8px 2px rgba(69, 174, 233, 0.53);
      transform: translateZ(0px) scale( 1 );
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      pointer-events: none;
      opacity: 1;
    }
    &.main,
    &.active {
      .active-circle {
        transform: scale(1);
        opacity: 1;
      }
      .splash {
        transition: transform 1200ms, opacity 1500ms;
        transform: translateZ(0px) scale( 2.5 );
        opacity: 0 !important;
      }
      .inactive-circle {
        transition: opacity 200ms;
        opacity: 0; 
      }
    }

    .active-circle {
      transition: all 300ms cubic-bezier(.63,.62,.48,1.84);
      transform: scale(0.7);
      position: absolute;
      opacity: 0;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: rgb(75,18,2);
      background-image: filter-gradient(#4b1202, #fd8107, horizontal);
      background-image: background-image(linear-gradient(left bottom,  rgba(75,18,2,1) 0%,rgba(224,58,13,1) 60%,rgba(253,129,7,1) 100%));
      .cover {
        transform: translateZ( 0px );
        width: 16px;
        height: 16px;
        background: black;
        border-radius: 100%;
        position: absolute;
        top: 2px;
        left: 2px;
      }
      .white {
        transition: all 300ms cubic-bezier(.63,.62,.48,1.84);
        width: 6px;
        height: 6px;
        background: #fff;
        border-radius: 100%;
        position: absolute;
        transform: translateX(5px) translateY(5px) scale(1);
      }
    }
    .inactive-circle {
      transition: all 300ms cubic-bezier(.63,.62,.48,1.84);
      width: 14px;
      height: 14px;
      display: block;
      background: #000;
      position: absolute;
      border-radius: 100%;
      border: 2px solid #5489b1;
      top: 3px;
      left: 3px;
    }

    &:hover {        
      $quickTransition: all 200ms cubic-bezier(.63,.62,.48,1.84);

      cursor: pointer;
      .active-circle {
        transition: $quickTransition;
        transform: scale(0.84);
        .white {
          transition: $quickTransition;
          transform: translateX(4.7px) translateY(5px) scale(1.42);	
        }
      }
      .inactive-circle {
        transition: $quickTransition;
        transform: scale( 0.85 );
      }
    }
  }

  .items {
    position: relative;    
    .item {
      position: relative;
      width: 100%;
      height: 100vh;      
      span {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        color: #fff;
        font-size: 160px;
      }  
    }
  }
}

// [4] 
.scrollType04 {
  .slide_nav{
    position: relative;
    z-index: 1;
    white-space: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    // -webkit-overflow-scrolling: touch;
    .nav_list{
      min-width: 100%;
      display: inline-flex;
      vertical-align: top;
      justify-content: space-between;
      padding: 0 10px;
      box-sizing: border-box;
    }
    .nav_item{
      position: relative;
      display: inline-block;
      vertical-align: top;
    }
    .nav_link{
      display: block;
      height: 54px;
      padding: 18px 16px 0;
      box-sizing: border-box;
      &.is-active{
        background-color: #ddd;
      }
    }
  }
  .slide_container{
    overflow: hidden;
    position: relative;
    height: 90vh;
    .slide_wrap{
      overflow: hidden;
      position: relative;
      height: 100%;
    }
    .slide_item{
      float: left;
      width: 100%;
      height: 100%;
      position: relative;
      -webkit-overflow-scrolling: touch;
      
      &::before{content:''; display: block; clear:both;}
      > p{ display:flex; justify-content:center; align-items: center; width:100%; height:100%;}
      &:nth-child(1){ background-color: rgb(44, 107, 42) }
      &:nth-child(2){ background-color: rgb(61, 78, 124) }
      &:nth-child(3){ background-color: rgb(128, 79, 121) }
      &:nth-child(4){ background-color: rgb(104, 112, 146) }
      &:nth-child(5){ background-color: rgb(151, 92, 112) }
      &:nth-child(6){ background-color: rgb(51, 133, 115) }
      &:nth-child(7){ background-color: rgb(115, 150, 70) }
    }
  }
}

// [5] 
.scrollType05{
  .swiper-pageType{
    .swiper-container{ display:flex; flex-direction: column-reverse; }
    .swiper-wrapper{
      height: 100vh;
      .swiper-slide{
        &:nth-child(1){ background-color: rgb(104, 112, 146); }
        &:nth-child(2){ background-color: rgb(104, 146, 122); }
        &:nth-child(3){ background-color: rgb(192, 171, 113); }
        &:nth-child(4){ background-color: rgb(124, 146, 104); }
        &:nth-child(5){ background-color: rgb(146, 104, 106); }
      }
    }
    .swiper-pagination{
      position: static;
      width:100%;
      display: flex;
      align-items: center;
      overflow-x: scroll;
      .swiper-pagination-bullet{
        width: auto; height: auto;
        padding: 8px 16px;
        margin: 0;
        opacity: 1;
        border-radius: unset;
        background-color: white;
        &.swiper-pagination-bullet-active{
          background-color: rgba(196, 196, 196, 0.7);
        }
      }
    }
  }
}

</style>
