<template>
  <div class="p_progress">
    <!-- 상단 진행 현황 -->
    <div class="chead">
      <h1 class="ui_title">{{ pageTitle }}</h1>
      <div class="progress_map">
        <p>
          <i class="flag ok">완료</i>
          <i class="flag ing">진행중</i>
          <i class="flag tbd">대기</i>
        </p>
        <div class="total">
          총:{{ totalStats.total }} | 완료:{{ totalStats.completed }} | 진행률:
          {{ totalStats.completionRate }}%
        </div>
      </div>
    </div>

    <div class="filter-section">
      <!-- 영역 필터 -->
      <!-- <label for="filterOpt" class="semibold">선택 : </label> -->
      <select v-model="selectedSource" @change="loadData" id="filterOpt">
        <option value="">전체</option>
        <option
          v-for="(key, index) in Object.keys(fileMap)"
          :key="index"
          :value="key"
        >
          {{ firstTitles[key] || "로드 중..." }}
        </option>
      </select>
    </div>

    <!-- 필터링된 데이터 렌더링 -->
    <div class="cbody">
      <div class="sitemap">
        <section
          v-for="(section, index) in sections"
          :key="index"
          :class="['section', section.class, { 'is-open': section.isOpen }]"
        >
          <button type="button" class="btn-trigger" @click="toggleSection(index)">
            <strong>{{ section.title }}</strong>
            <span>
              [총:{{ section.stats.total }} | 완료:{{ section.stats.ok }} | 진행률:
              {{ section.stats.completionRate }}%]
            </span>
            <i class="date">{{ section.date }}</i>
          </button>

          <!-- 섹션 상세 -->
          <div class="innner">
            <dl
              v-for="(sitemap, listIndex) in section.sitemap_list"
              :key="listIndex"
              class="sitemap_list"
              :class="{ 'is-open': sitemap.isOpen, 'complate': sitemap.isComplete }"
            >
              <dt @click="toggleList(index, listIndex)">
                {{ sitemap.name }}
                <span class="count">
                  [총:{{ sitemap.stats.total }} | 완료:{{ sitemap.stats.ok }} |
                  진행률:{{ sitemap.stats.completionRate }}%]
                </span>
                <!-- <span class="date">{{ sitemap.date }}</span> -->
                <router-link
                  v-if="sitemap.designLink"
                  :to="sitemap.designLink"
                  class="stylelink"
                >
                  디자인
                </router-link>
              </dt>
              <dd>
                <ul>
                  <li
                    v-for="(item, itemIndex) in sitemap.details"
                    :key="itemIndex"
                    class="depth dep1 item"
                    :class="{ del: item.status === 'del' }"
                  >
                    <template v-if="item.status === 'del'">
                      <div class="deleted-item">
                        <span>{{ item.title }}</span>
                        <i
                          class="flag del"
                          :data-start-schedule="item.startSchedule"
                          :data-end-schedule="item.endSchedule || '진행 중'"
                        >
                          {{ getStatusText(item.status) }}
                        </i>
                        <p class="path">{{ item.link }}</p>
                      </div>
                    </template>
                    <template v-else>
                      <!-- <router-link :to="getFullPath(item.link)"> -->
                        <router-link :to="item.link">
                        <span>{{ item.title }}</span>
                        <i
                          :class="['flag', item.status]"
                          :data-start-schedule="item.startSchedule"
                          :data-end-schedule="item.endSchedule || '진행 중'"
                        >
                          {{ getStatusText(item.status) }}
                        </i>
                        <p class="path">{{ item.link }}</p>
                      </router-link>
                    </template>
                    <router-link
                      v-if="item.designLink && item.status !== 'del'"
                      :to="item.designLink"
                      class="stylelink"
                    >
                      디자인
                    </router-link>
                    <ul v-if="item.history?.length" class="history">
                      <li v-for="(entry, entryIndex) in item.history" :key="entryIndex">
                        {{ entry }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted, watch } from "vue";

const pageTitle = ref("퍼블리싱 UI 진행 현황");

// JSON 파일을 import
import common from "@/data/common.json";   // 공통 가이드
import demo from "@/data/demo.json";       // 데모 UI 확인용

