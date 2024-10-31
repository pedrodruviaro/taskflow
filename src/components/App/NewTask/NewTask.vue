<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import type { ZodFormattedError } from 'zod'
import type { Task } from '@/entities/Task'

const props = defineProps<{
  errors?: ZodFormattedError<Task>
  loading: boolean
}>()

const emits = defineEmits<{
  (e: 'submited'): void
}>()

const title = defineModel<string>('title')
</script>

<template>
  <div>
    <form
      @submit.prevent="emits('submited')"
      class="grid grid-cols-[1fr_max-content] gap-2"
    >
      <InputText
        placeholder="Digite sua tarefa e aperte [enter]"
        size="small"
        v-model="title"
        :invalid="!!props.errors?.title"
      />
      <Button icon="pi pi-plus" type="submit" :loading="props.loading" />
    </form>
  </div>
</template>
