<template>
  <main class="l-page" data-page="color">
    <div class="chead">
      <h1 class="title center">Color</h1>
      <p class="description center">
        컬러(Color) 정의 - css :root 변수 활용<br />
        primary, secondary, tertiary 색상은 병원별로 다르게 표현됨.
      </p>
      <div class="colorpicker">
        <div class="cp" :style="{ backgroundColor: colors.primary }">
          <em :style="{ color: textColor.primary }">rgb({{ colors.primary }})</em>
          <span :style="{ color: textColor.primary }">{{ colorHex.primary }}</span>
        </div>
        <div class="cs" :style="{ backgroundColor: colors.secondary }">
          <em :style="{ color: textColor.secondary }">rgb({{ colors.secondary }})</em>
          <span :style="{ color: textColor.secondary }">{{ colorHex.secondary }}</span>
        </div>
        <div class="ct" :style="{ backgroundColor: colors.tertiary }">
          <em :style="{ color: textColor.tertiary }">rgb({{ colors.tertiary }})</em>
          <span :style="{ color: textColor.tertiary }">{{ colorHex.tertiary }}</span>
        </div>
      </div>
      <div role="group" class="group" data-group-type="btn" data-group-dir="btnwrap" data-gap="5">
        <button
          v-for="(btnClass, index) in hospitalClasses"
          :key="index"
          type="button"
          class="c-btn"
          @click="handleButtonClick(btnClass)"
        >
          <span class="text">{{ btnClass.name }}</span>
        </button>
      </div>
    </div>
    <div class="cbody">
      <section data-width-size="full">
        <h2 class="title" data-title-type="bg">Primary Color - 주색(타입별로 변경됨)</h2>
        <div class="colorbox p" style="background-color:rgb(var(--primary));color:var(--white)">
          <p>primary</p>
        </div>
      </section>
      <section data-width-size="full">
        <h2 class="title" data-title-type="bg">Secondary Color - 부색(타입별로 변경됨)</h2>
        <div class="colorbox s" style="background-color:rgb(var(--secondary));color:var(--white)">
          <p>$secondary</p>
        </div>
      </section>
      <section data-width-size="full">
        <h2 class="title" data-title-type="bg">Tertiary Color - 포인트색(타입별로 변경됨)</h2>
        <div class="colorbox t" style="background-color:rgb(var(--tertiary));color:var(--black)">
          <p>$tertiary</p>
        </div>
      </section>
      <section data-width-size="full">
        <h2 class="title" data-title-type="bg">Background Color - Only 배경 색상으로 사용됨</h2>
        <div class="colorbox" style="background-color:var(--bg-primary-opacity8);color:var(--black)">
          <p>var(--bg-primary-opacity8)</p>
        </div>
      </section>

      <section class="mt-3" data-width-size="full">
        <h2 class="title" data-title-type="bg">공통</h2>
        <div class="colorbox" style="background-color:var(--black);color:var(--white)">
          <p>검정(black) - HEX : #000 var(--black)</p>
        </div>
        <div class="colorbox" style="background-color:var(--deepgray);color:var(--white)">
          <p>회색(deepgray) - HEX : #424242 var(--deepgray)</p>
        </div>
        <div class="colorbox" style="background-color:var(--dimgray);color:var(--white)">
          <p>회색(dimgray) - HEX : #696969 var(--dimgray)</p>
        </div>
        <div class="colorbox" style="background-color:var(--silver);color:var(--black)">
          <p>회색(silver) - HEX :  #c0c0c0 var(--silver)</p>
        </div>
        <div class="colorbox" style="background-color:var(--lightgray);color:var(--black)">
            <p>회색(lightgray) - HEX :  #e1e1e1 var(--lightgray)</p>
        </div>
        <div class="colorbox" style="background-color:var(--bg-gray);color:var(--black)">
            <p>회색(bg-gray) - HEX :  #f7f7f7 var(--bg-gray)</p>
        </div>
        <div class="colorbox" style="border:1px solid var(--lightgray);background-color:var(--white);color:var(--black)">
          <p>흰색(white) - HEX :  #fff var(--white)</p>
        </div>
        <div class="colorbox" style="background-color:var(--red);color:var(--white)">
          <p>빨강(red) - HEX :  #eb2f00 var(--red)</p>
        </div>
        <div class="colorbox" style="background-color:var(--green);color:var(--white)">
          <p>초록(green) - HEX :  #eb2f00 var(--green)</p>
        </div>
        <div class="colorbox" style="background-color:var(--blue);color:var(--white)">
          <p>파랑(blue) - HEX :  #3769f4 var(--blue)</p>
        </div>
        <div class="colorbox" style="background-color:var(--orange);color:var(--white)">
          <!-- <p>주황(orange) - HEX :  #ff6e00 var(--orange)</p> -->
          <p>주황(orange) - HEX :  #F16600 var(--orange)</p>
        </div>
        <div class="colorbox" style="background-color:var(--bg-yellow);color:var(--black)">
          <p>노랑 배경(bg-yellow) - HEX :  #ffb900 var(--bg-yellow)</p>
        </div>
        <div class="colorbox" style="background-color:var(--txt-yellow);color:var(--white)">
          <p>노랑 텍스트(txt-yellow) - HEX :  #d6800e var(--txt-yellow)</p>
        </div>
      </section>

      <section class="mt-3" data-width-size="full">
        <h2 class="title" data-title-type="bg">공통 검정색 배경 투명도</h2>
        <div class="colorbox" style="background-color:var(--black-opacity70);color:var(--white)">
          <p>투명도 70% - RGBA : rgba(0, 0, 0, 0.7) var(--black-opacity70)</p>
        </div>
        <div class="colorbox" style="background-color:var(--black-opacity50);color:var(--white)">
          <p>투명도 50% - RGBA : rgba(0, 0, 0, 0.5) var(--black-opacity50)</p>
        </div>
        <div class="colorbox" style="background-color:var(--black-opacity10);color:var(--black)">
          <p>투명도 10% - RGBA : rgba(0, 0, 0, 0.1) var(--black-opacity10)</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import { useHeaderStore } from '@/store/useHeaderStore'; // header 타이틀 호출
