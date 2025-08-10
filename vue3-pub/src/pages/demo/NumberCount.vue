<template>
  <main class="l-page" :data-page="pageType">
    <div class="cbody">
      <!-- [1] data-value 값 종속(0불가) -->
      <section>
        <h2>Odometer1 (CSS/JS + Up)</h2>
        <div class="container1">
          <div class="number-ticker" data-value="10000" max-data-value="25495"></div>
        </div>
      </section>
      <!-- [2] 기본값 000,000 지정 -->
      <section>
        <h2>Odometer2 (CSS/JS + Down)</h2>
        <div class="container2">
          <div class="number-ticker" max-data-value="985123"></div>
        </div>
      </section>
      <!-- [3] 0부터 카운팅 -->
      <section>
        <h2>Odometer3 (0 -> data-target counting)</h2>
        <div class="container3">
          <div class="number-ticker3" data-target="1500"></div>
        </div>
      </section>
      <!-- [4] 100부터 0까지 카운팅 -->
      <section>
        <h2>Odometer4 (data-target -> 0 counting)</h2>
        <div class="container4">
          <div class="number-ticker4" data-target="100"></div>
        </div>
      </section>
      <!-- [5] (odometer_num 데이터 for문 제외) css only -->
      <section>
        <h2>Odometer5 (CSSonly + Up)</h2>
        <div class="odometer">
          <span class="digit" aria-hidden="true">
            <span class="ticker">
              <em v-for="(num, idx) in countNum.slice(0, 9)" :key="idx" class="odometer_num">{{ num }}</em>
            </span>
            <span class="value"></span>
          </span>
          <span class="digit" aria-hidden="true">
            <span class="value_nonum">,</span>
          </span>
          <span class="digit" aria-hidden="true">
            <span class="ticker">
              <em v-for="(num, idx) in countNum.slice(0, 3)" :key="idx" class="odometer_num">{{ num }}</em>
            </span>
            <span class="value"></span>
          </span>
          <span class="digit" aria-hidden="true">
            <span class="ticker">
              <em v-for="(num, idx) in countNum.slice(0, 6)" :key="idx" class="odometer_num">{{ num }}</em>
            </span>
            <span class="value"></span>
          </span>
          <span class="digit" aria-hidden="true">
            <span class="ticker">
              <em v-for="(num, idx) in countNum.slice(0, 10)" :key="idx" class="odometer_num">{{ num }}</em>
            </span>
            <span class="value"></span>
          </span>
          <span class="digit_unit" aria-hidden="true">걸음</span>
        </div>
      </section>
      <!-- [6] (odometer_num 데이터 for문 제외) css only -->
      <section>
        <h2>Odometer6 (CSSonly + Down)</h2>
        <div class="odometer ver2">
          <span class="digit" aria-hidden="true">
            <span class="ticker">
              <em v-for="(num, idx) in countNum.slice(0, 2)" :key="idx" class="odometer_num">{{ num }}</em>
            </span>
            <span class="value"></span>
          </span>
          <span class="digit" aria-hidden="true">
            <span class="ticker">
              <em v-for="(num, idx) in countNum.slice(0, 9)" :key="idx" class="odometer_num">{{ num }}</em>
            </span>
            <span class="value"></span>
          </span>
          <span class="digit" aria-hidden="true">
            <span class="value_nonum">,</span>
          </span>
          <span class="digit" aria-hidden="true">
            <span class="ticker">
              <em v-for="(num, idx) in countNum.slice(0, 3)" :key="idx" class="odometer_num">{{ num }}</em>
            </span>
            <span class="value"></span>
          </span>
          <span class="digit" aria-hidden="true">
            <span class="ticker">
              <em v-for="(num, idx) in countNum.slice(0, 4)" :key="idx" class="odometer_num">{{ num }}</em>
            </span>
            <span class="value"></span>
          </span>
          <span class="digit" aria-hidden="true">
            <span class="ticker">
              <em v-for="(num, idx) in countNum.slice(0, 7)" :key="idx" class="odometer_num">{{ num }}</em>
            </span>
            <span class="value"></span>
          </span>
          <span class="digit_unit" aria-hidden="true">걸음</span>
        </div>
      </section>
      <!-- [7] 텍스트 애니메이션 css only -->
      <section>
        <h2>text ani (CSSonly)</h2>
        <div class="txtAni">
          <div class="txtAni_cont">
            <p class="txtAni_fixTxt">
              Hello
            </p>
            <ul class="txtAni_list">
              <li class="item">test1</li>
              <li class="item">test txt2</li>
              <li class="item">test3</li>
              <li class="item">test text4</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- [8] 텍스트 + 배경 애니메이션 css only -->
      <section class="bgEvent">
        <h2>text ani2 (CSSonly)</h2>
        <div class="txtAni2">
          <div class="txtAni2_cont">
            <p class="txtAni2_fixTxt">
              Hello
            </p>
            <ul class="txtAni2_list">
              <li class="item">green</li>
              <li class="item">blue</li>
              <li class="item">yellow</li>
              <li class="item">pink</li>
              <li class="item">red</li>
              <li class="item">green</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- [9] 텍스트 애니메이션 css only -->
      <section>
        <h2>text ani3 (CSSonly)</h2>
        <div class="txtAni3">
          Make 
          <div class="flip">
            <p class="flip_bg"><span>wOrK</span></p>
            <p class="flip_bg"><span>lifeStyle</span></p>
            <p class="flip_bg"><span>Everything</span></p>
          </div>
          AweSoMe!
        </div>
      </section>
      <!-- [10] 텍스트 애니메이션 css only -->
      <section>
        <h2>text ani4 (CSSonly)</h2>
        <div class="txtAni4">
          <div class="typing-demo">
            타이핑 데모 텍스트
          </div>
        </div>
      </section>
      <!-- [11] 텍스트 애니메이션 css/js -->
      <section>
        <h2>text ani5 (CSS/JS)</h2>
        <div class="txtAni5">
          <p class="typing-demo2"></p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHeaderOptions } from "@/composables/useHeaderOptions";
