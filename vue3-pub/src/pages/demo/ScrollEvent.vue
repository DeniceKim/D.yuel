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

      <section 
        class="kvisual" 
        v-if="articleTab != 'test5' && 
        articleTab != 'test8' && 
        articleTab != 'test9'"
      >
        <div class="maintxt">
          <p>scroll</p>
        </div>
      </section>

      <!-- 섹션 리스트 -->
      <section>
        <!-- [1] 스크롤 이벤트 -->
        <article 
          class="scrollType01" 
          :class="{ 'is-show': articleTab === 'test1' }"
          id="test1" 
        >
          <div class="card">Card 1</div>
          <div class="card">Card 2</div>
          <div class="card">Card 3</div>
          <div class="card">Card 4</div>
          <div class="card">Card 5</div>
          <div class="card">Card 6</div>
          <div class="card">Card 7</div>
          <div class="card">Card 8</div>
          <div class="card">Card 9</div>
          <div class="card">Card 10</div>
        </article>
        <!-- [2] 스크롤 이벤트 -->
        <article 
          class="scrollType02" 
          :class="{ 'is-show': articleTab === 'test2' }"
          id="test2" 
        >
          <div class="fade_section">section01</div>
          <div class="fade_section">section02</div>
          <div class="fade_section">section03</div>
          <div class="fade_section">section04</div>
        </article>
        <!-- [3] 스크롤 이벤트 -->
        <article 
          class="scrollType03" 
          :class="{ 'is-show': articleTab === 'test3' }"
          id="test3" 
        >
          <div class="scroll-container">
            <div class="scroll-element js-scroll fade-in"></div>
            <div class="scroll-caption">
              페이드인
            </div>
          </div>
          <div class="scroll-container">
            <div class="scroll-element js-scroll fade-in-bottom"></div>
            <div class="scroll-caption">
              페이드인 + 슬라이드 하면서 아래에서 나타남
            </div>
          </div>
          <div class="scroll-container">
            <div class="scroll-element js-scroll slide-left"></div>
            <div class="scroll-caption">
              페이드인 + 슬라이드 하면서 왼쪽에서 나타남
            </div>
          </div>
          <div class="scroll-container">
            <div class="scroll-element js-scroll slide-right"></div>
            <div class="scroll-caption">
              페이드인 + 슬라이드 하면서 오른쪽에서 나타남
            </div>
          </div>
        </article>
        <!-- [4] 스크롤 이벤트 -->
        <article 
          class="scrollType04" 
          :class="{ 'is-show': articleTab === 'test4' }"
          id="test4" 
        >
          <div class="card_area">
            <div class="card"><span>Card 1</span></div>
            <div class="card"><span>Card 2</span></div>
            <div class="card"><span>Card 3</span></div>
            <div class="card"><span>Card 4</span></div>
            <div class="card"><span>Card 5</span></div>
            <div class="card"><span>Card 6</span></div>
            <div class="card"><span>Card 7</span></div>
            <div class="card"><span>Card 8</span></div>
          </div>
          <div class="footer">end</div>
        </article>
        <!-- [5] 스크롤 이벤트 -->
        <article 
          class="scrollType05" 
          :class="{ 'is-show': articleTab === 'test5' }"
          id="test5" 
        >
        <div class="testmain">
          <div class="scroll_type_main">
            <div class="kv_main">
              <div class="info_view">
                <div class="key_view">
                  <p class="key_txt">Main</p>
                  <span class="sub_txt scroll_veiw">서브 타이틀 <br> 서브 타이틀2</span>
                  <span class="sub_txt main_veiw">서브 타이틀 | 서브 타이틀2</span>
                </div>
                <div class="img_view">
                  <span class="sub_img main_veiw">
                    <i class="ri-polaroid-2-fill"></i>
                  </span>
                  <span class="sub_img scroll_veiw">
                    <i class="ri-image-circle-fill"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="sub_main"></div>
          </div>
        </div>
        </article>
        <!-- [6] 가로 스크롤 이벤트 -->
        <article 
          class="scrollType06" 
          :class="{ 'is-show': articleTab === 'test6' }"
          id="test6" 
        >
          <div class="dummy">
            <span>Dummy content</span>
          </div>
          <div class="horizontal-scroll js-horizontal-scroll">
            <div class="container">
                <div class="slide">
                  <span>Slide 1</span>
              </div>
                <div class="slide">
                  <span>Slide 2</span>
              </div>
                <div class="slide">
                  <span>Slide 3</span>
              </div>
                <div class="slide">
                  <span>Slide 4</span>
              </div>
                <div class="slide">
                  <span>Slide 5</span>
              </div>
            </div>
          </div>
          <div class="dummy">
            <span>Dummy content</span>
          </div>
        </article>
        <!-- [7] 무한 스크롤 이벤트 -->
        <article 
          class="scrollType07" 
          :class="{ 'is-show': articleTab === 'test7' }"
          id="test7" 
        >
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </article>
        <!-- [8] 스크롤 이벤트 -->
        <article 
          class="scrollType08" 
          :class="{ 'is-show': articleTab === 'test8' }"
          id="test8" 
        >
          <div class="container">
            <div class="sections">
              <div class="section active" data-bgcolor="#364652">
                <h2 class="section--header">Bronte, Australia</h2>
                <div class="section--image">
                  <img src="https://images.unsplash.com/photo-1532275948649-7d97f309ef16?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db3d266a0c1ec46b95f03a271a78603f&auto=format&fit=crop&w=2250&q=80" alt="" />
                </div>
              </div>
              <div class="section" data-bgcolor="#C1A5A9">
                <h2 class="section--header">Kénitra, Morocco</h2>
                <div class="section--image">
                  <img src="https://images.unsplash.com/photo-1532173311168-91e999ce4e47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf6ff267733890306ca709fa2184dd3a&auto=format&fit=crop&w=1301&q=80" alt="" />
                </div>
              </div>
              <div class="section" data-bgcolor="#4ECDC4">
                <h2 class="section--header">Black Mountain, CA</h2>
                <div class="section--image">
                  <img src="https://images.unsplash.com/photo-1532275948649-7d97f309ef16?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db3d266a0c1ec46b95f03a271a78603f&auto=format&fit=crop&w=2250&q=80" alt="" />
                </div>
              </div>
              <div class="section" data-bgcolor="#D4CBE5">
                <h2 class="section--header">Zermatt, Switzerland</h2>
                <div class="section--image">
                  <img src="https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-0.3.5&s=a21f754569632b81fd47dcaafe30b7c3&auto=format&fit=crop&w=2571&q=80" alt="" />
                </div>
              </div>
              <div class="section" data-bgcolor="#EDD4B2">
                <h2 class="section--header">Yellowstone, USA</h2>
                <div class="section--image">
                  <img src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0a5b239a157c3a39cf32283c50f9cd0c&auto=format&fit=crop&w=934&q=80" alt="" />
                </div>
              </div>
            </div>
          </div>
        </article>
        <!-- [9] 스태킹 스크롤 이벤트 -->
        <article 
          class="scrollType09" 
          :class="{ 'is-show': articleTab === 'test9' }"
          id="test9" 
        >
          <div class="header">Header</div>
          <div class="container">
            <div class="main-container">
              <div class="card card-one">Card One</div>
            </div>
            <div class="main-container">
              <div class="card card-two">Card Two</div>
            </div>
            <div class="main-container">
              <div class="card card-three">Card Three</div>
            </div>
            <div class="main-container">
              <div class="card card-four">Card Four</div>
            </div>
          </div>
          <div class="footer">footer</div>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const articleTab = ref('test1'); 

