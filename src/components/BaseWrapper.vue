<script setup>
const props = defineProps({
  as: {
    type: String,
    required: false,
    default: 'div'
  }
})
</script>

<template>
  <Component :is="props.as" class="container py-10 lg:py-16">
    <slot />
  </Component>
</template>
