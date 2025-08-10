<template>
  <main class="l-page" :data-page="pageType">
    <div class="cbody">
      <section>
        <h2>loading bar (css/js)</h2>
        <div class="loadingbar">
          <div class="ancl" data-js="loader--alpha"></div>
        </div>
      </section>
      <section>
        <h2>chart1 (css/js)</h2>
        <div class="container1">
          <div class="skill-box">
            <div class="skills-circle">
              <ul>
                <li v-for="(item, idx) in cartTest1Data" :key="idx" :data-percent="item.value">
                  <span class="text">{{ item.text }}</span>
                  <span class="bar-circle-right"></span>
                  <span class="bar-circle-left"></span>
                  <span class="bar-circle-cover"></span>
                  <b>{{item.value}}%</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>chart7 (css/js)</h2>
        <div class="container7">
          <div class="skill-box">
            <div class="skills-circle">
              <div 
                class="bar-circle"
                v-for="(item, idx) in cartTest7Data" 
                :key="idx" 
                :data-now-value="item.nowValue" 
                :data-max-value="item.maxValue"
                :data-color="item.color"
              >
                <span class="bar-circle-right"></span>
                <span class="bar-circle-left"></span>
                <span class="bar-circle-cover"></span>
                <span class="number-ticker">
                  <strong></strong>
                  <em>걸음</em>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>chart2 (css)</h2>
        <div class="container2">
          <div class="wrap-cont">
            <div class="hemisphere-wrap">
              <div class="hemisphere right-hemisphere"></div>
              <div class="hemisphere left-hemisphere"></div>
              <div class="hemisphere-clip">
                <span class="text-holder"></span>
              </div>
            </div>
            <div class="hemisphere-wrap half">
              <div class="hemisphere right-hemisphere"></div>
              <div class="hemisphere left-hemisphere"></div>
              <div class="hemisphere-clip">
                <span class="text-holder"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>chart3 (css)</h2>
        <div class="container3">
          <div class='loader' style='--n: 1; --f: 0'></div>
          <div class='loader' style='--n: 16; --f: .2'></div>
          <div class='loader' style='--n: 50; --f: 0.8'></div>
          <div class='loader ver2' style='--n: 0; --f: 0'></div>
        </div>
      </section>
      <section>
        <h2>chart4 (css/js)</h2>
        <div class="container4">
          <div class='loader' style='--n: 1; --f: 0' data-max-value="85"></div>
          <div class='loader ver2' style='--n: 0; --f: 0' data-max-value="47"></div>
        </div>
      </section>
      <section>
        <h2>half chart1 (css)</h2>
        <div class="halfcontainer1">
          <div class="scoreNum" v-for="(item, idx) in scoreNumData1" :key="idx">
            <div class="scoreNum_space">
              <p class="scoreNum_align">{{ item.MinValue }}</p>
            </div>
            <div class="semiCircleChart" :class="item.valueClass">
              <strong class="semiCircleChart_styles">{{ item.NowValue }}</strong>
            </div>
            <div class="scoreNum_space">
              <p class="scoreNum_align">{{ item.MaxValue }}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>half chart2 (css/js)</h2>
        <div class="halfcontainer2">
          <div class="scoreNum" v-for="(item, idx) in scoreNumData2" :key="idx" :data-max-value="item.NowValue">
            <div class="scoreNum_space">
              <p class="scoreNum_align">{{ item.MinValue }}</p>
            </div>
            <div class="semiCircleChart">
              <strong class="semiCircleChart_styles">{{ item.NowValue }}</strong>
            </div>
            <div class="scoreNum_space">
              <p class="scoreNum_align">{{ item.MaxValue }}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>half chart3 (css/js)</h2>
        <div class="halfcontainer3">
          <div 
            class="scoreNum" 
            v-for="(item, idx) in scoreNumData3" 
            :key="idx" 
            :data-now-value="item.NowValue" 
            :data-max-value="item.MaxValue"
          >
            <div class="scoreNum_space">
              <p class="scoreNum_align">{{ item.MinValue }}</p>
            </div>
            <div class="semiCircleChart">
              <strong class="semiCircleChart_styles">{{ item.NowValue }} 걸음</strong>
            </div>
            <div class="scoreNum_space">
              <p class="scoreNum_align">{{ item.MaxValue }}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>half chart4 (css)</h2>
        <div class="halfcontainer4">
          <div class="semi-circle" data-value="66">
            <div class="arc"></div>
          </div>
        </div>
      </section>
      <section>
        <h2>half chart5 (css)</h2>
        <div class="halfcontainer5">
          <ul>
            <li><span>HTMl</span></li>
            <li><span>CSS</span></li>
            <li><span>JS</span></li>
            <li><span>JQ</span></li>
          </ul>
        </div>
      </section>
      <section>
        <h2>half chart6 (css/js)</h2>
        <div class="halfcontainer6">
          <ul>
            <li data-max-value="45"><span>HTMl</span></li>
            <li data-max-value="70"><span>CSS</span></li>
            <li data-max-value="25"><span>JS</span></li>
            <li data-max-value="50"><span>JQ</span></li>
          </ul>
        </div>
      </section>
      <section>
        <h2>half chart7 (css/js)</h2>
        <div class="halfcontainer7">
          <!--
              [상태에 따른 class name]
              blue - 아주 좋음 : ~ 5.7 미만
              green - 약간좋음 : 5.7이상 ~ 6.5미만
              yellow - 보통/주의 : 6.5이상 ~ 7.5미만
              orange - 나쁨 : 7.5이상 ~ 8미만
              red - 매우나쁨 : 8이상 ~ 
          -->
          <div class="gauge_arcwrap">
            <svg width="227" height="123" viewBox="0 0 227 123" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="path_item blue" d="M0 116.008V112.921C0.139241 89.6202 7.39833 66.9256 20.7932 47.9141L31.4193 55.6806C19.5847 72.698 13.2432 92.9662 13.2559 113.734H13.2462V116.008C13.2462 117.775 12.5484 119.47 11.3063 120.719C10.0642 121.968 8.37963 122.67 6.62308 122.67C4.86653 122.67 3.18192 121.968 1.93986 120.719C0.697787 119.47 0 117.775 0 116.008Z"/>
              <path d="M32.4838 54.4091L21.857 46.6426C21.496 47.1422 21.1462 47.6459 20.7933 48.1496L31.4169 55.9161C31.7666 55.4083 32.1204 54.9087 32.4806 54.4091" fill="white"/>
              <path class="path_item green" d="M81.2935 18.1459L77.3536 5.9502C55.1016 13.4896 35.7155 27.7723 21.857 46.8373L32.4838 54.5998C44.6588 37.7082 61.6964 24.9836 81.2935 18.1459Z"/>
              <path d="M82.7384 17.5521L78.7985 5.35645C78.2129 5.54167 77.6387 5.75289 77.0571 5.94868L80.9971 18.1444C81.5754 17.9445 82.1569 17.7447 82.7384 17.5521Z" fill="white"/>
              <path class="path_item yellow" d="M113.901 12.5603C124.049 12.6684 134.123 14.3096 143.785 17.429L147.555 5.37949C125.147 -1.78678 101.082 -1.79331 78.6701 5.36081L82.61 17.5565C92.7138 14.2448 103.274 12.5586 113.901 12.5603Z"/>
              <path d="M145.21 18.0595L149.168 6.00511C148.586 5.79551 148.012 5.57698 147.427 5.38281L143.703 17.4502C144.292 17.6411 144.627 17.8564 145.209 18.0595" fill="white"/>
              <path class="path_item orange" d="M145.179 18.1459L149.119 5.9502C171.37 13.4898 190.757 27.7725 204.615 46.8373L193.988 54.5998C181.813 37.7082 164.776 24.9836 145.179 18.1459Z"/>
              <path d="M193.988 54.4091L204.611 46.6426C204.972 47.1422 205.322 47.6459 205.675 48.1496L195.051 55.9161C194.702 55.4083 194.348 54.9087 193.988 54.4091Z" fill="white"/>
              <path class="path_item red" d="M212.909 116.007V113.767H212.9C212.913 92.9993 206.571 72.7309 194.736 55.7138L205.362 47.9473C218.75 66.9498 226.008 89.6315 226.155 112.921V116.008C226.155 117.775 225.457 119.469 224.215 120.719C222.973 121.968 221.288 122.67 219.532 122.67C217.775 122.67 216.091 121.968 214.848 120.719C213.606 119.469 212.909 117.774 212.909 116.007Z"/>
              
              <polyline class="gauge_pin" ref="gaugePin" points="112.235,54.6264 113.148,56.1455 119.153,110.863 118.013,111.509 106.528,111.509 105.456,110.866 111.323,56.1454 112.235,54.6264 112.235,55.0325 111.725,56.1891 105.877,110.727 106.529,111.102 118.013,111.102 118.731,110.712 112.747,56.1893 112.235,55.0325 112.234,54.2199 113.549,56.1014 119.574,110.99 118.014,111.915 106.529,111.915 105.037,110.99 110.922,56.1014 112.234,54.2199" fill="#808080"/>
              <circle class="gauge_circle" cx="112.303" cy="111.105" r="6" fill="white" stroke="#808080" stroke-width="6"/>
            </svg>
                      
            <div class="gauge_marks">
              <span class="gauage_mark1">5.7</span>
              <span class="gauage_mark2">6.5</span>
              <span class="gauage_mark3">7.5</span>
              <span class="gauage_mark4">8</span>
            </div>

            <div class="gauge_labels">
              <div class="gauge_1">좋음</div>
              <div class="guage_states">
                <strong ref="gaugeCount" class="gauge_count">6.7%</strong>
                <em ref="gaugeState" class="gauge_state yellow">보통</em>
              </div>
              <div class="gauge_5">나쁨</div>
            </div>
          </div>

          <div style="width: max-content; text-align: center; margin: 20px auto; border-bottom: 1px solid black;">
            <label for="gaugeValue">값 입력: </label>
            <input
              type="number"
              id="gaugeValue"
              step="0.1"
              v-model="inputValue"
              @input="updateGauge"
              @blur="resetGauge"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useHeaderOptions } from "@/composables/useHeaderOptions";

