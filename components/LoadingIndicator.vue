
<script setup>
const { $gsap } = useNuxtApp()
const router = useRouter()
import { pageTransitionIn, pageTransitionInBeforeMount } from "~/utils/gsap"

router.beforeEach(async (to, from, next) => {

 await pageTransitionIn($gsap)
 next()

})
onMounted(async () => {

 pageTransitionInBeforeMount($gsap)
})
</script>
<template>
 <AppLoading />
</template>