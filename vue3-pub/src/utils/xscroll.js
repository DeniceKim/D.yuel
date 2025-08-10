/**
 * 선택된 항목을 중앙으로 스크롤
 * @param {HTMLElement} container - 스크롤 컨테이너 요소
 * @param {HTMLElement} item - 선택된 항목 요소
 */
export function xScrollToCenter(container, item) {
  if (!container || !item) return;

  const containerRect = container.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  // 중앙 정렬 계산
  const scrollLeft =
    container.scrollLeft + (itemRect.left - containerRect.left) - container.clientWidth / 2 + item.clientWidth / 2;

  // 부드럽게 스크롤 이동
  container.scrollTo({
    left: scrollLeft,
    behavior: 'smooth',
  });
}
