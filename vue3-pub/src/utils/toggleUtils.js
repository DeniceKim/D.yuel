/**
 * 일반 아코디언 초기화
 * @param {HTMLElement} accordionContainer
 */
export const initializeAccordion = (accordionContainer) => {
  const accItems = accordionContainer.querySelectorAll(".accitem");
  const accTriggers = accordionContainer.querySelectorAll(".trigger");

  if (accTriggers.length === 0) {
    console.error("No triggers found for accordion:", accordionContainer);
    return;
  }

  accTriggers.forEach((trigger, index) => {
    const accPanel = accItems[index]?.querySelector(".acc_panel");

    if (!accPanel) {
      console.warn("No panel found for trigger at index:", index);
      return;
    }

    // 초기 상태 설정
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", `accPanel-${index}`);
    accPanel.setAttribute("id", `accPanel-${index}`);
    accPanel.setAttribute("aria-hidden", "true");

    // 클릭 이벤트 추가
    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", !isOpen);
      accPanel.setAttribute("aria-hidden", isOpen);

      if (isOpen) {
        trigger.setAttribute("aria-label", "내용 펼치기");
        accItems[index].classList.remove("is-open");
      } else {
        trigger.setAttribute("aria-label", "내용 접기");
        accItems[index].classList.add("is-open");
      }
    });
  });
};