import CAccordion from "@/components/base/CAccordion.vue";

// [1] data-value 값 종속
function testOdometer1() {
  // 'number-ticker' 클래스를 가진 모든 요소를 가져옵니다.
  const counters = document.querySelectorAll('.container1 .number-ticker');
  // 기본 숫자 노드 템플릿을 생성합니다.
  const defaultDigitNode = document.createElement('div');
  defaultDigitNode.classList.add('digit'); // 'digit' 클래스를 추가합니다.

  // 기본 숫자 노드에 0부터 9까지의 숫자를 각 줄마다 추가합니다.
  for (let i = 0; i < 10; i++) {
    defaultDigitNode.innerHTML += i + '<br>'; // 줄바꿈 태그 '<br>'를 추가해 한 줄에 하나씩 표시
  }
  // 3자리마다 콤마를 추가하는 함수
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // 'number-ticker' 동작 코드
  [].forEach.call(counters, function (counter) {
    const currentValue = parseInt(counter.getAttribute('data-value')) || 0;
    const maxCurrentValue = parseInt(counter.getAttribute('max-data-value')) || 0;
    const digits = [];

    // 초기 숫자의 포맷된 길이에 맞게 디지털 노드를 생성합니다.
    // generateDigits(currentValue.toString().length);
    generateDigits(formatNumberWithCommas(currentValue).length);
    // 초기 값을 설정합니다.
    setValue(currentValue);
    setInterval(function () {
      setValue(maxCurrentValue); // 갱신할 숫자 
    }, 1000);

    function setValue(number) {
      // 숫자를 포맷하여 콤마를 추가합니다.
      let formattedNumber = formatNumberWithCommas(number);
      let s = formattedNumber.split('').reverse().join(''); // 오른쪽 정렬을 위해 뒤집음
      let l = s.length;

      if (l > digits.length) {
        generateDigits(l - digits.length);
      }
      for (let i = 0; i < digits.length; i++) {
        setDigit(i, s[i] || 0);
      }
    }

    function setDigit(digitIndex, number) {
      if (number === ',') {
        digits[digitIndex].style.marginTop = '0'; // 콤마는 고정된 위치에 표시
        digits[digitIndex].innerHTML = ','; // 콤마를 직접 출력
      } else {
        digits[digitIndex].style.marginTop = '-' + number + 'em';
      }
    }

    function generateDigits(amount) {
      for (var i = 0; i < amount; i++) {
        var d = defaultDigitNode.cloneNode(true);
        counter.appendChild(d);
        digits.unshift(d);
      }
    }
  });
}
// [2] 기본값 000,000 지정
function testOdometer2() {
  // 'number-ticker' 클래스를 가진 모든 요소를 가져옵니다.
  const counters = document.querySelectorAll('.container2 .number-ticker');
  // 기본 숫자 노드 템플릿을 생성합니다.
  const defaultDigitNode = document.createElement('div');
  defaultDigitNode.classList.add('digit'); // 'digit' 클래스를 추가합니다.

  // 기본 숫자 노드에 0부터 9까지의 숫자를 각 줄마다 추가합니다.
  for (let i = 9; i >= 0; i--) {
    defaultDigitNode.innerHTML += i + '<br>'; // 줄바꿈 태그 '<br>'를 추가해 한 줄에 하나씩 표시
  }
  // 3자리마다 콤마를 추가하는 함수
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // 'number-ticker' 동작 코드
  [].forEach.call(counters, function (counter) {
    // const currentValue = parseInt(counter.getAttribute('data-value')) || 0;
    const maxCurrentValue = parseInt(counter.getAttribute('max-data-value')) || 0;
    const minNum = '0'.repeat(maxCurrentValue.toString().length);
    const digits = [];

    // 초기 숫자의 포맷된 길이에 맞게 디지털 노드를 생성합니다.
    // generateDigits(currentValue.toString().length);
    // generateDigits(formatNumberWithCommas(currentValue).length);
    // 초기 값을 설정합니다.
    setValue(minNum);
    setInterval(function () {
      setValue(maxCurrentValue); // 갱신할 숫자 
    }, 800);

    function setValue(number) {
      // 숫자를 포맷하여 콤마를 추가합니다.
      let formattedNumber = formatNumberWithCommas(number);
      let s = formattedNumber.split('').reverse().join(''); // 오른쪽 정렬을 위해 뒤집음
      let l = s.length;

      if (l > digits.length) {
        generateDigits(l - digits.length);
      }
      for (let i = 0; i < digits.length; i++) {
        setDigit(i, s[i] || 0);
      }
    }

    function setDigit(digitIndex, number) {
      if (number === ',') {
        digits[digitIndex].style.marginBottom = '0'; // 콤마는 고정된 위치에 표시
        digits[digitIndex].innerHTML = ','; // 콤마를 직접 출력
      } else {
        digits[digitIndex].style.marginBottom =  '-' + number + 'em';
      }
    }

    function generateDigits(amount) {
      for (var i = 0; i < amount; i++) {
        var d = defaultDigitNode.cloneNode(true);
        counter.appendChild(d);
        digits.unshift(d);
      }
    }
  });
}
// [3] 0에서부터 시작 카운팅
function testOdometer3() {
  const counters = document.querySelectorAll(".number-ticker3");

  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace(/,/g, ""); // 기존 숫자에서 콤마 제거
      const increment = target / 200;

      if (count < target) {
        counter.innerText = `${Math.ceil(count + increment).toLocaleString()}`; // 숫자에 콤마 추가
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target.toLocaleString(); // 최종 숫자에 콤마 추가
      }
    };

    updateCounter();
  });
}
// [3] 100에서부터 0까지 카운팅
function testOdometer4() {
  const counters = document.querySelectorAll(".number-ticker4");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    counter.innerText = target.toLocaleString(); // 초기값을 target으로 설정

    const updateCounter = () => {
      const count = +counter.innerText.replace(/,/g, ""); // 현재 숫자에서 콤마 제거
      const decrement = target / 100; // 감소량 설정

      if (count > 0) {
        counter.innerText = `${Math.floor(count - decrement).toLocaleString()}`; // 숫자에 콤마 추가
        setTimeout(updateCounter, 1); // 재귀 호출로 애니메이션 지속
      } else {
        counter.innerText = "0"; // 최종 숫자를 0으로 설정
      }
    };

    updateCounter();
  });
}
// [4,5] (odometer_num 데이터 for문 제외) css only
const countNum = ['0', '1','2','3','4','5','6','7','8','9','0']
// [11] 타이핑 애니메이션
function testTyping(){
  const typingTxt = document.querySelector('.typing-demo2');
  const dataText = ['타이핑 데모 텍스트 JS포함', 'test', '배열 안에 넣어서 텍스트 호출'];

  function typeWriter(text, i, fnCallback) { // 텍스트가 아직 끝나지 않았는지 확인
    if (i < (text.length)) { // 다음 문자를 h1에 추가
      typingTxt.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

      // 잠시 대기한 후 다음 문자에 대해 이 함수를 다시 호출
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } // 텍스트가 끝났고, 콜백 함수가 있으면 콜백 호출
    else if (typeof fnCallback == 'function') { // 타임아웃 후 콜백 호출
      setTimeout(fnCallback, 700);
    }
  }

  // dataText 배열에 있는 텍스트에 대해 타자 애니메이션 시작
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
    } // dataText[i]가 존재하는지 확인
    if (i < dataText[i].length) { // 텍스트가 존재하면 타자 애니메이션 시작
      typeWriter(dataText[i], 0, function() { // 콜백 후 (텍스트 전체가 애니메이션된 후), 다음 텍스트 시작
        StartTextAnimation(i + 1);
      });
    }
  }
  // 텍스트 애니메이션 시작
  StartTextAnimation(0);
}

