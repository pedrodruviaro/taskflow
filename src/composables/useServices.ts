import AuthServices from '@/services/auth/services'
import { GoogleAuthProvider } from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'

export function useServices() {
  const auth = useFirebaseAuth()!
  const googleProvider = new GoogleAuthProvider()

  return {
    auth: AuthServices(auth, googleProvider),
  }
}
