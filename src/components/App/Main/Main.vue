<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <main class="p-4 lg:p-6 bg-zinc-50 space-y-4">
    <h1 class="font-medium text-xl" v-if="props.title">{{ props.title }}</h1>

    <slot />
  </main>
</template>
