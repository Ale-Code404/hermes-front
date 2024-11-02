<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const router = useRouter()
const props = defineProps({
  code: {
    type: String,
    default: null,
  },
})

const form = ref({
  code: props.code,
})

function handleSubmit() {
  router.push({
    name: 'landing.diploma.details',
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

    <Button
      type="submit"
      class="dark:text-white"
      label="Cancelar"
      :disabled="!form.code"
    >
      Verificar
    </Button>
  </form>
</template>
