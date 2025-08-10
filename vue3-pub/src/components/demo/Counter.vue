<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/store/counterStore";

const counterStore = useCounterStore();
const { count, increment, decrement } = counterStore;
</script>

