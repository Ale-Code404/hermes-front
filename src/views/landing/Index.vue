<script setup>
import SearchDiploma from '@/components/diploma/SearchDiploma.vue'
import Button from 'primevue/button'
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
        >
          Verificación de diplomas al alcance de un click
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          Nuestro sistema utiliza la tecnología Blockchain para brindar una
          solución segura y transparente para la verificación de diplomas.
          Simplifica la autenticación de credenciales académicas, eliminando el
          riesgo de fraudes y errores manuales. Ahora las instituciones,
          empresas y estudiantes pueden confiar en una plataforma moderna y
          eficiente para validar credenciales al instante.
        </p>
      </div>
      <img
        class="hidden lg:col-span-5 lg:flex place-self-center h-96"
        src="/images/landing/check.svg"
        alt="Verificación de diplomas"
      />
    </div>
  </section>

  <section class="bg-white dark:bg-gray-800">
    <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
      <div class="grid grid-cols-2 gap-x-16">
        <SearchDiploma
          class="col-span-1 my-auto"
          code="38682067-6307-4e44-b44a-ff8f5d3f8943"
        />
        <div class="col-span-1">
          <h2 class="text-4xl font-extrabold dark:text-white">
            Busca tu diploma de forma rápida y segura
          </h2>
          <p class="dark:text-gray-400 mt-4">
            Con Hermes, puedes buscar tu diploma de forma rápida y segura, sin
            tener que esperar a que se genere el certificado digital.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div
      class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6"
    >
      <div class="col-span-2 mb-8">
        <h2
          class="mt-3 mb-4 text-2xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white"
        >
          Certificación segura y verificada al instante
        </h2>
      </div>
      <div
        class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
      >
        <div>
          <svg
            class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h3 class="mb-2 text-2xl font-bold dark:text-white">
            Seguridad inquebrantable
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Certificaciones inalterables gracias a la protección Blockchain.
          </p>
        </div>
        <div>
          <svg
            class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
            ></path>
          </svg>
          <h3 class="mb-2 text-2xl font-bold dark:text-white">
            Verificación en tiempo real
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Credenciales confirmadas en tiempo real para empresas y
            universidades.
          </p>
        </div>
        <div>
          <svg
            class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h3 class="mb-2 text-2xl font-bold dark:text-white">
            Transparencia y confianza
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Registro visible y confiable de cada verificación académica.
          </p>
        </div>
        <div>
          <svg
            class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            ></path>
          </svg>
          <h3 class="mb-2 text-2xl font-bold dark:text-white">
            Ahorro de tiempo y recursos
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Automatización que ahorra tiempo y costos en verificación de
            diplomas.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
