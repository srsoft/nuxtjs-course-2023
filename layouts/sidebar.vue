<template>
  <Navbar />
  <main class="user-layout bg-gray-100">
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