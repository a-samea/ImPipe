<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()


import LoginButton from '@/components/loginButton.vue'
import ApiInput from '@/components/apiInput.vue'
import AddressInput from '@/components/addressInput.vue'



const apikey = ref('')

const loading = ref(false)

const inputError = ref(false)

const loginHandler = async () => {
  loading.value = true
    authStore.isLoggedIn = true
    router.push({ name: 'first' })
}

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <form
      class="border-rorange-500 border shadow-sm shadow-rorange-700 rounded-2xl px-8 pt-6 pb-4 w-full max-w-md "
      @submit.prevent="loginHandler"
    >
      <div class="text-center mb-8">
        <img
          src="/icon.png"
          alt="App Icon"
          class="w-24 h-24 mx-auto border border-rorange-400 rounded-full"
        />
        <h1 class="text-3xl font-normal mt-5 text-shark-200">Authentication</h1>
      </div>
      <div class="mb-9">
        <AddressInput v-model:model-value="apikey" :error="inputError" />
      </div>
      <div class="mb-9">
        <ApiInput v-model:model-value="apikey" :error="inputError" />
      </div>
      <div class="flex items-center justify-center mb-3">
        <LoginButton :loading="loading" />
      </div>
    </form>
  </div>
</template>
