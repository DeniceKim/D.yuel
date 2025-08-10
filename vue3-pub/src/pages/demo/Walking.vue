<template>
  <main class="l-page" :data-page="pageType">
    <div class="cbody">
      <section>
        <h2>favicon (css only)</h2>
        <div class="makeIcon">
          <div class="cricle top"></div>
          <div class="cricle right"></div>
          <div class="cricle bottom"></div>
          <div class="cricle left"></div>
        </div>
      </section>
      <!-- [1] 걷기 - css only -->
      <section>
        <h2>Walk Ani (css only)</h2>
        <div class="container1">
              <div class="dude">
                <div class="foot-left"></div>
                  <div class="foot-right"></div>
              </div>
            </div>
          </section>
      <!-- [2] 걷기 - css/js(속도 변수처리) -->
      <section>
        <h2>Walk Ani (css/js)</h2>
          <div class="container2" data-speed="1.2">
              <div class="dude">
                  <div class="foot-left"></div>
                  <div class="foot-right"></div>
              </div>
          </div>
      </section>
      <!-- [3] 발자국 - css(재귀함수 리스트 생성) -->
      <section>
        <h2>Walk Ani (css/js)</h2>
          <div class="container3">
            <div class="walkList">
              <div v-for="track in tracks" :key="track.level" :class="`track track_${track.level}`">
                <!-- 왼쪽 발 -->
                <div class="foot left">
                  <div class="foot_claw" v-for="claw in 3" :key="`left_${track.level}_${claw}`"></div>
                </div>
                <!-- 오른쪽 발 -->
                <div class="foot right">
                  <div class="foot_claw" v-for="claw in 3" :key="`right_${track.level}_${claw}`"></div>
                </div>
                <!-- 하위 트랙 -->
                <template v-if="track.children && track.children.length > 0">
                  <div
                    v-for="child in track.children"
                    :key="child.level"
                    :class="`track track_${child.level}`"
                  >
                    <!-- 재귀적으로 발 생성 -->
                    <div class="foot left">
                      <div class="foot_claw" v-for="claw in 3" :key="`left_${child.level}_${claw}`"></div>
                    </div>
                    <div class="foot right">
                      <div class="foot_claw" v-for="claw in 3" :key="`right_${child.level}_${claw}`"></div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
      </section>
      <!-- [4] 발자국 - css only -->
      <section>
        <h2>Walk Ani (CSSonly)</h2>
        <div class="container4">
          <div class="wrap">
            <img class="leftfoot1" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="right" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="leftfoot1" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="right" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="leftfoot1" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="right" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="leftfoot1" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="right" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="leftfoot1" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="right" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="leftfoot1" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
            <img class="right" src="http://www.clipartbest.com/cliparts/nTB/pK7/nTBpK7GTA.svg" alt="footprint" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useHeaderOptions } from "@/composables/useHeaderOptions";

// [2] 걷기 - css/js(속도 변수처리)
function testWalk1() {
  const counter = document.querySelector('.container2');
  const walkSpeed = counter.getAttribute('data-speed');
  counter.style.setProperty('--time', walkSpeed + 's');
}

// [3] 발자국 - css(재귀함수 리스트 생성)
const generateTracks = (maxLevel, currentLevel = 1) => {
  if (currentLevel > maxLevel) return []; // 더 이상 트랙 생성 안 함
  return [
    {
      level: currentLevel,
      children: generateTracks(maxLevel, currentLevel + 1), // 하위 트랙 재귀적 생성
    },
  ];
};

// 트랙 데이터 초기화
const tracks = reactive(generateTracks(5)); // track_1부터 track_5까지 생성


const pageTitle = ref("Walking Demo");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();
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
  
  testWalk1();
});
</script>