// 버튼과 섹션 데이터
const buttons = [
  { id: "button1", label: "tab01", controls: "test1" },
  { id: "button2", label: "tab02", controls: "test2" },
  { id: "button3", label: "tab03", controls: "test3" },
  { id: "button4", label: "tab04", controls: "test4" },
  { id: "button5", label: "tab05", controls: "test5" },
  { id: "button6", label: "tab06", controls: "test6" },
  { id: "button7", label: "tab07", controls: "test7" },
  { id: "button8", label: "tab08", controls: "test8" },
  { id: "button9", label: "tab09", controls: "test9" },
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
  
  if(articleTab.value === 'test1'){
    window.addEventListener("scroll", onScroll);
  }else if(articleTab.value === 'test2'){
    window.addEventListener("scroll", scrollFadeIn);
  }else if(articleTab.value === 'test3'){
    window.addEventListener("scroll", scrollFadeIn2);
  }else if(articleTab.value === 'test4'){
    window.addEventListener("scroll", scrollSticy);
  }else if(articleTab.value === 'test5'){
    scrollSticy();
  }else if(articleTab.value === 'test6'){
    window.addEventListener("scroll", horizonScroll);
  }else if(articleTab.value === 'test7'){
    infiniteScroll();
  }else if(articleTab.value === 'test8'){
    window.addEventListener("scroll", scrollBG);
  }
}


