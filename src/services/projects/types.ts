import type { FilterType } from '@/composables/task/useTaskList'
import type { Task } from '@/entities/Task'

export type CreateOptions = Pick<Task, 'projectId' | 'completed' | 'userId' | 'finishIn' | 'title'>

export interface GetTasksOptions {
  filterType: FilterType
  userId: string
  pageSize: number
  lastDoc?: any
  projectId?: string
}
