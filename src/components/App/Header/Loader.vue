<script setup lang="ts">
import Skeleton from 'primevue/skeleton'

const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <header
    class="py-2.5 border-b flex justify-between items-center flex-wrap gap-2 px-4 lg:px-6"
    v-if="props.loading"
  >
    <Skeleton width="10rem" height="1.5rem" />
    <Skeleton shape="circle" width="2rem" height="2rem" />
  </header>

  <slot v-else />
</template>
