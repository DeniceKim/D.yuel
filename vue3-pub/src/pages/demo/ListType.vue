<template>
  <!-- data-main-type에 컴포넌트 이름(파일명)을 동적으로 설정 -->
  <main class="main" :data-main-type="mainType">
    <!-- txtbtn_list -->
    <section class="list_type_preview">
      <h3>txtbtn_list > li > item_txt > span/c-btn</h3>
      <ul class="list txtbtn_list">
        <li>
          <p class="item_txt">
            <span>오늘의 건강부채 상환</span>
            <button type="button" class="c-btn c-icon" aria-label="건강부채 상환 예시, 모달 열림">
              <i class="ri-information-2-line" aria-hidden="true"></i>
            </button>
          </p>
          <button type="button" class="c-btn c-icon" aria-label="건강노트 새 창 열림">
            <span class="text">0원</span>
            <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
          </button>
        </li>
        <li>
          <p class="item_txt">총 건강부채 상환</p>
          <span class="text">0원</span>
        </li>
      </ul>
      <ul class="list txtbtn_list">
        <li>
          <p class="item_txt">[2025.02.04] 건강부채 상환</p>
          <span class="text">0원</span>
        </li>
      </ul>
    </section>
    <!-- img_txt_list -->
    <section>
      <h3>img_txt_list > li > img/list_cont(c-badge)/c-btn</h3>
      <ul class="list img_txt_list">
        <li>
          <div class="c-img">
            <img src="https://cache.lemonhc.com/thumnail/event/60.svg" alt="">
          </div>
          <div class="list_cont">
            <div class="c-badge dailymission">
              <span class="text">Daily 건강미션</span>
            </div>
            <div class="list_cont_header">
              <strong>공복에 미지근한 물 한잔</strong>
            </div>
            <span class="sub_text">기상미션 (am 5~9)</span>
          </div>
          <button type="button" class="c-btn">
            <span class="text">5P</span>
          </button>
        </li>
        <li>
          <div class="c-img">
            <img src="https://cache.lemonhc.com/thumnail/event/49.svg" alt="">
          </div>
          <div class="list_cont">
            <div class="c-badge dailymission">
              <span class="text">Daily 건강미션</span>
            </div>
            <div class="list_cont_header">
              <strong>2,000 걸음</strong>
            </div>
          </div>
          <button type="button" class="c-btn" disabled>
            <span class="text"><em>광고보고</em>20P</span>
          </button>
        </li>
        <li>
          <div class="c-img">
            <img src="https://cache.lemonhc.com/thumnail/event/59.svg" alt="">
          </div>
          <div class="list_cont">
            <div class="c-badge dailymission">
              <span class="text">Daily 건강미션</span>
            </div>
            <div class="list_cont_header">
              <strong>7~9시간 깊은 잠</strong>
            </div>
            <span class="sub_text">수면 미션 (pm 8~12)</span>
          </div>
          <button type="button" class="c-btn" disabled>
            <span class="text">5P</span>
          </button>
        </li>
      </ul>
      <h3>img_txt_list > li > img/list_cont/group_button</h3>
      <ul class="list img_txt_list">
        <li>
          <div class="c-img">
            <img src="https://lemoncare-qa.lemonhc.com/ui/insu/resources/lemoncare/dist/img/chunk/5cec14789fa6e19cc131..svg" alt="">
          </div>
          <div class="list_cont">
            <div class="list_cont_header">
              <strong>의료마이데이터</strong>
              <div class="c-badge essIntegration">
                <span class="text">필수연동</span>
              </div>
            </div>
            <span class="sub_text">의료마이데이터를 연동해요.<br>(중앙대학교병원, 일산병원, 한국건강관리협회)</span>
          </div>
          <div class="group_button">
            <button type="button" class="c-btn">
              <span class="text">연동하기</span>
            </button>
          </div>
        </li>
        <li>
          <div class="c-img">
            <img src="https://lemoncare-qa.lemonhc.com/ui/insu/resources/lemoncare/dist/img/chunk/696ca63d649c82ab2e41..svg" alt="">
          </div>
          <div class="list_cont">
            <div class="list_cont_header">
              <strong>내 생활습관 정보</strong>
            </div>
            <span class="sub_text">흡연/음주/운동 정보를 입력해요.</span>
          </div>
          <div class="group_button">
            <time>2025.02.05 11:48</time>
            <button type="button" class="c-btn outline">
              <span class="text">업데이트</span>
            </button>
          </div>
        </li>
      </ul>
      <h3>img_txt_list > li > img/list_cont</h3>
      <ul class="list img_txt_list">
        <li>
          <div class="c-img">
            <img src="https://cache.lemonhc.com/thumnail/event/60.svg" alt="">
          </div>
          <div class="list_cont">
            <div class="c-badge dailymission">
              <span class="text">Daily 건강미션</span>
            </div>
            <strong>공복에 미지근한 물 한잔</strong>
            <span class="sub_text">5p</span>
          </div>
        </li>
        <li>
          <div class="c-img">
            <img src="https://lemoncare-qa.lemonhc.com/ui/insu/resources/lemoncare/dist/img/chunk/a3f56bdfd7aa90713a6d..svg" alt="">
          </div>
          <div class="list_cont">
            <strong>AI가 의료마이데이터 및 생활습관 정보<br>기반으로 내 건강부채 분석</strong>
            <span class="sub_text">(중앙대학교병원, 일산병원, 한국건강관리협회)</span>
          </div>
        </li>
        <li>
          <div class="c-img">
            <img src="https://lemoncare-qa.lemonhc.com/ui/insu/resources/lemoncare/dist/img/chunk/c5d919353e5bc9010905..svg" alt="">
          </div>
          <div class="list_cont">
            <strong>매일매일 맞춤건강미션으로<br>건강한 생활습관 만들기!</strong>
          </div>
        </li>
        <li>
          <div class="c-img">
            <img src="https://lemoncare-qa.lemonhc.com/ui/insu/resources/lemoncare/dist/img/chunk/35b8aa0e91899972e68a..svg" alt="">
          </div>
          <div class="list_cont">
            <strong>건강관리와 건강증진으로<br>건강비용관리 비용 감소!!</strong>
          </div>
        </li>
      </ul>
    </section>
    <!-- txt_only_list -->
    <section>
      <h3>txt_only_list > li > text</h3>
      <ul class="list txt_only_list center">
        <li>
          <p class="text" role="link">전체</p>
        </li>
        <li>
          <p class="text" role="link">Daily 건강미션</p>
        </li>
        <li>
          <p class="text" role="link">AI 맞춤건강미션</p>
        </li>
      </ul>
    </section>
    <!-- btn_list -->
    <section>
      <h3>img_txt_list > li > btn_list_cont</h3>
      <ul class="list btn_list">
        <li>
          <div class="btn_list_cont">
            <div class="info_txt">
              <div class="c-badge analysis">
                <span class="text">간편분석</span>
              </div>
              <strong>건강부채: 70,301,000원</strong>
              <time>2025.01.16 16:55</time>
            </div>
            <button type="button" class="c-btn c-icon" aria-label="간편분석 자세히 보기">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
          </div>
        </li>
        <li>
          <div class="btn_list_cont">
            <div class="info_txt">
              <div class="c-badge analysis">
                <span class="text">간편분석</span>
              </div>
              <strong>건강부채: 70,301,000원</strong>
              <time>2025.01.16 16:55</time>
            </div>
            <button type="button" class="c-btn c-icon" aria-label="간편분석 자세히 보기">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
          </div>
        </li>
        <li>
          <div class="btn_list_cont">
            <div class="info_txt">
              <div class="c-badge analysis">
                <span class="text">간편분석</span>
              </div>
              <strong>건강부채: 70,301,000원</strong>
              <time>2025.01.16 16:55</time>
            </div>
            <button type="button" class="c-btn c-icon" aria-label="간편분석 자세히 보기">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      </ul>
      <h3>img_txt_list > li.card_type > btn_list_cont</h3>
      <ul class="list btn_list">
        <li class="card_type">
          <div class="btn_list_cont">
            <div class="info_txt">
              <strong>요약보고서 <em>3~4장 분량</em></strong>
              <p class="cost">100</p>
              <span class="text">점수와 그래프 형태로 결과 표시</span>
            </div>
            <button type="button" class="c-btn c-icon" aria-label="마음 건강 요약, 페이지 이동">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
          </div>
        </li>
        <li class="card_type">
          <div class="btn_list_cont">
            <div class="info_txt">
              <strong>심층보고서 <em>10~15장 분량</em></strong>
              <p class="cost">25,000</p>
              <span class="text">결과에 대한 자세한 설명과 이론을 포함</span>
            </div>
            <button type="button" class="c-btn c-icon" aria-label="마음 건강 심층, 페이지 이동">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
          </div>
        </li>
        <li class="card_type">
          <div class="btn_list_cont">
            <div class="info_txt">
              <strong>종합보고서 <em>5~7장 분량</em></strong>
              <p class="cost">35,000</p>
              <span class="text">더 자세하고 강점/약점, 권고안을 포함</span>
            </div>
            <button type="button" class="c-btn c-icon" aria-label="마음 건강 종합, 페이지 이동">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      </ul>
    </section>
    <!-- check_list -->
    <section>
      <h3>check_list > li > c-checktype(check_content > c-img, info_txt, arrow)</h3>
      <ul class="list check_list">
        <li>
          <div class="c-checktype">
            <input type="checkbox" name="chkBox" id="chkBox1" class="c-check" />
            <label for="chkBox1" class="c-label" aria-label="하루 7시간 이상 숙면하기">
              <i class="icon" aria-hidden="true"></i>
            </label>
            <div class="check_content">
              <div class="c-img">
                <img src="https://cache.lemonhc.com/thumnail/custom-mission/sleep.svg" alt="">
              </div>
              <div class="info_txt">
                <strong>하루 7시간 이상 숙면하기</strong>
                <em>-50,300원 부채감소 | 매일</em>
              </div>
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="c-checktype">
            <input type="checkbox" name="chkBox" id="chkBox2" class="c-check" />
            <label for="chkBox2" class="c-label" aria-label="한 끼 채소 2가지 이상 포함하기">
              <i class="icon" aria-hidden="true"></i>
            </label>
            <div class="check_content">
              <div class="c-img">
                <img src="https://cache.lemonhc.com/thumnail/custom-mission/food.svg" alt="">
              </div>
              <div class="info_txt">
                <strong>한 끼 채소 2가지 이상 포함하기</strong>
                <em>-50,300원 부채감소 | 매일</em>
              </div>
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="c-checktype">
            <input type="checkbox" name="chkBox" id="chkBox3" class="c-check" />
            <label for="chkBox3" class="c-label" aria-label="스마트폰 사용 하루 30분 줄이기">
              <i class="icon" aria-hidden="true"></i>
            </label>
            <div class="check_content">
              <div class="c-img">
                <img src="https://cache.lemonhc.com/thumnail/custom-mission/life_habit.svg" alt="">
              </div>
              <div class="info_txt">
                <strong>스마트폰 사용 하루 30분 줄이기</strong>
                <em>-50,300원 부채감소 | 매일</em>
              </div>
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="c-checktype">
            <input type="checkbox" name="chkBox" id="chkBox4" class="c-check" />
            <label for="chkBox4" class="c-label" aria-label="30분 이상 중강도 운동하기">
              <i class="icon" aria-hidden="true"></i>
            </label>
            <div class="check_content">
              <div class="c-img">
                <img src="https://cache.lemonhc.com/thumnail/custom-mission/run.svg" alt="">
              </div>
              <div class="info_txt">
                <strong>30분 이상 중강도 운동하기</strong>
                <em>-64,700원 부채감소 | 일주일</em>
              </div>
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="c-checktype">
            <input type="checkbox" name="chkBox" id="chkBox5" class="c-check" />
            <label for="chkBox5" class="c-label" aria-label="국가 건강검진받기">
              <i class="icon" aria-hidden="true"></i>
            </label>
            <div class="check_content">
              <div class="c-img">
                <img src="https://cache.lemonhc.com/thumnail/custom-mission/health_check.svg" alt="">
              </div>
              <div class="info_txt">
                <strong>국가 건강검진받기</strong>
                <em>-52,700원 부채감소 | 일년</em>
              </div>
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="c-checktype">
            <input type="checkbox" name="chkBox" id="chkBox6" class="c-check" />
            <label for="chkBox6" class="c-label" aria-label="하루 7시간 이상 숙면하기">
              <i class="icon" aria-hidden="true"></i>
            </label>
            <div class="check_content">
              <div class="c-img">
                <img src="https://cache.lemonhc.com/thumnail/custom-mission/sleep.svg" alt="">
              </div>
              <div class="info_txt">
                <strong>하루 7시간 이상 숙면하기</strong>
                <em>-50,300원 부채감소 | 매일</em>
              </div>
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </div>
          </div>
        </li>
      </ul>
      <h3>check_list > li > c-checktype(check_content > arrow)</h3>
      <ul class="list check_list">
        <li>
          <div class="c-checktype">
            <input type="checkbox" name="chkBox" id="terms1" class="c-check" />
            <label for="terms1" class="c-label" aria-label="건강부채 관리 서비스 제공을 위한 민감정보의 수집 빛 이용에 대한 동의">
              <i class="icon" aria-hidden="true"></i>
            </label>
            <div class="check_content">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="c-checktype">
            <input type="checkbox" name="chkBox" id="terms2" class="c-check" />
            <label for="terms2" class="c-label" aria-label="건강부채 관리 서비스 제공을 위한 민감정보의 수집 빛 이용에 대한 동의">
              <i class="icon" aria-hidden="true"></i>
            </label>
            <div class="check_content">
              <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
            </div>
          </div>
        </li>
      </ul>
      <h3>check_list.no_arrow > li > c-checktype</h3>
      <ul class="list check_list no_arrow">
        <li v-for="(item, idx) in 3" :key="idx">
          <div class="c-checktype">
            <input type="checkbox" name="chkBox" :id="'noHasChkBox' + (idx+1)" class="c-check" />
            <label :for="'noHasChkBox' + (idx+1)" class="c-label" :aria-label="'만성질환' + (idx+1)">
              <i class="icon" aria-hidden="true"></i>
            </label>
          </div>
        </li>
      </ul>
    </section>
    <!-- chk_btn_list -->
    <section>
      <h3>chk_btn_list > c-checktype</h3>
      <div class="list chk_btn_list">
        <div class="c-checktype button outline" v-for="(item, idx) in chkList" :key="idx">
          <input type="checkbox" name="chkBox7" :id="'chkBtnList'+idx" class="c-check" />
          <label :for="'chkBtnList'+idx" class="c-label" :aria-label="item.label">
            <i class="icon" aria-hidden="true" />
          </label>
        </div>
      </div>
    </section>
    <!-- preview_list -->
    <section>
      <h3>preview_list > li > c-card</h3>
      <ul class="list preview_list">
        <li>
          <div class="c-card fill round">
            <div class="c-card-inner">
              <div class="c-card-header">
                <strong class="c-card-title">요약<br>검진보고서</strong>
              </div>
              <div class="c-card-body">
                <div class="c-img">
                  <img src="https://lemoncare-qa.lemonhc.com/ui/insu/resources/lemoncare/dist/img/chunk/7baeb929b09ec46535f1..svg" alt="">
                </div>
              </div>
              <div class="c-card-footer">
                샘플 미리보기
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="c-card fill round">
            <div class="c-card-inner">
              <div class="c-card-header">
                <strong class="c-card-title">심층<br>검진보고서</strong>
              </div>
              <div class="c-card-body">
                <div class="c-img">
                  <img src="https://lemoncare-qa.lemonhc.com/ui/insu/resources/lemoncare/dist/img/chunk/b72ed37d66f5e6ea273a..svg" alt="">
                </div>
              </div>
              <div class="c-card-footer">
                샘플 미리보기
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="c-card fill round">
            <div class="c-card-inner">
              <div class="c-card-header">
                <strong class="c-card-title">종합<br>검진보고서</strong>
              </div>
              <div class="c-card-body">
                <div class="c-img">
                  <img src="https://lemoncare-qa.lemonhc.com/ui/insu/resources/lemoncare/dist/img/chunk/fe61351d789b0fd69fe9..svg" alt="">
                </div>
              </div>
              <div class="c-card-footer">
                샘플 미리보기
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- scroll_card_list -->
    <section>
      <h3>scroll_card_list > li > c-card</h3>
      <ul class="list scroll_card_list">
        <li>
          <p class="card_content">제가 병원 방문이 꼭 필요하다는 사실을 검사 후 알게 되었습니다. 더 늦지 않아 다행인거 같아요.</p>
          <p class="card_author">29세, 이○선</p>
        </li>
        <li>
          <p class="card_content">평소에 걱정했던 부분들이 있었는데, 자가검진 후 크게 문제 없다는 결과에 안도감을 느꼈습니다.</p>
          <p class="card_author">41세, 윤○숙</p>
        </li>
        <li>
          <p class="card_content">시험삼아 해봤는데 병원에 가봐야 한다는 결과를 보고, 용기를 내어 병원에 방문하게 되었습니다.</p>
          <p class="card_author">33세, 김○희</p>
        </li>
      </ul>
    </section>
    <!-- card_list -->
    <section>
      <h3>card_list > li > c-card.horiz</h3>
      <ul class="list card_list">
        <li>
          <div class="c-card horiz">
            <div class="c-card-img">
              <div class="c-img">
                <img src="https://www.weknew.com/card/card_img.php?host=202212&img=20221215100740462.jpg" alt="">
              </div>
            </div>
            <div class="c-card-inner">
              <div class="c-card-body">
                <p>담배는 폐에 얼마나 안 좋은가요? 1편</p>
                <div class="c-btn c-icon">
                  <span class="text">자세히 보기</span>
                  <i class="ri-arrow-right-s-line bg-primary" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="c-card horiz">
            <div class="c-card-img">
              <div class="c-img">
                <img src="https://www.weknew.com/card/card_img.php?host=202301&img=20230112112355388.jpg" alt="">
              </div>
            </div>
            <div class="c-card-inner">
              <div class="c-card-body">
                <p>반드시 알아야 할 폐암의 3가지 신호 1편</p>
                <div class="c-btn c-icon">
                  <span class="text">자세히 보기</span>
                  <i class="ri-arrow-right-s-line bg-primary" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="c-card horiz">
            <div class="c-card-img">
              <div class="c-img">
                <img src="https://www.weknew.com/card/card_img.php?host=202212&img=20221215101212734.jpg" alt="">
              </div>
            </div>
            <div class="c-card-inner">
              <div class="c-card-body">
                <p>평생 건강의 필수 조건 국가암검진 1편</p>
                <div class="c-btn c-icon">
                  <span class="text">자세히 보기</span>
                  <i class="ri-arrow-right-s-line bg-primary" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="c-card horiz">
            <div class="c-card-img">
              <div class="c-img">
                <img src="https://www.weknew.com/card/card_img.php?host=202212&img=20221216082742407.jpg" alt="">
              </div>
            </div>
            <div class="c-card-inner">
              <div class="c-card-body">
                <p>반드시 알아야 할 폐암의 3가지 신호 2편</p>
                <div class="c-btn c-icon">
                  <span class="text">자세히 보기</span>
                  <i class="ri-arrow-right-s-line bg-primary" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- content_list -->
    <section>
      <h3>content_list(icon_%) > li</h3>
      <ul class="list content_list icon_docu">
        <li v-for="(item, idx) in 5" :key="idx">
          <a role="link">콘텐츠 제목{{ idx + 1 }}</a>
        </li>
      </ul>
    </section>
    <!-- imgonly_list -->
    <section>
      <h3>imgonly_list > li > c-img</h3>
      <ul class="list imgonly_list">
        <li>
          <div class="c-img">
            <img src="https://www.weknew.com/card/card_img.php?host=202302&img=20230207155154633.jpg" alt="">
          </div>
        </li>
        <li>
          <div class="c-img">
            <img src="https://www.weknew.com/card/card_img.php?host=202302&img=20230207155234794.jpg" alt="">
          </div>
        </li>
        <li>
          <div class="c-img">
            <img src="https://www.weknew.com/card/card_img.php?host=202302&img=20230207155354478.jpg" alt="">
          </div>
        </li>
        <li>
          <div class="c-img">
            <img src="https://www.weknew.com/card/card_img.php?host=202302&img=20230207155354478.jpg" alt="">
          </div>
        </li>
        <li>
          <div class="c-img">
            <img src="https://www.weknew.com/card/card_img.php?host=202212&img=20221215083043127.jpg" alt="">
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";

const pageTitle = ref("Test Page");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

  // checkbox list
  const chkList = [ 
    {label: '만성질환 ∙ 당뇨'}, 
    {label: '소아'}, 
    {label: '암정보'}, 
    {label: '피부 ∙ 미용'},
    {label: '뇌 ∙ 정신건강'},
    {label: '심장'},
    {label: '재활 ∙ 근골격'},
    {label: '건강 ∙ 생활'},
    {label: '남성'},
    {label: '여성'}
  ]

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
});

watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<style lang="scss">
@use "@/assets/scss/guide/_guide_component";
.list_type_preview{ padding-top: 4rem; }
section > h3{ padding: 0.5rem 0 1rem; font-size: 16px; }
</style>