import type { Timestamp } from 'firebase/firestore'

export interface Project {
  projectId: string
  userId: string
  name: string
  color: string | null
  createdAt: Timestamp
}
