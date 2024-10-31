import { useServices } from '@/composables/useServices'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export function useAuthActions() {
  const services = useServices()
  const router = useRouter()

  const loading = ref(false)

  const login = async () => {
    try {
      loading.value = true

      await services.auth.login()
      router.push('/app')
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      loading.value = true

      await services.auth.logout()
      router.push('/')
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    login,
    logout,
  }
}
