<script setup>
import { SOCIAL_LINKS } from "~/utils"
</script>
<template>
 <footer class="w-full h-40 bg-main-300 flex flex-col items-center justify-center">
  <div class="container px-[15vw]  w-full">
   <div class="footer__wrapper grid grid-cols-1 gap-y-2 md:grid-cols-2">
    <div class="text-sm sm:text-lg  lg:text-left text-center text-white/50 font-light">Made by Mohammed Fawzey</div>
    <div class="link-group flex gap-2 justify-center lg:justify-end text-white items-center">
     <a v-for="item in SOCIAL_LINKS" :href="item.route" target="_blank">
      <Icon class="cursor-pointer" size="20" :name="item.icon" />

     </a>
    </div>
   </div>
   <Separator class="my-3 md:my-2 w-full bg-white/20" />
  </div>
  <div class="text-xl sm:text-3xl font-thin text-white">2024</div>
 </footer>
</template>