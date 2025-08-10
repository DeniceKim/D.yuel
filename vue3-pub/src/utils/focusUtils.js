export const initializeFocusEvents = () => {
  const addFocusListeners = () => {
    // 이벤트 핸들러 정의
    const handleFocus = (event) => {
      const target = event.target;
      if (
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') &&
        target.type !== 'checkbox' &&
        target.type !== 'radio'
      ) {
        target.parentElement?.classList.add('is-focus'); // 부모에 `is-focus` 클래스 추가
      }
    };

    const handleBlur = (event) => {
      const target = event.target;
      if (
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') &&
        target.type !== 'checkbox' &&
        target.type !== 'radio'
      ) {
        target.parentElement?.classList.remove('is-focus'); // `is-focus` 클래스 제거
      }
    };

    const handleAttributes = (input) => {
      const parent = input.parentElement;
      if (input.readOnly) {
        parent?.classList.add('is-readonly'); // `is-readonly` 클래스 추가
      } else {
        parent?.classList.remove('is-readonly'); // `is-readonly` 클래스 제거
      }
      if (input.disabled) {
        parent?.classList.add('is-disabled'); // `is-disabled` 클래스 추가
      } else {
        parent?.classList.remove('is-disabled'); // `is-disabled` 클래스 제거
      }
    };

    // DOM에 있는 모든 `input`과 `textarea` 요소를 초기화
    const initializeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        if (input.type !== 'checkbox' && input.type !== 'radio') {
          handleAttributes(input); // 초기 `readonly`, `disabled` 상태 처리
        }
      });
    };

    // DOM 이벤트 리스너 추가
    document.addEventListener('focus', handleFocus, true); // 캡처 단계에서 처리
    document.addEventListener('blur', handleBlur, true);

    // DOM 변화 감지 및 동적으로 처리
    const observer = new MutationObserver(() => {
      initializeInputs(); // 새로운 `input` 요소가 추가될 때 초기화
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // 초기화 실행
    initializeInputs();

    // 이벤트 및 옵저버 제거 함수 반환
    return () => {
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('blur', handleBlur, true);
      observer.disconnect();
    };
  };

  return addFocusListeners();
};
