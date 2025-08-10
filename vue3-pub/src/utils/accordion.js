// src/utils/accordion.js

/**
 * 토글 방식 아코디언
 * @param {Object} item - 클릭된 아코디언 항목
 */
export function toggleAccordion(item) {
  item.isOpen = !item.isOpen;
}

/**
 * 클릭 방식 아코디언
 * @param {Object} item - 클릭된 아코디언 항목
 * @param {Array} siblings - 형제 요소들
 */
export function clickAccordion(item, siblings) {
  siblings.forEach((sibling) => {
    sibling.isOpen = false;
  });
  item.isOpen = true;
}
