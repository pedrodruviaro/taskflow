<script setup lang="ts">
import Image from '@/assets/images/login-image.jpg'
import BaseWrapper from '@/components/BaseWrapper.vue'
import Button from 'primevue/button'

const props = defineProps({
  loading: {
    required: true,
    type: Boolean
  }
})

const emits = defineEmits(['wants-to-login'])
</script>

<template>
  <BaseWrapper class="grid gap-8 md:grid-cols-2 md:items-center lg:gap-8">
    <div>
      <h1 class="font-bold text-2xl lg:text-3xl mb-6 max-w-[20ch]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </h1>
      <p class="font-base mb-4 max-w-[45ch]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus et odio pariatur
        necessitatibus vel quod unde harum animi nam, possimus exercitationem sed voluptatem
        explicabo impedit facilis quas sequi!
      </p>
      <Button
        icon="pi pi-google"
        icon-pos="right"
        label="Entrar com o google"
        :loading="props.loading"
        @click="emits('wants-to-login')"
      />
    </div>
    <div class="relative">
      <p
        class="bg-zinc-50 border-2 border-zinc-950 max-w-max px-4 py-2 rounded-lg absolute bottom-[48%] left-[-20px] lg:left-[-40px] text-2xl lg:text-3xl font-semibold flex items-center gap-2"
      >
        <img src="/logo.svg" alt="Logo" aria-hidden="true" class="w-6 h-6" />
        TaskFlow
      </p>
      <div class="overflow-hidden rounded-lg border-2 border-zinc-950 max-w-max mx-auto">
        <img :src="Image" alt="Login image" aria-hidden="true" class="w-full h-full object-cover" />
      </div>
    </div>
  </BaseWrapper>
</template>
