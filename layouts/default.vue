<script setup>
const { name } = useRoute()
const meInContactPage = computed(() => name === 'contact')
</script>
<template>
 <!-- <div data-barba="wrapper"> -->
 <!-- <AppHeader /> -->
 <AppLoading />
 <AppNavigation />
 <!-- <div class="pt-7"> -->
 <!-- <ClientOnly> -->

 <slot />
 <AppFooter v-if="!meInContactPage" />
 <!-- </ClientOnly> -->
 <!-- </div> -->
 <!-- </div> -->
</template>