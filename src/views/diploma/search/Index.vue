<script setup lang="ts">
import SearchDiploma from '@/components/diploma/SearchDiploma.vue'
</script>

<template>
  <section
    class="container mx-auto max-w-4xl flex flex-col gap-6 mt-24 p-8 bg-indigo-50 rounded-md"
  >
    <header class="flex flex-col gap-2">
      <h2 class="text-4xl">Verificación de diploma</h2>
      <p>
        Las instituciones que hagan parte de la red segura de
        <em>Hermes</em> pueden emitir tu diploma académico para que puedas
        verificarlo en línea y en cualquier momento.
      </p>
    </header>

    <SearchDiploma class="py-4" />
  </section>
</template>
