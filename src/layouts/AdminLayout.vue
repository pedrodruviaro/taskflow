<script setup>
import { useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import BaseWrapper from '@/components/BaseWrapper.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import useAuthActions from '@/composables/useAuthActions'

const user = useCurrentUser()
const router = useRouter()
const { logout } = useAuthActions()

const username = computed(() => {
  return user?.value?.displayName.split(' ')[0]
})

function handleNavigateToDashboard() {
  router.push({ name: 'dashboard' })
}

function handleNavigateToNewProject() {
  router.push({ name: 'dashboard' })
}

function handleLogout() {
  logout()
}
</script>

<template>
  <div>
    <div v-if="!user">
      <p>Carregando...</p>
    </div>

    <div v-else>
      <AdminHeader
        :username="username"
        :avatarUrl="user.photoURL"
        @navigate-to-dashboard="handleNavigateToDashboard"
        @navigate-to-new-project="handleNavigateToNewProject"
        @logout="handleLogout"
      />
      <main>
        <BaseWrapper>
          <slot />
        </BaseWrapper>
      </main>
    </div>
  </div>
</template>
