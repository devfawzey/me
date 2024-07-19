import gsap from "gsap"
import { EasePack } from "gsap/EasePack"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import SplitType from "split-type"
import mixitup from "mixitup"

gsap.registerPlugin(EasePack)
gsap.registerPlugin(ScrollToPlugin)

export default defineNuxtPlugin((nuxtApp) => {

 nuxtApp.provide("gsap", gsap);
 nuxtApp.provide("split", SplitType);
 nuxtApp.provide("mixitup", mixitup);


})