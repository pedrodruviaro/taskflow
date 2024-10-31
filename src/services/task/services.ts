import {
  addDoc,
  collection,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  startAfter,
  Timestamp,
  where,
} from 'firebase/firestore'
import { query } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'
import type { CreateOptions, GetTasksOptions } from './types'
import type { Task } from '@/entities/Task'

export default (database: Firestore) => ({
  async create({ userId, projectId, title, completed, finishIn }: CreateOptions) {
    const taskData = {
      userId,
      projectId,
      title,
      completed,
      finishIn,
      createdAt: Timestamp.fromDate(new Date()),
    }

    const response = await addDoc(collection(database, 'tasks'), taskData)
    return { taskId: response.id, ...taskData } as Task
  },

  // async getCount(userId: string) {
  //   const today = new Date()
  //   const startOfDay = Timestamp.fromDate(new Date(today.setHours(0, 0, 0, 0)))
  //   const endOfDay = Timestamp.fromDate(new Date(today.setHours(23, 59, 59, 999)))

  //   const tasksRef = collection(database, 'tasks')

  //   const countQuery = query(
  //     tasksRef,
  //     where('userId', '==', userId),
  //     where('finishIn', '>=', startOfDay),
  //     where('finishIn', '<=', endOfDay),
  //   )

  //   const countSnapshot = await getCountFromServer(countQuery)
  //   const totalTasks = countSnapshot.data().count // Total de tarefas do dia
  //   console.log(totalTasks)

  //   return { totalTasks }
  // },

  async getTasks({ filterType, userId, pageSize, lastDoc, projectId }: GetTasksOptions) {
    const tasksRef = collection(database, 'tasks')
    let queryMount

    switch (filterType) {
      case 'daily':
        const today = new Date()
        const startOfDay = Timestamp.fromDate(new Date(today.setHours(0, 0, 0, 0)))
        const endOfDay = Timestamp.fromDate(new Date(today.setHours(23, 59, 59, 999)))

        queryMount = query(
          tasksRef,
          where('userId', '==', userId),
          where('completed', '==', false),
          where('finishIn', '>=', startOfDay),
          where('finishIn', '<=', endOfDay),
          orderBy('finishIn', 'desc'),
          limit(pageSize),
          ...(lastDoc ? [startAfter(lastDoc)] : []),
        )
        break

      case 'completed':
        queryMount = query(
          tasksRef,
          where('userId', '==', userId),
          where('completed', '==', true),
          orderBy('finishIn', 'desc'),
          limit(pageSize),
          ...(lastDoc ? [startAfter(lastDoc)] : []),
        )
        break

      case 'all':
        queryMount = query(
          tasksRef,
          where('userId', '==', userId),
          where('completed', '==', false),
          orderBy('finishIn', 'desc'),
          limit(pageSize),
          ...(lastDoc ? [startAfter(lastDoc)] : []),
        )
        break

      case 'project':
        if (!projectId) throw new Error('Missing Project ID')

        queryMount = query(
          tasksRef,
          where('userId', '==', userId),
          where('completed', '==', false),
          where('projectId', '==', projectId),
          orderBy('finishIn', 'desc'),
          limit(pageSize),
          ...(lastDoc ? [startAfter(lastDoc)] : []),
        )
        break
      default:
        return
    }

    const querySnapshot = await getDocs(queryMount)

    const tasks: Task[] = querySnapshot.docs.map(doc => {
      return {
        taskId: doc.id,
        ...doc.data(),
      } as Task
    })

    const newLastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]

    return { tasks, lastDoc: newLastDoc }
  },
})
