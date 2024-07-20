<script setup lang="ts">
const { $gsap } = useNuxtApp() as any
import { animateDevName, scrollToSection } from "~/utils/gsap";
const workSectionComponent = ref()

function openPDF() {
  const pdfUrl = '/MohammedFawzey_CV.pdf';
  window.open(pdfUrl, '_blank', 'width=800,height=600');
}

onMounted(async () => {
  await animateDevName($gsap)
  scrollToSection({ GSAP: $gsap, fn: workSectionComponent.value.animateActiveTab })
})

</script>

<template>
  <main id="#home_page">
    <div
      class="relative bg-gradient-to-b from-main-300 to-main-300/85 overflow-hidden px-[2vw] sm:px-[8vw] md:px-[10vw] pt-[25vh] sm:pt-[30vh] md:pt-[20vh] min-h-screen">
      <div class="section__wrapper">
        <div class="landing w-full">
          <LandingAnimation />
          <div class="landing__wrapper select-none text-white relative z-1 items-center">
            <div class="box select-none">
              <!-- H1_DEV_NAME_ANIMATION -->
              <h1
                class="text-5xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl [&>span]:relative [&>span]:inline-block text-split leading-tight dev-name font-bold">
                <span class="char">M</span>
                <span class="char">o</span>
                <span class="char">h</span>
                <span class="char">a</span>
                <span class="char">m</span>
                <span class="char">m</span>
                <span class="char">e</span>
                <span class="char">d</span>
                <br />
                <span class="char">F</span>
                <span class="char">a</span>
                <span class="char">w</span>
                <span class="char">z</span>
                <span class="char">e</span>
                <span class="char">y</span>
              </h1>
              <h3 class="mt-6 mb-10 text-sm max-w-max text-white/60 dev-jop">
                <span class="jop-line opacity-0 translate-y-full inline-block relative">
                  Frontend Devloper
                </span>
              </h3>
            </div>

            <div class="btn_group w-full max-w-sm mx-auto sm:ms-0 sm:max-w-2xl gap-5 grid grid-cols-1 sm:grid-cols-2">
              <Button
                class="w-full rounded-full text-md h-16 bg-gradient-to-t from-main-300 to-main-300/90  border-0 ring-1 ring-black/20 font-light hover:text-white hover:to-main-300/95"
                variant="outline" @click="openPDF">
                Download CV
              </Button>
              <Button @click="scrollToSection"
                class="w-full select-none  group h-16 hover:bg-transparent ring-1 ring-white/20 flex items-center hover:text-white text-md  rounded-full bg-white gap-3 text-black"
                size="lg">
                <p>
                  WORK
                </p>
                <span class="work-btn w-[16px] inline-flex relative opacity-0 -translate-x-full">
                  <Icon name="lucide:arrow-right-to-line" size="25" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Work ref="workSectionComponent" :scroll-to-section="scrollToSection" />
  </main>
</template>

