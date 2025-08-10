export const initializeScrollEvents = () => {
  let previousScrollTop = window.scrollY; // 이전 스크롤 위치
  let isScrolling; // 스크롤 상태를 추적하는 타이머 변수
  const header = document.querySelector('.c-header'); // header 엘리먼트

  const handleScroll = () => {
    const currentScrollTop = window.scrollY; // 현재 스크롤 위치
    const body = document.body;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // 스크롤 상단 감지
    if (currentScrollTop === 0) {
      body.classList.add('top');
      if (header) header.classList.remove('is-shadow'); // 상단일 때 shadow 제거
    } else {
      body.classList.remove('top');
      if (header) header.classList.add('is-shadow'); // 스크롤 시 shadow 추가
    }

    // 스크롤 방향 감지
    if (currentScrollTop > previousScrollTop) {
      body.classList.remove('scrollup');
      body.classList.add('scrolldown');
    } else {
      body.classList.remove('scrolldown');
      body.classList.add('scrollup');
    }

    // 하단 도달 확인
    if (currentScrollTop + windowHeight >= docHeight) {
      body.classList.add('end');
    } else {
      body.classList.remove('end');
    }

    // 스크롤 멈춤 상태 감지
    body.classList.remove('fstop');
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      body.classList.add('fstop');
    }, 150);

    previousScrollTop = currentScrollTop; // 현재 스크롤 위치를 이전 값으로 저장
  };

  // 스크롤 이벤트 등록
  window.addEventListener('scroll', handleScroll);

  // 이벤트 제거 함수 반환
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * textarea 클릭 시 화면 상단으로 이동 및 iOS 키패드 대응
 * 현재 헤더 높이를 탐지.
 * 헤더가 존재하면 동적으로 계산된 offsetHeight 사용.
 * 헤더가 없으면 기본값 20px 사용.
textarea가 화면 상단에 위치하도록 스크롤합니다.
 * @param {number} defaultOffset 기본 추가 여백 (기본값 20px)
 */
export const initializeTextareaFocusHandler = (defaultOffset = 20) => {
  const handleFocus = (event) => {
    const target = event.target;

    // textarea 요소가 포커스될 경우에만 처리
    if (target.tagName.toLowerCase() === 'textarea') {
      const header = document.querySelector('.c-header');
      const headerHeight = header ? header.offsetHeight : defaultOffset; // 헤더 높이를 동적으로 계산, 없으면 기본값 사용
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = targetTop - headerHeight - defaultOffset; // 헤더 높이와 추가 여백 계산

      // 화면 스크롤 이동
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };

  // focusin 이벤트 등록
  document.addEventListener('focusin', handleFocus);

  // 이벤트 제거 함수 반환
  return () => {
    document.removeEventListener('focusin', handleFocus);
  };
};