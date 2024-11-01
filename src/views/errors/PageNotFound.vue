<template>
  <section
    class="container mx-auto flex flex-col items-center gap-6 mt-24 p-8 rounded-md"
  >
    <header class="flex items-center flex-col gap-4 dark:text-white">
      <p class="text-8xl">404</p>
      <h3 class="text-4xl">La página no existe</h3>
      <p>Parece que la página ya no existe o el recurso fue eliminado</p>
    </header>

    <router-link
      to="/"
      class="text-center p-4 px-6 bg-indigo-500 rounded-md text-white font-bold hover:bg-indigo-600 outline-none focus:outline-2 focus:outline-indigo-600 disabled:bg-gray-400 duration-150 text-lg"
    >
      Ir al inicio
    </router-link>
  </section>
</template>
