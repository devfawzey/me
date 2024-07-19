<script setup>

const route = useRoute()
// 01142022546
</script>
<template>
 <div class="loading-container fixed top-0 left-0 h-[100vh] w-full pointer-events-none z-50">
  <div class="loading-screen top-0 bg-[#141517] z-50 pointer-events-auto cursor-wait">
   <!-- <div class="loading-screen top-full bg-[#141517]"> -->
   <div class="rounded-div-wrap top absolute top-0 w-full -translate-y-full scale-y-[-1]">
    <div
     class="rounded-div h-[745%] bg-[#141517] w-[150%] absolute left-1/2 rounded-[50%] z-[40] -translate-x-1/2 -translate-y-[85%]">
    </div>
   </div>
   <div class="loading-words z-[200000] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <!-- <Button @click="usNavigateTo('anfdasf')">CHange</Button> -->
    <h1 class="text-4xl font-semibold text-white capitalize">{{ route.name == 'index' ? 'Work' : route.name }}</h1>
   </div>

   <div class="rounded-div-wrap bottom h-[10vh] absolute bottom-0 w-full z-50 translate-y-full">
    <div
     class="rounded-div  h-[745%] bg-[#141517] w-[150%] absolute left-1/2 rounded-[50%] -translate-x-1/2 -translate-y-[85%]">
    </div>
   </div>
  </div>
 </div>
</template>

<style >
.loading-screen {
 position: absolute;
 width: 100%;
 height: 100%;
 z-index: 200;
 /* top: 100%; */
 /* top: 60%; */
 left: 0;
}
</style>