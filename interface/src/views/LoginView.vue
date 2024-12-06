<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()


import LoginButton from '@/components/LoginButton.vue'
import ApiInput from '@/components/APIInput.vue'
import AddressInput from '@/components/AddressInput.vue'



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
      class="border-blue-600 border shadow-sm shadow-gray-950 rounded-xl px-8 pt-6 pb-4 w-full max-w-md "
      @submit.prevent="loginHandler"
      autocomplete="off"
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
        <AddressInput v-model:model-value="apikey" :error="inputError"/>
      </div>
      <div class="mb-9">
        <ApiInput v-model:model-value="apikey" :error="inputError"/>
      </div>
      <div class="flex items-center justify-center mb-3">
        <LoginButton :loading="loading" tabindex="3"/>
      </div>
    </form>
  </div>
</template>