<style lang="scss">
  .container1{
    --main-color: rgb(103, 164, 214);
    --main-color-dark: rgb(45, 102, 149);
    --unit: 0.25rem;
    --time: 1.5s;
    .dude {
        position: relative;
        padding: 2rem;
        .foot-left,
        .foot-right {
          width: calc(12 * var(--unit));
          height: calc(5 * var(--unit));
          position: absolute;
          left: calc(2 * var(--unit));
          top: calc(8 * var(--unit));
          animation-name: step;
          animation-duration: calc(1 * var(--time));
          animation-iteration-count: infinite;
          border-radius: calc(3 * var(--unit)) 50% calc(0.5 * var(--unit))
              calc(0.5 * var(--unit));
          transform-origin: 25% 50%;
        }

        .foot-left {
            background-color: var(--main-color-dark);
        }

        .foot-right {
            background-color: var(--main-color);
            animation-delay: calc(-0.5 * var(--time));
        }
    }
  }
  .container2{
    --main-color: rgb(255, 171, 171);
    --main-color-dark: rgb(223, 98, 98);
    --unit: 0.25rem;
    // --time: 1.5s;
    .dude {
        position: relative;
        padding: 2rem;
        .foot-left,
        .foot-right {
          width: calc(12 * var(--unit));
          height: calc(5 * var(--unit));
          position: absolute;
          right: 50%;
          top: calc(8 * var(--unit));
          animation-name: step-reverse;
          animation-duration: calc(1 * var(--time));
          animation-iteration-count: infinite;
          // border-radius: calc(3 * var(--unit)) 50% calc(0.5 * var(--unit)) calc(0.5 * var(--unit));
          border-radius: 50% calc(3 * var(--unit)) calc(0.5 * var(--unit)) calc(0.5 * var(--unit));
          transform-origin: 25% 50%;
        }

        .foot-left {
            background-color: var(--main-color-dark);
        }

        .foot-right {
            background-color: var(--main-color);
            animation-delay: calc(-0.5 * var(--time));
        }
    }
  }
  
  @keyframes step {
      0% {
          transform: translateX(0px) translateY(0px);
          animation-timing-function: ease-in-out;
      }
      25% {
          transform: translateX(calc(8 * var(--unit)))
              translateY(calc(-5 * var(--unit))) rotate(15deg);
          animation-timing-function: ease-in-out;
      }
      50% {
          transform: translateX(calc(17 * var(--unit))) translateY(0px);
          animation-timing-function: ease-in-out;
      }
  }
  @keyframes step2 {
      0% {
          transform: translateX(0px) translateY(0px);
          animation-timing-function: ease-out;
      }
      25% {
          transform: translateX(calc(6 * var(--unit)))
              translateY(calc(-4.5 * var(--unit))) rotate(20deg);
          animation-timing-function: ease-in-out;
      }
      50% {
          transform: translateX(calc(18 * var(--unit))) translateY(0px);
          animation-timing-function: ease-in-out;
      }
      100% {
          transform: translateX(0px) translateY(0px);
          animation-timing-function: ease-in-out;
      }
  }
  @keyframes step-reverse {
      0% {
          transform: translateX(0px) translateY(0px);
          animation-timing-function: ease-in-out;
      }
      25% {
          transform: translateX(calc(10 * var(--unit)))
              translateY(calc(-5 * var(--unit))) rotate(-5deg);
          animation-timing-function: ease-in-out;
          border-radius: 50% calc(3 * var(--unit)) calc(0.5 * var(--unit)) calc(1.5 * var(--unit));
      }
      40% {
          transform: translateX(calc(0 * var(--unit))) translateY(0px);
          animation-timing-function: ease-in-out;
      }
      65% {
          transform: translateX(calc(-8 * var(--unit)))
              translateY(calc(-5 * var(--unit))) rotate(15deg);
          animation-timing-function: ease-in-out;
          border-radius: 50% calc(3 * var(--unit)) calc(1.5 * var(--unit)) calc(0.5 * var(--unit));
      }
      80% {
          transform: translateX(calc(-16 * var(--unit))) translateY(0px);
          animation-timing-function: ease-in-out;
      }
  }

  .container3{
    position: relative;
      width: 100%;
      height: 200px;
    .walkList {
      position: absolute;
      top: 10%;
      left: 25%;
      .track {
        position: absolute;
        left: 50px;
        // width: 50px;
        // height: 8px;
        // border-radius: 999px;
        // transform-origin: 0 50%;
        // transition: 2000ms;
        
        @for $i from 1 through 50 {
          $rotation-angle: (($i % -18) - 9) * 10deg; // 대체 랜덤 로직: -90deg ~ 90deg 사이의 값을 계산

          &.track_#{$i} {
            transform: rotateZ($rotation-angle);

            .foot.left {
              animation: fadeOut 3000ms infinite linear #{$i * 300}ms;
            }
            .foot.right {
              animation: fadeOut 3000ms infinite linear #{$i * 300 + 150}ms;
            }
          }
        }
        .foot {
          position: absolute;
          width: 8px;
          height: 9px;
          background: #000;
          border-radius: 100%;
          opacity: 0;
          
          &_claw {
            content: '';
            position: absolute;
            width: 4px;
            height: 4px;
            background: #000;
            border-radius: 100%;
            
            &:nth-child(1) {
              top: -3px;
              left: 8px;
            }
            &:nth-child(2) {
              top: 3px;
              left: 10px;
            }
            &:nth-child(3) {
              top: 8px;
              left: 8px;
            }
          }
          &.left {
            top: -7px;
          }
          &.right {
            top: 7px;
            left: 25px;
          }
        }
      }
    }
  }
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
}