const pageTitle = ref("Chart Demo");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

const cartTest1Data = [
  {
    text: 'test1',
    value: 35
  },
  {
    text: 'test2',
    value: 50
  },
  {
    text: 'test3',
    value: 85
  },
]
function chartTest1(){
  // 숫자 애니메이션
  // [1] 00,000에서 슬롯 형식으로 nowValue까지 업데이트
  document.querySelectorAll('.container1 .skill-box b').forEach((bElement) => {
    const percent = bElement.parentElement.getAttribute('data-percent');
    let counter = 0;

    const animateCounter = () => {
      const interval = setInterval(() => {
        counter += 1;
        bElement.textContent = `${Math.min(counter, percent)}%`;
        if (counter >= percent) {
          clearInterval(interval);
        }
      }, 1000 / percent); // Adjust timing for smoother animation
    };

    animateCounter();
  });

  // 원형 진행률 애니메이션
  document.querySelectorAll('.container1 .skill-box .skills-circle li').forEach((liElement) => {
    const rightBar = liElement.querySelector('.bar-circle-right');
    const leftBar = liElement.querySelector('.bar-circle-left');
    const percent = parseInt(liElement.getAttribute('data-percent'), 10);
    let deg = 3.6 * percent;

    const setRotation = (element, degrees) => {
      element.style.transform = `rotate(${degrees}deg)`;
    };

    if (percent <= 50) {
      let currentDeg = 0;

      const animateRightBar = () => {
        const interval = setInterval(() => {
          currentDeg += 3.6;
          setRotation(rightBar, currentDeg);
          if (currentDeg >= deg) {
            clearInterval(interval);
          }
        }, 1000 / deg);
      };

      animateRightBar();
    } else {
      const fullDeg = 180;
      deg -= fullDeg;
      let runDuration = 1000 * (50 / percent);

      let currentDegRight = 0;

      const animateRightBar = () => {
        const interval = setInterval(() => {
          currentDegRight += 3.6;
          setRotation(rightBar, Math.min(currentDegRight, fullDeg));
          if (currentDegRight >= fullDeg) {
            clearInterval(interval);
            animateLeftBar();
          }
        }, runDuration / fullDeg);
      };

      const animateLeftBar = () => {
        leftBar.style.clip = 'rect(0, 150px, 150px, 75px)';
        leftBar.style.background = '#2e7c2e';
        let currentDegLeft = 0;

        const interval = setInterval(() => {
          currentDegLeft += 3.6;
          setRotation(leftBar, Math.min(currentDegLeft, deg));
          if (currentDegLeft >= deg) {
            clearInterval(interval);
          }
        }, Math.abs(runDuration) / deg);
      };

      animateRightBar();
    }
  });
}
function chartTest4(){
  const counters = document.querySelectorAll('.container4 .loader');
  counters.forEach((item) => {
    const maxValue = item.getAttribute('data-max-value');
    item.style.setProperty('--maxNum', maxValue); 
  });
}
const cartTest7Data = [
  {
    nowValue: 1754,
    maxValue: 15000,
    color: '#7a124f'
  },
  {
    nowValue: 10831,
    maxValue: 12000,
    color: '#2c998b'
  }
]
function chartTest7(){
  // 숫자 애니메이션  
  const txtElement = document.querySelectorAll('.container7 .skill-box .number-ticker strong');

  // 기본 숫자 노드 템플릿을 생성합니다.
  const defaultDigitNode = document.createElement('em');
  defaultDigitNode.classList.add('digit'); // 'digit' 클래스를 추가합니다.

  // 기본 숫자 노드에 0부터 9까지의 숫자를 각 줄마다 추가합니다.
  for (let i = 9; i >= 0; i--) {
    defaultDigitNode.innerHTML += i + '<br>'; // 줄바꿈 태그 '<br>'를 추가해 한 줄에 하나씩 표시
  }
  // 3자리마다 콤마를 추가하는 함수
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  [].forEach.call(txtElement, function (item) {
    const nowValue = parseInt(item.parentNode.parentNode.getAttribute('data-now-value'), 10);
    item.setAttribute('data-now-walk', nowValue);     
    const minNum = '0'.repeat(nowValue.toString().length);
    const digits = [];

    // console.log(txtElement, nowValue, minNum, item)

    // 초기 값을 설정합니다.
    setValue(minNum);
    setInterval(function () {
      setValue(nowValue); // 갱신할 숫자 
    }, 300);

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
        item.appendChild(d);
        digits.unshift(d);
      }
    }
  });

  // 숫자 애니메이션
  // [2] 0에서부터 nowValue까지 업데이트
  // document.querySelectorAll('.container7 .skill-box .number-ticker').forEach((txtElement) => {
  //   const nowValue = parseInt(txtElement.parentNode.getAttribute('data-now-value'), 10);
  //   console.log(nowValue)
  //   txtElement.setAttribute('data-now-walk', nowValue); 
    
  //   let counter = 0;
  //   const animateCounter = () => {
  //     const interval = setInterval(() => {
  //       counter += 1;
  //       txtElement.textContent = `${Math.min(counter, nowValue)}걸음`;
  //       if (counter >= nowValue) {
  //         clearInterval(interval);
  //       }
  //     }, 1000 / nowValue); // Adjust timing for smoother animation
  //   };
  //   animateCounter();
  // });

  // 원형 진행률 애니메이션
  document.querySelectorAll('.container7 .skill-box .skills-circle div').forEach((liElement) => {
    const rightBar = liElement.querySelector('.bar-circle-right');
    const leftBar = liElement.querySelector('.bar-circle-left');
    const chartColor = liElement.getAttribute('data-color');
    liElement.style.setProperty('--chartColor', chartColor); 

    const maxValue = parseInt(liElement.getAttribute('data-max-value'), 10)
    const nowValue = parseInt(liElement.getAttribute('data-now-value'), 10)
    const percent = (nowValue / maxValue) * 100;
    let deg = (360 * percent) / 100; // 360도를 기준으로 계산

    const setRotation = (element, degrees) => {
      element.style.transform = `rotate(${degrees}deg)`;
    };

    // 딜레이 설정 (밀리초 단위)
    const delay = 600; 

    if (percent <= 50) {
      // 진행률이 50% 이하일 경우 오른쪽 바만 회전
      let currentDeg = 0;

      const animateRightBar = () => {
        const interval = setInterval(() => {
          currentDeg += 3.6;
          setRotation(rightBar, currentDeg);
          if (currentDeg >= deg) {
            clearInterval(interval);
          }
        }, 1000 / deg);
      };

      setTimeout(animateRightBar, delay);
    } else { // 진행률이 50% 이상일 경우
      const fullDeg = 180;
      deg -= fullDeg;
      let runDuration = 700 * (50 / percent); // 애니메이션 속도 조정

      let currentDegRight = 0;

      const animateRightBar = () => {
        const interval = setInterval(() => {
          currentDegRight += 3.6;
          setRotation(rightBar, Math.min(currentDegRight, fullDeg));
          if (currentDegRight >= fullDeg) {
            clearInterval(interval);
            animateLeftBar();
          }
        }, runDuration / fullDeg); // 오른쪽 바의 애니메이션 속도 조정
      };

      const animateLeftBar = () => {
        leftBar.style.clip = 'rect(0, 150px, 150px, 75px)';
        leftBar.style.background = chartColor;
        let currentDegLeft = 0;

        const interval = setInterval(() => {
          currentDegLeft += 3.6;
          setRotation(leftBar, Math.min(currentDegLeft, deg));
          if (currentDegLeft >= deg) {
            clearInterval(interval);
          }
        }, Math.abs(runDuration) / deg); // 왼쪽 바의 애니메이션 속도 조정
      };
      setTimeout(animateRightBar, (delay*2));
    }
  });
}

