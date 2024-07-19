<script setup lang="ts">
import type { WorkProjects } from '~/types';
import { Skeleton } from "@/components/ui/skeleton"

const emits = defineEmits(['gettingDataFromCard', 'awayFromCard'])

const props = defineProps<{
  item: WorkProjects
}>()

const gettingDataFromCard = () => {
  const currentCard = document.querySelector(`[data-src='${props.item.src}']`) as any
  // second
  currentCard.onmousemove = useDebounceFn(() => {
    emits('gettingDataFromCard', props.item)
  }, 100, { maxWait: 1000 })
}

onMounted(() => {
  gettingDataFromCard()
})

</script>

<template>
  <div class="mix card  cursor-pointer relative bg-gray-100 max-w-96 block mx-auto" :class="item.type" :data-src="item.src">
    <a :href="item.link" target="_blank" class="">
      <div class="img__parent p-3">
        <div class="img__wrapper group overflow-hidden">
          <!-- <BaseLazyImage :src="`/work/${item.src}.png`" :title="item.title" /> -->
          <BaseLazyImage :src="`/work/compressed/${item.src}-min.png`" :title="item.title" />
        </div>
      </div>
      <div class="lg:hidden">
        <h2 class="ms-3 flex text-indigo-600 items-center text-lg">
          <span>
            {{ item.title }}
          </span>
          <Icon name="radix-icons:arrow-top-right" />

        </h2>
        <Separator class="my-2" />
        <div class="ps-3 pb-3 badge-group gap-2 flex items-center">
          <Badge v-for="badge in item.tags" :style="{ backgroundColor: `${badge.color}` }">
            {{ badge.title }}
          </Badge>
        </div>
      </div>
    </a>
    <div class="loading-state" v-show="false">
      <Skeleton class="w-full aspect-square" />
      <Skeleton class="w-1/2 h-2 my-2" />
      <div class="badge-group flex gap-2">
        <Skeleton class="w-20 roundd-full h-4 my-2" />
        <Skeleton class="w-20 roundd-full h-4 my-2" />
      </div>
    </div>
  </div>
</template>