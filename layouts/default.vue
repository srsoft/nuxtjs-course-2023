<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/dev">Dev</NuxtLink>
      <NuxtLink to="/profile">profile</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
    </nav>
    <slot />
  </div>
</template>