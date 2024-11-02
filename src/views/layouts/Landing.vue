<script setup>
import SearchDiploma from '@/components/diploma/SearchDiploma.vue'
import Button from 'primevue/button'
</script>

<template>
  <header class="fixed z-10 w-full">
    <nav class="bg-white border-gray-200 py-6 dark:bg-gray-900">
      <div
        class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"
      >
        <a href="/" class="flex items-center">
          <img
            src="/images/logo.png"
            class="h-6 mr-3 sm:h-9"
            alt="Landwind Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            Hermes
          </span>
        </a>
        <div class="flex items-center">
          <RouterLink :to="{ name: 'auth.login' }">
            <Button class="text-white"> Iniciar sesión </Button>
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <div class="flex flex-col flex-grow">
    <RouterView />
  </div>

  <footer class="bg-white dark:bg-gray-800">
    <div class="max-w-screen-xl mx-auto p-6">
      <div class="text-center">
        <a
          href="#"
          class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="/images/logo.png"
            class="h-6 mr-3 sm:h-9"
            alt="Landwind Logo"
          />
          Hermes
        </a>
        <span
          class="block text-sm text-center text-gray-500 dark:text-gray-400"
        >
          Construido con ❤️ por Duban Oviedo, Jorge Castellon y Alejandro Acosta
        </span>
      </div>
    </div>
  </footer>
</template>
