<script setup>
import { ref } from 'vue'
import Menu from 'primevue/menu'

const props = defineProps({
  avatarUrl: {
    type: String
  },
  username: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['navigate-to-dashboard', 'navigate-to-new-project', 'logout'])

const menuItems = [
  {
    label: 'Dashboard',
    icon: 'pi pi-chart-line',
    command: () => emits('navigate-to-dashboard')
  },
  {
    label: 'Novo Projeto',
    icon: 'pi pi-plus',
    command: () => emits('navigate-to-new-project')
  },
  {
    separator: true
  },
  {
    label: 'Sair',
    icon: 'pi pi-sign-out',
    command: () => emits('logout')
  }
]

const menu = ref()

function toggle(event) {
  menu.value?.toggle(event)
}
</script>

<template>
  <header class="shadow-md">
    <div class="container py-2.5 flex items-center justify-between">
      <RouterLink to="/dashboard" aria-label="Dashboard" class="flex items-center gap-2">
        <img src="/logo.svg" aria-hidden="true" alt="Logo" class="w-7 h-7" />
        <p class="font-bold text-xl md:text-2xl">TaskFlow</p>
      </RouterLink>

      <div class="items-center">
        <button
          class="flex gap-2 items-center"
          aria-haspopup="true"
          aria-controls="header-auth-menu"
          @click="toggle"
        >
          <span class="text-base">Olá, {{ props.username }}</span>

          <div class="w-9 h-9 rounded-full overflow-hidden">
            <img :src="props.avatarUrl" alt="Foto de perfil do usuário" v-if="props.avatarUrl" />
            <span v-else class="block w-full h-full bg-zinc-400 animate-pulse"></span>
          </div>
        </button>
      </div>

      <Menu ref="menu" :model="menuItems" :popup="true"></Menu>
    </div>
  </header>
</template>
