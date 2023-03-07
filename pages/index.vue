<template>
  <div>
    <h1>pages</h1>
    <div>
      <NuxtLink to="/dev">dev</NuxtLink>
    </div>
    <button @click="counter.increment()" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">+1</button>
    <button @click="counter.decrement()" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">-1</button>
    <div>{{ counter.$state.count }}</div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>