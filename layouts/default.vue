<script setup>
const { name } = useRoute()
const meInContactPage = computed(() => name === 'contact')
</script>

<template>

 <AppLoading />
 <AppNavigation />
 <slot />
 <AppFooter v-if="!meInContactPage" />
</template>