//[1] 스크롤 이벤트 
function animateInView() {
  const scrolledAmount = window.scrollY;
  const bottomOfWindow = scrolledAmount + window.innerHeight;  
  const cards = document.querySelectorAll(".scrollType01 .card");

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top + scrolledAmount;

    if (cardTop <= bottomOfWindow) {
      card.classList.add("animate");
    } else {
      card.classList.remove("animate"); // For testing purposes
    }
  });
}
function onScroll() {
  animateInView();
}

//[2] 스크롤 이벤트
function scrollFadeIn() {
  // 'fade_section' 클래스를 가진 모든 요소를 가져옵니다.
  const fadeinItems = document.querySelectorAll('.fade_section');
  
  // 요소를 순회하며 동작을 수행합니다.
  fadeinItems.forEach((item) => {
  // 요소의 위치와 화면 크기를 계산합니다.
    const rect = item.getBoundingClientRect(); // 요소의 뷰포트 내 위치
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 현재 스크롤 위치
    const elemPos = rect.top + scrollTop; // 문서 기준 요소의 위치
    const windowHeight = window.innerHeight; // 창 높이

    // 요소가 화면에 나타나는 조건
    if (scrollTop > elemPos - windowHeight + 100) {
      item.classList.add('scrollin'); // 클래스 추가
    }else if(scrollTop === 0) {
      item.classList.remove('scrollin'); // 클래스 제거
    }
  });
}

// [3] 스크롤 이벤트 
function scrollFadeIn2() {
  const scrollElements = document.querySelectorAll(".js-scroll");

  let throttleTimer = false;

  // 스로틀 함수
  const throttle = (callback, time) => {
    if (!throttleTimer) {
      throttleTimer = true;
      setTimeout(() => {
        callback();
        throttleTimer = false;
      }, time);
    }
  };

  // 요소가 화면에 보이는지 확인
  const isInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return elementTop <= viewportHeight / dividend;
  };

  // 스크롤 애니메이션 처리
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      el.classList.toggle("scrolled", isInView(el, 1.25));
    });
  };

  // 스크롤 이벤트
  window.addEventListener("scroll", () => throttle(handleScrollAnimation, 250));

}

