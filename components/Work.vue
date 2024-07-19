<script setup lang="ts">

import { WORK_PROJECTS } from "~/utils"

const { $gsap, $mixitup } = useNuxtApp() as any
const containerWrapper = ref(null)
const { isOutside, elementX, elementY } = useMouseInElement(containerWrapper)
const menu = ref()
const menuWidth = 200
const menuContent = ref(null) as any

const activeTab = ref<'all' | 'design' | 'ecommerce'>('all')
const tabs: ('all' | 'design' | 'ecommerce')[] = ['all', 'design', 'ecommerce'
]
const mixer = ref(null) as any
const tabSize = ref<number>(100)
const tabOffsetLeft = ref<number>(50)

const animateActiveTab = (activeTabValue: string = activeTab.value) => {
  // Mount || Click
  const theActiveTab: HTMLElement | null = document.querySelector(`ul li.${activeTabValue}`);
  // offsetLeft
  tabOffsetLeft.value = theActiveTab?.offsetLeft || 0
  // tabSize
  tabSize.value = theActiveTab?.getBoundingClientRect().width || 100
  // animate
  const tl = $gsap.timeline()
  tl.to("span.active__tab", {
    x: tabOffsetLeft.value, width: tabSize.value, duration: 0.8, ease: "Power4.easeInOut", onStart() {
      filterByCategory(activeTabValue)
    }
  })

}
// TODO remove mixitup
const initMixitup = () => {
  if (!containerWrapper.value) return;
  mixer.value = $mixitup(containerWrapper.value, {
    animation: {
      "duration": 550,
      "nudge": true,
      "reverseOut": false,
      // "effects": "fade translateZ(-100px)"
      "effects": "translateY(20%) translateZ(-100px)"
    }
  });
}
const filterByCategory = (category: string) => {
  if (category == 'all') {

    mixer.value.filter(`all`)
  } else {

    mixer.value.filter(`.${category}`)
  }
}
const getChildData = (data: any) => {
  menuContent.value.getCurrentMenu(data.src)
}
const dim = ref({ x: elementX, y: elementY })

onMounted(() => {
  window.addEventListener('resize', useDebounceFn(() => animateActiveTab(activeTab.value), 200, { maxWait: 3000 }))
  initMixitup()
})

watch(activeTab, (newValue) => {
  animateActiveTab(newValue)
})


defineProps({
  scrollToSection: {
    type: Function,
    default: () => 's'
  }
})

defineExpose({
  animateActiveTab
})

watch(() => dim.value, (newValue) => {
  // true
  if (!isOutside.value) {
    $gsap.to('#menu.menu', {
      scale: 1,
      duration: 0.6,
    })

  } else {
    $gsap.to('#menu.menu', {
      scale: 0,
      duration: 0.6,
      ease: "Power4.easeInOut"
    })
  }
  $gsap.to('#menu.menu', {
    x: dim.value.x - menuWidth / 2,
    y: dim.value.y - menuWidth / 2,
    duration: 0.6,
  })

  // false
}, { deep: true })

</script>

<template>
  <section id="work" class="min-h-screen relative overflow-hidden">
    <div class="section__wrapper z-3 relative bg-white max-w-7xl mx-auto px-[2vw] sm:px-[8vw] md:px-[10vw] pt-[5vh] md:pt-[5vh]">
      <BaseSectionHead title="Racent Works" />
      <!-- tabs -->
      <div class="tabs  select-none max-w-max mx-auto bg-gray-100 py-2 px-8 sm:px-12 rounded-lg">
        <ul
          class="tabs__wrapper relative flex text-center items-center justify-center [&>li]:px-4 [&>li]:sm:px-8 [&>li]:py-4">
          <template v-for="tab in tabs">
            <li @click="activeTab = tab" :class="[activeTab === tab ? 'active ' : '', true ? tab : '']"
              class="tab relative text-sm sm:text-base  text-main-300 z-1 transition-colors capitalize cursor-pointer">{{
                tab }}</li>
          </template>
          <span
            class="active__tab inline-block absolute top-1/2 left-0 bg-white h-full rounded-full -translate-y-1/2"></span>
        </ul>
      </div>
      <!-- projects -->
    </div>
    <div class="mb-10 mt-10 lg:mt-28 projects min-h-[70vh]">
      <ul ref="containerWrapper"
        class="projects__wrapper relative max-w-[1450px] mx-auto min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <!-- MENU -->
        <div id="menu" ref="menu"
          class="menu hidden z-2 lg:block overflow-hidden pointer-events-none absolute aspect-square bg-accent rounded-lg top-0 left-0"
          :style="{ width: `${menuWidth}px` }">
          <Button
            class="rounded-full absolute flex items-center gap-2 w-16 aspect-square p-4 text-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span>
              View
            </span>
            <Icon name="radix-icons:arrow-top-right" />
          </Button>
          <!-- :style="{ width: `${menuWidth}px`, color: 'white', transform: `translate(${dim.theX - menuWidth / 2}px,${dim.theY - menuWidth / 2}px)` }"> -->
          <!-- :style="{ width: `${menuWidth}px`, color: 'white', transform: `translate(${0}px,${0}px)` }"> -->
          <MenuContent ref="menuContent" />
        </div>
        <template v-for="item in  WORK_PROJECTS " :key="item">
          <BaseCard :item="item" v-if="item.show != false" @hover-camp="getChildData" />
        </template>
      </ul>
    </div>
  </section>
</template>

<style>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>