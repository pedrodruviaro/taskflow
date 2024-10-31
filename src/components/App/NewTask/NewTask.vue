<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
</script>

<template>
  <div>
    <form class="grid grid-cols-[1fr_max-content] gap-2">
      <InputText
        placeholder="Digite sua tarefa e aperte [enter]"
        size="small"
      />
      <Button icon="pi pi-plus" type="submit" />
    </form>
  </div>
</template>