const pageTitle = ref("Number Count Demo");
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

  testOdometer1();
  testOdometer2();
  testOdometer3();
  testOdometer4();
  testTyping();
});
</script>

<style lang="scss">
// testOdometer1,2,3,4
.container1 {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 4em;
    line-height: 1;
  .number-ticker {
      overflow: hidden;
      height: 1em;
  }
  .digit {
    float: left;
    line-height: 1;
  }
  .number-ticker{
    .digit{ transition: margin-top 1.75s ease; }
  }
}
.container2 {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 4em;
    line-height: 1;
  .number-ticker {
      overflow: hidden;
      height: 1em;
  }
  .digit {
    float: left;
    line-height: 1;
  }
  .number-ticker{
    display: flex;
    align-items: flex-end;
    .digit{ transition: margin-bottom 1.75s ease-in-out; }
  }
}
.container3 {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 4em;
    line-height: 1;
}
.container4 {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 4em;
    line-height: 1;
}
// testOdometer5,6
.odometer {
  font-variant: tabular-nums;
  display: flex;
  align-items: flex-end;
  .digit {
    position: relative;
    overflow: hidden;
    font-size: 4rem;
    line-height: 1em;
    &_unit{
      font-size:1.8rem;
    }
  }
  .ticker {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    animation: odometerUpAni cubic-bezier(.25, .1, .25, 1) 720ms forwards;
  }
  .value {
    display: inline-block;
    padding: 1.2rem;
    &._nonum{padding: 0;}
  }
  &.ver2{
    .ticker{
      top: unset;
      bottom: 0%;
      flex-direction: column-reverse;
      animation: odometerDownAni cubic-bezier(.25, .1, .25, 1) 720ms forwards;
    }
  }
}
@keyframes odometerUpAni {
  100%{ transform: translate3d(0, calc(-100% + 1em), 0); }
}
@keyframes odometerDownAni {
  100%{ transform: translate3d(0, calc(100% - 1em), 0); }
}
// 텍스트 애니메이션
.txtAni {
  display: flex;
  align-items: center;
  overflow:hidden;
  font-size: 35px; 
  line-height: 1;
  &_cont {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
  }
  &_fixTxt {
    display: inline;
    float: left;
    margin: 0;
  }
  &_list {
    margin-top: 0;
    float: left;
    padding-left: 8px;
    text-align: left;
    list-style: none;
    animation: change 10s infinite;
    .item {
      line-height:40px;
      margin:0;
    }
  }
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,calc(-40px * 1),0);}
  33.32%,45.98% {transform:translate3d(0,calc(-40px * 2),0);}
  49.98%,62.64% {transform:translate3d(0,calc(-40px * 3),0);}
  66.64%,79.3% {transform:translate3d(0,calc(-40px * 2),0);}
  83.3%,95.96% {transform:translate3d(0,calc(-40px * 1),0);}
}

