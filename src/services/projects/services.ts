import type { Project } from '@/entities/Project'
import { collection, getDocs, query, where } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'

export default (database: Firestore) => ({
  async getAllProjects(userId: string) {
    const q = query(collection(database, 'projects'), where('userId', '==', userId))

    const snapshot = await getDocs(q)

    const projects: Project[] = snapshot.docs.map(doc => {
      return {
        projectId: doc.id,
        ...doc.data(),
      } as Project
    })

    return { projects }
  },
})
