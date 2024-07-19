<script setup>

import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/utils"

</script>

<template>
  <div class="nav__content h-full w-full flex flex-col justify-between">
    <!-- NavLinks -->
    <div class="nav__content-upper">
      <p class="text-[9.8px] text-white opacity-40 w-max nav-head">NAVIGATION</p>
      <div class="separtor__placeholder my-6 opacity-20 min-w-1 h-[1px]">
        <Separator class="line float-right" />
      </div>
      <BaseList :list="NAVIGATION_LINKS" v-slot="{ text }">
        <h1 class="text-5xl capitalize font-[450] text-white" v-text="text" />
      </BaseList>
    </div>
    <!-- Social -->
    <div class="nav__content-socials h-max z-20 relative">
      <p class="text-[9.8px] text-white opacity-40 my-3">SOCIALS</p>
      <BaseList :list="SOCIAL_LINKS" horizental v-slot="{ text }" target="_blank">
        <h3 class="sm:text-base capitalize text-white text-sm" v-text="text" />
      </BaseList>
    </div>
  </div>
</template>



<style>
ul.vertical h1 {
  position: relative;
}

ul.vertical li:nth-child(1) .li-revealer::before {
  z-index: 1;
}

ul.vertical li:nth-child(2) .li-revealer::before {
  z-index: 2;
}

ul.vertical li:nth-child(3) .li-revealer::before {
  z-index: 3;
}

/* ul.vertical li:nth-child(4) .li-revealer::before {
  z-index: 4;

} */

ul.vertical li:nth-child(2) h1 {
  z-index: 1;
}

ul.vertical li:nth-child(3) h1 {
  z-index: 2;
}

/* ul.vertical li:nth-child(4) h1 {
  z-index: 3;
} */
</style>