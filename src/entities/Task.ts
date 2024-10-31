export interface Task {
  taskId: string
  userId: string
  projectId: string | null
  title: string
  completed: boolean
  createdAt: Date
  finishIn: Date
}
