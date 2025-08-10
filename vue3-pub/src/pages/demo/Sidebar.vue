<template>
  <main class="l-page" :data-page="pageType">
    <div class="chead">
      <h2 class="title">{{ pageTitle }}</h2>
    </div>
    <!-- //.chead -->
    <div class="cbody">
      <section>
        <button
          type="button"
          class="c-btn"
          :class="{ 'is-active': isSidebarBtnActive }"
          @click="openSidebar"
        >
          <span class="text">사이드바 열기</span>
        </button>
      </section>
    </div>
    <!-- //.cbody -->
    
    <!-- sidebar -->
    <teleport to="body">
      <div class="c-sidebar" :class="{ 'is-show': sidebarVisible }">
        <div class="c-sidebar-inner">
          <div class="c-sidebar-head">
            <strong classs="c-sidebar-title">상단 내용</strong>
            <button type="button" class="c-sidebar-close" aria-label="닫기" @click="closeSidebar">
              <i class="icon close"></i>
            </button>
          </div>
          <div class="c-sidebar-body">
            <article>
  
              <div class="c-card outline round">
                <div class="c-card-img">
                  <div class="c-img">
                    <img src="https://picsum.photos/900/250/?image=3" alt="">
                  </div>
                </div>
                <div class="c-card-inner">
                  <div class="c-card-header">
                    <strong class="c-card-title">Title</strong>
                  </div>
                  <div class="c-card-body">
                    <div class="c-table">
                      <div class="c-thead">
                        <div class="c-tr">
                          <div class="c-th">구분</div>
                          <div class="c-th">제목</div>
                          <div class="c-th">비고</div>
                        </div>
                      </div>
                      <div class="c-tbody">
                        <div class="c-tr">
                          <div class="c-th">HTML</div>
                          <div class="c-td">HTML 기본 문법</div>
                          <div class="c-td"></div>
                        </div>
                        <div class="c-tr">
                          <div class="c-th">CSS</div>
                          <div class="c-td">CSS 기본 문법</div>
                          <div class="c-td"></div>
                        </div>
                      </div>
                    </div>
                    <ul class="c-list">
                      <li>desc형식의 리스트</li>
                      <li>
                        <span>텍스트텍스트텍스트텍스트텍스트텍스트</span>
                        <ul class="depth2">
                          <li>depth2 테스트 line bullet</li>
                        </ul>
                      </li>
                      <li>
                        <strong>텍스트텍스트텍스트텍스트텍스트텍스트</strong>
                        <ul>
                          <li>depth2 테스트 no bullet</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="c-card-footer">
                    <button type="button" class="c-btn">
                      <span class="text">primary default</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
  
            <article>
              <div class="c-card outline round">
                <div class="c-card-inner">
                  <div class="c-card-header">
                    <strong class="c-card-title">Title</strong>
                  </div>
                  <div class="c-card-body">
                    <div class="c-table">
                      <div class="c-thead">
                        <div class="c-tr">
                          <div class="c-th">구분</div>
                          <div class="c-th">제목</div>
                          <div class="c-th">비고</div>
                        </div>
                      </div>
                      <div class="c-tbody">
                        <div class="c-tr">
                          <div class="c-th">HTML</div>
                          <div class="c-td">HTML 기본 문법</div>
                          <div class="c-td"></div>
                        </div>
                        <div class="c-tr">
                          <div class="c-th">CSS</div>
                          <div class="c-td">CSS 기본 문법</div>
                          <div class="c-td"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c-card-footer">
                    <button type="button" class="c-btn secondary">
                      <span class="text">secondary default</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="c-sidebar-foot">
            하단 내용
          </div>
        </div>
      </div>
    </teleport>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useHeaderOptions } from "@/composables/useHeaderOptions";

const pageTitle = ref("Floating Demo");
const pageType = ref("");
const { setHeaderOptions } = useHeaderOptions();

const isSidebarBtnActive = ref(false);
const sidebarVisible = ref(false);

const openSidebar = (event) => {
  isSidebarBtnActive.value = !isSidebarBtnActive.value;
  sidebarVisible.value = !sidebarVisible.value;
};
const closeSidebar = () => {
  isSidebarBtnActive.value = false;
  sidebarVisible.value = null;
}; 

// 페이지 초기화
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

// 페이지 제목 변경 감지
watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_button" as button;
@use "@/assets/scss/component/_card" as card;
@use "@/assets/scss/component/_list" as list;
@use "@/assets/scss/component/_table" as table;
</style>