// [5] 스크롤 이벤트 
function scrollSticy() {
  document.addEventListener("scroll", () => {
  const subImgMainView = document.querySelector(".sub_img.main_veiw");
  const subImgScrollView = document.querySelector(".sub_img.scroll_veiw");

  const mainScroll = document.querySelector(".sub_txt.main_veiw");
  const scrollView = document.querySelector(".sub_txt.scroll_veiw");

  const kvMain = document.querySelector(".scrollType05 .kv_main");
  const scrollTypeMain = document.querySelector(".scrollType05 .scroll_type_main");
  const offset = 80;
  const kvMainRect = kvMain.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (window.pageYOffset > 50) {
    subImgMainView.style.animation = "scrollMain 2s forwards";
    subImgScrollView.style.animation = "opacityAdd 3s 0.5s forwards";
    mainScroll.style.animation = "opacityRemove 2s forwards";
    scrollView.style.animation = "opacityAdd 2s forwards";
  } else {
    subImgMainView.style.animation = "scrollMainRevers 2s forwards";
    subImgScrollView.style.animation = "opacityRemove 2s forwards";
    mainScroll.style.animation = "opacityAdd 2s forwards";
    scrollView.style.animation = "opacityRemove 2s forwards";
  }
  
  if (window.scrollY > offset) {
    kvMain.classList.add("sticky-active");
    scrollTypeMain.style.background = "rgb(81 147 195)"
  } else {
    kvMain.classList.remove("sticky-active");
    scrollTypeMain.style.background = "rgb(3, 3, 53)"
  }

  // // Check if the .kv_main is in view
  // if (kvMainRect.top < windowHeight && kvMainRect.bottom > 0) {
  //   // Apply animations
  //   subImgMainView.style.animation = "scrollMain 1s forwards";
  //   subImgScrollView.style.animation = "scrollVeiw 1s forwards";
  //   mainScroll.style.animation = "scrollMain 1s forwards";
  //   scrollView.style.animation = "scrollVeiw 1s forwards";
  // } else {
  //   // Remove animations
  //   subImgMainView.style.animation = "none";
  //   subImgScrollView.style.animation = "none";
  //   mainScroll.style.animation = "none";
  //   scrollView.style.animation = "none";
  // }
});

}

// [6] 가로 스크롤
function horizonScroll() {
  // 컨테이너 위치를 계산하는 함수
  const calculateContainerPosition = () => {
    const scrolled = componentTop * -100 / (totalWidth - windowHeight);
    container.style.transform = `translateX(-${scrolled}%)`;
  };

  // 요소 선택
  const horizontal = document.querySelector('.scrollType06 .js-horizontal-scroll');
  const container = document.querySelector('.scrollType06 .container');

  // 초기 변수 선언
  let windowHeight = 0;
  let totalWidth = 0;
  let componentTop = 0;
  let componentBottom = 0;

  // 요소가 존재하는지 확인
  if (!container || !horizontal) {
    console.error('Required elements not found: .scrollType06 .container or .scrollType06 .js-horizontal-scroll');
  } else {
    // DOMContentLoaded 이벤트 핸들러
    if (container.children.length > 0) {
      totalWidth = (container.children.length - 1) * window.innerWidth;
      horizontal.style.height = `${totalWidth}px`;
      windowHeight = window.innerHeight;
    } else {
      console.error('No child elements found in the container.');
    }
    // scroll 이벤트 핸들러 (throttle 적용)
    let scrollTimeout = null;

    window.addEventListener('scroll', () => {
      if (scrollTimeout) return;
        scrollTimeout = setTimeout(() => {
        scrollTimeout = null;

        componentTop = horizontal.getBoundingClientRect().top;
        componentBottom = horizontal.getBoundingClientRect().bottom + horizontal.getBoundingClientRect().height;

        if (componentTop <= 0 && componentBottom > windowHeight) {
          // 고정 상태 (가로 스크롤 가능)
          container.classList.add('sticky-top');
          container.classList.remove('sticky-bottom');
          calculateContainerPosition();
        } else if (componentBottom <= windowHeight) {
          // 고정 해제 (하단 상태)
          container.classList.add('sticky-bottom');
          container.classList.remove('sticky-top');
          container.style.transform = 'translateX(-100%)';
        } else {
          // 초기 상태 (스크롤 상단에 있을 경우)
          container.classList.remove('sticky-top');
          container.classList.remove('sticky-bottom');
          container.style.transform = 'translateX(0)';
        }
      }, 100); // 100ms 간격으로 실행 제한
    });
  }  
}

