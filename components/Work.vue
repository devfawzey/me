<script setup lang="ts">
import theGsap from "gsap";
import { WORK_PROJECTS } from "~/utils"

const { $gsap } = useNuxtApp() as any
const gsap = $gsap ?? theGsap;

const containerWrapper = ref(null)
const { isOutside, elementX, elementY } = useMouseInElement(containerWrapper)
const menu = ref()
const menuWidth = 200
const menuContent = ref(null) as any
const isGettingDatafromChild = ref(false)

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
  const tl = gsap.timeline()
  tl.to("span.active__tab", {
    x: tabOffsetLeft.value, width: tabSize.value, duration: 0.8, ease: "Power4.easeInOut"
  })
  tl.set('.tabs .tabs__wrapper  .tab__text', { color: 'white', duration: 0.1, ease: "Power4.easeInOut" }, "=-0.4")
  tl.to(`.tabs .tabs__wrapper  .tab__text.${activeTab.value}`, { color: 'black', duration: 0.8, ease: "Power4.easeInOut" }, "=-0.9")

}
const filteredProjects = computed(() => activeTab.value === 'all' ? WORK_PROJECTS.filter(el => el.show !== false) : WORK_PROJECTS.filter(el => el.type === activeTab.value && el.show !== false))
// scale?
function onBeforeEnter(el: Element | any) {
  el.style.scale = 0
  // el.style.height = 0
}

function onEnter(el: Element | any, done: () => void) {
  gsap.to(el, {
    scale: 1,
    // height: '100%',
    delay: el.dataset.index * 0.15,
    onComplete: done,
    ease: "Power4.easeInOut"
  })
}

function onLeave(el: Element | any, done: () => void) {
  gsap.to(el, {
    scale: 0,
    // height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done,
    ease: "Power4.easeInOut"
  })
}


const gettingDataFromCard = (data: any) => {

  menuContent.value.getCurrentMenu(data.src)
}
const dim = ref({ x: elementX, y: elementY })

const debounceActiveTab = useDebounceFn(() => animateActiveTab(activeTab.value), 200, { maxWait: 3000 })
onMounted(() => {
  window.addEventListener('resize', debounceActiveTab)
})

onUnmounted(() => {
  window.removeEventListener('resize', debounceActiveTab)
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
    <div class="section_head overflow-hidden z-3 relative">

      <div class="section__wrapper  bg-white max-w-7xl mx-auto px-[2vw] sm:px-[8vw] md:px-[10vw] pt-[5vh] md:pt-[5vh]">
        <BaseSectionHead title="Works" class="text-center" />
        <!-- tabs -->
        <div
          class="tabs  select-none max-w-max mx-auto bg-gradient-to-t from-main-300 to-main-300/90 py-2 px-8 sm:px-12 rounded-lg">
          <ul
            class="tabs__wrapper relative flex text-center items-center justify-center [&>li]:px-4 [&>li]:sm:px-8 [&>li]:py-4">
            <template v-for="tab in tabs">
              <li @click="activeTab = tab" :class="[activeTab === tab ? 'active ' : '', true ? tab : '']"
                class="tab tab__text relative text-sm sm:text-base  text-white z-1 transition-colors capitalize cursor-pointer">
                {{
                  tab }}</li>
            </template>
            <span
              class="active__tab inline-block absolute top-1/2 left-0 bg-white h-full rounded-full -translate-y-1/2"></span>
          </ul>
        </div>
        <!-- projects -->
      </div>
    </div>

    <div class="mb-10 mt-10 lg:mt-20 projects min-h-[70vh]">
      <TransitionGroup ref="containerWrapper" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave"
        tag="ul"
        class="projects__wrapper relative max-w-[1450px] gap-y-5 lg:gap-0 mx-auto min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <!-- MENU -->
        <div key="absolute_menu" id="menu" ref="menu"
          class="menu hidden z-2 lg:block overflow-hidden pointer-events-none absolute aspect-square bg-accent rounded-lg top-0 left-0"
          :style="{ width: `${menuWidth}px` }">
          <Button
            class="rounded-full absolute flex items-center gap-2 w-16 aspect-square p-4 text-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span>
              View
            </span>
            <Icon name="radix-icons:arrow-top-right" />
          </Button>
          <MenuContent ref="menuContent" />
        </div>
        <!-- cards -->
        <BaseCard class="origin-top-left" v-for="(item, index) in  filteredProjects" :key="index" :item="item"
          :data-index="index" @getting-data-from-card="gettingDataFromCard"
          @away-from-card="isGettingDatafromChild = false" />
      </TransitionGroup>
    </div>
  </section>
</template>

<style>
/* .list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
} */
</style>