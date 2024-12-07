<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="flex items-center h-full">
    <div class="container flex flex-col items-center justify-center mx-auto space-y-5 text-center sm:max-w-xl">
      <span class="mi text-9xl text-blue-950">cloud_alert</span>
      <p class="text-3xl font-semibold text-blue-950">The server is Disconnected/Offline</p>
      <p class="text-lg text-bgray-700">
        You need to be connected to the server for the app to function correctly. Input login info on top for stablishing a connection.
      </p>
      <RouterLink
        rel="noopener noreferrer"
        to="/help"
        class="mt-4 text-blue-600 hover:underline"
      >
        For more info check out Help
      </RouterLink>
    </div>
  </section>
</template>