// JSON 데이터 매핑
const fileMap = {
  common,
  demo,
};

const sections = reactive([]); // 데이터 섹션
const selectedSource = ref(localStorage.getItem("selectedSource") || ""); // 초기 상태 로드
const firstTitles = reactive({}); // JSON의 첫 번째 타이틀 저장

// 상태 텍스트 매핑
const getStatusText = (status) => {
  switch (status) {
    case "ok":
      return "완료";
    case "ing":
      return "진행중";
    case "tbd":
      return "대기";
    case "del":
      return "삭제";
    default:
      return "";
  }
};

// 첫 번째 타이틀 로드
const loadFirstTitles = async () => {
  try {
    for (const [key, data] of Object.entries(fileMap)) {
      firstTitles[key] = data[0]?.title || "제목 없음";
    }
  } catch (error) {
    console.error("첫 번째 타이틀 로드 실패:", error);
  }
};

// 데이터 로드
const loadData = async () => {
  try {
    if (!selectedSource.value) {
      // 모든 JSON 데이터를 병합
      const combinedData = Object.values(fileMap).flatMap((data) => data || []);
      sections.splice(0, sections.length, ...combinedData);
      initializeSections(); // 초기 로드시 진행률 100% 아닌 섹션만 펼침
    } else {
      // 선택된 소스의 데이터 사용
      const data = fileMap[selectedSource.value];
      sections.splice(0, sections.length, ...(data || []));
      initializeSections(true); // 필터 선택 시 첫 번째만 펼침
    }
  } catch (error) {
    console.error("데이터 로드 실패:", error);
  }
};

// 섹션 초기화 (진행률 계산)
const initializeSections = (expandFirst = false) => {
  sections.forEach((section, index) => {
    // 초기화
    section.stats = { total: 0, ok: 0, completionRate: 0 };

    section.sitemap_list.forEach((list, listIndex) => {
      // 초기화
      list.stats = { total: 0, ok: 0, completionRate: 0 };

      // "삭제" 항목 제외
      const validItems = list.details.filter((item) => item.status !== "del");

      validItems.forEach((item) => {
        list.stats.total++; // 총 개수 증가
        if (item.status === "ok") {
          list.stats.ok++; // 완료된 항목 증가
        }
      });

      list.isComplete = validItems.every((item) => item.status === "ok");
      list.stats.completionRate = Math.floor(
        (list.stats.ok / list.stats.total) * 100
      );

      section.stats.total += list.stats.total;
      section.stats.ok += list.stats.ok;

      list.isOpen =
        expandFirst && index === 0 && listIndex === 0
          ? true
          : !expandFirst && list.stats.completionRate !== 100;
    });

    section.stats.completionRate = Math.floor(
      (section.stats.ok / section.stats.total) * 100
    );

    section.isOpen =
      expandFirst && index === 0
        ? true
        : !expandFirst && section.stats.completionRate !== 100;
  });
};

// 전체 통계 계산
const totalStats = computed(() => {
  let total = 0;
  let completed = 0;
  sections.forEach((section) => {
    total += section.stats.total || 0;
    completed += section.stats.ok || 0;
  });
  return {
    total,
    completed,
    completionRate: total ? Math.floor((completed / total) * 100) : 0,
  };
});

// 섹션 열기/닫기 토글
const toggleSection = (index) => {
  sections[index].isOpen = !sections[index].isOpen;
};

// 리스트 열기/닫기 토글
const toggleList = (sectionIndex, listIndex) => {
  sections[sectionIndex].sitemap_list[listIndex].isOpen =
    !sections[sectionIndex].sitemap_list[listIndex].isOpen;
};

// 컴포넌트 마운트 시 초기화
onMounted(() => {
  document.title = pageTitle.value;
  loadFirstTitles();
  loadData();
});

// 선택된 소스 변경 감시
watch(selectedSource, (newSource) => {
  localStorage.setItem("selectedSource", newSource);
  loadData();
});
watch(pageTitle, (newTitle) => {
  document.title = newTitle;
});
</script>


<style lang="scss" scoped>
@use "@/assets/scss/common/style" as style;
@use "@/assets/scss/guide/guide" as guide;
</style>