import { useHospitalStore } from '@/store/hospitalStore';

const hospitalStore = useHospitalStore();
const headerStore = useHeaderStore();

// 페이지 타이틀 설정
onMounted(() => {
  document.title = 'Color'; // 원하는 페이지 타이틀로 설정
  headerStore.setTitle('Color'); // header 타이틀 변경
  hospitalStore.initializeHospital(); // 초기화
});

// 병원 클래스 목록
const hospitalClasses = reactive([
  { name: "기본 Color", class: "default" },
]);

// 색상 값 (초기 값 설정)
const colors = reactive({
  primary: "rgb(var(--primary))",
  secondary: "rgb(var(--secondary))",
  tertiary: "rgb(var(--tertiary))",
});

// RGB 값을 HEX로 변환
const rgb2hex = (rgb) => {
  const rgbArray = rgb.match(/\d+/g)?.map(Number);
  if (!rgbArray || rgbArray.length !== 3) return "#000000"; // 기본값
  return `#${rgbArray.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
};

// 명도 대비 계산
const contrast = (rgb1, rgb2) => {
  const luminance = (r, g, b) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  const lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
};

// 텍스트 색상 선택
const chooseTextColor = (bgColor) => {
  try {
    const rgbArray = bgColor.match(/\d+/g)?.map(Number);
    if (!rgbArray || rgbArray.length !== 3) return "black";

    const white = [255, 255, 255];
    const black = [0, 0, 0];

    return contrast(rgbArray, white) >= 4.5 ? "white" : "black";
  } catch (error) {
    console.error("Error in chooseTextColor:", error);
    return "black";
  }
};

// HEX 및 텍스트 색상 계산
const colorHex = computed(() => ({
  primary: rgb2hex(colors.primary),
  secondary: rgb2hex(colors.secondary),
  tertiary: rgb2hex(colors.tertiary),
}));

const textColor = computed(() => ({
  primary: chooseTextColor(colors.primary),
  secondary: chooseTextColor(colors.secondary),
  tertiary: chooseTextColor(colors.tertiary),
}));

// 버튼 클릭 핸들러
const handleButtonClick = (btnClass) => {
  /* const html = document.documentElement;
  const allClasses = hospitalClasses.map((cls) => cls.class);

  html.classList.remove(...allClasses);
  html.classList.add(btnClass.class); */

  // 병원 클래스 상태 업데이트
  hospitalStore.setHospital(btnClass.class);
  // 색상 업데이트
  updateColors();
};


// 색상 업데이트 함수
const updateColors = () => {
  const computedStyles = getComputedStyle(document.documentElement);
  colors.primary = computedStyles.getPropertyValue("--primary").trim() || "rgb(240, 240, 240)";
  colors.secondary = computedStyles.getPropertyValue("--secondary").trim() || "rgb(200, 200, 200)";
  colors.tertiary = computedStyles.getPropertyValue("--tertiary").trim() || "rgb(150, 150, 150)";
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/component/_button" as button;
.main{padding-top:1rem;}
.chead{padding-top:0;}
.colorbox{padding:0.5rem 1rem;font-size:.875rem;}
[data-group-dir=btnwrap] .btn[data-class="default"]{width:100%!important}
.colorpicker{display:flex;justify-content: space-between;position:sticky;top:0;z-index:1;width:100%;margin-bottom:.5rem;}
.colorpicker div{display:inline-flex;flex-direction: column;align-items:center;justify-content: center;flex:1 auto;height:2.5rem;font-size:12px;color:#fff;}
.colorpicker em,
.colorpicker span{display:inline-block;width:100%;text-align: center;}
</style>