<script setup lang="ts">
import type { PropType } from 'vue';
import type { List } from '~/types';

defineProps({
  list: {
    type: Array as PropType<List[]>,
    required: true
  },
  horizental: {
    type: Boolean,
    required: false,
    default: false,
  },
  target: {
    type: String,
    default: "_self"
  }
})

</script>


<template>
  <ul class="list-none  flex"
    :class="[horizental ? 'w-max flex-row items-center horizental gap-3 sm:gap-5' : 'gap-5 flex-col vertical']">
    <template v-for="item in  list">
      <li class="relative"
        :class="{ 'is-active-link before:bg-white before:z-10': $route.path == item.route && !horizental, 'before:absolute before:w-2 before:aspect-square before:right-0 before:sm:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full before:-translate-x-8': !horizental }">
        <div v-if="!horizental"
          class="li-revealer w-full h-full absolute before:absolute before:content-[''] before:h-[200%] before:w-full before:bg-main-300 before:top-full before:left-0" />
        <NuxtLink :target="target" :to="item.route" class="cursor-pointer">
          <slot name="default" :text="item.text" />
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>