// [7] 무한 스크롤
function infiniteScroll() {
  const ul = document.querySelector('.scrollType07 ul');
  let li;
  let count = ul.children.length;

  document.addEventListener('scroll', () => {
    //window height + window scrollY 값이 document height보다 클 경우,
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      li = ul.appendChild(document.createElement('li'));
      li.textContent = ++count;
    }
  });
}

// [8] 스크롤 백그라운드 컬러
function scrollBG(){
  const images = document.querySelectorAll('.js-lazyload-image');
  const sections = document.querySelectorAll('.section');

  let config = {
    rootMargin: '0px',
    threshold: 0
  };

  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intersectionHandler(entry);
      }
    });
  }, config);

  sections.forEach(section => {
    observer.observe(section);
  });

  function intersectionHandler(entry) {
    const current = document.querySelector('.section.active');
    const next = entry.target;
    const header = next.querySelector(".section--header");

    if (current) {
      current.classList.remove('active');
    }
    if (next) {
      next.classList.add('active');
      const bgColor = next.dataset.bgcolor || "#ffffff"; // 기본 색상: 흰색
      document.body.style.setProperty("--color-bg", bgColor);
    }
  }

  images.forEach(image => {
    observer.observe(image);
  });

  function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) { return; }
    img.src = src;
  }

}


