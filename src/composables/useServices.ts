import AuthServices from '@/services/auth/services'
import TaskServices from '@/services/task/services'
import ProjectServices from '@/services/projects/services'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { useFirebaseAuth } from 'vuefire'
import { firebaseApp } from '@/libs/firebase'

export function useServices() {
  const auth = useFirebaseAuth()!
  const googleProvider = new GoogleAuthProvider()

  const database = getFirestore(firebaseApp)

  return {
    auth: AuthServices(auth, googleProvider),
    task: TaskServices(database),
    project: ProjectServices(database),
  }
}
