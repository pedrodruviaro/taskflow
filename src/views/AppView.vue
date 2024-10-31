<script setup lang="ts">
import HeaderLoader from '@/components/App/Header/Loader.vue'
import Header from '@/components/App/Header/Header.vue'
import Main from '@/components/App/Main/Main.vue'
import SidebarLoader from '@/components/App/Sidebar/Loader.vue'
import Sidebar from '@/components/App/Sidebar/Sidebar.vue'
import InfoWidgetLoader from '@/components/App/InfoWidget/Loader.vue'
import InfoWidget from '@/components/App/InfoWidget/InfoWidget.vue'
import NewTaskLoader from '@/components/App/NewTask/Loader.vue'
import NewTask from '@/components/App/NewTask/NewTask.vue'
import TaskListLoader from '@/components/App/TaskList/Loader.vue'
import TaskList from '@/components/App/TaskList/TaskList.vue'
import TaskCard from '@/components/App/TaskList/Card.vue'
import Button from 'primevue/button'
import { useTaskCreate } from '@/composables/task/useTaskCreate'
import { useCurrentUser } from 'vuefire'
import { onMounted, type Ref } from 'vue'
import { useTaskList } from '@/composables/task/useTaskList'
import { useProjectList } from '@/composables/project/useProjectList'
import type { User } from 'firebase/auth'

const user = useCurrentUser() as Ref<User | null>

const { projects, loading: loadingProjects, getProjects } = useProjectList({ user })
const { tasks, loading: loadingTasks, selectedFilter, loadMoreTasks, getByFilter } = useTaskList({ user })
const { title, loading: loadingCreate, errors, createTask } = useTaskCreate({ user })

// const { complete, loading: loadingComplete } = useTaskComplete()
// const { remove, loading: loadingRemove } = useTaskRemove()
// const { edit, loading: loadingEdit } = useTaskEdit()

// const { reports, getReport, loading: loadingReports } = useReport()

onMounted(async () => {
  await Promise.all([
    getByFilter('daily'),
    getProjects(),
    // getReport('daily') <- returns totalTasks, completedTasks and openTasks
  ])
})
</script>

<template>
  <div>
    <HeaderLoader :loading="false">
      <Header />
    </HeaderLoader>

    <!-- {{ selectedFilter }} -->

    <div class="grid gap-4 lg:grid-cols-[1fr_3fr] lg:gap-0 calc-height">
      <SidebarLoader :loading="loadingProjects">
        <Sidebar
          :projects="projects"
          @daily="getByFilter('daily')"
          @all-tasks="getByFilter('all')"
          @completed="getByFilter('completed')"
          @project="(id: string) => getByFilter('project', id)"
        />
      </SidebarLoader>

      <Main title="A title">
        <InfoWidgetLoader :loading="loadingTasks">
          <InfoWidget />
        </InfoWidgetLoader>

        <NewTaskLoader :loading="loadingTasks">
          <NewTask @submited="createTask" v-model:title="title" :errors="errors" :loading="loadingCreate" />
        </NewTaskLoader>

        <TaskListLoader :loading="loadingTasks" :amount="5">
          <TaskList class="mt-4">
            <TaskCard
              v-for="task in tasks"
              :key="task.taskId"
              :task="task"
              @complete="id => console.log('* -> complete', id)"
              @remove="id => console.log('* -> remove', id)"
            />
          </TaskList>
        </TaskListLoader>

        <Button @click="loadMoreTasks()" size="small" severity="secondary">Carregar mais</Button>
      </Main>
    </div>
  </div>
</template>

<style scoped>
.calc-height {
  min-height: calc(100vh - 53px);
}
</style>
