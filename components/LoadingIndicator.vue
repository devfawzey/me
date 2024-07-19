
<script setup>
const router = useRouter()
import { pageTransitionIn, pageTransitionInBeforeMount } from "~/utils/gsap"

router.beforeEach((to, from, next) => {
 // we can make timeout
 pageTransitionIn()
 setTimeout(() => {
  next()
 }, 500)
})
onMounted(() => {
 pageTransitionInBeforeMount()
})
</script>
<template>
 <AppLoading />
</template>