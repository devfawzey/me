<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from '@/components/ui/tooltip'
</script>

<template>
 <TooltipProvider>
  <Tooltip>
   <TooltipTrigger as-child>
    <slot name="trigger" />
   </TooltipTrigger>
   <TooltipContent>
    <slot name="message" />

   </TooltipContent>
  </Tooltip>
 </TooltipProvider>
</template>