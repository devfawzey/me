<script setup>

const { showNav, hideNav, getGithubTranslateX } = useGsap()
const nav = ref(null)
const githubBtn = ref(null)
const navtrigger = ref(null)
const isNavActive = ref(false);
const route = useRoute()


const debounceGetGithubTranslateX = useDebounceFn(() => getGithubTranslateX(isNavActive.value), 750, { maxWait: 4000 })

onMounted(() => {
  getGithubTranslateX(isNavActive.value)
  window.addEventListener('resize', debounceGetGithubTranslateX)
})

watch(isNavActive, async (newValue) => {
  if (newValue) {
    showNav()
  } else {
    await hideNav()
  }
})

onClickOutside(nav, () => {
  if (!isNavActive) return;
  isNavActive.value = false
}, { ignore: [navtrigger, githubBtn] })

watch(() => route.path, () => {
  isNavActive.value = false
})

</script>


<template>
  <div class="nav__with__overlay  select-none" :class="{ 'is-active': isNavActive }">
    <nav ref="nav"
      class="nav z-30 h-full translate-x-full fixed w-full sm:w-auto top-0 right-0 bg-main-300  pt-[15vh] pb-[10vh] px-[7.5vw]">
      <AppNavigationContent />
    </nav>
    <!-- OVERLAY -->
    <div class="overlay-system w-full h-full bg-overlay  z-20 fixed top-0 left-0" />
    <!-- NAV_TRIGGER -->
    <AppNavigationTrigger ref="navtrigger" @toggle-nav="isNavActive = !isNavActive" />
    <div class="github_btn  flex items-center z-[35] fixed  top-6 right-24">
      <a ref="githubBtn" href="https://github.com/devfawzey" target="_blank"
        class="rounded-full flex items-center justify-center border-0 hover:bg-main-100 hover:text-white  w-[50px] h-[50px] text-xl transition-colors bg-main-100 text-white">
        <Icon name="mingcute:github-fill" />
      </a>
      <span
        class="github_content  text-xs absolute left-full translate-x-2 opacity-0 text-white/60">MooFawzey<br />
        on
        Github</span>
    </div>
  </div>
</template>

<style scoped>
.bg-overlay {
  background: linear-gradient(to right, hsla(220, 13%, 0%, .3) 40%, hsla(220, 13%, 0%, 1) 80%);
  opacity: 0;
  pointer-events: none;
  /* transition: opacity .8s cubic-bezier(.7, 0, .2, 1) */
}


.is-active .overlay-system {
  /* opacity: 0.5; */
  pointer-events: all;
}

.is-active .github_btn span.github_content {
  opacity: 0.75
}
</style>