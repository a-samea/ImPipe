<!--Done-->
<script lang="ts" setup>
import { useConnectionStore } from '@/stores/connectionStore'
const connectionStore = useConnectionStore()
import { RouterLink } from 'vue-router'

import APIInput from '@/components/APIInput.vue'
import AddressInput from '@/components/AddressInput.vue'
import AuthButton from '@/components/AuthButton.vue'
import ServerStatus from '@/components/ServerStatus.vue'
</script>

<template>
  <header class="z-50 h-16 border-b border-bgray-200 bg-bgray-50 shadow-sm">
    <nav class="flex h-full items-center justify-between px-4">
      <div class="flex items-center gap-3">
        <RouterLink to="/" class="flex items-center gap-3">
          <img src="/icon.png" alt="App Logo" class="w-9 h-9" />
          <span class="text-xl font-semibold text-accent-950 align-baseline"
            >Impendace Tube</span
          >
        </RouterLink>
        <ServerStatus
          :connected="connectionStore.isConnected"
          :live="!connectionStore.isWaiting"
        />
      </div>
      <div class="flex items-center gap-2">
        <AddressInput
          v-model:modelValue="connectionStore.IP_INPUT"
          :error="connectionStore.isIPInvalid"
          :disabled="connectionStore.isConnected"
        />
        <APIInput
          v-model:modelValue="connectionStore.API_KEY_INPUT"
          :error="connectionStore.isApiKeyInvalid"
          :disabled="connectionStore.isConnected"
        />
        <AuthButton
          :loading="connectionStore.isLoading"
          @click="connectionStore.message"
          :loggedIn="connectionStore.isConnected"
        />
      </div>
    </nav>
  </header>
</template>