const scoreNumData1 = [
  {
    NowValue: 28,
    MinValue: 0,
    MaxValue: 100,
    valueClass: 'twentyFivePercent'
  },
  {
    NowValue: 100,
    MinValue: 0,
    MaxValue: 100,
    valueClass: 'oneHundredPercent'
  }
]
const scoreNumData2 = [
  {
    NowValue: 48,
    MinValue: 0,
    MaxValue: 100
  },
  {
    NowValue: 74,
    MinValue: 0,
    MaxValue: 100
  }
]
const scoreNumData3 = [
  {
    NowValue: '8,000',
    MinValue: 0,
    MaxValue: '15,000'
  }
]
function halfChartTest2(){
  const counters = document.querySelectorAll('.halfcontainer2 .scoreNum');
  counters.forEach((item) => {
    const countersTxt = item.querySelector('.semiCircleChart_styles');
    const maxValue = item.getAttribute('data-max-value');
    item.style.setProperty('--percentage', maxValue); 

    if (maxValue >= 0 && maxValue <= 25) {
      item.style.setProperty('--fill', '#FF0000'); 
      countersTxt.innerHTML = '매우 나쁨';
    } else if (maxValue > 25 && maxValue <= 50) {
      item.style.setProperty('--fill', '#ffc505'); 
      countersTxt.innerHTML = '나쁨';
    } else if (maxValue > 50 && maxValue <= 75) {
      item.style.setProperty('--fill', '#0125c9'); 
      countersTxt.innerHTML = '좋음';
    } else if (maxValue > 75 && maxValue <= 100) {
      item.style.setProperty('--fill', '#38AF1A'); 
      countersTxt.innerHTML = '매우 좋음';
    }
  });
}
function halfChartTest3(){
  const counters = document.querySelectorAll('.halfcontainer3 .scoreNum');

  counters.forEach((item, index) => {
    const nowValue = parseInt(item.getAttribute('data-now-value'), 10); // 현재 값
    const maxValue = parseInt(item.getAttribute('data-max-value'), 10); // 최대 값

    // 현재 값을 최대 값에 대해 0~180도로 변환
    const rotateValue = (nowValue / maxValue) * 180;

    // CSS 변수로 회전값 설정
    item.style.setProperty('--percentage', rotateValue);

    // console.log(
    //   `Item ${index + 1}:`,
    //   `nowValue = ${nowValue}, maxValue = ${maxValue}, 회전값 = ${rotateValue}deg`
    // );
    
    // 기준점 계산 (maxValue의 25%, 50%, 75%, 100%)
    const threshold25 = maxValue * 0.25;
    const threshold50 = maxValue * 0.5;
    const threshold75 = maxValue * 0.75;

    // 색상 설정
    if (nowValue >= 0 && nowValue <= threshold25) {
      item.style.setProperty('--fill', '#FF0000');
    } else if (nowValue > threshold25 && nowValue <= threshold50) {
      item.style.setProperty('--fill', '#ffc505');
    } else if (nowValue > threshold50 && nowValue <= threshold75) {
      item.style.setProperty('--fill', '#0125c9');
    } else if (nowValue > threshold75 && nowValue <= maxValue) {
      item.style.setProperty('--fill', '#38AF1A');
    }
  });
}

