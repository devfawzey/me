<script setup>
import { contentAnimation } from "@/utils/gsap"

const phoneNumber = ref(null)
const btnIsLoading = ref(false)
const delay = 1000;

const isCorrectPhoneNumber = computed(() => !isNaN(phoneNumber.value) && phoneNumber.value.length >= 10 && phoneNumber.value.length < 14)

const sendNotification = () => {
  if (!phoneNumber.value) return;

  btnIsLoading.value = true

  if (!isCorrectPhoneNumber.value) {
    return setTimeout(() => {
      push.error({ message: "Invalid phone number. Please enter a valid phone number", title: "Warning" })
      phoneNumber.value = ''
      btnIsLoading.value = false
    }, delay)
  }

  setTimeout(() => {
    push.success({ message: "your phonenumber has been Sent", title: "Success" })
    phoneNumber.value = ''
    btnIsLoading.value = false
  }, delay)

}

onMounted(() => {
  contentAnimation()
})


</script>
<template>
  <div>
    <main class="bg-main-300">
      <div
        class="main__content overflow-y-hidden px-[6vw] sm:px-[8vw] md:px-[12vw] pt-[25vh] container min-h-screen text-white">
        <div class="header-text relative">
          <h1
            class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl animate-head animate-this relative  uppercase font-semibold text-center tracking-normal">
            Let's work <br /> together
          </h1>
        </div>
        <div class="z-2 relative">
          <div class="form mt-[15vh] flex flex-col sm:flex-row gap-5 justify-center items-center">
            <input required @keydown.enter="sendNotification" v-model="phoneNumber" placeholder="Your phone"
              class="w-full rounded-full bg-transparent h-16 ring-1 text-xl ring-white/20 sm:col-span-2 outline-none ps-6" />
            <Button :disabled="btnIsLoading" @click="sendNotification"
              class="w-1/2 group h-16 disabled:cursor-not-allowed  hover:bg-transparent ring-1 ring-white/20 hover:text-white text-xl rounded-full disabled:bg-gray-400 bg-white gap-3 text-main-300"
              size="lg">
              <p class="md:text-2xl">
                Send
              </p>
              <span
                class="w-1/3 group-hover:bg-white inline-block bg-main-300 h-[1.8px] relative before:absolute before:right-0 before:top-1/2 before:h-full before:w-2 group-hover:before:bg-white group-hover:after:bg-white before:rotate-45 before:bg-main-300 before:origin-right after:absolute after:right-0 after:w-2 after:h-full after:bg-main-300 before:transition-colors after:transition-colors transition-colors after:origin-right after:-rotate-45 after:top-1/2 after:-translate-y-1/2 before:-translate-y-1/2">
              </span>
            </Button>
          </div>
          <div class="py-[10vh] grid grid-cols-2 gap-5 sm:grid-cols-3 text-center">
            <div class="box">
              <h6 class="text-lg text-white/70">Email</h6>
              <p class="text-sm mt-1 text-white/40">devfawzey@gmail.com</p>
            </div>
            <div class="box">
              <h6 class="text-lg text-white/70">Work time</h6>
              <p class="text-sm mt-1 text-white/40">Monday - Friday<br />9:00 AM - 6:00 PM</p>
            </div>
            <div class="box">
              <h6 class="text-lg text-white/70">Call us</h6>
              <p class="text-sm mt-1 text-white/40">01220314609 <br />
                9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
