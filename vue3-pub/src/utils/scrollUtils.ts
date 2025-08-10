// src/utils/scrollUtils.ts

/**
 * 스크롤 이벤트 초기화 함수
 * @returns {() => void} 이벤트 제거 함수 반환
 */
export const initializeScrollEvents = (): (() => void) => {
  let previousScrollTop = window.scrollY; // 이전 스크롤 위치
  let isScrolling: NodeJS.Timeout; // 스크롤 상태를 추적하는 타이머 변수
  const header = document.querySelector<HTMLDivElement>('.header'); // header 엘리먼트

  const handleScroll = (): void => {
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
 * @param {number} defaultOffset 기본 추가 여백 (기본값 20px)
 * @returns {() => void} 이벤트 제거 함수 반환
 */
export const initializeTextareaFocusHandler = (defaultOffset: number = 20): (() => void) => {
  /**
   * textarea 포커스 이벤트 핸들러
   * @param event FocusEvent
   */
  const handleFocus = (event: FocusEvent): void => {
    const target = event.target as HTMLTextAreaElement;

    // textarea 요소가 포커스될 경우에만 처리
    if (target.tagName.toLowerCase() === 'textarea') {
      const header = document.querySelector<HTMLElement>('.header');
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
  return (): void => {
    document.removeEventListener('focusin', handleFocus);
  };
};


/**
 * "Top 버튼" 및 Floating 버튼 관리
 */
export const scrollToTopAction = (): void => {
  const btmGroup = document.querySelector<HTMLDivElement>('.btm_group');
  const floating = document.querySelector<HTMLDivElement>('.subscribe');
  const tabbarButtons = document.querySelectorAll<HTMLButtonElement>('[data-nav-type="tabbar"] button');
  const chatbotBtn = document.querySelector<HTMLButtonElement>('[data-btn-type="chatbot"]');

  let scrollTimer: NodeJS.Timeout | null = null;

  // 스크롤 이벤트 핸들러
  const onScroll = (): void => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const bottomGroupHeight = btmGroup ? btmGroup.offsetHeight : 0;
    const scrollEndThreshold = documentHeight - windowHeight - bottomGroupHeight;

    // Floating 버튼 보이기/숨기기
    if (floating) {
      floating.classList.toggle('is-show', scrollTop !== 0);
    }

    // Body 클래스 조작
    document.body.classList.toggle('end', scrollTop === scrollEndThreshold || scrollTop > scrollEndThreshold);
    document.body.classList.toggle('fstop', scrollTop >= scrollEndThreshold);

    // cnt_body 요소들 처리
    document.querySelectorAll<HTMLDivElement>('.cnt_body').forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const scrollThreshold = elementTop - 44;

      element.classList.toggle('top', scrollTop >= scrollThreshold);
    });

    // Chatbot 버튼 처리
    if (chatbotBtn) {
      chatbotBtn.classList.remove('is-show');
      if (scrollTimer) clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        if (scrollTop > 0) {
          chatbotBtn.classList.add('is-show');
        } else {
          chatbotBtn.classList.remove('is-show');
        }
      }, 500);
    }
  };

  // "Top 버튼" 클릭 핸들러
  const onTopButtonClick = (event: MouseEvent): void => {
    const target = event.target as HTMLButtonElement;
    if (target.matches('.btn[data-btn-type="topbutton"]')) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // Tabbar 버튼 클릭 핸들러
  const onTabbarButtonClick = (): void => {
    document.querySelectorAll<HTMLDivElement>('.cnt_body').forEach((element) => {
      element.classList.remove('top');
    });
  };

  // 이벤트 등록
  document.addEventListener('scroll', onScroll);
  document.addEventListener('click', onTopButtonClick);
  tabbarButtons.forEach((button) => {
    button.addEventListener('click', onTabbarButtonClick);
  });
};
