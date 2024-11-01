<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const auth = ref({
  email: 'jhon@example.com',
  password: null,
})

function handleLogin() {
  router.push({
    name: 'app.dashboard',
  })
}
</script>

<template>
  <section
    class="container mx-auto my-auto max-w-lg flex flex-col gap-6 p-8 bg-gray-200 rounded-md"
  >
    <header>
      <h2 class="font-bold text-center text-2xl">Iniciar sesión</h2>
    </header>

    <form @submit.prevent="handleLogin" class="flex flex-col gap-4 p-4">
      <div class="flex flex-col gap-2">
        <label class="block font-medium text-gray-700">Email</label>
        <input
          type="email"
          class="w-full p-2 rounded-md border-2 border-gray-300"
          placeholder="Email"
          required
          v-model="auth.email"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label class="block font-medium text-gray-700">Contraseña</label>
        <input
          type="password"
          class="w-full p-2 rounded-md border-2 border-gray-300"
          placeholder="Contraseña"
          required
          minlength="8"
          v-model="auth.password"
        />
      </div>
      <button
        type="submit"
        class="w-full flex justify-center py-2 px-4 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Iniciar sesión
      </button>
    </form>
  </section>
</template>
