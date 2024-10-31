<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import type { Task } from '@/entities/Task'

const props = defineProps<{
  task: Task
}>()

const emits = defineEmits<{
  (e: 'complete', id: string): void
  (e: 'remove', id: string): void
}>()
</script>

<template>
  <Card>
    <template #content>
      <div class="grid gap-2">
        <p class="text-sm">{{ props.task.title }}</p>
        <div>
          <Button icon="pi pi-check" text size="small" @click="emits('complete', task.taskId)" />
          <Button icon="pi pi-trash" text size="small" @click="emits('remove', task.taskId)" />
        </div>
      </div>
    </template>
  </Card>
</template>
