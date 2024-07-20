import type { List, WorkProjects } from "~/types";
import workProjectsData from "./work.json";

const NAVIGATION_LINKS: List[] = [
    { text: "work", route: "/" },
    // { text: "home", route: "/" },
    { text: "about", route: "/about" },
    { text: "contact", route: "/contact" },
]

const SOCIAL_LINKS: List[] = [
    // { text: "instagram", route: "https://vuejs.org/" },
    { text: "whatsapp", route: "https://wa.link/t3bbud", icon: "ph:whatsapp-logo" },
    { text: "facebook", route: "https://www.facebook.com/mohammed.fawzy.3956/", icon: "ph:facebook-logo" },
    { text: "linkedin", route: "https://www.linkedin.com/in/mohammed-fawzey-4202a4316/", icon: "ph:linkedin-logo" }
]

// 1- [innovate,commerce-hope,hager-ui,movies,.store,traders-academy,pexels Ecommerce,restaurant,nix]


// zindexes {loading-50 => btns(40) =>navigation-menu(30) => overlay(20) => menu(10)}




const WORK_PROJECTS: WorkProjects[] = workProjectsData

const STACKS = [
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
const SERVICES = [
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

export { NAVIGATION_LINKS, SOCIAL_LINKS, WORK_PROJECTS, STACKS, SERVICES }