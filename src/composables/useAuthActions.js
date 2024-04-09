import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

export default function useAuthActions() {
  const auth = useFirebaseAuth()
  const googleProvider = new GoogleAuthProvider()
  const loading = ref(false)

  const router = useRouter()
  const route = useRoute()

  async function loginWithGoogle() {
    try {
      loading.value = true
      const response = await signInWithPopup(auth, googleProvider)
      if (response.user) {
        const { redirect } = route.query
        let redirectTo = '/dashboard'

        if (redirect) {
          redirectTo = redirect
        }

        router.push(redirectTo)
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    try {
      loading.value = true
      await signOut(auth)
      router.push({ name: 'login' })
    } catch (error) {
      console.error('error', error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    loginWithGoogle,
    logout
  }
}
