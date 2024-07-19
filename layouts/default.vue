<script setup>
const { name } = useRoute()
const meInContactPage = computed(() => name === 'contact')
</script>
<template>
 <!-- <div data-barba="wrapper"> -->
 <!-- <AppHeader /> -->
 <AppLoading />
 <div class="loading-screen-2 bg-[#141517]"></div>
 <AppNavigation />
 <!-- <div class="pt-7"> -->
 <!-- <ClientOnly> -->

 <slot />
 <AppFooter v-if="!meInContactPage" />
 <!-- </ClientOnly> -->
 <!-- </div> -->
 <!-- </div> -->
</template>