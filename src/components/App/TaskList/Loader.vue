<script setup lang="ts">
import Skeleton from 'primevue/skeleton'

const props = withDefaults(
  defineProps<{
    loading: boolean
    amount?: number
  }>(),
  { amount: 4 },
)
</script>

<template>
  <div v-if="props.loading" class="grid gap-4">
    <Skeleton
      width="100%"
      height="100px"
      v-for="i in amount"
      :key="`list-loader-${i}`"
    />
  </div>

  <slot v-else />
</template>
