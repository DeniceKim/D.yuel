<template>
  <div ref="dropdownRef" class="c-dropdown" :class="{ 'is-open': isOpen, 'tooltip': props.tooltipEnabled }">
    <!-- 드롭다운 버튼 -->
    <button
      ref="toggleButtonRef"
      type="button"
      class="c-dropdown-btn"
      :class="menuPosition"
      :aria-expanded="isOpen"
      :aria-label="props.ariaLabel"
      @click="toggleDropdown"
      @keydown="handleKeydown"
    >
      <template v-if="hasIconOnly">
        <i class="icon" aria-hidden="true"></i>
      </template>

      <template v-else-if="hasTextOnly">
        <span class="text">{{ selectedLabel || placeholder }}</span>
      </template>

      <template v-else>
        <slot name="trigger">{{ selectedLabel || placeholder }}</slot>
      </template>
    </button>

    <!-- 툴팁 화살표 (dropdown 부모 기준으로 가운데 정렬) -->
    <div v-if="props.tooltipEnabled && isOpen" ref="tooltipArrowRef" class="c-tooltip-arrow" :style="arrowStyle"></div>

    <!-- 드롭다운 메뉴 -->
    <transition name="fade">
      <div v-show="isOpen" ref="menuRef" class="c-dropdown-panel" :style="dropdownStyle">
        <!-- 닫기 버튼 -->
        <button type="button" class="c-dropdown-close-btn" aria-label="닫기" @click.stop="closeCurrentDropdown"></button>

        <!-- 메뉴 유형 -->
        <ul v-if="type === 'menu'" class="c-dropdown-menu" role="menu">
          <slot name="menu">
            <li
              v-for="(item, index) in props.items"
              :key="index"
              class="c-dropdown-item"
              :class="{ 'is-active': selectedIndex === index }"
              role="menuitem"
              @click="() => selectItem(index, item)"
              @keydown="handleItemKeydown(index, $event)"
              tabindex="0"
            >
              {{ item.label }}
            </li>
          </slot>
        </ul>

        <!-- 기본 제공에서 내용이 없는 경우 -->
        <div v-else class="c-dropdown-menu">
          <slot name="content">
            <p class="text-muted">내용이 없습니다.</p>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, defineProps, defineEmits } from "vue";

// 현재 열린 드롭다운을 추적하는 전역 상태
const allOpenDropdowns = ref(new Set());

const props = defineProps({
  items: { type: Array, required: false, default: () => [] },
  placeholder: { type: String, default: "Select an option" },
  type: { type: String, default: "default" },
  tooltipEnabled: { type: Boolean, default: false }, // 툴팁 활성화 여부
  position: { type: String, default: "auto" }, // 위치 조정 옵션 (top, bottom, left, right, auto)
  ariaLabel: { type: String, default: "Dropdown" },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedIndex = ref(null);
const selectedValue = ref(null);
const dropdownRef = ref(null);
const menuRef = ref(null);
const tooltipArrowRef = ref(null);
const menuPosition = ref(props.position);

// **선택한 값 표시**
const selectedLabel = computed(() => {
  return selectedValue.value !== null ? selectedValue.value.label : props.placeholder;
});

// **아이콘과 텍스트 구분을 위한 computed 속성**
const hasIconOnly = computed(() => {
  const slotContent = dropdownRef.value?.querySelector(".c-dropdown-btn slot[name='trigger']");
  return slotContent && slotContent.children.length === 1 && slotContent.children[0].tagName.toLowerCase() === "i";
});

const hasTextOnly = computed(() => {
  const slotContent = dropdownRef.value?.querySelector(".c-dropdown-btn slot[name='trigger']");
  return slotContent && slotContent.children.length === 1 && slotContent.children[0].tagName.toLowerCase() === "span";
});

// CSS 변수로 사용할 위치 값
const dropdownStyle = ref({});
const arrowStyle = ref({});

// **선택한 아이템을 `dropdown-toggle` 버튼에 반영**
const selectItem = (index, item) => {
  selectedIndex.value = index;
  selectedValue.value = item;
  emit("update:modelValue", item); // 부모 컴포넌트로 값 전달
  closeCurrentDropdown();
};

// **드롭다운 및 툴팁 위치 자동 조정 (`dropdown` 기준)**
const adjustDropdownPosition = async () => {
  await nextTick();
  if (!dropdownRef.value || !menuRef.value) return;

  const dropdownRect = dropdownRef.value.getBoundingClientRect();
  const menuRect = menuRef.value.getBoundingClientRect();
  let computedPosition = props.position;

  // **🚀 화살표 크기 반영 (SCSS에서 --tooltip-size 가져오기)**
  const arrowSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--tooltip-size")) || 16;
  const arrowSizeHalf = arrowSize / 2;

  if (props.position === "auto") {
    if (dropdownRect.bottom + menuRect.height > window.innerHeight) {
      computedPosition = "top";
    } else {
      computedPosition = "bottom";
    }
  }

  menuPosition.value = computedPosition;

  // **🚀 SCSS에서 제어할 수 있도록 --변수로 제공 (arrowSizeHalf 적용)**
  menuRef.value.style.setProperty(
    "--dropdown-top",
    computedPosition === "bottom"
      ? `${dropdownRect.height + arrowSizeHalf}px`
      : computedPosition === "top"
      ? `-${menuRect.height + arrowSizeHalf}px`
      : "0px"
  );

  menuRef.value.style.setProperty(
    "--dropdown-left",
    computedPosition === "right"
      ? `${dropdownRect.width + arrowSizeHalf}px`
      : computedPosition === "left"
      ? `-${menuRect.width + arrowSizeHalf}px`
      : "0px"
  );

  // **🚀 툴팁 위치 조정 (arrowSizeHalf 적용)**
  if (props.tooltipEnabled && tooltipArrowRef.value) {
    tooltipArrowRef.value.style.setProperty(
      "--tooltip-top",
      computedPosition === "top"
        ? `-${arrowSizeHalf}px`
        : computedPosition === "bottom"
        ? `${dropdownRect.height + arrowSizeHalf}px`
        : "50%"
    );

    tooltipArrowRef.value.style.setProperty(
      "--tooltip-left",
      computedPosition === "left"
        ? `-${arrowSizeHalf}px`
        : computedPosition === "right"
        ? `${dropdownRect.width + arrowSizeHalf}px`
        : "50%"
    );
  }
};

// **드롭다운 열기 및 닫기 토글**
const toggleDropdown = async (event) => {
  // **다른 열린 드롭다운 닫기**
  allOpenDropdowns.value.forEach((dropdown) => {
    if (dropdown !== dropdownRef.value) {
      dropdown.__vueParentComponent?.exposed?.closeDropdown();
    }
  });

  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    allOpenDropdowns.value.add(dropdownRef.value);
    await nextTick();
    adjustDropdownPosition();
  }
  event.stopPropagation();
};

// **현재 열린 드롭다운만 닫기**
const closeCurrentDropdown = (event) => {
  isOpen.value = false;
  allOpenDropdowns.value.delete(dropdownRef.value);
  event?.stopPropagation();
};

// **외부 클릭 감지 후 드롭다운 닫기**
const handleClickOutside = (event) => {
  if (!dropdownRef.value.contains(event.target)) {
    closeCurrentDropdown();
  }
};

// **마운트 및 언마운트 시 이벤트 리스너 등록**
onMounted(async () => {
  await nextTick();
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("resize", adjustDropdownPosition);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", adjustDropdownPosition);
});
</script>

<style lang="scss">
@use "@/assets/scss/component/_dropdown" as dropdown;
</style>
