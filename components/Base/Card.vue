<script setup lang="ts">
import type { WorkProjects } from '~/types';
import { Skeleton } from "@/components/ui/skeleton"

const emits = defineEmits(['hoverCamp', 'hanldeLoadedImage'])

const props = defineProps<{
  item: WorkProjects
}>()

const compData = () => {
  // if (true) return;
  const currentElement = document.querySelector(`[data-src='${props.item.src}']`) as any
  const offsetLeft = currentElement.offsetLeft as any
  const parentOffsetTop = document?.querySelector("#work ul.projects__wrapper")?.offsetTop as any
  const offsetTop = currentElement.offsetTop - parentOffsetTop
  currentElement.onmousemove = useDebounceFn(() => {
    emits('hoverCamp', props.item)
  }, 100, { maxWait: 1000 })
}
onMounted(() => {
  compData()
})


</script>

<template>
  <div class="mix card cursor-pointer relative aspect-square" :class="item.type" :data-src="item.src">
    <a :href="item.link" target="_blank" class="max-w-96 block mx-auto">
      <div class="img__parent bg-gray-100 p-3">
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
        <div class="ms-3 badge-group gap-2 flex items-center">
          <Badge v-for="badge in item.tags" :class="`bg-${badge.color}-600`">
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