<script setup lang="ts">
import Avatar from 'primevue/avatar'
import { useCurrentUser } from 'vuefire'

const user = useCurrentUser()
</script>

<template>
  <header
    class="py-2.5 border-b flex justify-between items-center flex-wrap gap-2 px-4 lg:px-6"
  >
    <span class="font-mono text-2xl lg:text-3xl font-semibold">TaskFlow</span>
    <Avatar
      v-if="user"
      :image="user?.photoURL || undefined"
      class="mr-2"
      size="normal"
      shape="circle"
    />
  </header>
</template>
