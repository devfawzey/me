<script setup lang="ts">

const emit = defineEmits<{ (e: 'toggleNav'): void }>()

const toggleNav = () => {
  emit("toggleNav")
}

</script>
<template>
  <button class="bg-indigo-600 z-40 hamburger hamburger--spin cursor-pointer rounded-full inline-flex item-center justify-center 
  fixed top-6 right-10" @click="toggleNav" type="button">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<style>
:root {
  --ham-padding: 15px;
  --ham-transition: 0.15s;
  --ham-width: 22.5px;
  --ham-height: 2px;
  --ham-color: #455ce9;
}

.hamburger {
  width: 50px;
  height: 50px;
  padding: var(--ham-padding) var(--ham-padding);
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: var(--ham-transition);
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: var(--ham-color);
  border: 0;
  margin: 0;
  overflow: visible;
}

.hamburger:hover {
  opacity: 0.9;
}

.nav__with__overlay.is-active .hamburger:hover {
  opacity: 0.9;
}

.nav__with__overlay.is-active .hamburger .hamburger-inner,
.nav__with__overlay.is-active .hamburger .hamburger-inner::before,
.nav__with__overlay.is-active .hamburger .hamburger-inner::after {
  background-color: white;
}

.hamburger-box {
  min-width: var(--ham-width);
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: var(--ham-width);
  height: var(--ham-height);
  background-color: white;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -6px;
}

.hamburger-inner::after {
  bottom: -6px;
}

.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}

.hamburger--spin .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.nav__with__overlay.is-active .hamburger--spin .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.nav__with__overlay.is-active .hamburger--spin .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}

.nav__with__overlay.is-active .hamburger--spin .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>