// DOM이 로드된 후 모든 섹션 참조
onMounted(() => {
  // 기본 활성화된 섹션 설정
  showSection("test1", 0);
  document.querySelector('.c-header').classList.add('hidden');
});
onBeforeUnmount(() => {
  window.addEventListener('load', scrollFadeIn);
  window.addEventListener('scroll', scrollFadeIn);
  window.removeEventListener("scroll", onScroll);
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
  &.kvisual{
    position: relative;
    height: 100vh;
    .maintxt{
      position: absolute;
      left: 50%; bottom: 25%;
      transform: translate(-50%, 0);
      p{
        &::after{
          content:'↓';
          display: inline-block;
          margin-left: 4px;
          animation: aniarrow 1.2s ease-in-out infinite;
        }
      }
    }
  }
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
  }
}
// [1] 스크롤 이벤트 
.scrollType01{
  .card { 
    background: indianred;
    font-family: sans-serif;
    color: white;
    padding: 25px; 
    margin:20px; 
    height:300px;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s ease;
  }

  .animate { 
      transform: translateY(0px);
      opacity: 1;
  }
}
// [2] 스크롤 이벤트 
.scrollType02{
  .fade_section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;
    opacity: 0;
    transform: translate(0, 50px);
    transition: all 0.5s;
    
    &.scrollin {
      opacity: 1;
      transform: translate(0, 0);
    }    
    &:nth-child(1) { background: #333; }
    &:nth-child(2) { background: #444; }
    &:nth-child(3) { background: #555; }
    &:nth-child(4) { background: #666; }
  }
}
// [3] 스크롤 이벤트 
.scrollType03{
  .scroll-container {
    height: 100vh;
    min-height: 450px;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    &:nth-of-type(1) { background-color: #d6bae0; }
    &:nth-of-type(2) { background-color: #8cceb5; }
    &:nth-of-type(3) { background-color: #91b7da; }
    &:nth-of-type(4) { background-color: #ffc7c7; }
    &:nth-of-type(even) { flex-direction: row-reverse; }
  }

  .scroll-element,
  .scroll-caption {
    width: 50%;
  }

  .scroll-element {
    min-height: 300px;
    height: 100%;
    background-color: #eef1f5;
  }

  .scroll-caption {
    margin: 1rem;
  }

  @media screen and (max-width: 650px) {
    .scroll-container,
    .scroll-container:nth-of-type(even) {
      flex-direction: column;
      align-content: inherit;
    }

    .scroll-element {
      height: 100%;
    }

    .scroll-element,
    .scroll-caption {
      width: 100%;
    }
  }
  /**Styling scrollable elements*/
  .js-scroll {
    opacity: 0;
    transition: opacity 500ms;
    &.scrolled {
      opacity: 1;
      &.fade-in { animation: fade-in 1s ease-in-out both; }
      &.fade-in-bottom { animation: fade-in-bottom 1s ease-in-out both; }
      &.slide-left { animation: slide-in-left 1s ease-in-out both; }
      &.slide-right { animation: slide-in-right 1s ease-in-out both; }
    }
  }

  @keyframes slide-in-left {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-right {
    0% {
      transform: translateX(100px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fade-in-bottom {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
// [4] 스크롤 이벤트 (cssonly)
.scrollType04{
  .card_area{
    background: #020520;
    height: 100vh;
    perspective: 500px;
    overflow-x: hidden;
    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    .card{
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;

      $photos: 10;
      @for $i from 1 through $photos {
        &:nth-child(#{$i}) {
          span {
            $rotation: calc(($i - 1)/ ($photos - 1)) - 0.5;
            transform: scale(0.6) rotate(calc($rotation * 25deg));
          }
        }
      }
      span{
        display: block;
        width: 600px; height: 450px;
        background: rgb(255, 176, 162);
        border: 1px solid black;
      }
    }
  }
  .footer{ 
    height: 50vh; 
    &.in-view {
      transition: opacity 0.3s ease, transform 0.3s ease;
      opacity: 1;
      transform: translateY(0);
    }
  }
}
// [5] 스크롤 이벤트 
.scrollType05{
  .scroll_type_main{
    padding: 50px 0;
    background: rgb(3, 3, 53);
    transition: all 0.3s ease-in-out;
    color: white;
    .kv_main{
      width: 100%; 
      position: relative;
      padding: 12px 0;
      z-index: 10; /* 필요에 따라 다른 요소 위로 배치 */
      transition: all 0.3s ease-in-out;
    &.sticky-active {
      position: fixed;
      top: 20px;
      .info_view{
        height: 60px;
      }
    }
      .info_view{
        display: inline-flex;
        justify-content: space-between;
        height: 100px;
        gap: 8px;
        background-color: rgba(0,0,0,0.5);
        transition: all 0.3s ease-in-out;
      }
      .key_view{
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        .key_txt{
          display: inline-block;
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
        }
        .sub_txt{
          &.main_veiw{
            width: 100%;
            display: block;
            margin-top: 8px;
            opacity: 1;
          }
          &.scroll_veiw{
            display: inline-block;
            margin-left: 8px;
            vertical-align: text-bottom;
            opacity: 0;
          }
        }
      }
      .img_view{
        display: block;
        width: 100px;
        height: 100px;
        padding: 4px;
        position: absolute;
        top: 0; right: 0;
        .sub_img{
          display: block;
          position: absolute;
          top:0; left:0;
          &.main_veiw{
            opacity: 1;
          }
          &.scroll_veiw{
            opacity: 0;
          }
        }
        i{
          display: inline-block;
          background-repeat: no-repeat;
          background-size: cover;
          &::before{display: none;}
          &.ri-polaroid-2-fill{
            width: 100px; height: 100px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='rgba(255,255,255,1)'%3E%3Cpath d='M3 3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44495 21 3.9934V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934ZM6 17V19H18V17H6ZM5 5V7H7V5H5ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z'%3E%3C/path%3E%3C/svg%3E");
          }
          &.ri-image-circle-fill{
            width: 80px; height: 80px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='rgba(255,255,255,1)'%3E%3Cpath d='M19.5762 14.5759L15.7073 10.707C15.3168 10.3164 14.6836 10.3164 14.2931 10.707L6.86516 18.1349C5.11372 16.6674 4 14.4637 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.9012 19.851 13.7676 19.5762 14.5759ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10Z'%3E%3C/path%3E%3C/svg%3E");
          }
        }
      }
    }
    .sub_main{
      height: 100vh;
    }
  }
  @keyframes scrollMain {
    0%{
      transform: scale(1); 
      opacity: 1;
    }
    100%{ 
      transform: scale(0.5) translate(45px, -25px);
      opacity: 0;
    }
  }
  @keyframes scrollMainRevers {
    0%{
      transform: scale(0.5) translate(45px, -25px);
      opacity: 0;
    }
    100%{ 
      transform: scale(1); 
      opacity: 1;
    }
  }
  @keyframes opacityAdd {
    0%{ opacity: 0; }
    100%{ opacity: 1; }
  }
  @keyframes opacityRemove {
    0%{ opacity: 1; }
    100%{ opacity: 0; }
  }
}
// [6] 가로 스크롤 이벤트
.scrollType06{
  .dummy { height: 100vh; }
  .horizontal-scroll { position: relative; }
  .container {
    display: flex;
    height: 100vh;
    left: 0;
    overflow: hidden;
    position: absolute;
    // right: 0;
    top: 0;    
    &.sticky-top { position: fixed; }
    &.sticky-bottom {
      bottom: 0;
      top: auto;
    }
  }
  .slide {
    height: 100%;
    min-width: 100vw;
    &:nth-child(1) { background: #FDDFDF; }
    &:nth-child(2) { background: #FCF7DE; }
    &:nth-child(3) { background: #DEFDE0; }
    &:nth-child(4) { background: #DEF3FD; }
    &:nth-child(5) { background: #F0DEFD; }
  }
  .dummy, 
  .slide {
    align-items: center;
    display: flex;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 60px;
    justify-content: center;
  }
}
// [7] 무한 스크롤 이벤트
.scrollType07{
  ul {
    padding-left: 0;
    li {
      background-color: pink;
      margin-bottom: 20px;
      list-style: none;
      text-align: center;
      color: #fff;
      font-size: 100px;
      padding: 100px 0;
      &:nth-child(2n) {
        background-color: skyblue;
      }
    }
  }
}
//[8]
.scrollType08{

	background-color: #fff;
	background: var(--color-bg);
  transition: background 1s;
  
  .sections {
    position: relative;
    display: block;
    padding: 0 2vmax;
  }

  .section {
    position: relative;
    min-height: 100vh;
    &.active{
      opacity: 1;
      .section--image{
        opacity: 1;
      }
      .section--header{
        animation-name: fadeInUp;
      }
    }
  }
  .section--image {
    display: block;
    position: relative;
    max-width: 100%;
    margin: 10vh 0 30vh auto;
    opacity: 0;
    transition: opacity 1s;    
    img {
      display: block;
      position: relative;
      max-width: 90%;
      max-height: 100vh;
      margin: 0 0 0 auto;
    }
  }
  .section--header {
    font-size: 2rem;
    position: absolute;
    bottom: 30vmax;
    left: 0;
    padding-left: 5vmax;
    z-index: 1000;
    line-height: 1;
    font-weight: 300;
    opacity: 0;
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @keyframes fadeInUp{
    0% {
      transform: translate3d(0,55%,0);
      opacity:0;
    } to {
      opacity:1;
      transform:translate3d(0,0,0);
    }
  }
}
//[9] stacking card on scroll
.scrollType09{
  
  .container {
    background-color: #fff;
    height: 80vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .header {
    background-color: #ffddd6;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
  }
  .card {
    width: 100%;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    &.card-one { background-color: #b8ead9; }
    &.card-two { background-color: #f3dbcf; }
    &.card-three { background-color: #6a5eef; }
    &.card-four { background-color: #baf6dc; }
  }
  .footer{
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
