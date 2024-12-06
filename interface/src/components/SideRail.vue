<script lang="ts" setup>

</script>


<template>
  <aside class="fixed left-0 top-0 z-40 h-screen w-16 border-r border-gray-200 bg-white shadow-sm">
    <nav class="flex h-full flex-col items-center justify-between py-4">
      <!-- Top Section -->
      <div class="flex flex-col items-center gap-4">
        <a href="#" class="flex h-16 w-16 flex-col items-center justify-center gap-1 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
          </svg>
          <small class="text-xs font-medium">Home</small>
        </a>
      </div>

      <!-- Bottom Section -->
      <div class="flex flex-col items-center gap-4">
        <a href="#" class="flex h-16 w-16 flex-col items-center justify-center gap-1 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <small class="text-xs font-medium">Settings</small>
        </a>
      </div>
    </nav>
  </aside>
</template>
