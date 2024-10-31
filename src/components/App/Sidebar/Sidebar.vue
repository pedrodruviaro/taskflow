<script setup lang="ts">
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import type { Project } from '@/entities/Project'

const props = defineProps<{
  projects: Project[]
}>()

const emits = defineEmits<{
  (e: 'daily'): void
  (e: 'all-tasks'): void
  (e: 'completed'): void
  (e: 'project', id: string): void
}>()
</script>

<template>
  <aside class="card shadow relative grid grid-rows-[max-content_1fr_max-content]">
    <div class="p-4 pb-0 lg:p-6 lg:pb-0">
      <Button
        label="Hoje"
        severity="secondary"
        text
        icon="pi pi-calendar"
        class="flex w-full"
        style="justify-content: left"
        @click="emits('daily')"
      />
      <Button
        label="Tarefas"
        severity="secondary"
        text
        icon="pi pi-list"
        class="flex w-full"
        style="justify-content: left"
        @click="emits('all-tasks')"
      />
      <Button
        label="Concluídas"
        severity="secondary"
        text
        icon="pi pi-check"
        class="flex w-full"
        style="justify-content: left"
        @click="emits('completed')"
      />
      <Divider />
    </div>

    <div class="flex flex-col px-4 lg:px-6">
      <span>Projetos</span>
      <Button
        v-for="project in props.projects"
        severity="secondary"
        text
        icon="pi pi-tag"
        class="flex w-full"
        style="justify-content: left"
        :icon-class="project.color ?? undefined"
        :label="project.name"
        @click="emits('project', project.projectId)"
      />
      <!-- @todo -> check color classes not rendering on first load -->
    </div>

    <div class="p-4 lg:p-6 mt-auto">
      <Divider />
      <Button label="Novo Projeto" icon="pi pi-plus" severity="secondary" icon-pos="right" class="flex w-full" />
    </div>
  </aside>
</template>