function halfChartTest6() {
  const items = document.querySelectorAll('.halfcontainer6 ul li');

  // 전체 값의 합을 계산하여 백분율 분배 기준으로 사용
  const totalMaxValue = Array.from(items).reduce((sum, item) => {
    return sum + parseInt(item.getAttribute('data-max-value'), 10);
  }, 0);

  let accumulatedRotate = 0; // 누적 회전값 초기화

  items.forEach((item, index) => {
    const maxValue = parseInt(item.getAttribute('data-max-value'), 10); // 정수 변환
    const rotateValue = (maxValue / totalMaxValue) * 180; // 비율에 따른 회전값 계산

    // 이전 요소의 누적 회전값을 prevRotateValue로 설정
    const prevRotateValue = accumulatedRotate;

    // 누적 회전값 업데이트
    accumulatedRotate += rotateValue;

    // CSS 변수로 회전값 설정
    item.style.setProperty('--rotateValue', rotateValue);
    item.style.setProperty('--prevRotateValue', prevRotateValue);
  });

}

// halfChartTest7
const defaultValue = 6.7;

// DOM 요소를 참조하기 위한 ref
const gaugePin = ref(null);
const gaugeState = ref(null);
const gaugeCount = ref(null);
const inputValue = ref(defaultValue);
const pathItems = ref([]);

function setGaugeState(value) {
  // 상태 초기화
  pathItems.value.forEach((item) => item.classList.remove("is-state"));

  let angle = 0;
  let className = "";
  let text = "";

  // 상태에 따른 값 설정
  if (value < 5.7) {
    angle = -75;
    className = "blue";
    text = "아주 좋음";
  } else if (value >= 5.7 && value < 6.5) {
    angle = -35;
    className = "green";
    text = "약간 좋음";
  } else if (value >= 6.5 && value < 7.5) {
    angle = 0;
    className = "yellow";
    text = "보통/주의";
  } else if (value >= 7.5 && value < 8) {
    angle = 35;
    className = "orange";
    text = "나쁨";
  } else if (value >= 8) {
    angle = 75;
    className = "red";
    text = "매우 나쁨";
  }

  // 스타일 및 클래스 업데이트
  if (gaugePin.value) gaugePin.value.style.transform = `rotate(${angle}deg)`;
  if (gaugeState.value) {
    gaugeState.value.className = `gauge_state ${className}`;
    gaugeState.value.textContent = text;
  }
  if (gaugeCount.value) gaugeCount.value.textContent = `${value}%`;

  // 활성 상태 적용
  const activePathItem = pathItems.value.find(
    (item) => item.classList.contains(className)
  );
  if (activePathItem) {
    activePathItem.classList.add("is-state");
  }
}

function updateGauge() {
  const value = parseFloat(inputValue.value);
  if (isNaN(value)) {
    inputValue.value = defaultValue;
  }
  setGaugeState(inputValue.value);
}

function resetGauge() {
  if (inputValue.value === "") {
    inputValue.value = defaultValue;
    setGaugeState(defaultValue);
  }
}

function test() {
  // DOM 요소 및 초기 변수 설정
  var loader = document.querySelector('[data-js="loader--alpha"]'); // 애니메이션 대상 요소
  var start = null; // 애니메이션 시작 시간
  var time = 5000; // 애니메이션 총 지속 시간 (5초)
  var max_value = 100; // 최대 값 (100%)

  // requestAnimationFrame(브라우저 지원 함수)을 사용한 데이터 속성 증가 함수
  function step(timestamp) {
    if (start === null) {
      start = timestamp; // 시작 시간 설정
    }

    var progress = timestamp - start; // 진행률 계산

    if (progress < time) {
      // 진행률을 계산하여 `data-value` 속성에 반영
      loader.dataset.value = (progress / time * max_value).toPrecision(2);
      requestAnimationFrame(step);
    } else {
      loader.dataset.value = 100; // 최종 값 설정
    }
  }

  // 애니메이션 시작
  requestAnimationFrame(step);
}

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

  chartTest1();
  chartTest4();
  chartTest7();
  halfChartTest2();
  halfChartTest3();
  halfChartTest6();

  test();

  // halfChartTest7
  pathItems.value = Array.from(document.querySelectorAll(".path_item"));
  updateGauge();
});
</script>

