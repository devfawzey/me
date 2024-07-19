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
const router = useRouter()

const emit = defineEmits(['hideNavThenNavigate'])

</script>


<template>
  <ul class="list-none w-max flex"
    :class="[horizental ? 'flex-row items-center horizental gap-3 sm:gap-5' : 'gap-5 flex-col vertical']">
    <template v-for="item in  list">
      <li class="relative" :class="{ 'is-active-link': $route.path == item.route }">
        <div v-if="!horizental"
          class="li-revealer  w-full h-full absolute before:absolute before:content-[''] before:h-[200%] before:w-full before:bg-main-300 before:top-full before:left-0" />

        <NuxtLink :target="target" :to="item.route" class="cursor-pointer">
          <slot name="default" :text="item.text" />
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>
