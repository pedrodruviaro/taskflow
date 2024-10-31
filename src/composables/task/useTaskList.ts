import { ref, watchEffect } from 'vue'
import { useServices } from '@/composables/useServices'
import type { User } from 'firebase/auth'
import type { Ref } from 'vue'
import type { Task } from '@/entities/Task'

export interface UseTaskListOptions {
  user: Ref<User | null>
}

export type FilterType = 'daily' | 'all' | 'completed' | 'project'

export interface GetTasksOptions {
  filterType: FilterType
  projectId?: string
  resetTasks?: boolean
}

export function useTaskList({ user }: UseTaskListOptions) {
  const services = useServices()

  const pageSize = 30
  const lastDoc = ref<any>(null)

  const loading = ref(false)
  const tasks = ref<Task[]>([])
  const selectedFilter = ref<FilterType>('daily')

  const userId = ref<string>()

  watchEffect(() => {
    if (!user.value) return
    userId.value = user.value.uid
  })

  const getTasks = async ({ filterType, projectId, resetTasks = false }: GetTasksOptions) => {
    if (!userId.value) return

    try {
      loading.value = true

      if (resetTasks) {
        tasks.value = []
        lastDoc.value = null
      }

      const response = await services.task.getTasks({
        filterType,
        userId: userId.value,
        pageSize,
        lastDoc: lastDoc.value,
        projectId,
      })

      if (!response) return

      tasks.value.push(...response.tasks)
      lastDoc.value = response.lastDoc
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  const loadMoreTasks = async (projectId?: string) => {
    if (lastDoc.value) {
      await getTasks({ filterType: selectedFilter.value, projectId })
    }
  }

  const getByFilter = (newFilter: FilterType, projectId?: string) => {
    selectedFilter.value = newFilter
    getTasks({ filterType: newFilter, projectId, resetTasks: true })
  }

  return {
    loading,
    tasks,
    selectedFilter,
    getTasks,
    getByFilter,
    loadMoreTasks,
  }
}
