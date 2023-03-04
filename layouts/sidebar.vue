<template>
  <main class="user-layout">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/dev">Dev</NuxtLink>
      <NuxtLink to="/profile">profile</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
    </nav>
    <article class="sidebar">
      <p>Dashboard</p>
      <p>Settings</p>
    </article>
    <section>
      <slot />
    </section>
  </main>
</template>

<style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
  }
  .user-layout {
    display: flex;
  }
</style>