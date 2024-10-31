<script setup lang="ts">
import Card from 'primevue/card'
</script>

<template>
  <Card>
    <template #content>
      <div class="grid gap-4 md:grid-cols-3">
        <div class="flex text-center flex-col justify-between gap-2">
          <span class="font-bold text-purple-400 text-3xl">10</span>
          <span class="text-zinc-500">Tarefas</span>
        </div>

        <div class="flex text-center flex-col justify-between gap-2">
          <span class="font-bold text-purple-400 text-3xl">2</span>
          <span class="text-zinc-500">Concluídas</span>
        </div>

        <div class="flex text-center flex-col justify-between gap-2">
          <span class="font-bold text-purple-400 text-3xl">103</span>
          <span class="text-zinc-500">no total</span>
        </div>
      </div>
    </template>
  </Card>
</template>
