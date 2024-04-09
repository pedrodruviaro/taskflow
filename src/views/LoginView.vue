<script setup>
import LoginHero from '@/components/LoginHero.vue'
import useAuthActions from '@/composables/useAuthActions'

const { loading, loginWithGoogle } = useAuthActions()

function handleLogin() {
  loginWithGoogle()
}
</script>

<template>
  <main class="bg-brand-yellow-50 min-h-screen">
    <LoginHero :loading="loading" @wants-to-login="handleLogin" />
  </main>
</template>