<style lang="scss">
  @mixin size($num){
    width: $num;
    height: $num;
  }
  .container1{
    .skill-box{
      .skills-circle{
        ul{
          padding: 0;
          list-style-type: none;
          li{
            @include size(150px);
            background-color: #ddd;
            border-radius: 50%;
            position: relative;
            display: inline-block;
            overflow: hidden;
            margin: 10px;
            span{
              color: #2e7c2e;
              &.text, ~ b{
                top: 50%;
                left: 50%;
                position: absolute;
                transform: translate(-50%, -50%);
                margin-top: -8px;
                z-index: 1;
                ~ b{
                  font-weight: normal;
                  margin-top: 8px;
                }
              }
              &.bar-circle{
                &-right, &-left{
                  border-radius: 50%;
                  position: absolute;
                  display: block;
                  @include size(150px);
                  background: #2e7c2e;
                  clip: rect(0, 75px, 150px, 0);
                }
                // &-right, 
                &-left{
                  background: #ddd
                }
                &-cover{
                  display: block;
                  @include size(90%);
                  border-radius: 50%;
                  background-color: #eee;
                  z-index: 0;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
              }
            }
          }
        }
      }
    }
  }
  
  .container7{
    .skill-box{
      .skills-circle{
        .bar-circle{
          @include size(150px);
          background-color: #ddd;
          border-radius: 50%;
          position: relative;
          display: inline-block;
          overflow: hidden;
          margin: 10px;
          line-height: 1;
          
          span{
            color: var(--chartColor);
            &.text, 
            ~ .number-ticker{
              top: 50%;
              left: 50%;
              position: absolute;
              transform: translate(-50%, -50%);
              z-index: 1;
              ~ .number-ticker{
                line-height: 1;
                strong{
                  font-weight: normal;
                }
              }
            }
            &.bar-circle{
              &-right, &-left{
                border-radius: 50%;
                position: absolute;
                display: block;
                @include size(150px);
                background: var(--chartColor);
                clip: rect(0, 75px, 150px, 0);
              }
              // &-right, 
              &-left{
                background: #ddd
              }
              &-cover{
                display: block;
                @include size(85%);
                border-radius: 50%;
                background-color: #fff;
                z-index: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
          
          .number-ticker {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            strong{
              overflow: hidden;
              display: flex;
              align-items: flex-end;
              height: 1em;
              .digit{ 
                float: left;
                line-height: 1;
                transition: margin-bottom 1.75s ease; 
              }
              + em{
                display: inline-block;
                margin-left: 0.8px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  .container2{
    --duration: 5s;
    --bg-color: #5bf;
    --bar-color: #ddd;
    --size: 150px;

    .wrap-cont{
      display: flex;
      gap: 16px;
    }
    
    .hemisphere-wrap {
      position: relative;
      width: var(--size);
      height: var(--size);
    }
    .hemisphere,
    .hemisphere-clip {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .hemisphere:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .left-hemisphere {
      -webkit-mask-image: linear-gradient(to left, transparent 50%, black 50%);
      &:after {
        background-image: linear-gradient(to left, var(--bg-color) 50%, var(--bar-color) 50%, var(--bar-color) 100%);
        animation: left-half var(--duration) linear forwards;
        animation-delay: 0.05s;
      }
    }
    .right-hemisphere {
      -webkit-mask-image: linear-gradient(to right, transparent 50%, black 50%);
      &:after {
        background-image: linear-gradient(to right, var(--bg-color) 50%, var(--bar-color) 50%, var(--bar-color) 100%);
        animation: right-half var(--duration) linear forwards;
      }
    }
    .hemisphere-clip {
      transform: scale(.8);
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    // half test
    .hemisphere-wrap{
      &.half{
        .left-hemisphere {
          -webkit-mask-image: linear-gradient(to left, transparent 50%, black 50%);
          &:after {
            background-image: linear-gradient(to left, var(--bg-color) 50%, var(--bar-color) 50%, var(--bar-color) 100%);
            animation: unset;
            animation-delay: unset;
          }
        }
        .right-hemisphere {
          -webkit-mask-image: linear-gradient(to right, transparent 50%, black 50%);
          &:after {
            background-image: linear-gradient(to right, var(--bg-color) 50%, var(--bar-color) 50%, var(--bar-color) 100%);
            animation: right-half2 var(--duration) linear forwards;
          }
        }
        
      }
    }
  }
  @keyframes left-half { //왼쪽 (50%~)
    50% { transform: rotate(0deg); }
    100% { transform: rotate(140deg); }
  }
  @keyframes right-half { //오른쪽 (~50%)
    50%,100% { transform: rotate(180deg); }
  }
  @keyframes right-half2 { //오른쪽 (~50%)
    50%,100% { transform: rotate(140deg); }
  }

  @property --chartValue {
    syntax: '<integer>'; // --chartValue는 정수 값을 받음
    initial-value: 0;    // 기본값 0
    inherits: true;      // 상속 가능
  }
  .container3{
    $r-pad: 6em;
    $b: calc($r-pad / 3);
    $w-rng: calc(0.125 * $b);

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #222;
    div { display: grid; }

    .loader {
      --chartValue: 0;
      place-self: center;
      transform: scale(0.65);
      clip-path: circle(45%);
      animation: p 7s steps(100) forwards; //애니메이션 속도조절
      color: HSL(calc(var(--chartValue)*2), 100%, 65%);

      &.ver2{
        &:before{
          --solid: unset;
          mask: conic-gradient(
              red 0% calc(var(--chartValue) * 1%),
              #{rgba(red, 0.3)} 0%
            ) intersect,
            linear-gradient(red, red) border-box subtract,
            radial-gradient(
              red 0% #{(calc($r-pad - 2 * $w-rng))},
              transparent calc(#{calc($r-pad - 2 * $w-rng)} + 1px)
                calc(#{calc($r-pad - $w-rng)} - (-5px)),
              red #{calc($r-pad - $w-rng)} calc(#{$r-pad} + 1px),
              transparent calc(#{$r-pad} + 2px)
            );
        }
      }

      &:before,
      &:after {
        grid-row: 1;
        grid-column: 1;
      }

      &:before {
        $slice: calc(360deg / var(--n));
        $s-gap: calc(var(--f) * #{$slice});
        $solid: calc((1 - var(--f)) * #{$slice});

        border: solid $b transparent;
        padding: $r-pad;
        border-radius: 50%;
        box-shadow: inset 0 0 0 #{calc(2 * $w-rng)} currentcolor;
        --slice: #{$slice};
        --s-gap: #{$s-gap};
        --solid: #{$solid};
        background: repeating-conic-gradient(
          from calc(0.5 * var(--s-gap)),
          currentcolor 0% var(--solid),
          transparent 0% var(--slice)
        ) border-box;
        filter: blur(0.5px);
        mask: conic-gradient(
            red 0% calc(var(--chartValue) * 1%),
            #{rgba(red, 0.3)} 0%
          ) intersect,
          linear-gradient(red, red) border-box subtract,
          radial-gradient(
            red 0% #{(calc($r-pad - 2 * $w-rng))},
            transparent calc(#{calc($r-pad - 2 * $w-rng)} + 1px)
              calc(#{calc($r-pad - $w-rng)} - 1px),
            red #{calc($r-pad - $w-rng)} calc(#{$r-pad} + 1px),
            transparent calc(#{$r-pad} + 2px)
          );
        content: '';
      }

      &:after {
        content: counter(p) '%';
        place-self: center;
        counter-reset: p var(--chartValue);
        font-size: #{calc((0.625 * $r-pad) / 1.5)};
      }
    }

    @keyframes p {
      90%,100% { --chartValue: 100; }
    }
  }

  .container4{
    $r-pad: 6em;
    $b: calc($r-pad / 3);
    $w-rng: calc(0.125 * $b);

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    div { display: grid; }

    .loader {
      --chartValue: 0;
      place-self: center;
      transform: scale(0.65);
      clip-path: circle(45%);
      animation: p2 3s steps(100) forwards; //애니메이션 속도조절
      color: HSL(calc(var(--chartValue)*2), 75%, 50%);

      &.ver2{
        color: rgb(9, 103, 158);
        &:before{
          --solid: unset;
          mask: conic-gradient(
              red 0% calc(var(--chartValue) * 1%),
              #{rgba(red, 0.3)} 0%
            ) intersect,
            linear-gradient(red, red) border-box subtract,
            radial-gradient(
              red 0% #{(calc($r-pad - 2 * $w-rng))},
              transparent calc(#{calc($r-pad - 2 * $w-rng)} + 1px)
                calc(#{calc($r-pad - $w-rng)} - (-5px)),
              red #{calc($r-pad - $w-rng)} calc(#{$r-pad} + 1px),
              transparent calc(#{$r-pad} + 2px)
            );
        }
      }

      &:before,
      &:after {
        grid-row: 1;
        grid-column: 1;
      }

      &:before {
        $slice: calc(360deg / var(--n));
        $s-gap: calc(var(--f) * #{$slice});
        $solid: calc((1 - var(--f)) * #{$slice});

        border: solid $b transparent;
        padding: $r-pad;
        border-radius: 50%;
        box-shadow: inset 0 0 0 #{calc(2 * $w-rng)} currentcolor;
        --slice: #{$slice};
        --s-gap: #{$s-gap};
        --solid: #{$solid};
        background: repeating-conic-gradient(
          from calc(0.5 * var(--s-gap)),
          currentcolor 0% var(--solid),
          transparent 0% var(--slice)
        ) border-box;
        filter: blur(0.5px);
        mask: conic-gradient(
            red 0% calc(var(--chartValue) * 1%),
            #{rgba(red, 0.3)} 0%
          ) intersect,
          linear-gradient(red, red) border-box subtract,
          radial-gradient(
            red 0% #{(calc($r-pad - 2 * $w-rng))},
            transparent calc(#{calc($r-pad - 2 * $w-rng)} + 1px)
              calc(#{calc($r-pad - $w-rng)} - (-20px)),
            red #{calc($r-pad - $w-rng)} calc(#{$r-pad} + 1px),
            transparent calc(#{$r-pad} + 2px)
          );
        content: '';
      }

      &:after {
        content: counter(p) '%';
        place-self: center;
        counter-reset: p var(--chartValue);
        font-size: #{calc((0.625 * $r-pad) / 1.5)};
      }
    }

    @keyframes p2 {
      90%,100% { --chartValue: var(--maxNum); }
    }
  }

  .halfcontainer1{
    .scoreNum{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-end;
      align-content: flex-end;
      &_space{
        padding-left: 10px;
        padding-right: 10px;
      }
      &_align{
        display: contents;
        color: #687177;
      }
      &_styles{
        color: #353E44;
      }

      .twentyFivePercent{
        --percentage : 28;
        --fill: #FF0000 ;
      }
      .oneHundredPercent{
        --percentage : 100;
        --fill: #38AF1A ;
      }
    }

    .semiCircleChart{
      width: 200px;
      height: 100px;
      position: relative;
      text-align: center;
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      border-radius: 150px 150px 0 0;
      overflow: hidden;
      color: var(--fill);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      box-sizing : border-box;
      &:before, 
      &:after{
        content: '';
        width: 200px;
        height: 100px;
        border: 20px solid var(--fill);
        border-top: none;
        position: absolute;
        transform-origin :50%  0% 0;
        border-radius: 0 0 300px 300px ;
        box-sizing : border-box;
        left: 0;
        top: 100%;
      }
      &:before {
        border-color:rgba(0,0,0,.15);
        transform: rotate(180deg);
      }
      &:after{
          z-index: 3;
        animation : 1s fillGraphAnimation ease-in;
        transform: rotate( calc( 1deg * ( var(--percentage) * 1.8 ) ) );
      }
    }

    @keyframes fillAnimation{
      0%{transform : rotate(-45deg);}
      50%{transform: rotate(135deg);}
    }

    @keyframes fillGraphAnimation{
      0%{transform: rotate(0deg);}
      // 50%{transform: rotate(180deg);} 끝까지 닿았다가 돌아감
    }
  }

  .halfcontainer2{
    .scoreNum{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-end;
      align-content: flex-end;
      &_space{
        padding-left: 10px;
        padding-right: 10px;
      }
      &_align{
        display: contents;
        color: #687177;
      }
      &_styles{
        color: #353E44;
      }
    }

    .semiCircleChart{
      width: 200px;
      height: 100px;
      position: relative;
      text-align: center;
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      border-radius: 150px 150px 0 0;
      overflow: hidden;
      color: var(--fill);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      box-sizing : border-box;
      &:before, 
      &:after{
        content: '';
        width: 200px;
        height: 100px;
        border: 20px solid var(--fill);
        border-top: none;
        position: absolute;
        transform-origin :50%  0% 0;
        border-radius: 0 0 300px 300px ;
        box-sizing : border-box;
        left: 0;
        top: 100%;
      }
      &:before {
        border-color:rgba(0,0,0,.15);
        transform: rotate(180deg);
      }
      &:after{
          z-index: 3;
        animation : 1s fillGraphAnimation ease-in;
        transform: rotate( calc( 1deg * ( var(--percentage) * 1.8 ) ) );
      }
    }

    @keyframes fillAnimation{
      0%{transform : rotate(-45deg);}
      50%{transform: rotate(135deg);}
    }

    @keyframes fillGraphAnimation{
      0%{transform: rotate(0deg);}
      // 50%{transform: rotate(180deg);} 끝까지 닿았다가 돌아감
    }
  }
  
  .halfcontainer3{
    .scoreNum{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-end;
      align-content: flex-end;
      &_space{
        padding-left: 10px;
        padding-right: 10px;
      }
      &_align{
        display: contents;
        color: #687177;
      }
      &_styles{
        color: #353E44;
      }
    }

    .semiCircleChart{
      width: 200px;
      height: 100px;
      position: relative;
      text-align: center;
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      border-radius: 150px 150px 0 0;
      overflow: hidden;
      color: var(--fill);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      box-sizing : border-box;
      &:before, 
      &:after{
        content: '';
        width: 200px;
        height: 100px;
        border: 20px solid var(--fill);
        border-top: none;
        position: absolute;
        transform-origin :50%  0% 0;
        border-radius: 0 0 300px 300px ;
        box-sizing : border-box;
        left: 0;
        top: 100%;
      }
      &:before {
        border-color:rgba(0,0,0,.15);
        transform: rotate(180deg);
      }
      &:after{
          z-index: 3;
          animation : 1s fillGraphAnimation ease-in;
          transform: rotate( calc( 1deg * ( var(--percentage) ) ) );
      }
    }

    @keyframes fillAnimation{
      0%{transform : rotate(-45deg);}
      50%{transform: rotate(135deg);}
    }

    @keyframes fillGraphAnimation{
      0%{transform: rotate(0deg);}
      // 50%{transform: rotate(180deg);} 끝까지 닿았다가 돌아감
    }
  }

  .halfcontainer4{
    .semi-circle {
      position: relative;
      width: 200px;
      height: 100px;
      overflow: hidden;
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        box-sizing: border-box;
        z-index: 1;
        border: 25px solid #CCC;
        border-radius: 300px 300px 0 0;
        border-bottom: none;
        transform-origin: 50% 0%;
      }
      &::after {
        content: attr(data-value) "%";
        position: absolute;
        bottom: 0px;
        left: calc(50% - 40px);
        min-width: 80px;
        text-align: center;
        font-weight: bold;
      }
    }
    .arc {
      content: " ";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 100px;
      left: 0px;
      box-sizing: border-box;
      z-index: 2;
      border: 25px solid;
      border-top: none;
      border-color: #0099FF;
      border-radius: 0 0 300px 300px;
      transform-origin: 50% 0;
    }
    @for $i from 1 through 100 {
      .semi-circle[data-value="#{$i}"] .arc{
        @if ($i < 50) {
          border-color: #FF0000;
        }
        @else if ($i < 75) {
          border-color: #FF9900;
        } 
        @else {
          border-color: green;
        }
        
        transform: rotate(#{$i * 1.8}deg);
        animation: rotate 1s linear;
      }
    }
    @keyframes rotate {
      0% { transform: rotate(0deg); }
    }
  }

  .halfcontainer5{
    padding: 24px ;

    ul{
      position: relative;
      width: 300px;
      height: 150px;
      padding: 0;
      margin: 0;
      overflow: hidden;
      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border: 25px solid #eee;
        border-bottom: none;
        border-top-left-radius: 150px;
        border-top-right-radius: 150px;
      }
      li{
        position: absolute;
        top: 100%;
        left: 0;
        width: inherit;
        height: inherit;
        border: 25px solid;
        border-top: none;
        border-bottom-left-radius: 150px;
        border-bottom-right-radius: 150px;
        list-style: none;
        transform-origin: top center;
        animation: .4s forwards linear;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        span{
          position: absolute;
          font-size: .8rem;
          top: 5px;
          left: 8px;
          backface-visibility: hidden;
          animation: fade-in .4s linear forwards;
        }
        &:nth-child(1){
          border-color: green;
          z-index: 4;
          animation-name: rotate-one;
          span{
            transform: rotate(-36deg);
          }
        }
        &:nth-child(2){
          border-color: tomato;
          z-index: 3;
          animation-name: rotate-two;
          animation-delay: .4s;
          span{
            transform: rotate(-72deg);
            animation-delay: .4s;
          }
        }
        &:nth-child(3){
          border-color: steelblue;
          z-index: 2;
          animation-name: rotate-three;
          animation-delay: .8s;
          span{
            transform: rotate(-153deg);
            animation-delay: .8s;
          }
        }
        &:nth-child(4){
          border-color: #e6a2a4;
          z-index: 1;
          animation-name: rotate-four;
          animation-delay: 1.2s;
          span{
            transform: rotate(-180deg);
            animation-delay: 1.2s;
          }
        }
      }
    } 
    @keyframes rotate-one{
      0% { transform: roate(0deg); }
      100% { transform: rotate(36deg); }
    }
    @keyframes rotate-two{
      0% { transform: rotate(36deg); }
      100% { transform: rotate(72deg); }
    }
    @keyframes rotate-three{
      0% { transform: rotate(72deg); }
      100% { transform: rotate(153deg); }
    }
    @keyframes rotate-four{
      0% { transform: rotate(153deg); }
      100% { transform: rotate(180deg); }
    }
    @keyframes fade-in{
      0%, 90% { opacity: 0; }
      100% { opacity: 1; }
    }
  }

  .halfcontainer6{
    --chartsize: 240px;

    padding: 24px ;

    ul{
      position: relative;
      width: var(--chartsize);
      height: calc(var(--chartsize) /2);
      padding: 0;
      margin: 0;
      overflow: hidden;
      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border: 20px solid #eee;
        border-bottom: none;
        border-top-left-radius: 150px;
        border-top-right-radius: 150px;
      }
      li{
        position: absolute;
        top: 100%;
        left: 0;
        width: inherit;
        height: inherit;
        border: 20px solid;
        border-top: none;
        border-bottom-left-radius: 150px;
        border-bottom-right-radius: 150px;
        list-style: none;
        transform-origin: top center;
        animation: .4s forwards linear;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        span{
          position: absolute;
          font-size: .8rem;
          top: 5px;
          left: 8px;
          backface-visibility: hidden;
          animation: fade-in2 .4s linear forwards;
        }
        &:nth-child(1){
          border-color: green;
          z-index: 4;
          animation-name: rotate-one2;
          span{
            transform: rotate(calc(-1deg * (var(--prevRotateValue) + var(--rotateValue))));
          }
        }
        &:nth-child(2){
          border-color: tomato;
          z-index: 3;
          animation-name: rotate-two2;
          animation-delay: .4s;
          span{
            transform: rotate(calc(-1deg * (var(--prevRotateValue) + var(--rotateValue))));
            animation-delay: .4s;
          }
        }
        &:nth-child(3){
          border-color: steelblue;
          z-index: 2;
          animation-name: rotate-three2;
          animation-delay: .8s;
          span{
            transform: rotate(calc(-1deg * (var(--prevRotateValue) + var(--rotateValue))));
            animation-delay: .8s;
          }
        }
        &:nth-child(4){
          border-color: #e6a2a4;
          z-index: 1;
          animation-name: rotate-four2;
          animation-delay: 1.2s;
          span{
            transform: rotate(180deg);
            animation-delay: 1.2s;
          }
        }
      }
    } 
    @keyframes rotate-one2{
      0% { transform: rotate(0deg); }
      100% { transform: rotate(calc(1deg * (var(--prevRotateValue) + var(--rotateValue)))); }
    }
    @keyframes rotate-two2{
      0% { transform: rotate(calc(1deg * var(--prevRotateValue))); }
      100% { transform: rotate(calc(1deg * (var(--prevRotateValue) + var(--rotateValue)))); }
    }
    @keyframes rotate-three2{
      0% { transform: rotate(calc(1deg * var(--prevRotateValue))); }
      100% { transform: rotate(calc(1deg * (var(--prevRotateValue) + var(--rotateValue)))); }
    }
    @keyframes rotate-four2{
      0% { transform: rotate(calc(1deg * var(--prevRotateValue))); }
      100% { transform: rotate(180deg); }
    }
    @keyframes fade-in2{
      0%, 90% { opacity: 0; }
      100% { opacity: 1; }
    }
  }

  .halfcontainer7{
    .gauge_arcwrap {
      overflow: hidden;
      position: relative;
      width: 240px;
      height: 204px;
      margin: 0 auto;
      padding-top: 16px;
      text-align: center;
      svg {
      width: 227px;
      height: 123px;
    }
  }
  .gauge_arrows {
      transform-origin: center;
      transition: transform 0.5s ease;
  }
  .path_item {
      fill: #D9D9D9;
  }
  /* .path_item.blue { fill: #3893FE; }
      .path_item.green { fill: #5CC351; }
      .path_item.yellow { fill: #FFC532; }
      .path_item.orange { fill: #FF9F46; }
      .path_item.red { fill: #E24C3F; } */
  .gauge_pin {
      transform-origin: 112.303px 111.105px;
      transition: transform 0.1s ease-in-out;
  }
  .gauge_labels {
      display: flex;
      justify-content: space-between;
      color: #424242;
      font-size: 13px;
  }
  .guage_states {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      margin-top: -10px;
  }
  .gauge_count {
      color: #000;
      font-size: 24px;
      font-weight: 800;
      transition: color 0.5s ease-in-out;
  }
  .gauge_state {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-width: 62px;
      width: auto;
      height: 26px;
      padding: 2px 16px;
      border-radius: 14px;
      font-size: 16px;
      font-weight: 600;
      white-space: nowrap;
      transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  }
  .gauge_state.blue {
      background-color: rgba(56, 147, 254, .2);
      color: #3893FE;
  }
  .gauge_state.green {
      background-color: rgba(92, 195, 81, .2);
      color: #5CC351;
  }
  .gauge_state.yellow {
      background-color: rgba(255, 197, 50, .2);
      color: #FFC532;
  }
  .gauge_state.orange {
      background-color: rgba(255, 159, 70, .2);
      color: #FF9F46;
  }
  .gauge_state.red {
      background-color: rgba(226, 76, 63, .2);
      color: #E24C3F;
  }
  .gauge_marks {
      position: absolute;
      top: 0;
      width: 100%;
  }
  .gauge_marks span {
      position: absolute;
      color: #808080;
      font-size: 12px;
      font-weight: 400;
  }
  .gauage_mark1 {
      top: 50px;
      left: 8px;
  }
  .gauage_mark2 {
      top: 4px;
      left: 72px;
  }
  .gauage_mark3 {
      top: 4px;
      left: 152px;
  }
  .gauage_mark4 {
      top: 54px;
      right: 14px;
  }
  .blue.is-state {
      fill: #3893FE;
  }
  .green.is-state {
      fill: #5CC351;
  }
  .yellow.is-state {
      fill: #FFC532;
  }
  .orange.is-state {
      fill: #FF9F46;
  }
  .red.is-state {
      fill: #E24C3F;
  }
  /* .is-state{stroke-width: 2; stroke: #000;} */

  }

  .loadingbar{
    margin: 20px auto;
    position: relative;
    height: 1.2em;
    width: 17em;
    border: 0.1em solid #bbb;
    box-shadow: 0 0 0.25em 0.1em rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;    
    .ancl {
      animation: loading 5s linear forwards;
      width: 17em;
      height: 1.2em;
      background-size: 2em 2em;
      // background-image: (linear-gradient(45deg, rgba(black, 0.1) 25%, transparent 25%, transparent 50%, rgba(black, 0.1) 50%, rgba(black, 0.1) 75%, transparent 75%, transparent));  
      background-color: rgb(127 206 199);
      position: absolute;
      text-align: right;
      border-radius: 0.45em;
      &:after {
        content: attr(data-value) '%';
        margin: -1.5em -1.0em;
        position: absolute;
        font-weight: bold;
        font-size: 12px;
        color: #aa9;
      }
    }
    @keyframes loading {
      from { background-position: 0; width: 1%; }
      to { background-position: -5em; width: 100%; }
    }
  }
</style>