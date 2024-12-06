<!-- Done -->
<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  modelValue: string
  error?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const focused = ref(false)

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="w-52">
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <span
          class="mi text-xl transition-colors duration-200"
          :class="{
            'text-bgray-950': !focused && !props.error,
            'text-blue-700': focused && !props.error,
            'text-red-600': props.error,
          }"
          >host</span
        >
      </div>
      <input
        id="ip-address"
        type="text"
        class="block w-full px-9 py-2.5 bg-bgray-50 border-1 rounded-lg font-sans text-bgray-950 focus:text-blue-700 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-colors duration-200 placeholder-transparent border-bgray-950 peer"
        @focus="focused = true"
        @blur="focused = false"
        placeholder="IP Address"
        :class="{
          'border-red-600 focus:border-red-600 focus:ring-red-600/50 focus:text-red-600 text-red-600':
            props.error,
        }"
        @input="updateValue"
        autofocus
      />
      <label
        class="absolute text-sm duration-200 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-transparent px-8 peer-[&:not(:placeholder-shown)]:bg-bgray-50 peer-[&:not(:placeholder-shown)]:px-2 peer-focus:bg-bgray-50 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 start-2.5 pointer-events-none transition-all peer"
        :class="{
            'text-bgray-950': !focused && !props.error,
            'text-blue-700': focused && !props.error,
            'text-red-600': props.error,
        }"
        for="ip-address"
        >IP Address</label
      >
      <p
        v-if="props.error"
        class="absolute -top-2 right-2.5 text-sm text-red-600 font-sans flex items-center gap-1 transform scale-75 origin-top-right bg-bgray-50 px-2 z-20"
      >
        <span class="mi text-lg">error</span>
        <span>Invalid IP</span>
      </p>
    </div>
  </div>
</template>
