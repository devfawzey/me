
<script setup>
const { $gsap } = useNuxtApp()
const router = useRouter()
const { hook } = useNuxtApp()
import { pageTransitionIn, pageTransitionInBeforeMount } from "~/utils/gsap"

router.beforeEach(async (to, from, next) => {

 await pageTransitionIn($gsap)
 next()

})

hook("page:finish", () => {
 console.log("finished")
})
onMounted(async () => {
 pageTransitionInBeforeMount($gsap)
})


</script>
<template>
 <AppLoading />
</template>