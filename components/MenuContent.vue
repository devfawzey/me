<script setup>
import { WORK_PROJECTS } from "~/utils";
const { $gsap } = useNuxtApp()
const currentSrc = ref(16)
// TODO debounce this

const getCurrentMenu = (SRC) => {
 if (!SRC) return;
 if (currentSrc.value == SRC) return;
 currentSrc.value = SRC
 const currentMenu = document.querySelector(`.menu__wrapper .box[data-menu='${SRC}']`)
 const menuOffsetLeft = currentMenu.offsetTop
 $gsap.to('#menuWrapper.menu__wrapper', {
  y: -menuOffsetLeft,
  duration: 0.6,
  ease: "Powr4.easeInOut"
 })
}
defineExpose({
 getCurrentMenu
})
</script>

<template>
 <div id="menuWrapper"
  class="menu__wrapper absolute top-0 left-0 w-full h-[1600px] items-center  min-h-xl grid grid-rows-8">
  <template v-for="item in WORK_PROJECTS">
   <div :data-menu="item.src"
    class="relative w-full flex flex-col items-center justify-center gap-16  box h-[200px] px-2 py-2"
    v-if="item.show != false">
    <!-- {{ item.title }} -->
    <Badge variant="outline" class="ring-1 ring-slate-900">
     {{ item.title }}
    </Badge>
    <div class="badge-group gap-2 flex justify-center items-center flex-wrap">
     <Badge v-for="badge in item.tags" :class="badge.color">
      {{ badge.title }}
      <!-- {{ badge.color }} -->
     </Badge>
    </div>
   </div>
  </template>
 </div>
</template>