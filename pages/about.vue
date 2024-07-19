
<script setup>
import { CardDescription } from '~/components/ui/card';


const { $gsap } = useNuxtApp()

const stacks = [
 {
  title: "vue",
  icon: "logos:vue"
 },
 {
  title: "node",
  icon: "logos:nodejs-icon"
 },
 {
  title: "nuxt",
  icon: "skill-icons:nuxtjs-dark"
 },
 {
  title: "vuetify",
  icon: "logos:vuetifyjs"
 },
 {
  title: "git",
  icon: "skill-icons:git"
 },
 {
  title: "tailwind",
  icon: "skill-icons:tailwindcss-dark"
 },
 {
  title: "ts",
  icon: "devicon:typescript"
 },
 {
  title: "bootstrap",
  icon: "devicon:bootstrap-wordmark"
 },
]
const services = [
 {
  title: "product designer",
  description: "providing quality work to clients and companies",
  subs: ["web page development", "create efficient web pages"]
 },
 {
  title: "responsive design",
  description: "creates dynamic changes for the website",
  subs: ["Design for thumb", "Make layous adaptive", "consider landscape orientaion",
   "keep typography responsive"
  ]
 },
 {
  title: "clean code",
  description: "Write well designed, testable, efficient code",
  subs: ["Reusable Code",]
 }
]

const stack = ref([])

const animateStacks = () => {
 // 0,1(2) || 4,5(6) --- 2,3 || 6,7
 const up = [...stack.value.slice(0, 2), ...stack.value.slice(4, 6)]
 const down = [...stack.value.slice(2, 4), ...stack.value.slice(6, 8)]

 const tl = $gsap.timeline()


 $gsap.from(up, {
  delay: 0.5,
  y: -100, opacity: 0, duration: 1.5,
  ease: "Power4.easeInOut",
  // stagger: 0.05,
 })
 $gsap.from(down, {
  delay: 0.5,

  y: 100, opacity: 0, duration: 1.5,
  ease: "Power4.easeInOut",
  // stagger: 0.05,
 })


}

onMounted(() => {
 animateStacks()
})

</script>
<template>
 <main id="about">
  <div class="about__wrapper px-[2vw] sm:px-[8vw] md:px-[10vw] py-[10vh] md:pt-[20vh] ">
   <BaseSectionHead title="Tech Stack" />
   <Separator class="my-16" />
   <div class="tech_stack__wrapper flex items-center gap-5 justify-center flex-wrap">
    <div ref="stack" class="tech box__icon" :class="item.title" v-for="item in stacks">
     <BaseTooltip>
      <template #trigger>
       <div class="icon max-w-28 rounded-xl p-4 ring-1 ring-gray-300">
        <Icon :name="item.icon" size="65" class="mx-auto block" />
       </div>
      </template>
      <template #message>
       <span class="p-4 rounded-xl mx-shadow shadow-xl">
        {{ item.title }}
       </span>
      </template>
     </BaseTooltip>
    </div>
   </div>
   <Separator class="mb-12 mt-20" />
   <BaseSectionHead title="I can help you with" class="mb-16 mt-20" />

   <div class="flex flex-wrap  justify-center items-center gap-2">
    <template v-for="(item, ind) in services">
     <div class="card h-full max-w-[350px] w-[350px] sm:max-w-none">
      <Card
       class="hover:shadow-xl relative  transition-shadow duration-300 min-h-60 h-full hover:mx-shadow border-none ring-1 ring-gray-200"
       :class="{ 'xl:h-72': ind == 1 }">
       <CardHeader>
        <div class="text-2xl xl:text-3xl capitalize font-semibold">
         {{ item.title }}
        </div>
        <CardDescription class="text-black/70">
         <p> {{ item.description }}</p>
        </CardDescription>
       </CardHeader>
       <CardContent>
        <ul class="space-y-2">
         <template v-for="sub in item.subs">
          <li class="text-sm sm:text-base flex items-center gap-5 text-black/80">
           <Icon name="ph:check-thin" />
           <span>{{ sub }}</span>
          </li>
         </template>
        </ul>
       </CardContent>
      </Card>
     </div>
    </template>
   </div>
  </div>
 </main>
</template>

<style>
.mx-shadow {
 box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.08);
}
</style>