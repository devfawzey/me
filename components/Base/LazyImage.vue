<script setup>
defineProps({
  src: {
    type: String
  },
  title: {
    type: String
  }
})

</script>
<template>
  <nuxt-img :src="src" format="webp" loading="lazy" sizes="400px md:330px" quality="70" :alt="title"
    class="rounded-md bg-accent mx-auto scale-100 aspect-square group-hover:scale-110 ma-w-full transition-all" />
</template>