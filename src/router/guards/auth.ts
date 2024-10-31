import { getCurrentUser } from 'vuefire'
import type { RouteLocationNormalized } from 'vue-router'

export default async (to: RouteLocationNormalized) => {
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      return {
        path: '/',
      }
    }
  }
}
