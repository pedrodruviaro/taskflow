import type { Timestamp } from 'firebase/firestore'

export interface Task {
  taskId: string
  userId: string
  projectId: string | null
  title: string
  completed: boolean
  createdAt: Timestamp
  finishIn: Timestamp
}
