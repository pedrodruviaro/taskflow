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
import { ref } from 'vue'

const loading = ref(false)
</script>

<template>
  <div>
    <HeaderLoader :loading="loading">
      <Header />
    </HeaderLoader>

    <div class="grid gap-4 lg:grid-cols-[1fr_3fr] lg:gap-0 calc-height">
      <SidebarLoader :loading="loading">
        <Sidebar />
      </SidebarLoader>

      <Main title="A title">
        <InfoWidgetLoader :loading="loading">
          <InfoWidget />
        </InfoWidgetLoader>

        <NewTaskLoader :loading="loading">
          <NewTask />
        </NewTaskLoader>

        <TaskListLoader :loading="loading" :amount="3">
          <TaskList />
        </TaskListLoader>
      </Main>
    </div>
  </div>
</template>

<style>
.calc-height {
  min-height: calc(100vh - 53px);
}
</style>
