<template>
  <div>
    <p>
      <button @click="toggle">Toggle</button>
    </p>
    <hr>
    <component :is="MyComponent" />
  </div>
</template>

<script setup lang="ts">
  const MyComponent = shallowRef(resolveComponent("DevCounter"));

  const toggle = () => {
    console.log('toggle:', MyComponent.value);
    MyComponent.value = resolveComponent("DevHomeWelcome");
  }
</script>