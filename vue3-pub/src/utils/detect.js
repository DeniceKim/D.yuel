/**
 * 사용자 환경을 감지하고 HTML 태그에 클래스 추가
 * 클래스 형식: os_windows pc chrome ver_131
 */
export function detectEnvironment() {
  const userAgent = navigator.userAgent.toLowerCase(); // User-Agent 문자열을 소문자로 변환
  const htmlElement = document.documentElement; // <html> 태그에 접근

  // === OS 감지 ===
  if (userAgent.includes("windows")) {
    htmlElement.classList.add("os_windows"); // Windows 운영체제
  } else if (userAgent.includes("macintosh") || userAgent.includes("mac os x")) {
    htmlElement.classList.add("os_mac"); // macOS 운영체제
  } else if (userAgent.includes("android")) {
    htmlElement.classList.add("os_android"); // Android 운영체제
  } else if (userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("ios")) {
    htmlElement.classList.add("os_ios"); // iOS 운영체제
  }

  // === 디바이스 감지 ===
  if (/mobile|android|iphone|ipad|ios/i.test(userAgent)) {
    htmlElement.classList.add("mobile"); // 모바일 디바이스
  } else {
    htmlElement.classList.add("pc"); // 데스크톱/PC 디바이스
  }

  // === 브라우저 감지 및 버전 추가 ===
  if (userAgent.includes("chrome") && !userAgent.includes("edg")) {
    // Chrome 브라우저 (Edge 제외)
    const version = userAgent.match(/chrome\/(\d+)/)?.[1]; // 버전 추출
    htmlElement.classList.add("chrome", `ver_${version}`);
  } else if (userAgent.includes("firefox")) {
    // Firefox 브라우저
    const version = userAgent.match(/firefox\/(\d+)/)?.[1];
    htmlElement.classList.add("firefox", `ver_${version}`);
  } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
    // Safari 브라우저 (Chrome 제외)
    const version = userAgent.match(/version\/(\d+)/)?.[1];
    htmlElement.classList.add("safari", `ver_${version}`);
  } else if (userAgent.includes("edg")) {
    // Microsoft Edge 브라우저
    const version = userAgent.match(/edg\/(\d+)/)?.[1];
    htmlElement.classList.add("edge", `ver_${version}`);
  } else if (userAgent.includes("opera") || userAgent.includes("opr")) {
    // Opera 브라우저
    const version = userAgent.match(/opr\/(\d+)/)?.[1];
    htmlElement.classList.add("opera", `ver_${version}`);
  }

  // === 결과: HTML 클래스 예시 ===
  // <html class="os_windows pc chrome ver_131">
  // <html class="os_ios mobile safari ver_16">
}
