import gsap from "gsap"
export default function useGsap() {

 const { $gsap } = useNuxtApp() as any
 const theGsap = $gsap || gsap
 const tl = theGsap.timeline()
 const githubTranslateX = ref<string>('0')
 const usIsNavActive = ref(false)

 // targets
 const nav = "nav.nav";
 const github_btn = ".github_btn"
 const github_content = ".github_btn span.github_content"
 const line = ".line"
 const overlay = ".overlay-system"
 const listItem = 'ul.vertical li'

 // gsap_options
 const overlayTime = .8
 const power = "power4.inOut";
 const duration = 0.8;
 const listEase = "slow(0.7,0.7,false)";
 const ease = power;
 const githubEase = ease
 const overlayEase = ease
 // github_overlay_nav_list

 const showNav = () => {
  // first github
  tl.to(github_btn, { x: githubTranslateX.value, ease: ease, duration }) //.8
  tl.to(github_content, { opacity: 1, ease: ease, duration: .3 }, "=-.6") //.8
  tl.to(overlay, { opacity: .35, ease: ease, duration }, "=-.8") // 1
  tl.to(nav, { x: 0, opacity: 1, ease: ease, duration }, "=-0.8")
  tl.fromTo(line, { width: "0" }, { width: "100%", ease: ease, duration }, "=-0.5")
  // list
  for (let [ind, __] of new Array(3).entries()) {
   tl.fromTo(`ul.vertical li:nth-child(${ind + 1}) h1`, { y: '80px', opacity: .3 }, { y: 0, duration: `0.${ind + 5}`, ease: listEase, opacity: 1 }, `=-0.6`)
  }
 }

 const hideNav = async () => {
  return await new Promise((res) => {
   $gsap.to(nav, { x: '100%', opacity: 0.95, duration, ease })
   $gsap.to(overlay, { opacity: 0, duration, ease })
   $gsap.to(github_content, { opacity: 0, duration: .3, ease })
   $gsap.to(github_btn, { x: '0', opacity: 1, ease: githubEase }).then(() => res(''))
  })
 }

 const getGithubTranslateX: any = (isNavActiveValue: boolean) => {
  // -right + 6rem + 25px(boxSize/2)
  const githubBtnWidth = 50
  const githubRight = 96
  // resize || mounted || onTriggerClick
  const contentWidth = document.querySelector(".nav__content-upper")?.clientWidth ?? 318;
  const navWidth = document.querySelector("nav.nav")?.clientWidth ?? 485;
  githubTranslateX.value = `-${contentWidth + (navWidth - contentWidth) / 2 - githubRight - githubBtnWidth}px`
  if (isNavActiveValue) {
   $gsap.to(github_btn, { x: githubTranslateX.value, opacity: 1, duration: overlayTime, ease: githubEase })
  }
 }


 return { showNav, hideNav, getGithubTranslateX, usIsNavActive }

}