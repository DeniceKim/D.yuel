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
        <!-- [1] Parallax Scroll (css + js) -->
        <article 
          class="scrollType01" 
          :class="{ 'is-show': articleTab === 'test1' }"
          id="test1" 
        >
          <div class="container">
            <div class="background">
              <div class="content-wrapper">
                <p class="content-title">Full Page Parallax Effect</p>
                <p class="content-subtitle">Scroll down and up to see the effect!</p>
              </div>
            </div>
            <div class="background">
              <div class="content-wrapper">
                <p class="content-title">Cras lacinia non eros nec semper.</p>
                <p class="content-subtitle">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.</p>
              </div>
            </div>
            <div class="background">
              <div class="content-wrapper">
                <p class="content-title">Etiam consequat lectus.</p>
                <p class="content-subtitle">Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus.</p>
              </div>
            </div>
          </div>
        </article>
        <!-- [2] Parallax Scroll (pure css / background-attachment: fixed) -->
        <article 
          class="scrollType02" 
          :class="{ 'is-show': articleTab === 'test2' }"
          id="test2" 
        >
          <div class="bgimg type1">
            <div class="caption">
              <span class="border">SCROLL DOWN</span>
            </div>
          </div>
          <div class="txtboxcont">
            <h3>Parallax Demo</h3>
            <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. 
            </p>
            <p>
              Scroll up and down to really get the feeling of how Parallax Scrolling worksScroll up and down to really get the feeling of how Parallax Scrolling works
              Scroll up and down to really get the feeling of how Parallax Scrolling works
              <br>
              <br>
              Scroll up and down to really get the feeling of how Parallax Scrolling works
            </p>
          </div>
          <div class="bgimg type2">
            <div class="caption">
              <span class="border">LESS HEIGHT</span>
            </div>
          </div>
          <div class="txtarea">
            <div class="txtboxcont">
              <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
          </div>
          <div class="bgimg type3">
            <div class="caption">
              <span class="border">SCROLL UP</span>
            </div>
          </div>
          <div class="txtarea">
            <div class="txtboxcont">
              <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
            </div>
          </div>

          <div class="bgimg type1">
            <div class="caption">
              <span class="border">End</span>
            </div>
          </div>
        </article>
        <!-- [3] Parallax Scroll (pure css / background-attachment: fixed) -->
        <article 
          class="scrollType03" 
          :class="{ 'is-show': articleTab === 'test3' }"
          id="test3" 
        >
          <div class="section-type1">
            <div class="inner">top</div>
          </div>
          <div class="section-type2">
            <div class="inner">
              <div class="medal">
                <div class="front">3d테스트 앞</div>
                <div class="back">3d테스트 뒤</div>
              </div>
            </div>
          </div>
          <div class="section-type3">
            <div class="inner">bottom</div>
          </div>
        </article>
        <!-- [4] Parallax Scroll (pure css / transform-style: preserve-3d + background-attachment: fixed + before) -->
        <article 
          class="scrollType04" 
          :class="{ 'is-show': articleTab === 'test4' }"
          id="test4" 
        >
          <div class="wrap">
            <div id="title" class="slide header">
              <h1>Pure CSS Parallax</h1>
            </div>
  
            <div id="slide1" class="slide">
              <div class="title">
                <strong>Slide 1</strong>
                <p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
              </div>
            </div>
  
            <div id="slide2" class="slide">
              <div class="title">
                <strong>Slide 2</strong>
                <p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
              </div>
              <img src="https://cdn.pixabay.com/photo/2017/08/01/23/51/apple-2568755_960_720.jpg" alt="">
              <img src="https://cdn.pixabay.com/photo/2020/05/31/16/53/bookmarks-5243253_960_720.jpg" alt=""> 
            </div>
  
            <div id="slide3" class="slide">
              <div class="title">
                <strong>Slide 3</strong>
                <p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
              </div>
            </div>
  
            <div id="slide4" class="slide header">
                <p>The End</p>
            </div>
          </div>
        </article>
        <!-- [5] Parallax Scroll (pure css) / transform-style: preserve-3d -->
        <article 
          class="scrollType05" 
          :class="{ 'is-show': articleTab === 'test5' }"
          id="test5" 
        >
          <div id="parallax-wrapper">
            <div id="parallax-A" class="parallax">A</div>
            <div id="parallax-B" class="parallax">B</div>
            <div id="parallax-C" class="parallax">C</div>
            <div id="parallax-D" class="parallax">D</div>
          </div>
        </article>
        <!-- [6] Parallax Scroll (pure css) / transform-style: preserve-3d -->
        <article 
          class="scrollType06" 
          :class="{ 'is-show': articleTab === 'test6' }"
          id="test6" 
        >
        <div class="container">
          <p class="item">Parallax</p>
          <p class="item">text1</p>
          <p class="item">text2</p>
          <p class="item">text3</p>
          <img class="item" src="https://cdn.pixabay.com/photo/2016/10/18/19/21/flock-1751142_640.png" alt="" />
          <img class="item" src="https://cdn.pixabay.com/photo/2023/04/02/01/38/birds-7893438_640.png" alt="" />
          <img class="item" src="https://cdn.pixabay.com/photo/2018/04/12/14/03/silhouette-3313486_640.png" alt="" />
          <img class="item" src="https://cdn.pixabay.com/photo/2018/04/28/15/24/silhouette-3357488_640.png" alt="" />
          <img class="item" src="https://cdn.pixabay.com/photo/2017/09/18/22/56/silhouette-2763513_640.png" alt="" />
          <img class="item" src="https://cdn.pixabay.com/photo/2016/04/01/11/29/animal-1300361_640.png" alt="" />
        </div>
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
  
  if(articleTab.value === 'test1'){
    scrollTest1();
  } else if(articleTab.value === 'test5'){
    // body.classList.add('preserve3d');
  }else{
    // body.classList.remove('preserve3d');
  }
  //else if(articleTab.value === 'test3'){
  //   window.addEventListener("scroll", scrollFadeIn2);
  // }else if(articleTab.value === 'test4'){
  //   window.addEventListener("scroll", scrollSticy);
  // }
}

