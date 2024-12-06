<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import APIInput from '@/components/APIInput.vue';
import AddressInput from '@/components/AddressInput.vue';

const authStore = useAuthStore();

const apikey = ref('');
const inputError = ref(false);
</script>


<template>
  <header class="z-50 h-16 border-b border-bgray-200 bg-bgray-50 shadow-sm">
    <nav class="flex h-full items-center justify-between px-6">
      <div class="flex items-center gap-3">
        <img src="/icon.png" alt="App Logo" class="w-9 h-9" />
        <span class="text-xl font-semibold text-accent-950">Impendace Tube</span>
      </div>
      <div class="flex items-center gap-4">

        <AddressInput v-model:modelValue="apikey" :error="!inputError"/>
        <APIInput v-model:modelValue="apikey" :error="!inputError"/>
        <button class="flex items-center gap-2">
          <span class="mi text-2xl">settings</span>
          <span class="text-sm font-semibold">Settings</span>
        </button>
        <button class="flex items-center gap-2">
          <span class="mi text-2xl">logout</span>
          <span class="text-sm font-semibold">Logout</span>
        </button>
      </div>
    </nav>
  </header>
</template>
