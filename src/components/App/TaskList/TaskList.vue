<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
</script>

<template>
  <Card>
    <template #content>
      <div class="grid gap-2">
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
          facilis dolore necessitatibus iste quaerat deserunt porro libero!
          Sunt, accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nam porro necessitatibus exercitationem est fugiat nisi sunt
          aliquid itaque earum dolorum?
        </p>
        <div>
          <Button icon="pi pi-check" text size="small" />
          <Button icon="pi pi-trash" text size="small" />
        </div>
      </div>
    </template>
  </Card>
</template>