function scrollTest1() {
  let ticking = false;
  let currentSlide = 0;
  const slides = document.querySelectorAll(".background");
  const totalSlides = slides.length;
  const scrollSensitivity = 30;
  const slideLockDuration = 600;

  let isDragging = false;
  let startY = 0;

  // 슬라이드 이동 처리
  function changeSlide(delta) {
    if (ticking) return;

    // 스크롤 방향에 따른 슬라이드 이동
    if (delta > scrollSensitivity && currentSlide > 0) {
      currentSlide--;
      moveSlide("up");
    } else if (delta < -scrollSensitivity && currentSlide < totalSlides - 1) {
      currentSlide++;
      moveSlide("down");
    }

    ticking = true;
    setTimeout(() => (ticking = false), slideLockDuration);
  }

  // 슬라이드 이동 애니메이션
  function moveSlide(direction) {
    if (direction === "down") {
      slides[currentSlide - 1]?.classList.remove("up-scroll");
      slides[currentSlide - 1]?.classList.add("down-scroll");
    } else {
      slides[currentSlide]?.classList.remove("down-scroll");
      slides[currentSlide]?.classList.add("up-scroll");
    }
  }

  // 스크롤 이벤트 핸들러
  function handleScroll(event) {
    const delta = -event.deltaY; // 부호 반전하여 스크롤 방향 수정
    changeSlide(delta);
  }

  // 드래그 및 터치 시작
  function handleStart(event) {
    isDragging = true;
    startY = event.type === "touchstart" ? event.touches[0].clientY : event.clientY;
  }

  // 드래그 및 터치 이동
  function handleMove(event) {
    if (!isDragging) return;

    const currentY = event.type === "touchmove" ? event.touches[0].clientY : event.clientY;
    const delta = currentY - startY; // 드래그 방향을 올바르게 계산 (수정)

    if (Math.abs(delta) > scrollSensitivity) {
      changeSlide(delta); // 계산된 delta 값을 그대로 전달
      isDragging = false; // 한 번만 처리
    }
  }

  // 드래그 및 터치 종료
  function handleEnd() {
    isDragging = false;
  }

  // 이벤트 리스너 등록
  const mousewheelEvent = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "wheel";
  window.addEventListener(mousewheelEvent, handleScroll, { passive: true });
  window.addEventListener("mousedown", handleStart);
  window.addEventListener("mousemove", handleMove);
  window.addEventListener("mouseup", handleEnd);

  // 터치 이벤트 등록
  window.addEventListener("touchstart", handleStart, { passive: true });
  window.addEventListener("touchmove", handleMove, { passive: true });
  window.addEventListener("touchend", handleEnd);
}


