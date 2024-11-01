<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const router = useRouter()

const form = ref({
  code: null,
})

function handleSubmit() {
  router.push({
    name: 'diploma.details',
    params: {
      code: form.value.code,
    },
  })
}
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
    <InputText
      type="text"
      size="large"
      placeholder="Buscar por código"
      v-model="form.code"
    />

    <Button class="dark:text-white" label="Cancelar" :disabled="!form.code">
      Verificar
    </Button>
  </form>
</template>
