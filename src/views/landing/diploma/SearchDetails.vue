<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getDiploma } from '@/api/diplomas'

import '@github/relative-time-element'
import Skeleton from 'primevue/skeleton'
import Messsage from 'primevue/message'

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
  user: {
    id: null,
    name: null,
    email: null,
  },
  emittedAt: null,
})

const code = router.currentRoute.value.params?.code
const messageOnNotFound = 'No se encontró un diploma con ese código'

if (!code) {
  router.push({
    name: 'landing.index',
  })
}

getDiploma(code)
  .then(({ data, status }) => {
    if (status === 404) {
      notFound.value = true
    }

    if (status === 200) {
      isLoading.value = false
      diploma.value = data
    }
  })
  .finally(() => {
    isLoading.value = false
  })
</script>

<template>
  <div class="flex flex-col gap-6 pb-16">
    <section
      class="container mx-auto max-w-8xl flex flex-col gap-6 mt-32 p-8 bg-indigo-50 rounded-md"
    >
      <header>
        <h2 class="font-bold text-2xl">Información del diploma</h2>
        <p>
          Aqui encontrarás toda la información del diploma desde el momento de
          tu emisión
        </p>
      </header>

      <Skeleton
        class="bg-gray-300"
        width="100%"
        height="8rem"
        v-if="isLoading"
      />

      <div class="flex flex-col gap-8" v-else-if="!isLoading && !notFound">
        <div class="grid grid-cols-4">
          <div class="col-span-1">
            <label class="block font-bold">Estudiante</label>
            <p class="mt-1 text-sm">
              {{ diploma.user.name }}
            </p>
          </div>
          <div class="col-span-1">
            <label class="block font-bold">Institución</label>
            <p class="mt-1 text-sm">
              {{ diploma.organization.name }}
            </p>
          </div>
          <div class="col-span-1">
            <label class="block font-bold">Programa</label>
            <p class="mt-1 text-sm">
              {{ diploma.program }}
            </p>
          </div>
          <div class="col-span-1">
            <label class="block font-bold">Emisión</label>
            <p class="mt-1 text-sm">
              <relative-time :datetime="diploma.emittedAt" format="datetime" />
            </p>
          </div>
        </div>
      </div>

      <Messsage severity="error" v-else> {{ messageOnNotFound }}</Messsage>
    </section>

    <section
      class="container mx-auto max-w-8xl flex flex-col gap-6 p-8 bg-indigo-50 rounded-md"
    >
      <header>
        <h2 class="font-bold text-2xl">Diploma en la red</h2>
        <p>
          Aqui esta el documento real que fue subido por la institución
          universitaria
          <b v-if="diploma.organization.name">{{
            diploma.organization.name
          }}</b>
        </p>
      </header>

      <Skeleton
        class="bg-gray-300"
        width="100%"
        height="8rem"
        v-if="isLoading"
      />

      <object
        class="h-[500px]"
        v-else-if="!isLoading && !notFound"
        data="https://itfip.comunisoft.com/diplomas/SEGURIDAD%20INFORMATICA1003568506.pdf#view=fit"
      >
        <Messsage severity="error" v-if="!isLoading && !diploma.document">
          {{ messageOnNotFound }}</Messsage
        >
      </object>

      <Messsage severity="error" v-else-if="notFound">
        {{ messageOnNotFound }}</Messsage
      >
    </section>
  </div>
</template>
