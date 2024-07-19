<script setup>
defineProps({
 title: {
  type: String
 }
})
</script>
<template>
 <div class="section-title  mb-10 text-4xl sm:text-7xl lg:text-8xl font-semibold font-main">
  {{ title }}
 </div>
</template>