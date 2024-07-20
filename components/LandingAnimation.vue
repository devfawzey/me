<template>
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
