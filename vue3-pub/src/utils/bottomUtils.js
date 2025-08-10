/**
 * 하단 고정 그룹(class: group)의 상태에 따라 body 클래스 관리
 * - data-group-pos="bottom"이 있는 경우 body에 is-btm 추가
 * - data-group-dir="column" && .btn이 2개일 경우 body에 len2 추가
 * - data-group-dir="column"이 없으면 len2는 추가되지 않음
 */
export const manageBottomGroupClasses = () => {
  const body = document.body;

  // 모든 data-group-pos="bottom" 요소 탐색
  const bottomGroups = document.querySelectorAll('[data-group-pos="bottom"]');
  let isLen2 = false; // len2 상태 추적
  let isBtm = false; // is-btm 상태 추적

  bottomGroups.forEach((group) => {
    const isColumn = group.getAttribute('data-group-dir') === 'column'; // column 속성 여부 확인
    const buttons = group.querySelectorAll('.btn'); // 그룹 내 버튼 찾기

    if (buttons.length >= 1) {
      isBtm = true; // 버튼이 1개 이상이면 is-btm 조건 충족
    }

    if (isColumn && buttons.length === 2) {
      isLen2 = true; // column이고 버튼이 2개일 때 len2 조건 충족
    }
  });

  // is-btm 조건 처리
  if (isBtm) {
    body.classList.add('is-btm');
  } else {
    body.classList.remove('is-btm');
  }

  // len2 조건 처리
  if (isLen2) {
    body.classList.add('len2');
  } else {
    body.classList.remove('len2');
  }
};

/**
 * DOM 변경 감지를 통해 하단 고정 그룹의 상태를 실시간으로 업데이트
 */
export const observeBottomGroups = () => {
  // 초기 클래스 관리 실행
  manageBottomGroupClasses();

  // MutationObserver를 사용해 DOM 변경 감지
  const observer = new MutationObserver(() => {
    manageBottomGroupClasses();
  });

  // body를 대상으로 하위 트리 감지
  observer.observe(document.body, {
    childList: true, // 자식 노드 추가/제거 감지
    subtree: true,   // 하위 모든 노드 감지
  });

  // Observer 해제를 위한 함수 반환
  return () => observer.disconnect();
};
