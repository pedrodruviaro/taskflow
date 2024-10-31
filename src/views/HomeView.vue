<script setup lang="ts">
import { useAuthActions } from '@/composables/auth/useAuthActions'
import Button from 'primevue/button'

const { loading, login, logout } = useAuthActions()
</script>

<template>
  <div>
    <h1>Home View</h1>
    <div class="grid gap-2 justify-start">
      <Button label="Entrar com google" @click="login" :loading />
      <Button label="Sair" @click="logout" :loading />
    </div>
  </div>
</template>
