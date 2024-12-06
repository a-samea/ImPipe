<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import APIInput from '@/components/APIInput.vue';
import AddressInput from '@/components/AddressInput.vue';
import AuthButton from '@/components/AuthButton.vue';
import ServerStatus from '@/components/ServerStatus.vue';

const authStore = useAuthStore();

const apikey = ref('');
const inputError = ref(false);
const loading = ref(false);
const isLoggedIn = ref(false);
</script>


<template>
  <header class="z-50 h-16 border-b border-bgray-200 bg-bgray-50 shadow-sm">
    <nav class="flex h-full items-center justify-between px-6">
      <div class="flex items-center gap-3">
        <img src="/icon.png" alt="App Logo" class="w-9 h-9" />
        <span class="text-xl font-semibold text-accent-950">Impendace Tube</span>
        <ServerStatus :connected="!true" :live="!true"/>
      </div>
      <div class="flex items-center gap-2">

        <AddressInput v-model:modelValue="apikey" :error="inputError" :disabled="!true"/>
        <APIInput v-model:modelValue="apikey" :error="inputError" :disabled="!true"/>
        <AuthButton :loading="loading" @click="console.log('salam')" :loggedIn="!isLoggedIn"/>
      </div>
    </nav>
  </header>
</template>
