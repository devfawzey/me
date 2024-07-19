<script setup>
const { name } = useRoute()

const C_routeName = computed(() => name === 'index' ? "Work" : name)
const C_capitalizeRouteName = computed(() => C_routeName.value[0].toUpperCase() + C_routeName.value.slice(1))

useHead({
  titleTemplate: `${C_capitalizeRouteName.value} - MoFawzey`
})

</script>
<template>
  <ClientOnly>
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <NuxtLayout>
      <LoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </ClientOnly>
</template>
