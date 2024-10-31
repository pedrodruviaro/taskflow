import { signInWithPopup, signOut } from 'firebase/auth'
import type { Auth, AuthProvider } from 'firebase/auth'

export default (auth: Auth, provider: AuthProvider) => ({
  async login() {
    const response = await signInWithPopup(auth, provider)
    return response
  },

  async logout() {
    await signOut(auth)
  },
})
