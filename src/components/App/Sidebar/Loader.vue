<script setup lang="ts">
import Skeleton from 'primevue/skeleton'

const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading">
    <Skeleton width="100%" height="100%" />
  </div>

  <slot v-else />
</template>
