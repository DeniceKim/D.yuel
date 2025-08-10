<template>
  <main class="main">
    <h1 class="title">현재 병원: {{ hospital }}</h1>
    <button class="btn" @click="changeHospital('dkuh')">DKUH</button>
    <button class="btn" @click="changeHospital('ncc')">NCC</button>
    <button class="btn" @click="changeHospital('sev')">SEV</button>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useHospitalStore } from '@/store/hospitalStore';

const hospitalStore = useHospitalStore();
const hospital = hospitalStore.hospital;

onMounted(() => {
  hospitalStore.initializeHospital(); // 초기화
});

function changeHospital(hospital) {
  hospitalStore.setHospital(hospital); // 병원 클래스 변경
}
</script>

<style scoped>
.main {
  padding: 16px;
}

.title {
  margin-bottom: 16px;
}

.btn {
  margin-right: 8px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
