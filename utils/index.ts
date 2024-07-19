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

export { NAVIGATION_LINKS, SOCIAL_LINKS, WORK_PROJECTS }