// 텍스트 + 배경 애니메이션
.bgEvent{
  width: 100%;
  padding: 8px 0;  
	background: #fff;
	animation: colors 10s infinite;
	animation-timing-function: cubic-bezier(.85,.01,.19,.99);
	font-family: "Helvetica Neue", sans-serif;

  .txtAni2 {
    display: flex;
    align-items: center;
    overflow:hidden;
    font-size: 35px; 
    line-height: 1;
    &_cont {
      font-weight: 600;
      overflow: hidden;
      height: 40px;
    }
    &_fixTxt {
      display: inline;
      float: left;
      margin: 0;
    }
    &_list {
      margin-top: 0;
      float: left;
      padding-left: 8px;
      text-align: left;
      list-style: none;
      animation: change2 10s infinite;
      animation-timing-function: cubic-bezier(.85,.01,.19,.99);
      .item {
        line-height:40px;
        margin:0;
      }
    }
  }
}
@keyframes change2 {
  0% {transform: translateY(calc((-40px * 0) - 4px));}
  20% {transform: translateY(calc((-40px * 1) - 4px));}
  40% {transform: translateY(calc((-40px * 2) - 4px));}
  60% {transform: translateY(calc((-40px * 3) - 4px));}
  80% {transform: translateY(calc((-40px * 4) - 4px));}
  100% {transform: translateY(calc((-40px * 5) - 4px));}
}
@keyframes colors {
	0% { background-color: #c7e4a6; }
	20% { background-color: #aed1f1; }
	40% { background-color: #fff4cf; }
	60% { background-color: #ffbfbf; }
	80% { background-color: #ff8787; }
	100% { background-color: #c7e4a6; }
}

// 텍스트 애니메이션2
.txtAni3 {
  width:100%;
  display:block;
  position: relative;
  color:#999;
  font-size:36px;
  font-weight:bold;
  text-align: center;
  text-transform: uppercase;
  .flip {
    height:50px;
    overflow:hidden;    
  }
  .flip_bg{
    span {
      display:inline-block;
      height:45px;
      padding:4px 12px;
      margin-bottom:45px;
      color:#fff;
      background:#a3bb63;
    }
    &:first-child{
      animation: show 5s linear infinite;
      span{ background:#4699b8; }
    }
    &:last-child{
      span{ background:#aa171e; }
    }
  }
}
@keyframes show {
  0%, 100% {margin-top:-270px;}
  5%, 33% {margin-top:-180px;}
  38%, 66% {margin-top:-90px;}
  71%, 99.99% {margin-top:0px;}
}

// 텍스트 애니메이션3
.txtAni4{
  display: block;
  .typing-demo {
    width: 12.5ch;
    animation: typing 2s steps(16), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid;
    font-size: 1.6em;
  }
}
@keyframes typing {
  from { width: 0; }
}
@keyframes blink {
  50% { border-color: transparent; }
}

// 텍스트 애니메이션4
.txtAni5{
  .typing-demo2{
    font-size: 1.6em;
    text-transform: uppercase;
  } 
  span {
    border-right: .05em solid;
    animation: caret 1s steps(1) infinite;
  }
}
@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>