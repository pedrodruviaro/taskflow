<script setup lang="ts">
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>

<template>
  <aside
    class="card shadow relative grid grid-rows-[max-content_1fr_max-content]"
  >
    <div class="p-4 pb-0 lg:p-6 lg:pb-0">
      <Button
        label="Hoje"
        severity="secondary"
        text
        icon="pi pi-calendar"
        class="flex w-full"
        style="justify-content: left"
      />
      <Button label="Tarefas" severity="secondary" text icon="pi pi-list" />
      <Button
        label="Concluídas"
        severity="secondary"
        text
        icon="pi pi-check"
        class="flex w-full"
        style="justify-content: left"
      />
      <Divider />
    </div>

    <div class="flex flex-col px-4 lg:px-6">
      <span>Projetos</span>
      <Button
        label="Projeto 1"
        severity="secondary"
        text
        icon="pi pi-tag"
        class="flex w-full"
        icon-class="text-purple-400"
        style="justify-content: left"
      />
    </div>

    <div class="p-4 lg:p-6 mt-auto">
      <Divider />
      <Button
        label="Novo Projeto"
        icon="pi pi-plus"
        severity="secondary"
        icon-pos="right"
        class="flex w-full"
      />
    </div>
  </aside>
</template>
