<template>
  <main class="main" data-main-type="collapse">
    <div class="accordion">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['accitem', { 'is-open': item.isOpen }]"
      >
        <div class="acc_header">
          <h2 class="acc_title" :aria-label="item.label">
            <strong aria-hidden="true">{{ item.title }}</strong>
            <span class="date" aria-hidden="true">{{ item.date }}</span>
          </h2>
          <button
            type="button"
            class="btn trigger"
            data-btn-type="icon"
            :aria-expanded="item.isOpen"
            :aria-label="item.isOpen ? '내용 접기' : '내용 보기'"
            @click="toggle(item)"
          >
            <i
              :class="[item.isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line']"
              data-icon-size="24"
              aria-hidden="true"
            ></i>
          </button>
        </div>
        <div class="acc_panel" v-if="item.isOpen">
          <SubAccordion :items="item.subItems" :type="item.subType" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { toggleAccordion } from '@/utils/accordion';
import SubAccordion from './SubAccordion.vue';

// 아코디언 데이터
const items = ref([
  {
    title: '검사결과',
    date: '2023-06-30(금)',
    label: '검사결과, 2023-06-30(금)',
    isOpen: true,
    subType: 'toggle', // 서브 아코디언 타입
    subItems: [
      {
        title: '일반화학',
        label: '일반화학 내용 보기',
        isOpen: true,
        resultTitle: 'Calcium(칼슘)',
        result: '8.9',
        referenceRange: '8.5~10.5',
        unit: '(mg/dL)',
      },
      {
        title: '뇨 검사',
        label: '뇨 검사 내용 보기',
        isOpen: false,
        resultTitle: 'Inorganic P(인)',
        result: '8.9',
        referenceRange: '2.5~4.5',
        unit: '(mg/dL)',
      },
    ],
  },
]);
const toggle = (item) => {
  toggleAccordion(item);
};
</script>

<style scoped>
</style>
