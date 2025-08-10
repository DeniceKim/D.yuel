<template>
  <main class="l-page" data-page="typo">
    <div class="chead">
      <h1 class="title center">Typography</h1>
      <p class="description center">
          폰트(Typography) 정의 - 기본 line-height:1.5<br>
          font-size 1.25rem(20px) 이상 부터 line-height:1.25
      </p>
    </div>
    <div class="cbody">
      <section data-width-size="full">
        <h2 class="title" data-title-type="bg">font-family</h2>
        <div class="typobox">
          <p class="primary semibold">1. font-family : Pretendard, Roboto, Noto Sans KR</p>
          <ul class="list">
            <li>(공통)한글, 영문, 숫자 : Pretendard</li>
            <li>대체 영문, 숫자, 특수문자 : Roboto</li>
            <li>대체 한글 : Noto Sans KR</li>
          </ul>
        </div>
        <div class="typobox">
          <p class="primary semibold">2. font-weight : regular, bold, ExtraBold</p>
          <ul class="list">
            <li>본문 : 기본 Regular (#regular) : 400 (class="regular" or class="fw-400")</li>
            <li class="semibold">타이틀, 강조 : SemiBold #bold : 600 (class="semibold" or class="fw-600"))</li>
            <li class="extra">Hn(타이틀), 헤드라인 : ExtraBold #extra : 800 (class="extra" or class="fw-800"))</li>
          </ul>
        </div>
        <div class="typobox">
          <p class="primary semibold">3. 기준 font-size : 16px / 1rem(em)</p>
          <ul class="list">
            <li>확대, 축소 단계는 큰글자, 기본(기준), 작은글자 만 구현, 최대 150%까지 확대(축소는 반대)</li>
            <li>기본(16px/1rem) : 100%</li>
            <li>큰글자(18px/1.125rem) : +25% 씩 일때 2단계, 125%, 150%</li>
            <li>작은글자(14px/0.875rem) : -25% 씩 일때 2단계, 75%, 50%</li>
          </ul>
        </div>
        <div class="typobox">
          <p class="primary semibold">4. 기준 line-height : 1.5 / 150%</p>
          <ul class="list">
            <li>font-size:1.25rem(20px) 이상 부터 line-height:1.25/125%</li>
            <li>letter-spacing : normal(0)</li>
          </ul>
        </div>
        <div class="typobox">
          <p class="fs-16 regular">
            <span>abcdefghijklmnopqrstuvwxyz</span>
            <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
            <span>1234567890</span>
            <span>가나다라마바사아자차카파타하!@#$%^&*~-</span>
          </p>
          <p class="fs-16 regular font-noto">
            <span>abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*~-</span>
            <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*~-</span>
            <span>1234567890!@#$%^&*~-</span>
            <span>1234567890"Pretendard 폰트 없을 경우 대체 폰트"!@#$%^&*~-</span>
          </p>
          <p class="fs-34 extra">font-size:2.125rem(34px); font-weight:$extra;</p>
          <p class="fs-32 extra">font-size:2rem(32px); font-weight:$extra;</p>
          <p class="fs-24 extra">font-size:1.5rem(24px); font-weight:$extra;</p>
          <p class="fs-24 semibold">font-size:1.5rem(24px); font-weight:$semibold;</p>
          <p class="fs-20 extra">font-size:1.25rem(20px); font-weight:$extra;</p>
          <p class="fs-20 semibold">font-size:1.25rem(20px); font-weight:$semibold;</p>
          <p class="fs-20 regular">font-size:1.25rem(20px); font-weight:$regular;</p>
          <p class="fs-18 extra">font-size:1.125rem(18px); font-weight:$extra;</p>
          <p class="fs-18 semibold">font-size:1.125rem(18px); font-weight:$semibold;</p>
          <p class="fs-18 regular">font-size:1.125rem(18px); font-weight:$regular;</p>
          <p class="fs-16 extra">font-size:1rem(16px); font-weight:$extra;</p>
          <p class="fs-16 semibold">font-size:1rem(16px); font-weight:$semibold;</p>
          <p class="fs-16 regular">font-size:1rem(16px); font-weight:$regular;</p>
          <p class="fs-14 extra">font-size:0.875rem(14px); font-weight:$extra;</p>
          <p class="fs-14 semibold">font-size:0.875rem(14px); font-weight:$semibold;</p>
          <p class="fs-14 regular">font-size:0.875rem(14px); font-weight:$regular;</p>
          <p class="fs-13 semibold">font-size:0.8125rem(13px); font-weight:$semibold;</p>
          <p class="fs-13 regular">font-size:0.8125rem(13px); font-weight:$regular;</p>
          <p class="fs-12 semibold">font-size:0.75rem(12px); font-weight:$semibold;</p>
          <p class="fs-12 regular">font-size:0.75rem(12px); font-weight:$regular;</p>
        </div>
        <div class="typobox">
          <p class="primary semibold">5. 세로(단락간) 여백-8의 배수</p>
          <ul class="list">
            <li>li + li : 8px</li>
            <li>ul + ul : 16px</li>
            <li>title(p) + title(p) : 24px or 32px</li>
            <li>title(p) + ul, title(p) + span : 16px</li>
            <li>title(p) + div, title(p) + img : 24px</li>
            <li>대단락 + 대단락 : <del>32px</del> 24px</li>
            <li>소단락 + 소단락 : 24px</li>
            <li>다른 성격의 단락 : 40px (ex: 하단 안내사항UI)</li>
          </ul>
        </div>
        <div class="typobox">
          <p class="primary semibold">6. 가로 여백(간격)-4의 배수</p>
          <ul class="list">
            <li>icon + text : 4px</li>
            <li>btn(icon) + btn(icon) : 20px</li>
            <li>input text + icon btn, btn + btn : 16px</li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import CButton from '@/components/base/CButton.vue'; // Button 컴포넌트 가져오기
</script>

<style lang="scss">
// @use "@/assets/scss/component/_button" as button;
</style>