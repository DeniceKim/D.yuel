/**
 * 입력 필드 및 label 동작을 설정하는 함수
 * @param {string} selector - 입력 필드 컨테이너를 선택할 CSS 선택자
 */
export function setupInputFields(selector) {
  const containers = document.querySelectorAll(selector); // 지정된 컨테이너 선택

  if (containers.length === 0) {
    console.error('No containers found for selector:', selector);
    return;
  }

  containers.forEach(container => {
    const input = container.querySelector('.c-inp, .c-textarea'); // input 및 textarea 요소 선택
    const label = container.querySelector('label'); // label 요소 선택
    const clearButton = container.querySelector('.clear-btn'); // clear 버튼 선택
    const wordCountElement = container.querySelector('.c-inp-word-count'); // word count 요소 선택
    const exceededMessage = container.querySelector('.exceeded'); // 초과 메시지 선택

    // 필수 요소 유효성 검사
    if (!input || !label) {
      console.error('Missing input/textarea or label in container:', container);
      return;
    }

    // input 요소가 checkbox, radio인 경우 제외
    if (input.tagName === 'INPUT' && ['checkbox', 'radio'].includes(input.type)) {
      return;
    }

    // 초기 input/textarea의 id 값 설정
    if (!input.id) {
      const uniqueId = `${input.tagName.toLowerCase()}-${Math.random().toString(36).substr(2, 9)}`; // 고유 ID 생성
      input.id = uniqueId;
    }

    // label의 for 속성을 input/textarea의 id 값과 동기화
    label.setAttribute('for', input.id);

    // 초기 상태 설정
    updateClearState(container, input);

    // word count 기능 활성화
    if (wordCountElement) {
      container.classList.add('is-count'); // is-count 클래스 추가
      updateWordCount(wordCountElement, input, exceededMessage);

      // 입력 이벤트 처리 (word count 업데이트)
      input.addEventListener('input', () => {
        updateWordCount(wordCountElement, input, exceededMessage);
      });
    }

    // 입력 이벤트 처리 (clear 상태 업데이트)
    input.addEventListener('input', () => {
      updateClearState(container, input);
    });

    // clear 버튼 클릭 이벤트 처리
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        input.value = ''; // 입력값 초기화
        updateClearState(container, input); // 상태 업데이트
        input.focus(); // 입력 필드에 포커스 유지

        // word count 초기화
        if (wordCountElement) {
          updateWordCount(wordCountElement, input, exceededMessage);
        }
      });
    }
  });
}

/**
 * 입력값 상태에 따라 is-clear 클래스를 업데이트
 * @param {HTMLElement} container - 입력 필드 컨테이너
 * @param {HTMLElement} input - input 또는 textarea 요소
 */
function updateClearState(container, input) {
  if (input.value.trim().length > 0) {
    container.classList.add('is-clear'); // 입력값이 있으면 is-clear 추가
  } else {
    container.classList.remove('is-clear'); // 입력값이 없으면 is-clear 제거
  }
}

/**
 * 입력값 상태에 따라 word count를 업데이트
 * @param {HTMLElement} wordCountElement - word count 표시 요소
 * @param {HTMLElement} input - input 또는 textarea 요소
 * @param {HTMLElement} exceededMessage - 초과 메시지 표시 요소
 */
function updateWordCount(wordCountElement, input, exceededMessage) {
  const maxLength = parseInt(input.getAttribute('maxlength'), 10) || 0; // maxlength 속성 값
  const currentLength = input.value.length; // 현재 입력된 글자 수
  wordCountElement.textContent = `${currentLength} / ${maxLength}`; // 글자 수 업데이트

  // 최대 글자 수 초과 여부 확인
  if (maxLength > 0 && currentLength > maxLength) {
    if (exceededMessage) {
      exceededMessage.style.display = 'block'; // 초과 메시지 표시
    }
    wordCountElement.classList.add('exceeded'); // 최대 글자 수 초과 시 클래스 추가
  } else {
    if (exceededMessage) {
      exceededMessage.style.display = 'none'; // 초과 메시지 숨김
    }
    wordCountElement.classList.remove('exceeded'); // 초과하지 않을 경우 클래스 제거
  }
}