.container4{
  .wrap {
    position: relative;
    margin: 0px auto;
    height: 200px;
    width: 100%;
  }

  .leftfoot1{
    height: 20px;
    position: absolute;
    // animation: one 5.5s forwards;
    animation: one 5.5s infinite;
    opacity: 0;
    &:nth-child(1) { transform: rotateZ(-145deg); top: 0; left: 0px; }
    &:nth-child(3) { transform: rotateZ(-145deg); top: 65px; left: 50px; animation-delay: 1s; }
    &:nth-child(5) { transform: rotateZ(-140deg); top: 130px; left: 95px; animation-delay: 2s; }
    &:nth-child(7) { transform: rotateZ(-125deg); top: 190px; left: 120px; animation-delay: 3s; }
    &:nth-child(9) { transform: rotateZ(-100deg); top: 260px; left: 130px; animation-delay: 4s; }
    &:nth-child(11) { transform: rotateZ(-85deg); top: 330px; left: 115px; animation-delay: 5s; }
    
  }
  .right{
    height: 20px;
    position: absolute;
    // animation: one 5.5s forwards;
    animation: one 5.5s infinite;
    opacity: 0;
    &:nth-child(2) { transform: rotateX(180deg) rotateZ(120deg); top: 20px; left: 50px; animation-delay: 0.5s; }
    &:nth-child(4) { transform: rotateX(180deg) rotateZ(120deg); top: 85px; left: 100px; animation-delay: 1.5s; }
    &:nth-child(6) { transform: rotateX(180deg) rotateZ(105deg); top: 145px; left: 140px; animation-delay: 2.5s; }
    &:nth-child(8) { transform: rotateX(180deg) rotateZ(85deg); top: 220px; left: 160px; animation-delay: 3.5s; }
    &:nth-child(10) { transform: rotateX(180deg) rotateZ(65deg); top: 300px; left: 160px; animation-delay: 4.5s; }
    &:nth-child(12) { transform: rotateX(180deg) rotateZ(60deg); top: 365px; left: 140px; animation-delay: 5.5s; }
  }
}
@keyframes one {
  0% { opacity: 0; }
  // 1% { opacity: 1; } forwards 이용시 적용
  // 99%{ opacity: 1; } forwards 이용시 적용
  25% { opacity: 1; }
  90%{ opacity: 1; }
  100% { opacity: 0; }
}

.makeIcon{
  position: relative;
  display: flex;
  width: 65px; height: 65px;
  .cricle{
    width: 26px; height: 26px;
    position: absolute;
    border-radius: 50%;
    &::before{
      content:'';
      display: block;
      width: 15px; height: 30px;
      background-color: rgb(103, 164, 214);
      position: absolute;
    }
    &.top{
      top: 0; left: 50%;
      transform: translate(-50%, 0);
      background-color: rgb(136, 202, 75);
      &::before{
        transform: rotate(45deg) translate(3px, 0px);
        background-color: rgb(136, 202, 75);
      }      
    }
    &.right{
      top: 50%; right: 0;
      transform: translate(0, -50%);
      background-color: rgb(103, 164, 214);
      &::before{
        transform: rotate(225deg) translate(-2px, 0);
      }      
    }
    &.bottom{
      bottom: 0; left: 50%; 
      transform: translate(-50%, 0);
      background-color: rgb(103, 164, 214);
      &::before{
        transform: rotate(135deg) translate(-5px, 15px);
      }      
    }
    &.left{
      top: 50%; left: 0;
      transform: translate(0, -50%);
      background-image: linear-gradient(140deg, rgb(136, 202, 75) 15%, rgb(103, 164, 214));
      &::before{ display: none; }
    }
  }
}
</style>