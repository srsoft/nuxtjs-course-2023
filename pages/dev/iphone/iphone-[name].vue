<template>
  <div>
    <Head>
      <Title>Iphone daniel {{ name }}</Title>
    </Head>
    <div class="grid grid-cols-2">
      <div>
        <img :src="`/images/iphone-${name}-pro.jpeg`" width="600" alt="">
      </div>
      <div class="text-center">
        <h1 class="text-3xl">iphone : {{  name }}</h1>
        <button @click="addToCart" class="p-3 bg-indigo-900 text-white rounded-md mt-5 w-48">
          <span v-if="isInCart()">Remove from Cart</span>
          <span v-else>Buy Now</span>
        </button>
        <p>{{  cart }}</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const name = computed(() => {
    return route.params.name.replaceAll('-', " ");
  })

  const fullname = computed(() => {
    return `iphone-${route.params.name}`
  })

  const cart = useCart()

  function isInCart() {
    return Boolean(cart.value.find((ct) => ct.name === fullname.value))
  }

  function addToCart() {
    if (!isInCart()) {
      cart.value.push({ name: fullname })
    } else {
      cart.value = cart.value.filter((ct) => ct.name !== fullname.value)
    }
  }
</script>