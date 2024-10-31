<script setup lang="ts">
import Skeleton from 'primevue/skeleton'

const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading" class="grid grid-cols-[1fr_42px] gap-2">
    <Skeleton width="100%" height="42px" />
    <Skeleton width="42px" height="42px" />
  </div>

  <slot v-else />
</template>
