import { ref, watchEffect, type Ref } from 'vue'
import { useServices } from '@/composables/useServices'
import { useToast } from 'primevue/usetoast'
import { z } from 'zod'
import { Timestamp } from 'firebase/firestore'
import type { ZodFormattedError } from 'zod'
import type { User } from 'firebase/auth'
import type { Task } from '@/entities/Task'

interface UseTaskCreateOptions {
  user: Ref<User | null>
}

const schema = z.object({
  title: z.string().min(1),
})

export function useTaskCreate({ user }: UseTaskCreateOptions) {
  const services = useServices()
  const toast = useToast()

  const loading = ref(false)
  const title = ref('')
  const userId = ref<string | undefined>()
  const errors = ref<ZodFormattedError<Task>>()

  watchEffect(() => {
    if (!user.value) return
    userId.value = user.value.uid
  })

  const createTask = async () => {
    if (!userId.value) return

    const result = schema.safeParse({ title: title.value })
    if (!result.success) {
      errors.value = result.error.format()
      return
    }

    try {
      loading.value = true

      const response = await services.task.create({
        finishIn: Timestamp.fromDate(new Date()),
        projectId: null,
        title: title.value,
        userId: userId.value,
        completed: false,
      })

      toast.add({
        summary: 'Sucesso',
        detail: 'Tarefa criada',
        life: 2000,
        severity: 'success',
      })

      return response
    } catch (error) {
      console.log(error)

      toast.add({
        summary: 'Algo falhou',
        detail: 'Tente criar novamente',
        life: 2000,
        severity: 'error',
      })
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    title,
    errors,
    createTask,
  }
}
