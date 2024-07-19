
<script setup>
const router = useRouter()
import { pageTransitionIn, pageTransitionInBeforeMount } from "~/utils/gsap"

router.beforeEach(async (to, from, next) => {

 await pageTransitionIn()
 next()

})
onMounted(async () => {

 // await nextTick()
 pageTransitionInBeforeMount()
})
</script>
<template>
 <AppLoading />
</template>