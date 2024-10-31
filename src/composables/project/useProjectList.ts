import { ref, watchEffect, type Ref } from 'vue'
import { useServices } from '@/composables/useServices'
import type { Project } from '@/entities/Project'
import type { User } from 'firebase/auth'

export interface UseProjectListOptions {
  user: Ref<User | null>
}

export function useProjectList({ user }: UseProjectListOptions) {
  const services = useServices()

  const loading = ref(false)
  const projects = ref<Project[]>([])
  const userId = ref()

  watchEffect(() => {
    if (!user.value) return
    userId.value = user.value.uid
  })

  const getProjects = async () => {
    if (!userId.value) return

    try {
      loading.value = true

      const response = await services.project.getAllProjects(userId.value)

      if (!response.projects) return
      projects.value = response.projects
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    projects,
    getProjects,
  }
}
