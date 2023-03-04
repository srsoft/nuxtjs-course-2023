<template>
  <button @click="increment">Increment</button>
  <p>{{ count }}</p>
  <button @click="decrement">Decrement</button>
</template>

<script setup lang="ts">
  const count = ref(12);

  const increment = () => {
    count.value++;
  }

  const decrement = () => {
    count.value--;
  }
</script>