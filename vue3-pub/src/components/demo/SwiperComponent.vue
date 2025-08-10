<template>
  <div class="custom-swiper">
    <swiper
      :modules="[Navigation, Pagination, Scrollbar]"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :navigation="navigation"
      :pagination="pagination"
      :scrollbar="scrollbar"
      :loop="loop"
      :allow-touch-move="allowTouchMove"
      :autoplay="autoplay && slides.length > 1"
      ref="swiperInstance"
      @slideChange="updateCurrentIndex"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        {{ slide }}
      </swiper-slide>
    </swiper>

    <!-- 현재 슬라이드/총 슬라이드 수 -->
    <div v-if="slides.length > 1" class="slide-info">
      <span>{{ currentIndex + 1 }} / {{ slides.length }}</span>
    </div>

    <!-- Play/Pause 버튼 -->
    <button
      v-if="slides.length > 1"
      @click="toggleAutoplay"
      :class="autoplay ? 'pause' : 'play'"
    >
      {{ autoplay ? 'Pause' : 'Play' }}
    </button>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';

// Props for customization
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  slidesPerView: {
    type: Number,
    default: 3,
  },
  spaceBetween: {
    type: Number,
    default: 30,
  },
  navigation: {
    type: Boolean,
    default: true,
  },
  pagination: {
    type: [Boolean, Object],
    default: () => ({ clickable: true }),
  },
  scrollbar: {
    type: [Boolean, Object],
    default: () => ({ draggable: true }),
  },
  loop: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
});

// Destructure props directly for easier usage
const { slides } = props;

const emit = defineEmits(['update:currentIndex']); // Event emission

// Variables for autoplay and current slide index
const autoplay = ref(props.autoplay);  // Initialize autoplay with the prop value
const currentIndex = ref(0);
const swiperInstance = ref(null); // ref to store swiper instance

const loop = computed(() => props.loop);  // Use loop prop to control loop behavior
const allowTouchMove = computed(() => slides.length > 1); // Disable swipe if there's only 1 slide

// Update currentIndex based on slide change
const updateCurrentIndex = (swiper) => {
  currentIndex.value = swiper.realIndex; // Real index reflects the actual current slide
  emit('update:currentIndex', currentIndex.value + 1); // Emit the updated index
};

// Play/Pause functionality
const toggleAutoplay = () => {
  if (swiperInstance.value && swiperInstance.value.swiper) {
    if (autoplay.value) {
      swiperInstance.value.swiper.autoplay.stop();  // Stop autoplay
    } else {
      swiperInstance.value.swiper.autoplay.start();  // Start autoplay
    }
    autoplay.value = !autoplay.value; // Toggle autoplay state
  }
};

// Watch for autoplay changes
watch(autoplay, (newVal) => {
  if (swiperInstance.value && swiperInstance.value.swiper) {
    if (newVal) {
      swiperInstance.value.swiper.autoplay.start(); // Start autoplay if true
    } else {
      swiperInstance.value.swiper.autoplay.stop(); // Stop autoplay if false
    }
  }
});

// Ensure swiperInstance is defined and update swiper after mounted
onMounted(() => {
  if (swiperInstance.value && swiperInstance.value.swiper) {
    swiperInstance.value.swiper.update(); // Ensure swiper instance is updated only when it's available
    if (autoplay.value) {
      swiperInstance.value.swiper.autoplay.start();  // Start autoplay if autoplay is true
    }
  }
});

// Clean up swiper instance when the component is destroyed
onBeforeUnmount(() => {
  if (swiperInstance.value && swiperInstance.value.swiper) {
    swiperInstance.value.swiper.destroy(true, true); // Cleanly destroy the swiper instance
  }
});
</script>

<style scoped>
.custom-swiper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.swiper {
  height: 300px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 10px;
}

.slide-info {
  text-align: center;
  margin-top: 10px;
}

button {
  display: block;
  margin: 10px auto;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button.play {
  background-color: green;
}

button.pause {
  background-color: red;
}

button:hover {
  background-color: #0056b3;
}
</style>