// DOM이 로드된 후 모든 섹션 참조
onMounted(() => {
  // 기본 활성화된 섹션 설정
  showSection("test1", 0);
  document.querySelector('.c-header').classList.add('hidden');
});
onBeforeUnmount(() => {
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
  }
}
// [1] Parallax Scroll (css + js)  
.scrollType01 {
  // ------------- MIXINS ------------- //
  @mixin transition($time, $property: all, $easing: ease-in) {
    transition: $property $time $easing;
  }

  // ------------- VARIABLES ------------- //
  $parallax-offset: 30vh;
  $content-offset: 40vh;
  $transition-speed: 1.2s;
  $slide-number: 3;

  .background {
    @include transition($transition-speed, all, cubic-bezier(0.22, 0.44, 0, 1));
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden;
    will-change: transform;
    backface-visibility: hidden;
    height: calc(100vh + #{$parallax-offset}); // calc() 안에 SCSS 변수를 보간 처리
    position: fixed;
    width: 100%;
    transform: translateY(#{$parallax-offset});
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
    &:first-child {
      background-image: url(https://i.postimg.cc/kXq9Qmnj/bgd1.jpg);
      transform: translateY(calc(-#{$parallax-offset} / 2)); // 보간 처리
      .content-wrapper { transform: translateY(calc(#{$parallax-offset} / 2)); } // 보간 처리
    }
    &:nth-child(2) { background-image: url(https://i.postimg.cc/W14vywqg/photo-1424746219973-8fe3bd07d8e3.jpg); }
    &:nth-child(3) { background-image: url(https://i.postimg.cc/TY0xQ41T/photo-1433840496881-cbd845929862.jpg); }
  }

  /* Set stacking context of slides */
  @for $i from 1 through $slide-number + 1 {
    .background:nth-child(#{$i}) {
      z-index: #{$slide-number + 1 - $i}; // 변수 보간 처리
    }
  }
  .content {
    &-wrapper {
      @include transition(calc(#{$transition-speed} + 0.5s), all, cubic-bezier(0.22, 0.44, 0, 1)); // 보간 처리
      height: 100vh;
      display: flex;
      justify-content: center;
      text-align: center;
      flex-flow: column nowrap;
      color: #fff;
      font-family: Montserrat;
      text-transform: uppercase;
      transform: translateY(#{$content-offset}); // 보간 처리
      will-change: transform;
      backface-visibility: hidden;
    }
    &-title {
      font-size: 12vh;
      line-height: 1.4;
    }
  }

  // ------------- SET TRANSFORM VALUES ------------- //

  .background.up-scroll {
    transform: translate3d(0, calc(-1 * #{$parallax-offset} / 2), 0); // 보간 처리
    .content-wrapper { transform: translateY(calc(#{$parallax-offset} / 2));  } // 보간 처리
    + .background {
      transform: translate3d(0, #{$parallax-offset}, 0); // 보간 처리
      .content-wrapper { transform: translateY(#{$parallax-offset});  } 
    }
  }

  .background.down-scroll {
    transform: translate3d(0, calc(-1 * (100vh + #{$parallax-offset})), 0); // 보간 처리
    .content-wrapper { transform: translateY(#{$content-offset}); } // 보간 처리
    + .background:not(.down-scroll) {
      transform: translate3d(0, calc(-1 * #{$parallax-offset} / 2), 0); // 보간 처리
      .content-wrapper { transform: translateY(calc(#{$parallax-offset} / 2)); } // 보간 처리
    }
  }
}

// [2] Parallax Scroll (pure css / background-attachment: fixed)
.scrollType02{  
  .bgimg {
    position: relative;
    opacity: 0.65;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &.type1{
      background-image: url("https://cdn.pixabay.com/photo/2020/05/31/16/53/bookmarks-5243253_960_720.jpg");
      min-height: 100vh;
      .caption{
        .border{
          padding: 18px;
          background-color: #111;
          color: #fff;
          font-size: 25px;
          letter-spacing: 10px;
        }
      }
      + .txtboxcont{
        color: #777;
        background-color:white;
        text-align:center;
        padding:50px 20px;
        text-align: justify;
        h3{ text-align:center; margin-bottom: 20px; }
      }
    }
    &.type2{
      background-image: url("https://cdn.pixabay.com/photo/2017/08/01/23/51/apple-2568755_960_720.jpg");
      min-height: 400px;
    }
    &.type3{
      background-image: url("https://68.media.tumblr.com/ac46aa24b44b5036e9200abb71f810d9/tumblr_nt5vzxV6Us1ud7rr3o1_1280.jpg");
      min-height: 400px;
    }
  }
  .caption {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    color: #000;
    .border {
      background-color:transparent;
      font-size:25px;
      color: #f7f7f7;
    }
  }
  .txtboxcont{
    padding: 40px 20px;
    color:#ddd;
    background-color:#282E34;
    text-align:center;
    text-align: justify;
    h3 {
      letter-spacing: 5px;
      text-transform: uppercase;
      font: 20px "Lato", sans-serif;
      color: #111;
    }
  }
}

// [3] Parallax Scroll (pure css / background-attachment: fixed)
.scrollType03{
  .section-type1 {
    background-image: url("https://cdn.pixabay.com/photo/2020/07/22/12/28/laptop-5428881_1280.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed; // 이 코드로 백그라운드 고정
    background-size: cover;
    .inner{
      padding: 110px 0;
      background: rgba(0,0,0,0.1);
      text-align: center;
    }
  }

  .section-type2 {
    background-image: url("https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    .inner{
      height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .medal{
      width: 240px;
      height: 240px;
      perspective: 600px;
      .front,
      .back{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 240px;
        height: 240px;
        position: absolute;
        backface-visibility: hidden;
        transition: 1s;
        border-radius: 50%;
      }
      .front{
        background: rgb(184, 188, 209);
        transform: rotateY(0deg);
      }
      .back{
        background: rgb(115, 121, 150);
        transform: rotateY(-180deg);
      }
      &:hover{
        .front{ transform: rotateY(180deg); }
        .back{ transform: rotateY(0deg); }
      }
    }
  }

  .section-type3 {
    background-image: url("https://cdn.pixabay.com/photo/2018/01/11/21/27/desk-3076954_1280.jpg");
    .inner {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 400px;
      background: rgba(0,0,0,0.5);
    }
  }

}

// [4] Parallax Scroll (pure css / transform-style: preserve-3d + background-attachment: fixed + before)
.scrollType04 {
  .wrap{
    height: 100vh;
    overflow-x: hidden;
    perspective: 1px; 
    position: relative;
    transform-style: preserve-3d;
    .slide{
      position: relative;
      padding: 25vh 10%;
      min-height: 100vh;
      width: 100vw;
      box-sizing: border-box;
      box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
      background: 50% 50% / cover;
      transform-style: preserve-3d;
      &::before {
        content: "";
        width: 100%; height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, .7);
        background: 50% 50% / cover; 
        background-attachment: fixed;
      }
      &:nth-child(even) {
        .title{
          margin-left: 0;
          margin-right: auto;
        }
      }
      &:nth-child(odd){
        .title {
          margin-left: auto;
          margin-right: 0;
        }
      }

      &.header{
        text-align: center;
        font-size: 175%;
        color: #fff;
        text-shadow: 0 2px 2px #000;
      }
      &#title{
        background-image: url("https://cdn.pixabay.com/photo/2023/10/10/11/28/star-trails-8306233_960_720.jpg");
        z-index:2;
      }
      &#slide1{ 
        &::before{
          background-image: url("https://cdn.pixabay.com/photo/2014/12/07/09/30/milky-way-559641_960_720.jpg"); 
        }
      }
      &#slide2{
        background-image: url("https://cdn.pixabay.com/photo/2017/08/07/02/44/dark-2598965_960_720.jpg");
      }
      &#slide3{
        &::before{
          background-image: url("https://cdn.pixabay.com/photo/2017/08/07/01/34/blue-2598466_1280.jpg");
        }
      }
      &#slide4{ background: #222; color: #fff; }
      .title{
        position: relative;
        width: 50%;
        padding: 1rem;
        border-radius: 5px;
        background: rgba(240,230,220, .7);
        box-shadow: 0 0 8px rgba(0, 0, 0, .7);
        h1{ font-size: 36px; }
        p{
          font-size: 14px;
          color: #333;
        }
      }
      img {
        position: absolute;
        top: 50%;
        left: 35%;
        width: 320px;
        height: 240px;
        transform: translateZ(.25px) scale(.75) translateX(-94%) translateY(-100%) rotate(2deg);
        padding: 10px;
        border-radius: 5px;
        background: rgba(240,230,220, .7);
        box-shadow: 0 0 8px rgba(0, 0, 0, .7);
        &:last-of-type {
          transform: translateZ(.4px) scale(.6) translateX(-104%) translateY(-40%) rotate(-5deg);
        }
      }
    }
  }
}

// [5] Parallax Scroll (pure css) / transform-style: preserve-3d
.scrollType05{
  #parallax-wrapper {
    height: 100vh;
    overflow-x: hidden;
    perspective: 1px; 
    position: relative;
    transform-style: preserve-3d;
  }

  .parallax {
    position: absolute;
    transform-style: preserve-3d; /* 3D 컨텍스트가 유지되도록 설정 */
    &#parallax-A {
      opacity: 0.5;
      top: 0;
      left: 0;
      right: 0;
      background: transparent;
      height: 100rem;
      z-index: 1; /* 가시성을 위한 레이어링 */
    }
    &#parallax-B {
      background: skyblue;
      opacity: 0.5;
      top: 0;
      left: 0;
      right: 0;
      height: 500px;
      transform: translateZ(-0.5px); /* 패럴랙스 효과를 위한 변환 조정 */
      z-index: 2; /* parallax-A 위에 있도록 설정 */
    }
    &#parallax-C {
      width: 250px;
      display: block; 
      left: 10%;
      top: 50%;
      opacity: 0.5;
      background: greenyellow;
      height: 500px;
      z-index: 3; /* parallax-A와 B 위에 있도록 설정 */
      transform: translateZ(-1.5px); /* 패럴랙스 효과를 위한 변환 조정 */
    }
    &#parallax-D {
      width: 300px;
      display: block; 
      right: -25%;
      top: 25%;
      opacity: 0.5;
      background: rgb(147, 139, 187);
      height: 200px;
      z-index: 3; /* parallax-A와 B 위에 있도록 설정 */
      transform: translateZ(-1px); /* 패럴랙스 효과를 위한 변환 조정 */
    }
  }
}

// [6] Parallax Scroll (pure css) / transform-style: preserve-3d
.scrollType06{
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
  perspective: 1px;
  transform-style: preserve-3d;

  @mixin parallax(
    $distance    : 0,
    $perspective : 1
    ) {
    transform:
      translateZ($distance * $perspective * 1px)
      scale(abs($distance - 1));
    z-index: $distance * 100;
  }

  .container {
    position: relative;
    height: 110%;
    perspective: 1px;
    transform-style: preserve-3d;
    
    img{
      width: 5rem; height: 5rem;
    }
    .item{
      position: absolute;
      transform-style: preserve-3d;
      &:nth-child(1) { 
        @include parallax(-.4); 
        top: 10%; left: 25%; 
        font-size: 5em;
        color: vars.$primary;
      }
      &:nth-child(2) { @include parallax(.2); top: 30%; left: 50%; }
      &:nth-child(3) { @include parallax(.3); top: 50%; left: 35%; }
      &:nth-child(4) { @include parallax(.1); top: 40%; left: 65%; }
      &:nth-child(5) { 
        // @include parallax(-1); 
        transform: translateZ(0) scale(12, 7);
        z-index: -50;
        top: 70%; 
        left: 45%; 
        opacity: 0.6;
      }
      &:nth-child(6) { @include parallax(.4); top: 80%; left: 30%; }
      &:nth-child(7) { @include parallax(-1); top: 0%; left: 80%; }
      &:nth-child(8) { @include parallax(-.4); top: -15%; left: -20%; }
      &:nth-child(9) { @include parallax(.4); top: 57%; left: 38%; }
      &:nth-child(10) { @include parallax(.4); top: 48%; left: 53%; }
    }
  }
}

</style>
