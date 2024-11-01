<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getDiploma } from '@/api/diplomas'

const router = useRouter()

const isLoading = ref(true)
const notFound = ref(false)

const diploma = ref({
  id: null,
  program: null,
  organization: {
    name: null,
    email: null,
  },
  student: {
    name: null,
    email: null,
  },
  emittedAt: null,
})

const code = router.currentRoute.value.params?.code

if (!code) {
  router.push({
    name: 'landing',
  })
}

getDiploma(code)
  .then(({ data, status }) => {
    if (status === 404) {
      notFound.value = true
    }

    if (status === 200) {
      diploma.value.id = data.data.id
      diploma.value.program = data.data.program
      diploma.value.organization.name = data.data.organization.name
      diploma.value.organization.email = data.data.organization.email
      diploma.value.student.name = data.data.student.name
      diploma.value.student.email = data.data.student.email
      diploma.value.emittedAt = data.data.emittedAt

      isLoading.value = false
    }
  })
  .finally(() => {
    isLoading.value = false
  })
</script>

<template>
  <section
    class="container mx-auto max-w-6xl flex flex-col gap-6 mt-24 p-8 bg-indigo-50 rounded-md"
  >
    <header>
      <h2 class="font-bold text-2xl">Información del diploma</h2>
      <p>
        Aqui encontrarás toda la información del diploma desde el momento de tu
        emisión
      </p>
    </header>

    <div class="grid grid-cols-4 p-4" v-if="!isLoading && !notFound">
      <div class="col-span-1">
        <label class="block font-medium text-gray-700">Estudiante</label>
        <p class="mt-1 text-sm text-gray-500">
          {{ diploma.student.name }}
        </p>
      </div>
      <div class="col-span-1">
        <label class="block font-medium text-gray-700">Institución</label>
        <p class="mt-1 text-sm text-gray-500">
          {{ diploma.organization.name }}
        </p>
      </div>
      <div class="col-span-1">
        <label class="block font-medium text-gray-700">Programa</label>
        <p class="mt-1 text-sm text-gray-500">
          {{ diploma.program }}
        </p>
      </div>
      <div class="col-span-1">
        <label class="block font-medium text-gray-700">Emisión</label>
        <p class="mt-1 text-sm text-gray-500">
          {{ diploma.emittedAt }}
        </p>
      </div>
    </div>

    <div class="p-2 bg-red-400 rounded-md" v-if="!isLoading && notFound">
      <p>No se encontró el diploma con ese código</p>
    </div>
  </section>
</template>
