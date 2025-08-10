<template>
  <div class="subaccordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['subaccitem', { 'is-open': item.isOpen }]"
    >
      <div class="subacc_header">
        <button
          type="button"
          class="btn-title"
          :aria-expanded="item.isOpen"
          :aria-label="item.isOpen ? item.label + ' 내용 접기' : item.label + ' 내용 보기'"
          @click="toggleOrClick(item)"
        >
          <i class="ri-survey-line" data-icon-size="18" aria-hidden="true"></i>
          <span class="txt" aria-hidden="true">{{ item.title }}</span>
        </button>
      </div>
      <div class="subacc_panel" v-if="item.isOpen">
        <article class="resultsheet">
          <div role="group" class="group bg-primary left" data-message="testresult" data-group-type="box" data-bgcolor="opacity8" data-radius="true">
            <p role="text" class="title" data-title-type="message" :aria-label="item.resultTitle" tabindex="0">
              <span class="text txt-black" aria-hidden="true">{{ item.resultTitle }}</span>
            </p>
            <button type="button" class="btn-more" aria-label="검사정보 새 창 열림">
                <span aria-hidden="true">검사정보</span>
                <i class="ri-external-link-line" aria-hidden="true"></i>
            </button>
          </div>
          <div class="table" data-table-type="div">
            <div class="rowgroup">
              <div class="tr" role="text" tabindex="0" :aria-label="item.result">
                <div class="th" aria-hidden="true">결과</div>
                <div class="td" aria-hidden="true">{{ item.result }}</div>
              </div>
              <button type="button" class="btn-itext right">
                <span class="txt">상세보기</span>
                <i class="ri-arrow-right-circle-line" data-icon-size="18" aria-hidden="true"></i>
              </button>
            </div>
            <div class="rowgroup">
              <div class="tr" role="text" tabindex="0">
                <div class="th" aria-hidden="true">참고치</div>
                <div class="td" aria-hidden="true">
                  <span class="txt-dimgray">{{ item.referenceRange }}</span>
                  <span class="unit">{{ item.unit }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toggleAccordion, clickAccordion } from '@/utils/accordion';

const props = defineProps({
  items: Array, // 서브 아코디언 항목 데이터
  type: String, // toggle or click
});

const toggleOrClick = (item) => {
  if (props.type === 'toggle') {
    toggleAccordion(item);
  } else {
    const siblings = props.items.filter((i) => i !== item);
    clickAccordion(item, siblings);
  }
};
</script>

<style scoped>
</style>
