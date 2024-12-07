<script lang="ts" setup>
import { useToastStore } from '@/stores/toastStore'

const toastStore = useToastStore()
</script>
<template>
  <TransitionGroup
    name="toast"
    tag="div"
    class="fixed top-20 right-4 z-50 flex flex-col-reverse gap-3 overflow-visible"
    enter-active-class="transition-all duration-200 ease-out"
    enter-from-class="opacity-0 translate-x-4"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-8"
  >
    <div
      v-for="toast in toastStore.toasts"
      :key="toast.id"
      class="flex items-start w-80 px-3 py-2 text-bgray-950 bg-bgray-50/50 rounded-lg border"
      :class="{
        'border-green-600': toast.type === 'success',
        'border-gold-600': toast.type === 'warning',
        'border-red-600': toast.type === 'error',
      }"
      role="alert"
    >
      <span class="mi text-green-600 text-2xl" v-if="toast.type === 'success'"
        >check_circle</span
      >
      <span
        class="mi text-gold-600 text-2xl"
        v-else-if="toast.type === 'warning'"
        >warning</span
      >
      <span class="mi text-red-600 text-2xl" v-else>error</span>

      <div class="ms-2 text-sm font-normal flex-1 break-words line-clamp-2">
        {{ toast.message }}
      </div>
      <button
        type="button"
        @click="toastStore.removeToast(toast.id)"
        class="ms-2 p-0.5 -mt-0.5 -mb-2 inline-flex items-center justify-center size-7 relative"
        >
        <span
          class="mi text-sm absolute"
          :class="{
            'text-green-600': toast.type === 'success',
            'text-gold-600': toast.type === 'warning',
            'text-red-600': toast.type === 'error',
          }"
          >close</span
        >
        <svg
          class="size-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current text-bgray-200/50"
            stroke-width="1.5"
          ></circle>
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current transition-all duration-100"
            :class="{
              'text-green-600': toast.type === 'success',
              'text-gold-600': toast.type === 'warning',
              'text-red-600': toast.type === 'error',
            }"
            stroke-width="1.5"
            stroke-dasharray="100"
            :stroke-dashoffset="toast.percentage"
            stroke-linecap="round"
          ></circle>
        </svg>
      </button>
    </div>
  </TransitionGroup>
</template>
