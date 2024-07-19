<script setup lang="ts">
const { $gsap } = useNuxtApp() as any;
const work = ref()
const { query } = useRoute() as any
const animateDevName = async () => {
  await new Promise((resolve: any) => {
    $gsap.from('.dev-name .char', {
      delay: 0.6,
      y: '100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power4.out',
      stagger: 0.085,
    }).then(() => {
      $gsap.to('.dev-jop .jop-line', {
        y: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'Power4.easeInOut',
        stagger: 0.15,
      }).then(() => {
        $gsap.to('.work-btn', {
          x: '0%',
          opacity: 1,
          duration: 0.5,
          ease: 'Power4.easeInOut',
          // stagger: 0.15,
        }).then(() => {
          resolve('')
        })
      })
    })
  })
}
function openPDF() {
  const pdfUrl = '/MohammedFawzey_CV.pdf';
  window.open(pdfUrl, '_blank', 'width=800,height=600');
}

const scrollToSection = () => {
  $gsap.to(window, { duration: 1, scrollTo: { y: '#work', offsetY: 0 }, ease: "Power4.easeInOut" }).then(() => {
    work.value.animateActiveTab()
  })
};

onMounted(async () => {
  // router.push({ name: "index", query: { redirect: 'false' } })
  await animateDevName()
  if (!query.redirecttowork) return;
  scrollToSection()
})

</script>
<template>
  <div data-barba="wrapper">
    <main data-barba="container" data-barba-namespace="home">
      <div
        class="relative bg-gradient-to-b from-main-300 to-main-300/85 overflow-hidden px-[2vw] sm:px-[8vw] md:px-[10vw] pt-[25vh] sm:pt-[30vh] md:pt-[20vh] min-h-screen">
        <div class="">
          <div class="landing w-full">
            <div class="animation-shapes scale-150  -z-0 pointer-events-none absolute top-0 left-0 h-full w-full">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div class="landing__wrapper select-none text-white relative z-1 items-center">
              <div class="box select-none">
                <h1 animate ref="text"
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
                <!-- <h3 class="my-6 text-sm font-semibold text-white/60">Full Stack Developer</h3> -->
              </div>

              <div class="btn_group w-full max-w-2xl gap-5 grid grid-cols-1 sm:grid-cols-2">
                <Button
                  class="w-full rounded-full text-md h-16 bg-gradient-to-t from-main-300 to-main-300/90  border-0 ring-1 ring-black/20 font-light hover:text-white hover:to-main-300/95"
                  variant="outline" @click="openPDF">
                  <!-- <a href="/MohammedFawzey_CV.pdf" target="_blank"> -->
                  Download CV
                  <!-- </a> -->
                </Button>
                <Button @click="scrollToSection"
                  class="w-full select-none  group h-16 hover:bg-transparent ring-1 ring-white/20 flex items-center hover:text-white text-md  rounded-full bg-white gap-3 text-black"
                  size="lg">
                  <p class="">
                    WORK
                  </p>
                  <span class="work-btn w-[16px] inline-flex relative opacity-0 -translate-x-full">
                    <Icon name="lucide:arrow-right-to-line" size="25" />
                  </span>
                  <span v-if="false" class="w-1/3 work-btn opacity-0 -translate-x-full group-hover:bg-white inline-block bg-main-300
                  h-[1.5px] relative before:absolute before:right-0 before:top-1/2 before:h-full before:w-2
                  group-hover:before:bg-white group-hover:after:bg-white before:rotate-45 before:bg-main-300
                  before:origin-right after:absolute after:right-0 after:w-2 after:h-full after:bg-main-300
                  before:transition-colors after:transition-colors transition-colors after:origin-right after:-rotate-45
                  after:top-1/2 after:-translate-y-1/2 before:-translate-y-1/2">
                  </span>
                </Button>

              </div>
              <!-- <div class="box col-span-3 aspect-square">
       <div class="img__avatar bg-blue-900 relative z-2 w-20 h-20">
        <img src="/logo-02.jpg" class="w-full relative z-1" />
       </div>
      </div> -->
            </div>
          </div>
        </div>
      </div>
      <Work v-if="true" ref="work" :scroll-to-section="scrollToSection" />
    </main>
  </div>
</template>

<style lang="postcss">
.animation-shapes span {
  position: absolute;
  width: 20px;
  height: 20px;
  animation: animate 25s linear infinite;
  animation-delay: 2s;
  bottom: -25%;
  @apply bg-white/20
}


.animation-shapes span:nth-child(1) {
  left: 86%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.animation-shapes span:nth-child(2) {
  left: 12%;
  width: 30px;
  height: 30px;
  animation-delay: 1.5s;
  animation-duration: 10s;
}

.animation-shapes span:nth-child(3) {
  left: 70%;
  width: 100px;
  height: 100px;
  animation-delay: 5.5s;
}

.animation-shapes span:nth-child(4) {
  left: 75%;
  bottom: 30%;
  width: 150px;
  height: 150px;
  transform: translateY(0) rotate(45deg);
  animation-delay: 0s;
  animation-duration: 15s;
}

.animation-shapes span:nth-child(5) {
  left: 65%;
  width: 40px;
  height: 40px;
  animation-delay: 0s;
}

.animation-shapes span:nth-child(6) {
  left: 15%;
  width: 110px;
  height: 110px;
  bottom: 20%;
  transform: translateY(0) rotate(75deg);
  animation-delay: 0s !important;
}


.animation-shapes span:nth-child(7) {
  left: 5%;
  animation-delay: 7s;
  animation-duration: 17s;
}

.animation-shapes span:nth-child(8) {
  right: 15%;
  animation-delay: 1s;
  animation-duration: 20s;
}

.animation-shapes span:nth-child(9) {
  right: 25%;
  animation-delay: 0s;
  animation-duration: 25s;
}

.animation-shapes span:nth-child(10) {
  animation-delay: 2s;
  animation-duration: 23s;
  right: 35%
}

.animation-shapes span:nth-child(11) {
  animation-delay: 4s;
  animation-duration: 24s;
  right: 45%
}

.animation-shapes span:nth-child(12) {
  animation-delay: 3s;
  animation-duration: 21s;
  right: 55%
}


@keyframes animate {
  from {
    transform: translateY(0) rotate(0deg);
  }

  to {
    transform: translateY(-800px) rotate(360deg);
  }
}
</style>
